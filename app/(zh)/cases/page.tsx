import type { Metadata } from "next";
import CasesContent from "@/app/components/pages/CasesContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    locale: "zh",
    path: "/cases",
    title: "在日华人补助金成功案例｜3000+企业·8.5亿円获批·92%通过率",
    description: "志成コンサル补助金成功案例——餐饮、美容、IT、建设、零售、教育、制造、物流等多行业在日华人企业真实案例，累计服务3000+家、获批总额8.5亿円、92%通过率，最高单笔获批3000万円。",
  }),
};

export default function CasesPage() {
  return <CasesContent locale="zh" />;
}
