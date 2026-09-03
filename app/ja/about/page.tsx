import type { Metadata } from "next";
import AboutContent from "../../components/pages/AboutContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  path: "/about",
  title: "会社概要｜在日華人向け補助金サポートチーム 行政書士・税理士・社労士連携",
  description: "志成コンサルは在日華人の企業経営者に特化した補助金申請サポートサービス。行政書士・社会保険労務士・税理士・中小企業診断士の連携チームが全工程を中国語でサポート、不採択なら無料。",
});

export default function JaAboutPage() {
  return <AboutContent locale="ja" />;
}
