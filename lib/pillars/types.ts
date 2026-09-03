import type { Locale } from "@/lib/i18n/config";

// 支柱页数据驱动模型：一份数据 → 三语路由 → 同一渲染器（PillarContent）
export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "note"; text: string }
  | { type: "links"; items: { label: string; href: string }[] };

export type Section = { id: string; h2: string; blocks: Block[] };

export type PillarData = {
  path: string; // 不带语言前缀，如 "/for/sole-proprietor"
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
  heroEyebrow: string;
  heroTitle1: string;
  heroTitle2: string;
  heroDesc: string;
  // GEO 可摘录段（80-120 字，一段回答 谁/做什么/给谁/多少钱/怎么申请）
  summary: string;
  quickFacts?: { label: string; value: string; sub?: string }[];
  sections: Section[];
  faq: { q: string; a: string }[];
  sources: { label: string; url: string }[];
  verifiedDate: string;
  related: { label: string; href: string }[];
  ctaTitle1: string;
  ctaTitle2: string;
  ctaDesc: string;
  breadcrumbParent?: { label: string; href: string };
  // 东京地区页挂 LocalBusiness，其余 Article
  schemaType?: "Article" | "LocalBusiness";
  ui: {
    quickFactsTitle: string;
    tocTitle: string;
    faqTitle: string;
    sourcesTitle: string;
    verifiedLabel: string;
    relatedTitle: string;
    disclaimer: string;
    home: string;
  };
};

export type PillarSet = Record<Locale, PillarData>;

export const UI: Record<Locale, PillarData["ui"]> = {
  zh: {
    quickFactsTitle: "速查卡",
    tocTitle: "本页内容",
    faqTitle: "常见问题",
    sourcesTitle: "数据来源与核验",
    verifiedLabel: "最后核验",
    relatedTitle: "延伸阅读",
    disclaimer: "※ 补助金·助成金的金额、补助率、受付时间以各主管机关最新公募要領为准；个案结果以审查为准，本页不构成获批承诺。",
    home: "首页",
  },
  en: {
    quickFactsTitle: "Quick facts",
    tocTitle: "On this page",
    faqTitle: "FAQ",
    sourcesTitle: "Sources & verification",
    verifiedLabel: "Last verified",
    relatedTitle: "Related",
    disclaimer: "※ Amounts, subsidy rates and application windows follow each authority's latest guidelines; outcomes depend on review. This page is not a guarantee of approval.",
    home: "Home",
  },
  ja: {
    quickFactsTitle: "早わかり",
    tocTitle: "このページの内容",
    faqTitle: "よくあるご質問",
    sourcesTitle: "出典・確認日",
    verifiedLabel: "最終確認",
    relatedTitle: "関連ページ",
    disclaimer: "※ 補助金・助成金の金額・補助率・受付期間は各主管機関の最新の公募要領に準じます。採否は審査によるものであり、本ページは採択を保証するものではありません。",
    home: "ホーム",
  },
};
