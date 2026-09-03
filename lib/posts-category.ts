import type { Locale } from "@/lib/i18n/config";

export type Cat = "all" | "report" | "system" | "eligibility" | "industry" | "compare" | "pitfall" | "update";

export const CAT_LABEL: Record<Locale, Record<Cat, string>> = {
  zh: { all: "全部", report: "数据报告", system: "制度解读", eligibility: "资格判断", industry: "行业方案", compare: "对比决策", pitfall: "避坑·被拒原因", update: "公募更新" },
  en: { all: "All", report: "Data reports", system: "Programs", eligibility: "Eligibility", industry: "Industries", compare: "Comparisons", pitfall: "Pitfalls", update: "Updates" },
  ja: { all: "すべて", report: "データレポート", system: "制度解説", eligibility: "対象判定", industry: "業種別", compare: "比較", pitfall: "失敗要因", update: "公募情報" },
};

const R: Record<Exclude<Cat, "all">, RegExp> = {
  report: /^report-|数据报告|データ|report/i,
  update: /公募|締切|截止|第\d+回|第\d+次|2026|令和|開始|受付|最新|更新|deadline|round/i,
  compare: /vs|区别|対比|比较|比較|怎么选|哪个|哪种|该找谁|還是|还是|TOP|排名|versus|differ/i,
  pitfall: /被拒|不採択|失败|失敗|返还|返還|驳回|坑|误区|誤解|风险|リスク|注意|黑中介|骗|reject|mistake|risk/i,
  eligibility: /能不能|能否|可以申请|是否|资格|資格|条件|个人事业主|個人事業主|签证|ビザ|新设法人|赤字|eligib|qualif|sole/i,
  industry: /餐饮|飲食|美容|美业|超市|零售|贸易|貿易|IT|跨境|电商|EC|介护|介護|民宿|酒店|制造|製造|物流|建设|建設|教育|工厂|工場|restaurant|salon|retail|trading|care|hotel|manufactur|logistic/i,
  system: /./,
};

export function categorize(title: string, keywords: string[] = [], slug = ""): Exclude<Cat, "all"> {
  const text = `${slug} ${title} ${keywords.join(" ")}`;
  if (R.report.test(slug) || /报告|レポート|report/i.test(title)) return "report";
  for (const c of ["update", "compare", "pitfall", "eligibility", "industry"] as const) if (R[c].test(text)) return c;
  return "system";
}
