import { getPostLocalized, getAllPostsLocalized } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";
import Link from "next/link";
import NavClient from "./NavClient";
import { PILLAR_LINKS } from "@/lib/pillars/links";
import Footer from "./Footer";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localizedHref } from "@/lib/i18n/href";
import { localeOg, localeHreflang, type Locale } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/i18n/metadata";

const UI = {
  zh: { back: "返回知识库", ctaTitle: "想了解自己能申请哪些补助金？", ctaDesc: "3分钟免费自测，志成コンサル专业团队为您精准匹配方案，无成功不收费", ctaBtn: "免费测试我的资格", related: "相关阅读", home: "首页", blog: "知识库" },
  en: { back: "Back to Insights", ctaTitle: "Want to know which subsidies you qualify for?", ctaDesc: "A 3-minute free self-check. Shisei Consulting's expert team matches you with the right plan — no approval, no fee.", ctaBtn: "Check My Eligibility for Free", related: "Related Reading", home: "Home", blog: "Insights" },
  ja: { back: "お役立ち情報に戻る", ctaTitle: "自社が申請できる補助金を知りたいですか？", ctaDesc: "3分の無料セルフチェック。志成コンサルの専門家チームが最適プランをマッチング、不採択なら無料。", ctaBtn: "無料で受給資格をチェック", related: "関連記事", home: "ホーム", blog: "お役立ち情報" },
} as const;

// 从正文 Markdown 提取 FAQ 问答对
function extractFaq(markdown: string): { q: string; a: string }[] {
  const faqs: { q: string; a: string }[] = [];
  const lines = markdown.split(/\r?\n/);
  let curQ: string | null = null;
  let curA: string[] = [];
  const flush = () => {
    if (curQ) {
      const a = curA.join(" ").replace(/\*\*A[：:]\*\*/g, "").replace(/^\s*A[：:]\s*/, "").replace(/[*_`>#-]/g, "").replace(/\s+/g, " ").trim();
      const q = curQ.replace(/[*_`#]/g, "").replace(/\s+/g, " ").trim();
      if (q && a) faqs.push({ q, a });
    }
    curQ = null;
    curA = [];
  };
  for (const line of lines) {
    const qm = line.match(/^###\s*Q\d*\s*[：:、.\s]\s*(.+?)\s*$/);
    if (qm) { flush(); curQ = qm[1]; continue; }
    if (/^##\s/.test(line) || (/^###\s/.test(line) && !/^###\s*Q/.test(line))) { flush(); continue; }
    if (curQ !== null && line.trim()) curA.push(line.trim());
  }
  flush();
  return faqs;
}

export async function blogParamsFor(locale: Locale) {
  const posts = await getAllPostsLocalized(locale);
  return posts.map((p) => ({ slug: p.slug }));
}

export async function blogMetadataFor(locale: Locale, slug: string) {
  const post = await getPostLocalized(slug, locale);
  if (!post) return {};
  const path = `/blog/${slug}`;
  const canonical = locale === "zh" ? path : `/${locale}${path}`;
  const IDENTITY_KEYWORDS = locale === "zh"
    ? ["在日华人补助金", "日本补助金中文", "在日华人企业补助金", "日本补助金代办中文", "在日华人 补助金 申请", "日本政府补助金 华人"]
    : locale === "en"
    ? ["Japan subsidy for Chinese businesses", "Japan government subsidy support", "hojokin application English", "subsidy consulting Japan"]
    : ["在日中国人 補助金", "日本 補助金 申請サポート", "外国人経営者 補助金", "補助金 中国語サポート"];
  const mergedKeywords = Array.from(new Set([...(post.keywords || []), ...IDENTITY_KEYWORDS]));
  return {
    title: post.title,
    description: post.excerpt,
    keywords: mergedKeywords,
    alternates: {
      canonical,
      languages: {
        "zh-Hans": `${SITE_URL}${path}`,
        en: `${SITE_URL}/en${path}`,
        ja: `${SITE_URL}/ja${path}`,
        "x-default": `${SITE_URL}${path}`,
      },
    },
    openGraph: {
      type: "article" as const,
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}${canonical}`,
      siteName: "志成コンサル",
      locale: localeOg[locale],
      publishedTime: post.date || undefined,
      authors: ["株式会社 志成コンサル"],
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}

export default async function BlogArticle({ locale, slug }: { locale: Locale; slug: string }) {
  const post = await getPostLocalized(slug, locale);
  if (!post) notFound();
  const ui = UI[locale];
  const L = (p: string) => localizedHref(locale, p);
  const dict = getDictionary(locale);

  let body = post.content.replace(/^\s*#\s+.*(\r?\n)+/, "");
  if (post.excerpt) {
    const firstPara = body.split(/\r?\n\r?\n/)[0]?.trim() ?? "";
    const norm = (s: string) => s.replace(/[\s。.…]/g, "");
    if (firstPara && norm(post.excerpt).startsWith(norm(firstPara).slice(0, 20))) {
      body = body.replace(/^[\s\S]*?(\r?\n\r?\n)/, "");
    }
  }
  const processed = await remark().use(html).process(body);
  const contentHtml = processed.toString();

  const allPosts = await getAllPostsLocalized(locale);
  const related = allPosts
    .filter((p) => p.slug !== slug)
    .map((p) => ({ p, score: (p.keywords || []).filter((k) => (post.keywords || []).includes(k)).length }))
    .sort((a, b) => b.score - a.score || (a.p.date < b.p.date ? 1 : -1))
    .slice(0, 3)
    .map((s) => s.p);

  const canonical = locale === "zh" ? `/blog/${slug}` : `/${locale}/blog/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    inLanguage: localeHreflang[locale] === "zh-Hans" ? "zh-CN" : localeHreflang[locale],
    keywords: (post.keywords || []).join(", "),
    image: [`${SITE_URL}/opengraph-image`],
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${canonical}` },
    author: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "株式会社 志成コンサル", url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.home, item: `${SITE_URL}${locale === "zh" ? "" : "/" + locale}` },
      { "@type": "ListItem", position: 2, name: ui.blog, item: `${SITE_URL}${L("/blog")}` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}${canonical}` },
    ],
  };
  const faqPairs = extractFaq(post.content);
  const faqJsonLd = faqPairs.length > 0
    ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqPairs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
    : null;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <NavClient locale={locale} dict={dict} />

      <div className="article-wrap">
        <div className="article-header">
          <Link href={L("/blog")} className="article-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            {ui.back}
          </Link>
          <div className="article-date">{post.date}</div>
          <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 6, lineHeight: 1.7 }}>
            {({ zh: "更新日期", en: "Updated", ja: "更新日" } as Record<string, string>)[locale]}：{post.date} · {({ zh: "信息来源：各主管机关公募要領（経産省・中小企業庁・厚労省・東京都）；金额·期限以官方最新公告为准", en: "Sources: official guidelines (METI, SME Agency, MHLW, Tokyo Metropolitan Government); figures subject to latest official notices", ja: "出典：各主管機関の公募要領（経産省・中小企業庁・厚労省・東京都）；金額・期限は公式最新公告に準じます" } as Record<string, string>)[locale]}
          </div>
          <h1 className="article-title">{post.title}</h1>
          {post.excerpt && <p className="article-excerpt">{post.excerpt}</p>}
        </div>

        <div className="article-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <div style={{ margin: "64px 0", background: "linear-gradient(150deg,#124442,#1a5c5a)", borderRadius: "var(--r-lg)", padding: "40px", maxWidth: 760 }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 10, letterSpacing: "-0.4px" }}>{ui.ctaTitle}</h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", marginBottom: 24, lineHeight: 1.7 }}>{ui.ctaDesc}</p>
          <Link href={L("/contact")} className="btn-primary">
            {ui.ctaBtn}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        {related.length > 0 && (
          <div style={{ margin: "0 0 64px", maxWidth: 760 }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#1d1d1f", marginBottom: 20, letterSpacing: "-0.4px" }}>{ui.related}</h3>
            <div style={{ display: "grid", gap: 12 }}>
              {related.map((r) => (
                <Link key={r.slug} href={L(`/blog/${r.slug}`)} prefetch={false}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "18px 22px", background: "#fff", border: "1px solid #e7f1f1", borderRadius: "var(--r-lg)", textDecoration: "none", transition: "border-color .2s" }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#1a5c5a", lineHeight: 1.5 }}>{r.title}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c4a23a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, flexShrink: 0 }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div style={{ margin: "0 0 64px", maxWidth: 760 }}>
          <div className="pl-related">
            <div className="pl-toc-title">{PILLAR_LINKS[locale].title}</div>
            {PILLAR_LINKS[locale].items.map((p) => (
              <Link key={p.href} href={L(p.href)} prefetch={false} className="pl-toc-link">{p.label}</Link>
            ))}
          </div>
        </div>
      </div>

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
