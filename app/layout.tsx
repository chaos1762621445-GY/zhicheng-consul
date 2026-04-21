import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "株式会社志成コンサル | 在日华人补助金申请代办",
    template: "%s | 志成コンサル",
  },
  description: "专为在日华人企业主提供日本政府补助金申请代办服务。IT导入补助金、小型事业者持续化补助金、事业再构筑补助金，无成功不收费。",
  keywords: ["在日华人补助金", "日本补助金申请", "在日华人创业", "补助金代办", "日本政府补助金"],
  openGraph: {
    locale: "zh_CN",
    type: "website",
    siteName: "志成コンサル",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
