import { Inter, Noto_Serif_SC } from "next/font/google";
import WechatFloat from "./WechatFloat";
import MobileActionBar from "./MobileActionBar";
import BackToTop from "./BackToTop";
import PageCurtain from "./PageCurtain";
import AttributionTracker from "./AttributionTracker";
import type { Locale } from "@/lib/i18n/config";

// 自托管字体：消除阻塞渲染的 Google Fonts <link>，display:swap 先用系统字体秒出、字体到位无缝替换
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});
const notoSerifSC = Noto_Serif_SC({
  weight: ["700", "900"], // 砍 600（全站无一处使用），省约 1/3 中文字体分片
  display: "swap",
  variable: "--font-noto-serif-sc",
  preload: false, // 中文字体大，不 preload，标题先用系统衬线(Songti SC)回退
});

const SITE_URL = "https://shisei-consult.jp";

// ── 结构化数据（GEO / AI搜索引擎可读）──
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService", "LegalService"],
  "@id": `${SITE_URL}/#organization`,
  name: "株式会社 志成コンサル",
  alternateName: "志成コンサル",
  url: SITE_URL,
  logo: { "@type": "ImageObject", "@id": `${SITE_URL}/#logo`, url: `${SITE_URL}/logo.png` },
  image: { "@id": `${SITE_URL}/#logo` },
  // 同集团日文官网 + GビズINFO 官方法人页（可核验实体）
  sameAs: [
    "https://shiseiconsult.com",
    "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=5010401158340",
  ],
  description:
    "专为在日华人企业主提供日本政府补助金（省力化补助金、AI导入补助金、员工转正助成金等）全程代办服务。行政书士、社会保险劳务士、税理士、中小企业诊断士联合团队，全程中文，无成功不收费。",
  slogan: "在日华人补助金全程代办，不获批不收费",
  knowsLanguage: ["zh-CN", "ja-JP"],
  areaServed: { "@type": "Country", name: "日本" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "平河町1-8-2 半蔵門パレス8階",
    addressLocality: "千代田区",
    addressRegion: "東京都",
    postalCode: "102-0093",
    addressCountry: "JP",
  },
  telephone: "+81-3-6265-9756",
  email: "info@shisei-consult.jp",
  // 法人番号（日本国税庁指定）—— GビズINFO 可核验的稳定实体标识
  taxID: "5010401158340",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "法人番号",
    value: "5010401158340",
  },
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
  "@id": `${SITE_URL}/#website`,
  name: "志成コンサル",
  url: SITE_URL,
  inLanguage: "zh-CN", // 各语言子树通过 alternates/hreflang 表达，WebSite 实体以主站中文为准
  publisher: { "@id": `${SITE_URL}/#organization` },
};


// <html lang> 按语言子树的 root layout 设置（zh 根 / en / ja 三个 root layout 共用本 shell），
// 服务端直接输出正确 lang，不再依赖客户端脚本事后改写。
const HTML_LANG: Record<Locale, string> = { zh: "zh-CN", en: "en", ja: "ja" };

export default function RootShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={HTML_LANG[locale]} className={`${inter.variable} ${notoSerifSC.variable}`}>
      <head>
        {/* LCP 提速：hero 背景图预加载，先于 HTML body 解析即开始下载 */}
        <link rel="preload" as="image" href="/hero-tokyo.webp" fetchPriority="high" />
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
        <AttributionTracker />
        <PageCurtain />
        {children}
        <WechatFloat />
        <MobileActionBar />
        <BackToTop />
      </body>
    </html>
  );
}
