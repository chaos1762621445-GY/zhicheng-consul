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
    color: "#1e40af",
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
      <section style={{ background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)", padding: "80px 0 72px" }}>
        <div className="page-wrap">
          <div className="label-tag" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>关于我们</div>
          <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: 16 }}>
            关于志成コンサル
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", lineHeight: 1.75, maxWidth: 520 }}>
            我们是一支跨越语言与文化边界的专业团队，致力于让每一位在日华人企业主都能平等地享受日本政府补助金政策的红利。
          </p>
        </div>
      </section>

      {/* 公司理念 */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="page-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-cols-about">
            <div>
              <div className="label-tag">我们的理念</div>
              <h2 className="section-heading">让语言不再成为<br />机会的壁垒</h2>
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.85, marginBottom: 20 }}>
                日本政府每年提供超过数千亿日元的补助金与助成金，专门用于扶持中小企业创新、雇用与发展。然而，对于大多数在日华人企业主而言，这些资金往往因为语言门槛和繁琐的申请程序而遥不可及。
              </p>
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.85, marginBottom: 20 }}>
                我们相信，每一位用心经营、努力创业的在日华人，都应当平等地获得这些政策支持。志成コンサル成立的初衷，正是要消除这道语言与文化的屏障，让补助金申请变得简单、透明、真正可及。
              </p>
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.85 }}>
                全程中文对接，无成功不收费——这不只是我们的服务承诺，更是我们对在日华人社区责任与信任的体现。
              </p>
            </div>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 16, padding: "40px 48px" }}>
              {[
                { num: "3,000+", label: "累计服务企业数" },
                { num: "8.5億円", label: "协助企业获批总额" },
                { num: "92%", label: "申请成功率" },
                { num: "6+", label: "专业资质种类" },
              ].map((stat, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 20, paddingBottom: 20, borderBottom: i < 3 ? "1px solid #e2e8f0" : "none" }}>
                  <span style={{ fontSize: 14, color: "#475569" }}>{stat.label}</span>
                  <span style={{ fontSize: 28, fontWeight: 700, color: "#1e40af", letterSpacing: "-0.5px" }}>{stat.num}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 四士团队 */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="page-wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="label-tag" style={{ display: "inline-block" }}>专业团队</div>
            <h2 className="section-heading">四士联合，全方位保障</h2>
            <p className="section-sub" style={{ maxWidth: 560, margin: "0 auto" }}>
              行政书士·社会保险劳务士·税理士·中小企业诊断士，四种国家资格专家组成跨学科团队，覆盖补助金申请的每一个环节。
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
            {teamMembers.map((m, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "28px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, borderRadius: "16px 16px 0 0", background: m.color }} />
                <div
                  style={{ display: "inline-block", fontSize: 11, padding: "2px 10px", borderRadius: 4, marginBottom: 16, letterSpacing: "0.5px", background: `${m.color}14`, color: m.color, border: `1px solid ${m.color}30` }}
                >
                  {m.title}
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 2 }}>{m.name}</div>
                <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 12 }}>{m.en}</div>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 12, color: m.color }}>{m.specialty}</div>
                <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.75 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 创业故事 */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="page-wrap">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div className="label-tag">创业故事</div>
            <h2 className="section-heading">从一次痛心的错过说起</h2>
            <div style={{ borderLeft: "3px solid #1e40af", paddingLeft: 28, marginTop: 32, marginBottom: 32 }}>
              <p style={{ fontSize: 18, color: "#0f172a", lineHeight: 1.8, fontWeight: 400 }}>
                「我亲眼看到一位认识多年的华人朋友，因为看不懂日语申请指南，错过了最高可获500万円的事业重构补助金的申请截止日期。那一刻，我意识到——这不是个案，而是整个在日华人创业群体面临的系统性困境。」
              </p>
              <div style={{ marginTop: 16, fontSize: 14, color: "#94a3b8" }}>—— 创始人 中野 健二</div>
            </div>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.85, marginBottom: 20 }}>
              2022年，中野健二与几位志同道合的专业人士共同创立了志成コンサル。他们有一个共同的信念：在日华人企业主所面临的，不是能力不足，而是信息不对称和语言障碍所造成的机会不平等。
            </p>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.85, marginBottom: 20 }}>
              创业初期，团队走访了大阪、东京、名古屋的数十家华人经营的企业。他们发现，许多企业主甚至不知道自己符合申请条件，更不知道这些补助金是真实存在、可以申请的。语言不通、信息缺失，让他们在不知不觉中与本该属于自己的资金擦肩而过。
            </p>
            <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.85 }}>
              如今，志成コンサル已累计服务3,000余家在日华人企业，协助获批补助金总额超过8.5亿日元。每一个成功案例背后，都是一个华人家庭的创业梦想得到了应有的支持。我们会继续走下去，直到语言不再是任何在日华人获取发展机会的阻碍。
            </p>
          </div>
        </div>
      </section>

      {/* 会社概要 */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="page-wrap">
          <div className="label-tag">会社概要</div>
          <h2 className="section-heading">公司信息</h2>
          <div style={{ overflowX: "auto", marginTop: 32 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {companyInfo.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #e2e8f0" }}>
                    <td style={{ width: 140, fontWeight: 600, color: "#0f172a", whiteSpace: "nowrap", background: "#f1f5f9", padding: "16px 20px", fontSize: 14, lineHeight: 1.7, verticalAlign: "top" }}>
                      {row.label}
                    </td>
                    <td style={{ color: "#475569", padding: "16px 20px", fontSize: 14, lineHeight: 1.7 }}>
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
      <section style={{ background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)", padding: "80px 0", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", marginBottom: 16, lineHeight: 1.15 }}>与我们一起，让补助金触手可及</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.75 }}>3分钟免费问诊，为您的企业精准匹配最优补助金方案。全程中文，无成功不收费。</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#1e40af", padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              申请免费咨询
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/partner" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.4)", padding: "14px 32px", borderRadius: 8, fontWeight: 500, fontSize: 15, textDecoration: "none" }}>
              了解代理合作
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
