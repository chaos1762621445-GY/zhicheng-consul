import type { Metadata } from "next";
import ContactContent from "@/app/components/pages/ContactContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    locale: "zh",
    path: "/contact",
    title: "免费补助金资格诊断｜3分钟中文问卷·当日回复",
    description: "免费补助金资格诊断——3分钟问卷，志成コンサル专业团队当日回复",
  }),
};

export default function ContactPage() {
  return <ContactContent locale="zh" />;
}
