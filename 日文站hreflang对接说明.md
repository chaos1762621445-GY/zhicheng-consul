# 日文站 hreflang 对接说明（shiseiconsult.com）

> 目的：让中日双语官网（`shisei-consult.jp` 中文站 ／ `shiseiconsult.com` 日文站）在 Google / AI 搜索引擎眼中正确互为「语言对应版本」，避免被判重复内容、避免给用户显示错语言版本，并集中 SEO 权重。
>
> 背景：中文站（`shisei-consult.jp`）这一侧的 hreflang 已于本次上线完成。**hreflang 是双向握手协议——日文站不回指，中文站这侧的声明就会被 Google 忽略。** 因此本文档两步必须都完成，前面的工作才生效。

---

## 现状诊断

| 项目 | 中文站 shisei-consult.jp | 日文站 shiseiconsult.com |
|---|---|---|
| hreflang 标签 | ✅ 已加（zh↔ja 双向声明） | ❌ 无（待加） |
| 指向对方的链接 | ✅ Footer 正确指向 shiseiconsult.com | ⚠️ Footer 指向旧域名 `zhicheng-consul.vercel.app` |

**结论：日文站需要做两件事——① 修正指错的旧域名链接；② 补上 hreflang 标签。**

---

## ① 修正 Footer 里的中文站链接

日文站 Footer 有一条「中国語対応 補助金サポート（在日華人企業向け）」链接，当前 href 指向旧的 Vercel 临时域名，需改为正式域名：

```
现在：  https://zhicheng-consul.vercel.app/
改成：  https://shisei-consult.jp
```

> 为什么重要：指向 `vercel.app` 旧域名会让 hreflang 双向关系对不上（无法闭环），且分散 SEO 权重、可能触发重复内容判定。

---

## ② 在日文站加 hreflang 标签（与中文站镜像对应）

### 情况 A：日文站是 Next.js（App Router）

在 `app/layout.tsx` 的 `metadata` 里加 `alternates`：

```ts
export const metadata = {
  // ...原有配置保持不变...
  alternates: {
    canonical: "https://shiseiconsult.com",
    languages: {
      "ja": "https://shiseiconsult.com",
      "ja-JP": "https://shiseiconsult.com",
      "zh-CN": "https://shisei-consult.jp",
      "zh-Hans": "https://shisei-consult.jp",
      "x-default": "https://shisei-consult.jp",
    },
  },
};
```

### 情况 B：日文站是纯 HTML / 其他框架

直接在 `<head>` 里贴这 5 行：

```html
<link rel="alternate" hreflang="ja" href="https://shiseiconsult.com" />
<link rel="alternate" hreflang="ja-JP" href="https://shiseiconsult.com" />
<link rel="alternate" hreflang="zh-CN" href="https://shisei-consult.jp" />
<link rel="alternate" hreflang="zh-Hans" href="https://shisei-consult.jp" />
<link rel="alternate" hreflang="x-default" href="https://shisei-consult.jp" />
```

---

## 参照：中文站已生效的 hreflang（供核对镜像关系）

中文站 `shisei-consult.jp` 首页 `<head>` 现已输出：

```html
<link rel="alternate" hreflang="zh-CN" href="https://shisei-consult.jp" />
<link rel="alternate" hreflang="zh-Hans" href="https://shisei-consult.jp" />
<link rel="alternate" hreflang="ja" href="https://shiseiconsult.com" />
<link rel="alternate" hreflang="ja-JP" href="https://shiseiconsult.com" />
<link rel="alternate" hreflang="x-default" href="https://shisei-consult.jp" />
```

**关键：两边的 hreflang 内容必须完全一致（同样这 5 条），只是各自的 canonical 指向自己。** 这样才构成合法的双向对应。

---

## 完成后如何验证

1. 两边都上线后，打开在线工具 **hreflang.org**（或 technicalseo.com 的 hreflang 测试器），分别输入两个域名，确认「双向对应，无 return-tag 错误」。
2. 或在 **Google Search Console** →「国际定位 / Legacy tools」查看 hreflang 报告，确认无「缺少返回标签」告警。
3. 命令行快速自查（两边都应输出相同的 5 条）：
   ```bash
   curl -s https://shiseiconsult.com/    | grep -i hreflang
   curl -s https://shisei-consult.jp/    | grep -i hreflang
   ```
   ⚠️ 注意：若日文站是 JS 渲染（SPA），`curl` 可能抓不到，需用浏览器「查看页面源代码」或 Search Console 确认。建议 hreflang 尽量放在服务端渲染的 `<head>`，确保爬虫无需执行 JS 就能读到。

---

## 补充说明：目前只做首页↔首页对应

因为中日文站是两个独立域名、页面结构也不同（中文站十几个页面 vs 日文站单页多锚点），当前 hreflang 只做**首页 ↔ 首页**这一层，这是正确且足够的。

未来若日文站扩展为多页面、且能与中文页一一对应（如 中文 `/subsidies` ↔ 日文 `/subsidies`），再逐页补 hreflang，收益最大。届时每一对对应页面都要各自声明指向对方，规则同上。

---

*文档生成：本次 SEO/GEO 优化任务｜中文站侧已完成并上线，本文件供日文站 `shiseiconsult.com` 维护方执行。*
