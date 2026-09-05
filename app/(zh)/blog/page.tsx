import type { Metadata } from "next";
import BlogListContent from "@/app/components/pages/BlogListContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "zh",
  path: "/blog",
  title: "在日华人补助金知识库｜省力化·AI导入·转正助成金最新攻略",
  description: "在日华人补助金知识库——省力化补助金、AI导入补助金、员工转正助成金、东京空调补助金等最新申请攻略与政策解读，行政书士·税理士团队原创，全程中文。",
});

export default function BlogPage() {
  return <BlogListContent locale="zh" />;
}
