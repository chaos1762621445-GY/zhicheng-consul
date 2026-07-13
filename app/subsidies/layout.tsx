import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "补助金项目一览｜省力化·AI导入·转正·培训·空调补助",
  description:
    "在日华人企业可申请的日本政府补助金项目一览：省力化投资补助金（最高1500万円）、AI/IT导入补助金、员工转正助成金、人材开发培训助成金、东京都空调省能补助。志成コンサル中文对应，成功报酬制。",
  alternates: { canonical: "/subsidies" },
  openGraph: {
    title: "补助金项目一览｜在日华人企业可申请的日本政府补助金",
    description:
      "省力化1500万円、AI导入、员工转正、培训助成金、空调补助——中文对应，成功报酬制。",
    url: "/subsidies",
  },
};

export default function SubsidiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
