'use client';
import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { CaseItem } from "./pages/CasesContent";
import { CASE_META, CASE_FILTER_LABELS, amountRange } from "@/lib/cases/meta";

type Props = { locale: Locale; cases: CaseItem[]; amountLabel: string; periodLabel: string };

export default function CaseGrid({ locale, cases, amountLabel, periodLabel }: Props) {
  const F = CASE_FILTER_LABELS[locale];
  const [region, setRegion] = useState<string>("all");
  const [industry, setIndustry] = useState<string>("all");
  const [subsidy, setSubsidy] = useState<string>("all");

  const list = useMemo(() => cases.map((c, i) => ({ c, m: CASE_META[i] })).filter(({ m }) =>
    m && (region === "all" || m.regionKey === region) && (industry === "all" || m.industryKey === industry) && (subsidy === "all" || m.subsidyKey === subsidy)
  ), [cases, region, industry, subsidy]);

  const Row = ({ label, value, set, opts }: { label: string; value: string; set: (v: string) => void; opts: [string, string][] }) => (
    <div className="case-filter-row" role="group" aria-label={label}>
      <span className="case-filter-label">{label}</span>
      <button type="button" className="need-tab" aria-pressed={value === "all"} onClick={() => set("all")}>{F.groups.all}</button>
      {opts.map(([k, v]) => (
        <button key={k} type="button" className="need-tab" aria-pressed={value === k} onClick={() => set(k)}>{v}</button>
      ))}
    </div>
  );

  const used = (key: "regionKey" | "industryKey" | "subsidyKey") => Array.from(new Set(CASE_META.slice(0, cases.length).map((m) => m[key])));

  return (
    <>
      <div className="case-filters">
        <Row label={F.groups.industry} value={industry} set={setIndustry} opts={used("industryKey").map((k) => [k, F.industry[k as keyof typeof F.industry]])} />
        <Row label={F.groups.subsidy} value={subsidy} set={setSubsidy} opts={used("subsidyKey").map((k) => [k, F.subsidy[k as keyof typeof F.subsidy]])} />
        <Row label={F.groups.region} value={region} set={setRegion} opts={used("regionKey").map((k) => [k, F.region[k as keyof typeof F.region]])} />
      </div>

      {list.length === 0 ? (
        <div className="case-empty">{F.groups.empty}</div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(420px, 100%), 1fr))", gap: 20 }}>
          {list.map(({ c, m }, i) => (
            <article key={i} className="home-case" style={{ display: "flex", flexDirection: "column" }}>
              <div className="home-case-meta">
                <span className="chip chip-audience">{F.industry[m.industryKey]}</span>
                <span className="chip chip-audience">{F.region[m.regionKey]}</span>
                <span className="chip chip-audience">{F.size[m.sizeKey]}</span>
                <span className="chip chip-yearround">{F.subsidy[m.subsidyKey]}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                <div className="home-case-amount">{c.amount}</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>{F.groups.range} {amountRange(m.amountMan, locale)} · {periodLabel} {c.period}</div>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", margin: "6px 0 8px" }}>{c.company} · {c.subsidy}</div>
              <p className="home-case-text">{c.quote}</p>
              <span style={{ fontSize: 11, color: "var(--muted)", marginTop: 10 }}>{amountLabel}</span>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
