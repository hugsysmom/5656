import { motion } from 'motion/react';
import { Target, Lightbulb, Users, Globe } from 'lucide-react';

const FEATURES = [
  {
    icon: Target,
    title: '核心使命',
    desc: '致力於開發地熱能源，為台灣能源轉型貢獻專業技術。',
  },
  {
    icon: Lightbulb,
    title: '創新技術',
    desc: '引進國際先進鑽井與熱交換系統，最小化環境衝擊。',
  },
  {
    icon: Users,
    title: '社會共贏',
    desc: '與在地社區緊密合作，創造就業機會並確保環境和諧。',
  },
  {
    icon: Globe,
    title: '永續發展',
    desc: '構建循環不息的綠色電力供應鏈，實現真正淨零排放。',
  }
];

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <section className="py-24 bg-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-[10px] tracking-[0.3em] text-brand-green uppercase mb-4 block font-bold">About Hephron</span>
            <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-8 leading-tight">
              專業技術領航，<br />打造台灣地熱能源新紀元
            </h1>
            <p className="text-sm md:text-base text-warm-grey leading-relaxed mb-12">
              創元地熱開發股份有限公司（Hephron Geothermal Co.Ltd.）成員具備超過十年的地質探勘與鑽井工程經驗。我們深悉台灣的地熱潛力與環境特性，通過在地開發與國際合作，落實綠能普及。
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-beige-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-light border border-border-light overflow-hidden">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="bg-white p-12 flex flex-col min-h-[300px]">
              <div className="w-12 h-12 bg-beige-bg flex items-center justify-center rounded-sm mb-8 text-brand-purple">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-bold mb-4 text-text-main">{feature.title}</h3>
              <p className="text-xs text-warm-grey leading-relaxed mt-auto">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="aspect-square bg-border-light rounded-sm overflow-hidden grayscale">
              <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" alt="Environmental focus" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-text-main tracking-tight">環境友善的鑽井技術</h2>
              <div className="space-y-8">
                <div className="border-l-2 border-brand-purple pl-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-text-main mb-2">低碳排工法</h4>
                  <p className="text-xs text-warm-grey leading-relaxed">我們採用最先進的鑽井平台，有效縮減施工空間，減少對地表景觀與原生物種的干擾。</p>
                </div>
                <div className="border-l-2 border-brand-purple pl-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-text-main mb-2">資源永續循環</h4>
                  <p className="text-xs text-warm-grey leading-relaxed">地熱流體在封閉系統中循環，確保地下水資源不被耗用且無污染風險。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
