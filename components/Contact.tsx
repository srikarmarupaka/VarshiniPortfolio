
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#7d2ae8]/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to start <br /> something amazing?</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-md">
                Whether you have a specific project in mind or just want to explore possibilities, I'm here to help you visual your dreams.
              </p>
              
              <div className="space-y-6 mb-12">
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
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7d2ae8] transition-colors">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7d2ae8] transition-colors">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                {/* <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#7d2ae8] transition-colors">
                  <i className="fa-brands fa-dribbble"></i>
                </a> */}
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Your Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#7d2ae8] outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#7d2ae8] outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Project Brief</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:border-[#7d2ae8] outline-none transition-all" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button className="w-full canva-gradient text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                    Send Message
                  </button>
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
