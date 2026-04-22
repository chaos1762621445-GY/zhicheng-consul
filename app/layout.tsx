import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Geist } from "next/font/google";
import "./globals.css";
import SplashScreen from "./components/SplashScreen";
import WechatFloat from "./components/WechatFloat";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: { default: "株式会社志成コンサル | 在日华人补助金申请代办", template: "%s | 志成コンサル" },
  description: "专为在日华人企业主提供日本政府补助金申请代办服务。行政书士·社労士·税理士·中小企業診断士联合专业团队，省力化补助金、AI导入补助金、キャリアアップ助成金全程中文无障碍，无成功不收费。",
  keywords: ["在日华人补助金", "省力化補助金", "AI導入補助金", "キャリアアップ助成金", "在日华人创业", "行政书士", "社労士", "税理士", "中小企業診断士"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={cn("font-sans", geist.variable)}>
      <body>
        <SplashScreen />
        {children}
        <WechatFloat />
      </body>
    </html>
  );
}
