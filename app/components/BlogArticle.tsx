import { getPostLocalized, getAllPostsLocalized } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import Link from "next/link";
import NavClient from "./NavClient";
import { PILLAR_LINKS } from "@/lib/pillars/links";
import { inferSubsidySlugs, SUBSIDY_LINK_LABEL } from "@/lib/subsidies/post-links";
import Footer from "./Footer";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localizedHref } from "@/lib/i18n/href";
import { localeOg, localeHreflang, type Locale } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/i18n/metadata";

const UI = {
  zh: { back: "返回知识库", ctaTitle: "想了解自己能申请哪些补助金？", ctaDesc: "3分钟免费自测，志成コンサル专业团队为您匹配可申请的方案；未获批不收取成功报酬，其他费用以事先约定为准", ctaBtn: "免费测试我的资格", related: "相关阅读", home: "首页", blog: "知识库" },
  en: { back: "Back to Insights", ctaTitle: "Want to know which subsidies you qualify for?", ctaDesc: "A 3-minute free self-check. Shisei Consulting's expert team helps identify suitable programs. No success fee if an application is not approved; any other charges are agreed in advance.", ctaBtn: "Check My Eligibility for Free", related: "Related Reading", home: "Home", blog: "Insights" },
  ja: { back: "お役立ち情報に戻る", ctaTitle: "自社が申請できる補助金を知りたいですか？", ctaDesc: "3分の無料セルフチェック。志成コンサルの専門家チームが対象制度をご案内。不採択時は成功報酬なし。その他の費用は事前の合意によります。", ctaBtn: "無料で受給資格をチェック", related: "関連記事", home: "ホーム", blog: "お役立ち情報" },
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
  // hreflang 只指向真实存在的语言版本（未翻译/日文原创文章不能指向 404）
  const [zhP, enP, jaP] = await Promise.all([
    locale === "zh" ? post : getPostLocalized(slug, "zh"),
    locale === "en" ? post : getPostLocalized(slug, "en"),
    locale === "ja" ? post : getPostLocalized(slug, "ja"),
  ]);
  const languages: Record<string, string> = {};
  if (zhP) languages["zh-Hans"] = `${SITE_URL}${path}`;
  if (enP) languages.en = `${SITE_URL}/en${path}`;
  if (jaP) languages.ja = `${SITE_URL}/ja${path}`;
  languages["x-default"] = languages["zh-Hans"] ?? languages.ja ?? languages.en;
  return {
    title: post.title,
    description: post.excerpt,
    keywords: mergedKeywords,
    alternates: { canonical, languages },
    openGraph: {
      type: "article" as const,
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}${canonical}`,
      siteName: "志成コンサル",
      locale: localeOg[locale],
      publishedTime: post.date || undefined,
      modifiedTime: post.updated || post.date || undefined,
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
  // Server-only: preserve remark-html sanitization while rendering GFM tables.
  const processed = await remark().use(remarkGfm).use(html).process(body);
  const tableLabel = { zh: "数据表格，可横向滚动", en: "Data table, scroll horizontally", ja: "データ表、横方向にスクロール可能" }[locale];
  const tableHint = { zh: "左右滑动查看完整表格", en: "Scroll sideways to view the full table", ja: "横にスクロールして表全体をご覧ください" }[locale];
  const contentHtml = processed.toString()
    .replace(/<table>/g, `<p class="article-table-hint">${tableHint}</p><div class="article-table-scroll" role="region" aria-label="${tableLabel}" tabindex="0"><table>`)
    .replace(/<\/table>/g, "</table></div>");

  const allPosts = await getAllPostsLocalized(locale);
  // 制度关联：按标题/关键词确定性命中制度标识（不只靠 keywords 交集）
  const postSubsidies = inferSubsidySlugs(post.title, post.keywords || []);
  const related = allPosts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const ps = inferSubsidySlugs(p.title, p.keywords || []);
      const sameSubsidy = ps.filter((s) => postSubsidies.includes(s)).length;
      const kw = (p.keywords || []).filter((k) => (post.keywords || []).includes(k)).length;
      return { p, score: sameSubsidy * 10 + kw };
    })
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
    dateModified: post.updated || post.date || undefined,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />}
      <NavClient locale={locale} dict={dict} />

      <div className="article-wrap">
        <div className="article-header">
          <Link href={L("/blog")} className="article-back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            {ui.back}
          </Link>
          <div className="article-date">
            {({ zh: "发布日期", en: "Published", ja: "公開日" } as const)[locale]}：<time dateTime={post.date}>{post.date}</time>
            {post.updated && <> · {({ zh: "更新日期", en: "Updated", ja: "更新日" } as const)[locale]}：<time dateTime={post.updated}>{post.updated}</time></>}
          </div>
          <div style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 6, lineHeight: 1.7 }}>
            {({ zh: "编辑", en: "By", ja: "編集" } as const)[locale]}：<Link href={L("/about")}>株式会社 志成コンサル</Link>
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
          {postSubsidies.length > 0 && (
            <div className="pl-related" style={{ marginBottom: 16 }}>
              <div className="pl-toc-title">{SUBSIDY_LINK_LABEL[locale].title}</div>
              {postSubsidies.map((s) => (
                <Link key={s} href={L(`/subsidies/${s}`)} prefetch={false} className="pl-toc-link">{SUBSIDY_LINK_LABEL[locale].names[s]}</Link>
              ))}
            </div>
          )}
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
