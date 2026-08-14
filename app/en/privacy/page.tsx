import type { Metadata } from "next";
import PrivacyContent from "../../components/pages/PrivacyContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/privacy",
  title: "Privacy Policy",
  description:
    "Privacy policy of Shisei Consulting Co., Ltd. — how we collect, use, store, and protect the personal information you provide when using this website and our consulting services, in accordance with Japan's Act on the Protection of Personal Information.",
});

export default function EnPrivacyPage() {
  return <PrivacyContent locale="en" />;
}
