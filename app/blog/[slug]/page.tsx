import { getPost, getAllPosts } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import NavClient from "../../components/NavClient";
import Footer from "../../components/Footer";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

// 所有文章构建时已知：非预生成的 slug（如正文残留的占位链接 /blog/联系方式）
// 一律走 404 而非动态渲染抛 500
export const dynamicParams = false;

// 从正文 Markdown 提取 FAQ 问答对（### Q...：问题 + **A：** 答案），用于 FAQPage 结构化数据
function extractFaq(markdown: string): { q: string; a: string }[] {
  const faqs: { q: string; a: string }[] = [];
  const lines = markdown.split(/\r?\n/);
  let curQ: string | null = null;
  let curA: string[] = [];
  const flush = () => {
    if (curQ) {
      const a = curA
        .join(" ")
        .replace(/\*\*A[：:]\*\*/g, "")
        .replace(/^\s*A[：:]\s*/, "")
        .replace(/[*_`>#-]/g, "")
        .replace(/\s+/g, " ")
        .trim();
      const q = curQ.replace(/[*_`#]/g, "").replace(/\s+/g, " ").trim();
      if (q && a) faqs.push({ q, a });
    }
    curQ = null;
    curA = [];
  };
  for (const line of lines) {
    const qm = line.match(/^###\s*Q\d*\s*[：:、.\s]\s*(.+?)\s*$/);
    if (qm) {
      flush();
      curQ = qm[1];
      continue;
    }
    // 遇到新的二/三级标题（非 Q），结束当前问答
    if (/^##\s/.test(line) || (/^###\s/.test(line) && !/^###\s*Q/.test(line))) {
      flush();
      continue;
    }
    if (curQ !== null && line.trim()) curA.push(line.trim());
  }
  flush();
  return faqs;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const url = `/blog/${slug}`;
  // 站点级身份长尾词：追加到每篇文章 keywords，让中文口语搜索词也能匹配到本站文章
  // （在日华人真实搜的是"日本补助金 中文""在日华人 补助金 申请"这类身份词，而非专业术语）
  const IDENTITY_KEYWORDS = [
    "在日华人补助金",
    "日本补助金中文",
    "在日华人企业补助金",
    "日本补助金代办中文",
    "在日华人 补助金 申请",
    "日本政府补助金 华人",
  ];
  const mergedKeywords = Array.from(
    new Set([...(post.keywords || []), ...IDENTITY_KEYWORDS])
  );
  return {
    title: post.title,
    description: post.excerpt,
    keywords: mergedKeywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "志成コンサル",
      locale: "zh_CN",
      publishedTime: post.date || undefined,
      authors: ["株式会社 志成コンサル"],
      images: ["/logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/logo.png"],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  // 正文开头的 "# 标题" 和首段导语与页面 header 的 title/excerpt 重复，渲染前剥掉
  let body = post.content.replace(/^\s*#\s+.*(\r?\n)+/, "");
  // 若紧接着的首段与 excerpt 高度重合，也一并去除
  if (post.excerpt) {
    const firstPara = body.split(/\r?\n\r?\n/)[0]?.trim() ?? "";
    const norm = (s: string) => s.replace(/[\s。.…]/g, "");
    if (firstPara && norm(post.excerpt).startsWith(norm(firstPara).slice(0, 20))) {
      body = body.replace(/^[\s\S]*?(\r?\n\r?\n)/, "");
    }
  }
  const processed = await remark().use(html).process(body);
  const contentHtml = processed.toString();

  // 内链：按 keywords 交集排序挑 3 篇相关文章（无交集则用最近文章补足）
  const allPosts = await getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      p,
      score: (p.keywords || []).filter((k) => (post.keywords || []).includes(k)).length,
    }))
    .sort((a, b) => b.score - a.score || (a.p.date < b.p.date ? 1 : -1))
    .slice(0, 3)
    .map((s) => s.p);

  const SITE_URL = "https://shisei-consult.jp";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    inLanguage: "zh-CN",
    keywords: (post.keywords || []).join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
    author: { "@type": "Organization", name: "株式会社 志成コンサル" },
    publisher: {
      "@type": "Organization",
      name: "株式会社 志成コンサル",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首页", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "知识库", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${slug}` },
    ],
  };

  // FAQ 结构化数据：从正文自动提取问答，命中可吃 Google FAQ 富摘要
  const faqPairs = extractFaq(post.content);
  const faqJsonLd =
    faqPairs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqPairs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <NavClient />

      <div className="article-wrap">
        <div className="article-header">
          <Link href="/blog" className="article-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            返回知识库
          </Link>
          <div className="article-date">{post.date}</div>
          <h1 className="article-title">{post.title}</h1>
          {post.excerpt && <p className="article-excerpt">{post.excerpt}</p>}
        </div>

        <div className="article-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <div style={{ margin: "64px 0", background: "linear-gradient(150deg,#124442,#1a5c5a)", borderRadius: "var(--r-lg)", padding: "40px", maxWidth: 760 }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 10, letterSpacing: "-0.4px" }}>
            想了解自己能申请哪些补助金？
          </h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", marginBottom: 24, lineHeight: 1.7 }}>
            3分钟免费自测，志成コンサル专业团队为您精准匹配方案，无成功不收费
          </p>
          <Link href="/contact" className="btn-primary">
            免费测试我的资格
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {related.length > 0 && (
          <div style={{ margin: "0 0 64px", maxWidth: 760 }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#1d1d1f", marginBottom: 20, letterSpacing: "-0.4px" }}>
              相关阅读
            </h3>
            <div style={{ display: "grid", gap: 12 }}>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "18px 22px",
                    background: "#fff",
                    border: "1px solid #e7f1f1",
                    borderRadius: "var(--r-lg)",
                    textDecoration: "none",
                    transition: "border-color .2s",
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#1a5c5a", lineHeight: 1.5 }}>
                    {r.title}
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c4a23a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, flexShrink: 0 }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
