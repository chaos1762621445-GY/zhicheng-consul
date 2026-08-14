// 三语国际化配置。zh = 根路径（不带前缀，零 SEO 回归）；en/ja = /en /ja 子树。
export const locales = ["zh", "en", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh";

export const localeNames: Record<Locale, string> = {
  zh: "简体中文",
  en: "English",
  ja: "日本語",
};

// hreflang 标签映射（三向握手用）
export const localeHreflang: Record<Locale, string> = {
  zh: "zh-Hans",
  en: "en",
  ja: "ja",
};

// OpenGraph locale
export const localeOg: Record<Locale, string> = {
  zh: "zh_CN",
  en: "en_US",
  ja: "ja_JP",
};

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}
