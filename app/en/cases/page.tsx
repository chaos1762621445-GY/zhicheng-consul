import type { Metadata } from "next";
import CasesContent from "../../components/pages/CasesContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/cases",
  title: "Subsidy Success Cases | 3,000+ Businesses · ¥850M Secured · 92% Rate",
  description: "Shisei Consulting subsidy success cases — real Chinese-owned businesses in Japan across food service, beauty, IT, construction, retail, education, manufacturing, and logistics. 3,000+ served, ¥850M in subsidies secured, 92% success rate, up to ¥30M in a single approval.",
});

export default function EnCasesPage() {
  return <CasesContent locale="en" />;
}
