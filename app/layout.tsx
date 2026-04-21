import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "株式会社志成コンサル | 在日华人补助金申请代办", template: "%s | 志成コンサル" },
  description: "专为在日华人企业主提供日本政府补助金申请代办服务。省力化补助金、AI导入补助金、员工转正助成金，全程中文，无成功不收费。",
  keywords: ["在日华人补助金", "省力化補助金", "AI導入補助金", "キャリアアップ助成金", "在日华人创业"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
