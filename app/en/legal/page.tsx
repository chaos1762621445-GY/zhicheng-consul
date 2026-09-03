import type { Metadata } from "next";
import PillarContent from "../../components/pages/PillarContent";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { legal } from "@/lib/pillars/legal";

const d = legal.en;
export const metadata: Metadata = buildPageMetadata({ locale: "en", path: d.path, title: d.metaTitle, description: d.metaDesc, keywords: d.keywords });
export default function Page() { return <PillarContent locale="en" data={d} />; }
