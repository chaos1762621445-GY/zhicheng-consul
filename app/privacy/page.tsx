import type { Metadata } from "next";
import PrivacyContent from "../components/pages/PrivacyContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    locale: "zh",
    path: "/privacy",
    title: "隐私政策",
    description:
      "株式会社志成コンサル隐私政策——说明我们如何收集、使用、保管和保护您在使用本网站及咨询服务时提供的个人信息，依据日本《个人信息保护法》制定。",
  }),
};

export default function PrivacyPage() {
  return <PrivacyContent locale="zh" />;
}
