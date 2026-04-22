import Link from 'next/link';
import { CheckCircleIcon } from 'lucide-react';

const trustItems = [
  '无成功不收费 — 零风险承诺',
  '四类国家认证专家全程操办',
  '全中文服务，不需要懂日语',
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/[0.06]">
      {/* Trust bar */}
      <div className="border-b border-white/[0.06] py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-14">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-sm text-white/85">
              <CheckCircleIcon className="w-4 h-4 text-[#533afd] flex-shrink-0" strokeWidth={2} />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-6 pt-14 pb-12 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr_1fr] gap-14">
        <div>
          <img src="/logo.png" alt="志成コンサル" className="h-9 block brightness-[10]" />
          <p className="text-sm text-white/85 leading-[1.8] max-w-[280px] mt-4">
            专为在日华人企业主提供日本政府补助金申请代办服务。
            行政书士·社会保险劳务士·税理士·中小企业诊断士联合专业团队，全程中文无障碍。
          </p>
        </div>

        <div>
          <div className="text-[11px] font-medium text-white/70 uppercase tracking-[1.5px] mb-5">快速导航</div>
          <div className="flex flex-col gap-2.5">
            {[
              { href: '/subsidies', label: '补助金种类' },
              { href: '/service', label: '服务流程' },
              { href: '/cases', label: '成功案例' },
              { href: '/faq', label: '常见问题' },
              { href: '/about', label: '关于我们' },
              { href: '/partner', label: '代理合作' },
              { href: '/blog', label: '知识库' },
              { href: '/contact', label: '免费咨询' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="text-sm text-white/85 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] font-medium text-white/70 uppercase tracking-[1.5px] mb-5">联系我们</div>
          <div className="flex gap-2 mb-2.5 text-sm text-white/90 leading-[1.8]">
            <strong className="font-medium text-white flex-shrink-0">微信：</strong>
            <span>pr2024188</span>
          </div>
          <div className="flex gap-2 mb-2.5 text-sm text-white/90 leading-[1.8]">
            <strong className="font-medium text-white flex-shrink-0">电话：</strong>
            <span>03-6265-9756</span>
          </div>
          <div className="flex gap-2 mb-2.5 text-sm text-white/90 leading-[1.8]">
            <strong className="font-medium text-white flex-shrink-0">邮箱：</strong>
            <span>knakano.sekiyoshi@gmail.com</span>
          </div>
          <div className="flex flex-col gap-0.5 mb-5 text-sm text-white/90 leading-[1.8]">
            <strong className="font-medium text-white">地址：</strong>
            <span>〒542-0082 大阪府大阪市中央区島之内1-13-3<br />おおきに東心斎橋ビル301号室</span>
          </div>
          <div className="bg-white rounded-lg p-2 inline-block" style={{ width: 180, height: 180 }}>
            <img
              src="/wechat-qr.jpg"
              alt="微信二维码"
              className="w-full h-full object-cover block rounded"
            />
          </div>
          <p className="text-[11px] text-white/50 mt-2 uppercase tracking-[0.5px]">微信扫码添加</p>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-1 text-center">
          <span className="text-[13px] text-white/70">© 2026 株式会社志成コンサル 保留所有权利。</span>
          <span className="text-[13px] text-white/70">行政书士·社会保险劳务士·税理士·中小企业诊断士</span>
        </div>
      </div>
    </footer>
  );
}
