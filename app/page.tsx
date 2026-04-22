import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import NavClient from "./components/NavClient";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import MotionSection from "./components/MotionSection";
import { ChevronRightIcon } from "lucide-react";

const CIconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:32,height:32}}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const CIconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:32,height:32}}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const CIconScale = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:32,height:32}}>
    <line x1="12" y1="3" x2="12" y2="21"/>
    <path d="M3 9l9-6 9 6"/>
    <path d="M3 15l6 4H3zM21 15l-6 4h6z"/>
  </svg>
);
const CIconAward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:32,height:32}}>
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);

const FIconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}>
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const FIconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const FIconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const FIconTrophy = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={{width:20,height:20}}>
    <polyline points="8 21 12 17 16 21"/>
    <path d="M17 4H7l1 7c0 2.2 1.8 4 4 4s4-1.8 4-4l1-7z"/>
    <path d="M3 7h1a3 3 0 0 0 3-3M21 7h-1a3 3 0 0 1-3-3"/>
  </svg>
);

export default async function HomePage() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  const credentials = [
    { icon: <CIconDoc />, name: "行政书士", role: "申请材料专家", desc: "专业负责补助金申请书类制作及各类行政许可手续" },
    { icon: <CIconUsers />, name: "社会保険労務士", role: "雇佣关系专家", desc: "专业负责雇佣关系助成金申请及劳务管理" },
    { icon: <CIconScale />, name: "税理士", role: "税务财务专家", desc: "专业负责财务会计及税务申报业务" },
    { icon: <CIconAward />, name: "中小企業診断士", role: "经营规划专家", desc: "专业负责经营战略制定及事业计划书撰写" },
  ];

  const whyUs = [
    { icon: <FIconGlobe />, title: "全中文，不用学日语", desc: "从第一次咨询到拿到钱，全程中文沟通，我们处理所有日语文件。" },
    { icon: <FIconShield />, title: "拿不到钱不收费", desc: "如果申请不成功，你不需要支付任何费用，零风险。" },
    { icon: <FIconStar />, title: "四类国家认证专家", desc: "不是普通中介，是有国家认证资格的专业人士：行政书士、社劳士、税理士、经营诊断士全部配齐。" },
    { icon: <FIconTrophy />, title: "3,000+ 真实成功案例", desc: "不是吹的，3,000+ 在日华人老板已经通过我们拿到补助金。" },
  ];

  const steps = [
    { step: "STEP 01", title: "免费咨询", desc: "微信联系我们，3分钟说清楚你的情况。" },
    { step: "STEP 02", title: "补助金诊断", desc: "我们告诉你能申请哪些、大概能拿多少。" },
    { step: "STEP 03", title: "方案确认", desc: "确认申请方向，你签字同意。" },
    { step: "STEP 04", title: "资料整理", desc: "你提供基础资料，我们负责翻译和整理。" },
    { step: "STEP 05", title: "专业递交", desc: "持牌专家代为递交，格式合规。" },
    { step: "STEP 06", title: "等待到账", desc: "审核通过后，资金直接到你账户。" },
  ];

  return (
    <main>
      <NavClient />
      <HeroSection />
      <StatsSection />
      <ServicesSection />

      {/* Credentials */}
      <section className="bg-[#F8FAFC] section-std">
        <div className="section-inner">
          <MotionSection style={{textAlign:'center', maxWidth:700, margin:'0 auto 48px'}}>
            <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-3.5">为什么放心交给我们</div>
            <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-4">持牌专家团队，你不用懂日语</h2>
            <p className="text-base text-[#64748d] leading-7 max-w-[560px] mx-auto">
              四类国家认证资格持有者分工合作，从材料准备到递交审核，你只需要配合提供资料，其他全交给我们。
            </p>
          </MotionSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {credentials.map((c, i) => (
              <MotionSection key={i} delay={i * 0.08}>
                <div className="bg-white border border-[#e5edf5] rounded-xl p-8 text-center hover:shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-[rgba(83,58,253,0.08)] rounded-full mx-auto mb-4 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <div className="text-lg font-semibold text-[#061b31] mb-2">{c.role}</div>
                  <div className="text-xs bg-[rgba(83,58,253,0.08)] text-[#533afd] px-3 py-0.5 rounded-full inline-block mb-3">{c.name}</div>
                  <p className="text-[13px] text-[#64748d] leading-[1.65] mt-2">{c.desc}</p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-std bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <MotionSection>
              <div
                className="rounded-2xl overflow-hidden min-h-[460px] hidden md:block"
                style={{ boxShadow: 'rgba(50,50,93,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.1) 0px 18px 36px -18px' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=640&q=80"
                  alt="志成コンサル专业团队"
                  className="w-full h-full min-h-[460px] object-cover block"
                />
              </div>
            </MotionSection>
            <div>
              <MotionSection>
                <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-3.5">选择我们的理由</div>
                <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-8">我们和其他中介有什么不同</h2>
              </MotionSection>
              <div className="flex flex-col">
                {whyUs.map((item, i) => (
                  <MotionSection key={i} delay={i * 0.08} className="flex gap-4 items-start mb-7">
                    <div className="flex-shrink-0 w-11 h-11 bg-[rgba(83,58,253,0.08)] rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-base font-semibold text-[#061b31] mb-1.5">{item.title}</div>
                      <p className="text-sm text-[#64748d] leading-7">{item.desc}</p>
                    </div>
                  </MotionSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-std bg-[#F8FAFC]">
        <div className="section-inner">
          <MotionSection style={{maxWidth:520, marginBottom:56}}>
            <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-3.5">申请流程</div>
            <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-4">申请流程很简单</h2>
            <p className="text-base text-[#64748d] leading-7">整个过程你需要做的很少，主要是配合提供资料，其他全程由我们处理。</p>
          </MotionSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <MotionSection key={i} delay={i * 0.07}>
                <div className="bg-white border border-[#e5edf5] border-l-4 border-l-[#533afd] rounded-xl p-7 hover:shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="inline-flex items-center justify-center bg-[#533afd] text-white rounded px-2.5 py-1 text-xs font-medium mb-4">{s.step}</div>
                  <div className="text-[17px] font-semibold text-[#061b31] mb-2.5">{s.title}</div>
                  <p className="text-sm text-[#64748d] leading-7">{s.desc}</p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-[#f6f9fc] section-std">
        <div className="section-inner">
          <MotionSection style={{maxWidth:560, marginBottom:56}}>
            <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-3.5">知识库</div>
            <h2 className="text-[clamp(28px,3.5vw,36px)] font-light text-[#061b31] tracking-tight leading-[1.1] mb-4">最新文章</h2>
            <p className="text-base text-[#64748d] leading-7">深度解析日本政府补助金政策，为在日华人企业主提供实用指南。</p>
          </MotionSection>
          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {recentPosts.map((post, i) => (
                <MotionSection key={post.slug} delay={i * 0.08}>
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="bg-white border border-[#e5edf5] rounded-xl p-7 hover:shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px] hover:-translate-y-0.5 transition-all duration-300">
                      <div className="text-xs text-[#64748d] mb-3">{post.date}</div>
                      <div className="text-base font-semibold text-[#061b31] leading-[1.45] mb-2.5 hover:text-[#533afd] transition-colors">{post.title}</div>
                      <p className="text-[13px] text-[#64748d] leading-7">{post.excerpt?.slice(0, 80)}...</p>
                      <div className="inline-flex items-center gap-1.5 text-sm font-medium text-[#533afd] mt-3.5">
                        阅读更多 <ChevronRightIcon className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </MotionSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-[#64748d] text-[15px]">文章加载中...</div>
          )}
          <div className="text-center mt-10">
            <Link href="/blog" className="inline-flex items-center gap-2 bg-white text-[#533afd] border border-[#b9b9f9] px-6 py-3 rounded-md font-medium text-base hover:bg-[rgba(83,58,253,0.05)] transition-colors">
              查看全部文章 <ChevronRightIcon className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #533afd 0%, #1c1e54 100%)' }}>
        {/* Decorative orbs */}
        <div
          className="absolute top-[-60px] left-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-60px] right-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-[640px] mx-auto px-6">
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-white tracking-tight mb-4 leading-[1.15]">
            不知道能拿多少？先问一下没有损失
          </h2>
          <p className="text-lg text-white/85 mb-10 leading-[1.75]">
            微信联系我们，免费告诉你能申请哪些补助金、大概能拿多少。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#533afd] px-8 py-3.5 rounded-md font-semibold text-base shadow-md hover:opacity-95 transition-opacity">
              立即免费咨询
            </Link>
            <Link href="/subsidies" className="inline-flex items-center gap-2 bg-transparent text-white border border-white/40 px-8 py-3.5 rounded-md font-medium text-base hover:bg-white/10 transition-colors">
              了解补助金种类
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
