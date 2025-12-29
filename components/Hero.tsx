
import React from 'react';
import { ArrowUpRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden px-6">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Public Launch: January 2026</span>
            </div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <Zap className="w-3 h-3 text-zinc-500" />
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Cross-Domain Synthesis</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
            Building AI systems that <span className="text-zinc-500 italic">augment human capabilities.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mb-12">
            A Neurodivergent research lab synthesizing Industrial Electromechanical engineering with advanced Cognitive Science. We build production-grade systems for the next era of human-machine collaboration.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a 
              href="#catalog" 
              className="group relative inline-flex items-center px-8 py-4 bg-white text-black font-bold tracking-tight rounded-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Core Research
              <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <div className="px-8 py-4 border border-white/10 text-zinc-500 font-mono text-sm uppercase">
              Industrial Systems Synthesis
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
