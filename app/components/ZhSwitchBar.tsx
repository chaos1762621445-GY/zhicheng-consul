"use client";
import { usePathname } from "next/navigation";

/**
 * 英文页顶部「中文版」切换条。
 * 依据 GSC 2026-09：AI 概览/自然搜索引用本站几乎只引英文译文（758/836），
 * 但目标客户是在日华人——把英文入口流量导回中文原文/留资。
 * 服务端可静态渲染（无 hooks 依赖 window），仅用 pathname 算对应中文路径。
 */
export default function ZhSwitchBar() {
  const pathname = usePathname() || "/en";
  const zhPath = pathname === "/en" ? "/" : pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return (
    <div className="zc-zhbar" role="note">
      <span>本站为在日华人企业提供中文补助金申请服务</span>
      <a href={zhPath} hrefLang="zh-Hans" className="zc-zhbar-link">查看中文版 →</a>
      <a href="/contact" className="zc-zhbar-cta">免费诊断</a>
    </div>
  );
}
