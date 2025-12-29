
import React from 'react';
import { motion } from 'framer-motion';
import { TAGLINE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Designer background elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border-4 border-[#00C4CC]/20 rounded-full floating" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-[#7d2ae8]/20 rounded-lg transform rotate-12 floating" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#7d2ae8]/5 to-[#00C4CC]/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-slate-100 text-[#7d2ae8] text-xs font-bold mb-8 tracking-[0.2em] uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-[#00C4CC] animate-pulse"></span>
              <span>{TAGLINE}</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8">
              Visual Magic <br /> 
              <span className="text-transparent bg-clip-text canva-gradient">Crafted in Canva.</span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
              Transforming your brand vision into scroll-stopping reality. Specialist in logos, menu cards, invitations, and high-impact digital marketing assets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portfolio" 
                className="canva-gradient text-white text-center px-10 py-5 rounded-2xl font-extrabold shadow-2xl shadow-[#7d2ae8]/30 transition-all"
              >
                View Collections
              </motion.a>
              <motion.a 
                whileHover={{ backgroundColor: '#f8fafc' }}
                href="#ai-tool" 
                className="bg-white border-2 border-slate-100 text-slate-900 text-center px-10 py-5 rounded-2xl font-extrabold hover:border-slate-200 transition-all"
              >
                Try AI Brief Tool
              </motion.a>
            </div>
            
            <div className="mt-16 flex flex-wrap items-center gap-6">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block w-full mb-2">My Design Arsenal</span>
               <div className="flex gap-4 items-center">
                 <div className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 flex items-center gap-2">
                    <i className="fa-solid fa-paintbrush text-[#7d2ae8]"></i>
                    <span className="text-xs font-bold">Canva Pro</span>
                 </div>
                 <div className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 flex items-center gap-2">
                    <i className="fa-solid fa-image text-[#00C4CC]"></i>
                    <span className="text-xs font-bold">Graphic Design</span>
                 </div>
                 <div className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 flex items-center gap-2">
                    <i className="fa-solid fa-chart-line text-[#7d2ae8]"></i>
                    <span className="text-xs font-bold">Ad Strategy</span>
                 </div>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mt-20 lg:mt-0"
          >
             <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(125,42,232,0.25)] border-[12px] border-white bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1621600411688-4be93cd68504?auto=format&fit=crop&q=80&w=1200" 
                  alt="Varshini Design Workspace" 
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7d2ae8]/40 to-transparent"></div>
             </div>
             
             {/* Floating elements with specific services */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute -top-12 -right-6 glass-effect p-6 rounded-[2rem] shadow-2xl z-20"
             >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <i className="fa-solid fa-gift text-pink-500"></i>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-tighter">Festive Special</p>
                </div>
             </motion.div>

             <motion.div 
               animate={{ x: [0, 15, 0] }}
               transition={{ duration: 6, repeat: Infinity, delay: 1 }}
               className="absolute top-1/3 -left-12 glass-effect p-4 rounded-2xl shadow-2xl z-20"
             >
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-check-double text-green-500"></i>
                  <span className="text-sm font-black">Menu Expert</span>
                </div>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
