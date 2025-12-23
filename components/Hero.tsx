//----------------------------------------------------------------------------
// File:       Hero.tsx
// Project:    Celaya Solutions Website
// Created by: Celaya Solutions, 2025
// Author:     Christopher Celaya <chris@chriscelaya.com>
// Description: Hero section with research lab positioning and credibility metrics
// Version:    1.0.0
// License:    MIT
// Last Update: December 2025
//----------------------------------------------------------------------------

import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden px-6">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Building in El Paso, TX</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
            Cognitive systems research. <span className="text-zinc-500 italic">Built in public</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl mb-12">
            An independent research lab exploring human–AI collaboration, privacy-first systems, and metacognitive tools. We don&apos;t replicate existing products; We design atypical applications and infrastructure for the mind that don&apos;t fit conventional categories.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a 
              href="#clos" 
              className="group relative inline-flex items-center px-8 py-4 bg-white text-black font-bold tracking-tight rounded-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Explore CLOS
              <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a 
              href="#research" 
              className="px-8 py-4 border border-white/10 text-white font-mono text-sm uppercase hover:bg-zinc-900 transition-colors"
            >
              View Research
            </a>
            <a 
              href="https://github.com/celaya-solutions" 
              className="px-8 py-4 border border-white/10 text-white font-mono text-sm uppercase hover:bg-zinc-900 transition-colors inline-flex items-center space-x-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
