import type { Metadata } from "next";
import PillarContent from "@/app/components/pages/PillarContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { schedule } from "@/lib/pillars/schedule";

const d = schedule.zh;
export const metadata: Metadata = buildPageMetadata({
  locale: "zh",
  path: d.path,
  title: d.metaTitle,
  description: d.metaDesc,
  keywords: d.keywords,
});

export default function Page() {
  return <PillarContent locale="zh" data={d} />;
}
