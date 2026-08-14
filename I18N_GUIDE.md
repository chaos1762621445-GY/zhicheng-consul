# 志成官网三语化（zh/en/ja）执行规范

本站已搭好 i18n 骨架，**首页是范本**（`app/page.tsx` → `app/components/HomeContent.tsx` + `messages/{zh,en,ja}.ts`）。
所有营销页/博客三语化必须遵循以下规范，保证结构与术语一致。

## 一、路由与目录约定
- **zh = 根路径无前缀**：`/service` `/about` `/blog/xxx`。zh 页面文件保持原位（如 `app/service/page.tsx`），**不动 URL**（零 SEO 回归）。
- **en/ja = 前缀子树**：`app/en/service/page.tsx` `app/ja/service/page.tsx`。
- 内部链接一律用 `localizedHref(locale, path)`（`@/lib/i18n/href`），传不带前缀的规范路径（如 `/contact`），它自动加前缀。外链/mailto/tel 原样返回。

## 二、内容组件模式（一处维护三语）
每个页面抽成 `app/components/XxxContent.tsx`，签名 `({ locale }: { locale: Locale })`：
```tsx
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localizedHref } from "@/lib/i18n/href";
import type { Locale } from "@/lib/i18n/config";
export default function XxxContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.xxx;               // 该页字典命名空间
  const L = (p: string) => localizedHref(locale, p);
  // 用 t.* 渲染文案，用 L('/path') 生成链接
  // Nav/Footer/CtaSection 传 locale={locale} dict={dict}
}
```
三个 page.tsx 各自：
```tsx
// app/service/page.tsx (zh)
export const metadata = buildPageMetadata({ locale:"zh", path:"/service", title, description });
export default function P(){ return <ServiceContent locale="zh" />; }
// app/en/service/page.tsx / app/ja/service/page.tsx 同理换 locale + 各自 title/description
```
metadata 用 `buildPageMetadata`（`@/lib/i18n/metadata`），自动产出 canonical + 三向 hreflang + og。

## 三、字典结构
`messages/zh.ts` 是权威结构（`as const` + `DeepWiden` 放宽类型）。为每页加一个命名空间（如 `service: {...}`）。
en.ts / ja.ts **必须保持完全相同的 key 结构**，只换值。数组长度必须一致。
`slug`（如 subsidies 的 seiryoka）三语共用不翻。

## 四、共享组件（已支持 locale）
`NavClient` `Footer` `HeroSection` `ServicesSection` `CtaSection` 都接收 `locale` + `dict`，传即可。
`WechatFloat` 自动从路径取语言，无需传。

## 五、术语表（三语必须统一，SEO 命门）

| 中文 | English | 日本語 |
|---|---|---|
| 补助金 | subsidy | 補助金 |
| 助成金 | grant | 助成金 |
| 省力化补助金 | Labor-Saving Subsidy | 省力化補助金 |
| AI导入补助金 / IT导入补助金 | AI / IT Adoption Subsidy | AI・IT導入補助金 |
| 员工转正助成金 | Career-Up (Regularization) Grant | キャリアアップ助成金 |
| 员工培训助成金 / 人材开发支援助成金 | Human Resource Development Grant | 人材開発支援助成金 |
| 空调节能补助 | Energy-Efficient AC Subsidy | 空調省エネ補助 |
| 持续化补助金 | Sustainability Subsidy | 持続化補助金 |
| 事业承继 | Business Succession | 事業承継 |
| 行政书士 | Gyoseishoshi (administrative scrivener) | 行政書士 |
| 税理士 | Zeirishi (tax accountant) | 税理士 |
| 社会保险劳务士 / 社劳士 | Sharoshi (labor & social security attorney) | 社会保険労務士 |
| 中小企业诊断士 | SME Management Consultant | 中小企業診断士 |
| 在日华人企业主 | Chinese business owners in Japan | 在日華人の企業経営者 |
| 不获批不收费 / 成功报酬制 | No approval, no fee / success-fee model | 不採択なら無料 / 成功報酬制 |
| 免费诊断 | free diagnosis | 無料診断 |
| 企业微信 | WeChat Work | 企業WeChat |
| 株式会社 志成コンサル | Shisei Consulting Co., Ltd. | 株式会社 志成コンサル |
| 公募締切 | public-offering deadline | 公募締切 |
| 补助率 | subsidy rate | 補助率 |

**金额/数字/比例照抄原文，绝不改动**（如「750万〜8,000万円」「92%」「3,000+」「¥8.5億」）。
金额单位在英文里保留 JPY，日文保留「円」。

## 六、合规红线（补助金文案，三语都适用）
禁「保证获批/一定通过/最快N个月到账」等承诺。涉及成败一律加「以主管机关审查结果为准」类表述
（en: "subject to the reviewing authority's decision"；ja:「審査結果によります／主管機関の審査によります」）。

## 七、验证
- `npx tsc --noEmit` 无该文件错误
- `npm run build` exit 0，路由树出现 `○ /en/xxx` `○ /ja/xxx`
- 起服 curl `/en/xxx` 含英文、`/ja/xxx` 含日文、canonical 与 hreflang 正确
- **无中文残留在 en 页**（除品牌名「志成コンサル」「株式会社」等专有名词）
