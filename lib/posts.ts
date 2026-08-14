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
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      keywords: data.keywords || [],
    };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostLocalized(slug: string, locale: Locale = "zh"): Promise<Post | null> {
  const filePath = path.join(dirFor(locale), `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    keywords: data.keywords || [],
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
