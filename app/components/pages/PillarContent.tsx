import Link from "next/link";
import NavClient from "../NavClient";
import Footer from "../Footer";
import PageHero from "../PageHero";
import CtaSection from "../CtaSection";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { localizedHref } from "@/lib/i18n/href";
import { SITE_URL } from "@/lib/i18n/metadata";
import type { PillarData, Block } from "@/lib/pillars/types";

const LANG: Record<Locale, string> = { zh: "zh-CN", en: "en", ja: "ja" };

function renderBlock(b: Block, i: number, L: (p: string) => string) {
  switch (b.type) {
    case "p":
      return <p key={i} className="pl-p">{b.text}</p>;
    case "h3":
      return <h3 key={i} className="pl-h3 serif">{b.text}</h3>;
    case "ul":
      return (
        <ul key={i} className="pl-ul">
          {b.items.map((it, j) => <li key={j}>{it}</li>)}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="pl-ol">
          {b.items.map((it, j) => <li key={j}>{it}</li>)}
        </ol>
      );
    case "note":
      return <div key={i} className="pl-note">{b.text}</div>;
    case "links":
      return (
        <div key={i} className="pl-links">
          {b.items.map((it, j) => (
            <Link key={j} href={L(it.href)} className="pl-link">{it.label} →</Link>
          ))}
        </div>
      );
    case "table":
      return (
        <div key={i} className="pl-table-wrap">
          <table className="pl-table">
            {b.caption && <caption>{b.caption}</caption>}
            <thead>
              <tr>{b.head.map((h, j) => <th key={j}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {b.rows.map((r, j) => (
                <tr key={j}>{r.map((c, k) => <td key={k}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function PillarContent({ locale, data }: { locale: Locale; data: PillarData }) {
  const dict = getDictionary(locale);
  const L = (p: string) => localizedHref(locale, p);
  const ui = data.ui;
  const pageUrl = `${SITE_URL}${L(data.path)}`;
  const orgId = `${SITE_URL}/#organization`;

  const mainJsonLd = data.schemaType === "LocalBusiness"
    ? {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${pageUrl}#localbusiness`,
        name: "株式会社志成コンサル",
        url: pageUrl,
        parentOrganization: { "@id": orgId },
        image: `${SITE_URL}/opengraph-image`,
        telephone: "+81-3-6265-9756",
        email: "info@shisei-consult.jp",
        address: {
          "@type": "PostalAddress",
          streetAddress: "平河町1-8-2 半蔵門パレス8階",
          addressLocality: "千代田区",
          addressRegion: "東京都",
          postalCode: "102-0093",
          addressCountry: "JP",
        },
        areaServed: ["東京都", "神奈川県", "千葉県", "埼玉県"],
        availableLanguage: ["zh", "ja", "en"],
        priceRange: "成功報酬制",
        description: data.summary,
        inLanguage: LANG[locale],
      }
    : {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: data.metaTitle,
        description: data.metaDesc,
        inLanguage: LANG[locale],
        mainEntityOfPage: pageUrl,
        image: [`${SITE_URL}/opengraph-image`],
        dateModified: data.verifiedDate,
        author: { "@id": orgId },
        publisher: { "@id": orgId },
        about: data.keywords.slice(0, 5),
        isBasedOn: data.sources.map((s) => s.url),
      };

  const faqJsonLd = data.faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;

  const crumbs = [
    { name: ui.home, item: `${SITE_URL}${L("/")}` },
    ...(data.breadcrumbParent ? [{ name: data.breadcrumbParent.label, item: `${SITE_URL}${L(data.breadcrumbParent.href)}` }] : []),
    { name: data.heroTitle1 + data.heroTitle2, item: pageUrl },
  ];
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.item })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mainJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <NavClient locale={locale} dict={dict} />

      <PageHero
        eyebrow={data.heroEyebrow}
        title={<>{data.heroTitle1}<br /><span style={{ color: "var(--gold)" }}>{data.heroTitle2}</span></>}
        desc={data.heroDesc}
      >
        <nav aria-label="breadcrumb" className="pl-crumbs">
          {crumbs.map((c, i) => (
            <span key={i}>
              {i > 0 && <span className="pl-crumb-sep">/</span>}
              {i < crumbs.length - 1 ? <Link href={c.item.replace(SITE_URL, "") || "/"}>{c.name}</Link> : <span>{c.name}</span>}
            </span>
          ))}
        </nav>
      </PageHero>

      <section className="sec-sm" style={{ background: "var(--surface)" }}>
        <div className="wrap pl-grid">
          <div className="pl-main">
            {/* GEO 可摘录段 */}
            <p className="pl-summary serif">{data.summary}</p>

            {data.quickFacts && data.quickFacts.length > 0 && (
              <div className="pl-facts">
                <div className="eyebrow">{ui.quickFactsTitle}</div>
                <div className="pl-facts-grid">
                  {data.quickFacts.map((f, i) => (
                    <div key={i} className="pl-fact">
                      <div className="pl-fact-label">{f.label}</div>
                      <div className="pl-fact-value serif">{f.value}</div>
                      {f.sub && <div className="pl-fact-sub">{f.sub}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {data.sections.map((s) => (
              <section key={s.id} id={s.id} className="pl-section">
                <h2 className="h2 ed-h pl-h2">{s.h2}</h2>
                {s.blocks.map((b, i) => renderBlock(b, i, L))}
              </section>
            ))}

            <section id="faq" className="pl-section">
              <h2 className="h2 ed-h pl-h2">{ui.faqTitle}</h2>
              <div className="faq-list">
                {data.faq.map((f, i) => (
                  <details key={i} className="faq-item">
                    <summary className="faq-q">
                      <span className="faq-q-marker serif">Q</span>
                      <span className="faq-q-text">{f.q}</span>
                      <span className="faq-toggle" aria-hidden="true" />
                    </summary>
                    <div className="faq-a"><p>{f.a}</p></div>
                  </details>
                ))}
              </div>
            </section>

            <section className="pl-sources">
              <div className="eyebrow">{ui.sourcesTitle}</div>
              <ul>
                {data.sources.map((s, i) => (
                  <li key={i}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
                ))}
              </ul>
              <div className="pl-verified">{ui.verifiedLabel}：{data.verifiedDate}</div>
              <p className="pl-disclaimer">{ui.disclaimer}</p>
            </section>
          </div>

          <aside className="pl-aside">
            <div className="pl-toc">
              <div className="pl-toc-title">{ui.tocTitle}</div>
              {data.sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="pl-toc-link">{s.h2}</a>
              ))}
              <a href="#faq" className="pl-toc-link">{ui.faqTitle}</a>
            </div>
            <div className="pl-aside-cta">
              <div className="serif pl-aside-cta-title">{data.ctaTitle1}{data.ctaTitle2}</div>
              <p>{data.ctaDesc}</p>
              <Link href={L("/contact")} className="btn btn-gold" style={{ width: "100%" }}>{dict.nav.ctaButton}</Link>
            </div>
            <div className="pl-related">
              <div className="pl-toc-title">{ui.relatedTitle}</div>
              {data.related.map((r, i) => (
                <Link key={i} href={L(r.href)} className="pl-toc-link">{r.label}</Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <CtaSection
        locale={locale}
        dict={dict}
        title={<>{data.ctaTitle1}<span style={{ color: "var(--gold-bright)" }}>{data.ctaTitle2}</span></>}
        desc={data.ctaDesc}
      />
      <Footer locale={locale} dict={dict} />
    </main>
  );
}
