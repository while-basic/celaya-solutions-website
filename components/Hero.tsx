import React from 'react';
import { Shield, Database, UserCheck, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden px-6">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-zinc-900 border border-white/10 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Public Launch: January 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
            Celaya Solutions is a research lab in <span className="text-zinc-600 italic">El Paso, TX.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mb-12">
            We build <span className="text-white font-medium">local-first, provenance-aware instruments</span> that preserve human judgment. Not assistants, but environments for cognition.
          </p>

          <div className="flex flex-wrap gap-8 mb-16">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-sm bg-zinc-950 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white/20 transition-all">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-300">Local-first</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-sm bg-zinc-950 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white/20 transition-all">
                <Database className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-300">Provenance-aware</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-sm bg-zinc-950 border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white/20 transition-all">
                <UserCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-300">Human-judgment-first</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#catalog" className="px-8 py-4 bg-white text-black text-xs font-mono uppercase font-bold tracking-[0.2em] hover:bg-zinc-200 transition-colors flex items-center justify-center space-x-3">
              <span>Explore Instruments</span>
              <ArrowRight className="w-3 h-3" />
            </a>
            <a href="#philosophy" className="px-8 py-4 border border-white/10 text-white text-xs font-mono uppercase font-bold tracking-[0.2em] hover:bg-white/5 transition-colors flex items-center justify-center">
              Read Principles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;