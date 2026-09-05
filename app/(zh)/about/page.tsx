import type { Metadata } from "next";
import AboutContent from "@/app/components/pages/AboutContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    locale: "zh",
    path: "/about",
    title: "在日华人补助金代办团队｜行政书士·税理士·社劳士联合",
    description: "志成コンサル——专为在日华人企业主提供补助金申请代办服务。行政书士·社会保险劳务士·税理士·中小企业诊断士联合专业团队，全程中文无障碍。",
  }),
};

export default function AboutPage() {
  return <AboutContent locale="zh" />;
}
