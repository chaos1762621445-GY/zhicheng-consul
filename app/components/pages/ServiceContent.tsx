import React from "react";
import NavClient from "../NavClient";
import Footer from "../Footer";
import PageHero from "../PageHero";
import CtaSection from "../CtaSection";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
const HOME_LABEL: Record<Locale, string> = { zh: "首页", en: "Home", ja: "ホーム" };
import { localizedHref } from "@/lib/i18n/href";

// 本页三语文案（结构一致，翻译值可并行维护）
const T: Record<Locale, {
  heroEyebrow: string; heroTitle1: string; heroTitle2: string; heroDesc: string;
  stepsEyebrow: string; stepsHeading: string; stepsSub: string;
  faqEyebrow: string; faqHeading: string; faqSub: string;
  ctaTitle1: string; ctaTitle2: string; ctaDesc: string;
  steps: { n: string; title: string; duration: string; desc: string; you: string; we: string }[];
  afterLabel: string; youLabel: string; weLabel: string;
  feeEyebrow: string; feeHeading: string; fee: string[];
  faqs: { q: string; a: string }[];
}> = {
  zh: {
    heroEyebrow: "服务流程",
    heroTitle1: "10 步看清全流程", heroTitle2: "从免费评估到入金",
    heroDesc: "从初次咨询到资金到账，全程中文陪同。不获批不收费，彻底消除申请风险。",
    stepsEyebrow: "申请流程", stepsHeading: "10 步流程详解：您做什么，我们做什么", stepsSub: "清晰透明，让您随时掌握申请进度。",
    faqEyebrow: "FAQ", faqHeading: "常见问题解答", faqSub: "关于补助金申请，您最常问到的问题。",
    ctaTitle1: "立即开始", ctaTitle2: "免费咨询", ctaDesc: "3分钟问诊，精准推荐最优补助金方案。完全免费，无任何购买义务。",
    steps: [
      { n: "01", title: "免费初步评估", duration: "1 个营业日内", desc: "中文说明在留资格、行业、员工数、想做的事。", you: "4 个问题，微信/电话/表单任一", we: "回复能报的制度、不建议报的原因、先补哪一步" },
      { n: "02", title: "确认申请条件", duration: "1〜3 个营业日", desc: "对照公募要領逐条核对要件，测算金额与自筹资金。", you: "提供決算書／申告書、雇用与社保状况", we: "要件核对表、金额测算、日程倒推" },
      { n: "03", title: "签订服务协议", duration: "—", desc: "成功报酬比例、服务范围、例外情况书面写清。", you: "确认合同", we: "费用与责任边界透明告知" },
      { n: "04", title: "准备企业资料", duration: "1〜2 周", desc: "GビズID、見積、登记簿等前置材料。", you: "办 GビズID、取得供应商見積", we: "材料清单、逐项检查" },
      { n: "05", title: "制作事业计划与申请材料", duration: "2〜4 周", desc: "行政书士制作补助金书类；雇用类助成金由社劳士办理；税理士核对财务。", you: "确认计划内容", we: "全部日文书类制作与制度用语对齐" },
      { n: "06", title: "正式提交申请", duration: "締切前", desc: "电子申请系统提交，保存受付完了。", you: "—", we: "提交、留存凭证" },
      { n: "07", title: "补正与审查跟进", duration: "1〜3 个月", desc: "事务局质询与补正全程对接。", you: "配合补充资料", we: "回复质询、进度汇报" },
      { n: "08", title: "採択 → 交付決定", duration: "採択后 1〜2 个月", desc: "採択不等于拿钱，需再提交交付申请。", you: "确认交付申请内容", we: "交付申请书类、注意事项说明" },
      { n: "09", title: "项目实施", duration: "数月", desc: "交付決定后才可签约付款；变更需事前申请。", you: "按计划采购、保留发票凭证", we: "合规提醒、变更申请" },
      { n: "10", title: "实绩报告与支给申请", duration: "实施完毕后 1〜3 个月", desc: "实绩报告审核通过后入金；成功报酬在入金后支付。", you: "提供实施证据", we: "实绩报告制作、入金确认" },
    ],
    afterLabel: "採択后仍需 3〜6 个月：08〜10 步决定最终能否入金",
    youLabel: "您需要", weLabel: "我们负责",
    feeEyebrow: "费用", feeHeading: "费用与成功报酬",
    fee: ["成功报酬制：以获批（交付決定／支給決定）金额的一定比例计算，比例按制度与金额在签约前书面告知。", "不获批不收费：申请不採択时不收取成功报酬；着手金、实费（如公证·翻译）如有，签约时明示。", "客户单方中止、提供虚假资料导致的不採択或返还，不在「不获批不收费」范围内。", "补助金为事后支付，需自筹周转资金；可协助对接政策融资。"],
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
    heroTitle1: "The full process in 10 steps", heroTitle2: "from free assessment to disbursement",
    heroDesc: "From your first inquiry to funds in hand, we accompany you throughout in Chinese. No approval, no fee — application risk entirely removed.",
    stepsEyebrow: "Application Process", stepsHeading: "10 steps: what you do, what we do", stepsSub: "Clear and transparent, so you always know where your application stands.",
    faqEyebrow: "FAQ", faqHeading: "Frequently Asked Questions", faqSub: "The questions we're asked most about subsidy applications.",
    ctaTitle1: "Get Started with a", ctaTitle2: "Free Consultation", ctaDesc: "A 3-minute assessment to recommend your optimal subsidy plan. Completely free, with no obligation to buy.",
    steps: [
      { n: "01", title: "Free initial assessment", duration: "Within 1 business day", desc: "Tell us your status, industry, headcount and goal in Chinese.", you: "4 questions via WeChat, phone or form", we: "Programs you can apply for and what to fix first" },
      { n: "02", title: "Confirm eligibility", duration: "1–3 business days", desc: "Check each requirement against the guidelines; estimate amount and cash needs.", you: "Financials, employment and insurance status", we: "Requirement checklist, estimate, timeline" },
      { n: "03", title: "Sign engagement", duration: "—", desc: "Success-fee rate, scope and exceptions in writing.", you: "Confirm contract", we: "Transparent fee and responsibility boundaries" },
      { n: "04", title: "Prepare company materials", duration: "1–2 weeks", desc: "GビズID, quotes, registry.", you: "Obtain GビズID and vendor quotes", we: "Checklist and item-by-item review" },
      { n: "05", title: "Business plan & documents", duration: "2–4 weeks", desc: "Gyoseishoshi prepares subsidy documents; Sharoshi handles grants; Zeirishi verifies financials.", you: "Confirm plan content", we: "All Japanese documents aligned to program terms" },
      { n: "06", title: "Submit", duration: "Before deadline", desc: "E-application; save receipt.", you: "—", we: "Submission and records" },
      { n: "07", title: "Corrections & review", duration: "1–3 months", desc: "Handle secretariat inquiries.", you: "Provide supplements", we: "Responses and progress reports" },
      { n: "08", title: "Adoption → grant decision", duration: "1–2 months after adoption", desc: "Adoption is not payment; a grant application follows.", you: "Confirm grant application", we: "Grant documents and guidance" },
      { n: "09", title: "Implementation", duration: "Months", desc: "Contract and pay only after the grant decision; changes need prior approval.", you: "Purchase as planned, keep invoices", we: "Compliance reminders, change requests" },
      { n: "10", title: "Final report & payment", duration: "1–3 months after completion", desc: "Payment after report approval; success fee due after funds arrive.", you: "Provide evidence", we: "Final report and disbursement confirmation" },
    ],
    afterLabel: "3–6 more months after adoption: steps 08–10 decide whether funds arrive",
    youLabel: "You", weLabel: "We",
    feeEyebrow: "Fees", feeHeading: "Fees and success fee",
    fee: ["Success-fee basis: a percentage of the approved amount, disclosed in writing before contract.", "No approval, no fee: no success fee if not adopted; any retainer or out-of-pocket costs are stated at contract.", "Client withdrawal or false information leading to rejection/repayment is outside this guarantee.", "Subsidies are reimbursed after the fact; we can help arrange policy loans."],
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
    heroTitle1: "10ステップで全体像を", heroTitle2: "無料評価から入金まで",
    heroDesc: "初回相談から受給まで、全工程を中国語でサポート。不採択なら無料で、申請リスクを徹底的に取り除きます。",
    stepsEyebrow: "申請の流れ", stepsHeading: "10ステップ：お客様と当社の役割", stepsSub: "明確で透明、申請の進捗をいつでも把握できます。",
    faqEyebrow: "FAQ", faqHeading: "よくあるご質問", faqSub: "補助金申請について、最もよくいただくご質問です。",
    ctaTitle1: "今すぐ", ctaTitle2: "無料相談を始める", ctaDesc: "3分の問診で、最適な補助金プランを的確にご提案。完全無料、購入義務は一切ありません。",
    steps: [
      { n: "01", title: "無料の初回評価", duration: "1営業日以内", desc: "在留資格・業種・従業員数・目的を中国語でお聞きします。", you: "4つの質問（WeChat・電話・フォーム）", we: "申請可能な制度と先に整えることを回答" },
      { n: "02", title: "申請条件の確認", duration: "1〜3営業日", desc: "公募要領に沿って要件を確認、金額と自己資金を試算。", you: "決算書・申告書、雇用・社保状況", we: "要件チェック表・試算・逆算" },
      { n: "03", title: "契約", duration: "—", desc: "成功報酬率・範囲・例外を書面で明記。", you: "契約内容の確認", we: "費用と責任範囲を透明に提示" },
      { n: "04", title: "企業資料の準備", duration: "1〜2週間", desc: "GビズID・見積・登記簿など。", you: "GビズID取得・見積取得", we: "チェックリストと確認" },
      { n: "05", title: "事業計画・申請書類の作成", duration: "2〜4週間", desc: "行政書士が補助金書類、社労士が助成金、税理士が財務確認。", you: "計画内容の確認", we: "日本語書類の作成と制度用語の整合" },
      { n: "06", title: "申請提出", duration: "締切前", desc: "電子申請、受付完了の保存。", you: "—", we: "提出・記録保管" },
      { n: "07", title: "補正・審査対応", duration: "1〜3か月", desc: "事務局からの照会に対応。", you: "追加資料の提供", we: "回答・進捗報告" },
      { n: "08", title: "採択 → 交付決定", duration: "採択後1〜2か月", desc: "採択＝入金ではなく、交付申請が必要。", you: "交付申請内容の確認", we: "交付申請書類と留意事項" },
      { n: "09", title: "事業実施", duration: "数か月", desc: "交付決定後に契約・支払い、変更は事前申請。", you: "計画どおり購入・証憑保管", we: "遵守事項の案内・変更申請" },
      { n: "10", title: "実績報告・支給申請", duration: "完了後1〜3か月", desc: "実績報告の承認後に入金、成功報酬は入金後。", you: "実施証拠の提供", we: "実績報告作成・入金確認" },
    ],
    afterLabel: "採択後さらに3〜6か月：08〜10で入金の可否が決まります",
    youLabel: "お客様", weLabel: "当社",
    feeEyebrow: "費用", feeHeading: "費用と成功報酬",
    fee: ["成功報酬制：採択（交付決定・支給決定）額の一定割合。料率は契約前に書面提示。", "不採択なら無料：不採択時は成功報酬なし。着手金・実費がある場合は契約時に明示。", "お客様の一方的中止や虚偽資料による不採択・返還は対象外。", "補助金は後払いのため自己資金が必要。政策融資のご紹介も可能。"],
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
        crumbs={[{ label: HOME_LABEL[locale], href: localizedHref(locale, "/") }, { label: `${t.heroTitle1}${t.heroTitle2}` }]}
        eyebrow={t.heroEyebrow}
        title={<>{t.heroTitle1}<br /><span>{t.heroTitle2}</span></>}
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
              <React.Fragment key={i}>
              {i === 7 && <div className="pl-note" style={{ margin: "28px 0 8px", borderLeftColor: "var(--gold)" }}>{t.afterLabel}</div>}
              <div className="svc-step-row" style={{
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
                  <div className="step-split">
                    <div><b>{t.youLabel}</b>{s.you}</div>
                    <div><b>{t.weLabel}</b>{s.we}</div>
                  </div>
                </div>
              </div>
              </React.Fragment>
            ))}
          </div>

          <div style={{ maxWidth: 820, marginTop: 56 }}>
            <div className="eyebrow">{t.feeEyebrow}</div>
            <h2 className="h2 ed-h" style={{ marginBottom: 16 }}>{t.feeHeading}</h2>
            <ul className="pl-ul" style={{ fontSize: 15.5 }}>
              {t.fee.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
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
