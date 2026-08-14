import type { Metadata } from "next";
import FaqContent from "../../components/pages/FaqContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  path: "/faq",
  title: "補助金申請のよくあるご質問｜資格・費用・流れ・必要書類",
  description: "補助金申請に関するよくあるご質問——申請資格、費用構成、手続き期間、必要書類まで。在日華人の企業経営者が最も気になる疑問を、志成コンサルが一度でわかりやすくお答えします。",
});

export default function JaFaqPage() {
  return <FaqContent locale="ja" />;
}
