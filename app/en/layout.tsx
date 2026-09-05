import type { Metadata, Viewport } from "next";
import "../globals.css";
import RootShell from "../components/RootShell";
import ZhSwitchBar from "../components/ZhSwitchBar";

const SITE_URL = "https://shisei-consult.jp";

// /en 子树的 root layout：服务端输出 <html lang="en">，
// title.template 用本语言品牌名，避免「日文标题 | 中文品牌」双重拼接。
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shisei Consulting | Japan Government Subsidy Support for Businesses",
    template: "%s | Shisei Consulting",
  },
  description: "Full-scope support for Japanese government subsidies and grants for businesses operating in Japan. Licensed Gyoseishoshi, Zeirishi, Sharoshi and SME consultants. Success-based fee.",
  authors: [{ name: "株式会社 志成コンサル" }],
  creator: "株式会社 志成コンサル",
  publisher: "株式会社 志成コンサル",
  openGraph: { type: "website", locale: "en_US", siteName: "志成コンサル" },
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

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell locale="en">
      <ZhSwitchBar />
      {children}
    </RootShell>
  );
}
