import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常见问题 FAQ｜日本补助金申请疑问全解答",
  description:
    "在日华人企业申请日本补助金的常见问题解答：需要什么条件？费用怎么算？多久能拿到钱？被驳回怎么办？志成コンサル一次说清补助金申请全流程疑问。",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "常见问题 FAQ｜日本补助金申请疑问全解答",
    description:
      "在日华人企业申请日本补助金最常见的问题，志成コンサル一次说清：条件、费用、周期、驳回应对。",
    url: "/faq",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
