import { locales, defaultLocale, type Locale } from "./config";

/** 从路径名推断当前 locale：/en/... → en，/ja/... → ja，其余 → zh */
export function localeFromPathname(pathname: string): Locale {
  const seg = pathname.split("/")[1];
  if ((locales as readonly string[]).includes(seg)) return seg as Locale;
  return defaultLocale;
}
