'use client';
import Link from 'next/link';
import Reveal from './Reveal';
import { localizedHref } from '@/lib/i18n/href';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/messages/zh';
import { zh } from '@/messages/zh';
import { statusOf, STATUS_LABEL } from '@/lib/subsidies/status';


export default function ServicesSection({ locale = 'zh', dict }: { locale?: Locale; dict?: Dictionary }) {
  const d = dict ?? (zh as unknown as Dictionary);
  const s = d.services;
  const hm = d.home;
  const L = (p: string) => localizedHref(locale, p);

  return (
    <section style={{ background: '#fff', borderTop: '1px solid #e8e8e8' }}>
      <div className="wrap services-cards-wrap" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <Reveal>
          <div style={{ maxWidth: 620, marginBottom: 56 }}>
            <h2 className="h2 ed-h" style={{ marginBottom: 16 }}>
              {s.heading}
            </h2>
            <p style={{ fontSize: 16, color: '#6e6e73', lineHeight: 1.75, maxWidth: '46ch' }}>
              {s.sub}
            </p>
          </div>
        </Reveal>

        <div className="svc-table">
          {s.items.map((item, i) => {
            const st = item.slug ? statusOf(item.slug) : undefined;
            const href = item.slug ? L(`/subsidies/${item.slug}`) : L('/partner');
            return (
              <Reveal key={i} delay={(i % 3) as 0|1|2|3|4|5}>
                <div className="svc-item">
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold)', letterSpacing: '.08em', marginBottom: 6 }}>{item.tag}</div>
                    <Link href={href} className="svc-name" style={{ textDecoration: 'none', display: 'block' }}>{item.name}</Link>
                    {st && (
                      <div className="svc-meta">
                        <span className="chip chip-audience">{st.audience[locale]}</span>
                        <span className={`chip chip-dot chip-${st.status}`}>{STATUS_LABEL[locale][st.status]}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="svc-amount">{item.amount}<span className="svc-unit">{item.unit}</span></div>
                    <div style={{ fontSize: 12, color: '#86868b', marginTop: 4 }}>{item.rate}</div>
                    {st && <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 6, fontWeight: 600 }}>{st.deadline[locale]}</div>}
                  </div>
                  <p className="svc-desc">{item.desc}</p>
                  <div className="svc-actions">
                    <Link href={href} className="svc-btn svc-btn-ghost">{hm.detailBtn}</Link>
                    {item.slug && <Link href={L('/contact')} className="svc-btn svc-btn-fill">{hm.checkBtn}</Link>}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
