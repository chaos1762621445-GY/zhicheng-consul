import type { Metadata } from "next";
import CasesContent from "../../components/pages/CasesContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/cases",
  title: "Subsidy Case Studies | 3,000+ Approved Applications · JPY 850M Approved",
  description: "Shisei Consulting case studies across industries. As of August 2026: 3,000+ applications with grant/payment decisions, JPY 850M in approved amounts, not disbursements; 92% approval among reviewed cases. Individual results depend on the reviewing authority.",
});

export default function EnCasesPage() {
  return <CasesContent locale="en" />;
}
