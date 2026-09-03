import type { Metadata } from "next";
import type { Locale } from "./config";
import { localeOg } from "./config";

export const SITE_URL = "https://shisei-consult.jp";

// 三向 hreflang：任意页面产出 zh/en/ja + x-default 四条 alternate。
// path 为不带语言前缀的规范路径，如 "/"、"/service"、"/blog/post-x"。
export function buildLanguages(path: string): Record<string, string> {
  const clean = path === "/" ? "" : path;
  return {
    "zh-Hans": `${SITE_URL}${clean || "/"}`,
    "zh-CN": `${SITE_URL}${clean || "/"}`,
    en: `${SITE_URL}/en${clean}`,
    ja: `${SITE_URL}/ja${clean}`,
    "x-default": `${SITE_URL}${clean || "/"}`,
  };
}

// 当前语言的规范 URL（zh 无前缀）
export function canonicalFor(locale: Locale, path: string): string {
  const clean = path === "/" ? "" : path;
  if (locale === "zh") return clean || "/";
  return `/${locale}${clean}`;
}

const DEFAULT_KEYWORDS: Record<Locale, string[]> = {
  zh: ["在日华人补助金", "日本补助金申请", "省力化补助金", "AI导入补助金", "员工转正助成金", "日本政府补助金代办", "行政书士", "税理士", "社会保险劳务士", "中小企业诊断士"],
  en: ["Japan government subsidy", "subsidy support for businesses in Japan", "Labor-Saving Subsidy", "AI IT Adoption Subsidy", "Career-Up Grant", "hojokin application", "Gyoseishoshi", "Zeirishi", "Sharoshi", "subsidy consulting Japan"],
  ja: ["補助金申請サポート", "省力化補助金", "AI・IT導入補助金", "キャリアアップ助成金", "人材開発支援助成金", "在日華人 補助金", "外国人経営者 補助金", "行政書士", "税理士", "中国語対応 補助金"],
};

interface PageMetaInput {
  locale: Locale;
  path: string; // 不带语言前缀，如 "/service"
  title: string;
  description: string;
  keywords?: string[];
}

/** 为任意本地化页面生成完整 metadata（canonical + 三向 hreflang + og + 语言化 keywords）。 */
export function buildPageMetadata({ locale, path, title, description, keywords }: PageMetaInput): Metadata {
  const canonical = canonicalFor(locale, path);
  return {
    title,
    description,
    keywords: keywords ?? DEFAULT_KEYWORDS[locale],
    alternates: {
      canonical,
      languages: buildLanguages(path),
    },
    openGraph: {
      type: "website",
      locale: localeOg[locale],
      url: `${SITE_URL}${canonical}`,
      siteName: "志成コンサル",
      title,
      description,
    },
  };
}
