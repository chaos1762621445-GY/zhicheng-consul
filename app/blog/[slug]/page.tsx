import type { Metadata } from "next";
import BlogArticle, { blogParamsFor, blogMetadataFor } from "../../components/BlogArticle";

export async function generateStaticParams() {
  return blogParamsFor("zh");
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return blogMetadataFor("zh", slug);
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogArticle locale="zh" slug={slug} />;
}
