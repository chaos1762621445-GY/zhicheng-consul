import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务流程",
  description: "志成コンサル补助金申请服务完整流程——从免费资格诊断到获批入账，全程6步，平均40天内完成",
};

const Nav = () => (
  <nav className="nav">
    <div className="nav-inner">
      <Link href="/" className="nav-logo">
        <span className="nav-logo-mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
          </svg>
        </span>
        志成コンサル
      </Link>
      <div className="nav-links">
        <Link href="/subsidies" className="nav-link">补助金种类</Link>
        <Link href="/service" className="nav-link active">服务流程</Link>
        <Link href="/blog" className="nav-link">知识库</Link>
        <Link href="/contact" className="nav-cta">免费咨询</Link>
      </div>
    </div>
  </nav>
);

const steps = [
  {
    num: "01",
    phase: "初步评估",
    title: "免费资格诊断",
    duration: "当日回复",
    desc: "填写我们的在线问卷（约3分钟），告诉我们您的企业规模、行业、当前员工情况。我们的顾问团队当日分析并回复适合您的补助金种类及预估金额，完全免费，无任何义务。",
    checklist: ["填写在线问卷（约3分钟）", "顾问当日回复分析结果", "预估可获补助金额", "确认初步适用方案"],
  },
  {
    num: "02",
    phase: "方案确认",
    title: "签订委托协议",
    duration: "1〜3天",
    desc: "双方确认服务方案后签订委托合同。合同明确约定：补助率（成功报酬比例）、服务范围、申请期限等核心条款。申请失败零收费条款写入合同，保障您的利益。",
    checklist: ["确认补助金方案", "签订委托合同", "明确成功报酬比例", "确认申请时间线"],
  },
  {
    num: "03",
    phase: "材料准备",
    title: "收集企业资料",
    duration: "7〜14天",
    desc: "我们提供详细的资料清单指引，您只需按清单提供基础企业资料。所有日文材料、申请书、事业計画書均由我们的行政书士团队专业撰写，无需您具备日语能力。",
    checklist: ["提供企业登记证明", "提供财务基础资料", "行政书士撰写申请书", "税理士审核财务部分"],
  },
  {
    num: "04",
    phase: "提交申请",
    title: "专业团队提交",
    duration: "1〜3天",
    desc: "行政书士完成最终审核后，通过官方电子申请系统提交补助金申请。我们确保材料格式、内容完整合规，最大程度提高审查通过率，避免因材料问题被退回。",
    checklist: ["行政书士最终审核", "通过官方系统提交", "获取申请受理号", "确认申请状态"],
  },
  {
    num: "05",
    phase: "审核跟进",
    title: "全程跟踪进度",
    duration: "30〜90天",
    desc: "审核期间我们定期向您汇报进展。如审查机关要求补充材料或修改，我们第一时间响应处理，无需您直接与官方机关沟通，语言障碍由我们全程承担。",
    checklist: ["定期进度报告", "及时响应补充要求", "与审查机关沟通", "跟踪审查结果"],
  },
  {
    num: "06",
    phase: "获批入账",
    title: "补助金到账",
    duration: "获批后30〜60天",
    desc: "获批通知后，我们指导您完成购买、导入设备/软件，并准备实绩报告（実績報告書）。报告通过后，补助金将直接划入您的企业账户。成功后按合同约定支付成功报酬。",
    checklist: ["指导实施采购计划", "撰写实绩报告书", "补助金划入企业账户", "按约定支付成功报酬"],
  },
];

const faqs = [
  { q: "整个流程需要多长时间？", a: "从签约到提交申请通常需要20〜40天。审核期因补助金种类不同而异，一般为1〜3个月。获批后实绩报告提交完成后约30〜60天入账。全程约4〜6个月。" },
  { q: "不懂日语也可以申请吗？", a: "完全可以。所有日文材料均由我们的行政书士团队撰写，与官方机关的沟通也由我们全程负责。您只需用中文提供基础信息即可。" },
  { q: "如果申请失败，收费如何？", a: "申请失败则零收费。这是我们的核心承诺，写入每份委托合同。我们只有在您成功获批后才收取成功报酬。" },
  { q: "可以同时申请多种补助金吗？", a: "可以。部分补助金可以叠加申请，例如キャリアアップ助成金和人材開発支援助成金可以同时申请。我们会为您制定最优化的组合申请方案。" },
  { q: "个人事业主（個人事業主）也可以申请吗？", a: "大多数补助金对个人事业主开放。具体资格要求因补助金种类而异，我们的免费诊断会告诉您适合的方案。" },
];

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function ServicePage() {
  return (
    <main>
      <Nav />

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-label">服务流程</div>
          <h1>从咨询到获批，全程6步</h1>
          <p>透明、高效的标准化流程，平均40天内完成申请提交，全程中文无障碍服务</p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 40, alignItems: "flex-start" }}>
                <div style={{ textAlign: "center" }}>
                  <div className="process-circle" style={{ margin: "0 auto 12px", width: 64, height: 64, fontSize: 22 }}>{step.num}</div>
                  <div style={{ fontSize: 12, color: "var(--blue)", fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase" }}>{step.phase}</div>
                  <div style={{ fontSize: 12, color: "var(--text-3)", marginTop: 4 }}>{step.duration}</div>
                </div>
                <div style={{ background: "var(--bg-2)", borderRadius: "var(--r-lg)", padding: "32px 36px", border: "1px solid var(--border)" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>{step.title}</h3>
                  <p style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.75, marginBottom: 20 }}>{step.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
                    {step.checklist.map((item, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--text-2)" }}>
                        <span style={{ color: "var(--blue)" }}><IconCheck /></span>
                        {item}
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
      <section className="section-alt">
        <div className="section-inner">
          <div className="section-head-centered">
            <div className="section-label">常见问题</div>
            <h2 className="section-title">FAQ</h2>
          </div>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--r-lg)", padding: "28px 32px" }}>
                <div style={{ fontWeight: 600, fontSize: 16, color: "var(--text)", marginBottom: 10 }}>Q. {faq.q}</div>
                <div style={{ fontSize: 15, color: "var(--text-2)", lineHeight: 1.75 }}>A. {faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-banner">
        <div className="cta-banner-inner">
          <h2>今すぐ無料診断を始める</h2>
          <p>3分钟问卷，我们当日回复您的补助金方案，完全免费</p>
          <Link href="/contact" className="btn-gold">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            开始免费自测
          </Link>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">株式会社志成コンサル</div>
            <p className="footer-tagline">专为在日华人企业主提供日本政府补助金申请代办服务。</p>
          </div>
          <div className="footer-contact">
            <h4>联系我们</h4>
            <div className="footer-contact-item">微信：<strong>pr2024188</strong></div>
            <div className="footer-contact-item">营业时间：周一至周六 9:00〜18:00</div>
          </div>
        </div>
        <div className="footer-bottom">© 2025 株式会社志成コンサル. All rights reserved.</div>
      </footer>
    </main>
  );
}
