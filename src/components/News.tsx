import { NEWS_DATA } from '../constants';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function News() {
  return (
    <div className="grid md:grid-cols-3 gap-px bg-border-light border border-border-light">
      {NEWS_DATA.map((news) => (
        <Link to={`/news/${news.id}`} key={news.id} className="group bg-white p-10 flex flex-col min-h-[350px]">
          <div className="flex items-center gap-2 text-warm-grey text-[10px] font-bold uppercase tracking-widest mb-6">
            <Calendar size={12} />
            {news.date}
          </div>
          <h4 className="text-lg font-bold text-text-main mb-6 group-hover:text-brand-purple transition-colors leading-snug">
            {news.title}
          </h4>
          <p className="text-xs text-warm-grey leading-relaxed line-clamp-3 mb-10">
            {news.excerpt}
          </p>
          <div className="mt-auto">
            <span className="text-[10px] font-bold text-text-main uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
              閱讀更多 <ArrowUpRight size={14} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
