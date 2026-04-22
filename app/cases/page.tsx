import Link from "next/link";
import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "成功案例",
  description: "志成コンサル补助金成功案例——餐饮、美容、IT、建设、零售、教育、制造、物流等多行业真实案例，最高获批3000万円，92%通过率。",
};

const stats = [
  { num: "3,000+", label: "累计服务客户" },
  { num: "8.5億円", label: "累计获批补助金总额" },
  { num: "92%", label: "申请通过率" },
  { num: "6年", label: "专业服务年限" },
];

type CaseItem = {
  industry: string;
  company: string;
  subsidy: string;
  amount: string;
  period: string;
  quote: string;
  color: string;
};

const cases: CaseItem[] = [
  {
    industry: "餐饮业",
    company: "大阪某中华料理餐厅",
    subsidy: "事業再構築補助金",
    amount: "2,000万円",
    period: "约3个月",
    quote: "受疫情影响，该餐厅堂食收入骤降超40%。志成コンサル协助规划外卖+预制菜业务转型方案，成功获批2000万补助金，完成厨房设备升级和线上运营系统搭建，目前外卖营业额已占总收入的55%。",
    color: "#f97316",
  },
  {
    industry: "美容行业",
    company: "东京某美甲美睫沙龙",
    subsidy: "IT導入補助金",
    amount: "450万円",
    period: "约2个月",
    quote: "该沙龙之前一直用纸质预约本，漏单、撞单情况不断。志成コンサル顾问建议申请IT导入补助，引入预约管理+会员CRM系统，费用几乎全额报销。导入后客户复购率提升了30%，节省了大量人工成本。",
    color: "#ec4899",
  },
  {
    industry: "IT·软件",
    company: "福冈某系统开发公司",
    subsidy: "ものづくり補助金",
    amount: "1,000万円",
    period: "约4个月",
    quote: "该公司希望开发一套面向中小企业的AI自动化工具，但研发成本压力较大。志成コンサル协助撰写技术创新方案，顺利通过审查，获批1000万円研发补贴，提前两年实现了产品化目标。",
    color: "#6366f1",
  },
  {
    industry: "建设·装修",
    company: "埼玉某华人内装工程公司",
    subsidy: "小規模事業者持続化補助金",
    amount: "200万円",
    period: "约6周",
    quote: "该公司规模较小，仅5名员工，一直不知道能申请什么补助。顾问推荐了最适合小规模公司的持续化补助金，协助更新施工设备并制作中日双语营销资料，顺利获批200万円，申请过程非常顺畅。",
    color: "#0ea5e9",
  },
  {
    industry: "零售·电商",
    company: "名古屋某日本酒·土产零售店",
    subsidy: "事業再構築補助金",
    amount: "1,500万円",
    period: "约3.5个月",
    quote: "该零售店受疫情影响外国游客断绝，实体店经营困难。志成コンサル协助制定跨境电商转型计划，面向中国和东南亚市场，成功获批1500万円，实现了线上线下双轨经营。",
    color: "#14b8a6",
  },
  {
    industry: "教育·培训",
    company: "京都某华人日语学校",
    subsidy: "IT導入補助金",
    amount: "350万円",
    period: "约2个月",
    quote: "该学校希望引入线上课程管理平台和互动教学软件，但预算有限。志成コンサル识别出符合IT导入补助金的条件，全程中文辅导完成申请，最终获批350万円，成功上线线上教学系统。",
    color: "#a855f7",
  },
  {
    industry: "制造·加工",
    company: "爱知县某食品加工工厂",
    subsidy: "ものづくり補助金",
    amount: "3,000万円",
    period: "约5个月",
    quote: "该工厂自动化改造一直是最大瓶颈，人工成本居高不下。志成コンサル团队协助制作专业的技术创新计划书，成功申请3000万円设备升级补助，生产效率提升45%，残次品率下降60%。",
    color: "#22c55e",
  },
  {
    industry: "物流·运输",
    company: "横滨某货物运输公司",
    subsidy: "事業再構築補助金",
    amount: "1,800万円",
    period: "约4个月",
    quote: "该公司希望从传统货运转型冷链物流，需要购置冷藏车和建设冷库，资金缺口较大。志成コンサル制定完整的事业再构筑计划，获批1800万円补助，成功打入高端冷链市场，年营业额增长超80%。",
    color: "#f59e0b",
  },
];

export default function CasesPage() {
  return (
    <main>
      <NavClient />

      {/* Hero */}
      <div className="bg-[#1c1e54] py-[88px] relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(83,58,253,0.28)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-[-60px] left-[5%] w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(234,34,97,0.2)_0%,rgba(249,107,238,0.1)_50%,transparent_70%)] blur-[30px] pointer-events-none" />
        <div className="section-inner relative z-10">
          <div className="inline-block text-[11px] font-light text-white/55 uppercase tracking-[2px] mb-5 border border-white/15 rounded px-3 py-1">
            Success Cases · 成功案例
          </div>
          <h1 className="text-[clamp(32px,4.5vw,52px)] font-light text-white tracking-[-0.5px] leading-[1.15] mb-4">
            客户成功案例
          </h1>
          <p className="text-lg font-light text-white/70 leading-[1.75] max-w-[560px]">
            来自餐饮、美容、IT、建设等多个行业的真实获批案例，印证我们在日本政府补助金领域的专业实力。
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[rgba(28,30,84,0.95)] py-12 border-b border-white/[0.08]">
        <div className="section-inner grid grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center py-4 px-4">
              <div className="text-[clamp(32px,4vw,44px)] font-light text-white tracking-[-1px] leading-none">{s.num}</div>
              <div className="text-[13px] text-white/60 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cases Grid */}
      <section className="section-std bg-[#f6f9fc]">
        <div className="section-inner">
          <div className="text-center mb-2">
            <div className="inline-block text-[11px] font-light text-[#64748d] uppercase tracking-[2px]">真实案例 · 匿名脱敏处理</div>
          </div>
          <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-4 text-center">各行业获批实例</h2>
          <p className="text-base text-[#64748d] leading-7 text-center max-w-[560px] mx-auto">
            以下案例均来自我们服务过的真实客户，已做匿名化处理，补助金金额及周期均为实际数据。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {cases.map((c, i) => (
              <div key={i} className="bg-white border border-[#e5edf5] rounded-lg p-7 relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-0.5">
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: c.color }} />
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div>
                    <span
                      className="inline-block text-[11px] font-normal px-2.5 py-0.5 rounded tracking-[0.5px]"
                      style={{ background: `${c.color}18`, color: c.color, border: `1px solid ${c.color}40` }}
                    >
                      {c.industry}
                    </span>
                    <div className="text-[15px] font-medium text-[#061b31] mt-2 leading-[1.4]">{c.company}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[28px] font-light text-[#533afd] tracking-[-0.5px] leading-none">{c.amount}</div>
                    <div className="text-[11px] text-[#64748d] mt-1">获批金额</div>
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-[#64748d] bg-[#f6f9fc] border border-[#e5edf5] rounded px-2.5 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#533afd] flex-shrink-0" />
                    <span>{c.subsidy}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#64748d] bg-[#f6f9fc] border border-[#e5edf5] rounded px-2.5 py-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    <span>申请周期 {c.period}</span>
                  </div>
                </div>

                <hr className="border-0 border-t border-[#e5edf5] my-4" />

                <div className="text-[13px] font-light text-[#64748d] leading-[1.8] pl-3 border-l-2 border-[#e5edf5]">
                  <span className="text-xl text-[#533afd]/30 leading-none block mb-1.5">"</span>
                  {c.quote}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#64748d] mt-10 px-6 py-4 bg-white border border-[#e5edf5] rounded-md leading-[1.8]">
            ※ 以上案例均已征得客户同意并做匿名化处理，补助金获批金额因企业规模、申请内容、审查年度等因素而异，不代表所有申请均可达到相同金额。具体可获批额度请咨询我们进行个案评估。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#533afd] py-24 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-[640px] mx-auto px-6">
          <div className="inline-block text-[11px] font-medium text-white/55 uppercase tracking-[1.5px] mb-3.5">下一步</div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-white tracking-tight mb-4 leading-[1.15]">您的企业也能获得补助金</h2>
          <p className="text-lg text-white/85 mb-10 leading-[1.75]">免费咨询资格诊断，3分钟了解您能申请哪些补助金，专业顾问当日回复。</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#533afd] px-8 py-3.5 rounded-md font-semibold text-base shadow-md hover:opacity-95 transition-opacity">
              立即免费咨询
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/faq" className="inline-flex items-center gap-2 bg-transparent text-white border border-white/40 px-8 py-3.5 rounded-md font-medium text-base hover:bg-white/10 transition-colors">
              查看常见问题
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
