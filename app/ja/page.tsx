import type { Metadata } from "next";
import HomeContent from "../components/HomeContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  path: "/",
  title: "志成コンサル | 日本の政府補助金 申請サポート",
  description:
    "日本で事業を営む方向けに、政府補助金の申請を全面サポート。省力化補助金・AI/IT導入補助金・キャリアアップ助成金などを、行政書士・社労士・税理士・中小企業診断士の連携チームが一貫サポート。不採択なら費用はいただきません。",
});

export default function JaHomePage() {
  return <HomeContent locale="ja" />;
}
