import type { Metadata } from "next";
import SubsidiesContent from "../components/pages/SubsidiesContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";

export const metadata: Metadata = buildPageMetadata({
  locale: "zh",
  path: "/subsidies",
  title: "补助金种类一览｜省力化·AI导入·转正助成金·空调补助全代办",
  description: "志成コンサル代办的6大主力补助金·助成金详解——省力化补助金（最高8,000万）、AI导入补助金、员工转正助成金、员工培训助成金、东京空调节能补助，申请条件与用途一次看清，全程中文。",
});

export default function SubsidiesPage() {
  return <SubsidiesContent locale="zh" />;
}
