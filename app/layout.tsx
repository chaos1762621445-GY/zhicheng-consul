import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "株式会社志成コンサル | 在日华人补助金申请代办", template: "%s | 志成コンサル" },
  description: "专为在日华人企业主提供日本政府补助金申请代办服务。行政书士·社労士·税理士·中小企業診断士联合专业团队，省力化补助金、AI导入补助金、キャリアアップ助成金全程中文无障碍，无成功不收费。",
  keywords: ["在日华人补助金", "省力化補助金", "AI導入補助金", "キャリアアップ助成金", "在日华人创业", "行政书士", "社労士", "税理士", "中小企業診断士"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
