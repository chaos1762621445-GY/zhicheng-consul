import type { MetadataRoute } from "next";
import { getAllPostsLocalized } from "@/lib/posts";

const SITE_URL = "https://shisei-consult.jp";
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
];

// 为一条路径生成 zh/en/ja 三条 sitemap 项 + hreflang alternates
function trilingual(path: string, lastModified: Date, cf: MetadataRoute.Sitemap[number]["changeFrequency"], pr: number): MetadataRoute.Sitemap {
  const languages = {
    "zh-Hans": `${SITE_URL}${path === "/" ? "" : path}` || `${SITE_URL}/`,
    en: `${SITE_URL}/en${path === "/" ? "" : path}`,
    ja: `${SITE_URL}/ja${path === "/" ? "" : path}`,
  };
  const zhUrl = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  return [
    { url: zhUrl, lastModified, changeFrequency: cf, priority: pr, alternates: { languages } },
    { url: `${SITE_URL}/en${path === "/" ? "" : path}`, lastModified, changeFrequency: cf, priority: pr, alternates: { languages } },
    { url: `${SITE_URL}/ja${path === "/" ? "" : path}`, lastModified, changeFrequency: cf, priority: pr, alternates: { languages } },
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages = STATIC_PATHS.flatMap((p) => trilingual(p.path, now, p.cf, p.pr));
  const subsidyPages = SUBSIDY_SLUGS.flatMap((slug) => trilingual(`/subsidies/${slug}`, now, "monthly", 0.85));

  // 博客：zh 全量；en/ja 仅已翻译的（未译不进 sitemap，避免死链）
  const zhPosts = await getAllPostsLocalized("zh");
  const enPosts = await getAllPostsLocalized("en");
  const jaPosts = await getAllPostsLocalized("ja");
  const enSlugs = new Set(enPosts.map((p) => p.slug));
  const jaSlugs = new Set(jaPosts.map((p) => p.slug));

  const postPages: MetadataRoute.Sitemap = [];
  for (const p of zhPosts) {
    const lm = p.date ? new Date(p.date) : now;
    const languages: Record<string, string> = { "zh-Hans": `${SITE_URL}/blog/${p.slug}` };
    if (enSlugs.has(p.slug)) languages.en = `${SITE_URL}/en/blog/${p.slug}`;
    if (jaSlugs.has(p.slug)) languages.ja = `${SITE_URL}/ja/blog/${p.slug}`;
    postPages.push({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: lm, changeFrequency: "monthly", priority: 0.7, alternates: { languages } });
    if (enSlugs.has(p.slug)) postPages.push({ url: `${SITE_URL}/en/blog/${p.slug}`, lastModified: lm, changeFrequency: "monthly", priority: 0.6, alternates: { languages } });
    if (jaSlugs.has(p.slug)) postPages.push({ url: `${SITE_URL}/ja/blog/${p.slug}`, lastModified: lm, changeFrequency: "monthly", priority: 0.6, alternates: { languages } });
  }

  return [...staticPages, ...subsidyPages, ...postPages];
}
