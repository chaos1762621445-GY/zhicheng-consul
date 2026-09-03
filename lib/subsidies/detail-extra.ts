import type { Locale } from "@/lib/i18n/config";

/** 详情页新增模块的文案：不适用情况 / 常见失败原因 / 分工。按 slug 特化，缺省用 generic。 */
type Tri = Record<Locale, string[]>;

const genericNotEligible: Tri = {
  zh: [
    "已经签约或付款后才申请——只补助交付決定（或支給決定）之后发生的费用。",
    "税金滞纳、有员工但未加入社会保险／劳动保险。",
    "在留资格不允许经营活动（留学·家族滞在等，无资格外活动许可）。",
    "同一费用已向其他国家补助金申请（禁止重复受领）。",
    "属于风俗营业等法令排除业种，或大企业子公司（みなし大企業）。",
  ],
  en: [
    "Contract signed or paid before the grant decision — only post-decision costs are eligible.",
    "Tax arrears, or employees without social/labor insurance enrollment.",
    "Residence status that does not permit business activity.",
    "Same cost already claimed under another national subsidy.",
    "Excluded industries or deemed large enterprises.",
  ],
  ja: [
    "契約・支払い後の申請——交付決定（支給決定）後の経費のみ対象。",
    "税金の滞納、従業員がいるのに社会保険・労働保険未加入。",
    "在留資格が事業活動を許可していない。",
    "同一経費を他の国の補助金に申請済み（重複受給禁止）。",
    "法令上の除外業種、またはみなし大企業。",
  ],
};

const genericFail: Tri = {
  zh: [
    "事业计划只写「想买什么」，没写「买了之后销售额／人效如何变化」——审查看的是效果与可验证性。",
    "見積·仕様与计划不一致，或供应商未按制度要求登记。",
    "GビズID、商工会様式4 等前置手续临近締切才办，来不及。",
    "財務資料（決算書·申告書）缺页、无受付印，或与计划数字对不上。",
    "採択后实施期间变更内容未申请，实绩报告不合规被减额。",
  ],
  en: [
    "Plan states what to buy but not the measurable effect on sales or productivity.",
    "Quotes/specs inconsistent with the plan, or vendor not registered as required.",
    "GビズID or Chamber Form 4 requested too close to the deadline.",
    "Financial documents incomplete, unstamped, or inconsistent with the plan.",
    "Post-adoption changes without approval; non-compliant final report.",
  ],
  ja: [
    "「何を買うか」だけで「売上・生産性がどう変わるか」が書かれていない。",
    "見積・仕様と計画の不一致、または事業者未登録。",
    "GビズIDや様式4の取得が締切直前で間に合わない。",
    "決算書・申告書の不備、受付印なし、数字の不整合。",
    "採択後の無断変更、実績報告の不備による減額。",
  ],
};

const specificNotEligible: Record<string, Tri> = {
  "career-up": {
    zh: ["转正前未提交キャリアアップ計画届。", "被转换者雇用未满 6 个月，或转正后薪资未提升 3% 以上。", "对象为事业主亲属、或非雇用保险被保险者。"],
    en: ["Career-Up plan not filed before conversion.", "Employee not employed 6+ months, or wage not raised 3%+.", "Relatives of the owner or uninsured staff."],
    ja: ["転換前にキャリアアップ計画届を未提出。", "6か月未満の雇用、または賃金3%以上の増額なし。", "事業主の親族、雇用保険被保険者でない。"],
  },
  training: {
    zh: ["训练开始前未在 1〜6 个月内提交计划届。", "训练不满 10 小时或由社内非认定方式实施。", "受训者非雇用保险被保险者。"],
    en: ["Plan not filed 1–6 months before training.", "Training under 10 hours or not in a certified format.", "Trainees not employment-insured."],
    ja: ["訓練開始1〜6か月前に計画届を未提出。", "訓練10時間未満、または認定外の実施方式。", "受講者が雇用保険被保険者でない。"],
  },
  aircon: {
    zh: ["事业所不在东京都内，或为住宅用途。", "施工业者未在クール・ネット東京登记。", "新设备不满足节能基准（APF 等）。", "把「抽签制」当成「先到先得」而错过受付期。"],
    en: ["Site outside Tokyo or residential use.", "Contractor not registered with Cool Net Tokyo.", "Equipment below energy standards.", "Missed the window assuming first-come."],
    ja: ["都外の事業所、または住宅用途。", "クール・ネット東京に未登録の施工業者。", "省エネ基準（APF等）未達。", "先着と誤解して受付期間を逃す。"],
  },
  "ai-it": {
    zh: ["选用的工具不在官方 IT 工具名录内。", "未经登记的 IT 導入支援事業者共同申请。", "硬件只在インボイス枠限定设备范围内可报，通常枠不含 PC／GPU 等。"],
    en: ["Tool not on the official registry.", "No registered IT vendor co-applying.", "Hardware only under the invoice track for designated devices."],
    ja: ["登録ITツール外の製品。", "登録IT導入支援事業者の共同申請なし。", "ハードはインボイス枠の指定機器のみ。"],
  },
  seiryoka: {
    zh: ["21 人以上企业未公表一般事業主行動計画（2026 年新要件）。", "投资内容不能证明省力化效果（人时削减·生产性提升）。", "与カタログ型混淆：一般型为公募回制，非随时受理。"],
    en: ["21+ staff without a published action plan (new 2026 requirement).", "Investment lacks demonstrable labor-saving effect.", "Confusing catalog type with general type (rounds, not rolling)."],
    ja: ["21人以上で一般事業主行動計画を未公表（2026年新要件）。", "省力化効果を証明できない投資。", "カタログ型と混同（一般型は公募回制）。"],
  },
};

export function notEligibleFor(slug: string, locale: Locale): string[] {
  return [...(specificNotEligible[slug]?.[locale] ?? []), ...genericNotEligible[locale]];
}
export function failReasonsFor(_slug: string, locale: Locale): string[] {
  return genericFail[locale];
}

/** 流程步骤的「您需要 / 我们负责」——按步序通用 */
export const STEP_SPLIT: Record<Locale, { you: string; we: string }[]> = {
  zh: [
    { you: "告知在留资格、行业、员工数、想做的事", we: "1 个营业日内中文回复能报的制度与准备清单" },
    { you: "提供決算書／申告書、見積、现状资料", we: "制度匹配、金额测算、公募日程倒推" },
    { you: "确认计划内容、签署委托合同、办 GビズID", we: "事业计划书与申请书类制作（行政书士／社劳士分工）" },
    { you: "配合补充资料、回答事务局质询", we: "提交申请、跟进审查、处理补正" },
    { you: "按计划实施、保留发票与凭证", we: "交付决定后合规提醒、实绩报告、入金确认" },
  ],
  en: [
    { you: "Share status, industry, headcount, goal", we: "Reply within one business day with programs and checklist" },
    { you: "Provide financials, quotes, current state", we: "Program matching, estimate, timeline" },
    { you: "Confirm plan, sign engagement, obtain GビズID", we: "Business plan and documents by licensed professionals" },
    { you: "Supply supplements, answer inquiries", we: "Submit, track review, handle corrections" },
    { you: "Implement as planned, keep invoices", we: "Compliance reminders, final report, disbursement" },
  ],
  ja: [
    { you: "在留資格・業種・従業員数・目的をお知らせ", we: "1営業日以内に対象制度と準備事項を回答" },
    { you: "決算書・申告書・見積・現状資料の提供", we: "制度マッチング・金額試算・スケジュール逆算" },
    { you: "計画内容の確認、契約、GビズID取得", we: "事業計画書・申請書類の作成（行政書士・社労士）" },
    { you: "追加資料の提供、照会への回答", we: "提出・審査フォロー・補正対応" },
    { you: "計画どおり実施、証憑の保管", we: "交付決定後の遵守事項、実績報告、入金確認" },
  ],
};

export const DETAIL_EXTRA_UI: Record<Locale, {
  notEligibleLabel: string; notEligibleHeading: string;
  failLabel: string; failHeading: string;
  casesLabel: string; casesHeading: string; casesAll: string;
  midCtaT: string; midCtaD: string; midCtaBtn: string;
  you: string; we: string;
  facts: { audience: string; status: string; deadline: string };
}> = {
  zh: {
    notEligibleLabel: "不适用情况", notEligibleHeading: "这些情况不能申请或很难通过",
    failLabel: "常见失败原因", failHeading: "申请被拒／被减额最常见的 5 个原因",
    casesLabel: "相关案例", casesHeading: "同类制度的获批实例", casesAll: "查看全部案例 →",
    midCtaT: "这项制度适合你的企业吗？", midCtaD: "4 个问题，1 个营业日内中文回复。不获批不收费。", midCtaBtn: "免费确认申请条件",
    you: "您需要", we: "我们负责",
    facts: { audience: "适合对象", status: "受付状态", deadline: "本轮截止" },
  },
  en: {
    notEligibleLabel: "Not eligible", notEligibleHeading: "When you cannot apply (or will likely fail)",
    failLabel: "Common failure causes", failHeading: "Five most common reasons for rejection or reduction",
    casesLabel: "Related cases", casesHeading: "Approved cases under similar programs", casesAll: "All cases →",
    midCtaT: "Does this program fit your business?", midCtaD: "Four questions, reply within one business day. No approval, no fee.", midCtaBtn: "Check eligibility for free",
    you: "You provide", we: "We handle",
    facts: { audience: "Eligible", status: "Status", deadline: "Deadline" },
  },
  ja: {
    notEligibleLabel: "対象外となるケース", notEligibleHeading: "申請できない・通りにくいケース",
    failLabel: "よくある不採択の原因", failHeading: "不採択・減額の主な5つの原因",
    casesLabel: "関連事例", casesHeading: "同種制度の採択事例", casesAll: "すべての事例 →",
    midCtaT: "この制度は貴社に合いますか？", midCtaD: "4つの質問に答えるだけ、1営業日以内に回答。不採択なら無料。", midCtaBtn: "無料で申請条件を確認",
    you: "お客様", we: "当社",
    facts: { audience: "対象", status: "受付状況", deadline: "締切" },
  },
};
