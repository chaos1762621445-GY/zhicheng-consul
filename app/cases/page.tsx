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
  industryTag: string;
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
    industryTag: "飲食",
    company: "大阪某中华料理餐厅",
    subsidy: "事業再構築補助金",
    amount: "2,000万円",
    period: "约3个月",
    quote: "受疫情影响，该餐厅堂食收入骤降超40%。志成コンサル协助规划外卖+预制菜业务转型方案，成功获批2000万补助金，完成厨房设备升级和线上运营系统搭建，目前外卖营业额已占总收入的55%。",
    color: "#f97316",
  },
  {
    industry: "美容行业",
    industryTag: "美容",
    company: "东京某美甲美睫沙龙",
    subsidy: "IT導入補助金",
    amount: "450万円",
    period: "约2个月",
    quote: "该沙龙之前一直用纸质预约本，漏单、撞单情况不断。志成コンサル顾问建议申请IT导入补助，引入预约管理+会员CRM系统，费用几乎全额报销。导入后客户复购率提升了30%，节省了大量人工成本。",
    color: "#ec4899",
  },
  {
    industry: "IT·软件",
    industryTag: "IT",
    company: "福冈某系统开发公司",
    subsidy: "ものづくり補助金",
    amount: "1,000万円",
    period: "约4个月",
    quote: "该公司希望开发一套面向中小企业的AI自动化工具，但研发成本压力较大。志成コンサル协助撰写技术创新方案，顺利通过审查，获批1000万円研发补贴，提前两年实现了产品化目标。",
    color: "#6366f1",
  },
  {
    industry: "建设·装修",
    industryTag: "建設",
    company: "埼玉某华人内装工程公司",
    subsidy: "小規模事業者持続化補助金",
    amount: "200万円",
    period: "约6周",
    quote: "该公司规模较小，仅5名员工，一直不知道能申请什么补助。顾问推荐了最适合小规模公司的持续化补助金，协助更新施工设备并制作中日双语营销资料，顺利获批200万円，申请过程非常顺畅。",
    color: "#0ea5e9",
  },
  {
    industry: "零售·电商",
    industryTag: "小売",
    company: "名古屋某日本酒·土产零售店",
    subsidy: "事業再構築補助金",
    amount: "1,500万円",
    period: "约3.5个月",
    quote: "该零售店受疫情影响外国游客断绝，实体店经营困难。志成コンサル协助制定跨境电商转型计划，面向中国和东南亚市场，成功获批1500万円，实现了线上线下双轨经营。",
    color: "#14b8a6",
  },
  {
    industry: "教育·培训",
    industryTag: "教育",
    company: "京都某华人日语学校",
    subsidy: "IT導入補助金",
    amount: "350万円",
    period: "约2个月",
    quote: "该学校希望引入线上课程管理平台和互动教学软件，但预算有限。志成コンサル识别出符合IT导入补助金的条件，全程中文辅导完成申请，最终获批350万円，成功上线线上教学系统。",
    color: "#a855f7",
  },
  {
    industry: "制造·加工",
    industryTag: "製造",
    company: "爱知县某食品加工工厂",
    subsidy: "ものづくり補助金",
    amount: "3,000万円",
    period: "约5个月",
    quote: "该工厂自动化改造一直是最大瓶颈，人工成本居高不下。志成コンサル团队协助制作专业的技术创新计划书，成功申请3000万円设备升级补助，生产效率提升45%，残次品率下降60%。",
    color: "#22c55e",
  },
  {
    industry: "物流·运输",
    industryTag: "物流",
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
      <style>{`
        .cases-hero {
          background: var(--dark);
          padding: 88px 0 72px;
          position: relative;
          overflow: hidden;
        }
        .cases-hero::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(ellipse, rgba(83,58,253,0.28) 0%, transparent 70%);
          pointer-events: none;
        }
        .cases-hero::after {
          content: '';
          position: absolute;
          bottom: -60px; left: 5%;
          width: 600px; height: 300px;
          background: radial-gradient(ellipse, rgba(234,34,97,0.2) 0%, rgba(249,107,238,0.1) 50%, transparent 70%);
          filter: blur(30px);
          pointer-events: none;
        }
        .cases-hero-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 48px;
          position: relative; z-index: 1;
        }
        .cases-hero-label {
          display: inline-block;
          font-size: 11px; font-weight: 400; color: rgba(255,255,255,0.55);
          text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,0.15); border-radius: 4px;
          padding: 4px 12px;
        }
        .cases-hero-title {
          font-size: clamp(32px, 4.5vw, 52px); font-weight: 300; color: #ffffff;
          letter-spacing: -0.5px; line-height: 1.15; margin-bottom: 16px;
        }
        .cases-hero-desc {
          font-size: 18px; font-weight: 300; color: rgba(255,255,255,0.7);
          line-height: 1.75; max-width: 560px;
        }

        .cases-stats-section {
          background: rgba(28,30,84,0.95);
          padding: 48px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .cases-stats-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 48px;
          display: grid; grid-template-columns: repeat(4,1fr);
        }
        .cases-stat-item {
          text-align: center;
          padding: 0 24px;
          border-right: 1px solid rgba(255,255,255,0.12);
        }
        .cases-stat-item:last-child { border-right: none; }
        .cases-stat-num {
          font-size: clamp(32px,4vw,44px); font-weight: 300; color: #ffffff;
          letter-spacing: -1px; line-height: 1;
        }
        .cases-stat-label {
          font-size: 13px; font-weight: 400; color: rgba(255,255,255,0.6);
          margin-top: 8px;
        }

        .cases-section {
          background: var(--bg-outer);
          padding: 80px 0;
        }
        .cases-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        .case-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 28px;
          transition: box-shadow 0.2s, transform 0.2s;
          position: relative;
          overflow: hidden;
        }
        .case-card:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transform: translateY(-2px);
        }
        .case-card-accent {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
        }
        .case-card-header {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 12px;
          margin-bottom: 20px;
        }
        .case-industry-tag {
          display: inline-block;
          font-size: 11px; font-weight: 400;
          padding: 3px 10px; border-radius: 4px;
          letter-spacing: 0.5px;
        }
        .case-company {
          font-size: 15px; font-weight: 500; color: var(--heading);
          margin-top: 8px;
          line-height: 1.4;
        }
        .case-amount {
          font-size: 28px; font-weight: 300; color: var(--primary);
          letter-spacing: -0.5px; line-height: 1;
          white-space: nowrap;
        }
        .case-amount-label {
          font-size: 11px; color: var(--body); margin-top: 4px;
          text-align: right;
        }
        .case-meta {
          display: flex; gap: 12px; flex-wrap: wrap;
          margin-bottom: 16px;
        }
        .case-meta-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; color: var(--body);
          background: var(--bg-outer);
          border: 1px solid var(--border);
          border-radius: 4px; padding: 4px 10px;
        }
        .case-meta-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--primary); flex-shrink: 0;
        }
        .case-divider {
          border: none; border-top: 1px solid var(--border); margin: 16px 0;
        }
        .case-quote {
          font-size: 13px; font-weight: 300; color: var(--body);
          line-height: 1.8;
          padding-left: 12px;
          border-left: 2px solid var(--border);
        }
        .case-quote-mark {
          font-size: 20px; color: var(--primary-light);
          line-height: 1; display: block; margin-bottom: 6px;
        }

        @media (max-width: 900px) {
          .cases-hero { padding: 64px 0 48px; }
          .cases-hero-inner { padding: 0 20px; }
          .cases-hero-desc { font-size: 16px; }
          .cases-stats-inner {
            grid-template-columns: repeat(2,1fr);
            padding: 0 20px; gap: 0;
          }
          .cases-stat-item {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.12);
            padding: 20px 16px;
          }
          .cases-stat-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.12); }
          .cases-stat-item:nth-child(3),
          .cases-stat-item:nth-child(4) { border-bottom: none; }
          .cases-section { padding: 48px 0; }
          .cases-grid {
            grid-template-columns: 1fr;
            margin-top: 32px;
          }
        }
        @media (max-width: 600px) {
          .case-card { padding: 20px; }
          .case-amount { font-size: 22px; }
        }
      `}</style>

      <NavClient />

      {/* Hero */}
      <div className="cases-hero">
        <div className="cases-hero-inner">
          <div className="cases-hero-label">Success Cases · 成功案例</div>
          <h1 className="cases-hero-title">客户成功案例</h1>
          <p className="cases-hero-desc">来自餐饮、美容、IT、建设等多个行业的真实获批案例，印证我们在日本政府补助金领域的专业实力。</p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="cases-stats-section">
        <div className="cases-stats-inner">
          {stats.map((s) => (
            <div key={s.label} className="cases-stat-item">
              <div className="cases-stat-num">{s.num}</div>
              <div className="cases-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cases Grid */}
      <section className="cases-section">
        <div className="section-inner">
          <div style={{textAlign:"center",marginBottom:8}}>
            <span className="section-label">真实案例 · 匿名脱敏处理</span>
          </div>
          <h2 className="section-title" style={{textAlign:"center"}}>各行业获批实例</h2>
          <p className="section-desc" style={{textAlign:"center",maxWidth:560,margin:"0 auto"}}>
            以下案例均来自我们服务过的真实客户，已做匿名化处理，补助金金额及周期均为实际数据。
          </p>

          <div className="cases-grid">
            {cases.map((c, i) => (
              <div key={i} className="case-card">
                <div className="case-card-accent" style={{background:c.color}}></div>
                <div className="case-card-header">
                  <div>
                    <span
                      className="case-industry-tag"
                      style={{
                        background: `${c.color}18`,
                        color: c.color,
                        border: `1px solid ${c.color}40`,
                      }}
                    >
                      {c.industry}
                    </span>
                    <div className="case-company">{c.company}</div>
                  </div>
                  <div style={{textAlign:"right",flexShrink:0}}>
                    <div className="case-amount">{c.amount}</div>
                    <div className="case-amount-label">获批金额</div>
                  </div>
                </div>

                <div className="case-meta">
                  <div className="case-meta-item">
                    <div className="case-meta-dot"></div>
                    <span>{c.subsidy}</span>
                  </div>
                  <div className="case-meta-item">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span>申请周期 {c.period}</span>
                  </div>
                </div>

                <hr className="case-divider" />

                <div className="case-quote">
                  <span className="case-quote-mark">"</span>
                  {c.quote}
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p style={{
            textAlign:"center",
            fontSize:12,
            color:"var(--body)",
            marginTop:40,
            padding:"16px 24px",
            background:"#ffffff",
            border:"1px solid var(--border)",
            borderRadius:6,
            lineHeight:1.8,
          }}>
            ※ 以上案例均已征得客户同意并做匿名化处理，补助金获批金额因企业规模、申请内容、审查年度等因素而异，不代表所有申请均可达到相同金额。具体可获批额度请咨询我们进行个案评估。
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <div className="section-label" style={{color:"rgba(255,255,255,0.55)"}}>下一步</div>
          <h2 className="cta-title">您的企业也能获得补助金</h2>
          <p className="cta-desc">免费咨询资格诊断，3分钟了解您能申请哪些补助金，专业顾问当日回复。</p>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/contact" className="btn-cta-white">
              立即免费咨询
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/faq" className="btn-cta-ghost">查看常见问题</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

