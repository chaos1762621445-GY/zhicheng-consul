import Link from "next/link";
import { getAllPosts, getAllPostsLocalized, type PostMeta } from "@/lib/posts";
import NavClient from "./NavClient";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";
import Reveal from "./Reveal";
import CtaSection from "./CtaSection";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { localizedHref } from "@/lib/i18n/href";
import type { Locale } from "@/lib/i18n/config";

// ── 专业线性 SVG 图标 ──
const Icon = ({ d, size = 22 }: { d: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {d.split('|').map((p, i) => <path key={i} d={p} />)}
  </svg>
);
const ICONS = {
  chat: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z|M9 12l2 2 4-4",
  check: "M22 11.08V12a10 10 0 1 1-5.93-9.14|M22 4L12 14.01l-3-3",
  trophy: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6|M18 9h1.5a2.5 2.5 0 0 0 0-5H18|M4 22h16|M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22|M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22|M18 2H6v7a6 6 0 0 0 12 0V2z",
};
const REASON_ICONS = [ICONS.chat, ICONS.shield, ICONS.check, ICONS.trophy];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
);

export default async function HomeContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.home;
  const L = (p: string) => localizedHref(locale, p);
  // en/ja 有本地化文章则用，否则回退中文列表（避免空白）
  const posts = (await getAllPostsLocalized(locale)).slice(0, 3);
  const fallbackPosts: PostMeta[] = posts.length > 0 ? posts : (await getAllPosts()).slice(0, 3);

  return (
    <main>
      <NavClient locale={locale} dict={dict} />
      <HeroSection locale={locale} dict={dict} />
      <ServicesSection locale={locale} dict={dict} />

      {/* ── 专家团队 ── */}
      <section className="sec sec-dark">
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="team-grid">
            <Reveal>
              <div className="team-sticky" style={{ position: 'sticky', top: 100, display: 'flex', gap: 24, alignItems: 'flex-start' }}>
                <span className="ed-vert">{t.teamVert}</span>
                <div style={{ maxWidth: 340 }}>
                  <h2 className="h2 ed-h" style={{ marginBottom: 16 }}>{t.teamTitle1}<br />{t.teamTitle2}</h2>
                  <p className="sub" style={{ fontSize: 15 }}>{t.teamSub}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="ed-rows">
                {t.credentials.map((c, i) => (
                  <div key={i} className="ed-row">
                    <span className="ed-row-n">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                        <span className="serif" style={{ fontSize: 19, fontWeight: 700, color: '#fff' }}>{c.role}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold-bright)', letterSpacing: '.06em' }}>{c.name}</span>
                      </div>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,.6)', lineHeight: 1.75, maxWidth: '56ch' }}>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 为什么选我们 ── */}
      <section className="sec" style={{ background: 'var(--surface)' }}>
        <div className="wrap">
          <div className="grid-2col-about" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <Reveal direction="left">
              <div style={{ position: 'relative', marginBottom: 24 }}>
                <div aria-hidden="true" style={{
                  position: 'relative', overflow: 'hidden',
                  height: 'clamp(280px, 40vw, 480px)',
                  background: 'linear-gradient(158deg, #124442 0%, #0f3937 58%, #0a2b29 100%)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  padding: 'clamp(24px, 3.4vw, 42px)',
                }}>
                  <div style={{
                    position: 'absolute', top: '-18%', right: '-12%', width: 380, height: 380, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(196,162,58,0.18) 0%, transparent 65%)', pointerEvents: 'none',
                  }} />
                  <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '56px 56px',
                  }} />
                  <div style={{ position: 'relative' }}>
                    <div style={{ fontSize: 11, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.5)', marginBottom: 10 }}>{t.panelRateLabel}</div>
                    <div className="serif" style={{ fontSize: 'clamp(56px, 8vw, 92px)', fontWeight: 900, lineHeight: 0.95, color: '#fff' }}>
                      {t.panelRateValue}<span style={{ fontSize: '0.4em', color: 'var(--gold-bright)', marginLeft: 4 }}>%</span>
                    </div>
                    <div style={{ width: 44, height: 2, background: 'var(--gold)', marginTop: 18 }} />
                  </div>
                  <div style={{ position: 'relative' }}>
                    {t.panelCredentials.map((label, idx) => (
                      <div key={idx} style={{
                        display: 'flex', alignItems: 'baseline', gap: 14,
                        padding: '9px 0', borderTop: '1px solid rgba(255,255,255,0.12)',
                      }}>
                        <span className="serif" style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold-bright)' }}>{String(idx + 1).padStart(2, '0')}</span>
                        <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.82)', letterSpacing: '0.04em' }}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="serif about-img-badge" style={{
                  background: 'var(--brand)', color: '#fff',
                  padding: '18px 26px', maxWidth: 240,
                  fontSize: 15, fontWeight: 700, lineHeight: 1.6,
                  borderBottom: '3px solid var(--gold)',
                }}>
                  {t.panelBadge1}<br /><span style={{ color: 'var(--gold-bright)' }}>{t.panelBadge2}</span>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <h2 className="h2 ed-h" style={{ marginBottom: 40 }}>{t.reasonsTitle1}<br />{t.reasonsTitle2}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderTop: '1px solid var(--line)' }}>
                {t.reasons.map((r, i) => (
                  <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start', padding: '22px 0', borderBottom: '1px solid var(--line)' }}>
                    <div style={{ flexShrink: 0, color: 'var(--brand)', marginTop: 2 }}><Icon d={REASON_ICONS[i]} size={22} /></div>
                    <div>
                      <div className="serif" style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 5 }}>{r.title}</div>
                      <p style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.7 }}>{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 申请流程 ── */}
      <section className="sec" style={{ background: 'var(--surface-2)' }}>
        <div className="wrap">
          <Reveal>
            <div style={{ maxWidth: 520, marginBottom: 64 }}>
              <h2 className="h2 ed-h" style={{ marginBottom: 14 }}>{t.stepsTitle}</h2>
              <p className="sub">{t.stepsSub}</p>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0 }} className="grid-steps-5">
            {t.steps.map((s, i) => (
              <Reveal key={i} delay={(i % 5) as 0|1|2|3|4|5} className="h-full">
                <div className="step-cell" style={{
                  height: '100%', padding: '8px 24px 8px 0',
                  marginRight: i < 4 ? 24 : 0,
                  borderRight: i < 4 ? '1px solid var(--line)' : 'none',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div className="ed-num" style={{ fontSize: 'clamp(44px,4.6vw,64px)', marginBottom: 20 }}>{s.n}</div>
                  <div className="serif" style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', marginBottom: 10 }}>{s.title}</div>
                  <p style={{ fontSize: 13.5, color: 'var(--body)', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 最新文章 ── */}
      {fallbackPosts.length > 0 && (
        <section className="sec sec-posts">
          <div className="wrap">
            <Reveal>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 48, flexWrap: 'wrap' }}>
                <h2 className="h2 ed-h">{t.postsTitle}</h2>
                <Link href={L('/blog')} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, color: 'var(--brand)', paddingBottom: 6 }}>
                  {t.postsViewAll} <ArrowIcon />
                </Link>
              </div>
            </Reveal>
            <div className="ed-rows">
              {fallbackPosts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) as 0|1|2|3|4|5}>
                  <Link href={L(`/blog/${post.slug}`)} className="ed-row" style={{ textDecoration: 'none' }}>
                    <span style={{ fontSize: 12.5, color: 'var(--muted)', fontVariantNumeric: 'tabular-nums' }}>{post.date}</span>
                    <div>
                      <div className="serif" style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.5, marginBottom: 6 }}>{post.title}</div>
                      <p style={{ fontSize: 13.5, color: 'var(--body)', lineHeight: 1.7, maxWidth: '72ch' }}>{post.excerpt?.slice(0, 80)}...</p>
                    </div>
                    <span style={{ color: 'var(--brand)' }}><ArrowIcon /></span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <CtaSection
        locale={locale}
        dict={dict}
        title={<>{t.ctaTitle1}<br /><span style={{ color: 'var(--gold-bright)' }}>{t.ctaTitle2}</span></>}
        desc={t.ctaDesc}
      />

      <Footer locale={locale} dict={dict} />
    </main>
  );
}
