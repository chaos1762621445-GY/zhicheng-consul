import Link from "next/link";
import { getAllPostsLocalized } from "@/lib/posts";
import NavClient from "../NavClient";
import Footer from "../Footer";
import PageHero from "../PageHero";
import CtaSection from "../CtaSection";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localizedHref } from "@/lib/i18n/href";
import type { Locale } from "@/lib/i18n/config";

const T: Record<Locale, {
  eyebrow: string; title1: string; title2: string; desc: string;
  empty: string; emptyCta: string; ctaTitle1: string; ctaTitle2: string;
}> = {
  zh: { eyebrow: "知识库 · Knowledge Base", title1: "补助金", title2: "申请资讯", desc: "最新日本政府补助金政策解读，帮助在日华人企业主第一时间掌握申请机会。", empty: "暂无文章，敬请期待", emptyCta: "联系我们咨询", ctaTitle1: "想了解更多？", ctaTitle2: "免费咨询顾问" },
  en: { eyebrow: "Insights · Knowledge Base", title1: "Subsidy", title2: "Application Insights", desc: "The latest analysis of Japanese government subsidy policy, helping business owners in Japan seize application opportunities first.", empty: "No articles yet — stay tuned.", emptyCta: "Contact us", ctaTitle1: "Want to know more?", ctaTitle2: "Free consultation" },
  ja: { eyebrow: "お役立ち情報 · Knowledge Base", title1: "補助金", title2: "申請情報", desc: "日本政府の補助金政策の最新解説。在日華人の企業経営者が申請機会をいち早く掴めるようサポートします。", empty: "記事は準備中です。", emptyCta: "お問い合わせ", ctaTitle1: "もっと知りたい？", ctaTitle2: "無料で相談する" },
};

export default async function BlogListContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = T[locale];
  const L = (p: string) => localizedHref(locale, p);
  // 该语言的文章；若尚未翻译则回退中文列表（保证页面不空）
  let posts = await getAllPostsLocalized(locale);
  if (posts.length === 0) posts = await getAllPostsLocalized("zh");

  return (
    <main>
      <NavClient locale={locale} dict={dict} />

      <PageHero
        eyebrow={t.eyebrow}
        title={<>{t.title1}<span style={{ color: 'var(--gold)' }}>{t.title2}</span></>}
        desc={t.desc}
      />

      <section className="sec" style={{ background: 'var(--surface-2)' }}>
        <div className="wrap">
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: 15, color: "var(--body)", marginBottom: 24 }}>{t.empty}</div>
              <Link href={L("/contact")} className="btn btn-fill">{t.emptyCta}</Link>
            </div>
          ) : (
            <div className="ed-rows" style={{ background: 'var(--surface)', padding: '0 32px' }}>
              {posts.map(post => (
                <Link key={post.slug} href={L(`/blog/${post.slug}`)} prefetch={false} className="ed-row" style={{ textDecoration: "none" }}>
                  <span style={{ fontSize: 12.5, color: "var(--muted)", fontVariantNumeric: 'tabular-nums' }}>{post.date}</span>
                  <div>
                    <div className="serif" style={{ fontSize: 17, fontWeight: 700, color: "var(--ink)", marginBottom: 6, lineHeight: 1.5 }}>{post.title}</div>
                    <p style={{ fontSize: 13.5, color: "var(--body)", lineHeight: 1.7, maxWidth: '72ch' }}>{(post.excerpt || "").slice(0, 100)}...</p>
                  </div>
                  <span style={{ color: "var(--brand)" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaSection
        locale={locale}
        dict={dict}
        title={<>{t.ctaTitle1}<br /><span style={{ color: 'var(--gold-bright)' }}>{t.ctaTitle2}</span></>}
      />

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
