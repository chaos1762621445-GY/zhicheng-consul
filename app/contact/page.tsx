import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "免费咨询",
  description: "免费补助金资格诊断——3分钟问卷，志成コンサル专业团队当日回复",
};

const contacts = [
  {
    label: "微信 WeChat",
    value: "pr2024188",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    label: "电话 Tel",
    value: "03-6265-9756",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: "邮箱 Email",
    value: "knakano.sekiyoshi@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: "地址 Address",
    value: "〒542-0082 大阪府大阪市中央区島之内1-13-3 おおきに東心斎橋ビル301号室",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main style={{ background: "#fff" }}>
      <NavClient />

      {/* Page hero — Vercel style, centered, minimal */}
      <section style={{
        padding: "96px 0 80px",
        borderBottom: "1px solid #eaeaea",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(#eaeaea 1px, transparent 1px), linear-gradient(90deg, #eaeaea 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
          opacity: 0.3,
        }} />
        <div className="wrap" style={{ maxWidth: 640, position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "#f5f5f5", border: "1px solid #e5e5e5",
            borderRadius: 9999, padding: "5px 14px",
            fontSize: 11, fontWeight: 600, color: "#555",
            letterSpacing: ".08em", textTransform: "uppercase",
            marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
            工作日当日回复
          </div>
          <h1 style={{
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: 800, color: "#171717",
            letterSpacing: "-2px", lineHeight: 1.05,
            marginBottom: 20,
          }}>
            免费补助金<br />资格诊断
          </h1>
          <p style={{ fontSize: 17, color: "#4d4d4d", lineHeight: 1.75, maxWidth: 480, margin: "0 auto" }}>
            填写下方问卷，专业顾问当日为您匹配最适合的补助金方案。完全免费，无任何购买义务。
          </p>
        </div>
      </section>

      {/* Main two-col */}
      <section style={{ padding: "80px 0 120px", background: "#fff" }}>
        <div className="wrap">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 64,
            alignItems: "start",
          }}>

            {/* Left: contacts */}
            <div>
              <div style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 11, fontWeight: 500,
                color: "#888", letterSpacing: ".12em",
                textTransform: "uppercase", marginBottom: 16,
              }}>联系方式</div>

              <h2 style={{
                fontSize: 26, fontWeight: 700, color: "#171717",
                letterSpacing: "-0.6px", marginBottom: 8,
              }}>直接联系我们</h2>
              <p style={{ fontSize: 14, color: "#4d4d4d", lineHeight: 1.7, marginBottom: 32 }}>
                工作日当日回复，全程中文服务。
              </p>

              {/* Contact list */}
              <div style={{ display: "flex", flexDirection: "column", marginBottom: 40 }}>
                {contacts.map((c, i) => (
                  <div key={i} style={{
                    display: "flex", gap: 16, alignItems: "flex-start",
                    padding: "18px 0",
                    borderBottom: "1px solid #eaeaea",
                  }}>
                    <div style={{
                      width: 36, height: 36, flexShrink: 0,
                      background: "#f5f5f5", borderRadius: 8,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#171717",
                    }}>
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: "#888", marginBottom: 4, fontWeight: 500, letterSpacing: ".04em" }}>{c.label}</div>
                      <div style={{ fontSize: 14.5, fontWeight: 600, color: "#171717", lineHeight: 1.5 }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* QR card */}
              <div style={{
                display: "flex", gap: 20, alignItems: "center",
                background: "#fafafa",
                boxShadow: "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, #fafafa 0px 0px 0px 1px inset",
                borderRadius: 8, padding: "20px 24px",
              }}>
                <div style={{ background: "#fff", borderRadius: 8, padding: 8, flexShrink: 0, boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px" }}>
                  <img src="/wechat-qr.jpg" alt="微信二维码" style={{ width: 100, height: 100, display: "block", borderRadius: 4 }} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#171717", marginBottom: 8 }}>扫码添加微信</div>
                  <p style={{ fontSize: 13.5, color: "#4d4d4d", lineHeight: 1.65, marginBottom: 8 }}>
                    添加微信 <strong style={{ color: "#171717" }}>pr2024188</strong>，专业顾问当日（工作日）免费诊断。
                  </p>
                  <div style={{ fontSize: 12, color: "#888" }}>营业时间：周一〜周六 9:00〜18:00</div>
                </div>
              </div>
            </div>

            {/* Right: quiz iframe */}
            <div>
              <div style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 11, fontWeight: 500,
                color: "#888", letterSpacing: ".12em",
                textTransform: "uppercase", marginBottom: 16,
              }}>补助金资格自测</div>
              <h2 style={{
                fontSize: 26, fontWeight: 700, color: "#171717",
                letterSpacing: "-0.6px", marginBottom: 8,
              }}>3分钟快速测试</h2>
              <p style={{ fontSize: 14, color: "#4d4d4d", lineHeight: 1.7, marginBottom: 24 }}>
                填写下方问卷，了解您能申请哪些补助金。
              </p>

              <div style={{
                boxShadow: "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, #fafafa 0px 0px 0px 1px inset",
                borderRadius: 8, overflow: "hidden",
                background: "#fff",
              }}>
                <iframe
                  src="/quiz.html"
                  style={{ width: "100%", height: 660, border: "none", display: "block" }}
                  title="补助金资格自测"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
