import type { Metadata } from "next";
import PartnerContent from "@/app/components/pages/PartnerContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    locale: "zh",
    path: "/partner",
    title: "补助金代理合作招募｜最高60%透明分成·中介伙伴共赢",
    description: "加入志成コンサル代理网络，享受最高 60% 透明分成。适合税理士、行政书士、社劳士、会计事务所、微信群主、留学中介、房产中介等人群。",
  }),
};

export default function PartnerPage() {
  return <PartnerContent locale="zh" />;
}
