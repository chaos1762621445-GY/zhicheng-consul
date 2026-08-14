import type { Metadata } from "next";
import WhitepaperContent from "../../components/pages/WhitepaperContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/whitepaper",
  title: "2026 Subsidy White Paper for Chinese-Owned Businesses in Japan",
  description:
    "The 2026 Subsidy & Business Upgrade White Paper for Chinese-Owned Businesses in Japan. Compiled by Shisei Consulting Co., Ltd., it systematically maps the programs, amounts, subsidy rates, and application points across four directions — AI & digitalization, labor-saving equipment, talent grants, and energy-efficiency investment — for Chinese SME owners in Japan.",
});

export default function EnWhitepaperPage() {
  return <WhitepaperContent locale="en" />;
}
