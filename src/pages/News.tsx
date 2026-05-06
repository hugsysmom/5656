import { motion } from 'motion/react';
import { NEWS_DATA } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NewsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen"
    >
      <header className="py-24 bg-white border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="text-[10px] tracking-[0.3em] text-brand-green uppercase mb-4 block font-bold">Latest Updates</span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-main uppercase">最新動態</h1>
        </div>
      </header>

      <section className="py-24 bg-beige-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-1 gap-px bg-border-light border border-border-light">
            {NEWS_DATA.map((news) => (
              <Link to={`/news/${news.id}`} key={news.id} className="group bg-white p-12 transition-all flex flex-col md:flex-row gap-12 items-start md:items-center">
                <div className="w-full md:w-1/4">
                  <div className="flex items-center gap-2 text-warm-grey text-[10px] font-bold uppercase tracking-widest mb-2">
                    <Calendar size={12} />
                    {news.date}
                  </div>
                  <span className="px-3 py-1 border border-brand-green text-[9px] font-bold text-brand-green uppercase tracking-widest rounded-full">
                    {news.category}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-text-main mb-4 group-hover:text-brand-green transition-colors">{news.title}</h3>
                  <p className="text-xs text-warm-grey leading-relaxed line-clamp-2">{news.excerpt}</p>
                </div>
                <div className="hidden md:block">
                  <ArrowRight className="text-warm-grey group-hover:text-brand-green group-hover:translate-x-2 transition-all" size={24} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
