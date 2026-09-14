import type { Locale } from "@/lib/i18n/config";
import subsidyFacts from "@/content/facts/subsidies.json";

/**
 * 制度状态数据（首页制度行 / 总览卡 / 详情速查卡共用）。
 * 整体状态基线核验 2026-09-03；逐项日期复核见 facts 内的 schedule.verified_at。
 * 首页、详情、日历共用下方 SUBSIDY_SCHEDULE；日期更新只改 facts。
 */
export type SubsidyStatus = "open" | "upcoming" | "yearround" | "closed";

export type StatusRow = {
  slug: string;
  status: SubsidyStatus;
  deadline: Record<Locale, string>;
  audience: Record<Locale, string>;
  need: "equipment" | "digital" | "hiring" | "training" | "energy";
};

export const STATUS_VERIFIED = "2026-09-03";

// A schedule check does not re-verify amounts, eligibility or legal requirements.
function scheduleFact(id: string) {
  const fact = subsidyFacts.subsidies.find((entry) => entry.id === id);
  if (!fact) throw new Error(`Missing subsidy fact: ${id}`);
  return fact;
}

function scheduleValue(id: string, key: string): string {
  const values: Record<string, unknown> = scheduleFact(id).schedule;
  const value = values[key];
  if (typeof value !== "string" || !value) throw new Error(`Missing schedule value: ${id}.${key}`);
  return value;
}

export const SUBSIDY_SCHEDULE = {
  seiryoka: {
    opens: scheduleValue("seiryoka-ippan", "accept_start"),
    deadline: scheduleValue("seiryoka-ippan", "deadline"),
    verifiedAt: scheduleValue("seiryoka-ippan", "verified_at"),
    source: scheduleFact("seiryoka-ippan").official_url,
  },
  "ai-it": {
    opens: scheduleValue("digital-ai", "accept_start"),
    deadline: scheduleValue("digital-ai", "deadline"),
    verifiedAt: scheduleValue("digital-ai", "verified_at"),
    source: scheduleFact("digital-ai").official_url,
  },
  aircon: {
    opens: scheduleValue("tokyo-aircon", "r4_start"),
    deadline: scheduleValue("tokyo-aircon", "r4_deadline"),
    round5: scheduleValue("tokyo-aircon", "r5"),
    round6: scheduleValue("tokyo-aircon", "r6"),
    verifiedAt: scheduleValue("tokyo-aircon", "verified_at"),
    source: scheduleFact("tokyo-aircon").official_url,
  },
} as const;


export const SUBSIDY_STATUS: StatusRow[] = [
  { slug: "seiryoka", status: "upcoming", need: "equipment",
    deadline: { zh: `第 8 回 · ${SUBSIDY_SCHEDULE.seiryoka.deadline.slice(5)} 截止`, en: `Round 8 · ${SUBSIDY_SCHEDULE.seiryoka.deadline.slice(5)} JST`, ja: `第8回・${SUBSIDY_SCHEDULE.seiryoka.deadline.slice(5)} 締切` },
    audience: { zh: "法人 · 个人事业主", en: "Companies · sole proprietors", ja: "法人・個人事業主" } },
  { slug: "ai-it", status: "open", need: "digital",
    deadline: { zh: `第 5 次 · ${SUBSIDY_SCHEDULE["ai-it"].deadline.slice(5)} 截止`, en: `5th deadline · ${SUBSIDY_SCHEDULE["ai-it"].deadline.slice(5)} JST`, ja: `第5次締切 ${SUBSIDY_SCHEDULE["ai-it"].deadline.slice(5)}` },
    audience: { zh: "法人 · 个人事业主", en: "Companies · sole proprietors", ja: "法人・個人事業主" } },
  { slug: "career-up", status: "yearround", need: "hiring",
    deadline: { zh: "通年受付 · 转正前提交计划届", en: "Year-round · plan before conversion", ja: "通年・転換前に計画届" },
    audience: { zh: "有雇用保险被保险者的事业所", en: "Employers with insured staff", ja: "雇用保険適用事業所" } },
  { slug: "training", status: "yearround", need: "training",
    deadline: { zh: "通年 · 训练前 1〜6 个月提计划届", en: "Year-round · plan 1–6 months before", ja: "通年・訓練1〜6か月前に計画届" },
    audience: { zh: "有雇用保险被保险者的事业所", en: "Employers with insured staff", ja: "雇用保険適用事業所" } },
  { slug: "aircon", status: "upcoming", need: "energy",
    deadline: { zh: `第 4 回 ${SUBSIDY_SCHEDULE.aircon.opens.slice(5, 10)}〜${SUBSIDY_SCHEDULE.aircon.deadline.slice(5)} · 抽签制`, en: `Round 4 ${SUBSIDY_SCHEDULE.aircon.opens.slice(5, 10)}–${SUBSIDY_SCHEDULE.aircon.deadline.slice(5)} JST · lottery`, ja: `第4回 ${SUBSIDY_SCHEDULE.aircon.opens.slice(5, 10)}〜${SUBSIDY_SCHEDULE.aircon.deadline.slice(5)}・抽選制` },
    audience: { zh: "东京都内事业所（法人 · 个人）", en: "Tokyo sites (companies · sole props)", ja: "都内事業所（法人・個人）" } },
];

export const STATUS_LABEL: Record<Locale, Record<SubsidyStatus, string>> = {
  zh: { open: "受付中", upcoming: "受付前", yearround: "通年受付", closed: "已截止" },
  en: { open: "Open", upcoming: "Opening soon", yearround: "Year-round", closed: "Closed" },
  ja: { open: "受付中", upcoming: "受付前", yearround: "通年受付", closed: "締切済" },
};

export const NEED_TABS: Record<Locale, { value: "all" | StatusRow["need"] | "startup"; label: string }[]> = {
  zh: [
    { value: "all", label: "全部" }, { value: "equipment", label: "买设备·自动化" }, { value: "digital", label: "数字化·AI" },
    { value: "hiring", label: "雇用·转正" }, { value: "training", label: "员工培训" }, { value: "energy", label: "节能·空调" }, { value: "startup", label: "创业·个人事业主" },
  ],
  en: [
    { value: "all", label: "All" }, { value: "equipment", label: "Equipment · automation" }, { value: "digital", label: "Digital · AI" },
    { value: "hiring", label: "Hiring · regularization" }, { value: "training", label: "Training" }, { value: "energy", label: "Energy · AC" }, { value: "startup", label: "Startup · sole proprietor" },
  ],
  ja: [
    { value: "all", label: "すべて" }, { value: "equipment", label: "設備・自動化" }, { value: "digital", label: "デジタル・AI" },
    { value: "hiring", label: "雇用・正社員化" }, { value: "training", label: "人材育成" }, { value: "energy", label: "省エネ・空調" }, { value: "startup", label: "創業・個人事業主" },
  ],
};

export function statusOf(slug: string) {
  return SUBSIDY_STATUS.find((s) => s.slug === slug);
}
