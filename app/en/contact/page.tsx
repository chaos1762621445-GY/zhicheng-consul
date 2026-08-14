import type { Metadata } from "next";
import ContactContent from "../../components/pages/ContactContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/contact",
  title: "Free Subsidy Eligibility Diagnosis | 3-Minute Check, Same-Day Reply",
  description: "Free subsidy eligibility diagnosis — a 3-minute questionnaire, with a same-day reply from Shisei Consulting's professional team, entirely in Chinese.",
});

export default function EnContactPage() {
  return <ContactContent locale="en" />;
}
