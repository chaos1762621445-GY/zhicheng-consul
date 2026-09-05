import type { Locale } from "@/lib/i18n/config";

/**
 * 博客文章 → 制度详情页的确定性关联（按标题/关键词命中制度标识，不靠 keywords 交集猜）。
 * slug 与 /subsidies/[slug] 一致：seiryoka | ai-it | career-up | training | aircon
 */
export type SubsidySlug = "seiryoka" | "ai-it" | "career-up" | "training" | "aircon";

const RULES: { slug: SubsidySlug; re: RegExp }[] = [
  { slug: "seiryoka", re: /省力化|省力化投資|labor[- ]?saving/i },
  { slug: "ai-it", re: /AI导入|IT导入|数字化[·・]?AI|AI・IT|IT導入|AI導入|デジタル化|AI\s*\/\s*IT Adoption|IT Adoption/i },
  { slug: "career-up", re: /转正|正社员|正社員|キャリアアップ|career[- ]?up/i },
  { slug: "training", re: /员工培训|培训助成|人材開発|人才开发|リスキリング|reskilling|HR Development|人材育成/i },
  { slug: "aircon", re: /空调|空調|ゼロエミ|节能设备|省エネ|air ?con|AC subsidy/i },
];

export function inferSubsidySlugs(title: string, keywords: string[] = []): SubsidySlug[] {
  const blob = `${title} ${keywords.join(" ")}`;
  const out: SubsidySlug[] = [];
  for (const r of RULES) if (r.re.test(blob)) out.push(r.slug);
  return out;
}

export const SUBSIDY_LINK_LABEL: Record<Locale, { title: string; names: Record<SubsidySlug, string> }> = {
  zh: { title: "本文涉及的制度详情", names: { seiryoka: "省力化投资补助金（一般型）详解", "ai-it": "数字化·AI导入补助金详解", "career-up": "转正助成金（キャリアアップ助成金）详解", training: "员工培训助成金（人材開発支援助成金）详解", aircon: "东京都空调节能补助详解" } },
  en: { title: "Programs covered in this article", names: { seiryoka: "Labor-Saving Subsidy (General)", "ai-it": "Digital / AI Adoption Subsidy", "career-up": "Career-Up Grant (Regularization)", training: "HR Development Grant", aircon: "Tokyo Energy-Efficient AC Subsidy" } },
  ja: { title: "この記事に関連する制度", names: { seiryoka: "省力化投資補助金（一般型）", "ai-it": "デジタル化・AI導入補助金", "career-up": "キャリアアップ助成金（正社員化）", training: "人材開発支援助成金", aircon: "東京都 空調省エネ補助" } },
};
