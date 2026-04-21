import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "补助金种类",
  description: "在日华人企业主可申请的日本政府补助金完整指南，包括IT导入补助金、小型事业者持续化补助金、事业再构筑补助金等。",
};

const subsidies = [
  {
    icon: "💻",
    name: "IT导入补助金",
    tag: "难度低 · 推荐",
    amount: "最高75万円",
    rate: "補助率 1/2〜3/4",
    target: "引入会计软件、ERP、收银系统、预约管理系统等IT工具的企业",
    merit: "申请流程相对简单，审批周期短，是最适合华人企业主入门的补助金",
    points: ["会计软件（freee、MFクラウド等）", "POS收银系统", "库存管理系统", "电商平台构建", "网络安全工具"],
  },
  {
    icon: "🏪",
    name: "小型事业者持续化补助金",
    tag: "最受欢迎",
    amount: "最高250万円",
    rate: "補助率 2/3",
    target: "希望扩大销售、拓展市场的小型企业和个人事业主",
    merit: "个人事业主也可申请，用途广泛，广告、展会、装修均可使用",
    points: ["广告宣传（网络广告、传单）", "展示会出展", "店铺装修改装", "设备购置", "EC网站构建"],
  },
  {
    icon: "🏭",
    name: "事業再構築補助金",
    tag: "金额最大",
    amount: "最高1.5億円",
    rate: "補助率 1/2〜2/3",
    target: "计划进入新领域、转型业务或重组事业的企业",
    merit: "金额最大，适合有大规模转型计划的企业，需要详细的事业计划书",
    points: ["进入新业务领域", "业态转换", "国内外市场开拓", "供应链重构", "设备大规模购置"],
  },
  {
    icon: "🔧",
    name: "ものづくり補助金",
    tag: "制造业首选",
    amount: "最高1250万円",
    rate: "補助率 1/2〜2/3",
    target: "引进新设备、开发新产品的制造业及服务业",
    merit: "不限于制造业，餐饮业引进新设备也可申请",
    points: ["生产设备购置", "新产品开发", "试验研究", "外注加工", "クラウドサービス利用"],
  },
];

export default function SubsidiesPage() {
  return (
    <main>
      <nav style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Link href="/" style={{ fontWeight: 800, fontSize: 18, color: "#1a56db", textDecoration: "none" }}>志成コンサル</Link>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <Link href="/subsidies" style={{ color: "#1a56db", textDecoration: "none", fontSize: 14, fontWeight: 600 }}>补助金种类</Link>
            <Link href="/service" style={{ color: "#374151", textDecoration: "none", fontSize: 14 }}>服务流程</Link>
            <Link href="/blog" style={{ color: "#374151", textDecoration: "none", fontSize: 14 }}>知识库</Link>
            <Link href="/contact" style={{ background: "#1a56db", color: "#fff", padding: "8px 20px", borderRadius: 6, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>免费咨询</Link>
          </div>
        </div>
      </nav>

      <section style={{ background: "#f9fafb", padding: "48px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: 36, marginBottom: 12 }}>在日华人可申请的补助金</h1>
        <p style={{ color: "#6b7280", fontSize: 16, maxWidth: 600, margin: "0 auto" }}>
          日本政府每年提供数千亿円的中小企业补助金，您的企业已经申请了吗？
        </p>
      </section>

      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>
          {subsidies.map((s, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
                <div style={{ fontSize: 48 }}>{s.icon}</div>
                <div style={{ flex: 1, minWidth: 240 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                    <h2 style={{ fontSize: 22 }}>{s.name}</h2>
                    <span style={{ background: "#eff6ff", color: "#1a56db", fontSize: 11, padding: "3px 10px", borderRadius: 10, fontWeight: 600 }}>{s.tag}</span>
                  </div>
                  <div style={{ display: "flex", gap: 20, marginBottom: 16, flexWrap: "wrap" }}>
                    <div>
                      <span style={{ fontSize: 12, color: "#9ca3af" }}>最高补助额</span>
                      <div style={{ fontSize: 20, fontWeight: 800, color: "#1a56db" }}>{s.amount}</div>
                    </div>
                    <div>
                      <span style={{ fontSize: 12, color: "#9ca3af" }}>补助比例</span>
                      <div style={{ fontSize: 16, fontWeight: 600, color: "#374151" }}>{s.rate}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: "#374151", marginBottom: 12, lineHeight: 1.7 }}><strong>适用对象：</strong>{s.target}</p>
                  <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 16, lineHeight: 1.7 }}>{s.merit}</p>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 8 }}>补助范围包括：</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {s.points.map((p, j) => (
                        <span key={j} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 6, padding: "4px 10px", fontSize: 12, color: "#374151" }}>{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#1e3a8a", padding: "72px 24px", textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontSize: 28, marginBottom: 16 }}>不确定能申请哪个？</h2>
        <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 32 }}>3分钟免费测试，我们为您精准匹配</p>
        <Link href="/contact" style={{ background: "#fbbf24", color: "#111928", padding: "14px 40px", borderRadius: 8, textDecoration: "none", fontSize: 16, fontWeight: 700, display: "inline-block" }}>
          免费测试资格 →
        </Link>
      </section>
    </main>
  );
}
