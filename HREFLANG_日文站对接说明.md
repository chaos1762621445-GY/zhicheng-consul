# 给同事：shiseiconsult.com（日文站）hreflang 更新说明

## 背景
中文官网 shisei-consult.jp 已升级为**三语站**（中文 / English / 日本語，日语在 `/ja` 路径）。
因此中文站的 hreflang 已改为「本站三语自成体系」，日语版指向 `shisei-consult.jp/ja`。

## 现状冲突（需要日文站配合）
原来两站是「中文站 ↔ 日文站」双向 hreflang 握手。现在中文站这半边已改成指向自己的 `/ja`。
若 shiseiconsult.com 仍声明「我的中文版=shisei-consult.jp」，两边 hreflang 就对不上，Google 会忽略。

## 需要日文站做的（二选一）

### 方案 A（推荐·简单）：日文站移除对 shisei-consult.jp 的 hreflang 声明
两站从此各自独立，互不做 hreflang 对应。日文站保留 Footer 的普通互链即可（传递权重、不影响）。
即：删掉 shiseiconsult.com `<head>` 里所有 `<link rel="alternate" hreflang="zh-*" href="https://shisei-consult.jp...">` 标签。

### 方案 B（若想继续做跨站语言对应）：日文站把中文版指向 `/`、并新增指向 `/ja` 无意义——不推荐
跨两个独立域名做 hreflang 维护成本高，且现在中文站自带日语版，方案 A 更干净。

## 结论
**最省事 = 方案 A**：让日文站移除 zh-hreflang 声明。
中文站三语已闭环（zh=根路径、en=/en、ja=/ja，三向 hreflang 已在 shisei-consult.jp 全站生效）。

Footer 互链（shisei-consult.jp Footer 有「日文官网」链接指 shiseiconsult.com）保留不变，那是正常导流+权重传递，与 hreflang 无关。
