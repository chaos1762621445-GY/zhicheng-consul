import type { Metadata } from "next";
import PartnerContent from "../../components/pages/PartnerContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/partner",
  title: "Subsidy Partner Program | Up to 60% Transparent Commission",
  description: "Join the Shisei Consulting partner network and earn up to 60% transparent commission. Ideal for Zeirishi, Gyoseishoshi, Sharoshi, accounting firms, WeChat group owners, study-abroad agents, and real-estate agents.",
});

export default function EnPartnerPage() {
  return <PartnerContent locale="en" />;
}
