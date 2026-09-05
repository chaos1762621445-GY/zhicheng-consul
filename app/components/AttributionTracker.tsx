"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { recordVisit, trackEvent } from "@/lib/attribution";

/**
 * 全站来源归因 + 企微/电话点击埋点。
 * - 每次路由变化记一次到访（首次来源只写一次，最近来源按外部来源刷新）。
 * - 事件委托：点击 work.weixin.qq.com/kfid 链接 → wechat_click；tel: → phone_click。
 *   只记事件名+页面路径，不采集任何联系方式。
 */
export default function AttributionTracker() {
  const pathname = usePathname();
  useEffect(() => { recordVisit(); }, [pathname]);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.includes("work.weixin.qq.com/kfid")) trackEvent("wechat_click", { where: a.dataset.zcWhere || a.className.slice(0, 40) });
      else if (href.startsWith("tel:")) trackEvent("phone_click");
      else if (href.includes("/contact")) trackEvent("contact_click");
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
