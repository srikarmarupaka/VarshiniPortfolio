
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              Varshini.<span className="text-[#7d2ae8]">Creatives</span>
            </span>
          </div>
          
          <div className="flex gap-10">
            <a href="#" className="text-slate-400 hover:text-slate-900 text-sm font-bold transition-all">Instagram</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 text-sm font-bold transition-all">Behance</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 text-sm font-bold transition-all">LinkedIn</a>
          </div>

          <p className="text-slate-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} Varshini.Creatives. Handcrafted in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
