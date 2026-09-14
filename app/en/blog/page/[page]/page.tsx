import BlogListContent, { blogStaticParams, buildBlogListMetadata, resolveBlogPage } from "@/app/components/pages/BlogListContent";

type Props = { params: Promise<{ page: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogStaticParams("en");
}

export async function generateMetadata({ params }: Props) {
  return buildBlogListMetadata("en", resolveBlogPage("en", (await params).page));
}

export default async function BlogArchivePage({ params }: Props) {
  return <BlogListContent locale="en" page={resolveBlogPage("en", (await params).page)} />;
}
