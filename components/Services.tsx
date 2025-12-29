
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Design Solutions <br /> for Every Stage.</h2>
            <p className="text-slate-500 text-lg font-medium">
              High-quality Canva assets designed with brand strategy in mind. Pricing is transparent and quality is guaranteed.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-100">
             <span className="text-sm font-bold text-slate-400">Custom packages available</span>
             <i className="fa-solid fa-circle-info text-[#7d2ae8]"></i>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-50 hover:shadow-2xl hover:shadow-[#7d2ae8]/5 transition-all group"
            >
              <div className="w-16 h-16 bg-[#7d2ae8]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#7d2ae8] group-hover:text-white transition-all duration-500">
                <i className={`fa-solid ${service.icon} text-3xl text-[#7d2ae8] group-hover:text-white transition-all`}></i>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
                {service.description}
              </p>
              <div className="pt-6 border-t border-slate-50">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Starting Investment</p>
                <p className="text-[#7d2ae8] font-black text-xl">
                  {service.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
