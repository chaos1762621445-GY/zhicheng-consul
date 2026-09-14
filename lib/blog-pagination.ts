import { locales, type Locale } from "@/lib/i18n/config";
import { localizedHref } from "@/lib/i18n/href";

/** Canonical blog index URLs. Page one always uses the existing /blog URL. */
export const BLOG_PAGE_SIZE = 20;

export function blogPageCount(total: number): number {
  return Math.max(1, Math.ceil(total / BLOG_PAGE_SIZE));
}

export function blogPagePath(page: number): string {
  return page === 1 ? "/blog" : `/blog/page/${page}`;
}

/** Reject aliases such as 02, signs, fractions and unsafe integers. */
export function parseBlogPage(value: string): number | null {
  if (!/^[1-9]\d*$/.test(value)) return null;
  const page = Number(value);
  return Number.isSafeInteger(page) ? page : null;
}

/** Share identical, reciprocal alternates between HTML metadata and the sitemap. */
export function blogPageLanguages(
  locale: Locale,
  page: number,
  postsByLocale: Record<Locale, { slug: string }[]>,
  siteUrl: string,
): Record<string, string> {
  const pageSlugs = (lang: Locale) => postsByLocale[lang]
    .slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE)
    .map((post) => post.slug).sort().join("\n");
  const slugs = pageSlugs(locale);
  const languages: Record<string, string> = {};
  for (const other of locales) {
    if (page > blogPageCount(postsByLocale[other].length) || pageSlugs(other) !== slugs) continue;
    const url = `${siteUrl}${localizedHref(other, blogPagePath(page))}`;
    languages[other === "zh" ? "zh-Hans" : other] = url;
    if (other === "zh") languages["zh-CN"] = url;
  }
  languages["x-default"] = languages["zh-Hans"] ?? languages.ja ?? languages.en;
  return languages;
}
