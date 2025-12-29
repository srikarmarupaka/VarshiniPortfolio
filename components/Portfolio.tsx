
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Social Media', 'Branding', 'Presentations', 'Print'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 underline decoration-[#00C4CC]/30 underline-offset-8 decoration-8">Work that Works.</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'canva-gradient text-white shadow-xl shadow-[#7d2ae8]/30' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 aspect-[4/5] shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                    <span className="inline-block px-3 py-1 bg-[#00C4CC] text-white text-[10px] font-black uppercase tracking-widest rounded-lg w-fit mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-black text-white mb-3">{project.title}</h3>
                    <p className="text-white/80 text-sm font-medium leading-relaxed">{project.description}</p>
                    <div className="mt-6 flex gap-4">
                      <button className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white hover:text-[#7d2ae8] transition-all">
                        <i className="fa-solid fa-eye"></i>
                      </button>
                      <button className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white hover:text-[#7d2ae8] transition-all">
                        <i className="fa-solid fa-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
