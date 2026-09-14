import type { Metadata } from "next";
import CasesContent from "@/app/components/pages/CasesContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    locale: "zh",
    path: "/cases",
    title: "在日华人补助金成功案例｜3,000+获批案件·8.5亿円批准金额",
    description: "志成コンサル餐饮、美容、IT等行业补助金案例。截至2026年8月，累计3,000+件获交付决定／支给决定的案件，批准金额合计8.5亿日元（非到账金额）；已完成审查案件通过率92%，个案结果以主管机关审查为准。",
  }),
};

export default function CasesPage() {
  return <CasesContent locale="zh" />;
}
