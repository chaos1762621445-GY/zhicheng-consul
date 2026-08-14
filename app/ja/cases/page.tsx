import type { Metadata } from "next";
import CasesContent from "../../components/pages/CasesContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  path: "/cases",
  title: "補助金の成功事例｜3000社超・8.5億円採択・採択率92%",
  description: "志成コンサルの補助金成功事例——飲食・美容・IT・建設・小売・教育・製造・物流など多業種の在日華人企業の実例。累計3000社超を支援、採択総額8.5億円、採択率92%、最高で単件3000万円の採択実績。",
});

export default function JaCasesPage() {
  return <CasesContent locale="ja" />;
}
