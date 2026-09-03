import Link from "next/link";
import { notFound } from "next/navigation";
import NavClient from "../NavClient";
import Footer from "../Footer";
import { getSubsidies, getSubsidy, detailUI } from "@/lib/subsidies";
import { PILLAR_LINKS } from "@/lib/pillars/links";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localizedHref } from "@/lib/i18n/href";
import { localeHreflang, localeOg, type Locale } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/i18n/metadata";

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14, flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export function subsidyParams() {
  return getSubsidies("zh").map((s) => ({ slug: s.slug }));
}

export async function subsidyMetadata(locale: Locale, slug: string) {
  const data = getSubsidy(locale, slug);
  if (!data) return {};
  const path = `/subsidies/${slug}`;
  const canonical = locale === "zh" ? path : `/${locale}${path}`;
  const kw: Record<Locale, string[]> = {
    zh: ["在日华人补助金", "省力化补助金", "AI导入补助金", "员工转正助成金", "空调节能补助", "日本政府补助金代办"],
    en: ["Japan government subsidy", "Labor-Saving Subsidy", "AI IT Adoption Subsidy", "Career-Up Grant", "energy-efficient AC subsidy", "subsidy consulting Japan"],
    ja: ["補助金申請サポート", "省力化補助金", "AI・IT導入補助金", "キャリアアップ助成金", "空調省エネ補助", "中国語対応 補助金"],
  };
  return {
    title: data.metaTitle,
    description: data.metaDesc,
    keywords: kw[locale],
    alternates: {
      canonical,
      languages: {
        "zh-Hans": `${SITE_URL}${path}`,
        en: `${SITE_URL}/en${path}`,
        ja: `${SITE_URL}/ja${path}`,
        "x-default": `${SITE_URL}${path}`,
      },
    },
    openGraph: { url: `${SITE_URL}${canonical}`, title: data.metaTitle, description: data.metaDesc, locale: localeOg[locale] },
  };
}

export default function SubsidyDetail({ locale, slug }: { locale: Locale; slug: string }) {
  const data = getSubsidy(locale, slug);
  if (!data) notFound();
  const dict = getDictionary(locale);
  const ui = detailUI[locale];
  const L = (p: string) => localizedHref(locale, p);
  const inLang = localeHreflang[locale] === "zh-Hans" ? "zh-CN" : localeHreflang[locale];
  const otherSubsidies = getSubsidies(locale).filter((s) => s.slug !== slug);
  const canonical = locale === "zh" ? `/subsidies/${slug}` : `/${locale}/subsidies/${slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org", "@type": "Service",
    serviceType: data.name, name: `${data.name}（${data.nameJa}）`,
    description: data.metaDesc, inLanguage: inLang,
    areaServed: { "@type": "Country", name: "日本" },
    provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "株式会社 志成コンサル", url: SITE_URL },
    url: `${SITE_URL}${canonical}`,
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.breadcrumbHome, item: `${SITE_URL}${locale === "zh" ? "" : "/" + locale}` },
      { "@type": "ListItem", position: 2, name: ui.breadcrumbList, item: `${SITE_URL}${L("/subsidies")}` },
      { "@type": "ListItem", position: 3, name: data.name, item: `${SITE_URL}${canonical}` },
    ],
  };
  const faqJsonLd = data.faq && data.faq.length > 0 ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: data.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  } : null;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <NavClient locale={locale} dict={dict} />

      <section className="page-hero">
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Link href={L("/subsidies")} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 24, fontWeight: 500 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {ui.backToList}
          </Link>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold)', letterSpacing: '.12em', marginBottom: 16 }}>{data.tag}</div>
          <h1 className="display" style={{ fontSize: 'clamp(32px,4.6vw,52px)', marginBottom: 10 }}>{data.name}</h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 20, letterSpacing: '.02em' }}>{data.nameJa}</p>
          <p className="sub" style={{ fontSize: 17, marginBottom: 32, maxWidth: 680 }}>{data.heroDesc}</p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: '16px 24px', boxShadow: 'var(--shadow-md)' }}>
            <span style={{ fontSize: 13, color: 'var(--ink-3)', fontWeight: 600 }}>{ui.maxAmount}</span>
            <span className="amount" style={{ fontSize: 30, letterSpacing: '-0.5px' }}>{data.amount}</span>
          </div>
        </div>
      </section>

      <div className="section-inner" style={{ padding: "64px 48px" }}>
        <div className="subsidy-detail-layout">
          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>

            <section>
              <div className="section-label">{ui.overviewLabel}</div>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--heading)", marginBottom: 24 }}>{ui.overviewHeading}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {data.overview.map((item, i) => (
                  <div key={i} style={{ background: "var(--bg-outer)", border: "1px solid var(--border)", borderRadius: 10, padding: "24px 20px" }}>
                    <div style={{ fontSize: 12, color: "var(--body)", marginBottom: 8, fontWeight: 400 }}>{item.label}</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: "var(--dark)", marginBottom: 6, lineHeight: 1.2 }}>{item.value}</div>
                    {item.sub && <div style={{ fontSize: 12, color: "var(--body)" }}>{item.sub}</div>}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="section-label">{ui.qualLabel}</div>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--heading)", marginBottom: 20 }}>{ui.qualHeading}</h2>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none" }}>
                {data.qualifications.map((q, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "14px 18px", background: "var(--bg-outer)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 15, color: "var(--heading)", lineHeight: 1.6 }}>
                    <span style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(26,92,90,0.1)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}><IconCheck /></span>
                    {q}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="section-label">{ui.targetLabel}</div>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--heading)", marginBottom: 20 }}>{ui.targetHeading}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {data.targets.map((t, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 16, padding: "16px 20px", border: "1px solid var(--border)", borderRadius: 8, alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)", flexShrink: 0 }} />
                      <span style={{ fontSize: 14, fontWeight: 600, color: "var(--heading)" }}>{t.item}</span>
                    </div>
                    <span style={{ fontSize: 13, color: "var(--body)", lineHeight: 1.6 }}>{t.detail}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="section-label">{ui.stepsLabel}</div>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--heading)", marginBottom: 24 }}>{ui.stepsHeading}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {data.steps.map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 20, position: "relative" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{s.step}</div>
                      {i < data.steps.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 24, background: "var(--border)", margin: "4px 0" }} />}
                    </div>
                    <div style={{ paddingBottom: i < data.steps.length - 1 ? 28 : 0, paddingTop: 8 }}>
                      <div style={{ fontSize: 15, fontWeight: 600, color: "var(--heading)", marginBottom: 6 }}>{s.title}</div>
                      <div style={{ fontSize: 14, color: "var(--body)", lineHeight: 1.7 }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="section-label">{ui.materialsLabel}</div>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--heading)", marginBottom: 20 }}>{ui.materialsHeading}</h2>
              <div style={{ background: "var(--bg-outer)", border: "1px solid var(--border)", borderRadius: 10, padding: "24px 28px" }}>
                <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px" }}>
                  {data.materials.map((m, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--heading)", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--primary)", flexShrink: 0, marginTop: 3 }}><IconCheck /></span>{m}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: 16, fontSize: 13, color: "var(--body)" }}>{ui.materialsNote}</p>
              </div>
            </section>

            <section>
              <div className="section-label">{ui.faqLabel}</div>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--heading)", marginBottom: 24 }}>{ui.faqHeadingPre}{data.name}{ui.faqHeadingPost}</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {data.faq.map((item, i) => (
                  <div key={i} style={{ border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
                    <div style={{ padding: "16px 20px", background: "var(--bg-outer)", display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <span style={{ background: "var(--primary)", color: "#fff", fontSize: 12, fontWeight: 700, padding: "2px 7px", borderRadius: 3, flexShrink: 0, marginTop: 2 }}>Q</span>
                      <span style={{ fontSize: 15, fontWeight: 500, color: "var(--heading)", lineHeight: 1.6 }}>{item.q}</span>
                    </div>
                    <div style={{ padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <span style={{ background: "rgba(26,92,90,0.12)", color: "var(--primary)", fontSize: 12, fontWeight: 700, padding: "2px 7px", borderRadius: 3, flexShrink: 0, marginTop: 2 }}>A</span>
                      <span style={{ fontSize: 14, color: "var(--body)", lineHeight: 1.75 }}>{item.a}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {(data.officialUrl || data.note) && (
              <section style={{ marginTop: 40 }}>
                <div style={{ border: "1px solid var(--border)", borderLeft: "3px solid var(--primary)", borderRadius: 10, padding: "18px 22px", background: "var(--bg-outer)" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--heading)", marginBottom: 8 }}>{ui.sourceHeading}</div>
                  {data.note && <p style={{ fontSize: 13, color: "var(--body)", lineHeight: 1.75, margin: "0 0 10px" }}>{data.note}</p>}
                  <div style={{ fontSize: 12.5, color: "var(--muted, #6b6b6b)", lineHeight: 1.7 }}>
                    {data.officialUrl && (
                      <div>{ui.sourceOfficial}
                        <a href={data.officialUrl} target="_blank" rel="noopener" style={{ color: "var(--primary)", textDecoration: "underline" }}>{data.officialName || data.officialUrl}</a>
                      </div>
                    )}
                    {data.verifiedDate && <div>{ui.sourceVerified}{data.verifiedDate}</div>}
                    <div>{ui.sourceDisclaimer}</div>
                  </div>
                </div>
              </section>
            )}
          </div>

          <aside className="subsidy-detail-sidebar" style={{ display: "flex", flexDirection: "column", gap: 24, position: "sticky", top: 88 }}>
            <div style={{ background: "linear-gradient(135deg, var(--dark) 0%, #2d1b8e 100%)", borderRadius: 12, padding: "28px 24px", color: "#fff" }}>
              <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 10 }}>{ui.sidebarConsult}</div>
              <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.4, marginBottom: 12 }}>{data.name}{ui.sidebarTitlePost}</div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginBottom: 20, lineHeight: 1.7 }}>{ui.sidebarDesc}</p>
              <Link href={L("/contact")} className="btn-primary" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "12px 0", borderRadius: 6, fontSize: 14, fontWeight: 500 }}>
                {ui.sidebarCta}<IconArrow />
              </Link>
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 6 }}>{ui.sidebarAlt}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{ui.sidebarWechat}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{ui.sidebarPhone}</div>
              </div>
            </div>

            <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: "24px" }}>
              <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", color: "var(--primary)", marginBottom: 14 }}>{ui.otherSubsidies}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {otherSubsidies.map((s) => (
                  <Link key={s.slug} href={L(`/subsidies/${s.slug}`)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", border: "1px solid var(--border)", borderRadius: 7, fontSize: 13, color: "var(--heading)", transition: "border-color 0.15s, color 0.15s" }}>
                    <div>
                      <span style={{ fontSize: 10, background: "rgba(26,92,90,0.08)", color: "var(--primary)", padding: "2px 6px", borderRadius: 3, marginRight: 8 }}>{s.tag}</span>
                      {s.name}
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12, flexShrink: 0, opacity: 0.4 }}>
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                ))}
                <Link href={L("/subsidies")} style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px 14px", fontSize: 13, color: "var(--primary)", marginTop: 4 }}>{ui.viewAll}</Link>
              </div>
            </div>

            <div className="pl-related" style={{ marginTop: 8 }}>
              <div className="pl-toc-title">{PILLAR_LINKS[locale].title}</div>
              {PILLAR_LINKS[locale].items.map((p) => (
                <Link key={p.href} href={L(p.href)} className="pl-toc-link">{p.label}</Link>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <section style={{ position: 'relative', padding: '96px 0', textAlign: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%)', borderTop: '1px solid var(--line)' }}>
        <div className="hero-orb" style={{ width: 480, height: 480, background: 'rgba(26,92,90,0.08)', top: -140, right: -80 }} />
        <div className="hero-orb" style={{ width: 360, height: 360, background: 'rgba(200,155,60,0.08)', bottom: -100, left: -60, filter: 'blur(70px)' }} />
        <div className="wrap" style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 className="h2 ed-h ed-h-center" style={{ marginBottom: 18 }}>
            {data.name}{ui.bottomTitlePre}<br />
            <span style={{ color: 'var(--brand)' }}>{ui.bottomTitleHighlight}</span>
          </h2>
          <p style={{ fontSize: 17, color: 'var(--body)', lineHeight: 1.75, marginBottom: 36, maxWidth: 540, margin: '0 auto 36px' }}>{ui.bottomDesc}</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={L("/contact")} className="btn btn-fill">{ui.bottomCta1}<IconArrow /></Link>
            <Link href={L("/subsidies")} className="btn btn-ghost">{ui.bottomCta2}</Link>
          </div>
        </div>
      </section>

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
