import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "2026 在日华人企业补助金白皮书",
  description:
    "《2026 在日华人企业补助金与经营升级白皮书》正式发布。由株式会社志成コンサル编制，系统梳理 AI・数字化、省力化设备、人才助成、节能投资四大方向的制度、金额、补助率与申请要点，面向在日华人中小企业主。",
  openGraph: {
    title: "2026 在日华人企业补助金白皮书 | 志成コンサル",
    description:
      "四大方向、制度全景、申请流程与风险提示——面向在日华人企业主的补助金实务指南。",
    images: ["/whitepaper/cover.png"],
  },
};

const HL = [
  { k: "01", t: "四大经营升级方向", d: "AI・数字化、省力化设备、人才与雇用、节能与空调，一张地图看清制度全景。" },
  { k: "02", t: "制度 · 金额 · 补助率", d: "对照補助金与助成金差异，覆盖补助率、上限与当前公募窗口的速览表。" },
  { k: "03", t: "申请流程与耐用年数", d: "从免费诊断到实绩报告的完整流程，含各类设备与补装具的耐用年数、更新与维修规则。" },
  { k: "04", t: "风险提示与合规", d: "识别过时金额、绝对承诺、重复申请等常见陷阱，附「更可信表达」对照。" },
];

const FACTS = [
  { v: "2026", l: "年度版本" },
  { v: "4", l: "大经营升级方向" },
  { v: "17", l: "页深度内容" },
  { v: "全程中文", l: "面向在日华人企业主" },
];

export default function WhitepaperPage() {
  return (
    <main style={{ background: "#fff" }}>
      <NavClient />

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
            White Paper · 2026 正式发布
          </div>
          <h1
            className="serif"
            style={{
              fontSize: "clamp(30px, 4.6vw, 52px)", fontWeight: 900, color: "#fff",
              letterSpacing: "-0.5px", lineHeight: 1.25, marginBottom: 20, maxWidth: "20em",
            }}
          >
            2026 在日华人企业<br />
            <span style={{ color: "var(--gold)" }}>补助金与经营升级白皮书</span>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", lineHeight: 1.9, maxWidth: 560 }}>
            由株式会社志成コンサル编制。不做政策名词堆砌，而是把经营需求、制度条件与执行顺序放在同一张地图里，帮在日华人企业主看懂并用好政府支援。
          </p>

          {/* Facts */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10mm 12mm", marginTop: 40 }}>
            {FACTS.map((f) => (
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
                  alt="2026 在日华人企业补助金白皮书 封面"
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
                白皮书简介
              </div>
              <h2 style={{ fontSize: 24, fontWeight: 700, color: "#171717", letterSpacing: "-0.5px", marginBottom: 14 }}>
                在日本经营企业，如何看懂并用好政策支援
              </h2>
              <p style={{ fontSize: 14.5, color: "#4d4d4d", lineHeight: 1.85, marginBottom: 28 }}>
                本白皮书面向在日本经营法人或个人事业、正在规划软件、设备、用工、培训或节能投资的华人经营者。四个核心问题贯穿全篇：我能申请什么？现在能不能做？材料该怎么准备？如何避免踩坑？
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
                  在线阅读白皮书
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/whitepaper/2026-hakusho.html"
                  download="2026在日华人企业补助金白皮书_志成コンサル.html"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "#fff", color: "#171717",
                    border: "1px solid #d8d0c0",
                    padding: "12px 22px", borderRadius: 8, fontSize: 14.5, fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  下载白皮书
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
                  </svg>
                </a>
              </div>

              {/* Highlights */}
              <div className="wp-hl">
                {HL.map((h) => (
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
              本白皮书依据截至编制日可公开取得的资料整理，仅用于一般性政策信息介绍，不构成采用承诺、法律或税务意见。制度、预算、补助率、金额与公募时间可能调整；申请前请以主管机关最新公募要领为准，或联系志成コンサル获取个案评估。
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

      <Footer />
    </main>
  );
}
