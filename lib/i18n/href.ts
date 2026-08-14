import type { Locale } from "./config";

/**
 * 生成带语言前缀的内部链接。
 * zh（默认）→ 原样返回 `/service`
 * en/ja → `/en/service` `/ja/service`
 * 外链（http 开头）原样返回。
 */
export function localizedHref(locale: Locale, path: string): string {
  if (/^https?:\/\//.test(path) || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "zh") return clean;
  return `/${locale}${clean === "/" ? "" : clean}`;
}
