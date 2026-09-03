import type { Locale } from "@/lib/i18n/config";

/** 支柱页入口（供制度详情页/博客文章页做 hub 内链） */
export const PILLAR_LINKS: Record<Locale, { title: string; items: { label: string; href: string }[] }> = {
  zh: { title: "谁能申请·怎么选", items: [
    { label: "在日华人企业主专题", href: "/for/chinese-owners" },
    { label: "个人事业主可申请的补助金", href: "/for/sole-proprietor" },
    { label: "补助金 vs 助成金 区别", href: "/compare" },
    { label: "2026 公募日历·截止时间", href: "/schedule" },
    { label: "东京地区服务", href: "/area/tokyo" },
  ] },
  en: { title: "Who can apply · How to choose", items: [
    { label: "Chinese business owners in Japan", href: "/for/chinese-owners" },
    { label: "Subsidies for sole proprietors", href: "/for/sole-proprietor" },
    { label: "Subsidy vs. grant", href: "/compare" },
    { label: "2026 calendar & deadlines", href: "/schedule" },
    { label: "Tokyo service area", href: "/area/tokyo" },
  ] },
  ja: { title: "対象者別・選び方", items: [
    { label: "在日華人経営者向け", href: "/for/chinese-owners" },
    { label: "個人事業主向け補助金", href: "/for/sole-proprietor" },
    { label: "補助金と助成金の違い", href: "/compare" },
    { label: "2026年 公募カレンダー・締切", href: "/schedule" },
    { label: "東京エリアのサポート", href: "/area/tokyo" },
  ] },
};
