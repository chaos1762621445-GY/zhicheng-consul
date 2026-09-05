"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { attributionQuery, trackEvent } from "@/lib/attribution";

const QUIZ_ORIGIN = "https://zhicheng-subsidy.surge.sh";
const QUIZ_BASE = `${QUIZ_ORIGIN}/`;

type Props = { client: string; lang?: "zh" | "ja"; title: string; height?: number };

/**
 * contact 页测评 iframe。
 * - src 追加首次/最近来源、lead_id、行为事件摘要（非 PII），子页面提交时随线索写入表格。
 * - 监听子页面 postMessage：只有 type=zc_lead_saved（子页面拿到服务端 result:success 后才发）才记 form_submit_success；
 *   按 lead_id+submit_id 去重；zc_form_start 记开始填写；zc_lead_unknown 记提交结果未知（不算成功）。
 * - 校验 e.origin === QUIZ_ORIGIN 且 e.source === iframe.contentWindow。
 */
export default function QuizFrame({ client, lang, title, height = 660 }: Props) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState<string>(`${QUIZ_BASE}?client=${encodeURIComponent(client)}${lang ? `&lang=${lang}` : ""}`);
  const seen = useMemo(() => new Set<string>(), []);

  useEffect(() => {
    // 客户端挂载后才有 localStorage 里的归因；SSR 先输出不带归因的基础 src，保证无 JS 也能用
    const q = attributionQuery({ client, ...(lang ? { lang } : {}) });
    setSrc(`${QUIZ_BASE}?${q}`);
  }, [client, lang]);

  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e.origin !== QUIZ_ORIGIN) return;
      if (!ref.current || e.source !== ref.current.contentWindow) return;
      const d = e.data;
      if (!d || typeof d !== "object" || typeof d.type !== "string") return;
      if (d.type === "zc_form_start") { trackEvent("form_start"); return; }
      if (d.type === "zc_lead_saved") {
        const key = `${d.lead_id || ""}:${d.submit_id || ""}`;
        if (!d.submit_id || seen.has(key)) return;
        seen.add(key);
        trackEvent("form_submit_success", { submit_id: String(d.submit_id).slice(0, 40) });
        return;
      }
      if (d.type === "zc_lead_unknown") { trackEvent("form_submit_unknown"); return; }
      if (d.type === "zc_resize" && typeof d.height === "number" && ref.current) {
        const h = Math.max(480, Math.min(2400, Math.round(d.height)));
        ref.current.style.height = `${h}px`;
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [seen]);

  return (
    <iframe
      ref={ref}
      src={src}
      style={{ width: "100%", height, border: "none", display: "block" }}
      title={title}
      loading="lazy"
    />
  );
}
