import type { Metadata } from "next";
import SubsidyDetail, { subsidyParams, subsidyMetadata } from "@/app/components/pages/SubsidyDetail";

export function generateStaticParams() {
  return subsidyParams();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return subsidyMetadata("zh", slug);
}

export default async function SubsidyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <SubsidyDetail locale="zh" slug={slug} />;
}
