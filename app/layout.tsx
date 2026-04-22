import type { Metadata, Viewport } from "next";
import "./globals.css";
import WechatFloat from "./components/WechatFloat";

export const metadata: Metadata = {
  title: { default: "株式会社志成コンサル | 在日华人补助金申请代办", template: "%s | 志成コンサル" },
  description: "专为在日华人企业主提供日本政府补助金申请代办服务。行政书士·社労士·税理士·中小企業診断士联合专业团队，省力化补助金、AI导入补助金全程中文无障碍，无成功不收费。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <WechatFloat />
      </body>
    </html>
  );
}
