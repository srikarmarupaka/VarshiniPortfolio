
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
    <section id="ai-brief" className="py-24 bg-[#7d2ae8]/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00C4CC] to-[#7d2ae8]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100 mb-6">
            <i className="fa-solid fa-robot text-[#7d2ae8]"></i>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Powered by Gemini AI</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Kickstart Your Design</h2>
          <p className="text-slate-600">Unsure what you need? Tell us about your business and let our AI generate a creative project brief to get us started.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="p-8 md:p-12">
            <form onSubmit={handleGenerate} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Industry</label>
                <input 
                  type="text" 
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g. Sustainable Fashion, Tech Startup"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-[#7d2ae8] focus:outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Project Type</label>
                <select 
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-[#7d2ae8] focus:outline-none transition-all"
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="Instagram Brand Kit">Instagram Brand Kit</option>
                  <option value="Pitch Deck">Pitch Deck</option>
                  <option value="Company Newsletter">Company Newsletter</option>
                  <option value="Logo & Branding">Logo & Branding</option>
                  <option value="Marketing Flyer">Marketing Flyer</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full canva-gradient text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all transform flex items-center justify-center space-x-2 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                >
                  {loading ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      <span>Crafting Your Brief...</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-wand-sparkles"></i>
                      <span>Generate Project Brief</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {error && <p className="text-red-500 text-center font-medium mb-6">{error}</p>}

            {brief && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="border-t border-slate-100 pt-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
                    <span className="bg-[#7d2ae8] text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                    <span>Proposed Strategy</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2 uppercase text-xs tracking-wider">Primary Goal</h4>
                      <p className="text-slate-600 leading-relaxed text-sm mb-6">{brief.goal}</p>
                      
                      <h4 className="font-bold text-slate-800 mb-2 uppercase text-xs tracking-wider">Target Audience</h4>
                      <p className="text-slate-600 leading-relaxed text-sm mb-6">{brief.targetAudience}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-slate-800 mb-3 uppercase text-xs tracking-wider">Suggested Palette</h4>
                      <div className="flex space-x-3 mb-6">
                        {brief.colorPalette.map((color, idx) => (
                          <div key={idx} className="flex flex-col items-center space-y-1">
                            <div 
                              className="w-10 h-10 rounded-full shadow-inner border border-slate-100" 
                              style={{ backgroundColor: color }}
                            ></div>
                            <span className="text-[10px] text-slate-400 font-mono">{color}</span>
                          </div>
                        ))}
                      </div>

                      <h4 className="font-bold text-slate-800 mb-2 uppercase text-xs tracking-wider">Estimated Timeline</h4>
                      <p className="text-[#7d2ae8] font-bold text-sm mb-6">{brief.estimatedTimeline}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-4">
                    <h4 className="font-bold text-slate-800 mb-4 uppercase text-xs tracking-wider">Key Visual Elements</h4>
                    <div className="flex flex-wrap gap-2">
                      {brief.suggestedElements.map((el, idx) => (
                        <span key={idx} className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-600 font-medium">
                          <i className="fa-solid fa-check text-green-500 mr-2"></i>
                          {el}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <button className="text-[#7d2ae8] font-bold hover:underline transition-all">
                      Like this brief? Book a discovery call to discuss it &rarr;
                    </button>
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
