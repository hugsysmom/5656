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

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-purple font-display font-bold text-sm uppercase tracking-widest mb-4">
            About Hephron
          </h2>
          <h3 className="text-4xl font-display font-bold text-gray-900 mb-6">
            專業技術引領 地熱能源革命
          </h3>
          <p className="text-gray-600 leading-relaxed">
            我們相信，地熱是上天賜予台灣最珍貴的禮物。創元地熱通過精密的地下探勘技術與環保施工方案，將來自地心深處的熱能轉化為源源不絕的電力。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-beige-bg/50 border border-transparent hover:border-brand-cyan/20 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:gradient-bg group-hover:text-white transition-all text-brand-purple">
                <feature.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Statistics Block */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { value: '10+', label: '專業技術專家' },
            { value: '24h', label: '基礎負載電力' },
            { value: '100%', label: '環境自律守護' },
            { value: 'Green', label: '純淨零碳足跡' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 border-r border-gray-100 last:border-0">
              <p className="text-4xl font-display font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-xs text-brand-purple font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
