import Link from "next/link";
import type { ReactNode } from "react";
import NavClient from "../NavClient";
import Footer from "../Footer";
import PageHero from "../PageHero";
import CtaSection from "../CtaSection";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localizedHref } from "@/lib/i18n/href";
import type { Locale } from "@/lib/i18n/config";

// 图标三语共用，不翻译
const icons: ReactNode[] = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
];

// 本页三语文案（结构一致，翻译值并行维护）
const T: Record<Locale, {
  heroEyebrow: string; heroTitle1: string; heroTitle2: string; heroDesc: string;
  heroBtnPrimary: string; heroBtnGhost: string;
  targetTag: string; targetHeading: string; targetSub: string;
  mechTag: string; mechHeading1: string; mechHeading2: string; mechIntro: string;
  exampleLabel: string; exampleAmountLabel: string; exampleRateLabel: string; exampleIncomeLabel: string;
  exampleTotalLabel: string; exampleTotal: string;
  flowTag: string; flowHeading: string; flowSub: string;
  faqTag: string; faqHeading: string;
  ctaTitle1: string; ctaTitle2: string; ctaDesc: string; ctaPrimary: string; ctaSecondary: string;
  statCards: { num: string; label: string; sub: string }[];
  targetGroups: { title: string; desc: string }[];
  mechItems: { label: string; value: string; desc: string }[];
  examples: { scenario: string; amount: string; rate: string; income: string }[];
  steps: { num: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}> = {
  zh: {
    heroEyebrow: "代理合作计划",
    heroTitle1: "与我们合作", heroTitle2: "最高 60% 透明分成",
    heroDesc: "无需专业资质，无需承担风险，只需连接有需求的在日华人企业主。每次成功案例，您最高可获得服务费的 60%。",
    heroBtnPrimary: "立即报名成为代理", heroBtnGhost: "了解合作机制",
    targetTag: "适合人群", targetHeading: "哪些人适合成为代理？",
    targetSub: "只要您身边有在日本经营企业的华人，您就是理想的合作代理人选。",
    mechTag: "分成机制", mechHeading1: "透明、公平、", mechHeading2: "按时结算",
    mechIntro: "我们相信透明是最好的合作基础。分成比例、结算周期、计算方式，全部在合同中明文规定，没有任何隐藏条款。",
    exampleLabel: "收入计算示例", exampleAmountLabel: "获批金额", exampleRateLabel: "服务费率", exampleIncomeLabel: "您的收入（最高 60%）",
    exampleTotalLabel: "月推荐3单合计", exampleTotal: "¥72.6万",
    flowTag: "合作流程", flowHeading: "4步开始代理合作",
    flowSub: "从报名到获得分成，流程简单清晰，最快1周即可完成首单对接。",
    faqTag: "常见问题", faqHeading: "代理合作 FAQ",
    ctaTitle1: "现在报名", ctaTitle2: "开始您的代理合作之旅",
    ctaDesc: "填写简单的报名表，我们会在1个工作日内联系您，为您安排专属培训和对接。",
    ctaPrimary: "立即报名成为代理", ctaSecondary: "了解我们的团队",
    statCards: [
      { num: "86名", label: "现有合作代理", sub: "覆盖全日本主要都市" },
      { num: "23个都道府县", label: "代理网络覆盖", sub: "持续扩大中" },
      { num: "平均¥28万", label: "代理月均收入", sub: "最高月收入超100万円" },
    ],
    targetGroups: [
      { title: "税理士·会计师事务所", desc: "您已与客户建立深厚信任关系，将补助金服务作为增值项目，在不增加额外负担的前提下为客户创造更大价值，同时为您带来可观的分成收入。" },
      { title: "行政书士·社会保険労務士", desc: "您的专业资质与我们的服务天然契合。通过与我们合作，您可以扩展业务边界，为客户提供一站式的补助金申请服务，无需承担申请失败的风险。" },
      { title: "微信群主·社群运营者", desc: "如果您运营在日华人社群、企业家群或商会，您的社交影响力就是最有价值的资产。每成功推荐一家企业，即可获得最高 60% 的服务费分成。" },
      { title: "留学中介·教育顾问", desc: "您服务的许多留学生毕业后在日本创业。为他们的企业对接补助金申请服务，既是对客户长期关系的深化，也能为您带来额外的合作收入。" },
      { title: "房产中介·商业地产顾问", desc: "购买或租赁商业物业的客户，往往正处于创业扩张阶段，是补助金申请的理想候选人。您的一次介绍，可能为客户带来数百万円的资金支持。" },
      { title: "其他华人服务从业者", desc: "只要您身边有经营企业的在日华人朋友或客户，您就有机会成为我们的合作代理。零门槛入门，我们提供完整的培训支持和营销材料。" },
    ],
    mechItems: [
      { label: "分成比例", value: "最高 60%", desc: "您最高可获得服务费的 60%，无任何上限" },
      { label: "结算周期", value: "月结", desc: "每月固定结算，补助金到账后7个工作日内打款" },
      { label: "失败风险", value: "零风险", desc: "申请失败时，您和客户均无需支付任何费用" },
      { label: "最低起步", value: "1单", desc: "没有业绩要求，1个成功案例即可结算" },
    ],
    examples: [
      { scenario: "客户获批省力化补助金", amount: "¥500万", rate: "15%", income: "¥45万" },
      { scenario: "客户获批IT导入补助金", amount: "¥200万", rate: "15%", income: "¥18万" },
      { scenario: "客户获批员工转正助成金", amount: "¥80万", rate: "20%", income: "¥9.6万" },
    ],
    steps: [
      { num: "01", title: "提交报名申请", desc: "填写代理合作申请表，提供您的基本信息和业务背景。我们会在1个工作日内与您联系确认。" },
      { num: "02", title: "参加线上培训", desc: "参加约2小时的线上培训，了解各类补助金基础知识、客户对接话术和合规要求。全程中文，简单易学。" },
      { num: "03", title: "对接意向客户", desc: "向有意向的客户介绍补助金服务，收集基本企业信息，通过我们的专属系统提交客户信息。我们的专业团队全程跟进后续流程。" },
      { num: "04", title: "月结获得分成", desc: "每月固定结算，获批补助金资金到账后，您最高可获得服务费的 60%。全程透明，实时查看收益明细。" },
    ],
    faqs: [
      { q: "成为代理需要什么资格条件吗？", a: "没有任何资格限制。无论您是专业人士（税理士、行政书士等）还是社群运营者、普通介绍人，只要您能接触到有需求的在日华人企业主，都可以申请成为我们的合作代理。" },
      { q: "最高 60% 分成是如何计算的？", a: "我们向客户收取的服务费（成功报酬）通常为获批补助金额的10%〜20%。其中最高 60% 归代理所有，40%归志成コンサル。例如，客户获批500万円补助金，服务费 15% 即 75 万円，代理最高可获得 75 万 × 60% = 45 万円。" },
      { q: "如果客户申请失败，我需要承担损失吗？", a: "完全不需要。我们实行严格的「无成功不收费」原则，申请失败时客户无需支付费用，代理同样无需承担任何风险或费用。" },
      { q: "我需要参与申请的具体工作吗？", a: "不需要。您只需要负责客户介绍和基本信息收集，所有的专业工作（书类制作、申请提交、审查跟进等）全部由志成コンサル的专业团队处理。您的工作就是「连接」，我们负责「交付」。" },
      { q: "可以同时代理多个客户吗？收入上限如何？", a: "代理数量没有上限。您可以同时推荐多个客户，每成功一个都能获得分成。我们的合作代理中，月收入最高的已超过100万円。收入完全取决于您的推荐数量和客户质量。" },
    ],
  },
  en: {
    heroEyebrow: "Partner Program",
    heroTitle1: "Partner With Us", heroTitle2: "Up to 60% Transparent Commission",
    heroDesc: "No professional qualification required, no risk to bear — simply connect Chinese business owners in Japan who have a need. For every successful case, you can earn up to 60% of the service fee.",
    heroBtnPrimary: "Apply to Become a Partner", heroBtnGhost: "How It Works",
    targetTag: "Who It's For", targetHeading: "Who Makes a Good Partner?",
    targetSub: "If there are Chinese owners running businesses in Japan around you, you are an ideal partner candidate.",
    mechTag: "Commission Model", mechHeading1: "Transparent, Fair,", mechHeading2: "Settled on Time",
    mechIntro: "We believe transparency is the best foundation for partnership. The commission rate, settlement cycle, and calculation method are all spelled out in the contract, with no hidden clauses.",
    exampleLabel: "Income Calculation Examples", exampleAmountLabel: "Amount approved", exampleRateLabel: "Service fee rate", exampleIncomeLabel: "Your income (up to 60%)",
    exampleTotalLabel: "3 referrals/month total", exampleTotal: "¥72.6万",
    flowTag: "Process", flowHeading: "Start Partnering in 4 Steps",
    flowSub: "From sign-up to earning commission, the process is simple and clear — your first client match can be completed in as little as one week.",
    faqTag: "FAQ", faqHeading: "Partner Program FAQ",
    ctaTitle1: "Sign Up Now,", ctaTitle2: "Begin Your Partner Journey",
    ctaDesc: "Fill out the simple application form, and we'll contact you within one business day to arrange dedicated training and onboarding.",
    ctaPrimary: "Apply to Become a Partner", ctaSecondary: "Meet Our Team",
    statCards: [
      { num: "86", label: "Active partners", sub: "Covering Japan's major cities" },
      { num: "23 prefectures", label: "Partner network reach", sub: "Continuously expanding" },
      { num: "Avg ¥28万", label: "Partner monthly income", sub: "Top monthly income over ¥1M" },
    ],
    targetGroups: [
      { title: "Zeirishi · Accounting firms", desc: "You have already built deep trust with clients. Offering subsidy services as a value-added item creates greater value for clients with no extra burden, while bringing you substantial commission income." },
      { title: "Gyoseishoshi · Sharoshi", desc: "Your professional qualifications fit naturally with our services. By partnering with us, you can expand your business scope and offer clients a one-stop subsidy application service, without bearing the risk of a failed application." },
      { title: "WeChat group owners · Community managers", desc: "If you run a Chinese community in Japan, an entrepreneurs' group, or a chamber of commerce, your social influence is your most valuable asset. For every business you successfully refer, you can earn up to 60% of the service fee." },
      { title: "Study-abroad agents · Education advisors", desc: "Many of the students you serve go on to start businesses in Japan after graduating. Connecting their companies to subsidy application services deepens your long-term client relationships and brings you additional partnership income." },
      { title: "Real-estate agents · Commercial property advisors", desc: "Clients buying or leasing commercial property are often in a startup or expansion phase — ideal candidates for a subsidy application. A single introduction from you could bring clients millions of yen in funding support." },
      { title: "Other Chinese-community service providers", desc: "As long as there are Chinese business owners in Japan among your friends or clients, you have the opportunity to become our partner. Zero entry barrier — we provide complete training support and marketing materials." },
    ],
    mechItems: [
      { label: "Commission rate", value: "Up to 60%", desc: "You can earn up to 60% of the service fee, with no cap" },
      { label: "Settlement cycle", value: "Monthly", desc: "Fixed monthly settlement, paid within 7 business days of the subsidy arriving" },
      { label: "Failure risk", value: "Zero risk", desc: "If an application fails, neither you nor the client pays anything" },
      { label: "Minimum to start", value: "1 case", desc: "No performance quota — a single successful case can be settled" },
    ],
    examples: [
      { scenario: "Client approved for Labor-Saving Subsidy", amount: "¥500万", rate: "15%", income: "¥45万" },
      { scenario: "Client approved for IT Adoption Subsidy", amount: "¥200万", rate: "15%", income: "¥18万" },
      { scenario: "Client approved for Career-Up Grant", amount: "¥80万", rate: "20%", income: "¥9.6万" },
    ],
    steps: [
      { num: "01", title: "Submit your application", desc: "Fill out the partner application form with your basic information and business background. We'll contact you to confirm within one business day." },
      { num: "02", title: "Attend online training", desc: "Attend about 2 hours of online training covering the basics of each subsidy type, client-engagement talking points, and compliance requirements. Fully in Chinese and easy to learn." },
      { num: "03", title: "Connect interested clients", desc: "Introduce subsidy services to interested clients, collect basic company information, and submit it through our dedicated system. Our professional team handles the entire follow-up process." },
      { num: "04", title: "Get paid monthly", desc: "Fixed monthly settlement — once the approved subsidy funds arrive, you can earn up to 60% of the service fee. Fully transparent, with real-time earnings details." },
    ],
    faqs: [
      { q: "Do I need any qualifications to become a partner?", a: "There are no qualification requirements at all. Whether you are a professional (Zeirishi, Gyoseishoshi, etc.), a community manager, or an ordinary referrer, as long as you can reach Chinese business owners in Japan who have a need, you can apply to become our partner." },
      { q: "How is the up-to-60% commission calculated?", a: "The service fee (success fee) we charge clients is typically 10%–20% of the approved subsidy amount. Of that, up to 60% goes to the partner and 40% to Shisei Consulting. For example, if a client is approved for a 5-million-yen subsidy at a 15% service fee (750,000 yen), the partner can earn up to 750,000 × 60% = 450,000 yen." },
      { q: "If a client's application fails, do I bear a loss?", a: "Not at all. We strictly apply the \"no approval, no fee\" principle — if an application fails the client pays nothing, and the partner likewise bears no risk or cost." },
      { q: "Do I need to take part in the actual application work?", a: "No. You are only responsible for client introductions and basic information collection; all the professional work (document preparation, submission, review follow-up, etc.) is handled by Shisei Consulting's professional team. Your job is to \"connect\"; we handle \"delivery.\"" },
      { q: "Can I refer multiple clients at once? Is there an income cap?", a: "There is no cap on the number of clients. You can refer multiple clients at the same time and earn commission for each success. Among our partners, the highest monthly income already exceeds 1 million yen. Income depends entirely on the number and quality of your referrals." },
    ],
  },
  ja: {
    heroEyebrow: "代理店提携プログラム",
    heroTitle1: "私たちと提携して", heroTitle2: "最大60%の透明な分配",
    heroDesc: "専門資格は不要、リスクを負う必要もなく、ニーズのある在日華人の企業経営者をつなぐだけ。成功事例ごとに、サービス料の最大60%を獲得できます。",
    heroBtnPrimary: "今すぐ代理店に申し込む", heroBtnGhost: "提携の仕組みを見る",
    targetTag: "対象となる方", targetHeading: "どんな方が代理店に向いていますか？",
    targetSub: "身近に日本で企業を経営する華人がいれば、あなたは理想的な提携代理店の候補です。",
    mechTag: "分配の仕組み", mechHeading1: "透明・公平・", mechHeading2: "期日どおりに精算",
    mechIntro: "透明性こそ最良の提携の基盤だと私たちは考えます。分配率・精算周期・計算方法はすべて契約書に明文で定め、隠れた条項は一切ありません。",
    exampleLabel: "収入計算の例", exampleAmountLabel: "採択金額", exampleRateLabel: "サービス料率", exampleIncomeLabel: "あなたの収入（最大60%）",
    exampleTotalLabel: "月3件紹介の合計", exampleTotal: "¥72.6万",
    flowTag: "提携の流れ", flowHeading: "4ステップで代理店提携をスタート",
    flowSub: "申し込みから分配獲得まで、流れはシンプルで明確。最短1週間で初回のお客様対応が完了します。",
    faqTag: "よくある質問", faqHeading: "代理店提携 FAQ",
    ctaTitle1: "今すぐ申し込んで", ctaTitle2: "代理店提携の第一歩を",
    ctaDesc: "簡単な申込フォームにご記入いただければ、1営業日以内にご連絡し、専用の研修と対応をご案内します。",
    ctaPrimary: "今すぐ代理店に申し込む", ctaSecondary: "私たちのチームを見る",
    statCards: [
      { num: "86名", label: "現在の提携代理店", sub: "日本全国の主要都市をカバー" },
      { num: "23都道府県", label: "代理店ネットワークの範囲", sub: "拡大を継続中" },
      { num: "平均¥28万", label: "代理店の月平均収入", sub: "最高月収は100万円超" },
    ],
    targetGroups: [
      { title: "税理士・会計事務所", desc: "すでにお客様と深い信頼関係を築いておられます。補助金サービスを付加価値の項目として、追加の負担なくお客様により大きな価値を生み出しつつ、相応の分配収入を得られます。" },
      { title: "行政書士・社会保険労務士", desc: "あなたの専門資格は私たちのサービスと自然に合致します。提携により業務の幅を広げ、お客様にワンストップの補助金申請サービスを提供でき、申請不採択のリスクを負う必要もありません。" },
      { title: "WeChatグループ主・コミュニティ運営者", desc: "在日華人コミュニティ、起業家グループ、商工会などを運営されているなら、その影響力こそ最も価値ある資産です。企業を1社成功紹介するごとに、サービス料の最大60%の分配を得られます。" },
      { title: "留学エージェント・教育コンサルタント", desc: "ご支援された留学生の多くは卒業後、日本で起業します。彼らの企業に補助金申請サービスをつなぐことは、長期的なお客様関係の深化であると同時に、追加の提携収入にもなります。" },
      { title: "不動産仲介・商業用不動産アドバイザー", desc: "商業用物件を購入・賃借するお客様は、起業・拡大の段階にあることが多く、補助金申請の理想的な候補です。あなたの一度のご紹介が、お客様に数百万円の資金支援をもたらすかもしれません。" },
      { title: "その他の華人向けサービス従事者", desc: "身近に企業を経営する在日華人の友人やお客様がいれば、私たちの提携代理店になるチャンスがあります。参入ハードルはゼロ、充実した研修サポートと営業資料をご提供します。" },
    ],
    mechItems: [
      { label: "分配率", value: "最大60%", desc: "サービス料の最大60%を獲得でき、上限はありません" },
      { label: "精算周期", value: "月次", desc: "毎月定期精算、補助金の入金後7営業日以内にお支払い" },
      { label: "不採択リスク", value: "ゼロリスク", desc: "申請不採択の場合、あなたもお客様も費用は一切不要" },
      { label: "最低スタート", value: "1件", desc: "実績要件なし、成功事例1件から精算可能" },
    ],
    examples: [
      { scenario: "お客様が省力化補助金を採択", amount: "¥500万", rate: "15%", income: "¥45万" },
      { scenario: "お客様がIT導入補助金を採択", amount: "¥200万", rate: "15%", income: "¥18万" },
      { scenario: "お客様がキャリアアップ助成金を採択", amount: "¥80万", rate: "20%", income: "¥9.6万" },
    ],
    steps: [
      { num: "01", title: "申込フォームを提出", desc: "代理店提携申込フォームに、基本情報と業務背景をご記入ください。1営業日以内にご連絡し確認いたします。" },
      { num: "02", title: "オンライン研修に参加", desc: "約2時間のオンライン研修に参加し、各種補助金の基礎知識、お客様対応のトーク、コンプライアンス要件を学びます。全工程中国語で、簡単に習得できます。" },
      { num: "03", title: "見込み客とつなぐ", desc: "ご関心のあるお客様に補助金サービスをご紹介し、基本的な企業情報を収集、専用システムからお客様情報を提出します。当社の専門チームがその後の全工程をフォローします。" },
      { num: "04", title: "月次で分配を獲得", desc: "毎月定期精算し、採択された補助金の入金後、サービス料の最大60%を獲得できます。全工程透明で、収益明細をリアルタイムで確認できます。" },
    ],
    faqs: [
      { q: "代理店になるには資格条件が必要ですか？", a: "資格の制限は一切ありません。専門家（税理士、行政書士など）でも、コミュニティ運営者や一般の紹介者でも、ニーズのある在日華人の企業経営者に接触できる方なら、どなたでも当社の提携代理店にお申し込みいただけます。" },
      { q: "最大60%の分配はどのように計算されますか？", a: "当社がお客様からいただくサービス料（成功報酬）は通常、採択された補助金額の10%〜20%です。そのうち最大60%が代理店、40%が志成コンサルに帰属します。例えばお客様が500万円の補助金を採択され、サービス料15%（75万円）の場合、代理店は最大で75万×60%=45万円を得られます。" },
      { q: "お客様の申請が不採択の場合、損失を負担しますか？", a: "まったく不要です。当社は「不採択なら無料」の原則を厳守しており、申請が不採択の場合、お客様は費用を支払う必要がなく、代理店も一切のリスクや費用を負担しません。" },
      { q: "申請の具体的な作業に参加する必要はありますか？", a: "不要です。あなたはお客様のご紹介と基本情報の収集のみを担当し、専門的な作業（書類作成、申請提出、審査フォローなど）はすべて志成コンサルの専門チームが処理します。あなたの役割は「つなぐ」こと、私たちが「届ける」ことを担います。" },
      { q: "複数のお客様を同時に担当できますか？収入の上限は？", a: "担当できるお客様数に上限はありません。複数のお客様を同時にご紹介でき、成功ごとに分配を得られます。当社の提携代理店の中には、月収が最高で100万円を超える方もいます。収入はご紹介の件数とお客様の質次第です。" },
    ],
  },
};

export default function PartnerContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = T[locale];
  const L = (p: string) => localizedHref(locale, p);

  return (
    <main>
      <NavClient locale={locale} dict={dict} />

      <PageHero
        eyebrow={t.heroEyebrow}
        title={<>{t.heroTitle1}<br /><span style={{ color: 'var(--gold)' }}>{t.heroTitle2}</span></>}
        desc={t.heroDesc}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36, position: 'relative' }}>
          <Link href={L("/contact")} className="btn btn-fill">
            {t.heroBtnPrimary}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a href="#how-it-works" className="btn btn-ghost">{t.heroBtnGhost}</a>
        </div>
      </PageHero>

      {/* 数据展示 */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="page-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {t.statCards.map((stat, i) => (
              <div key={i} style={{ background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 16, padding: "36px 32px", textAlign: "center" }}>
                <div style={{ fontSize: "clamp(32px,4vw,44px)", fontWeight: 800, color: "#1a5c5a", letterSpacing: "-1px", lineHeight: 1, marginBottom: 8 }}>{stat.num}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>{stat.label}</div>
                <div style={{ fontSize: 13, color: "var(--muted)" }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 适合人群 */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="page-wrap">
          <div className="label-tag">{t.targetTag}</div>
          <h2 className="section-heading">{t.targetHeading}</h2>
          <p className="section-sub" style={{ maxWidth: 560 }}>
            {t.targetSub}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginTop: 48 }}>
            {t.targetGroups.map((g, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: "28px" }}>
                <div style={{ width: 48, height: 48, background: "rgba(26,92,90,0.08)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#1a5c5a", marginBottom: 16 }}>
                  {icons[i]}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)", marginBottom: 10 }}>{g.title}</div>
                <p style={{ fontSize: 14, color: "var(--body)", lineHeight: 1.75 }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 分成机制 */}
      <section id="how-it-works" className="section" style={{ background: "#fff" }}>
        <div className="page-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "flex-start" }} className="grid-cols-about">
            <div>
              <div className="label-tag">{t.mechTag}</div>
              <h2 className="section-heading">{t.mechHeading1}<br />{t.mechHeading2}</h2>
              <p style={{ fontSize: 15, color: "var(--body)", lineHeight: 1.85, marginBottom: 32 }}>
                {t.mechIntro}
              </p>
              {t.mechItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", paddingBottom: 20, marginBottom: 20, borderBottom: i < 3 ? "1px solid var(--line)" : "none" }}>
                  <div style={{ flexShrink: 0, minWidth: 72 }}>
                    <div style={{ fontSize: 22, fontWeight: 700, color: "#1a5c5a", letterSpacing: "-0.5px" }}>{item.value}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: "var(--body)" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 16, padding: 36 }}>
                <div style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 24 }}>{t.exampleLabel}</div>
                {t.examples.map((ex, i) => (
                  <div key={i} style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 8, padding: "16px 20px", marginBottom: 12 }}>
                    <div style={{ fontSize: 13, color: "var(--body)", marginBottom: 10 }}>{ex.scenario}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                      <span style={{ color: "var(--body)" }}>{t.exampleAmountLabel}</span>
                      <span style={{ fontWeight: 600, color: "var(--ink)" }}>{ex.amount}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 10 }}>
                      <span style={{ color: "var(--body)" }}>{t.exampleRateLabel}</span>
                      <span style={{ fontWeight: 600, color: "var(--ink)" }}>{ex.rate}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 10, borderTop: "1px solid var(--line)" }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)" }}>{t.exampleIncomeLabel}</span>
                      <span style={{ fontSize: 18, fontWeight: 700, color: "#1a5c5a" }}>{ex.income}</span>
                    </div>
                  </div>
                ))}
                <div style={{ background: "#1a5c5a", borderRadius: 8, padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.85)" }}>{t.exampleTotalLabel}</span>
                  <span style={{ fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.5px" }}>{t.exampleTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 合作流程 */}
      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="page-wrap">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="label-tag" style={{ display: "inline-block" }}>{t.flowTag}</div>
            <h2 className="section-heading">{t.flowHeading}</h2>
            <p className="section-sub" style={{ maxWidth: 520, margin: "0 auto" }}>
              {t.flowSub}
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
            {t.steps.map((step, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: "28px", position: "relative" }}>
                <div style={{ fontSize: 40, fontWeight: 800, color: "rgba(26,92,90,0.15)", letterSpacing: "-2px", lineHeight: 1, marginBottom: 16 }}>{step.num}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)", marginBottom: 10 }}>{step.title}</div>
                <p style={{ fontSize: 14, color: "var(--body)", lineHeight: 1.75 }}>{step.desc}</p>
                {i < t.steps.length - 1 && (
                  <div style={{ display: "none", position: "absolute", top: "50%", right: -12, transform: "translateY(-50%)", zIndex: 10, alignItems: "center" }} className="lg-flex">
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#1a5c5a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>
                      ›
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="page-wrap">
          <div className="label-tag">{t.faqTag}</div>
          <h2 className="section-heading">{t.faqHeading}</h2>
          <div style={{ maxWidth: 800, marginTop: 40 }}>
            {t.faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: i < t.faqs.length - 1 ? "1px solid var(--line)" : "none", paddingBottom: 28, marginBottom: 28 }}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 12 }}>
                  <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 6, background: "rgba(26,92,90,0.1)", color: "#1a5c5a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>Q</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)", lineHeight: 1.5 }}>{faq.q}</div>
                </div>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 6, background: "rgba(21,190,83,0.1)", color: "#15be53", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>A</div>
                  <p style={{ fontSize: 15, color: "var(--body)", lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        locale={locale}
        dict={dict}
        title={<>{t.ctaTitle1}<br /><span style={{ color: 'var(--gold-bright)' }}>{t.ctaTitle2}</span></>}
        desc={t.ctaDesc}
        primary={{ href: '/contact', label: t.ctaPrimary }}
        secondary={{ href: '/about', label: t.ctaSecondary }}
      />

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
