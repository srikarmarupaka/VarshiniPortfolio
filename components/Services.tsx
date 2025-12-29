
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">Expert Services <br /> Tailored for You.</h2>
            <p className="text-slate-500 text-xl font-medium">
              From the first spark of a logo to complex catalogs and festive creative kits. Everything is custom-designed to tell your story.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-[2rem] shadow-xl border border-slate-100 mb-4">
             <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-bolt text-green-500"></i>
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Delivery Time</span>
                <span className="text-sm font-bold text-slate-900">48-72 Hours Avg.</span>
             </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10, rotate: 1 }}
              className="bg-white p-10 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-slate-50 hover:shadow-2xl hover:shadow-[#7d2ae8]/10 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-[#7d2ae8]/5 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-[#7d2ae8] transition-colors duration-500">
                <i className={`fa-solid ${service.icon} text-3xl text-[#7d2ae8] group-hover:text-white transition-colors duration-500`}></i>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{service.title}</h3>
              <p className="text-slate-500 text-sm mb-10 leading-relaxed font-medium">
                {service.description}
              </p>
              <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Starting At</p>
                  <p className="text-[#7d2ae8] font-black text-xl">
                    {service.price}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-[#7d2ae8] group-hover:border-[#7d2ae8] transition-all">
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
