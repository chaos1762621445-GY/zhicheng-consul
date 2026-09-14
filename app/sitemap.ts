import type { MetadataRoute } from "next";
import { getAllPostsLocalized } from "@/lib/posts";
import { locales, localeHreflang } from "@/lib/i18n/config";
import { localizedHref } from "@/lib/i18n/href";
import { SITE_URL } from "@/lib/i18n/metadata";
import { blogPageCount, blogPagePath, blogPageLanguages } from "@/lib/blog-pagination";

const SUBSIDY_SLUGS = ["seiryoka", "ai-it", "career-up", "training", "aircon"];

// 静态页路径（不带语言前缀）
const STATIC_PATHS: { path: string; cf: MetadataRoute.Sitemap[number]["changeFrequency"]; pr: number }[] = [
  { path: "/", cf: "weekly", pr: 1.0 },
  { path: "/subsidies", cf: "weekly", pr: 0.9 },
  { path: "/service", cf: "monthly", pr: 0.8 },
  { path: "/cases", cf: "monthly", pr: 0.8 },
  { path: "/whitepaper", cf: "monthly", pr: 0.85 },
  { path: "/about", cf: "monthly", pr: 0.7 },
  { path: "/faq", cf: "monthly", pr: 0.7 },
  { path: "/partner", cf: "monthly", pr: 0.7 },
  { path: "/contact", cf: "monthly", pr: 0.9 },
  { path: "/for/sole-proprietor", cf: "monthly", pr: 0.9 },
  { path: "/for/chinese-owners", cf: "monthly", pr: 0.9 },
  { path: "/compare", cf: "monthly", pr: 0.85 },
  { path: "/schedule", cf: "weekly", pr: 0.9 },
  { path: "/area/tokyo", cf: "monthly", pr: 0.85 },
  { path: "/blog", cf: "daily", pr: 0.9 },
  { path: "/privacy", cf: "yearly", pr: 0.3 },
  { path: "/legal", cf: "yearly", pr: 0.3 },
];

// Omit lastmod when there is no recorded substantive revision. Build time is not a content update.
function trilingual(path: string, cf: MetadataRoute.Sitemap[number]["changeFrequency"], pr: number): MetadataRoute.Sitemap {
  const zhUrl = `${SITE_URL}${localizedHref("zh", path)}`;
  const languages = {
    "zh-Hans": zhUrl,
    en: `${SITE_URL}${localizedHref("en", path)}`,
    ja: `${SITE_URL}${localizedHref("ja", path)}`,
    "x-default": zhUrl,
  };
  return locales.map((locale) => ({
    url: `${SITE_URL}${localizedHref(locale, path)}`,
    changeFrequency: cf, priority: pr, alternates: { languages },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = STATIC_PATHS.flatMap((p) => trilingual(p.path, p.cf, p.pr));
  const subsidyPages = SUBSIDY_SLUGS.flatMap((slug) => trilingual(`/subsidies/${slug}`, "monthly", 0.85));
  const [zh, en, ja] = await Promise.all(locales.map((locale) => getAllPostsLocalized(locale)));
  const postsByLocale = { zh, en, ja };
  const slugSets = { zh: new Set(zh.map((p) => p.slug)), en: new Set(en.map((p) => p.slug)), ja: new Set(ja.map((p) => p.slug)) };

  const postPages: MetadataRoute.Sitemap = [];
  const archivePages: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    // Include original articles in every language, even when no Chinese source exists.
    for (const post of postsByLocale[locale]) {
      const path = `/blog/${post.slug}`;
      const languages: Record<string, string> = {};
      for (const other of locales) {
        if (slugSets[other].has(post.slug)) languages[localeHreflang[other]] = `${SITE_URL}${localizedHref(other, path)}`;
      }
      languages["x-default"] = languages["zh-Hans"] ?? languages.ja ?? languages.en;
      postPages.push({
        url: `${SITE_URL}${localizedHref(locale, path)}`,
        lastModified: post.updated || post.date || undefined,
        changeFrequency: "monthly", priority: 0.7, alternates: { languages },
      });
    }
    // Page one is already in staticPages; redirect aliases and invalid pages are excluded.
    for (let page = 2; page <= blogPageCount(postsByLocale[locale].length); page++) {
      archivePages.push({
        url: `${SITE_URL}${localizedHref(locale, blogPagePath(page))}`,
        changeFrequency: "weekly", priority: 0.6,
        alternates: { languages: blogPageLanguages(locale, page, postsByLocale, SITE_URL) },
      });
    }
  }
  return [...staticPages, ...subsidyPages, ...archivePages, ...postPages];
}
