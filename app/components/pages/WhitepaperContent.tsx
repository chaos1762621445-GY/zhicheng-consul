import NavClient from "../NavClient";
import Footer from "../Footer";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

// 本页三语文案（结构一致，翻译值可并行维护）
// 注意：静态资源路径/文件名（/whitepaper/2026-hakusho.html、/whitepaper/cover.png）三语共用，不翻译。
const T: Record<Locale, {
  badge: string;
  heroTitle1: string; heroTitle2: string; heroDesc: string;
  coverAlt: string;
  introEyebrow: string; introHeading: string; introDesc: string;
  readCta: string; downloadCta: string; downloadFilename: string;
  disclaimer: string;
  hl: { k: string; t: string; d: string }[];
  facts: { v: string; l: string }[];
}> = {
  zh: {
    badge: "White Paper · 2026 正式发布",
    heroTitle1: "2026 在日华人企业", heroTitle2: "补助金与经营升级白皮书",
    heroDesc: "由株式会社志成コンサル编制。不做政策名词堆砌，而是把经营需求、制度条件与执行顺序放在同一张地图里，帮在日华人企业主看懂并用好政府支援。",
    coverAlt: "2026 在日华人企业补助金白皮书 封面",
    introEyebrow: "白皮书简介",
    introHeading: "在日本经营企业，如何看懂并用好政策支援",
    introDesc: "本白皮书面向在日本经营法人或个人事业、正在规划软件、设备、用工、培训或节能投资的华人经营者。四个核心问题贯穿全篇：我能申请什么？现在能不能做？材料该怎么准备？如何避免踩坑？",
    readCta: "在线阅读白皮书",
    downloadCta: "下载白皮书",
    downloadFilename: "2026在日华人企业补助金白皮书_志成コンサル.html",
    disclaimer: "本白皮书依据截至编制日可公开取得的资料整理，仅用于一般性政策信息介绍，不构成采用承诺、法律或税务意见。制度、预算、补助率、金额与公募时间可能调整；申请前请以主管机关最新公募要领为准，或联系志成コンサル获取个案评估。",
    hl: [
      { k: "01", t: "四大经营升级方向", d: "AI・数字化、省力化设备、人才与雇用、节能与空调，一张地图看清制度全景。" },
      { k: "02", t: "制度 · 金额 · 补助率", d: "对照補助金与助成金差异，覆盖补助率、上限与当前公募窗口的速览表。" },
      { k: "03", t: "申请流程与耐用年数", d: "从免费诊断到实绩报告的完整流程，含各类设备与补装具的耐用年数、更新与维修规则。" },
      { k: "04", t: "风险提示与合规", d: "识别过时金额、绝对承诺、重复申请等常见陷阱，附「更可信表达」对照。" },
    ],
    facts: [
      { v: "2026", l: "年度版本" },
      { v: "4", l: "大经营升级方向" },
      { v: "17", l: "页深度内容" },
      { v: "全程中文", l: "面向在日华人企业主" },
    ],
  },
  en: {
    badge: "White Paper · 2026 Release",
    heroTitle1: "2026 Chinese-Owned Businesses in Japan", heroTitle2: "Subsidy & Business Upgrade White Paper",
    heroDesc: "Prepared by Shisei Consulting Co., Ltd. Rather than piling up policy jargon, it places your business needs, program requirements, and the order of execution on a single map, helping Chinese business owners in Japan understand and make good use of government support.",
    coverAlt: "Cover of the 2026 Subsidy White Paper for Chinese-Owned Businesses in Japan",
    introEyebrow: "About the White Paper",
    introHeading: "Running a Business in Japan: How to Understand and Use Policy Support",
    introDesc: "This white paper is for Chinese business owners operating a company or sole proprietorship in Japan who are planning investment in software, equipment, hiring, training, or energy efficiency. Four core questions run throughout: What can I apply for? Can I do it now? How should I prepare the documents? How do I avoid pitfalls?",
    readCta: "Read the White Paper Online",
    downloadCta: "Download the White Paper",
    downloadFilename: "2026在日华人企业补助金白皮书_志成コンサル.html",
    disclaimer: "This white paper is compiled from publicly available information as of the date of preparation and is intended solely for general policy information. It does not constitute a commitment to approval, or legal or tax advice. Programs, budgets, subsidy rates, amounts, and public-offering timing may change; before applying, please rely on the competent authority's latest public-offering guidelines, or contact Shisei Consulting for a case-by-case assessment.",
    hl: [
      { k: "01", t: "Four Directions for Business Upgrade", d: "AI & digitalization, labor-saving equipment, talent & employment, energy efficiency & air-conditioning — one map to see the full program landscape." },
      { k: "02", t: "Programs · Amounts · Subsidy Rates", d: "A quick-reference table comparing subsidies and grants, covering subsidy rates, ceilings, and current public-offering windows." },
      { k: "03", t: "Application Flow & Useful Life", d: "The full flow from free diagnosis to the performance report, including the useful life, replacement, and repair rules for various equipment and assistive devices." },
      { k: "04", t: "Risk Warnings & Compliance", d: "Identifies common pitfalls such as outdated amounts, absolute promises, and duplicate applications, with a comparison of \"more credible wording.\"" },
    ],
    facts: [
      { v: "2026", l: "Annual edition" },
      { v: "4", l: "Business-upgrade directions" },
      { v: "17", l: "Pages of in-depth content" },
      { v: "In Chinese", l: "For Chinese business owners in Japan" },
    ],
  },
  ja: {
    badge: "White Paper · 2026 正式リリース",
    heroTitle1: "2026 在日華人企業", heroTitle2: "補助金と経営アップグレード白書",
    heroDesc: "株式会社志成コンサルが編集。制度用語を並べるのではなく、経営ニーズ・制度条件・実行順序を同じ一枚の地図に配置し、在日華人の企業経営者が政府支援を理解し使いこなせるようにします。",
    coverAlt: "2026 在日華人企業 補助金白書 表紙",
    introEyebrow: "白書のご紹介",
    introHeading: "日本で企業を経営する——政策支援をどう理解し使いこなすか",
    introDesc: "本白書は、日本で法人または個人事業を経営し、ソフトウェア・設備・雇用・研修・省エネ投資を計画している華人経営者に向けたものです。4つの核心的な問いが全編を貫きます——何を申請できるか？今できるのか？資料はどう準備するのか？落とし穴をどう避けるのか？",
    readCta: "白書をオンラインで読む",
    downloadCta: "白書をダウンロード",
    downloadFilename: "2026在日華人企業補助金白書_志成コンサル.html",
    disclaimer: "本白書は編集日時点で公開されている資料をもとに整理したものであり、一般的な政策情報の紹介のみを目的とし、採択の約束、法律・税務上の助言を構成するものではありません。制度・予算・補助率・金額・公募時期は変更される場合があります。申請前は主管機関の最新の公募要領によるか、志成コンサルまでお問い合わせのうえ個別評価をお受けください。",
    hl: [
      { k: "01", t: "経営アップグレードの4方向", d: "AI・デジタル化、省力化設備、人材と雇用、省エネと空調——一枚の地図で制度の全体像を把握。" },
      { k: "02", t: "制度 · 金額 · 補助率", d: "補助金と助成金の違いを対照し、補助率・上限・現在の公募窓口をまとめた早見表。" },
      { k: "03", t: "申請の流れと耐用年数", d: "無料診断から実績報告までの一連の流れ。各種設備・補装具の耐用年数、更新・修理のルールを含む。" },
      { k: "04", t: "リスク提示とコンプライアンス", d: "古い金額、絶対的な約束、重複申請などのよくある落とし穴を見分け、「より信頼できる表現」との対照付き。" },
    ],
    facts: [
      { v: "2026", l: "年度版" },
      { v: "4", l: "経営アップグレードの方向" },
      { v: "17", l: "ページの深掘り内容" },
      { v: "全工程中国語", l: "在日華人の企業経営者向け" },
    ],
  },
};

export default function WhitepaperContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = T[locale];

  return (
    <main style={{ background: "#fff" }}>
      <NavClient locale={locale} dict={dict} />

      {/* Hero */}
      <section
        style={{
          padding: "116px 0 72px",
          background: "linear-gradient(180deg, #0f3937 0%, #114240 55%, #12403d 100%)",
          borderBottom: "3px solid var(--gold)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute", top: "-28%", right: "-8%",
            width: 560, height: 560, pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(196,162,58,0.14) 0%, rgba(196,162,58,0.04) 42%, transparent 70%)",
          }}
        />
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(255,255,255,0.22)",
              borderRadius: 9999, padding: "6px 16px",
              fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.75)",
              letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 26,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)" }} />
            {t.badge}
          </div>
          <h1
            className="serif"
            style={{
              fontSize: "clamp(30px, 4.6vw, 52px)", fontWeight: 900, color: "#fff",
              letterSpacing: "-0.5px", lineHeight: 1.25, marginBottom: 20, maxWidth: "20em",
            }}
          >
            {t.heroTitle1}<br />
            <span style={{ color: "var(--gold)" }}>{t.heroTitle2}</span>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", lineHeight: 1.9, maxWidth: 560 }}>
            {t.heroDesc}
          </p>

          {/* Facts */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10mm 12mm", marginTop: 40 }}>
            {t.facts.map((f) => (
              <div key={f.l}>
                <div className="serif" style={{ fontSize: 26, fontWeight: 900, color: "var(--gold)", lineHeight: 1 }}>
                  {f.v}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 6 }}>{f.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body: cover + CTA */}
      <section style={{ background: "#fff", padding: "64px 0" }}>
        <div className="wrap">
          <div className="wp-grid">
            {/* Cover */}
            <div>
              <a href="/whitepaper/2026-hakusho.html" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                <img
                  src="/whitepaper/cover.png"
                  alt={t.coverAlt}
                  style={{
                    width: "100%", height: "auto", display: "block",
                    borderRadius: 10,
                    boxShadow: "rgba(0,0,0,0.10) 0px 8px 30px, rgba(0,0,0,0.06) 0px 0px 0px 1px",
                  }}
                />
              </a>
            </div>

            {/* Right column */}
            <div>
              <div
                style={{
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                  fontSize: 11, fontWeight: 500, color: "#888",
                  letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 14,
                }}
              >
                {t.introEyebrow}
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#171717", letterSpacing: "-0.5px", marginBottom: 14 }}>
                {t.introHeading}
              </h2>
              <p style={{ fontSize: 14.5, color: "#4d4d4d", lineHeight: 1.85, marginBottom: 28 }}>
                {t.introDesc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
                <a
                  href="/whitepaper/2026-hakusho.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "linear-gradient(180deg,#2a7a77,#1a5c5a)", color: "#fff",
                    padding: "12px 22px", borderRadius: 8, fontSize: 14.5, fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {t.readCta}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/whitepaper/2026-hakusho.html"
                  download={t.downloadFilename}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "#fff", color: "#171717",
                    border: "1px solid #d8d0c0",
                    padding: "12px 22px", borderRadius: 8, fontSize: 14.5, fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {t.downloadCta}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
                  </svg>
                </a>
              </div>

              {/* Highlights */}
              <div className="wp-hl">
                {t.hl.map((h) => (
                  <div key={h.k} style={{ display: "flex", gap: 14, padding: "14px 0", borderTop: "1px solid #eee" }}>
                    <div className="serif" style={{ fontSize: 15, fontWeight: 700, color: "var(--gold)", flexShrink: 0, width: 24 }}>
                      {h.k}
                    </div>
                    <div>
                      <div style={{ fontSize: 14.5, fontWeight: 700, color: "#171717", marginBottom: 3 }}>{h.t}</div>
                      <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{h.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div
            style={{
              marginTop: 48, padding: "16px 20px",
              background: "#faf7f0", border: "1px solid #ece3d4",
              borderLeft: "3px solid var(--gold)", borderRadius: 6,
            }}
          >
            <p style={{ fontSize: 12.5, color: "#7a6248", lineHeight: 1.75 }}>
              {t.disclaimer}
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .wp-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 48px; align-items: start; }
        @media (max-width: 820px) {
          .wp-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
