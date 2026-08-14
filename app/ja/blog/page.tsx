import type { Metadata } from "next";
import BlogListContent from "../../components/pages/BlogListContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  path: "/blog",
  title: "補助金お役立ち情報｜省力化・AI導入・キャリアアップ助成金の最新攻略",
  description: "在日華人向け補助金のお役立ち情報——省力化補助金、AI・IT導入補助金、キャリアアップ助成金、東京都の空調補助金など、最新の申請攻略と政策解説。行政書士・税理士チームによるオリジナル記事。",
});

export default function JaBlogPage() {
  return <BlogListContent locale="ja" />;
}
