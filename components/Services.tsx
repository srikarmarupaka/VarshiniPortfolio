
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../constants';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleTailorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setSelectedService(null);
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="services" className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-tight font-display">Expert Services <br /> Tailored for You.</h2>
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
              whileHover={{ y: -10, rotate: 0.5 }}
              className="bg-white p-10 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-slate-50 hover:shadow-2xl hover:shadow-[#7d2ae8]/10 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-[#7d2ae8]/5 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-[#7d2ae8] transition-colors duration-500">
                <i className={`fa-solid ${service.icon} text-3xl text-[#7d2ae8] group-hover:text-white transition-colors duration-500`}></i>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight font-display">{service.title}</h3>
              <p className="text-slate-500 text-sm mb-10 leading-relaxed font-medium">
                {service.description}
              </p>
              <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">Starting At</p>
                  <p className="text-[#7d2ae8] font-black text-xl font-sans">
                    {service.price}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedService(service)}
                  className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-[#7d2ae8] group-hover:border-[#7d2ae8] transition-all hover:bg-[#7d2ae8]/5"
                  title="Tailor this service"
                >
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#7d2ae8]/10 rounded-xl flex items-center justify-center text-[#7d2ae8]">
                      <i className={`fa-solid ${selectedService.icon} text-xl`}></i>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black font-display">Tailor your {selectedService.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    <i className="fa-solid fa-times"></i>
                  </button>
                </div>

                {formStatus === 'success' ? (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <h4 className="text-2xl font-black mb-2 font-display">Requirements Received!</h4>
                    <p className="text-slate-500">I will reach out to discuss how we can make this project perfect.</p>
                  </div>
                ) : (
                  <form onSubmit={handleTailorSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Business / Brand Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#7d2ae8] outline-none transition-all font-medium"
                        placeholder="e.g. Aura Wellness"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Preferred Tone</label>
                        <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#7d2ae8] outline-none transition-all font-medium appearance-none">
                          <option>Minimalist</option>
                          <option>Vibrant & Bold</option>
                          <option>Classic Luxury</option>
                          <option>Modern Tech</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Urgency</label>
                        <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#7d2ae8] outline-none transition-all font-medium appearance-none">
                          <option>Normal (3-5 days)</option>
                          <option>Express (24-48 hrs)</option>
                          <option>I'm flexible</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Specific Requirements</label>
                      <textarea 
                        rows={3}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#7d2ae8] outline-none transition-all font-medium resize-none"
                        placeholder="Tell me more about what you need..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full canva-gradient text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:shadow-[#7d2ae8]/30 transition-all flex items-center justify-center gap-3"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <i className="fa-solid fa-spinner fa-spin"></i>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <span>Get Customized Quote</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
