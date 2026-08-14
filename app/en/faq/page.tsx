import type { Metadata } from "next";
import FaqContent from "../../components/pages/FaqContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/faq",
  title: "Subsidy FAQ | Eligibility, Fees & Process for Owners in Japan",
  description: "Frequently asked questions on Japanese subsidy applications — eligibility, fee structure, timelines, and required documents. The questions Chinese business owners in Japan care about most, answered clearly by Shisei Consulting.",
});

export default function EnFaqPage() {
  return <FaqContent locale="en" />;
}
