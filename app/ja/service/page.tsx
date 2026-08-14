import type { Metadata } from "next";
import ServiceContent from "../../components/pages/ServiceContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  path: "/service",
  title: "補助金申請代行の流れ｜無料診断から受給まで 中国語で6ステップ",
  description: "志成コンサルの補助金申請サービスの流れを詳しく解説——無料診断、プランマッチング、資料作成、申請提出、審査フォロー、受給まで。行政書士・税理士の連携チームが全工程を中国語で代行、不採択なら無料。",
});

export default function JaServicePage() {
  return <ServiceContent locale="ja" />;
}
