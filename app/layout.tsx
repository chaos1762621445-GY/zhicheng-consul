import type { Metadata, Viewport } from "next";
import "./globals.css";
import WechatFloat from "./components/WechatFloat";
import PageCurtain from "./components/PageCurtain";

export const metadata: Metadata = {
  title: { default: "志成咨询 | 在日华人补助金申请代办", template: "%s | 志成咨询" },
  description: "专为在日华人企业主提供日本政府补助金全程代办服务。行政书士、社会保险劳务士、税理士、中小企业诊断士联合团队，全程中文，无成功不收费。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <PageCurtain />
        {children}
        <WechatFloat />
      </body>
    </html>
  );
}
