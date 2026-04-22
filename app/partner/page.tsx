import Link from "next/link";
import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaSection from "../components/CtaSection";

export const metadata: Metadata = {
  title: "代理合作",
  description: "加入志成コンサル代理网络，享受最高 60% 透明分成。适合税理士、行政书士、社劳士、会计事务所、微信群主、留学中介、房产中介等人群。",
};

const targetGroups = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "税理士·会计师事务所",
    desc: "您已与客户建立深厚信任关系，将补助金服务作为增值项目，在不增加额外负担的前提下为客户创造更大价值，同时为您带来可观的分成收入。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "行政书士·社会保険労務士",
    desc: "您的专业资质与我们的服务天然契合。通过与我们合作，您可以扩展业务边界，为客户提供一站式的补助金申请服务，无需承担申请失败的风险。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "微信群主·社群运营者",
    desc: "如果您运营在日华人社群、企业家群或商会，您的社交影响力就是最有价值的资产。每成功推荐一家企业，即可获得最高 60% 的服务费分成。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "留学中介·教育顾问",
    desc: "您服务的许多留学生毕业后在日本创业。为他们的企业对接补助金申请服务，既是对客户长期关系的深化，也能为您带来额外的合作收入。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "房产中介·商业地产顾问",
    desc: "购买或租赁商业物业的客户，往往正处于创业扩张阶段，是补助金申请的理想候选人。您的一次介绍，可能为客户带来数百万円的资金支持。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "其他华人服务从业者",
    desc: "只要您身边有经营企业的在日华人朋友或客户，您就有机会成为我们的合作代理。零门槛入门，我们提供完整的培训支持和营销材料。",
  },
];

const steps = [
  {
    num: "01",
    title: "提交报名申请",
    desc: "填写代理合作申请表，提供您的基本信息和业务背景。我们会在1个工作日内与您联系确认。",
  },
  {
    num: "02",
    title: "参加线上培训",
    desc: "参加约2小时的线上培训，了解各类补助金基础知识、客户对接话术和合规要求。全程中文，简单易学。",
  },
  {
    num: "03",
    title: "对接意向客户",
    desc: "向有意向的客户介绍补助金服务，收集基本企业信息，通过我们的专属系统提交客户信息。我们的专业团队全程跟进后续流程。",
  },
  {
    num: "04",
    title: "月结获得分成",
    desc: "每月固定结算，获批补助金资金到账后，您最高可获得服务费的 60%。全程透明，实时查看收益明细。",
  },
];

const faqs = [
  {
    q: "成为代理需要什么资格条件吗？",
    a: "没有任何资格限制。无论您是专业人士（税理士、行政书士等）还是社群运营者、普通介绍人，只要您能接触到有需求的在日华人企业主，都可以申请成为我们的合作代理。",
  },
  {
    q: "最高 60% 分成是如何计算的？",
    a: "我们向客户收取的服务费（成功报酬）通常为获批补助金额的10%〜20%。其中最高 60% 归代理所有，40%归志成コンサル。例如，客户获批500万円补助金，服务费 15% 即 75 万円，代理最高可获得 75 万 × 60% = 45 万円。",
  },
  {
    q: "如果客户申请失败，我需要承担损失吗？",
    a: "完全不需要。我们实行严格的「无成功不收费」原则，申请失败时客户无需支付费用，代理同样无需承担任何风险或费用。",
  },
  {
    q: "我需要参与申请的具体工作吗？",
    a: "不需要。您只需要负责客户介绍和基本信息收集，所有的专业工作（书类制作、申请提交、审查跟进等）全部由志成コンサル的专业团队处理。您的工作就是「连接」，我们负责「交付」。",
  },
  {
    q: "可以同时代理多个客户吗？收入上限如何？",
    a: "代理数量没有上限。您可以同时推荐多个客户，每成功一个都能获得分成。我们的合作代理中，月收入最高的已超过100万円。收入完全取决于您的推荐数量和客户质量。",
  },
];

export default function PartnerPage() {
  return (
    <main>
      <NavClient />

      <PageHero
        eyebrow="代理合作计划"
        title={<>与我们合作<br /><span style={{ color: 'var(--brand)' }}>最高 60% 透明分成</span></>}
        desc="无需专业资质，无需承担风险，只需连接有需求的在日华人企业主。每次成功案例，您最高可获得服务费的 60%。"
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36, position: 'relative' }}>
          <Link href="/contact" className="btn btn-fill">
            立即报名成为代理
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a href="#how-it-works" className="btn btn-ghost">了解合作机制</a>
        </div>
      </PageHero>

      {/* 数据展示 */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="page-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { num: "86名", label: "现有合作代理", sub: "覆盖全日本主要都市" },
              { num: "23个都道府县", label: "代理网络覆盖", sub: "持续扩大中" },
              { num: "平均¥28万", label: "代理月均收入", sub: "最高月收入超100万円" },
            ].map((stat, i) => (
              <div key={i} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 16, padding: "36px 32px", textAlign: "center" }}>
                <div style={{ fontSize: "clamp(32px,4vw,44px)", fontWeight: 800, color: "#1e40af", letterSpacing: "-1px", lineHeight: 1, marginBottom: 8 }}>{stat.num}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#0f172a", marginBottom: 6 }}>{stat.label}</div>
                <div style={{ fontSize: 13, color: "#94a3b8" }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 适合人群 */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="page-wrap">
          <div className="label-tag">适合人群</div>
          <h2 className="section-heading">哪些人适合成为代理？</h2>
          <p className="section-sub" style={{ maxWidth: 560 }}>
            只要您身边有在日本经营企业的华人，您就是理想的合作代理人选。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginTop: 48 }}>
            {targetGroups.map((g, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "28px" }}>
                <div style={{ width: 48, height: 48, background: "rgba(30,64,175,0.08)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#1e40af", marginBottom: 16 }}>
                  {g.icon}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>{g.title}</div>
                <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.75 }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 分成机制 */}
      <section id="how-it-works" className="section" style={{ background: "#fff" }}>
        <div className="page-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "flex-start" }} className="grid-cols-about">
            <div>
              <div className="label-tag">分成机制</div>
              <h2 className="section-heading">透明、公平、<br />按时结算</h2>
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.85, marginBottom: 32 }}>
                我们相信透明是最好的合作基础。分成比例、结算周期、计算方式，全部在合同中明文规定，没有任何隐藏条款。
              </p>
              {[
                { label: "分成比例", value: "最高 60%", desc: "您最高可获得服务费的 60%，无任何上限" },
                { label: "结算周期", value: "月结", desc: "每月固定结算，补助金到账后7个工作日内打款" },
                { label: "失败风险", value: "零风险", desc: "申请失败时，您和客户均无需支付任何费用" },
                { label: "最低起步", value: "1单", desc: "没有业绩要求，1个成功案例即可结算" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", paddingBottom: 20, marginBottom: 20, borderBottom: i < 3 ? "1px solid #e2e8f0" : "none" }}>
                  <div style={{ flexShrink: 0, minWidth: 72 }}>
                    <div style={{ fontSize: 22, fontWeight: 700, color: "#1e40af", letterSpacing: "-0.5px" }}>{item.value}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: "#475569" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 16, padding: 36 }}>
                <div style={{ fontSize: 12, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 24 }}>收入计算示例</div>
                {[
                  { scenario: "客户获批省力化补助金", amount: "¥500万", rate: "15%", income: "¥45万" },
                  { scenario: "客户获批IT导入补助金", amount: "¥200万", rate: "15%", income: "¥18万" },
                  { scenario: "客户获批员工转正助成金", amount: "¥80万", rate: "20%", income: "¥9.6万" },
                ].map((ex, i) => (
                  <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "16px 20px", marginBottom: 12 }}>
                    <div style={{ fontSize: 13, color: "#475569", marginBottom: 10 }}>{ex.scenario}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                      <span style={{ color: "#475569" }}>获批金额</span>
                      <span style={{ fontWeight: 600, color: "#0f172a" }}>{ex.amount}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 10 }}>
                      <span style={{ color: "#475569" }}>服务费率</span>
                      <span style={{ fontWeight: 600, color: "#0f172a" }}>{ex.rate}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 10, borderTop: "1px solid #e2e8f0" }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>您的收入（最高 60%）</span>
                      <span style={{ fontSize: 18, fontWeight: 700, color: "#1e40af" }}>{ex.income}</span>
                    </div>
                  </div>
                ))}
                <div style={{ background: "#1e40af", borderRadius: 8, padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.85)" }}>月推荐3单合计</span>
                  <span style={{ fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.5px" }}>¥72.6万</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 合作流程 */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="page-wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="label-tag" style={{ display: "inline-block" }}>合作流程</div>
            <h2 className="section-heading">4步开始代理合作</h2>
            <p className="section-sub" style={{ maxWidth: 520, margin: "0 auto" }}>
              从报名到获得分成，流程简单清晰，最快1周即可完成首单对接。
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "28px", position: "relative" }}>
                <div style={{ fontSize: 40, fontWeight: 800, color: "rgba(30,64,175,0.15)", letterSpacing: "-2px", lineHeight: 1, marginBottom: 16 }}>{step.num}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>{step.title}</div>
                <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.75 }}>{step.desc}</p>
                {i < steps.length - 1 && (
                  <div style={{ display: "none", position: "absolute", top: "50%", right: -12, transform: "translateY(-50%)", zIndex: 10, alignItems: "center" }} className="lg-flex">
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#1e40af", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>
                      ›
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="page-wrap">
          <div className="label-tag">常见问题</div>
          <h2 className="section-heading">代理合作 FAQ</h2>
          <div style={{ maxWidth: 800, marginTop: 40 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #e2e8f0" : "none", paddingBottom: 28, marginBottom: 28 }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 12 }}>
                  <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 6, background: "rgba(30,64,175,0.1)", color: "#1e40af", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>Q</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", lineHeight: 1.5 }}>{faq.q}</div>
                </div>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 6, background: "rgba(21,190,83,0.1)", color: "#15be53", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>A</div>
                  <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={<>现在报名<br /><span style={{ color: 'var(--brand)' }}>开始您的代理合作之旅</span></>}
        desc="填写简单的报名表，我们会在1个工作日内联系您，为您安排专属培训和对接。"
        primary={{ href: '/contact', label: '立即报名成为代理' }}
        secondary={{ href: '/about', label: '了解我们的团队' }}
      />

      <Footer />
    </main>
  );
}
