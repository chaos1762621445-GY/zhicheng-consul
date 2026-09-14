'use client';
import Link from "next/link";
import { useMemo, useState, type CSSProperties } from "react";
import type { Locale } from "@/lib/i18n/config";
import { localizedHref } from "@/lib/i18n/href";
import { CAT_LABEL, categorize, type Cat } from "@/lib/posts-category";
import { BLOG_PAGE_SIZE, blogPageCount, blogPagePath } from "@/lib/blog-pagination";

type P = { slug: string; title: string; date: string; excerpt?: string; keywords?: string[] };
const UI: Record<Locale, { search: string; count: (n: number) => string; page: (n: number, total: number) => string; pagination: string; prev: string; next: string; none: string }> = {
  zh: { search: "搜索标题或关键词…", count: (n) => `${n} 篇`, page: (n, total) => `第 ${n} / ${total} 页`, pagination: "文章分页", prev: "上一页", next: "下一页", none: "没有匹配的文章" },
  en: { search: "Search title or keywords…", count: (n) => `${n} articles`, page: (n, total) => `Page ${n} of ${total}`, pagination: "Article pages", prev: "Prev", next: "Next", none: "No matching articles" },
  ja: { search: "タイトル・キーワードで検索…", count: (n) => `${n}件`, page: (n, total) => `${n} / ${total} ページ`, pagination: "記事のページ", prev: "前へ", next: "次へ", none: "該当する記事がありません" },
};

const paginationStyle: CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 44, height: 44, borderRadius: 4, textDecoration: "none" };

export default function BlogList({ locale, posts, initialPage = 1 }: { locale: Locale; posts: P[]; initialPage?: number }) {
  const L = (p: string) => localizedHref(locale, p);
  const u = UI[locale];
  const [cat, setCat] = useState<Cat>("all");
  const [q, setQ] = useState("");
  const [filterPage, setFilterPage] = useState(1);
  const isFiltered = cat !== "all" || q.trim().length > 0;

  const tagged = useMemo(() => posts.map((p) => ({ ...p, cat: categorize(p.title, p.keywords, p.slug) })), [posts]);
  const filtered = useMemo(() => {
    const k = q.trim().toLowerCase();
    return tagged.filter((p) => (cat === "all" || p.cat === cat) && (!k || p.title.toLowerCase().includes(k) || (p.keywords || []).join(" ").toLowerCase().includes(k) || (p.excerpt || "").toLowerCase().includes(k)));
  }, [tagged, cat, q]);
  const pages = blogPageCount(filtered.length);
  const cur = Math.min(isFiltered ? filterPage : initialPage, pages);
  const slice = filtered.slice((cur - 1) * BLOG_PAGE_SIZE, cur * BLOG_PAGE_SIZE);
  const counts = useMemo(() => tagged.reduce<Record<string, number>>((a, p) => { a[p.cat] = (a[p.cat] || 0) + 1; return a; }, {}), [tagged]);
  const cats = (Object.keys(CAT_LABEL[locale]) as Cat[]).filter((c) => c === "all" || counts[c]);

  function pageControl(n: number, label: string | number, rel?: "prev" | "next") {
    const disabled = n < 1 || n > pages;
    const current = n === cur && !rel;
    if (disabled) {
      return <span className="need-tab" aria-disabled="true" style={{ ...paginationStyle, cursor: "default", opacity: 0.45 }}>{label}</span>;
    }
    if (isFiltered) {
      return <button type="button" className="need-tab" aria-pressed={current} aria-current={current ? "page" : undefined} onClick={() => setFilterPage(n)} style={paginationStyle}>{label}</button>;
    }
    if (current) {
      return <span className="need-tab" aria-current="page" style={{ ...paginationStyle, cursor: "default", background: "var(--brand)", borderColor: "var(--brand)", color: "#fff" }}>{label}</span>;
    }
    return <Link href={L(blogPagePath(n))} prefetch={false} rel={rel} className="need-tab" style={paginationStyle}>{label}</Link>;
  }

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div className="need-tabs" style={{ marginBottom: 0 }}>
          {cats.map((c) => (
            <button key={c} type="button" className="need-tab" aria-pressed={cat === c} onClick={() => { setCat(c); setFilterPage(1); }} style={{ minHeight: 44 }}>
              {CAT_LABEL[locale][c]}{c !== "all" && <span style={{ opacity: .6, marginLeft: 4 }}>{counts[c]}</span>}
            </button>
          ))}
        </div>
        <input type="search" value={q} onChange={(e) => { setQ(e.target.value); setFilterPage(1); }} placeholder={u.search} aria-label={u.search}
          style={{ height: 44, minWidth: 240, flex: "1 1 240px", maxWidth: 360, padding: "0 14px", border: "1px solid var(--line-strong)", borderRadius: 999, fontSize: 14, fontFamily: "inherit", background: "#fff" }} />
      </div>
      <div aria-live="polite" style={{ fontSize: 12.5, color: "var(--muted)", marginBottom: 10 }}>{u.count(filtered.length)}{filtered.length > 0 && <> · {u.page(cur, pages)}</>}</div>

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
        <nav aria-label={u.pagination} style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 28, flexWrap: "wrap" }}>
          {pageControl(cur - 1, u.prev, "prev")}
          {Array.from({ length: pages }, (_, i) => i + 1).filter((n) => n === 1 || n === pages || Math.abs(n - cur) <= 2).map((n, i, arr) => (
            <span key={n} style={{ display: "contents" }}>
              {i > 0 && arr[i - 1] !== n - 1 && <span style={{ color: "var(--muted)" }}>…</span>}
              {pageControl(n, n)}
            </span>
          ))}
          {pageControl(cur + 1, u.next, "next")}
        </nav>
      )}
    </>
  );
}
