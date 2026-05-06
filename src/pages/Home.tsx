import Hero from '../components/Hero';
import News from '../components/News';
import CounterSection from '../components/CounterSection';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      
      <CounterSection />
      
      {/* Featured Intro Block */}
      <section className="py-24 border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-warm-grey uppercase mb-4 block">Our Commitment</span>
            <h2 className="text-3xl font-bold mb-6 text-text-main line-tight">專業技術為台灣構築<br />可靠且低碳的能源結構</h2>
            <p className="text-sm leading-relaxed text-warm-grey mb-8">
              台灣具備豐富的地熱資源潛力。創元地熱致力於將這項自然贈禮，轉化為全天候不間斷的綠色電力。我們不僅僅是發電，更是在為下一代守護這片土地的自然環境。
            </p>
            <Link to="/about" className="text-xs font-bold uppercase tracking-widest text-brand-purple flex items-center gap-2 hover:gap-4 transition-all group">
              深入了解使命 <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F5F2EB] aspect-square p-8 flex flex-col justify-end rounded-sm">
              <span className="text-3xl font-bold text-text-main mb-2">24h</span>
              <span className="text-[9px] font-bold tracking-widest text-brand-purple uppercase">全天候發電</span>
            </div>
            <div className="bg-white border border-border-light aspect-square p-8 flex flex-col justify-end rounded-sm">
              <span className="text-3xl font-bold text-text-main mb-2">基載</span>
              <span className="text-[9px] font-bold tracking-widest text-brand-purple uppercase">穩定電力供應</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 flex justify-between items-end">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-warm-grey uppercase mb-4 block">Latest Updates</span>
            <h2 className="text-3xl font-bold text-text-main uppercase">最新動態</h2>
          </div>
          <Link to="/news" className="text-xs font-bold uppercase tracking-widest text-warm-grey hover:text-brand-purple">全部訊息</Link>
        </div>
        <News />
      </section>
    </motion.div>
  );
}
