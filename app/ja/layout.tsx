import type { Metadata, Viewport } from "next";
import "../globals.css";
import RootShell from "../components/RootShell";

const SITE_URL = "https://shisei-consult.jp";

// /ja 子树的 root layout：服务端输出 <html lang="ja">，
// title.template 用本语言品牌名，避免「日文标题 | 中文品牌」双重拼接。
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "志成コンサル | 日本の政府補助金 申請サポート",
    template: "%s | 志成コンサル",
  },
  description: "日本で事業を営む方向けに、政府補助金の申請を全面サポート。省力化補助金・AI/IT導入補助金・キャリアアップ助成金などを、行政書士・社労士・税理士・中小企業診断士の連携チームが一貫サポート。",
  authors: [{ name: "株式会社 志成コンサル" }],
  creator: "株式会社 志成コンサル",
  publisher: "株式会社 志成コンサル",
  openGraph: { type: "website", locale: "ja_JP", siteName: "志成コンサル" },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "business",
  verification: { google: "ULB8A8eatAtXF-_AtvVMYvnc517wXnSXCPEP1zF3PvY" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function JaRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="ja">{children}</RootShell>;
}
