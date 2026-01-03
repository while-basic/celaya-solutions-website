
import React from 'react';
import { ArrowRight, Info, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden px-6 border-b border-white/5">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-5xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-zinc-900 border border-white/10 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Research Status: Active</span>
          </div>
          
          <h2 className="text-xs font-mono text-white/40 uppercase tracking-[0.4em] block mb-6">Research Question</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 leading-[1.1]">
            Can AI systems reduce cognitive load <span className="text-zinc-600">without eliminating human judgment?</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center space-x-2">
                <Info className="w-3 h-3" />
                <span>Operational Definitions</span>
              </h4>
              <div className="space-y-4">
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-200">Cognitive load</strong> = daily self-assessment (0-10 scale) + HRV-derived features as exploratory physiological proxy.
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-200">Human judgment preserved</strong> = decision points remain explicit, logged, reversible, AND system cannot execute irreversible actions without user-confirm step.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center space-x-2">
                <BookOpen className="w-3 h-3" />
                <span>Working Critique Under Test</span>
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed border-l border-zinc-800 pl-4 italic">
                "We observe that cloud-dependent automation systems tend to optimize for decision point removal rather than decision support."
                <br/>
                <a href="#analysis" className="text-blue-500 hover:text-blue-400 transition-colors inline-flex items-center space-x-1 mt-2">
                  <span>View Comparative Analysis</span>
                  <ArrowRight className="w-2 h-2" />
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#catalog" className="px-8 py-4 bg-white text-black text-xs font-mono uppercase font-bold tracking-[0.2em] hover:bg-zinc-200 transition-colors flex items-center justify-center space-x-3">
              <span>View Instruments</span>
              <ArrowRight className="w-3 h-3" />
            </a>
            <a href="#lab-notes" className="px-8 py-4 border border-white/10 text-white text-xs font-mono uppercase font-bold tracking-[0.2em] hover:bg-white/5 transition-colors flex items-center justify-center">
              Explore Findings
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
