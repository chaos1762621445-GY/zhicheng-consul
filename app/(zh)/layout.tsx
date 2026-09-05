import type { Metadata, Viewport } from "next";
import "../globals.css";
import RootShell from "@/app/components/RootShell";

const SITE_URL = "https://shisei-consult.jp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "志成コンサル | 在日华人补助金申请代办 - 行政书士·税理士联合团队",
    template: "%s | 志成コンサル",
  },
  description:
    "专为在日华人企业主提供日本政府补助金全程代办服务。省力化补助金、AI导入补助金、员工转正助成金等全程中文办理，行政书士·社会保险劳务士·税理士·中小企业诊断士联合团队，无成功不收费。",
  keywords: [
    "在日华人补助金",
    "日本补助金申请",
    "省力化补助金",
    "AI导入补助金",
    "员工转正助成金",
    "持续化补助金",
    "在日华人企业",
    "日本政府补助金代办",
    "行政书士",
    "税理士",
    "社会保险劳务士",
    "中小企业诊断士",
    "補助金申請代行",
  ],
  authors: [{ name: "株式会社 志成コンサル" }],
  creator: "株式会社 志成コンサル",
  publisher: "株式会社 志成コンサル",
  alternates: {
    canonical: "/",
    // hreflang：三向握手（本站中/英/日三语自成体系）
    languages: {
      "zh-CN": "https://shisei-consult.jp",
      "zh-Hans": "https://shisei-consult.jp",
      en: "https://shisei-consult.jp/en",
      ja: "https://shisei-consult.jp/ja",
      "x-default": "https://shisei-consult.jp",
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["ja_JP"],
    url: SITE_URL,
    siteName: "志成コンサル",
    title: "志成コンサル | 在日华人补助金申请代办",
    description:
      "专为在日华人企业主提供日本政府补助金全程代办服务。全程中文，无成功不收费。行政书士·税理士·社劳士·诊断士联合团队。",
    // 图片由 app/opengraph-image.tsx 自动生成（1200×630 品牌卡片）
  },
  twitter: {
    card: "summary_large_image",
    title: "志成コンサル | 在日华人补助金申请代办",
    description:
      "专为在日华人企业主提供日本政府补助金全程代办服务。全程中文，无成功不收费。",
    // 图片同样复用自动生成的 opengraph-image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
  verification: {
    google: "ULB8A8eatAtXF-_AtvVMYvnc517wXnSXCPEP1zF3PvY",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="zh">{children}</RootShell>;
}
