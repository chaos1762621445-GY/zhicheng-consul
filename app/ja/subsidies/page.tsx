import type { Metadata } from "next";
import SubsidiesContent from "../../components/pages/SubsidiesContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  path: "/subsidies",
  title: "補助金の種類一覧｜省力化・AI導入・キャリアアップ助成金・空調補助を代行",
  description: "志成コンサルが代行する6大主力補助金・助成金を詳しく解説——省力化補助金（最大8,000万円）、AI・IT導入補助金、キャリアアップ助成金、人材開発支援助成金、東京都の空調省エネ補助。申請条件と用途が一目でわかる、全工程中国語対応。",
});

export default function JaSubsidiesPage() {
  return <SubsidiesContent locale="ja" />;
}
