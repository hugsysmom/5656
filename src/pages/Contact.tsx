import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen bg-beige-bg"
    >
      <section className="py-24 bg-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="text-[10px] tracking-[0.3em] text-brand-green uppercase mb-4 block font-bold">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-main uppercase">聯絡我們</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-px bg-border-light border border-border-light">
            <div className="lg:col-span-2 bg-white p-12">
              <h2 className="text-xl font-bold mb-10 text-text-main">諮詢表單</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-warm-grey ml-1 font-display">您的姓名</label>
                    <input type="text" className="w-full px-0 py-3 bg-transparent border-b border-border-light focus:border-brand-purple transition-all outline-none text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-warm-grey ml-1 font-display">聯絡電話</label>
                    <input type="tel" className="w-full px-0 py-3 bg-transparent border-b border-border-light focus:border-brand-purple transition-all outline-none text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-warm-grey ml-1 font-display">電子信箱</label>
                  <input type="email" className="w-full px-0 py-3 bg-transparent border-b border-border-light focus:border-brand-purple transition-all outline-none text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-warm-grey ml-1 font-display">諮詢內容</label>
                  <textarea rows={4} className="w-full px-0 py-3 bg-transparent border-b border-border-light focus:border-brand-purple transition-all outline-none resize-none text-sm" />
                </div>
                <button className="btn-primary w-full md:w-auto flex items-center justify-center gap-3">
                  提交諮詢 <Send size={14} />
                </button>
              </form>
            </div>

            <div className="bg-[#F5F2EB] p-12 flex flex-col justify-between">
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-6">公司總部</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <MapPin size={16} className="text-brand-purple shrink-0 mt-1" />
                      <span className="text-xs font-medium text-text-main leading-relaxed">231新北市新店區北新路三段207-5號15樓A室</span>
                    </div>
                    <div className="flex gap-4">
                      <Phone size={16} className="text-brand-purple shrink-0 mt-1" />
                      <span className="text-xs font-medium text-text-main leading-relaxed">+886-2-8911-3051</span>
                    </div>
                    <div className="flex gap-4">
                      <Mail size={16} className="text-brand-purple shrink-0 mt-1" />
                      <span className="text-xs font-medium text-text-main leading-relaxed">info@hephron.com.tw</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-12 mt-12 border-t border-border-light">
                <p className="text-[10px] text-warm-grey leading-relaxed">
                  辦公時間：周一至周五 <br />
                  09:00 - 18:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
