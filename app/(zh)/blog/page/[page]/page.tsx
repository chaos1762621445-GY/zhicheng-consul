import BlogListContent, { blogStaticParams, buildBlogListMetadata, resolveBlogPage } from "@/app/components/pages/BlogListContent";

type Props = { params: Promise<{ page: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogStaticParams("zh");
}

export async function generateMetadata({ params }: Props) {
  return buildBlogListMetadata("zh", resolveBlogPage("zh", (await params).page));
}

export default async function BlogArchivePage({ params }: Props) {
  return <BlogListContent locale="zh" page={resolveBlogPage("zh", (await params).page)} />;
}
