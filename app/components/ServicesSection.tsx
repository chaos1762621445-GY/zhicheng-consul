'use client';
import Link from 'next/link';
import Reveal from './Reveal';
import { localizedHref } from '@/lib/i18n/href';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/messages/zh';
import { zh } from '@/messages/zh';

const Arrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
);

export default function ServicesSection({ locale = 'zh', dict }: { locale?: Locale; dict?: Dictionary }) {
  const d = dict ?? (zh as unknown as Dictionary);
  const s = d.services;
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
          {s.items.map((item, i) => (
            <Reveal key={i} delay={(i % 3) as 0|1|2|3|4|5}>
              <Link href={item.slug ? L(`/subsidies/${item.slug}`) : L('/partner')} className="svc-item">
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold)', letterSpacing: '.08em', marginBottom: 6 }}>{item.tag}</div>
                  <div className="svc-name">{item.name}</div>
                </div>
                <div>
                  <div className="svc-amount">{item.amount}<span className="svc-unit">{item.unit}</span></div>
                  <div style={{ fontSize: 12, color: '#86868b', marginTop: 4 }}>{item.rate}</div>
                </div>
                <p className="svc-desc">{item.desc}</p>
                <span className="svc-arrow"><Arrow /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
