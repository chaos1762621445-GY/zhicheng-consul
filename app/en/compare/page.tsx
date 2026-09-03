import type { Metadata } from "next";
import PillarContent from "../../components/pages/PillarContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { compare } from "@/lib/pillars/compare";

const d = compare.en;
export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: d.path,
  title: d.metaTitle,
  description: d.metaDesc,
  keywords: d.keywords,
});

export default function Page() {
  return <PillarContent locale="en" data={d} />;
}
