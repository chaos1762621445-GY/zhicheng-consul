import type { Metadata } from "next";
import WhitepaperContent from "../../components/pages/WhitepaperContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  path: "/whitepaper",
  title: "2026 在日華人企業 補助金白書",
  description:
    "「2026 在日華人企業 補助金と経営アップグレード白書」を正式リリース。株式会社志成コンサルが編集し、AI・デジタル化、省力化設備、人材助成、省エネ投資の4方向について、制度・金額・補助率・申請のポイントを体系的に整理。在日華人の中小企業経営者向け。",
});

export default function JaWhitepaperPage() {
  return <WhitepaperContent locale="ja" />;
}
