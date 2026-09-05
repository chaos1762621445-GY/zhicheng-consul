import type { Metadata } from "next";
import PillarContent from "@/app/components/pages/PillarContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { compare } from "@/lib/pillars/compare";

const d = compare.zh;
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
