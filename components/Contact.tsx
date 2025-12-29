
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7d2ae8]/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-display">Ready to start <br /> something amazing?</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-md font-medium">
                Whether you have a specific project in mind or just want to explore possibilities, I'm here to help you visual your dreams.
              </p>
              
              <div className="space-y-6 mb-12 font-sans">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#00C4CC]">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Email Me</p>
                    <p className="text-lg">varshinicheela@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#7d2ae8]">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Chat with Me</p>
                    <p className="text-lg">+91 (555) 555-5555</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7d2ae8] transition-all">
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7d2ae8] transition-all">
                  <i className="fa-brands fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 text-slate-900 shadow-2xl relative">
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 bg-white rounded-[2.5rem] z-20 flex flex-col items-center justify-center text-center p-8"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 text-3xl">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <h3 className="text-2xl font-black mb-2">Message Sent!</h3>
                      <p className="text-slate-500 font-medium">Thank you for reaching out. Varshini will get back to you within 24 hours.</p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="mt-8 text-[#7d2ae8] font-bold text-sm hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#7d2ae8] focus:bg-white outline-none transition-all font-medium" 
                      placeholder="e.g. Rahul Sharma" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#7d2ae8] focus:bg-white outline-none transition-all font-medium" 
                      placeholder="rahul@example.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Project Brief</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#7d2ae8] focus:bg-white outline-none transition-all font-medium resize-none" 
                      placeholder="Tell me about your vision..."
                    ></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className={`w-full canva-gradient text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:shadow-[#7d2ae8]/30 transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-circle-notch fa-spin"></i>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <i className="fa-solid fa-paper-plane text-sm"></i>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
