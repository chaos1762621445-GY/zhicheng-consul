import Link from "next/link";
import type { Metadata } from "next";
import NavClient from "../components/NavClient";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "免费咨询",
  description: "免费测试您的补助金申请资格——3分钟问卷，志成コンサル专业团队当日回复匹配方案",
};

export default function ContactPage() {
  return (
    <main>
      <NavClient />

      {/* Hero */}
      <div className="bg-[#1c1e54] py-[88px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_70%_50%,rgba(83,58,253,0.25)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(234,34,97,0.15)_0%,transparent_50%)]" />
        <div className="section-inner relative z-10">
          <div className="inline-block text-[11px] font-light text-white/55 uppercase tracking-[2px] mb-5 border border-white/15 rounded px-3 py-1">
            免费咨询
          </div>
          <h1 className="text-[clamp(32px,4.5vw,52px)] font-light text-white tracking-[-0.5px] leading-[1.15] mb-4">
            免费补助金资格诊断
          </h1>
          <p className="text-lg font-light text-white/70 leading-[1.75] max-w-[560px]">
            填写下方问卷，专业顾问当日为您匹配最适合的补助金方案，完全免费，无任何购买义务。
          </p>
        </div>
      </div>

      <section className="section-std bg-white">
        <div className="section-inner">

          {/* Contact Info Cards */}
          <div className="mb-12">
            <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-5">联系方式</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-5 bg-[#f6f9fc] border border-[#e5edf5] rounded-lg">
                <div className="w-11 h-11 rounded-xl bg-[rgba(83,58,253,0.08)] flex items-center justify-center flex-shrink-0">
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#64748d] mb-1">微信 WeChat</div>
                  <div className="text-base font-semibold text-[#061b31]">pr2024188</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-[#f6f9fc] border border-[#e5edf5] rounded-lg">
                <div className="w-11 h-11 rounded-xl bg-[rgba(83,58,253,0.08)] flex items-center justify-center flex-shrink-0">
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.71a16 16 0 0 0 7.34 7.34l1.88-1.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#64748d] mb-1">电话 Tel</div>
                  <div className="text-base font-semibold text-[#061b31]">03-6265-9756</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-[#f6f9fc] border border-[#e5edf5] rounded-lg">
                <div className="w-11 h-11 rounded-xl bg-[rgba(83,58,253,0.08)] flex items-center justify-center flex-shrink-0">
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#64748d] mb-1">邮箱 Email</div>
                  <div className="text-sm font-semibold text-[#061b31]">knakano.sekiyoshi@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-[#f6f9fc] border border-[#e5edf5] rounded-lg">
                <div className="w-11 h-11 rounded-xl bg-[rgba(83,58,253,0.08)] flex items-center justify-center flex-shrink-0">
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#64748d] mb-1">地址 Address</div>
                  <div className="text-[13px] font-semibold text-[#061b31] leading-[1.5]">
                    〒542-0082 大阪府大阪市中央区<br />島之内1-13-3 おおきに東心斎橋ビル301号室
                  </div>
                </div>
              </div>
            </div>

            {/* WeChat QR Card */}
            <div className="flex flex-col sm:flex-row items-center gap-8 mt-8 p-8 bg-[#f6f9fc] border border-[#e5edf5] rounded-xl">
              <img src="/wechat-qr.jpg" alt="微信二维码" className="w-40 h-40 rounded-lg flex-shrink-0" />
              <div>
                <div className="text-[18px] font-bold text-[#061b31] mb-2">扫码添加微信</div>
                <div className="text-[15px] text-[#64748d] leading-[1.75] mb-3">
                  添加微信 <strong className="text-[#061b31]">pr2024188</strong>，专业顾问将在当日（工作日）为您提供免费补助金诊断服务。
                </div>
                <div className="text-sm text-[#64748d]">营业时间：周一〜周六 9:00〜18:00</div>
              </div>
            </div>
          </div>

          {/* Quiz iframe */}
          <div>
            <div className="inline-block text-[11px] font-medium text-[#533afd] uppercase tracking-[1.5px] mb-5">补助金资格自测</div>
            <div className="border border-[#e5edf5] rounded-xl overflow-hidden">
              <iframe
                src="/quiz.html"
                style={{ width: "100%", height: 680, border: "none", display: "block" }}
                title="补助金资格自测"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
