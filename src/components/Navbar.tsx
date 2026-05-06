import { motion } from 'motion/react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-linear-to-r from-brand-cyan via-brand-purple to-brand-magenta flex items-center justify-center rounded-sm">
            <div className="w-6 h-6 border-2 border-white rotate-45 flex items-center justify-center text-white font-bold italic text-sm">H</div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight leading-tight uppercase text-text-main">Hephron Geothermal</span>
            <span className="text-[10px] tracking-[0.2em] text-warm-grey uppercase font-medium">創元地熱開發</span>
          </div>
        </Link>

        {/* Desktop Menu - Right Positioned */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-xs font-semibold tracking-widest transition-colors pb-1 border-b-2 ${
                location.pathname === item.href 
                  ? 'text-brand-purple border-brand-purple' 
                  : 'text-warm-grey border-transparent hover:text-brand-purple'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-text-main">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white border-b border-border-light"
      >
        <div className="px-6 py-8 flex flex-col gap-6 text-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xs font-bold tracking-widest text-warm-grey hover:text-brand-green uppercase"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
