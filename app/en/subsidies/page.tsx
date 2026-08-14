import type { Metadata } from "next";
import SubsidiesContent from "../../components/pages/SubsidiesContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/subsidies",
  title: "Subsidy Types | Labor-Saving, AI/IT, Career-Up & AC Subsidies",
  description: "A detailed guide to the six core subsidies and grants Shisei Consulting handles — Labor-Saving Subsidy (up to 80M JPY), AI/IT Adoption Subsidy, Career-Up Grant, HR Development Grant, and Tokyo's energy-efficient AC subsidy. Eligibility and uses at a glance, fully in Chinese.",
});

export default function EnSubsidiesPage() {
  return <SubsidiesContent locale="en" />;
}
