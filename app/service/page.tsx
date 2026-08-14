import type { Metadata } from "next";
import ServiceContent from "../components/pages/ServiceContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = {
  ...buildPageMetadata({
    locale: "zh",
    path: "/service",
    title: "补助金代办服务流程｜从免费诊断到资金到账·全程中文6步",
    description: "志成コンサル补助金申请服务流程详解——免费诊断、方案匹配、材料制作、申请提交、审查跟进、资金到账，行政书士·税理士联合团队全程中文代办，不获批不收费。",
  }),
};

export default function ServicePage() {
  return <ServiceContent locale="zh" />;
}
