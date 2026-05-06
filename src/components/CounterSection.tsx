import { useEffect, useState, useRef } from 'react';
import { useInView, motion, useSpring, useTransform } from 'motion/react';
import { Calendar, Ruler, Drill, Map, Factory } from 'lucide-react';

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  const displayValue = useTransform(springValue, (current) => 
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <span ref={ref} className="font-display font-bold text-3xl md:text-4xl text-text-main">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

const STATS = [
  { icon: Calendar, label: '服務經驗', sublabel: '年', value: 55 },
  { icon: Drill, label: '總鑽井長度', sublabel: 'm', value: 200000 },
  { icon: Ruler, label: '總取芯長度', sublabel: 'm', value: 6290 },
  { icon: Map, label: '地熱案場探勘', sublabel: '座', value: 8 },
  { icon: Factory, label: '地熱電廠協建', sublabel: '座', value: 3 },
];

export default function CounterSection() {
  return (
    <section className="py-24 bg-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-text-main tracking-tight">
            提供由鑽井探勘到興建電廠一站式服務的地熱能源廠商
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-beige-bg flex items-center justify-center mb-6 text-brand-purple group-hover:gradient-bg group-hover:text-white transition-all duration-300">
                <stat.icon size={28} />
              </div>
              <div className="flex flex-col mb-2">
                <Counter value={stat.value} />
                <span className="text-sm font-bold text-warm-grey mt-1">{stat.sublabel}</span>
              </div>
              <span className="text-xs font-bold tracking-widest text-text-main uppercase mt-4">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
