import type { Locale } from "@/lib/i18n/config";

/** 案例元数据（与 CasesContent 的 8 条案例按 index 对应），用于筛选/首页精选/详情页关联。 */
export type CaseMeta = {
  regionKey: "kanto" | "kansai" | "chubu" | "kyushu";
  industryKey: "food" | "beauty" | "it" | "construction" | "retail" | "education" | "manufacturing" | "logistics";
  subsidyKey: "seiryoka" | "ai-it" | "career-up" | "training" | "aircon" | "jizokuka" | "saikochiku" | "monodukuri";
  sizeKey: "s" | "m";
  amountMan: number; // 万円
};

export const CASE_META: CaseMeta[] = [
  { regionKey: "kansai", industryKey: "food", subsidyKey: "saikochiku", sizeKey: "m", amountMan: 2000 },
  { regionKey: "kanto", industryKey: "beauty", subsidyKey: "ai-it", sizeKey: "s", amountMan: 450 },
  { regionKey: "kyushu", industryKey: "it", subsidyKey: "monodukuri", sizeKey: "m", amountMan: 1000 },
  { regionKey: "kanto", industryKey: "construction", subsidyKey: "jizokuka", sizeKey: "s", amountMan: 200 },
  { regionKey: "chubu", industryKey: "retail", subsidyKey: "saikochiku", sizeKey: "m", amountMan: 1500 },
  { regionKey: "kansai", industryKey: "education", subsidyKey: "ai-it", sizeKey: "s", amountMan: 350 },
  { regionKey: "chubu", industryKey: "manufacturing", subsidyKey: "monodukuri", sizeKey: "m", amountMan: 3000 },
  { regionKey: "kanto", industryKey: "logistics", subsidyKey: "saikochiku", sizeKey: "m", amountMan: 1800 },
];

export const CASE_FILTER_LABELS: Record<Locale, {
  region: Record<CaseMeta["regionKey"], string>;
  industry: Record<CaseMeta["industryKey"], string>;
  subsidy: Record<CaseMeta["subsidyKey"], string>;
  size: Record<CaseMeta["sizeKey"], string>;
  groups: { region: string; industry: string; subsidy: string; all: string; empty: string; range: string };
}> = {
  zh: {
    region: { kanto: "关东", kansai: "关西", chubu: "中部", kyushu: "九州" },
    industry: { food: "餐饮", beauty: "美业", it: "IT·软件", construction: "建设·装修", retail: "零售·电商", education: "教育", manufacturing: "制造", logistics: "物流" },
    subsidy: { seiryoka: "省力化", "ai-it": "AI·IT導入", "career-up": "转正助成金", training: "培训助成金", aircon: "东京空调", jizokuka: "持続化", saikochiku: "事業再構築", monodukuri: "ものづくり" },
    size: { s: "≤5 人", m: "6〜50 人" },
    groups: { region: "地区", industry: "行业", subsidy: "制度", all: "全部", empty: "没有匹配的案例——换个筛选条件，或直接咨询我们。", range: "获批金额区间" },
  },
  en: {
    region: { kanto: "Kanto", kansai: "Kansai", chubu: "Chubu", kyushu: "Kyushu" },
    industry: { food: "F&B", beauty: "Beauty", it: "IT", construction: "Construction", retail: "Retail / EC", education: "Education", manufacturing: "Manufacturing", logistics: "Logistics" },
    subsidy: { seiryoka: "Labor-Saving", "ai-it": "AI / IT Adoption", "career-up": "Career-Up", training: "HR Development", aircon: "Tokyo AC", jizokuka: "Sustainability", saikochiku: "Business Restructuring", monodukuri: "Monozukuri" },
    size: { s: "≤5 staff", m: "6–50 staff" },
    groups: { region: "Region", industry: "Industry", subsidy: "Program", all: "All", empty: "No matching cases — adjust filters or ask us directly.", range: "Approved range" },
  },
  ja: {
    region: { kanto: "関東", kansai: "関西", chubu: "中部", kyushu: "九州" },
    industry: { food: "飲食", beauty: "美容", it: "IT", construction: "建設・内装", retail: "小売・EC", education: "教育", manufacturing: "製造", logistics: "物流" },
    subsidy: { seiryoka: "省力化", "ai-it": "AI・IT導入", "career-up": "キャリアアップ", training: "人材開発", aircon: "東京 空調", jizokuka: "持続化", saikochiku: "事業再構築", monodukuri: "ものづくり" },
    size: { s: "5人以下", m: "6〜50人" },
    groups: { region: "地域", industry: "業種", subsidy: "制度", all: "すべて", empty: "該当する事例がありません。条件を変えるか、直接ご相談ください。", range: "採択額レンジ" },
  },
};

export function amountRange(man: number, locale: Locale): string {
  const r = man <= 300 ? [100, 300] : man <= 1000 ? [300, 1000] : man <= 3000 ? [1000, 3000] : [3000, 10000];
  const f = (n: number) => n.toLocaleString("en-US");
  if (locale === "en") return `¥${(r[0] / 100).toFixed(0)}M–¥${(r[1] / 100).toFixed(0)}M`;
  return `${f(r[0])}万〜${f(r[1])}万円`;
}

/** 详情页 slug → 相关案例 index */
export function relatedCaseIdx(slug: string): number[] {
  const map: Record<string, CaseMeta["subsidyKey"][]> = {
    seiryoka: ["monodukuri", "saikochiku"], "ai-it": ["ai-it"], "career-up": ["jizokuka", "saikochiku"], training: ["ai-it", "monodukuri"], aircon: ["saikochiku", "monodukuri"],
  };
  const keys = map[slug] ?? [];
  return CASE_META.map((m, i) => (keys.includes(m.subsidyKey) ? i : -1)).filter((i) => i >= 0).slice(0, 2);
}
