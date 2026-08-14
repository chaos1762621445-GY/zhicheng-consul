import type { Metadata } from "next";
import BlogListContent from "../../components/pages/BlogListContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/blog",
  title: "Japan Subsidy Insights | Labor-Saving, AI/IT & Career-Up Grants",
  description: "Insights on subsidies for businesses in Japan — the latest application guides and policy analysis on the Labor-Saving Subsidy, AI / IT Adoption Subsidy, Career-Up Grant, Tokyo AC subsidy, and more. Original content from a Gyoseishoshi & Zeirishi team.",
});

export default function EnBlogPage() {
  return <BlogListContent locale="en" />;
}
