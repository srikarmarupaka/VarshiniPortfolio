
import React, { useState } from 'react';
import { generateDesignBrief } from '../services/geminiService';
import { DesignBrief } from '../types';

const BriefGenerator: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [projectType, setProjectType] = useState('');
  const [loading, setLoading] = useState(false);
  const [brief, setBrief] = useState<DesignBrief | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry || !projectType) return;

    setLoading(true);
    setError(null);
    try {
      const result = await generateDesignBrief(industry, projectType);
      setBrief(result);
    } catch (err) {
      console.error(err);
      setError('Failed to generate brief. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="py-32 bg-[#7d2ae8]/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00C4CC] to-[#7d2ae8]"></div>
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-5 py-2 rounded-full shadow-sm border border-slate-100 mb-8">
            <i className="fa-solid fa-sparkles text-[#7d2ae8]"></i>
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">AI Design Strategy</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Brief Your Vision.</h2>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">Start your project with clarity. Use our AI to craft a comprehensive brief for your next campaign or brand asset.</p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="p-10 md:p-16">
            <form onSubmit={handleGenerate} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Industry / Niche</label>
                <input 
                  type="text" 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g. Fine Dining, Boutique Fashion"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#7d2ae8] focus:bg-white focus:outline-none transition-all font-medium"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Project Type</label>
                <select 
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#7d2ae8] focus:bg-white focus:outline-none transition-all font-medium appearance-none"
                  required
                >
                  <option value="">Choose asset type...</option>
                  <option value="Brand Identity & Logo">Brand Identity & Logo</option>
                  <option value="Restaurant Menu Card">Restaurant Menu Card</option>
                  <option value="Digital Advertisement">Digital Advertisement</option>
                  <option value="Festive Campaign Kit">Festive Campaign Kit</option>
                  <option value="Product Catalog">Product Catalog</option>
                  <option value="Invitation Suite">Invitation Suite</option>
                  <option value="Packaging Labels & Tags">Packaging Labels & Tags</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full canva-gradient text-white py-5 rounded-2xl font-black text-xl shadow-xl hover:shadow-2xl transition-all transform flex items-center justify-center space-x-3 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                >
                  {loading ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      <span>Synthesizing Strategy...</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-wand-magic-sparkles"></i>
                      <span>Generate Creative Brief</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {error && <p className="text-red-500 text-center font-bold mb-6">{error}</p>}

            {brief && (
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="border-t border-slate-50 pt-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                      <h3 className="text-3xl font-black text-slate-900 mb-8">AI-Generated Strategy</h3>
                      
                      <div className="space-y-8">
                        <div>
                          <h4 className="font-black text-[#7d2ae8] mb-3 uppercase text-[10px] tracking-[0.2em]">Core Objective</h4>
                          <p className="text-slate-600 leading-relaxed font-medium">{brief.goal}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-black text-[#7d2ae8] mb-3 uppercase text-[10px] tracking-[0.2em]">Audience Psychology</h4>
                          <p className="text-slate-600 leading-relaxed font-medium">{brief.targetAudience}</p>
                        </div>

                        <div>
                          <h4 className="font-black text-[#7d2ae8] mb-3 uppercase text-[10px] tracking-[0.2em]">Essential Elements</h4>
                          <div className="flex flex-wrap gap-2">
                            {brief.suggestedElements.map((el, idx) => (
                              <span key={idx} className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 text-xs text-slate-700 font-bold">
                                {el}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                      <h4 className="font-black text-slate-900 mb-6 uppercase text-xs tracking-widest">Design Aesthetic</h4>
                      
                      <div className="mb-8">
                        <p className="text-xs font-bold text-slate-400 mb-4 uppercase">Color Direction</p>
                        <div className="flex space-x-3">
                          {brief.colorPalette.map((color, idx) => (
                            <div key={idx} className="group relative">
                              <div 
                                className="w-12 h-12 rounded-2xl shadow-lg border-2 border-white transform transition-transform group-hover:scale-110" 
                                style={{ backgroundColor: color }}
                              ></div>
                              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-mono font-bold text-slate-400 transition-opacity">
                                {color}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-slate-400 mb-2 uppercase">Recommended Timeline</p>
                        <p className="text-[#7d2ae8] font-black text-xl">{brief.estimatedTimeline}</p>
                      </div>

                      <div className="mt-10">
                        <a href="#contact" className="block w-full text-center bg-slate-900 text-white py-4 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors">
                          Apply this Brief
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefGenerator;
