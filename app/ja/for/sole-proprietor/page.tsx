import type { Metadata } from "next";
import PillarContent from "../../../components/pages/PillarContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { soleProprietor } from "@/lib/pillars/sole-proprietor";

const d = soleProprietor.ja;
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
