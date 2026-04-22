export default function StatsSection() {
  const stats = [
    { num: '3,000+', label: '华人老板成功申请' },
    { num: '¥8.5億+', label: '已到账补助金总额' },
    { num: '4种', label: '国家认定专业资质' },
  ];

  return (
    <section className="bg-white py-24 border-t border-black/[0.06] border-b border-b-black/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-3">
        {stats.map((stat, i) => (
          <div key={i} className={`text-center px-4 md:px-8 ${i < stats.length - 1 ? 'border-r border-black/[0.08]' : ''}`}>
            <div className="text-[clamp(44px,6vw,72px)] font-bold text-[#2563EB] tracking-[-3px] leading-none tabular-nums">
              {stat.num}
            </div>
            <div className="text-sm text-[#64748B] mt-3">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
