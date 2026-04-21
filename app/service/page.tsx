import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务流程",
  description: "志成コンサル的补助金申请服务流程详解——从初次咨询到资金到账，6步全程代办",
};

const Nav = () => (
  <nav className="nav">
    <div className="nav-inner">
      <Link href="/" className="nav-logo">
        <img src="/logo.png" alt="志成コンサル" style={{height:40}} />
      </Link>
      <div className="nav-links">
        <Link href="/subsidies" className="nav-link">补助金种类</Link>
        <Link href="/service" className="nav-link active">服务流程</Link>
        <Link href="/blog" className="nav-link">知识库</Link>
        <Link href="/contact" className="nav-cta">免费咨询</Link>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-brand">
        <div className="footer-logo-wrap">
          <img src="/logo.png" alt="志成コンサル" style={{height:40, filter:"brightness(10)"}} />
        </div>
        <p className="footer-tagline">专为在日华人企业主提供日本政府补助金申请代办服务。</p>
      </div>
      <div className="footer-nav">
        <h4>快速导航</h4>
        <div className="footer-nav-links">
          <Link href="/subsidies" className="footer-nav-link">补助金种类</Link>
          <Link href="/service" className="footer-nav-link">服务流程</Link>
          <Link href="/blog" className="footer-nav-link">知识库</Link>
          <Link href="/contact" className="footer-nav-link">免费咨询</Link>
        </div>
      </div>
      <div className="footer-contact-col">
        <h4>联系我们</h4>
        <div className="footer-contact-row"><strong>微信：</strong>pr2024188</div>
        <div className="footer-contact-row"><strong>电话：</strong>03-6265-9756</div>
        <div className="footer-contact-row"><strong>邮箱：</strong>knakano.sekiyoshi@gmail.com</div>
        <div className="footer-contact-row" style={{flexDirection:"column",gap:4}}>
          <strong>地址：</strong>
          <span>〒542-0082 大阪府大阪市中央区島之内1-13-3<br/>おおきに東心斎橋ビル301号室</span>
        </div>
        <div className="footer-qr">
          <img src="/wechat-qr.jpg" alt="微信二维码" style={{width:80,height:80,borderRadius:4}} />
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2025 株式会社志成コンサル. All rights reserved.</span>
    </div>
  </footer>
);

const steps = [
  {
    step: "STEP 01",
    title: "免费咨询・初次接触",
    duration: "当日〜翌营业日",
    desc: "通过微信（pr2024188）、电话（03-6265-9756）或网站问卷联系我们。专业顾问将用中文与您沟通，了解您的企业基本情况、业种、规模和当前面临的课题。",
    points: ["全程中文对接，无语言障碍", "初次咨询完全免费", "当日（工作日）回复"],
  },
  {
    step: "STEP 02",
    title: "补助金诊断・方案匹配",
    duration: "1〜3个工作日",
    desc: "专业顾问根据您提供的企业信息，进行全面的补助金适合性诊断。从6种以上主要补助金中筛选出最适合您企业的申请方案，并预估可获批金额。",
    points: ["多种补助金横向比较", "预估获批金额透明告知", "充分说明申请成功可能性"],
  },
  {
    step: "STEP 03",
    title: "申请方案制定・契约",
    duration: "3〜5个工作日",
    desc: "确认申请方案后，制定详细的申请计划书。明确申请时间轴、必要资料清单、预期获批金额及成功报酬率等所有条件，签署委托契约。",
    points: ["申请计划书全程透明", "无成功不收费承诺书面保证", "资料清单一览提供"],
  },
  {
    step: "STEP 04",
    title: "资料收集・申请书类作成",
    duration: "2〜4周",
    desc: "专业团队协助您收集所有必要的申请文件，包括事业计划书、财务资料、税务证明等。行政书士专业人员负责申请书类的作成和翻译工作，确保内容准确完整。",
    points: ["事業計画書の作成支援", "必要書類の収集・整備", "中日双语资料处理"],
  },
  {
    step: "STEP 05",
    title: "提交申请・审查对应",
    duration: "申请受理後1〜6个月",
    desc: "由持牌专业人员代为提交申请，确保格式合规、按时递交。申请受理后，全程跟踪审查进度，如需补充资料或说明，由我方专业人员直接对应，无需您亲自处理。",
    points: ["专业人员代为提交，格式保证", "审查期间进度定期汇报", "补充质询由我方全程处理"],
  },
  {
    step: "STEP 06",
    title: "获批通知・资金到账",
    duration: "获批後1〜3个月",
    desc: "收到获批通知后，协助您完成所有后续手续，包括交付申请、实绩报告提交等。资金到账后，按事先约定的成功报酬率支付服务费用。整个流程正式完成。",
    points: ["获批后手续全程陪同", "资金到账后再支付服务费", "后续追加申请也可商量"],
  },
];

const faqs = [
  {
    q: "全程需要多长时间才能拿到补助金？",
    a: "从初次咨询到资金到账，通常需要6个月〜1年不等。各补助金的审查期间不同，省力化补助金约3〜6个月，IT导入补助金约2〜3个月，事業再構築补助金约6〜12个月。具体时间轴在初次咨询时会详细说明。",
  },
  {
    q: "如果申请失败，需要支付费用吗？",
    a: "完全不需要。我们实行严格的「无成功不收费」原则，申请失败时您无需支付任何费用（包括资料作成费、交通费等）。这一承诺会在委托契约中明文规定。",
  },
  {
    q: "日语不好的话可以申请吗？",
    a: "完全没有问题。我们的顾问团队全程以中文对接，所有日语文件由我们的专业人员处理。您只需要提供相关企业信息和配合资料收集即可，不需要您自己阅读或撰写日语文件。",
  },
  {
    q: "个人事业主（个体经营）也可以申请吗？",
    a: "可以申请。小規模事業者持続化補助金、IT導入補助金、キャリアアップ助成金等均对个人事业主开放。具体的申请资格根据您的业种和规模有所不同，请通过免费咨询确认。",
  },
  {
    q: "成功报酬是多少？",
    a: "成功报酬因补助金种类和申请金额而有所不同，通常为获批金额的10%〜20%。具体报酬率会在签署委托契约前完全透明地告知您。不会有任何隐藏费用。",
  },
  {
    q: "已经在经营中的企业才能申请吗？",
    a: "大部分补助金要求企业已经在运营中，但也有针对创业初期的特例（如小規模持続化補助金的創業枠）。即使是刚刚开始创业的企业，也有适合的补助金选项，请通过免费咨询了解详情。",
  },
];

export default function ServicePage() {
  return (
    <main>
      <Nav />

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-label">服务流程</div>
          <h1>6步全程代办服务</h1>
          <p>从初次咨询到资金到账，我们全程以中文陪同。无成功不收费，彻底消除您的申请风险。</p>
        </div>
      </div>

      {/* Process Steps */}
      <section className="section">
        <div className="section-inner">
          <div className="section-head-centered">
            <div className="section-label">PROCESS</div>
            <h2 className="section-title">申请流程详解</h2>
            <p className="section-desc">清晰透明的6步流程，让您随时掌握申请进度。</p>
          </div>

          <div style={{maxWidth:900,margin:"0 auto"}}>
            {steps.map((s, i) => (
              <div key={i} style={{display:"flex",gap:32,marginBottom:i < steps.length - 1 ? 0 : 0,position:"relative"}}>
                {/* Number + Line */}
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0}}>
                  <div style={{
                    width:56,height:56,borderRadius:"50%",
                    background:"var(--navy)",color:"#fff",
                    fontFamily:"var(--font-serif)",fontSize:18,fontWeight:700,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    border:"2px solid var(--navy)",flexShrink:0
                  }}>{i + 1}</div>
                  {i < steps.length - 1 && (
                    <div style={{width:2,flex:1,minHeight:40,background:"var(--border)",margin:"8px 0"}} />
                  )}
                </div>
                {/* Content */}
                <div style={{flex:1,paddingBottom:i < steps.length - 1 ? 40 : 0,paddingTop:8}}>
                  <div style={{fontSize:11,fontWeight:600,letterSpacing:"1px",textTransform:"uppercase",color:"var(--blue)",marginBottom:4}}>{s.step}</div>
                  <div style={{fontFamily:"var(--font-serif)",fontSize:20,fontWeight:700,color:"var(--navy)",marginBottom:4}}>{s.title}</div>
                  <div style={{fontSize:12,color:"var(--text-3)",marginBottom:12}}>目安期間：{s.duration}</div>
                  <p style={{fontSize:15,color:"var(--text-2)",lineHeight:1.8,marginBottom:16}}>{s.desc}</p>
                  <div style={{display:"flex",flexDirection:"column",gap:8}}>
                    {s.points.map((p, j) => (
                      <div key={j} style={{display:"flex",alignItems:"center",gap:8,fontSize:14,color:"var(--text-2)"}}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14,color:"var(--blue)",flexShrink:0}}>
                          <polyline points="20 6 9 17 4 12"/>
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
      <section className="section-alt">
        <div className="section-inner">
          <div className="section-head-centered">
            <div className="section-label">FAQ</div>
            <h2 className="section-title">よくある質問</h2>
            <p className="section-desc">补助金申请について、よくいただく质问にお答えします。</p>
          </div>
          <div style={{maxWidth:800,margin:"0 auto"}}>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-q">
                    <span className="faq-q-mark">Q</span>
                    {faq.q}
                  </div>
                  <p className="faq-a">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2>まずは無料相談から始めましょう</h2>
          <p>3分間の問診で、あなたの企業に最適な補助金をご提案します。完全無料・購買義務なし。</p>
          <Link href="/contact" className="btn-cta-outline">
            无料相談を申込む
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
