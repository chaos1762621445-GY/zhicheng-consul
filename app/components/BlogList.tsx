'use client';
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { localizedHref } from "@/lib/i18n/href";
import { CAT_LABEL, categorize, type Cat } from "@/lib/posts-category";

type P = { slug: string; title: string; date: string; excerpt?: string; keywords?: string[] };
const PAGE = 20;
const UI: Record<Locale, { search: string; count: (n: number) => string; prev: string; next: string; none: string }> = {
  zh: { search: "搜索标题或关键词…", count: (n) => `${n} 篇`, prev: "上一页", next: "下一页", none: "没有匹配的文章" },
  en: { search: "Search title or keywords…", count: (n) => `${n} articles`, prev: "Prev", next: "Next", none: "No matching articles" },
  ja: { search: "タイトル・キーワードで検索…", count: (n) => `${n}件`, prev: "前へ", next: "次へ", none: "該当する記事がありません" },
};

export default function BlogList({ locale, posts }: { locale: Locale; posts: P[] }) {
  const L = (p: string) => localizedHref(locale, p);
  const u = UI[locale];
  const [cat, setCat] = useState<Cat>("all");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const tagged = useMemo(() => posts.map((p) => ({ ...p, cat: categorize(p.title, p.keywords, p.slug) })), [posts]);
  const filtered = useMemo(() => {
    const k = q.trim().toLowerCase();
    return tagged.filter((p) => (cat === "all" || p.cat === cat) && (!k || p.title.toLowerCase().includes(k) || (p.keywords || []).join(" ").toLowerCase().includes(k) || (p.excerpt || "").toLowerCase().includes(k)));
  }, [tagged, cat, q]);
  const pages = Math.max(1, Math.ceil(filtered.length / PAGE));
  const cur = Math.min(page, pages);
  const slice = filtered.slice((cur - 1) * PAGE, cur * PAGE);
  const counts = useMemo(() => tagged.reduce<Record<string, number>>((a, p) => { a[p.cat] = (a[p.cat] || 0) + 1; return a; }, {}), [tagged]);
  const cats = (Object.keys(CAT_LABEL[locale]) as Cat[]).filter((c) => c === "all" || counts[c]);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div className="need-tabs" style={{ marginBottom: 0 }}>
          {cats.map((c) => (
            <button key={c} type="button" className="need-tab" aria-pressed={cat === c} onClick={() => { setCat(c); setPage(1); }}>
              {CAT_LABEL[locale][c]}{c !== "all" && <span style={{ opacity: .6, marginLeft: 4 }}>{counts[c]}</span>}
            </button>
          ))}
        </div>
        <input type="search" value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} placeholder={u.search} aria-label={u.search}
          style={{ height: 40, minWidth: 240, flex: "1 1 240px", maxWidth: 360, padding: "0 14px", border: "1px solid var(--line-strong)", borderRadius: 999, fontSize: 14, fontFamily: "inherit", background: "#fff" }} />
      </div>
      <div style={{ fontSize: 12.5, color: "var(--muted)", marginBottom: 10 }}>{u.count(filtered.length)}</div>

      {slice.length === 0 ? <div className="case-empty">{u.none}</div> : (
        <div className="ed-rows" style={{ background: "var(--surface)", padding: "0 32px" }}>
          {slice.map((post) => (
            <Link key={post.slug} href={L(`/blog/${post.slug}`)} prefetch={false} className="ed-row" style={{ textDecoration: "none" }}>
              <span style={{ fontSize: 12.5, color: "var(--muted)", fontVariantNumeric: "tabular-nums" }}>{post.date}</span>
              <div>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6, flexWrap: "wrap" }}>
                  <span className={`chip ${post.cat === "report" ? "chip-upcoming" : "chip-yearround"}`} style={{ height: 22, fontSize: 11 }}>{CAT_LABEL[locale][post.cat]}</span>
                </div>
                <div className="serif" style={{ fontSize: 17, fontWeight: 700, color: "var(--ink)", marginBottom: 6, lineHeight: 1.5 }}>{post.title}</div>
                <p style={{ fontSize: 14, color: "var(--body)", lineHeight: 1.7, maxWidth: "72ch" }}>{(post.excerpt || "").slice(0, 100)}...</p>
              </div>
              <span style={{ color: "var(--brand)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </Link>
          ))}
        </div>
      )}

      {pages > 1 && (
        <nav aria-label="pagination" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 28, flexWrap: "wrap" }}>
          <button type="button" className="need-tab" disabled={cur === 1} onClick={() => setPage(cur - 1)}>{u.prev}</button>
          {Array.from({ length: pages }, (_, i) => i + 1).filter((n) => n === 1 || n === pages || Math.abs(n - cur) <= 2).map((n, i, arr) => (
            <span key={n} style={{ display: "contents" }}>
              {i > 0 && arr[i - 1] !== n - 1 && <span style={{ color: "var(--muted)" }}>…</span>}
              <button type="button" className="need-tab" aria-pressed={n === cur} onClick={() => setPage(n)}>{n}</button>
            </span>
          ))}
          <button type="button" className="need-tab" disabled={cur === pages} onClick={() => setPage(cur + 1)}>{u.next}</button>
        </nav>
      )}
    </>
  );
}
