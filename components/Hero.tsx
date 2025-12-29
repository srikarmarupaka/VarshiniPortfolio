
import React from 'react';
import { motion } from 'framer-motion';

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
              className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-8 tracking-widest uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>Available for Freelance Design</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8">
              Design that <br /> 
              <span className="text-transparent bg-clip-text canva-gradient">Defines You.</span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-medium">
              I'm Varshini, a Canva enthusiast turning bold ideas into pixel-perfect brand experiences. From vibrant social kits to high-stakes pitch decks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portfolio" 
                className="canva-gradient text-white text-center px-10 py-5 rounded-2xl font-extrabold shadow-2xl shadow-[#7d2ae8]/30 transition-all"
              >
                Explore Portfolio
              </motion.a>
              <motion.a 
                whileHover={{ backgroundColor: '#f8fafc' }}
                href="#ai-brief" 
                className="bg-white border-2 border-slate-100 text-slate-900 text-center px-10 py-5 rounded-2xl font-extrabold hover:border-slate-200 transition-all"
              >
                Generate a Brief
              </motion.a>
            </div>
            
            <div className="mt-16 flex items-center gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Trusted By</span>
               <div className="flex gap-6">
                 <i className="fa-brands fa-shopify text-3xl"></i>
                 <i className="fa-brands fa-airbnb text-3xl"></i>
                 <i className="fa-brands fa-stripe text-3xl"></i>
                 <i className="fa-brands fa-slack text-3xl"></i>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mt-20 lg:mt-0"
          >
             <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(125,42,232,0.25)] border-[12px] border-white bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c491?auto=format&fit=crop&q=80&w=1200" 
                  alt="Varshini Design Showcase" 
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7d2ae8]/40 to-transparent"></div>
             </div>
             
             {/* Dynamic Tooltips */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute -top-8 -right-8 glass-effect p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4"
             >
                <div className="w-10 h-10 bg-[#00C4CC] rounded-full flex items-center justify-center text-white">
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Magic Tool</p>
                  <p className="text-sm font-black">Canva Pro Expert</p>
                </div>
             </motion.div>

             <motion.div 
               animate={{ x: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, delay: 1 }}
               className="absolute -bottom-6 -left-12 glass-effect p-6 rounded-2xl shadow-2xl z-20"
             >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-8 h-8 rounded-full border-2 border-white" />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-black">500+ Graphics</p>
                    <p className="text-xs text-slate-500">Delivered this year</p>
                  </div>
                </div>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
