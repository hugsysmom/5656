import { NAV_ITEMS } from '../constants';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-light py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linear-to-r from-brand-cyan via-brand-purple to-brand-magenta flex items-center justify-center rounded-sm">
                <div className="w-6 h-6 border-2 border-white rotate-45 flex items-center justify-center text-white font-bold italic text-sm">H</div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-tight uppercase text-text-main">Hephron Geothermal</span>
                <span className="text-[10px] tracking-[0.2em] text-warm-grey uppercase font-medium">創元地熱開發</span>
              </div>
            </div>
            <p className="text-warm-grey max-w-sm leading-relaxed text-sm">
              創元地熱的核心信念是以專業技術為台灣構築穩定又可靠的乾淨能源，提供潔淨電力，為企業、社會與自然環境創造共贏價值。
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-purple mb-8">快速連結</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm font-medium text-warm-grey hover:text-brand-purple transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-purple mb-8">聯絡資訊</h4>
            <ul className="space-y-4 text-warm-grey text-sm">
              <li className="flex flex-col">
                <span className="text-text-main font-bold text-[10px] uppercase mb-1">地址</span>
                231新北市新店區北新路三段207-5號15樓A室
              </li>
              <li className="flex flex-col">
                <span className="text-text-main font-bold text-[10px] uppercase mb-1">電話</span>
                +886-2-8911-3051
              </li>
              <li className="flex flex-col">
                <span className="text-text-main font-bold text-[10px] uppercase mb-1">信箱</span>
                info@hephron.com.tw
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-warm-grey text-[10px] tracking-wider uppercase font-medium">
            © 2026 Hephron Geothermal Co.Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-warm-grey font-bold uppercase tracking-widest">
            <Link to="#" className="hover:text-brand-purple transition-colors">隱 privacy權政策</Link>
            <Link to="#" className="hover:text-brand-purple transition-colors">法律聲明</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
