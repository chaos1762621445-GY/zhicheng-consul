import type { Metadata } from "next";
import AboutContent from "../../components/pages/AboutContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/about",
  title: "About Us | Chinese-Language Subsidy Team of Gyoseishoshi & Zeirishi",
  description: "Shisei Consulting provides subsidy application services exclusively for Chinese business owners in Japan. A team of Gyoseishoshi, Sharoshi, Zeirishi, and SME Management Consultants supports you entirely in Chinese — no approval, no fee.",
});

export default function EnAboutPage() {
  return <AboutContent locale="en" />;
}
