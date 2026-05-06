import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#EAE8E0]">
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-1/2 p-6 lg:p-24 flex flex-col justify-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-purple font-display font-bold text-[10px] uppercase tracking-[0.4em] mb-6">
              Sustainable Future
            </h2>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-text-main leading-tight mb-8">
              構築穩定且可靠的<br />
              <span className="gradient-text italic">永續能源方案</span>
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-warm-grey mb-12 max-w-lg">
              創元地熱核心信念是以專業技術為台灣構築穩定又可靠的乾淨能源，透過安全且環境友善的方式，提供潔淨電力。
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary flex items-center gap-3">
                了解更多 <ArrowRight size={14} />
              </Link>
            </div>

            <div className="mt-20 flex gap-10 items-center">
              {[
                { icon: Zap, label: '穩定基載' },
                { icon: Shield, label: '安全可靠' },
                { icon: Leaf, label: '環境友善' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2 group">
                  <item.icon size={20} className="text-brand-cyan group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold tracking-widest text-warm-grey uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="hidden lg:block w-1/2 relative bg-border-light">
          <div className="absolute inset-0 bg-[#DEDBCF] flex items-center justify-center overflow-hidden">
             <div className="w-full h-full opacity-30 flex flex-col gap-4 p-12">
                <motion.div 
                  initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.2, delay: 0.2 }}
                  className="h-1/4 bg-linear-to-r from-brand-cyan to-brand-purple rounded-sm" 
                />
                <motion.div 
                   initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1.2, delay: 0.4 }}
                  className="h-1/4 bg-warm-grey rounded-sm" 
                />
                <motion.div 
                   initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.2, delay: 0.6 }}
                  className="h-1/4 bg-linear-to-r from-brand-purple to-brand-magenta opacity-50 rounded-sm" 
                />
                <motion.div 
                   initial={{ width: 0 }} animate={{ width: '50%' }} transition={{ duration: 1.2, delay: 0.8 }}
                  className="h-1/4 bg-[#C8C2B8] rounded-sm" 
                />
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-[#EAE8E0] via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
