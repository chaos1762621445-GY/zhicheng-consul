import BlogListContent, { buildBlogListMetadata } from "@/app/components/pages/BlogListContent";

export function generateMetadata() {
  return buildBlogListMetadata("en");
}

export default function BlogPage() {
  return <BlogListContent locale="en" />;
}
