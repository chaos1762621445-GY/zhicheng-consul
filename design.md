# design.md — 志成コンサル官网 设计系统

> 改任何视觉之前必读。本文件是唯一设计裁判：与本文件冲突的"顺手美化"一律不做。
> 系统目标：**「和风编辑部 × 专业事务所」**——像一本严谨的日式刊物，而不是 SaaS 落地页。

## 0. 反同质化红线（AI 常见套路，一律禁止）
- ❌ 紫色/蓝紫渐变、玻璃拟态(glassmorphism)、大圆角(>14px)胶囊卡片堆叠
- ❌ emoji 当图标、彩色渐变文字、无意义的 3D 插画/贴纸风素材
- ❌ 每区块一个"圆角灰卡"的 shadcn 默认脸；组件库默认样式必须过品牌化改造
- ❌ 居中大标题+两个按钮+三列卡片的万能模板连用两个区块以上
- ✅ 用「hairline 细线、衬线标题、金色小序号、留白节奏」制造编辑感

## 1. 色彩（tokens 已在 globals.css 定义，直接用变量）
| 角色 | 变量 | 值 | 用法 |
|---|---|---|---|
| 主结构 teal | `--brand` | #1a5c5a | 标题重色、主按钮、链接 hover |
| 深 teal | `--brand-dark/deep` | #124442/#0f3937 | 深色区块背景、页脚 |
| 点睛金 | `--gold` | #c4a23a | 序号、eyebrow 前缀线、强调词——**每屏最多一处金色焦点** |
| 亮金 | `--gold-bright` | #d9bd5e | 深色底上的金 |
| 墨黑 | `--ink` | #1d1d1f | 正文标题 |
| 暖白面 | `--surface-warm` | #f7f4ee | 交替区块底色 |
| 发丝线 | `--line` | #e3ece9 | 全站分隔线，1px，不用重边框 |
- 配色纪律：teal 立骨、gold 点睛、暖白呼吸。**禁止引入第四种彩色**（语义色 danger/success 除外）。

## 2. 字体
- 标题：`Noto Serif SC`（.serif / h-display / h-section 已封装）——品牌声音，必须衬线
- 正文/UI：Inter + PingFang SC 栈（body 默认）
- 数字强调：衬线 + 金色单位小字（参考首页 Stats 区）
- 字号节奏：display clamp(40~64) / section 32~40 / 卡题 18~20 / 正文 15~16 / 注 12~13
- 行高：标题 1.2~1.35，正文 1.75~1.9；中文禁止 letter-spacing 负值

## 3. 版式与节奏
- 容器：max-width 1200px；区块垂直 `.section` = 96px（移动端自动降）
- 区块节奏模板：`eyebrow(金线+小字) → 衬线大标题 → 一句副题 → 内容`
- 编号语言：分类/团队/流程用**金色描边大序号（01 02 03…）**，这是全站身份符号
- 交替底色：白 → 暖白 → 深teal 穿插，避免连续同底
- 列表用 hairline 行表（参考 FAQ V2），不用圆角卡片堆
- 圆角：卡片 ≤8px（--r-lg），按钮 4px；**禁止 xl 以上大圆角**

## 4. 组件规范（已封装，直接用类）
- 按钮：`.btn-fill`(墨黑→hover深) / `.btn-gold` / `.btn-ghost` / 深底用 `.btn-white|outline-white`；一屏一个主 CTA
- 卡片：`.card`(hairline+hover 浮起) / `.card-premium`(金线 hover)；卡片内禁止再嵌卡片
- eyebrow：`.eyebrow`（金短线前缀）/ 深底 `.eyebrow-white`
- 动效：入场用 `.reveal`（0.7s，IntersectionObserver 加 .visible），页面切换有 PageCurtain——**不再新增动效库**；尊重 prefers-reduced-motion
- 图标：lucide 线性图标，1.5~2px 描边，teal 或 ink 单色——禁止彩色/填充 emoji 图标

## 5. 图像
- 禁止通用 stock 商务握手照/白人办公室照——与客群（在日华人老板）不符
- 优先：品牌几何纹理（teal/gold 线条、和纸质感）、真实数据可视化、衬线大数字
- 人物照仅限真实团队/客户案例；所有装饰图形用 CSS/SVG 实现优先，位图其次
- OG/分享图已品牌化（opengraph-image.tsx），新页面不要另起炉灶

## 6. 移动端（优先级最高）
- 390px 视口逐页验证是必修，不是选修；触控目标 ≥44px
- 导航/浮动微信按钮(WechatFloat)不得遮挡正文与 CTA
- 表格类内容在移动端转「行卡」或横向滚动，禁止挤压变形

## 7. 性能预算
- LCP < 2.5s / CLS < 0.1；首页 JS 传输 < 200KB gzip
- 字体：Google Fonts 仅取用到的字重；图片一律 next/image 或显式宽高防 CLS
- 新增依赖前先问：能否用现有 CSS 类实现？>10KB 的库默认拒绝

## 8. 验证清单（每次视觉改动后）
1. `npm run build` 0 error
2. 390px + 1280px 双视口截图自查（对照本文件红线）
3. 检查 SEO 资产未被破坏（title/JSON-LD/hreflang/llms.txt）
4. 上线后 curl 验证 200 + 新特征字符串
