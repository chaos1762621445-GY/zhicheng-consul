import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务流程",
  description: "志成コンサル补助金申请代办全流程：免费咨询→签约→材料准备→提交申请→获批。全程中文，无成功不收费。",
};

const steps = [
  { title: "免费咨询 & 资格判断", desc: "填写问卷或联系我们微信（pr2024188），3分钟了解您的企业适合哪种补助金，预计可获得多少金额。完全免费，无任何义务。" },
  { title: "签署委托合同", desc: "确认方案后签署服务合同。我们采用成功报酬制——申请未成功则不收取任何费用，真正零风险。" },
  { title: "材料收集 & 事业计划书制作", desc: "我们全程指导准备所需资料，由专业顾问撰写符合审查标准的事业计划书，全程中文沟通，日文材料我们负责。" },
  { title: "提交申请", desc: "代理您向主管部门（中小企業庁/厚生労働省/东京都等）提交申请，负责所有日文材料的整理和电子申报。" },
  { title: "审查跟进", desc: "审查期间持续跟进，如有补充材料要求立即响应，最大化通过概率。" },
  { title: "获批 & 事后报告", desc: "获批后指导您进行设备采购/研修实施，确保符合补助金使用规定，协助完成实绩报告，顺利领取补助金。" },
];

export default function ServicePage() {
  return (
    <main>
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">志成コンサル</Link>
          <div className="nav-links">
            <Link href="/subsidies" className="nav-link">补助金种类</Link>
            <Link href="/service" className="nav-link active">服务流程</Link>
            <Link href="/blog" className="nav-link">知识库</Link>
            <Link href="/contact" className="btn-primary">免费咨询</Link>
          </div>
        </div>
      </nav>

      <section className="section-light" style={{padding:"48px 24px", textAlign:"center"}}>
        <h1 style={{fontSize:36, fontWeight:300, color:"var(--heading)", letterSpacing:"-0.5px", marginBottom:12}}>服务流程</h1>
        <p style={{color:"var(--body)", fontSize:16}}>从咨询到获批，全程中文，无成功不收费</p>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="process-list">
            {steps.map((step, i) => (
              <div key={i} className="process-item">
                <div>
                  <div className="process-num">{String(i+1).padStart(2,'0')}</div>
                  {i < steps.length-1 && <div className="process-line" />}
                </div>
                <div className="process-body">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="section-inner">
          <div className="section-head">
            <h2>服务优势</h2>
            <p>在日华人企业专属顾问，不只是代办，是真正的专业伙伴</p>
          </div>
          <div className="feature-grid">
            {[
              { fi:"🀄", title:"全程中文", desc:"母语沟通，所有日文材料由我们处理" },
              { fi:"✅", title:"无成功不收费", desc:"申请未通过则零收费，真正零风险" },
              { fi:"📋", title:"专业持证团队", desc:"行政书士·税理士联合，材料合规" },
              { fi:"🔄", title:"一站式全包", desc:"从判断→申请→事后报告，全程包办" },
            ].map((f,i) => (
              <div key={i} className="feature-card">
                <div className="fi">{f.fi}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="cta-block" style={{maxWidth:560, margin:"0 auto"}}>
            <h2>立即开始第一步</h2>
            <p>免费咨询，了解您的企业适合哪种补助金</p>
            <div className="cta-btns">
              <Link href="/contact" className="btn-primary-lg">开始免费咨询 →</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 株式会社志成コンサル. All rights reserved.</p>
      </footer>
    </main>
  );
}
