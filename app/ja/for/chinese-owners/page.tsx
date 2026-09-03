import type { Metadata } from "next";
import PillarContent from "../../../components/pages/PillarContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { chineseOwners } from "@/lib/pillars/chinese-owners";

const d = chineseOwners.ja;
export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  path: d.path,
  title: d.metaTitle,
  description: d.metaDesc,
  keywords: d.keywords,
});

export default function Page() {
  return <PillarContent locale="ja" data={d} />;
}
