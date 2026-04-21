import Link from "next/link";
import type { Metadata } from "next";
import NavClient from "../components/NavClient";

export const metadata: Metadata = {
  title: "关于我们 | 志成コンサル",
  description: "志成コンサル——专为在日华人企业主提供补助金申请代办服务。行政书士·社会保险劳务士·税理士·中小企业诊断士联合专业团队，全程中文无障碍。",
};

const Nav = () => <NavClient />;

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div>
        <img src="/logo.png" alt="志成コンサル" style={{height:36,display:'block',filter:'brightness(10)'}} />
        <p className="footer-brand-desc">专为在日华人企业主提供日本政府补助金申请代办服务。行政书士·社会保险劳务士·税理士·中小企业诊断士联合专业团队，全程中文无障碍。</p>
      </div>
      <div>
        <div className="footer-col-title">快速导航</div>
        <div className="footer-links">
          {[{href:'/subsidies',label:'补助金种类'},{href:'/service',label:'服务流程'},{href:'/cases',label:'成功案例'},{href:'/faq',label:'常见问题'},{href:'/about',label:'关于我们'},{href:'/partner',label:'代理合作'},{href:'/blog',label:'知识库'},{href:'/contact',label:'免费咨询'}].map(l=>(<a key={l.href} href={l.href} className="footer-link">{l.label}</a>))}
        </div>
      </div>
      <div>
        <div className="footer-col-title">联系我们</div>
        <div className="footer-contact-row"><strong className="footer-contact-label">微信：</strong><span>pr2024188</span></div>
        <div className="footer-contact-row"><strong className="footer-contact-label">电话：</strong><span>03-6265-9756</span></div>
        <div className="footer-contact-row"><strong className="footer-contact-label">邮箱：</strong><span>knakano.sekiyoshi@gmail.com</span></div>
      </div>
    </div>
    <div className="footer-copy"><div className="footer-copy-inner"><span className="footer-copy-text">© 2025 株式会社志成コンサル 保留所有权利。</span><span className="footer-copy-text">行政书士·社会保险劳务士·税理士·中小企业诊断士</span></div></div>
  </footer>
);

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
    color: "#ea2261",
  },
  {
    title: "税理士",
    name: "李 建华",
    en: "Li Jianhua",
    specialty: "财务审查·税务申报专家",
    desc: "精通日本税务法规与中小企业财务管理，专为在日华人企业主提供税务规划与财务咨询。在补助金申请中负责财务资料准备和审查，确保数据准确无误，赢得审查机关信任。",
    color: "#15be53",
  },
  {
    title: "中小企業診断士",
    name: "王 浩然",
    en: "Wang Haoran",
    specialty: "事业计划·经营战略专家",
    desc: "国家资格中小企业诊断士，拥有深厚的经营战略与商业模式分析能力。负责事业重构补助金、制造业补助金等需要高质量事业计划书的申请，从战略层面提升申请竞争力。",
    color: "#f96bee",
  },
];

const companyInfo = [
  { label: "商号", value: "株式会社志成コンサル" },
  { label: "設立", value: "2022年4月" },
  { label: "所在地", value: "〒542-0082 大阪府大阪市中央区島之内1-13-3 おおきに東心斎橋ビル301号室" },
  { label: "事業内容", value: "補助金・助成金申請代行、経営コンサルティング、行政書士業務、税務申告支援" },
  { label: "資質・許認可", value: "行政書士事務所登録 / 社会保険労務士事務所登録 / 税理士事務所登録 / 中小企業診断士登録" },
  { label: "対応言語", value: "日本語・普通話（中国語）・広東語" },
  { label: "営業時間", value: "月〜金 9:00〜18:00（土日祝日要予約）" },
];

export default function AboutPage() {
  return (
    <main>
      <style>{`
        .about-team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        .about-company-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 32px;
        }
        .about-company-table tr {
          border-bottom: 1px solid var(--border);
        }
        .about-company-table td {
          padding: 16px 20px;
          font-size: 14px;
          line-height: 1.7;
        }
        .about-company-table td:first-child {
          width: 140px;
          font-weight: 500;
          color: var(--heading);
          white-space: nowrap;
          background: #f7f8fc;
        }
        .about-company-table td:last-child {
          color: var(--body);
        }
        @media (max-width: 900px) {
          .about-team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .about-team-grid {
            grid-template-columns: 1fr;
          }
          .about-company-table td:first-child {
            width: 100px;
          }
        }
      `}</style>

      <Nav />

      {/* Hero */}
      <div style={{
        background: "var(--dark)",
        padding: "88px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 70% 50%, rgba(83,58,253,0.25) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(234,34,97,0.15) 0%, transparent 50%)",
        }} />
        <div className="section-inner" style={{position: "relative", zIndex: 1}}>
          <div style={{maxWidth: 640}}>
            <div className="section-label" style={{color: "rgba(255,255,255,0.55)"}}>关于我们</div>
            <h1 style={{
              fontSize: "clamp(36px,5vw,56px)", fontWeight: 300, color: "#ffffff",
              letterSpacing: "-1px", lineHeight: 1.15, marginBottom: 20,
            }}>关于志成コンサル</h1>
            <p style={{fontSize: 18, fontWeight: 300, color: "rgba(255,255,255,0.75)", lineHeight: 1.8}}>
              我们是一支跨越语言与文化边界的专业团队，致力于让每一位在日华人企业主都能平等地享受日本政府补助金政策的红利。
            </p>
          </div>
        </div>
      </div>

      {/* 公司理念 */}
      <section style={{padding: "96px 0", background: "#ffffff"}}>
        <div className="section-inner">
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center"}}>
            <div>
              <div className="section-label">我们的理念</div>
              <h2 className="section-title">让语言不再成为<br/>机会的壁垒</h2>
              <p style={{fontSize: 16, color: "var(--body)", lineHeight: 1.85, marginBottom: 20}}>
                日本政府每年提供超过数千亿日元的补助金与助成金，专门用于扶持中小企业创新、雇用与发展。然而，对于大多数在日华人企业主而言，这些资金往往因为语言门槛和繁琐的申请程序而遥不可及。
              </p>
              <p style={{fontSize: 16, color: "var(--body)", lineHeight: 1.85, marginBottom: 20}}>
                我们相信，每一位用心经营、努力创业的在日华人，都应当平等地获得这些政策支持。志成コンサル成立的初衷，正是要消除这道语言与文化的屏障，让补助金申请变得简单、透明、真正可及。
              </p>
              <p style={{fontSize: 16, color: "var(--body)", lineHeight: 1.85}}>
                全程中文对接，无成功不收费——这不只是我们的服务承诺，更是我们对在日华人社区责任与信任的体现。
              </p>
            </div>
            <div style={{
              background: "linear-gradient(135deg, rgba(83,58,253,0.06) 0%, rgba(249,107,238,0.06) 100%)",
              borderRadius: 12,
              border: "1px solid var(--border)",
              padding: "48px 40px",
            }}>
              {[
                { num: "200+", label: "累计服务企业数" },
                { num: "¥3.2億", label: "协助企业获批总额" },
                { num: "87%", label: "申请成功率" },
                { num: "6+", label: "专业资质种类" },
              ].map((stat, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "20px 0",
                  borderBottom: i < 3 ? "1px solid var(--border)" : "none",
                }}>
                  <span style={{fontSize: 13, color: "var(--body)"}}>{ stat.label}</span>
                  <span style={{fontSize: 28, fontWeight: 300, color: "var(--primary)", letterSpacing: "-0.5px"}}>{ stat.num}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 四士团队 */}
      <section style={{padding: "96px 0", background: "var(--bg-outer)"}}>
        <div className="section-inner">
          <div style={{textAlign: "center", marginBottom: 0}}>
            <div className="section-label">专业团队</div>
            <h2 className="section-title" style={{textAlign: "center"}}>四士联合，全方位保障</h2>
            <p className="section-desc" style={{textAlign: "center", maxWidth: 560, margin: "0 auto"}}>
              行政书士·社会保险劳务士·税理士·中小企业诊断士，四种国家资格专家组成跨学科团队，覆盖补助金申请的每一个环节。
            </p>
          </div>
          <div className="about-team-grid">
            {teamMembers.map((m, i) => (
              <div key={i} style={{
                background: "#ffffff",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "32px 24px",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 4,
                  background: m.color,
                  borderRadius: "8px 8px 0 0",
                }} />
                <div style={{
                  display: "inline-block",
                  background: `${m.color}14`,
                  color: m.color,
                  border: `1px solid ${m.color}30`,
                  borderRadius: 4,
                  fontSize: 11, fontWeight: 400,
                  padding: "3px 10px",
                  letterSpacing: "0.5px",
                  marginBottom: 16,
                }}>{m.title}</div>
                <div style={{fontSize: 18, fontWeight: 500, color: "var(--heading)", marginBottom: 2}}>{m.name}</div>
                <div style={{fontSize: 12, color: "var(--body)", marginBottom: 12}}>{m.en}</div>
                <div style={{fontSize: 13, fontWeight: 500, color: m.color, marginBottom: 12}}>{m.specialty}</div>
                <p style={{fontSize: 13, color: "var(--body)", lineHeight: 1.75}}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 创业故事 */}
      <section style={{padding: "96px 0", background: "#ffffff"}}>
        <div className="section-inner">
          <div style={{maxWidth: 760, margin: "0 auto"}}>
            <div className="section-label">创业故事</div>
            <h2 className="section-title">从一次痛心的错过说起</h2>
            <div style={{
              borderLeft: "3px solid var(--primary)",
              paddingLeft: 28,
              marginBottom: 32,
              marginTop: 32,
            }}>
              <p style={{fontSize: 18, fontStyle: "italic", color: "var(--heading)", lineHeight: 1.8, fontWeight: 300}}>
                「我亲眼看到一位认识多年的华人朋友，因为看不懂日语申请指南，错过了最高可获500万円的事业重构补助金的申请截止日期。那一刻，我意识到——这不是个案，而是整个在日华人创业群体面临的系统性困境。」
              </p>
              <div style={{marginTop: 16, fontSize: 14, color: "var(--body)"}}>—— 创始人 中野 健二</div>
            </div>
            <p style={{fontSize: 16, color: "var(--body)", lineHeight: 1.85, marginBottom: 20}}>
              2022年，中野健二与几位志同道合的专业人士共同创立了志成コンサル。他们有一个共同的信念：在日华人企业主所面临的，不是能力不足，而是信息不对称和语言障碍所造成的机会不平等。
            </p>
            <p style={{fontSize: 16, color: "var(--body)", lineHeight: 1.85, marginBottom: 20}}>
              创业初期，团队走访了大阪、东京、名古屋的数十家华人经营的企业。他们发现，许多企业主甚至不知道自己符合申请条件，更不知道这些补助金是真实存在、可以申请的。语言不通、信息缺失，让他们在不知不觉中与本该属于自己的资金擦肩而过。
            </p>
            <p style={{fontSize: 16, color: "var(--body)", lineHeight: 1.85}}>
              如今，志成コンサル已累计服务200余家在日华人企业，协助获批补助金总额超过3.2亿日元。每一个成功案例背后，都是一个华人家庭的创业梦想得到了应有的支持。我们会继续走下去，直到语言不再是任何在日华人获取发展机会的阻碍。
            </p>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section style={{padding: "96px 0", background: "var(--bg-outer)"}}>
        <div className="section-inner">
          <div className="section-label">会社概要</div>
          <h2 className="section-title">公司信息</h2>
          <table className="about-company-table">
            <tbody>
              {companyInfo.map((row, i) => (
                <tr key={i}>
                  <td>{row.label}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="cta-title">与我们一起，让补助金触手可及</div>
          <p className="cta-desc">3分钟免费问诊，为您的企业精准匹配最优补助金方案。全程中文，无成功不收费。</p>
          <div style={{display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap"}}>
            <Link href="/contact" className="btn-cta-white">
              申请免费咨询
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/partner" className="btn-cta-ghost">
              了解代理合作
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
