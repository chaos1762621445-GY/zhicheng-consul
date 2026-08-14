import type { Metadata } from "next";
import PrivacyContent from "../../components/pages/PrivacyContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  path: "/privacy",
  title: "プライバシーポリシー",
  description:
    "株式会社志成コンサルのプライバシーポリシー——当サイトおよび相談サービスのご利用時にご提供いただく個人情報を、どのように収集・利用・保管・保護するかを、日本の「個人情報保護法」に基づきご説明します。",
});

export default function JaPrivacyPage() {
  return <PrivacyContent locale="ja" />;
}
