import type { Metadata } from "next";
import FaqContent from "../components/pages/FaqContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    locale: "zh",
    path: "/faq",
    title: "常见问题",
    description: "补助金申请常见问题解答——申请资格、费用构成、流程周期、材料准备。在日华人企业主最关心的问题，志成コンサル一次性解答清楚。",
  }),
};

export default function FaqPage() {
  return <FaqContent locale="zh" />;
}
