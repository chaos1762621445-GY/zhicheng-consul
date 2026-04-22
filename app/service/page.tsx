import Link from "next/link";
import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "服务流程",
  description: "志成コンサル的补助金申请服务流程详解——从初次咨询到资金到账，6步全程代办",
};

const steps = [
  {
    step: "第一步",
    title: "免费咨询·初次接触",
    duration: "当日〜次个工作日",
    desc: "通过微信（pr2024188）、电话（03-6265-9756）或网站问卷联系我们。专业顾问将用中文与您沟通，了解您的企业基本情况、业种、规模和当前面临的课题。",
    points: ["全程中文对接，无语言障碍", "初次咨询完全免费", "当日（工作日）回复"],
  },
  {
    step: "第二步",
    title: "补助金诊断·方案匹配",
    duration: "1〜3个工作日",
    desc: "专业顾问根据您提供的企业信息，进行全面的补助金适合性诊断。从6种以上主要补助金中筛选出最适合您企业的申请方案，并预估可获批金额。",
    points: ["多种补助金横向比较", "预估获批金额透明告知", "充分说明申请成功可能性"],
  },
  {
    step: "第三步",
    title: "申请方案制定·签约",
    duration: "3〜5个工作日",
    desc: "确认申请方案后，制定详细的申请计划书。明确申请时间轴、必要资料清单、预期获批金额及成功报酬率等所有条件，签署委托合同。",
    points: ["申请计划书全程透明", "无成功不收费承诺书面保证", "资料清单一览提供"],
  },
  {
    step: "第四步",
    title: "资料收集与整理",
    duration: "2〜4周",
    desc: "专业团队协助您收集所有必要的申请文件，包括事业计划书、财务资料、税务证明等。行政书士专业人员负责申请书类的制作和翻译工作，确保内容准确完整。",
    points: ["事业计划书制作支援", "必要书类收集与整备", "中日双语资料处理"],
  },
  {
    step: "第五步",
    title: "提交申请·跟进审查",
    duration: "申请受理后1〜6个月",
    desc: "由持牌专业人员代为提交申请，确保格式合规、按时递交。申请受理后，全程跟踪审查进度，如需补充资料或说明，由我方专业人员直接对应，无需您亲自处理。",
    points: ["专业人员代为提交，格式保证", "审查期间进度定期汇报", "补充质询由我方全程处理"],
  },
  {
    step: "第六步",
    title: "获批通知·资金到账",
    duration: "获批后1〜3个月",
    desc: "收到获批通知后，协助您完成所有后续手续，包括交付申请、实绩报告提交等。资金到账后，按事先约定的成功报酬率支付服务费用。整个流程正式完成。",
    points: ["获批后手续全程陪同", "资金到账后再支付服务费", "后续追加申请也可商量"],
  },
];

const faqs = [
  {
    q: "全程需要多长时间才能拿到补助金？",
    a: "从初次咨询到资金到账，通常需要6个月〜1年不等。各补助金的审查期间不同，省力化补助金约3〜6个月，IT导入补助金约2〜3个月，事业重构补助金约6〜12个月。具体时间轴在初次咨询时会详细说明。",
  },
  {
    q: "如果申请失败，需要支付费用吗？",
    a: "完全不需要。我们实行严格的「无成功不收费」原则，申请失败时您无需支付任何费用（包括资料制作费、交通费等）。这一承诺会在委托合同中明文规定。",
  },
  {
    q: "日语不好的话可以申请吗？",
    a: "完全没有问题。我们的顾问团队全程以中文对接，所有日语文件由我们的专业人员处理。您只需要提供相关企业信息和配合资料收集即可，不需要您自己阅读或撰写日语文件。",
  },
  {
    q: "个人事业主（个体经营）也可以申请吗？",
    a: "可以申请。小规模持续化补助金、AI·IT导入补助金、员工转正助成金等均对个人事业主开放。具体的申请资格根据您的业种和规模有所不同，请通过免费咨询确认。",
  },
  {
    q: "成功报酬是多少？",
    a: "成功报酬因补助金种类和申请金额而有所不同，通常为获批金额的10%〜20%。具体报酬率会在签署委托合同前完全透明地告知您。不会有任何隐藏费用。",
  },
  {
    q: "已经在经营中的企业才能申请吗？",
    a: "大部分补助金要求企业已经在运营中，但也有针对创业初期的特例（如小规模持续化补助金的创业框架）。即使是刚刚开始创业的企业，也有适合的补助金选项，请通过免费咨询了解详情。",
  },
];

export default function ServicePage() {
  return (
    <main>
      <NavClient />

      {/* Hero */}
      <div className="bg-[#1c1e54] py-[88px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_70%_50%,rgba(83,58,253,0.25)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(234,34,97,0.15)_0%,transparent_50%)]" />
        <div className="section-inner relative z-10">
          <div className="inline-block text-[11px] font-light text-white/55 uppercase tracking-[2px] mb-5 border border-white/15 rounded px-3 py-1">
            服务流程
          </div>
          <h1 className="text-[clamp(32px,4.5vw,52px)] font-light text-white tracking-[-0.5px] leading-[1.15] mb-4">
            6步全程代办服务
          </h1>
          <p className="text-lg font-light text-white/70 leading-[1.75] max-w-[560px]">
            从初次咨询到资金到账，我们全程以中文陪同。无成功不收费，彻底消除您的申请风险。
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <section className="section-std bg-white">
        <div className="section-inner">
          <div className="text-center mb-14">
            <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-3.5">申请流程</div>
            <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-4">申请流程详解</h2>
            <p className="text-base text-[#64748d] leading-7">清晰透明的6步流程，让您随时掌握申请进度。</p>
          </div>

          <div className="max-w-[900px] mx-auto">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-8 relative">
                {/* Number + Line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#1c1e54] text-white text-lg font-bold flex items-center justify-center flex-shrink-0 border-2 border-[#1c1e54]">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 min-h-10 bg-[#e5edf5] my-2" />
                  )}
                </div>
                {/* Content */}
                <div className={`flex-1 pt-2 ${i < steps.length - 1 ? "pb-10" : ""}`}>
                  <div className="text-[11px] font-semibold tracking-[1px] uppercase text-[#533afd] mb-1">{s.step}</div>
                  <div className="text-xl font-bold text-[#1c1e54] mb-1">{s.title}</div>
                  <div className="text-xs text-[#94a3b8] mb-3">参考周期：{s.duration}</div>
                  <p className="text-[15px] text-[#64748d] leading-[1.8] mb-4">{s.desc}</p>
                  <div className="flex flex-col gap-2">
                    {s.points.map((p, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-[#64748d]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
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
      <section className="section-std bg-[#f6f9fc]">
        <div className="section-inner">
          <div className="text-center mb-14">
            <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-3.5">FAQ</div>
            <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-4">常见问题解答</h2>
            <p className="text-base text-[#64748d] leading-7">关于补助金申请，您最常问到的问题，我们一一解答。</p>
          </div>
          <div className="max-w-[800px] mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#e5edf5] pb-7 mb-7 last:border-0 last:pb-0 last:mb-0">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded bg-[rgba(83,58,253,0.1)] text-[#533afd] flex items-center justify-center text-sm font-semibold">
                    Q
                  </div>
                  <div className="text-[15px] font-medium text-[#061b31] leading-[1.5]">{faq.q}</div>
                </div>
                <p className="text-[15px] text-[#64748d] leading-[1.8] pl-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#533afd] py-24 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-[640px] mx-auto px-6">
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-white tracking-tight mb-4 leading-[1.15]">立即开始免费咨询</h2>
          <p className="text-lg text-white/85 mb-10 leading-[1.75]">3分钟问诊，为您的企业精准推荐最优补助金方案。完全免费，无任何购买义务。</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#533afd] px-8 py-3.5 rounded-md font-semibold text-base shadow-md hover:opacity-95 transition-opacity">
            申请免费咨询
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
