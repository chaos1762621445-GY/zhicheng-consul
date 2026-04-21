import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <img src="/logo.png" alt="志成コンサル" style={{height:36,display:'block',filter:'brightness(10)'}} />
          <p className="footer-brand-desc">
            专为在日华人企业主提供日本政府补助金申请代办服务。
            行政书士·社会保险劳务士·税理士·中小企业诊断士联合专业团队，全程中文无障碍。
          </p>
        </div>

        <div>
          <div className="footer-col-title">快速导航</div>
          <div className="footer-links">
            {[
              {href:'/subsidies',label:'补助金种类'},
              {href:'/service',label:'服务流程'},
              {href:'/cases',label:'成功案例'},
              {href:'/faq',label:'常见问题'},
              {href:'/about',label:'关于我们'},
              {href:'/partner',label:'代理合作'},
              {href:'/blog',label:'知识库'},
              {href:'/contact',label:'免费咨询'},
            ].map(l => (
              <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <div className="footer-col-title">联系我们</div>
          <div className="footer-contact-row">
            <strong className="footer-contact-label">微信：</strong>
            <span>pr2024188</span>
          </div>
          <div className="footer-contact-row">
            <strong className="footer-contact-label">电话：</strong>
            <span>03-6265-9756</span>
          </div>
          <div className="footer-contact-row">
            <strong className="footer-contact-label">邮箱：</strong>
            <span>knakano.sekiyoshi@gmail.com</span>
          </div>
          <div className="footer-contact-row" style={{flexDirection:'column',gap:2}}>
            <strong className="footer-contact-label">地址：</strong>
            <span>〒542-0082 大阪府大阪市中央区島之内1-13-3<br/>おおきに東心斎橋ビル301号室</span>
          </div>
          <div style={{marginTop:20,background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:6,padding:12,display:'inline-block'}}>
            <p style={{fontSize:11,color:'rgba(255,255,255,0.5)',textAlign:'center',marginBottom:8,fontWeight:400,letterSpacing:'0.5px',textTransform:'uppercase'}}>微信扫码</p>
            <img src="/wechat-qr.jpg" alt="微信二维码" style={{width:120,height:120,display:'block',borderRadius:4,background:'#fff',padding:6}} />
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <div className="footer-copy-inner">
          <span className="footer-copy-text">© 2026 株式会社志成コンサル 保留所有权利。</span>
          <span className="footer-copy-text">行政书士·社会保险劳务士·税理士·中小企业诊断士</span>
        </div>
      </div>
    </footer>
  );
}
