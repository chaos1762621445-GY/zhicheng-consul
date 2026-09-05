import type { Metadata } from "next";
import HomeContent from "../components/HomeContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/",
  absoluteTitle: true,
  title: "Shisei Consulting | Japan Government Subsidy Support for Businesses",
  description:
    "Full-service Japanese government subsidy application support for business owners in Japan. Labor-saving, AI/IT adoption, and career-up grants handled end-to-end by a team of licensed Gyoseishoshi, Sharoshi, Zeirishi, and SME consultants. No approval, no fee.",
});

export default function EnHomePage() {
  return <HomeContent locale="en" />;
}
