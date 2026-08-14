import type { Metadata } from "next";
import ServiceContent from "../../components/pages/ServiceContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/service",
  title: "Our Subsidy Application Process | 6 Steps, Fully in Chinese",
  description: "A detailed walkthrough of Shisei Consulting's subsidy application process — free diagnosis, plan matching, document preparation, submission, review follow-up, and disbursement. Handled end-to-end in Chinese by a Gyoseishoshi & Zeirishi team. No approval, no fee.",
});

export default function EnServicePage() {
  return <ServiceContent locale="en" />;
}
