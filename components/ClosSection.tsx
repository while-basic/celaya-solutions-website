
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ClosSection: React.FC = () => {
  return (
    <section id="clos" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto border-l border-white/10 pl-8 md:pl-16">
        <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Flagship Infrastructure</span>
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">CLOS <span className="text-zinc-700 italic">v0.1</span></h2>
        <div className="max-w-3xl">
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 leading-relaxed font-light">
            CLOS is not an assistant; it is a <span className="text-white font-medium">metacognitive mirror</span>. It functions as a privacy-hardened environment that observes your patterns to reduce executive load and surface blind spots. 
          </p>
          <p className="text-zinc-500 mb-10 max-w-2xl leading-relaxed italic">
            "We optimize for the preservation of human judgment, not the automation of it."
          </p>
          <a href="#catalog" className="inline-flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-white group">
            <span>Access Technical Dossier</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClosSection;
