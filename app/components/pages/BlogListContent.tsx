import Link from "next/link";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { cache } from "react";
import { getAllPostsLocalized } from "@/lib/posts";
import NavClient from "../NavClient";
import Footer from "../Footer";
import PageHero from "../PageHero";
import CtaSection from "../CtaSection";
import BlogList from "../BlogList";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localizedHref } from "@/lib/i18n/href";
import { type Locale } from "@/lib/i18n/config";
import { buildPageMetadata, SITE_URL } from "@/lib/i18n/metadata";
import { blogPageCount, blogPagePath, parseBlogPage, blogPageLanguages } from "@/lib/blog-pagination";

const getBlogPosts = cache(getAllPostsLocalized);

const T: Record<Locale, {
  eyebrow: string; title1: string; title2: string; desc: string;
  empty: string; emptyCta: string; ctaTitle1: string; ctaTitle2: string;
  metaTitle: string; metaDescription: string; pageLabel: (page: number) => string;
}> = {
  zh: { eyebrow: "知识库 · Knowledge Base", title1: "补助金", title2: "申请资讯", desc: "最新日本政府补助金政策解读，帮助在日华人企业主第一时间掌握申请机会。", empty: "暂无文章，敬请期待", emptyCta: "联系我们咨询", ctaTitle1: "想了解更多？", ctaTitle2: "免费咨询顾问", metaTitle: "在日华人补助金知识库｜省力化·AI导入·转正助成金最新攻略", metaDescription: "在日华人补助金知识库——省力化补助金、AI导入补助金、员工转正助成金、东京空调补助金等最新申请攻略与政策解读，行政书士·税理士团队原创，全程中文。", pageLabel: (page) => `第 ${page} 页` },
  en: { eyebrow: "Insights · Knowledge Base", title1: "Subsidy", title2: "Application Insights", desc: "The latest analysis of Japanese government subsidy policy, helping business owners in Japan seize application opportunities first.", empty: "No articles yet — stay tuned.", emptyCta: "Contact us", ctaTitle1: "Want to know more?", ctaTitle2: "Free consultation", metaTitle: "Japan Subsidy Insights | Labor-Saving, AI/IT & Career-Up Grants", metaDescription: "Insights on subsidies for businesses in Japan — the latest application guides and policy analysis on the Labor-Saving Subsidy, AI / IT Adoption Subsidy, Career-Up Grant, Tokyo AC subsidy, and more. Original content from a Gyoseishoshi & Zeirishi team.", pageLabel: (page) => `Page ${page}` },
  ja: { eyebrow: "お役立ち情報 · Knowledge Base", title1: "補助金", title2: "申請情報", desc: "日本政府の補助金政策の最新解説。在日華人の企業経営者が申請機会をいち早く掴めるようサポートします。", empty: "記事は準備中です。", emptyCta: "お問い合わせ", ctaTitle1: "もっと知りたい？", ctaTitle2: "無料で相談する", metaTitle: "補助金お役立ち情報｜省力化・AI導入・キャリアアップ助成金の最新攻略", metaDescription: "在日華人向け補助金のお役立ち情報——省力化補助金、AI・IT導入補助金、キャリアアップ助成金、東京都の空調補助金など、最新の申請攻略と政策解説。行政書士・税理士チームによるオリジナル記事。", pageLabel: (page) => `${page} ページ目` },
};

async function postsForPage(locale: Locale, page: number) {
  const posts = await getBlogPosts(locale);
  if (!Number.isInteger(page) || page < 1 || page > blogPageCount(posts.length)) notFound();
  return posts;
}

export function resolveBlogPage(locale: Locale, raw: string): number {
  const page = parseBlogPage(raw);
  if (page === null) notFound();
  if (page === 1) permanentRedirect(localizedHref(locale, "/blog"));
  return page;
}

export async function blogStaticParams(locale: Locale) {
  const posts = await getBlogPosts(locale);
  // Include page 1 so that its permanent redirect is generated too.
  return Array.from({ length: blogPageCount(posts.length) }, (_, index) => ({ page: String(index + 1) }));
}

export async function buildBlogListMetadata(locale: Locale, page = 1): Promise<Metadata> {
  await postsForPage(locale, page);
  const t = T[locale];
  const path = blogPagePath(page);
  const metadata = buildPageMetadata({
    locale,
    path,
    title: page === 1 ? t.metaTitle : `${t.metaTitle} · ${t.pageLabel(page)}`,
    description: page === 1 ? t.metaDescription : `${t.pageLabel(page)} — ${t.metaDescription}`,
  });

  if (page > 1) {
    const [zh, en, ja] = await Promise.all([getBlogPosts("zh"), getBlogPosts("en"), getBlogPosts("ja")]);
    const languages = blogPageLanguages(locale, page, { zh, en, ja }, SITE_URL);
    metadata.alternates = { canonical: localizedHref(locale, path), languages };
  }

  return metadata;
}

export default async function BlogListContent({ locale, page = 1 }: { locale: Locale; page?: number }) {
  const dict = getDictionary(locale);
  const t = T[locale];
  const L = (p: string) => localizedHref(locale, p);
  const posts = await postsForPage(locale, page);
  const blogCrumb = { label: `${t.title1}${t.title2}`, ...(page > 1 ? { href: L("/blog") } : {}) };

  return (
    <main>
      <NavClient locale={locale} dict={dict} />

      <PageHero
        crumbs={[{ label: { zh: "首页", en: "Home", ja: "ホーム" }[locale], href: L("/") }, blogCrumb, ...(page > 1 ? [{ label: t.pageLabel(page) }] : [])]}
        eyebrow={t.eyebrow}
        title={<>{t.title1}<span>{t.title2}</span></>}
        desc={t.desc}
      />

      <section className="sec" style={{ background: "var(--surface-2)" }}>
        <div className="wrap">
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: 15, color: "var(--body)", marginBottom: 24 }}>{t.empty}</div>
              <Link href={L("/contact")} className="btn btn-fill">{t.emptyCta}</Link>
            </div>
          ) : (
            <BlogList key={`${locale}-${page}`} locale={locale} initialPage={page} posts={posts.map((p) => ({ slug: p.slug, title: p.title, date: p.date, excerpt: p.excerpt, keywords: p.keywords }))} />
          )}
        </div>
      </section>

      <CtaSection
        locale={locale}
        dict={dict}
        title={<>{t.ctaTitle1}<br /><span style={{ color: "var(--gold-bright)" }}>{t.ctaTitle2}</span></>}
      />

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
