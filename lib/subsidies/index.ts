import type { Locale } from "@/lib/i18n/config";
import { subsidiesZh, type SubsidyData } from "./data-zh";
import { subsidiesEn } from "./data-en";
import { subsidiesJa } from "./data-ja";

export type { SubsidyData };

// 各语言数据；en/ja 若某项缺失则回退 zh（保证页面不空）
const byLocale: Record<Locale, SubsidyData[]> = {
  zh: subsidiesZh,
  en: subsidiesEn,
  ja: subsidiesJa,
};

export function getSubsidies(locale: Locale): SubsidyData[] {
  const arr = byLocale[locale];
  if (!arr || arr.length === 0) return subsidiesZh;
  return arr;
}

export function getSubsidy(locale: Locale, slug: string): SubsidyData | undefined {
  const found = getSubsidies(locale).find((s) => s.slug === slug);
  if (found) return found;
  // 回退中文，保证已有 slug 不 404
  return subsidiesZh.find((s) => s.slug === slug);
}

// 补助金详情页 UI 固定标签（三语）
export const detailUI: Record<Locale, {
  backToList: string; maxAmount: string; overviewLabel: string; overviewHeading: string;
  qualLabel: string; qualHeading: string; targetLabel: string; targetHeading: string;
  stepsLabel: string; stepsHeading: string; materialsLabel: string; materialsHeading: string;
  materialsNote: string; faqLabel: string; faqHeadingPre: string; faqHeadingPost: string;
  sourceHeading: string; sourceOfficial: string; sourceVerified: string; sourceDisclaimer: string;
  sidebarConsult: string; sidebarTitlePost: string; sidebarDesc: string; sidebarCta: string;
  sidebarAlt: string; sidebarWechat: string; sidebarPhone: string;
  otherSubsidies: string; viewAll: string;
  bottomTitlePre: string; bottomTitleHighlight: string; bottomDesc: string; bottomCta1: string; bottomCta2: string;
  breadcrumbHome: string; breadcrumbList: string;
}> = {
  zh: {
    backToList: "补助金种类一览", maxAmount: "最高补助金额",
    overviewLabel: "概要", overviewHeading: "基本信息一览",
    qualLabel: "申请资格", qualHeading: "谁可以申请？",
    targetLabel: "补助对象", targetHeading: "哪些费用可以申请？",
    stepsLabel: "申请流程", stepsHeading: "从咨询到领取，全程5步",
    materialsLabel: "必要材料", materialsHeading: "申请所需主要材料",
    materialsNote: "※ 以上为主要材料，具体所需文件依据申请类型及企业情况有所差异。我们提供全程材料清单对应服务。",
    faqLabel: "常见问题", faqHeadingPre: "关于", faqHeadingPost: "的常见问题",
    sourceHeading: "数据来源与核验", sourceOfficial: "官方来源：", sourceVerified: "最后核验：",
    sourceDisclaimer: "※ 补助金·助成金制度与金额随官方公募要領更新，最终以主管机关最新公告为准。",
    sidebarConsult: "免费咨询", sidebarTitlePost: "申请资格免费诊断",
    sidebarDesc: "3分钟问卷，专业顾问1个工作日内给出诊断结果，全程中文，无成功不收费。",
    sidebarCta: "开始免费诊断", sidebarAlt: "也可直接联系我们",
    sidebarWechat: "企业微信：扫码添加营业部", sidebarPhone: "电话：03-6265-9756",
    otherSubsidies: "其他补助金", viewAll: "查看全部补助金 →",
    bottomTitlePre: "申请", bottomTitleHighlight: "从咨询到领取全程代办",
    bottomDesc: "行政书士·社会保险劳务士·税理士组成的专业团队，全程中文无障碍。不获批不收费，风险为零。",
    bottomCta1: "立即免费咨询", bottomCta2: "查看其他补助金",
    breadcrumbHome: "首页", breadcrumbList: "补助金一览",
  },
  en: {
    backToList: "All Subsidy Types", maxAmount: "Maximum Subsidy",
    overviewLabel: "Overview", overviewHeading: "Key Facts at a Glance",
    qualLabel: "Eligibility", qualHeading: "Who Can Apply?",
    targetLabel: "Eligible Costs", targetHeading: "Which Costs Qualify?",
    stepsLabel: "Application Process", stepsHeading: "From Consultation to Receipt, 5 Steps",
    materialsLabel: "Required Documents", materialsHeading: "Main Documents Needed to Apply",
    materialsNote: "※ These are the main documents; the specific files required vary by application type and company situation. We provide full document-checklist support.",
    faqLabel: "FAQ", faqHeadingPre: "FAQs about the ", faqHeadingPost: "",
    sourceHeading: "Data Source & Verification", sourceOfficial: "Official source: ", sourceVerified: "Last verified: ",
    sourceDisclaimer: "※ Subsidy/grant programs and amounts change with official public-offering guidelines; the authority's latest announcement prevails.",
    sidebarConsult: "Free Consultation", sidebarTitlePost: "eligibility free diagnosis",
    sidebarDesc: "A 3-minute questionnaire; a professional advisor delivers a diagnosis within 1 business day. Fully in Chinese, no approval no fee.",
    sidebarCta: "Start Free Diagnosis", sidebarAlt: "Or contact us directly",
    sidebarWechat: "WeChat Work: scan to add Sales Dept.", sidebarPhone: "Phone: 03-6265-9756",
    otherSubsidies: "Other Subsidies", viewAll: "View all subsidies →",
    bottomTitlePre: "Applying for the ", bottomTitleHighlight: "handled end-to-end, from consultation to receipt",
    bottomDesc: "A professional team of Gyoseishoshi, Sharoshi, and Zeirishi — fully in Chinese, no barriers. No approval, no fee, zero risk.",
    bottomCta1: "Free Consultation Now", bottomCta2: "View Other Subsidies",
    breadcrumbHome: "Home", breadcrumbList: "Subsidies",
  },
  ja: {
    backToList: "補助金の種類一覧", maxAmount: "最大補助額",
    overviewLabel: "概要", overviewHeading: "基本情報の一覧",
    qualLabel: "申請資格", qualHeading: "どなたが申請できる？",
    targetLabel: "補助対象", targetHeading: "どの費用が申請できる？",
    stepsLabel: "申請の流れ", stepsHeading: "相談から受給まで、全5ステップ",
    materialsLabel: "必要書類", materialsHeading: "申請に必要な主な書類",
    materialsNote: "※ 上記は主な書類です。必要書類は申請の種類や企業の状況により異なります。当社が書類チェックリストを全工程サポートします。",
    faqLabel: "よくあるご質問", faqHeadingPre: "", faqHeadingPost: "についてのよくあるご質問",
    sourceHeading: "データの出典と検証", sourceOfficial: "公式の出典：", sourceVerified: "最終検証：",
    sourceDisclaimer: "※ 補助金・助成金の制度や金額は公式の公募要領により更新されます。最終的には主管機関の最新の公告によります。",
    sidebarConsult: "無料相談", sidebarTitlePost: "の申請資格を無料診断",
    sidebarDesc: "3分のアンケートで、専門顧問が1営業日以内に診断結果をご提示。全工程中国語対応、不採択なら無料。",
    sidebarCta: "無料診断を始める", sidebarAlt: "直接のお問い合わせも可能です",
    sidebarWechat: "企業WeChat：QRで営業部を追加", sidebarPhone: "電話：03-6265-9756",
    otherSubsidies: "その他の補助金", viewAll: "すべての補助金を見る →",
    bottomTitlePre: "の申請を", bottomTitleHighlight: "相談から受給まで全面代行",
    bottomDesc: "行政書士・社会保険労務士・税理士による専門チームが、全工程を中国語でサポート。不採択なら無料、リスクはゼロです。",
    bottomCta1: "今すぐ無料相談", bottomCta2: "その他の補助金を見る",
    breadcrumbHome: "ホーム", breadcrumbList: "補助金一覧",
  },
};
