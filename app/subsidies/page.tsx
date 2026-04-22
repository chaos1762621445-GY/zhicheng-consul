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
    amount: "最高 1,500 万円",
    rate: "6-20 人最高 1,500 万；5 人以下最高 750 万；整体上限 1 亿",
    desc: "根据企业规模定制方案，导入 DX 系统、自动化设备实现降本增效、减少人工依赖。补助率最高 50%，企业只需承担剩余 50% 的费用，大幅降低数字化转型和自动化升级成本。",
    conditions: ["正在导入 DX 系统的企业", "想用 IT 或设备替代人工的企业", "人手不足、希望提升效率的企业", "希望降低系统导入成本的企业"],
    usage: ["DX 系统·ERP·CRM 导入", "生产线自动化设备 / 机器人", "POS 收银及订单管理系统", "自动仓库·物流系统建设"],
  },
  {
    slug: "ai-it",
    tag: "AI导入",
    name: "AI 导入补助金",
    amount: "最高 350 万円",
    rate: "个人事业主·赤字企业均可，无员工规模限制",
    desc: "日本政府数字化转型专项扶持资金，AI 软件采购、系统定制开发、部署调试、员工培训全流程补贴。门槛宽松，个人事业主、处于经营赤字状态的企业均可申请。",
    conditions: ["个人事业主（自由职业者·个体工商户）均可", "赤字企业只要计划可行亦可申请", "须有明确的 AI 导入计划", "不受员工数量限制"],
    usage: ["AI 软件采购（客服·营销·流程 AI）", "AI 系统定制开发", "AI 硬件设备购置（GPU·服务器等）", "AI 部署调试·员工培训"],
  },
  {
    slug: "career-up",
    tag: "助成金",
    name: "员工转正助成金",
    amount: "最高 80 万円/人",
    rate: "在职半年以上 40 万／非新卒首次 80 万",
    desc: "政府助力企业留住优秀员工。在职半年以上的非正规员工转正每人 40 万日元；有工作经验的非应届毕业生首次转正每人 80 万日元。与员工培训助成金同步申请时补贴翻倍。",
    conditions: ["须为雇用保险适用事业所", "被转换员工须以非正规身份雇用满 6 个月以上", "转换后须持续雇用 6 个月以上", "转换后薪资须提升 3% 以上"],
    usage: ["在职半年以上员工转正（40 万/人）", "非新卒首次转正（80 万/人）", "派遣员工转为直接雇用", "有期雇用转为无期雇用"],
  },
  {
    slug: "training",
    tag: "助成金",
    name: "员工培训助成金",
    amount: "最高 1 亿円",
    rate: "每人百万级；与转正同步申请补贴翻倍",
    desc: "聚焦 AI 实战能力提升，最高 1 亿日元。AI 营销获客、AI 运营自动化、AI 数字效率工具、AI 行情分析与决策等课程均可纳入，每人百万级资金支持，让企业竞争力持续放大。",
    conditions: ["须为雇用保险适用事业所", "训练开始前 1 个月须提交计划书", "培训须由外部机构或认定 off-JT 形式实施", "受训员工须为雇用保险被保险者"],
    usage: ["AI 营销获客培训", "AI 运营自动化培训", "AI 数字效率工具培训", "AI 行情分析与决策培训"],
  },
  {
    slug: "aircon",
    tag: "节能补助",
    name: "空调节能改造补助",
    amount: "东京 1,000 万 / 大阪 500 万 / 全国最高 3 亿",
    rate: "东京零负担（政府 2/3 + 我社 1/3）；其他地区政府补贴 1/2",
    desc: "政府绿色能源项目，旧空调以旧换新。东京限定零负担方案——政府补 2/3、我社补剩余 1/3，企业实现真正零成本换新。餐饮、学校、民宿、企业等各类主体均可申请。",
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
    <Card style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16 }}>
      <CardContent className="p-8">
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 24 }}>
          <div>
            <Badge style={{ marginBottom: 12, background: "rgba(30,64,175,0.1)", color: "#1e40af", border: "1px solid rgba(30,64,175,0.2)" }} className="hover:bg-[rgba(30,64,175,0.1)]">
              {s.tag}
            </Badge>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>{s.name}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#1e40af", letterSpacing: "-0.5px", lineHeight: 1, marginBottom: 4 }}>{s.amount}</div>
            <div style={{ fontSize: 14, color: "#475569", marginTop: 4 }}>{s.rate}</div>
          </div>
        </div>
        <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.75, marginBottom: 24 }}>{s.desc}</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>申请条件</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {s.conditions.map((c, j) => (
                <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "#475569" }}>
                  <CheckIcon style={{ width: 14, height: 14, color: "#1e40af", marginTop: 2, flexShrink: 0 }} strokeWidth={2} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>主要用途</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {s.usage.map((u, j) => (
                <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "#475569" }}>
                  <CheckIcon style={{ width: 14, height: 14, color: "#1e40af", marginTop: 2, flexShrink: 0 }} strokeWidth={2} />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {s.slug && (
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #e2e8f0", display: "flex", justifyContent: "flex-end" }}>
            <Link href={`/subsidies/${s.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "#1e40af", textDecoration: "none" }}>
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
        title={<>主要补助金<br /><span style={{ color: 'var(--brand)' }}>与助成金一览</span></>}
        desc="志成コンサル代办的6种主要补助金·助成金详细介绍。申请条件及使用方法欢迎随时咨询。"
      />

      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="page-wrap">
          <Tabs defaultValue="全部">
            <TabsList style={{ marginBottom: 32, height: "auto", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 4, display: "flex", gap: 4, flexWrap: "wrap" }}>
              {tabCategories.map(cat => (
                <TabsTrigger
                  key={cat.value}
                  value={cat.value}
                  className="px-5 py-2.5 text-sm rounded-md data-active:bg-[#1e40af] data-active:text-white data-active:shadow-none"
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

          <div style={{ textAlign: "center", marginTop: 64, paddingTop: 56, borderTop: "1px solid #e2e8f0" }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 12 }}>哪种补助金最适合您？</div>
            <p style={{ fontSize: 15, color: "#475569", marginBottom: 32, lineHeight: 1.75 }}>3分钟免费诊断，为您的企业精准匹配最优补助金方案。</p>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#1e40af", color: "#fff", padding: "14px 36px", borderRadius: 8, fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
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
