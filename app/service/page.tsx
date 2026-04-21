import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务流程",
  description: "志成コンサル补助金申请代办服务流程，全程中文，无成功不收费。",
};

const steps = [
  { num: "01", title: "免费咨询 & 资格测试", desc: "填写问卷或直接联系我们，3分钟了解您的企业可以申请哪些补助金，以及预计可获得的金额。完全免费，无任何义务。" },
  { num: "02", title: "签署委托合同", desc: "确认方案后签署服务合同。我们采用成功报酬制，申请未成功则不收取任何费用，零风险。" },
  { num: "03", title: "资料收集 & 事业计划书制作", desc: "我们全程指导您准备所需材料，并由专业顾问撰写符合审查标准的事业计划书。全程中文沟通。" },
  { num: "04", title: "提交申请", desc: "代理您向主管部门提交申请，负责所有日文材料的整理和提交手续。" },
  { num: "05", title: "等待审查结果", desc: "审查期间保持跟进，如有补充材料要求立即响应，最大化通过概率。" },
  { num: "06", title: "获批 & 实施", desc: "获批后指导您进行采购和实施，确保符合补助金使用规定，顺利完成报告。" },
];

export default function ServicePage() {
  return (
    <main>
      <nav style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: 18, color: "#1a56db", textDecoration: "none" }}>志成コンサル</Link>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <Link href="/subsidies" style={{ color: "#374151", textDecoration: "none", fontSize: 14 }}>补助金种类</Link>
            <Link href="/service" style={{ color: "#1a56db", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>服务流程</Link>
            <Link href="/blog" style={{ color: "#374151", textDecoration: "none", fontSize: 14 }}>知识库</Link>
            <Link href="/contact" style={{ background: "#1a56db", color: "#fff", padding: "8px 20px", borderRadius: 6, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>免费咨询</Link>
          </div>
        </div>
      </nav>

      <section style={{ background: "#f9fafb", padding: "48px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: 36, marginBottom: 12 }}>服务流程</h1>
        <p style={{ color: "#6b7280", fontSize: 16 }}>从咨询到获批，全程中文，无成功不收费</p>
      </section>

      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 24, marginBottom: 48 }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#1a56db", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16 }}>
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: 2, background: "#e5e7eb", margin: "8px auto 0", height: 40 }} />
                )}
              </div>
              <div style={{ paddingTop: 12 }}>
                <h3 style={{ fontSize: 18, marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.8 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#f9fafb", padding: "48px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: 28, marginBottom: 32 }}>为什么选择志成コンサル？</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            {[
              { icon: "🀄", title: "全程中文", desc: "母语沟通，无语言障碍" },
              { icon: "✅", title: "无成功不收费", desc: "零风险，获批再付款" },
              { icon: "📋", title: "专业团队", desc: "行政書士・税理士联合" },
              { icon: "⚡", title: "高通过率", desc: "业界领先成功率" },
            ].map((f, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 24 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: "#111928" }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "#6b7280" }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#1e3a8a", padding: "72px 24px", textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontSize: 28, marginBottom: 16 }}>立即开始第一步</h2>
        <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 32 }}>免费咨询，3分钟了解您的补助金资格</p>
        <Link href="/contact" style={{ background: "#fbbf24", color: "#111928", padding: "14px 40px", borderRadius: 8, textDecoration: "none", fontSize: 16, fontWeight: 700, display: "inline-block" }}>
          开始免费咨询 →
        </Link>
      </section>
    </main>
  );
}
