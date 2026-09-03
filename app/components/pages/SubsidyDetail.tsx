import React from "react";
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
import PageHero from "../PageHero";
import { statusOf, STATUS_LABEL } from "@/lib/subsidies/status";
import { notEligibleFor, failReasonsFor, STEP_SPLIT, DETAIL_EXTRA_UI } from "@/lib/subsidies/detail-extra";
import { getCases } from "./CasesContent";
import { CASE_META, CASE_FILTER_LABELS, relatedCaseIdx } from "@/lib/cases/meta";

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
  const x = DETAIL_EXTRA_UI[locale];
  const L = (p: string) => localizedHref(locale, p);
  const inLang = localeHreflang[locale] === "zh-Hans" ? "zh-CN" : localeHreflang[locale];
  const otherSubsidies = getSubsidies(locale).filter((s) => s.slug !== slug);
  const canonical = locale === "zh" ? `/subsidies/${slug}` : `/${locale}/subsidies/${slug}`;
  const st = statusOf(slug);
  const notEligible = notEligibleFor(slug, locale);
  const fails = failReasonsFor(slug, locale);
  const split = STEP_SPLIT[locale];
  const allCases = getCases(locale);
  const relCases = relatedCaseIdx(slug).map((i) => ({ c: allCases[i], m: CASE_META[i] })).filter((r) => r.c);
  const CF = CASE_FILTER_LABELS[locale];

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

  const H2 = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <>
      <div className="section-label">{label}</div>
      <h2 style={{ fontSize: 24, fontWeight: 700, color: "var(--heading)", marginBottom: 20, letterSpacing: "-.01em" }}>{children}</h2>
    </>
  );

  const facts = [
    ...(st ? [{ label: x.facts.audience, value: st.audience[locale] }, { label: x.facts.status, value: STATUS_LABEL[locale][st.status] }, { label: x.facts.deadline, value: st.deadline[locale] }] : []),
  ];

  const MidCta = () => (
    <div className="mid-cta">
      <div>
        <div className="mid-cta-t">{x.midCtaT}</div>
        <div className="mid-cta-d">{x.midCtaD}</div>
      </div>
      <Link href={L("/contact")} className="btn btn-fill" style={{ height: 44, padding: "0 20px" }}>{x.midCtaBtn}<IconArrow /></Link>
    </div>
  );

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <NavClient locale={locale} dict={dict} />

      <PageHero
        crumbs={[{ label: ui.breadcrumbHome, href: L("/") }, { label: ui.breadcrumbList, href: L("/subsidies") }, { label: data.name }]}
        eyebrow={data.tag}
        title={<>{data.name}</>}
        desc={data.heroDesc}
        facts={facts}
      >
        <p style={{ fontSize: 13.5, color: "var(--muted)", margin: "10px 0 0", letterSpacing: ".02em" }}>{data.nameJa}</p>
      </PageHero>

      <div className="section-inner" style={{ padding: "56px 48px" }}>
        <div className="subsidy-detail-layout">
          <div style={{ display: "flex", flexDirection: "column", gap: 56, fontSize: 16 }}>

            <section>
              <H2 label={ui.overviewLabel}>{ui.overviewHeading}</H2>
              <div className="sd-overview-grid">
                {data.overview.map((item, i) => (
                  <div key={i} style={{ background: "var(--surface-warm)", borderTop: "1.5px solid var(--ink)", padding: "20px 18px" }}>
                    <div style={{ fontSize: 12.5, color: "var(--muted)", marginBottom: 8 }}>{item.label}</div>
                    <div className="serif" style={{ fontSize: 22, fontWeight: 700, color: "var(--brand)", marginBottom: 6, lineHeight: 1.25 }}>{item.value}</div>
                    {item.sub && <div style={{ fontSize: 13, color: "var(--body)", lineHeight: 1.6 }}>{item.sub}</div>}
                  </div>
                ))}
              </div>
              {data.note && <div className="pl-note" style={{ marginTop: 16 }}>{data.note}</div>}
            </section>

            <section>
              <H2 label={ui.qualLabel}>{ui.qualHeading}</H2>
              <ul style={{ display: "flex", flexDirection: "column", gap: 10, listStyle: "none", padding: 0 }}>
                {data.qualifications.map((q, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 0", borderBottom: "1px solid var(--line)", fontSize: 16, color: "var(--heading)", lineHeight: 1.65 }}>
                    <span style={{ color: "var(--brand)", flexShrink: 0, marginTop: 5 }}><IconCheck /></span>
                    {q}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <H2 label={x.notEligibleLabel}>{x.notEligibleHeading}</H2>
              <ul className="pl-ul" style={{ fontSize: 15.5 }}>
                {notEligible.map((q, i) => <li key={i}>{q}</li>)}
              </ul>
            </section>

            <MidCta />

            <section>
              <H2 label={ui.targetLabel}>{ui.targetHeading}</H2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {data.targets.map((t, i) => (
                  <div key={i} className="sd-target-row">
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                      <span style={{ fontSize: 15.5, fontWeight: 600, color: "var(--heading)" }}>{t.item}</span>
                    </div>
                    <span style={{ fontSize: 14.5, color: "var(--body)", lineHeight: 1.65 }}>{t.detail}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <H2 label={ui.stepsLabel}>{ui.stepsHeading}</H2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {data.steps.map((s, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: 16, padding: "22px 0", borderBottom: "1px solid var(--line)" }}>
                    <div className="serif" aria-hidden style={{ fontSize: 34, fontWeight: 900, lineHeight: 1, color: "transparent", WebkitTextStroke: "1.2px var(--gold)" }}>{s.step}</div>
                    <div>
                      <div style={{ fontSize: 17, fontWeight: 700, color: "var(--heading)", marginBottom: 6 }}>{s.title}</div>
                      <div style={{ fontSize: 15, color: "var(--body)", lineHeight: 1.7 }}>{s.desc}</div>
                      {split[i] && (
                        <div className="step-split">
                          <div><b>{x.you}</b>{split[i].you}</div>
                          <div><b>{x.we}</b>{split[i].we}</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <H2 label={ui.materialsLabel}>{ui.materialsHeading}</H2>
              <div style={{ background: "var(--surface-warm)", borderTop: "1.5px solid var(--ink)", padding: "22px 24px" }}>
                <ul className="sd-materials-grid" style={{ padding: 0 }}>
                  {data.materials.map((m, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 15, color: "var(--heading)", lineHeight: 1.6 }}>
                      <span style={{ color: "var(--brand)", flexShrink: 0, marginTop: 4 }}><IconCheck /></span>{m}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: 14, fontSize: 13.5, color: "var(--body)" }}>{ui.materialsNote}</p>
              </div>
            </section>

            <section>
              <H2 label={x.failLabel}>{x.failHeading}</H2>
              <ol className="pl-ol" style={{ fontSize: 15.5 }}>
                {fails.map((q, i) => <li key={i}>{q}</li>)}
              </ol>
            </section>

            <section>
              <H2 label={x.casesLabel}>{x.casesHeading}</H2>
              <div className="home-cases home-cases-2" style={{ marginBottom: 16 }}>
                {relCases.map(({ c, m }, i) => (
                  <Link key={i} href={L("/cases")} className="home-case">
                    <div className="home-case-meta">
                      <span className="chip chip-audience">{CF.industry[m.industryKey]}</span>
                      <span className="chip chip-audience">{CF.region[m.regionKey]}</span>
                      <span className="chip chip-yearround">{CF.subsidy[m.subsidyKey]}</span>
                    </div>
                    <div className="home-case-amount">{c.amount}</div>
                    <p className="home-case-text">{c.quote.slice(0, 80)}…</p>
                  </Link>
                ))}
              </div>
              <Link href={L("/cases")} className="pl-link">{x.casesAll}</Link>
            </section>

            <section>
              <H2 label={ui.faqLabel}>{ui.faqHeadingPre}{data.name}{ui.faqHeadingPost}</H2>
              <div className="faq-list">
                {data.faq.map((item, i) => (
                  <details key={i} className="faq-item">
                    <summary className="faq-q">
                      <span className="faq-q-marker serif">Q</span>
                      <span className="faq-q-text">{item.q}</span>
                      <span className="faq-toggle" aria-hidden="true" />
                    </summary>
                    <div className="faq-a"><p>{item.a}</p></div>
                  </details>
                ))}
              </div>
            </section>

            {(data.officialUrl || data.verifiedDate) && (
              <section className="pl-sources">
                <div className="eyebrow">{ui.sourceHeading}</div>
                <ul>
                  {data.officialUrl && <li>{ui.sourceOfficial}<a href={data.officialUrl} target="_blank" rel="noopener">{data.officialName || data.officialUrl}</a></li>}
                </ul>
                {data.verifiedDate && <div className="pl-verified">{ui.sourceVerified}{data.verifiedDate}</div>}
                <p className="pl-disclaimer">{ui.sourceDisclaimer}</p>
              </section>
            )}
          </div>

          <aside className="subsidy-detail-sidebar" style={{ display: "flex", flexDirection: "column", gap: 22, position: "sticky", top: 88 }}>
            <div className="pl-aside-cta">
              <div style={{ fontSize: 11, letterSpacing: ".18em", color: "rgba(255,255,255,0.55)", marginBottom: 10 }}>{ui.sidebarConsult}</div>
              <div className="serif pl-aside-cta-title">{data.name}{ui.sidebarTitlePost}</div>
              <p>{ui.sidebarDesc}</p>
              <Link href={L("/contact")} className="btn btn-fill" style={{ width: "100%", background: "#fff", color: "var(--brand)" }}>{x.midCtaBtn}</Link>
              <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.14)", fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
                <div>{ui.sidebarWechat}</div>
                <div>{ui.sidebarPhone}</div>
              </div>
            </div>

            <div className="pl-related">
              <div className="pl-toc-title">{ui.otherSubsidies}</div>
              {otherSubsidies.map((s) => (
                <Link key={s.slug} href={L(`/subsidies/${s.slug}`)} className="pl-toc-link">{s.name}</Link>
              ))}
              <Link href={L("/subsidies")} className="pl-toc-link" style={{ color: "var(--brand)", fontWeight: 600 }}>{ui.viewAll}</Link>
            </div>

            <div className="pl-related">
              <div className="pl-toc-title">{PILLAR_LINKS[locale].title}</div>
              {PILLAR_LINKS[locale].items.map((p) => (
                <Link key={p.href} href={L(p.href)} className="pl-toc-link">{p.label}</Link>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <section style={{ padding: "80px 0", textAlign: "center", background: "var(--surface-2)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap" style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2 className="h2 ed-h ed-h-center" style={{ marginBottom: 18 }}>
            {data.name}{ui.bottomTitlePre}<br />
            <span style={{ color: "var(--brand)" }}>{ui.bottomTitleHighlight}</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--body)", lineHeight: 1.75, maxWidth: 540, margin: "0 auto 32px" }}>{ui.bottomDesc}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={L("/contact")} className="btn btn-fill">{x.midCtaBtn}<IconArrow /></Link>
            <Link href={L("/subsidies")} className="btn btn-ghost">{ui.bottomCta2}</Link>
          </div>
        </div>
      </section>

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
