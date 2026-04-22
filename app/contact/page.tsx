import Link from "next/link";
import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "免费咨询",
  description: "免费补助金资格诊断——3分钟问卷，志成コンサル专业团队当日回复",
};

const contacts = [
  { icon: "💬", label: "微信 WeChat", value: "pr2024188" },
  { icon: "📞", label: "电话 Tel", value: "03-6265-9756" },
  { icon: "📧", label: "邮箱 Email", value: "knakano.sekiyoshi@gmail.com" },
  { icon: "📍", label: "地址 Address", value: "〒542-0082 大阪府大阪市中央区島之内1-13-3 おおきに東心斎橋ビル301号室" },
];

export default function ContactPage() {
  return (
    <main>
      <NavClient />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)", padding: "80px 0 72px" }}>
        <div className="page-wrap">
          <div className="label-tag" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>免费咨询</div>
          <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: 16, maxWidth: 560 }}>
            免费补助金资格诊断
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", lineHeight: 1.75, maxWidth: 480 }}>
            填写下方问卷，专业顾问当日为您匹配最适合的补助金方案。完全免费，无任何购买义务。
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="page-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="max-md:grid-cols-1">

            {/* Left: contacts + QR */}
            <div>
              <div className="label-tag">联系方式</div>
              <h2 className="section-heading">直接联系我们</h2>
              <p className="section-sub" style={{ marginBottom: 32 }}>工作日当日回复，全程中文服务。</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {contacts.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 12, padding: "16px 20px" }}>
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icon}</span>
                    <div>
                      <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 4 }}>{c.label}</div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: "#0f172a", lineHeight: 1.5 }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* QR */}
              <div style={{ display: "flex", gap: 24, alignItems: "center", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24 }}>
                <img src="/wechat-qr.jpg" alt="微信二维码" style={{ width: 120, height: 120, borderRadius: 10, flexShrink: 0, background: "#fff", padding: 4 }} />
                <div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>扫码添加微信</div>
                  <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.65 }}>
                    添加微信 <strong style={{ color: "#0f172a" }}>pr2024188</strong>，专业顾问当日（工作日）为您免费诊断。
                  </p>
                  <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 8 }}>营业时间：周一〜周六 9:00〜18:00</div>
                </div>
              </div>
            </div>

            {/* Right: quiz */}
            <div>
              <div className="label-tag">补助金资格自测</div>
              <h2 className="section-heading">3分钟快速测试</h2>
              <p className="section-sub" style={{ marginBottom: 24 }}>填写下方问卷，了解您能申请哪些补助金。</p>
              <div style={{ border: "1px solid #e2e8f0", borderRadius: 16, overflow: "hidden" }}>
                <iframe src="/quiz.html" style={{ width: "100%", height: 640, border: "none", display: "block" }} title="补助金资格自测" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
