
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-effect shadow-lg py-3' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Varshini.<span className="text-[#7d2ae8]">Creatives</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {['Home', 'Services', 'Portfolio', 'AI Tool'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-slate-600 hover:text-[#7d2ae8] text-sm font-bold transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7d2ae8] transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a href="#contact" className="canva-gradient text-white px-7 py-3 rounded-full text-sm font-bold shadow-lg hover:shadow-[#7d2ae8]/40 transition-all transform hover:scale-105 active:scale-95">
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
