import Link from "next/link";
import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "服务流程",
  description: "志成コンサル的补助金申请服务流程详解——从初次咨询到资金到账，6步全程代办",
};

const steps = [
  { n: "01", title: "免费咨询·初次接触", duration: "当日〜次个工作日", desc: "通过微信（pr2024188）或电话联系我们。专业顾问用中文与您沟通，了解企业基本情况、业种和规模。", points: ["全程中文，无语言障碍", "初次咨询完全免费", "当日工作日回复"] },
  { n: "02", title: "补助金诊断·方案匹配", duration: "1〜3个工作日", desc: "根据您的企业信息，从6种以上主要补助金中筛选最适合方案，预估可获批金额并详细说明。", points: ["多种补助金横向比较", "预估获批金额透明告知", "说明申请成功可能性"] },
  { n: "03", title: "申请方案制定·签约", duration: "3〜5个工作日", desc: "制定详细申请计划书，明确时间轴、资料清单、预期金额及成功报酬率，签署委托合同。", points: ["申请计划书全程透明", "无成功不收费书面保证", "资料清单提前告知"] },
  { n: "04", title: "资料收集与整理", duration: "2〜4周", desc: "专业团队协助收集申请文件，行政书士负责申请书类制作和翻译，确保内容准确完整。", points: ["事业计划书制作支援", "必要书类收集整备", "中日双语资料处理"] },
  { n: "05", title: "提交申请·跟进审查", duration: "申请受理后1〜6个月", desc: "持牌专业人员代为提交申请，格式合规。审查期间跟踪进度，补充质询由我方全程处理。", points: ["专业人员代为提交", "审查进度定期汇报", "补充质询全程代理"] },
  { n: "06", title: "获批通知·资金到账", duration: "获批后1〜3个月", desc: "获批后协助完成所有后续手续，资金到账后按约定支付服务费。后续追加申请也可商量。", points: ["获批手续全程陪同", "资金到账后再付费", "后续追加申请可商量"] },
];

const faqs = [
  { q: "全程需要多长时间才能拿到补助金？", a: "从初次咨询到资金到账，通常需要6个月〜1年。省力化补助金约3〜6个月，AI导入补助金约2〜3个月，具体时间轴在初次咨询时会详细说明。" },
  { q: "如果申请失败，需要支付费用吗？", a: "完全不需要。我们严格执行「无成功不收费」原则，申请失败时无需支付任何费用，包括资料制作费、交通费等，承诺书面写入合同。" },
  { q: "日语不好的话可以申请吗？", a: "完全没有问题。顾问团队全程中文对接，所有日语文件由我们的专业人员处理，您只需配合提供企业信息和资料即可。" },
  { q: "个人事业主也可以申请吗？", a: "可以申请。小规模持续化补助金、AI·IT导入补助金、员工转正助成金等均对个人事业主开放，具体资格请通过免费咨询确认。" },
  { q: "成功报酬是多少？", a: "通常为获批金额的10%〜20%，因补助金种类和申请金额而异。具体报酬率在签署合同前完全透明告知，不存在任何隐藏费用。" },
  { q: "刚创业的企业也可以申请吗？", a: "大部分补助金要求企业已在运营，但也有针对创业初期的特例（如小规模持续化补助金创业框架），请通过免费咨询了解适合您的选项。" },
];

export default function ServicePage() {
  return (
    <main>
      <NavClient />

      {/* Hero */}
      <section style={{ position: 'relative', background: '#0c1525', padding: '80px 0 72px', overflow: 'hidden' }}>
        {/* Orb decorations */}
        <div className="hero-orb" style={{ width: 500, height: 500, background: 'rgba(83,58,253,0.20)', top: -160, right: -100, filter: 'blur(80px)' }} />
        <div className="hero-orb" style={{ width: 350, height: 350, background: 'rgba(139,92,246,0.12)', bottom: -80, left: -60, filter: 'blur(60px)' }} />
        <div className="page-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="label-tag" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>服务流程</div>
          <h1 className="gradient-text" style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: 16, maxWidth: 600 }}>
            6步全程代办服务
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, maxWidth: 520 }}>
            从初次咨询到资金到账，全程中文陪同。<strong style={{ color: "#fff" }}>无成功不收费</strong>，彻底消除申请风险。
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="page-wrap">
          <div style={{ maxWidth: 560, marginBottom: 56 }}>
            <div className="label-tag">申请流程</div>
            <h2 className="section-heading">6步流程详解</h2>
            <p className="section-sub">清晰透明，让您随时掌握申请进度。</p>
          </div>
          <div style={{ maxWidth: 800 }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 32, position: "relative" }}>
                {/* Left: number + line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: "#533afd", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 15, fontWeight: 800, flexShrink: 0,
                  }}>
                    {s.n}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="timeline-line" style={{ width: 2, flex: 1, minHeight: 32, background: "linear-gradient(to bottom, #533afd, #e2e8f0)", margin: "8px 0" }} />
                  )}
                </div>
                {/* Right: content */}
                <div style={{ flex: 1, paddingTop: 8, paddingBottom: i < steps.length - 1 ? 40 : 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 18, fontWeight: 700, color: "#0f172a" }}>{s.title}</span>
                    <span style={{ fontSize: 12, color: "#94a3b8", background: "#f1f5f9", padding: "2px 10px", borderRadius: 100, whiteSpace: "nowrap" }}>
                      {s.duration}
                    </span>
                  </div>
                  <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, marginBottom: 16 }}>{s.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {s.points.map((p, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#334155" }}>
                        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(83,58,253,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="page-wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
            <div className="label-tag">FAQ</div>
            <h2 className="section-heading">常见问题解答</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>关于补助金申请，您最常问到的问题。</p>
          </div>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "24px 28px" }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 12 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(83,58,253,0.1)", color: "#533afd", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, flexShrink: 0 }}>Q</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", lineHeight: 1.4 }}>{f.q}</div>
                </div>
                <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, paddingLeft: 44 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', background: "#0c1525", padding: "80px 0", textAlign: "center", overflow: 'hidden' }}>
        <div className="hero-orb" style={{ width: 400, height: 400, background: 'rgba(83,58,253,0.18)', top: -100, right: -60, filter: 'blur(80px)' }} />
        <div className="hero-orb" style={{ width: 300, height: 300, background: 'rgba(139,92,246,0.12)', bottom: -80, left: -40, filter: 'blur(60px)' }} />
        <div className="page-wrap" style={{ maxWidth: 560, margin: "0 auto", position: 'relative', zIndex: 1 }}>
          <h2 className="gradient-text" style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>立即开始免费咨询</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 36 }}>3分钟问诊，精准推荐最优补助金方案。完全免费，无任何购买义务。</p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#533afd", padding: "14px 32px", borderRadius: 10, fontSize: 16, fontWeight: 700, boxShadow: "0 8px 32px rgba(83,58,253,0.35), 0 2px 8px rgba(0,0,0,0.15)" }}>
            申请免费咨询
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
