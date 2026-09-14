import BlogListContent, { buildBlogListMetadata } from "@/app/components/pages/BlogListContent";

export function generateMetadata() {
  return buildBlogListMetadata("ja");
}

export default function BlogPage() {
  return <BlogListContent locale="ja" />;
}
