<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 志成コンサル官网 — 项目上下文

## 这个网站是什么
面向**在日华人中小企业主**的补助金申请代办咨询公司官网（简体中文为主，日文版为独立站 shiseiconsult.com，已互挂 hreflang）。
正式域名：https://shisei-consult.jp （Vercel 部署，push main 即自动上线）

## 网站唯一目标（转化定义）
**让访客扫码加微信客服 / 提交 contact 表单，进入免费诊断。**
一切页面、文案、设计都为这一个转化服务——不是展示型官网，是获客型官网。
判断任何改动的标准：是否让"华人老板更信任我们并愿意咨询"。

## 目标用户画像
- 在日经营餐饮/美容/贸易/IT/建筑等的华人老板，30-55岁
- 日语读写能力参差，**对日文政府文件天然畏难**——中文全程服务是核心卖点
- 手机微信重度用户：**移动端体验优先级 ≥ 桌面端**
- 决策靠信任：实绩数字、案例、专业资质比华丽视觉更能转化

## 核心卖点（文案层级从高到低）
1. 全程中文·不获批不收费（成功报酬制）
2. 行政书士·税理士·社劳士·诊断士联合团队
3. 实绩数字：3000+企业·8.5亿円获批·92%通过率
4. 覆盖补助金全类型（省力化/IT导入/事业承继/东京都空调·ゼロエミ等）

## 技术栈与约定
- Next.js（App Router）+ Tailwind v4 + shadcn，全站尽量 Server Components
- 设计系统见 `design.md`（改任何视觉前必读）
- SEO/GEO 资产：sitemap.ts / robots.ts / llms.txt route / opengraph-image.tsx / 全站 JSON-LD / hreflang（中日双向）——**改动页面时不得破坏这些**
- NAP 统一口径：東京都新宿区高田馬場1-25-32 7階 / 03-6265-9756 / info@shisei-consult.jp（六处同步，改一处必须全改）

## 上线流程
1. `npm run build` 必须 0 error
2. 本地 `npx next start` 双视口（390px / 1280px）浏览器实测
3. git push → Vercel 自动部署 → 等 ~90s 用 curl 验证线上 200 + 关键内容
4. 涉及导航/新页面时同步检查 sitemap 与内链
