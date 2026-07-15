import type { Metadata, Viewport } from "next";
import "./globals.css";
import WechatFloat from "./components/WechatFloat";
import PageCurtain from "./components/PageCurtain";

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

// ── 结构化数据（GEO / AI搜索引擎可读）──
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService", "LegalService"],
  name: "株式会社 志成コンサル",
  alternateName: "志成コンサル",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  description:
    "专为在日华人企业主提供日本政府补助金（省力化补助金、AI导入补助金、员工转正助成金等）全程代办服务。行政书士、社会保险劳务士、税理士、中小企业诊断士联合团队，全程中文，无成功不收费。",
  slogan: "在日华人补助金全程代办，不获批不收费",
  knowsLanguage: ["zh-CN", "ja-JP"],
  areaServed: { "@type": "Country", name: "日本" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "中央区島之内1-13-3 おおきに東心斎橋ビル301号室",
    addressLocality: "大阪市",
    addressRegion: "大阪府",
    postalCode: "542-0082",
    addressCountry: "JP",
  },
  telephone: "+81-3-6265-9756",
  email: "knakano.sekiyoshi@gmail.com",
  knowsAbout: [
    "日本政府补助金",
    "省力化补助金",
    "AI导入补助金",
    "员工转正助成金",
    "持续化补助金",
    "行政书士业务",
    "税理士业务",
    "社会保险劳务士业务",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "省力化补助金申请代办" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI导入补助金申请代办" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "员工转正助成金申请代办" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "员工培训助成金申请代办" } },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "志成コンサル",
  url: SITE_URL,
  inLanguage: "zh-CN",
  publisher: { "@type": "Organization", name: "株式会社 志成コンサル" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Serif+SC:wght@600;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <PageCurtain />
        {children}
        <WechatFloat />
      </body>
    </html>
  );
}
