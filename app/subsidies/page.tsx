'use client';
import Link from "next/link";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, ArrowRightIcon } from "lucide-react";

type Subsidy = {
  slug?: string;
  tag: string;
  name: string;
  amount: string;
  rate: string;
  desc: string;
  conditions: string[];
  usage: string[];
};

const subsidies: Subsidy[] = [
  {
    slug: "seiryoka",
    tag: "省力化",
    name: "省力化补助金（一般型）",
    amount: "750 万〜8,000 万円",
    rate: "按员工规模分 5 档；补助率 1/2（小规模 2/3）",
    desc: "按员工规模定制方案，导入 DX 系统、自动化设备实现降本增效。补助上限：5 人以下 750 万、6〜20 人 1,500 万、21〜50 人 3,000 万、51〜100 人 5,000 万、101 人以上 8,000 万円（满足大幅涨薪特例最高 1 亿円）。公募回制、审查採択。",
    conditions: ["正在导入 DX 系统的企业", "想用 IT 或设备替代人工的企业", "人手不足、希望提升效率的企业", "希望降低系统导入成本的企业"],
    usage: ["DX 系统·ERP·CRM 导入", "生产线自动化设备 / 机器人", "POS 收银及订单管理系统", "自动仓库·物流系统建设"],
  },
  {
    slug: "ai-it",
    tag: "AI导入",
    name: "数字化·AI 导入补助金",
    amount: "通常枠最高 450 万円",
    rate: "补助率 1/2 以内；需经 IT 导入支援事业者共同申请",
    desc: "日本政府数字化转型专项扶持资金（旧称 IT 导入补助金），AI/IT 软件采购、系统定制、部署培训可申请。需选用官方登录的 IT 工具并经 IT 导入支援事业者共同申请，有公募締切轮次。",
    conditions: ["个人事业主·中小企业·小规模事业者", "赤字企业只要计划可行亦可申请", "须选用官方登录的 IT 工具", "须在公募締切前完成申请"],
    usage: ["AI/IT 软件采购（客服·营销·流程）", "系统定制开发", "云服务·硬件配套", "部署调试·员工培训"],
  },
  {
    slug: "career-up",
    tag: "助成金",
    name: "员工转正助成金",
    amount: "中小企业最高 80 万円/人",
    rate: "按雇用形态+是否重点支援对象判定 80/40/20 万",
    desc: "政府助力企业留住优秀员工。金额由「转正前雇用形态+是否重点支援对象」决定：有期→正社员重点对象 80 万/人、其他 40 万/人；无期→正社员 40/20 万/人（中小企业·分 2 期）。属要件满足原则支给的助成金。",
    conditions: ["须为雇用保险适用事业所", "被转换员工须以非正规身份雇用满 6 个月以上", "转换后须持续雇用 6 个月以上", "转换后薪资须提升 3% 以上"],
    usage: ["有期·重点对象转正（80 万/人）", "有期·其他转正（40 万/人）", "无期→正社员（40/20 万/人）", "派遣员工转为直接雇用"],
  },
  {
    slug: "training",
    tag: "助成金",
    name: "员工培训助成金",
    amount: "按コース 1,000 万〜1 亿円",
    rate: "经费助成率 45%〜75%＋赁金助成",
    desc: "人材開発支援助成金，按コース分年度事业所上限：人材育成支援 1,000 万、人への投資促進 2,500 万、事業展開等リスキリング支援 1 亿円（至令和8年度末的时限措置）。AI 实战等课程需符合官方训练认定。",
    conditions: ["须为雇用保险适用事业所", "训练开始前 1〜6 个月须提交计划届", "培训须由外部机构或认定 off-JT 形式实施", "受训员工须为雇用保险被保险者"],
    usage: ["AI 营销获客培训", "AI 运营自动化培训", "AI 数字效率工具培训", "AI 行情分析与决策培训"],
  },
  {
    slug: "aircon",
    tag: "节能补助",
    name: "空调节能改造补助",
    amount: "东京都最高 4,500 万円",
    rate: "东京都助成率最高 3/4（回次制·抽签）",
    desc: "东京都中小规模事业所空调等省エネ设备更新补助（クール・ネット东京）。按 CO2 削减量·诊断方式分 3 档，助成率最高 3/4、上限 4,500 万日元。回次制申请、预算超额时抽签。餐饮、学校、民宿、企业等均可申请。",
    conditions: ["在日本境内业务用途设施（非家用）", "将现有老旧空调更换为高效节能型", "新设备须满足节能基准（APF 等）", "须提出明确的节能计划"],
    usage: ["餐饮·门店空调更新", "学校·教育机构空调更新", "民宿·酒店客房空调", "工厂·仓库节能空调系统"],
  },
];

const tabCategories = [
  { value: "全部", label: "全部", items: subsidies },
  { value: "省力化", label: "省力化 / AI", items: subsidies.filter(s => s.tag === "省力化" || s.tag === "AI导入") },
  { value: "助成金", label: "助成金", items: subsidies.filter(s => s.tag === "助成金") },
  { value: "节能补助", label: "节能补助", items: subsidies.filter(s => s.tag === "节能补助") },
];

function SubsidyCard({ s }: { s: Subsidy }) {
  return (
    <Card style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 16 }}>
      <CardContent className="p-8">
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 24 }}>
          <div>
            <Badge style={{ marginBottom: 12, background: "var(--brand-bg)", color: "#1a5c5a", border: "1px solid var(--brand-mid)" }} className="hover:bg-[var(--brand-bg)]">
              {s.tag}
            </Badge>
            <div style={{ fontSize: 20, fontWeight: 700, color: "var(--ink)", marginBottom: 4 }}>{s.name}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#1a5c5a", letterSpacing: "-0.5px", lineHeight: 1, marginBottom: 4 }}>{s.amount}</div>
            <div style={{ fontSize: 14, color: "var(--ink-3)", marginTop: 4 }}>{s.rate}</div>
          </div>
        </div>
        <p style={{ fontSize: 14, color: "var(--ink-3)", lineHeight: 1.75, marginBottom: 24 }}>{s.desc}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", marginBottom: 12 }}>申请条件</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {s.conditions.map((c, j) => (
                <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--ink-3)" }}>
                  <CheckIcon style={{ width: 14, height: 14, color: "#1a5c5a", marginTop: 2, flexShrink: 0 }} strokeWidth={2} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", marginBottom: 12 }}>主要用途</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {s.usage.map((u, j) => (
                <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--ink-3)" }}>
                  <CheckIcon style={{ width: 14, height: 14, color: "#1a5c5a", marginTop: 2, flexShrink: 0 }} strokeWidth={2} />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {s.slug && (
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--line)", display: "flex", justifyContent: "flex-end" }}>
            <Link href={`/subsidies/${s.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "#1a5c5a", textDecoration: "none" }}>
              查看详情
              <ArrowRightIcon style={{ width: 14, height: 14 }} />
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function SubsidiesPage() {
  return (
    <main>
      <NavClient />

      <PageHero
        eyebrow="补助金种类 · Subsidies"
        title={<>主要补助金<br /><span style={{ color: 'var(--gold)' }}>与助成金一览</span></>}
        desc="志成コンサル代办的6种主要补助金·助成金详细介绍。申请条件及使用方法欢迎随时咨询。"
      />

      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="page-wrap">
          <Tabs defaultValue="全部">
            <TabsList style={{ marginBottom: 32, height: "auto", background: "#fff", border: "1px solid var(--line)", borderRadius: 12, padding: 4, display: "flex", gap: 4, flexWrap: "wrap" }}>
              {tabCategories.map(cat => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="px-5 py-2.5 text-sm rounded-md data-active:bg-[#1a5c5a] data-active:text-white data-active:shadow-none"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabCategories.map(cat => (
              <TabsContent key={cat.value} value={cat.value} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {cat.items.map((s, i) => (
                  <SubsidyCard key={i} s={s} />
                ))}
              </TabsContent>
            ))}
          </Tabs>

          <div style={{ textAlign: "center", marginTop: 64, paddingTop: 56, borderTop: "1px solid var(--line)" }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: "var(--ink)", marginBottom: 12 }}>哪种补助金最适合您？</div>
            <p style={{ fontSize: 15, color: "var(--ink-3)", marginBottom: 32, lineHeight: 1.75 }}>3分钟免费诊断，为您的企业精准匹配最优补助金方案。</p>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1a5c5a", color: "#fff", padding: "14px 36px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              开始免费诊断
              <ArrowRightIcon style={{ width: 14, height: 14 }} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
