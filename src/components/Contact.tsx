import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative gradient blob */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-brand-purple font-display font-bold text-sm uppercase tracking-widest mb-4 text-left">
              Contact Us
            </h2>
            <h3 className="text-4xl font-display font-bold text-gray-900 mb-8 text-left">
              期待與您共同構築 <br /> 能源新未來
            </h3>
            <p className="text-gray-600 mb-12 text-left leading-relaxed">
              無論您是土地擁有者、技術開發商、或是對地熱能源有興趣的合作夥伴，創元地熱都歡迎您的聯繫與諮詢。
            </p>

            <div className="space-y-8 text-left">
              {[
                { icon: MapPin, text: '231新北市新店區北新路三段207-5號15樓A室' },
                { icon: Phone, text: '+886-2-8911-3051' },
                { icon: Mail, text: 'info@hephron.com.tw' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-beige-bg flex items-center justify-center text-brand-purple group-hover:gradient-bg group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <span className="text-gray-900 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-beige-bg p-10 rounded-[2.5rem] shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">姓名</label>
                  <input type="text" placeholder="您的姓名" className="w-full px-5 py-4 bg-white border border-transparent focus:border-brand-purple rounded-2xl transition-all outline-none" />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">電話</label>
                  <input type="tel" placeholder="聯絡電話" className="w-full px-5 py-4 bg-white border border-transparent focus:border-brand-purple rounded-2xl transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">電子信箱</label>
                <input type="email" placeholder="example@email.com" className="w-full px-5 py-4 bg-white border border-transparent focus:border-brand-purple rounded-2xl transition-all outline-none" />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">諮詢內容</label>
                <textarea rows={4} placeholder="請描述您的需求..." className="w-full px-5 py-4 bg-white border border-transparent focus:border-brand-purple rounded-2xl transition-all outline-none resize-none" />
              </div>
              <button className="w-full py-5 gradient-bg text-white font-bold rounded-2xl shadow-xl hover:shadow-brand-purple/20 transition-all flex items-center justify-center gap-3">
                發送訊息 <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
