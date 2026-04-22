import Link from "next/link";
import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "代理合作",
  description: "加入志成コンサル代理网络，享受60%透明分成。适合税理士、行政书士、社劳士、会计事务所、微信群主、留学中介、房产中介等人群。",
};

const targetGroups = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "微信群主·社群运营者",
    desc: "如果您运营在日华人社群、企业家群或商会，您的社交影响力就是最有价值的资产。每成功推荐一家企业，即可获得60%的服务费分成。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "留学中介·教育顾问",
    desc: "您服务的许多留学生毕业后在日本创业。为他们的企业对接补助金申请服务，既是对客户长期关系的深化，也能为您带来额外的合作收入。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "房产中介·商业地产顾问",
    desc: "购买或租赁商业物业的客户，往往正处于创业扩张阶段，是补助金申请的理想候选人。您的一次介绍，可能为客户带来数百万円的资金支持。",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
    desc: "每月固定结算，获批补助金资金到账后，您将获得服务费的60%。全程透明，实时查看收益明细。",
  },
];

const faqs = [
  {
    q: "成为代理需要什么资格条件吗？",
    a: "没有任何资格限制。无论您是专业人士（税理士、行政书士等）还是社群运营者、普通介绍人，只要您能接触到有需求的在日华人企业主，都可以申请成为我们的合作代理。",
  },
  {
    q: "60%分成是如何计算的？",
    a: "我们向客户收取的服务费（成功报酬）通常为获批补助金额的10%〜20%。其中60%归代理所有，40%归志成コンサル。例如，客户获批500万円补助金，服务费15%即75万円，代理可获得75万×60%=45万円。",
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

      {/* Hero */}
      <div className="bg-[#1c1e54] py-[88px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_30%_50%,rgba(83,58,253,0.3)_0%,transparent_55%),radial-gradient(ellipse_at_80%_20%,rgba(249,107,238,0.2)_0%,transparent_50%)]" />
        <div className="section-inner relative z-10">
          <div className="max-w-[680px]">
            <div className="inline-block bg-[rgba(83,58,253,0.25)] border border-[rgba(83,58,253,0.4)] rounded text-xs font-normal text-white/90 px-3.5 py-1.5 mb-6 tracking-[0.5px]">
              代理合作计划
            </div>
            <h1 className="text-[clamp(32px,5vw,52px)] font-light text-white tracking-[-1px] leading-[1.2] mb-5">
              与我们合作<br />60% 透明分成
            </h1>
            <p className="text-lg font-light text-white/75 leading-[1.8] mb-9">
              无需专业资质，无需承担风险，只需连接有需求的在日华人企业主。每次成功案例，您获得服务费的60%。
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#533afd] px-8 py-3.5 rounded-md font-semibold text-base shadow-md hover:opacity-95 transition-opacity">
                立即报名成为代理
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="#how-it-works" className="inline-flex items-center gap-2 bg-transparent text-white border border-white/40 px-8 py-3.5 rounded-md font-medium text-base hover:bg-white/10 transition-colors">
                了解合作机制
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 数据展示 */}
      <section className="section-std bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { num: "86名", label: "现有合作代理", sub: "覆盖全日本主要都市" },
              { num: "23个都道府县", label: "代理网络覆盖", sub: "持续扩大中" },
              { num: "平均¥28万", label: "代理月均收入", sub: "最高月收入超100万円" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#f6f9fc] border border-[#e5edf5] rounded-lg py-9 px-8 text-center">
                <div className="text-[clamp(32px,4vw,44px)] font-light text-[#533afd] tracking-[-1px] leading-none mb-2">{stat.num}</div>
                <div className="text-[15px] font-medium text-[#061b31] mb-1.5">{stat.label}</div>
                <div className="text-[13px] text-[#64748d]">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 适合人群 */}
      <section className="section-std bg-[#f6f9fc]">
        <div className="section-inner">
          <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-3.5">适合人群</div>
          <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-4">哪些人适合成为代理？</h2>
          <p className="text-base text-[#64748d] leading-7 max-w-[560px]">
            只要您身边有在日本经营企业的华人，您就是理想的合作代理人选。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {targetGroups.map((g, i) => (
              <div key={i} className="bg-white border border-[#e5edf5] rounded-lg p-7 transition-all hover:shadow-lg hover:border-[#533afd]/20">
                <div className="w-12 h-12 bg-[rgba(83,58,253,0.08)] rounded-lg flex items-center justify-center text-[#533afd] mb-4">
                  {g.icon}
                </div>
                <div className="text-base font-medium text-[#061b31] mb-2.5">{g.title}</div>
                <p className="text-sm text-[#64748d] leading-[1.75]">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 分成机制 */}
      <section id="how-it-works" className="section-std bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div>
              <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-3.5">分成机制</div>
              <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-4">
                透明、公平、<br />按时结算
              </h2>
              <p className="text-base text-[#64748d] leading-[1.85] mb-8">
                我们相信透明是最好的合作基础。分成比例、结算周期、计算方式，全部在合同中明文规定，没有任何隐藏条款。
              </p>
              {[
                { label: "分成比例", value: "60%", desc: "您获得服务费的60%，无任何上限" },
                { label: "结算周期", value: "月结", desc: "每月固定结算，补助金到账后7个工作日内打款" },
                { label: "失败风险", value: "零风险", desc: "申请失败时，您和客户均无需支付任何费用" },
                { label: "最低起步", value: "1单", desc: "没有业绩要求，1个成功案例即可结算" },
              ].map((item, i) => (
                <div key={i} className={`flex gap-5 items-start pb-5 mb-5 ${i < 3 ? "border-b border-[#e5edf5]" : ""}`}>
                  <div className="flex-shrink-0 min-w-[72px]">
                    <div className="text-[22px] font-light text-[#533afd] tracking-[-0.5px]">{item.value}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#061b31] mb-1">{item.label}</div>
                    <div className="text-sm text-[#64748d]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="bg-gradient-to-br from-[rgba(83,58,253,0.06)] to-[rgba(249,107,238,0.04)] border border-[#e5edf5] rounded-xl p-9">
                <div className="text-[12px] font-normal text-[#64748d] uppercase tracking-[1px] mb-6">收入计算示例</div>
                {[
                  { scenario: "客户获批省力化补助金", amount: "¥500万", rate: "15%", income: "¥45万" },
                  { scenario: "客户获批IT导入补助金", amount: "¥200万", rate: "15%", income: "¥18万" },
                  { scenario: "客户获批员工转正助成金", amount: "¥80万", rate: "20%", income: "¥9.6万" },
                ].map((ex, i) => (
                  <div key={i} className="bg-white border border-[#e5edf5] rounded-md px-5 py-4 mb-3">
                    <div className="text-[13px] text-[#64748d] mb-2.5">{ex.scenario}</div>
                    <div className="flex justify-between text-[13px] mb-1">
                      <span className="text-[#64748d]">获批金额</span>
                      <span className="font-medium text-[#061b31]">{ex.amount}</span>
                    </div>
                    <div className="flex justify-between text-[13px] mb-2.5">
                      <span className="text-[#64748d]">服务费率</span>
                      <span className="font-medium text-[#061b31]">{ex.rate}</span>
                    </div>
                    <div className="flex justify-between text-sm pt-2.5 border-t border-[#e5edf5]">
                      <span className="font-medium text-[#061b31]">您的收入（60%）</span>
                      <span className="text-lg font-semibold text-[#533afd]">{ex.income}</span>
                    </div>
                  </div>
                ))}
                <div className="bg-[#533afd] rounded-md px-5 py-4 flex justify-between items-center">
                  <span className="text-sm text-white/85">月推荐3单合计</span>
                  <span className="text-[22px] font-light text-white tracking-[-0.5px]">¥72.6万</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 合作流程 */}
      <section className="section-std bg-[#f6f9fc]">
        <div className="section-inner">
          <div className="text-center">
            <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-3.5">合作流程</div>
            <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-4">4步开始代理合作</h2>
            <p className="text-base text-[#64748d] leading-7 max-w-[520px] mx-auto">
              从报名到获得分成，流程简单清晰，最快1周即可完成首单对接。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {steps.map((step, i) => (
              <div key={i} className="bg-white border border-[#e5edf5] rounded-lg p-8 relative">
                <div className="text-[40px] font-light text-[rgba(83,58,253,0.15)] tracking-[-2px] leading-none mb-4">{step.num}</div>
                <div className="text-base font-medium text-[#061b31] mb-2.5">{step.title}</div>
                <p className="text-sm text-[#64748d] leading-[1.75]">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 items-center">
                    <div className="w-6 h-6 rounded-full bg-[#533afd] text-white flex items-center justify-center text-xs">
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
      <section className="section-std bg-white">
        <div className="section-inner">
          <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-3.5">常见问题</div>
          <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-4">代理合作 FAQ</h2>
          <div className="max-w-[800px] mt-10">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#e5edf5] pb-7 mb-7 last:border-0 last:pb-0 last:mb-0">
                <div className="flex gap-4 items-start mb-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded bg-[rgba(83,58,253,0.1)] text-[#533afd] flex items-center justify-center text-sm font-semibold">Q</div>
                  <div className="text-base font-medium text-[#061b31] leading-[1.5]">{faq.q}</div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded bg-[rgba(21,190,83,0.1)] text-[#15be53] flex items-center justify-center text-sm font-semibold">A</div>
                  <p className="text-[15px] text-[#64748d] leading-[1.8]">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#533afd] py-24 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-[640px] mx-auto px-6">
          <div className="inline-block bg-white/[0.12] border border-white/20 rounded text-xs text-white/85 px-3.5 py-1.5 mb-6">
            零风险·60%分成·月结
          </div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-white tracking-tight mb-4 leading-[1.15]">
            现在报名，<br />开始您的代理合作之旅
          </h2>
          <p className="text-lg text-white/85 mb-10 leading-[1.75]">填写简单的报名表，我们会在1个工作日内联系您，为您安排专属培训和对接。</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#533afd] px-8 py-3.5 rounded-md font-semibold text-base shadow-md hover:opacity-95 transition-opacity">
              立即报名成为代理
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2 bg-transparent text-white border border-white/40 px-8 py-3.5 rounded-md font-medium text-base hover:bg-white/10 transition-colors">
              了解我们的团队
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
