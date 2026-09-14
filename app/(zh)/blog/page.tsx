import BlogListContent, { buildBlogListMetadata } from "@/app/components/pages/BlogListContent";

export function generateMetadata() {
  return buildBlogListMetadata("zh");
}

export default function BlogPage() {
  return <BlogListContent locale="zh" />;
}
