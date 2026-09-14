import type { Metadata } from "next";
import CasesContent from "../../components/pages/CasesContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  path: "/cases",
  title: "補助金の事例｜交付・支給決定3,000件超・決定額8.5億円",
  description: "志成コンサルの飲食・美容・IT等の補助金事例。2026年8月時点で交付・支給決定3,000件超、決定額合計8.5億円（入金額ではありません）。審査完了案件の採択率92%。個別の結果は主管機関の審査によります。",
});

export default function JaCasesPage() {
  return <CasesContent locale="ja" />;
}
