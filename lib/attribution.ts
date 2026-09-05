/**
 * 首次/最近来源归因（纯前端，只存非 PII 的来源信息，不含联系方式）。
 *
 * - 首次落地页 / 首次来源 / 首次 UTM：第一次到站时写入 localStorage，之后不覆盖。
 * - 最近来源：每次带 utm / 外部 referrer 到站时刷新。
 * - client=：合作渠道标识（客户官网 / 集团站 / 私域二维码），保留原语义，不与搜索来源混用。
 * - channel 推断规则保守：只有 referrer 是已知搜索引擎且无 utm 才标 organic_search；
 *   微信内置浏览器（UA 含 MicroMessenger）标 wechat_inapp；其余无信息一律 unknown，不编成自然搜索。
 */

export const ATTR_KEY = "zc_attr_v1";
export const EVENTS_KEY = "zc_events_v1";
export const LEAD_ID_KEY = "zc_lead_id_v1";

export type Touch = {
  ts: string;          // ISO
  landing: string;     // 落地页 path（不含 query 中的 PII；只保留 utm/client）
  ref_host: string;    // referrer hostname，空=未知/直接
  channel: string;     // organic_search | social | referral | wechat_inapp | partner | direct_or_unknown
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  client?: string;     // 合作渠道 client= 标识
};

export type Attribution = { first: Touch; last: Touch };

const SEARCH_HOSTS = ["google.", "bing.com", "yahoo.", "baidu.com", "duckduckgo.com", "so.com", "sogou.com", "yandex.", "ecosia.org", "naver.com"];
const SOCIAL_HOSTS = ["xiaohongshu.com", "xhslink.com", "weibo.", "douyin.com", "tiktok.com", "facebook.com", "instagram.com", "twitter.com", "x.com", "linkedin.com", "youtube.com", "bilibili.com", "zhihu.com"];

function safeHost(url: string): string {
  try { return new URL(url).hostname.toLowerCase(); } catch { return ""; }
}

function pickUtm(sp: URLSearchParams) {
  const out: Partial<Touch> = {};
  for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const) {
    const v = sp.get(k); if (v) out[k] = v.slice(0, 80);
  }
  const client = sp.get("client"); if (client) out.client = client.slice(0, 80);
  return out;
}

export function inferChannel(refHost: string, utm: Partial<Touch>, ua: string): string {
  if (utm.client) return "partner";
  if (utm.utm_source || utm.utm_medium) {
    const m = (utm.utm_medium || "").toLowerCase();
    if (m.includes("cpc") || m.includes("paid") || m.includes("ppc")) return "paid";
    if (m.includes("social")) return "social";
    if (m.includes("email")) return "email";
    return "campaign";
  }
  if (/MicroMessenger/i.test(ua)) return "wechat_inapp";
  if (!refHost) return "direct_or_unknown";
  if (refHost.endsWith("shisei-consult.jp")) return "internal";
  if (SEARCH_HOSTS.some((h) => refHost.includes(h))) return "organic_search";
  if (SOCIAL_HOSTS.some((h) => refHost.includes(h))) return "social";
  if (refHost.includes("shiseiconsult.com")) return "group_site";
  return "referral";
}

function buildTouch(): Touch {
  const sp = new URLSearchParams(window.location.search);
  const utm = pickUtm(sp);
  const refHost = safeHost(document.referrer);
  const keep = new URLSearchParams();
  for (const [k, v] of sp) if (k.startsWith("utm_") || k === "client") keep.set(k, v);
  const landing = window.location.pathname + (keep.toString() ? `?${keep}` : "");
  return {
    ts: new Date().toISOString(),
    landing: landing.slice(0, 200),
    ref_host: refHost,
    channel: inferChannel(refHost, utm, navigator.userAgent),
    ...utm,
  };
}

export function readAttribution(): Attribution | null {
  try { const raw = localStorage.getItem(ATTR_KEY); return raw ? (JSON.parse(raw) as Attribution) : null; } catch { return null; }
}

/** 每次页面加载调用一次（RootShell 的 AttributionTracker）。 */
export function recordVisit(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const t = buildTouch();
    const cur = readAttribution();
    const isExternal = t.channel !== "internal" && (t.ref_host !== "" || !!t.utm_source || !!t.client || t.channel === "wechat_inapp");
    if (!cur) {
      const a = { first: t, last: t }; localStorage.setItem(ATTR_KEY, JSON.stringify(a)); return a;
    }
    if (isExternal) {
      const a = { first: cur.first, last: t }; localStorage.setItem(ATTR_KEY, JSON.stringify(a)); return a;
    }
    return cur;
  } catch { return null; }
}

/** 稍后由 iframe/表单侧写入服务端的唯一线索编号（每个浏览器一份，提交去重用）。 */
export function getLeadId(): string {
  try {
    let id = localStorage.getItem(LEAD_ID_KEY);
    if (!id) {
      id = (crypto?.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`);
      localStorage.setItem(LEAD_ID_KEY, id);
    }
    return id;
  } catch { return `${Date.now().toString(36)}`; }
}

export type ZcEvent = { name: string; ts: string; path: string; meta?: Record<string, string> };

/** 记录行为事件（本地环形缓冲，最多 50 条）。提交时随线索一并发送，不含联系方式。 */
export function trackEvent(name: string, meta?: Record<string, string>) {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(EVENTS_KEY);
    const arr: ZcEvent[] = raw ? JSON.parse(raw) : [];
    arr.push({ name, ts: new Date().toISOString(), path: window.location.pathname, meta });
    localStorage.setItem(EVENTS_KEY, JSON.stringify(arr.slice(-50)));
    window.dispatchEvent(new CustomEvent("zc:event", { detail: { name, meta } }));
  } catch { /* ignore */ }
}

export function readEvents(): ZcEvent[] {
  try { const raw = localStorage.getItem(EVENTS_KEY); return raw ? JSON.parse(raw) : []; } catch { return []; }
}

/** 传给 iframe（测评工具）的来源参数。只放非 PII 字段。 */
export function attributionQuery(extra?: Record<string, string>): string {
  const a = readAttribution();
  const q = new URLSearchParams(extra || {});
  q.set("lead_id", getLeadId());
  if (a) {
    q.set("first_landing", a.first.landing);
    q.set("first_ref", a.first.ref_host || "");
    q.set("first_channel", a.first.channel);
    if (a.first.utm_source) q.set("first_utm", `${a.first.utm_source}/${a.first.utm_medium || ""}/${a.first.utm_campaign || ""}`);
    q.set("last_ref", a.last.ref_host || "");
    q.set("last_channel", a.last.channel);
    if (a.last.utm_source) q.set("last_utm", `${a.last.utm_source}/${a.last.utm_medium || ""}/${a.last.utm_campaign || ""}`);
  }
  q.set("submit_page", typeof window !== "undefined" ? window.location.pathname : "");
  const ev = readEvents().map((e) => e.name);
  if (ev.length) q.set("events", Array.from(new Set(ev)).slice(0, 12).join(","));
  return q.toString();
}
