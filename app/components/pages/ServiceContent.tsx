import NavClient from "../NavClient";
import Footer from "../Footer";
import PageHero from "../PageHero";
import CtaSection from "../CtaSection";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

// 本页三语文案（结构一致，翻译值可并行维护）
const T: Record<Locale, {
  heroEyebrow: string; heroTitle1: string; heroTitle2: string; heroDesc: string;
  stepsEyebrow: string; stepsHeading: string; stepsSub: string;
  faqEyebrow: string; faqHeading: string; faqSub: string;
  ctaTitle1: string; ctaTitle2: string; ctaDesc: string;
  steps: { n: string; title: string; duration: string; desc: string; points: string[] }[];
  faqs: { q: string; a: string }[];
}> = {
  zh: {
    heroEyebrow: "服务流程",
    heroTitle1: "6步全程代办", heroTitle2: "从咨询到到账",
    heroDesc: "从初次咨询到资金到账，全程中文陪同。不获批不收费，彻底消除申请风险。",
    stepsEyebrow: "申请流程", stepsHeading: "6步流程详解", stepsSub: "清晰透明，让您随时掌握申请进度。",
    faqEyebrow: "FAQ", faqHeading: "常见问题解答", faqSub: "关于补助金申请，您最常问到的问题。",
    ctaTitle1: "立即开始", ctaTitle2: "免费咨询", ctaDesc: "3分钟问诊，精准推荐最优补助金方案。完全免费，无任何购买义务。",
    steps: [
      { n: "01", title: "免费咨询·初次接触", duration: "当日〜次个工作日", desc: "扫码添加企业微信或电话联系我们。专业顾问用中文与您沟通，了解企业基本情况、业种和规模。", points: ["全程中文，无语言障碍", "初次咨询完全免费", "当日工作日回复"] },
      { n: "02", title: "补助金诊断·方案匹配", duration: "1〜3个工作日", desc: "根据您的企业信息，从6种以上主要补助金中筛选最适合方案，预估可获批金额并详细说明。", points: ["多种补助金横向比较", "预估获批金额透明告知", "说明申请成功可能性"] },
      { n: "03", title: "申请方案制定·签约", duration: "3〜5个工作日", desc: "制定详细申请计划书，明确时间轴、资料清单、预期金额及成功报酬率，签署委托合同。", points: ["申请计划书全程透明", "无成功不收费书面保证", "资料清单提前告知"] },
      { n: "04", title: "资料收集与整理", duration: "2〜4周", desc: "专业团队协助收集申请文件，行政书士负责申请书类制作和翻译，确保内容准确完整。", points: ["事业计划书制作支援", "必要书类收集整备", "中日双语资料处理"] },
      { n: "05", title: "提交申请·跟进审查", duration: "申请受理后1〜6个月", desc: "持牌专业人员代为提交申请，格式合规。审查期间跟踪进度，补充质询由我方全程处理。", points: ["专业人员代为提交", "审查进度定期汇报", "补充质询全程代理"] },
      { n: "06", title: "获批通知·资金到账", duration: "获批后1〜3个月", desc: "获批后协助完成所有后续手续，资金到账后按约定支付服务费。后续追加申请也可商量。", points: ["获批手续全程陪同", "资金到账后再付费", "后续追加申请可商量"] },
    ],
    faqs: [
      { q: "全程需要多长时间才能拿到补助金？", a: "从初次咨询到资金到账，通常需要6个月〜1年。省力化补助金约3〜6个月，AI导入补助金约2〜3个月，具体时间轴在初次咨询时会详细说明。" },
      { q: "如果申请失败，需要支付费用吗？", a: "完全不需要。我们严格执行「无成功不收费」原则，申请失败时无需支付任何费用，包括资料制作费、交通费等，承诺书面写入合同。" },
      { q: "日语不好的话可以申请吗？", a: "完全没有问题。顾问团队全程中文对接，所有日语文件由我们的专业人员处理，您只需配合提供企业信息和资料即可。" },
      { q: "个人事业主也可以申请吗？", a: "可以申请。小规模持续化补助金、AI·IT导入补助金、员工转正助成金等均对个人事业主开放，具体资格请通过免费咨询确认。" },
      { q: "成功报酬是多少？", a: "通常为获批金额的10%〜20%，因补助金种类和申请金额而异。具体报酬率在签署合同前完全透明告知，不存在任何隐藏费用。" },
      { q: "刚创业的企业也可以申请吗？", a: "大部分补助金要求企业已在运营，但也有针对创业初期的特例（如小规模持续化补助金创业框架），请通过免费咨询了解适合您的选项。" },
    ],
  },
  en: {
    heroEyebrow: "Our Process",
    heroTitle1: "Six Steps, Fully Managed", heroTitle2: "From Consultation to Disbursement",
    heroDesc: "From your first inquiry to funds in hand, we accompany you throughout in Chinese. No approval, no fee — application risk entirely removed.",
    stepsEyebrow: "Application Process", stepsHeading: "The Six Steps in Detail", stepsSub: "Clear and transparent, so you always know where your application stands.",
    faqEyebrow: "FAQ", faqHeading: "Frequently Asked Questions", faqSub: "The questions we're asked most about subsidy applications.",
    ctaTitle1: "Get Started with a", ctaTitle2: "Free Consultation", ctaDesc: "A 3-minute assessment to recommend your optimal subsidy plan. Completely free, with no obligation to buy.",
    steps: [
      { n: "01", title: "Free Consultation · First Contact", duration: "Same day – next business day", desc: "Add us on WeChat Work or call us. A professional advisor communicates with you in Chinese to understand your company's basics, industry, and size.", points: ["Full Chinese support, no language barrier", "First consultation entirely free", "Same-day reply on business days"] },
      { n: "02", title: "Subsidy Diagnosis · Plan Matching", duration: "1–3 business days", desc: "Based on your company information, we select the best-fit plan from 6+ major subsidies, estimate the approvable amount, and explain in detail.", points: ["Side-by-side comparison of multiple subsidies", "Transparent estimate of approvable amount", "Assessment of approval likelihood"] },
      { n: "03", title: "Application Plan & Contract", duration: "3–5 business days", desc: "We draft a detailed application plan specifying the timeline, document checklist, expected amount, and success-fee rate, then sign the engagement contract.", points: ["Fully transparent application plan", "Written no-approval-no-fee guarantee", "Document checklist provided in advance"] },
      { n: "04", title: "Document Collection & Preparation", duration: "2–4 weeks", desc: "Our team assists in collecting application documents; the Gyoseishoshi handles application document preparation and translation, ensuring accuracy and completeness.", points: ["Business plan drafting support", "Collection of required documents", "Bilingual (CN/JP) document handling"] },
      { n: "05", title: "Submission · Review Follow-up", duration: "1–6 months after acceptance", desc: "Licensed professionals submit on your behalf in compliant format. We track progress during review and handle any supplementary inquiries throughout.", points: ["Submission by licensed professionals", "Regular progress reports during review", "Full handling of supplementary inquiries"] },
      { n: "06", title: "Approval Notice · Disbursement", duration: "1–3 months after approval", desc: "After approval we assist with all follow-up procedures; the service fee is paid once funds arrive. Follow-up additional applications can also be discussed.", points: ["Full support through approval procedures", "Payment only after funds arrive", "Additional applications negotiable"] },
    ],
    faqs: [
      { q: "How long does the whole process take to receive the subsidy?", a: "From first consultation to funds in hand typically takes 6 months to 1 year. The Labor-Saving Subsidy takes about 3–6 months and the AI / IT Adoption Subsidy about 2–3 months; the specific timeline is explained in detail at your first consultation." },
      { q: "If the application fails, do I have to pay?", a: "Not at all. We strictly follow the \"no approval, no fee\" principle — if the application fails you pay nothing, including document preparation and travel costs, and this is written into the contract." },
      { q: "Can I apply if my Japanese isn't good?", a: "No problem at all. Our advisory team works entirely in Chinese, and all Japanese paperwork is handled by our professionals — you only need to provide company information and materials." },
      { q: "Can sole proprietors apply?", a: "Yes. The Small-Business Sustainability Subsidy, AI / IT Adoption Subsidy, Career-Up Grant, and others are open to sole proprietors; please confirm specific eligibility through a free consultation." },
      { q: "How much is the success fee?", a: "Typically 10%–20% of the approved amount, varying by subsidy type and application amount. The exact rate is disclosed with full transparency before you sign, with no hidden costs whatsoever." },
      { q: "Can newly founded companies apply?", a: "Most subsidies require the business to already be operating, but there are exceptions for early-stage startups (such as the startup track of the Small-Business Sustainability Subsidy); please explore your options through a free consultation." },
    ],
  },
  ja: {
    heroEyebrow: "サービスの流れ",
    heroTitle1: "6ステップで全面代行", heroTitle2: "相談から受給まで",
    heroDesc: "初回相談から受給まで、全工程を中国語でサポート。不採択なら無料で、申請リスクを徹底的に取り除きます。",
    stepsEyebrow: "申請の流れ", stepsHeading: "6ステップを詳しく解説", stepsSub: "明確で透明、申請の進捗をいつでも把握できます。",
    faqEyebrow: "FAQ", faqHeading: "よくあるご質問", faqSub: "補助金申請について、最もよくいただくご質問です。",
    ctaTitle1: "今すぐ", ctaTitle2: "無料相談を始める", ctaDesc: "3分の問診で、最適な補助金プランを的確にご提案。完全無料、購入義務は一切ありません。",
    steps: [
      { n: "01", title: "無料相談・初回コンタクト", duration: "当日〜翌営業日", desc: "企業WeChatの追加またはお電話でご連絡ください。専門顧問が中国語で対応し、企業の基本状況・業種・規模を伺います。", points: ["全工程中国語、言語の壁なし", "初回相談は完全無料", "営業日当日にご返答"] },
      { n: "02", title: "補助金診断・プランマッチング", duration: "1〜3営業日", desc: "企業情報をもとに、6種類以上の主要補助金から最適なプランを選定し、受給可能額を試算して詳しくご説明します。", points: ["複数補助金の横断比較", "受給可能額を透明に提示", "申請成功の可能性を説明"] },
      { n: "03", title: "申請プラン策定・契約", duration: "3〜5営業日", desc: "詳細な申請計画書を策定し、スケジュール・資料リスト・想定額・成功報酬率を明確にしたうえで委託契約を締結します。", points: ["申請計画書は全工程透明", "不採択なら無料を書面で保証", "資料リストを事前にご案内"] },
      { n: "04", title: "資料収集と整備", duration: "2〜4週間", desc: "専門チームが申請書類の収集を支援し、行政書士が申請書類の作成と翻訳を担当、内容の正確性と完全性を確保します。", points: ["事業計画書の作成支援", "必要書類の収集・整備", "中日バイリンガル資料対応"] },
      { n: "05", title: "申請提出・審査フォロー", duration: "受理後1〜6か月", desc: "有資格の専門家が適正な様式で代理提出します。審査期間中は進捗を追跡し、追加照会も当社が全工程対応します。", points: ["専門家による代理提出", "審査進捗を定期報告", "追加照会も全工程代理"] },
      { n: "06", title: "採択通知・受給", duration: "採択後1〜3か月", desc: "採択後はすべての後続手続きを支援し、資金の受給後にお約束の報酬をお支払いいただきます。追加申請もご相談可能です。", points: ["採択手続きに全工程同行", "資金受給後にお支払い", "追加申請もご相談可"] },
    ],
    faqs: [
      { q: "受給までに全体でどのくらいかかりますか？", a: "初回相談から受給まで、通常6か月〜1年かかります。省力化補助金は約3〜6か月、AI・IT導入補助金は約2〜3か月で、具体的なスケジュールは初回相談で詳しくご説明します。" },
      { q: "申請が不成功の場合、費用は必要ですか？", a: "一切不要です。当社は「不採択なら無料」の原則を厳守しており、申請が不成功の場合、資料作成費・交通費などを含め費用は一切いただきません。契約書に書面で明記します。" },
      { q: "日本語が苦手でも申請できますか？", a: "まったく問題ありません。顧問チームが全工程中国語で対応し、日本語の書類はすべて当社の専門家が処理しますので、企業情報と資料のご提供にご協力いただくだけで結構です。" },
      { q: "個人事業主でも申請できますか？", a: "申請可能です。小規模持続化補助金、AI・IT導入補助金、キャリアアップ助成金などはいずれも個人事業主が対象です。具体的な資格は無料相談でご確認ください。" },
      { q: "成功報酬はいくらですか？", a: "通常は採択額の10%〜20%で、補助金の種類や申請額により異なります。具体的な報酬率は契約締結前に完全に透明にご案内し、隠れた費用は一切ありません。" },
      { q: "創業したばかりの企業でも申請できますか？", a: "多くの補助金は事業が既に稼働していることを求めますが、創業初期向けの特例（小規模持続化補助金の創業枠など）もあります。ご自身に合った選択肢は無料相談でご確認ください。" },
    ],
  },
};

export default function ServiceContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = T[locale];

  return (
    <main>
      <NavClient locale={locale} dict={dict} />

      <PageHero
        eyebrow={t.heroEyebrow}
        title={<>{t.heroTitle1}<br /><span style={{ color: 'var(--gold)' }}>{t.heroTitle2}</span></>}
        desc={t.heroDesc}
      />

      <section className="sec" style={{ background: "var(--surface)" }}>
        <div className="wrap">
          <div style={{ maxWidth: 560, marginBottom: 56 }}>
            <div className="eyebrow">{t.stepsEyebrow}</div>
            <h2 className="h2 ed-h" style={{ marginBottom: 12 }}>{t.stepsHeading}</h2>
            <p className="sub" style={{ fontSize: 15 }}>{t.stepsSub}</p>
          </div>
          <div style={{ maxWidth: 820, borderTop: "1.5px solid var(--ink)" }}>
            {t.steps.map((s, i) => (
              <div key={i} className="svc-step-row" style={{
                display: "grid", gridTemplateColumns: "88px 1fr", gap: 28,
                padding: "34px 0", borderBottom: "1px solid var(--line)",
              }}>
                <div className="serif" aria-hidden="true" style={{
                  fontSize: 44, fontWeight: 900, lineHeight: 1,
                  color: "transparent", WebkitTextStroke: "1.3px var(--gold)",
                }}>
                  {s.n}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 8, flexWrap: "wrap" }}>
                    <span className="serif" style={{ fontSize: 19, fontWeight: 700, color: "var(--ink)" }}>{s.title}</span>
                    <span style={{ fontSize: 12, color: "var(--gold)", fontWeight: 700, letterSpacing: ".06em", whiteSpace: "nowrap" }}>
                      {s.duration}
                    </span>
                  </div>
                  <p style={{ fontSize: 14.5, color: "var(--body)", lineHeight: 1.75, marginBottom: 14, maxWidth: "62ch" }}>{s.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    {s.points.map((p, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "var(--ink-3)" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
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

      <section className="sec" style={{ background: "var(--surface-warm)" }}>
        <div className="wrap">
          <div style={{ maxWidth: 560, marginBottom: 48 }}>
            <div className="eyebrow">{t.faqEyebrow}</div>
            <h2 className="h2 ed-h" style={{ marginBottom: 12 }}>{t.faqHeading}</h2>
            <p className="sub" style={{ fontSize: 15 }}>{t.faqSub}</p>
          </div>
          <div className="faq-list" style={{ maxWidth: 820 }}>
            {t.faqs.map((f, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-q">
                  <span className="faq-q-marker serif">Q</span>
                  <span className="faq-q-text">{f.q}</span>
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>
                <div className="faq-a"><p>{f.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        locale={locale}
        dict={dict}
        title={<>{t.ctaTitle1}<span style={{ color: 'var(--gold-bright)' }}>{t.ctaTitle2}</span></>}
        desc={t.ctaDesc}
      />

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
