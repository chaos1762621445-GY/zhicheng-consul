import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免费咨询 & 补助金自测",
  description: "免费测试您的补助金申请资格，3分钟了解可获得多少补助金。",
};

export default function ContactPage() {
  return (
    <main>
      <nav style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: 18, color: "#1a56db", textDecoration: "none" }}>志成コンサル</Link>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <Link href="/subsidies" style={{ color: "#374151", textDecoration: "none", fontSize: 14 }}>补助金种类</Link>
            <Link href="/service" style={{ color: "#374151", textDecoration: "none", fontSize: 14 }}>服务流程</Link>
            <Link href="/blog" style={{ color: "#374151", textDecoration: "none", fontSize: 14 }}>知识库</Link>
            <Link href="/contact" style={{ background: "#1a56db", color: "#fff", padding: "8px 20px", borderRadius: 6, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>免费咨询</Link>
          </div>
        </div>
      </nav>

      <section style={{ background: "#f9fafb", padding: "48px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: 36, marginBottom: 12 }}>免费补助金资格测试</h1>
        <p style={{ color: "#6b7280", fontSize: 16 }}>3分钟问卷，精准了解您能申请哪些补助金</p>
      </section>

      {/* 嵌入留资自测工具 */}
      <section style={{ padding: "0" }}>
        <iframe
          src="/quiz"
          style={{ width: "100%", border: "none", minHeight: "900px", display: "block" }}
          title="补助金资格自测"
        />
      </section>

      {/* 直接联系 */}
      <section style={{ background: "#f9fafb", padding: "48px 24px" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 22, marginBottom: 16 }}>或者直接联系我们</h2>
          <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
            微信：<strong>pr2024188</strong><br />
            添加微信，发送「补助金」获取专属顾问服务
          </p>
        </div>
      </section>
    </main>
  );
}
