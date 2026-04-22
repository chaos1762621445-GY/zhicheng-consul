import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import CtaSection from "../components/CtaSection";

export const metadata: Metadata = {
  title: "关于我们",
  description: "志成咨询——专为在日华人企业主提供补助金申请代办服务。行政书士·社会保险劳务士·税理士·中小企业诊断士联合专业团队，全程中文无障碍。",
};

const teamMembers = [
  {
    title: "行政书士",
    name: "李 忠良",
    en: "Li Zhongliang",
    specialty: "补助金申请书类制作专家",
    desc: "拥有10年以上行政书士经验，专精各类补助金及助成金申请书的制作与提交。精通中日双语，能将复杂的事业计划书以准确、有力的日语表达，大幅提升申请通过率。",
    initial: "李",
  },
  {
    title: "社会保险劳务士",
    name: "田中 裕子",
    en: "Yuko Tanaka",
    specialty: "雇用助成金·劳务管理专家",
    desc: "专注于员工转正助成金、人才开发支援助成金等劳务类助成金申请。同时提供劳动合同审查、就业规则制定等配套服务，助力企业在合规框架内最大化资金支持。",
    initial: "田",
  },
  {
    title: "税理士",
    name: "陈 建华",
    en: "Chen Jianhua",
    specialty: "财务审查·税务申报专家",
    desc: "精通日本税务法规与中小企业财务管理，专为在日华人企业主提供税务规划与财务咨询。在补助金申请中负责财务资料准备和审查，确保数据准确无误，赢得审查机关信任。",
    initial: "陈",
  },
  {
    title: "中小企业诊断士",
    name: "王 浩然",
    en: "Wang Haoran",
    specialty: "事业计划·经营战略专家",
    desc: "国家资格中小企业诊断士，拥有深厚的经营战略与商业模式分析能力。负责事业重构补助金、制造业补助金等需要高质量事业计划书的申请，从战略层面提升申请竞争力。",
    initial: "王",
  },
];

const companyInfo = [
  { label: "商号", value: "株式会社志成咨询" },
  { label: "成立时间", value: "2022年4月" },
  { label: "所在地", value: "〒542-0082 大阪府大阪市中央区島之内1-13-3 おおきに東心斎橋ビル301号室" },
  { label: "业务内容", value: "补助金·助成金申请代办、经营咨询、行政书士业务、税务申报支援" },
  { label: "专业资质", value: "行政书士事务所登记 / 社会保险劳务士事务所登记 / 税理士事务所登记 / 中小企业诊断士登记" },
  { label: "服务语言", value: "日语 · 普通话 · 广东话" },
  { label: "营业时间", value: "周一至周五 9:00〜18:00（周末及节假日需预约）" },
];

const stats = [
  { num: "3,000+", label: "累计服务企业" },
  { num: "¥8.5億",  label: "协助获批总额" },
  { num: "92%",    label: "申请成功率" },
  { num: "4类",    label: "国家认定资质" },
];

export default function AboutPage() {
  return (
    <main>
      <NavClient />

      <PageHero
        eyebrow="关于我们"
        title={<>跨越语言边界<br /><span style={{ color: 'var(--brand)' }}>让补助金触手可及</span></>}
        desc="我们是一支跨越语言与文化边界的专业团队，致力于让每一位在日华人企业主，都能平等地享受日本政府补助金政策的红利。"
      />

      {/* 公司理念 + 数据 */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap">
          <div className="grid-cols-about">
            <div>
              <div className="eyebrow">我们的理念</div>
              <h2 className="h2" style={{ marginBottom: 24 }}>让语言不再成为<br />机会的壁垒</h2>
              <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.9, marginBottom: 20 }}>
                日本政府每年提供超过数千亿日元的补助金与助成金，专门用于扶持中小企业创新、雇用与发展。然而，对于大多数在日华人企业主而言，这些资金往往因为语言门槛和繁琐的申请程序而遥不可及。
              </p>
              <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.9, marginBottom: 20 }}>
                我们相信，每一位用心经营、努力创业的在日华人，都应当平等地获得这些政策支持。志成咨询成立的初衷，正是要消除这道语言与文化的屏障，让补助金申请变得简单、透明、真正可及。
              </p>
              <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.9 }}>
                全程中文对接，不获批不收费——这不只是我们的服务承诺，更是我们对在日华人社区责任与信任的体现。
              </p>
            </div>

            {/* 数据卡片 */}
            <div>
              <div style={{
                background: 'linear-gradient(180deg, #fff 0%, var(--surface-2) 100%)',
                border: '1px solid var(--line)',
                borderRadius: 20,
                padding: 8,
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
              }}>
                <div style={{
                  height: 4,
                  borderRadius: '16px 16px 0 0',
                  background: 'linear-gradient(90deg, var(--brand) 0%, var(--gold) 100%)',
                  margin: '-1px -1px 0',
                }} />
                <div style={{ padding: '32px 36px 28px' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>
                    核心数据
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
                    {stats.map((s, i) => (
                      <div key={i}>
                        <div className="amount" style={{ fontSize: 34, lineHeight: 1, marginBottom: 8 }}>
                          {s.num}
                        </div>
                        <div style={{ fontSize: 13, color: 'var(--ink-3)', fontWeight: 500 }}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 四士团队 */}
      <section className="sec" style={{ background: 'var(--surface-2)' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: 52, maxWidth: 640, margin: '0 auto 52px' }}>
            <div className="eyebrow">专业团队</div>
            <h2 className="h2" style={{ marginBottom: 14 }}>四士联合，全方位保障</h2>
            <p className="sub" style={{ margin: '0 auto' }}>
              行政书士·社会保险劳务士·税理士·中小企业诊断士，四种国家资格专家组成跨学科团队，覆盖补助金申请的每一个环节。
            </p>
          </div>
          <div className="grid-4">
            {teamMembers.map((m, i) => (
              <div key={i} className="card-premium" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Avatar circle */}
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--brand) 0%, var(--brand-soft) 100%)',
                  color: '#fff', fontSize: 24, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                  boxShadow: '0 4px 12px rgba(30,64,175,.25)',
                  letterSpacing: 0,
                }}>
                  {m.initial}
                </div>
                <div style={{
                  display: 'inline-block', alignSelf: 'flex-start',
                  fontSize: 11, fontWeight: 700, padding: '4px 10px',
                  borderRadius: 100, marginBottom: 14,
                  background: 'var(--brand-bg)', color: 'var(--brand)',
                  border: '1px solid var(--brand-mid)',
                  letterSpacing: '.05em',
                }}>
                  {m.title}
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', marginBottom: 2 }}>{m.name}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12, letterSpacing: '.02em' }}>{m.en}</div>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 14, color: 'var(--gold)' }}>{m.specialty}</div>
                <p style={{ fontSize: 13.5, color: 'var(--body)', lineHeight: 1.75, flex: 1 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 创业故事 */}
      <section className="sec" style={{ background: '#fff' }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <div className="eyebrow" style={{ margin: '0 auto 20px' }}>创业故事</div>
            <h2 className="h2">从一次痛心的错过说起</h2>
          </div>
          <div className="quote-block">
            <p className="quote-text">
              我亲眼看到一位认识多年的华人朋友，因为看不懂日语申请指南，错过了最高可获 500 万円事业重构补助金的申请截止日期。那一刻，我意识到——这不是个案，而是整个在日华人创业群体面临的系统性困境。
            </p>
            <div className="quote-attr">—— 创始人 李 忠良</div>
          </div>
          <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.9, marginBottom: 20 }}>
            2022年，李忠良与几位志同道合的专业人士共同创立了志成咨询。他们有一个共同的信念：在日华人企业主所面临的，不是能力不足，而是信息不对称和语言障碍所造成的机会不平等。
          </p>
          <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.9, marginBottom: 20 }}>
            创业初期，团队走访了大阪、东京、名古屋的数十家华人经营的企业。他们发现，许多企业主甚至不知道自己符合申请条件，更不知道这些补助金是真实存在、可以申请的。语言不通、信息缺失，让他们在不知不觉中与本该属于自己的资金擦肩而过。
          </p>
          <p style={{ fontSize: 15.5, color: 'var(--body)', lineHeight: 1.9 }}>
            如今，志成咨询已累计服务 3,000 余家在日华人企业，协助获批补助金总额超过 8.5 亿日元。每一个成功案例背后，都是一个华人家庭的创业梦想得到了应有的支持。我们会继续走下去，直到语言不再是任何在日华人获取发展机会的阻碍。
          </p>
        </div>
      </section>

      {/* 公司概要 */}
      <section className="sec" style={{ background: 'var(--surface-2)' }}>
        <div className="wrap" style={{ maxWidth: 960 }}>
          <div style={{ marginBottom: 36, textAlign: 'center' }}>
            <div className="eyebrow" style={{ margin: '0 auto 20px' }}>公司概要</div>
            <h2 className="h2">公司信息</h2>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="info-table">
              <tbody>
                {companyInfo.map((row, i) => (
                  <tr key={i}>
                    <td className="info-label">{row.label}</td>
                    <td className="info-value">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaSection
        title={<>与我们一起<br /><span style={{ color: 'var(--brand)' }}>让补助金触手可及</span></>}
        primary={{ href: '/contact', label: '申请免费咨询' }}
        secondary={{ href: '/partner', label: '了解代理合作' }}
      />

      <Footer />
    </main>
  );
}
