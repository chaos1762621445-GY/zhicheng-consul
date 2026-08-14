import type { Metadata } from "next";
import PartnerContent from "../../components/pages/PartnerContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  path: "/partner",
  title: "補助金の代理店提携募集｜最大60%の透明な分配・パートナー共栄",
  description: "志成コンサルの代理店ネットワークに参加し、最大60%の透明な分配を獲得。税理士、行政書士、社労士、会計事務所、WeChatグループ主、留学エージェント、不動産仲介などの方に最適です。",
});

export default function JaPartnerPage() {
  return <PartnerContent locale="ja" />;
}
