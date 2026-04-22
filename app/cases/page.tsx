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
      <section style={{ background: "linear-gradient(135deg, #533afd 0%, #312ea8 100%)", padding: "80px 0 72px" }}>
        <div className="page-wrap">
          <div className="label-tag" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>Success Cases · 成功案例</div>
          <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.5px", marginBottom: 16 }}>
            客户成功案例
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", lineHeight: 1.75, maxWidth: 520 }}>
            来自餐饮、美容、IT、建设等多个行业的真实获批案例，印证我们在日本政府补助金领域的专业实力。
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div style={{ background: "#0f172a", padding: "48px 0" }}>
        <div className="page-wrap" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center", padding: "16px" }}>
              <div style={{ fontSize: "clamp(32px,4vw,44px)", fontWeight: 800, color: "#533afd", letterSpacing: "-1px", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cases Grid */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="page-wrap">
          <div style={{ textAlign: "center", marginBottom: 8 }}>
            <div style={{ display: "inline-block", fontSize: 11, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "2px" }}>真实案例 · 匿名脱敏处理</div>
          </div>
          <h2 className="section-heading" style={{ textAlign: "center" }}>各行业获批实例</h2>
          <p className="section-sub" style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            以下案例均来自我们服务过的真实客户，已做匿名化处理，补助金金额及周期均为实际数据。
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(460px, 1fr))", gap: 24 }}>
            {cases.map((c, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "28px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: c.color }} />
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 20 }}>
                  <div>
                    <span
                      style={{ display: "inline-block", fontSize: 11, padding: "2px 10px", borderRadius: 4, letterSpacing: "0.5px", background: `${c.color}18`, color: c.color, border: `1px solid ${c.color}40` }}
                    >
                      {c.industry}
                    </span>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#0f172a", marginTop: 8, lineHeight: 1.4 }}>{c.company}</div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: 28, fontWeight: 700, color: "#533afd", letterSpacing: "-0.5px", lineHeight: 1 }}>{c.amount}</div>
                    <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>获批金额</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#475569", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 6, padding: "4px 10px" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#533afd", flexShrink: 0 }} />
                    <span>{c.subsidy}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#475569", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 6, padding: "4px 10px" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    <span>申请周期 {c.period}</span>
                  </div>
                </div>

                <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "16px 0" }} />

                <div style={{ fontSize: 13, color: "#475569", lineHeight: 1.8, paddingLeft: 12, borderLeft: "2px solid #e2e8f0" }}>
                  <span style={{ fontSize: 20, color: "rgba(83,58,253,0.3)", lineHeight: 1, display: "block", marginBottom: 6 }}>"</span>
                  {c.quote}
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", fontSize: 12, color: "#94a3b8", marginTop: 40, padding: "16px 24px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, lineHeight: 1.8 }}>
            ※ 以上案例均已征得客户同意并做匿名化处理，补助金获批金额因企业规模、申请内容、审查年度等因素而异，不代表所有申请均可达到相同金额。具体可获批额度请咨询我们进行个案评估。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #533afd 0%, #312ea8 100%)", padding: "80px 0", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "inline-block", fontSize: 11, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 14 }}>下一步</div>
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", marginBottom: 16, lineHeight: 1.15 }}>您的企业也能获得补助金</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.85)", marginBottom: 40, lineHeight: 1.75 }}>免费咨询资格诊断，3分钟了解您能申请哪些补助金，专业顾问当日回复。</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#533afd", padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              立即免费咨询
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/faq" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.4)", padding: "14px 32px", borderRadius: 8, fontWeight: 500, fontSize: 15, textDecoration: "none" }}>
              查看常见问题
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
