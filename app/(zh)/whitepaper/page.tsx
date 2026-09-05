import type { Metadata } from "next";
import WhitepaperContent from "@/app/components/pages/WhitepaperContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    locale: "zh",
    path: "/whitepaper",
    title: "2026 在日华人企业补助金白皮书",
    description:
      "《2026 在日华人企业补助金与经营升级白皮书》正式发布。由株式会社志成コンサル编制，系统梳理 AI・数字化、省力化设备、人才助成、节能投资四大方向的制度、金额、补助率与申请要点，面向在日华人中小企业主。",
  }),
};

export default function WhitepaperPage() {
  return <WhitepaperContent locale="zh" />;
}
