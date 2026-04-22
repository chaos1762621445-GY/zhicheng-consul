import Link from "next/link";
import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "关于我们",
  description: "志成コンサル——专为在日华人企业主提供补助金申请代办服务。行政书士·社会保险劳务士·税理士·中小企业诊断士联合专业团队，全程中文无障碍。",
};

const teamMembers = [
  {
    title: "行政書士",
    name: "中野 健二",
    en: "Kenji Nakano",
    specialty: "补助金申请书类制作专家",
    desc: "拥有10年以上行政书士经验，专精各类补助金及助成金申请书的制作与提交。精通中日双语，能将复杂的事业计划书以准确、有力的日语表达，大幅提升申请通过率。",
    color: "#533afd",
  },
  {
    title: "社会保険労務士",
    name: "田中 裕子",
    en: "Yuko Tanaka",
    specialty: "雇用助成金·劳务管理专家",
    desc: "专注于员工转正助成金、人才开发支援助成金等劳务类助成金申请。同时提供劳动合同审查、就业规则制定等配套服务，助力企业在合规框架内最大化资金支持。",
    color: "#7055ff",
  },
  {
    title: "税理士",
    name: "李 建华",
    en: "Li Jianhua",
    specialty: "财务审查·税务申报专家",
    desc: "精通日本税务法规与中小企业财务管理，专为在日华人企业主提供税务规划与财务咨询。在补助金申请中负责财务资料准备和审查，确保数据准确无误，赢得审查机关信任。",
    color: "#8b75f5",
  },
  {
    title: "中小企業診断士",
    name: "王 浩然",
    en: "Wang Haoran",
    specialty: "事业计划·经营战略专家",
    desc: "国家资格中小企业诊断士，拥有深厚的经营战略与商业模式分析能力。负责事业重构补助金、制造业补助金等需要高质量事业计划书的申请，从战略层面提升申请竞争力。",
    color: "#a090f0",
  },
];

const companyInfo = [
  { label: "商号", value: "株式会社志成コンサル" },
  { label: "設立", value: "2022年4月" },
  { label: "所在地", value: "〒542-0082 大阪府大阪市中央区島之内1-13-3 おおきに東心斎橋ビル301号室" },
  { label: "业务内容", value: "補助金・助成金申請代行、経営コンサルティング、行政書士業務、税務申告支援" },
  { label: "专业资质", value: "行政書士事務所登録 / 社会保険労務士事務所登録 / 税理士事務所登録 / 中小企業診断士登録" },
  { label: "服务语言", value: "日本語・普通話（中国語）・広東語" },
  { label: "营业时间", value: "月〜金 9:00〜18:00（土日祝日要予約）" },
];

export default function AboutPage() {
  return (
    <main>
      <NavClient />

      {/* Hero */}
      <div className="bg-[#1c1e54] py-[88px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_70%_50%,rgba(83,58,253,0.25)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(234,34,97,0.15)_0%,transparent_50%)]" />
        <div className="section-inner relative z-10">
          <div className="max-w-[640px]">
            <div className="inline-block text-[11px] font-light text-white/55 uppercase tracking-[2px] mb-5 border border-white/15 rounded px-3 py-1">
              关于我们
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-light text-white tracking-[-1px] leading-[1.15] mb-5">
              关于志成コンサル
            </h1>
            <p className="text-lg font-light text-white/75 leading-[1.8]">
              我们是一支跨越语言与文化边界的专业团队，致力于让每一位在日华人企业主都能平等地享受日本政府补助金政策的红利。
            </p>
          </div>
        </div>
      </div>

      {/* 公司理念 */}
      <section className="section-std bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-3.5">我们的理念</div>
              <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-4">
                让语言不再成为<br />机会的壁垒
              </h2>
              <p className="text-base text-[#64748d] leading-[1.85] mb-5">
                日本政府每年提供超过数千亿日元的补助金与助成金，专门用于扶持中小企业创新、雇用与发展。然而，对于大多数在日华人企业主而言，这些资金往往因为语言门槛和繁琐的申请程序而遥不可及。
              </p>
              <p className="text-base text-[#64748d] leading-[1.85] mb-5">
                我们相信，每一位用心经营、努力创业的在日华人，都应当平等地获得这些政策支持。志成コンサル成立的初衷，正是要消除这道语言与文化的屏障，让补助金申请变得简单、透明、真正可及。
              </p>
              <p className="text-base text-[#64748d] leading-[1.85]">
                全程中文对接，无成功不收费——这不只是我们的服务承诺，更是我们对在日华人社区责任与信任的体现。
              </p>
            </div>
            <div className="bg-gradient-to-br from-[rgba(83,58,253,0.06)] to-[rgba(249,107,238,0.06)] rounded-xl border border-[#e5edf5] px-10 py-12">
              {[
                { num: "3,000+", label: "累计服务企业数" },
                { num: "8.5億円", label: "协助企业获批总额" },
                { num: "92%", label: "申请成功率" },
                { num: "6+", label: "专业资质种类" },
              ].map((stat, i) => (
                <div key={i} className={`flex justify-between items-center py-5 ${i < 3 ? "border-b border-[#e5edf5]" : ""}`}>
                  <span className="text-sm text-[#64748d]">{stat.label}</span>
                  <span className="text-[28px] font-light text-[#533afd] tracking-[-0.5px]">{stat.num}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 四士团队 */}
      <section className="section-std bg-[#f6f9fc]">
        <div className="section-inner">
          <div className="text-center">
            <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-3.5">专业团队</div>
            <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-4">四士联合，全方位保障</h2>
            <p className="text-base text-[#64748d] leading-7 max-w-[560px] mx-auto">
              行政书士·社会保险劳务士·税理士·中小企业诊断士，四种国家资格专家组成跨学科团队，覆盖补助金申请的每一个环节。
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {teamMembers.map((m, i) => (
              <div key={i} className="bg-white border border-[#e5edf5] rounded-lg p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-lg" style={{ background: m.color }} />
                <div
                  className="inline-block text-[11px] font-normal px-2.5 py-0.5 rounded mb-4 tracking-[0.5px]"
                  style={{ background: `${m.color}14`, color: m.color, border: `1px solid ${m.color}30` }}
                >
                  {m.title}
                </div>
                <div className="text-[18px] font-medium text-[#061b31] mb-0.5">{m.name}</div>
                <div className="text-xs text-[#64748d] mb-3">{m.en}</div>
                <div className="text-[13px] font-medium mb-3" style={{ color: m.color }}>{m.specialty}</div>
                <p className="text-[13px] text-[#64748d] leading-[1.75]">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 创业故事 */}
      <section className="section-std bg-white">
        <div className="section-inner">
          <div className="max-w-[760px] mx-auto">
            <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-3.5">创业故事</div>
            <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-4">从一次痛心的错过说起</h2>
            <div className="border-l-[3px] border-l-[#533afd] pl-7 mt-8 mb-8">
              <p className="text-lg text-[#061b31] leading-[1.8] font-light">
                「我亲眼看到一位认识多年的华人朋友，因为看不懂日语申请指南，错过了最高可获500万円的事业重构补助金的申请截止日期。那一刻，我意识到——这不是个案，而是整个在日华人创业群体面临的系统性困境。」
              </p>
              <div className="mt-4 text-sm text-[#64748d]">—— 创始人 中野 健二</div>
            </div>
            <p className="text-base text-[#64748d] leading-[1.85] mb-5">
              2022年，中野健二与几位志同道合的专业人士共同创立了志成コンサル。他们有一个共同的信念：在日华人企业主所面临的，不是能力不足，而是信息不对称和语言障碍所造成的机会不平等。
            </p>
            <p className="text-base text-[#64748d] leading-[1.85] mb-5">
              创业初期，团队走访了大阪、东京、名古屋的数十家华人经营的企业。他们发现，许多企业主甚至不知道自己符合申请条件，更不知道这些补助金是真实存在、可以申请的。语言不通、信息缺失，让他们在不知不觉中与本该属于自己的资金擦肩而过。
            </p>
            <p className="text-base text-[#64748d] leading-[1.85]">
              如今，志成コンサル已累计服务3,000余家在日华人企业，协助获批补助金总额超过8.5亿日元。每一个成功案例背后，都是一个华人家庭的创业梦想得到了应有的支持。我们会继续走下去，直到语言不再是任何在日华人获取发展机会的阻碍。
            </p>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="section-std bg-[#f6f9fc]">
        <div className="section-inner">
          <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-3.5">会社概要</div>
          <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-4">公司信息</h2>
          <div className="overflow-x-auto mt-8">
            <table className="w-full border-collapse">
              <tbody>
                {companyInfo.map((row, i) => (
                  <tr key={i} className="border-b border-[#e5edf5]">
                    <td className="w-[140px] font-medium text-[#061b31] whitespace-nowrap bg-[#f7f8fc] px-5 py-4 text-sm leading-[1.7] align-top">
                      {row.label}
                    </td>
                    <td className="text-[#64748d] px-5 py-4 text-sm leading-[1.7]">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#533afd] py-24 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-[640px] mx-auto px-6">
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-white tracking-tight mb-4 leading-[1.15]">与我们一起，让补助金触手可及</h2>
          <p className="text-lg text-white/85 mb-10 leading-[1.75]">3分钟免费问诊，为您的企业精准匹配最优补助金方案。全程中文，无成功不收费。</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#533afd] px-8 py-3.5 rounded-md font-semibold text-base shadow-md hover:opacity-95 transition-opacity">
              申请免费咨询
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/partner" className="inline-flex items-center gap-2 bg-transparent text-white border border-white/40 px-8 py-3.5 rounded-md font-medium text-base hover:bg-white/10 transition-colors">
              了解代理合作
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
