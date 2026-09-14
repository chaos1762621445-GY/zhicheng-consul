import BlogListContent, { blogStaticParams, buildBlogListMetadata, resolveBlogPage } from "@/app/components/pages/BlogListContent";

type Props = { params: Promise<{ page: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogStaticParams("ja");
}

export async function generateMetadata({ params }: Props) {
  return buildBlogListMetadata("ja", resolveBlogPage("ja", (await params).page));
}

export default async function BlogArchivePage({ params }: Props) {
  return <BlogListContent locale="ja" page={resolveBlogPage("ja", (await params).page)} />;
}
