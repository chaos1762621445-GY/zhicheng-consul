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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const url = `/blog/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
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

  const SITE_URL = "https://zhicheng-consul.vercel.app";
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
      </div>

      <Footer />
    </main>
  );
}
