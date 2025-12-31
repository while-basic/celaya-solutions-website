import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, XCircle, Info, Shield, Clock, Zap } from 'lucide-react';

const PrinciplesAccordion: React.FC = () => {
  const [openSection, setOpenSection] = useState<'principles' | 'boundaries' | 'evidence' | null>(null);

  const toggle = (section: 'principles' | 'boundaries' | 'evidence') => {
    setOpenSection(openSection === section ? null : section);
  };

  const principles = [
    "Do No Harm (non-negotiable)",
    "Novel, or it does not exist",
    "Connect technologies through abstraction",
    "Systems over wrappers",
    "Agency by design (local-first bias)",
    "Mirror, not replacement",
    "Proof of work gates collaboration",
    "Provenance by default (auditable trail)",
    "Cognition-safe systems (reduce load, reduce risk)",
    "Reversible iteration (safe failure, rollback)"
  ];

  return (
    <section id="philosophy" className="py-32 px-6 border-t border-white/5 bg-zinc-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">The Guardrails</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Principles & Boundaries</h2>
        </div>

        <div className="space-y-4">
          {/* Principles Section */}
          <div className="border border-white/5 bg-black rounded-sm overflow-hidden transition-all">
            <button 
              onClick={() => toggle('principles')}
              className="w-full flex items-center justify-between p-8 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center space-x-4">
                <span className="text-xs font-mono text-zinc-700">01</span>
                <span className="text-lg font-bold tracking-tight">The Lab Principles</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform ${openSection === 'principles' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-500 ease-in-out ${openSection === 'principles' ? 'max-h-[1000px] border-t border-white/5' : 'max-h-0'}`}>
              <div className="p-8 grid md:grid-cols-2 gap-4">
                {principles.map((p, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 border border-white/5 bg-white/[0.01] rounded-sm group">
                    <span className="text-xs font-mono text-zinc-700 group-hover:text-zinc-400 transition-colors">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-zinc-400 text-sm font-medium">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Boundaries Section */}
          <div className="border border-white/5 bg-black rounded-sm overflow-hidden transition-all">
            <button 
              onClick={() => toggle('boundaries')}
              className="w-full flex items-center justify-between p-8 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center space-x-4">
                <span className="text-xs font-mono text-zinc-700">02</span>
                <span className="text-lg font-bold tracking-tight">System Boundaries</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform ${openSection === 'boundaries' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-500 ease-in-out ${openSection === 'boundaries' ? 'max-h-[1000px] border-t border-white/5' : 'max-h-0'}`}>
              <div className="p-8 grid md:grid-cols-1 lg:grid-cols-3 gap-12">
                 <div className="space-y-6">
                    <h4 className="flex items-center space-x-2 text-emerald-500 text-[10px] font-mono uppercase tracking-widest">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Must Have</span>
                    </h4>
                    <ul className="space-y-3 text-xs text-zinc-400 font-mono">
                      <li>— Local-first by default</li>
                      <li>— Preserve human judgment</li>
                      <li>— Auditable trail</li>
                      <li>— Cognition-safe mechanics</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="flex items-center space-x-2 text-red-500/70 text-[10px] font-mono uppercase tracking-widest">
                      <XCircle className="w-4 h-4" />
                      <span>Must Not Have</span>
                    </h4>
                    <ul className="space-y-3 text-xs text-zinc-400 font-mono">
                      <li>— Generic SaaS framing</li>
                      <li>— Silent data uploads</li>
                      <li>— Surprise cloud dependencies</li>
                      <li>— Replacement narratives</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <h4 className="flex items-center space-x-2 text-blue-500/70 text-[10px] font-mono uppercase tracking-widest">
                      <Shield className="w-4 h-4" />
                      <span>Safety Boundary</span>
                    </h4>
                    <ul className="space-y-3 text-xs text-zinc-400 font-mono">
                      <li>— No deception/harassment</li>
                      <li>— No surveillance-by-default</li>
                      <li>— No high-stakes autonomy</li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>

          {/* Evidence Section (Always visible header-like if desired, but here as toggle) */}
          <div className="border border-white/5 bg-black rounded-sm overflow-hidden transition-all">
            <button 
              onClick={() => toggle('evidence')}
              className="w-full flex items-center justify-between p-8 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center space-x-4">
                <span className="text-xs font-mono text-zinc-700">03</span>
                <span className="text-lg font-bold tracking-tight">Evidence Required</span>
              </div>
              <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform ${openSection === 'evidence' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-500 ease-in-out ${openSection === 'evidence' ? 'max-h-[1000px] border-t border-white/5' : 'max-h-0'}`}>
              <div className="p-8 grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                   <p className="text-sm text-zinc-500 italic leading-relaxed">
                     "We don't pitch; we ship. Collaboration in this lab is gated by the quality of the delta, not the volume of the hype."
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 border border-white/5 bg-white/[0.01] rounded-sm">
                        <span className="text-[10px] font-mono text-zinc-600 block mb-2 uppercase tracking-widest">Primary Metric</span>
                        <span className="text-lg font-bold text-white">Runnable Artifacts</span>
                      </div>
                      <div className="p-4 border border-white/5 bg-white/[0.01] rounded-sm">
                        <span className="text-[10px] font-mono text-zinc-600 block mb-2 uppercase tracking-widest">Secondary Metric</span>
                        <span className="text-lg font-bold text-white">Provenance Logs</span>
                      </div>
                   </div>
                </div>
                <div className="p-6 bg-zinc-950 border border-white/10 rounded-sm">
                  <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">Verification Checkpoints</h4>
                   <ul className="space-y-3 text-xs text-zinc-400 font-mono">
                    <li className="flex items-center space-x-2">
                      <Info className="w-3 h-3 text-zinc-700" />
                      <span>Reproducible Proofs of Concept</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Clock className="w-3 h-3 text-zinc-700" />
                      <span>Long-term Sustainability Analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Zap className="w-3 h-3 text-zinc-700" />
                      <span>Failure mode Fallback scenarios</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesAccordion;