import type { Metadata } from "next";
import ContactContent from "../../components/pages/ContactContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  path: "/contact",
  title: "無料 補助金資格診断｜3分アンケート・当日ご返答",
  description: "無料の補助金資格診断——3分のアンケートで、志成コンサルの専門チームが当日ご返答。全工程を中国語でサポートします。",
});

export default function JaContactPage() {
  return <ContactContent locale="ja" />;
}
