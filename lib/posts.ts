import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "@/lib/i18n/config";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  keywords: string[];
  /** 发布状态：无字段=历史文章（视为已发布）；draft/pending_review 不上线 */
  status?: string;
  facts_used?: string[];
  facts_verified_at?: string;
  expert_reviewed?: boolean;
}

/** 只有 published（或无 status 的历史文章）才对外可见；draft / pending_review 不进列表、不进 sitemap、直接访问 404。 */
export function isPublished(data: Record<string, unknown>): boolean {
  const s = data.status;
  return s === undefined || s === null || s === "" || s === "published";
}

export interface Post extends PostMeta {
  content: string;
}

// 按 locale 解析文章目录：zh = content/posts；en/ja = content/posts/{locale}
function dirFor(locale: Locale = "zh"): string {
  return locale === "zh" ? postsDirectory : path.join(postsDirectory, locale);
}

export async function getAllPostsLocalized(locale: Locale = "zh"): Promise<PostMeta[]> {
  const dir = dirFor(locale);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const posts = files.flatMap((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(raw);
    if (!isPublished(data)) return [];
    return [{
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      keywords: data.keywords || [],
      status: data.status,
      facts_used: data.facts_used,
      facts_verified_at: data.facts_verified_at,
      expert_reviewed: data.expert_reviewed,
    }];
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostLocalized(slug: string, locale: Locale = "zh"): Promise<Post | null> {
  const filePath = path.join(dirFor(locale), `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  if (!isPublished(data)) return null;
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    keywords: data.keywords || [],
    status: data.status,
    facts_used: data.facts_used,
    facts_verified_at: data.facts_verified_at,
    expert_reviewed: data.expert_reviewed,
    content,
  };
}

// ── 兼容旧调用（zh 默认）──
export async function getAllPosts(): Promise<PostMeta[]> {
  return getAllPostsLocalized("zh");
}

export async function getPost(slug: string): Promise<Post | null> {
  return getPostLocalized(slug, "zh");
}
