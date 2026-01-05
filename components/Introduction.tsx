
import React from 'react';
import { Microscope, Brain, Shield, AlertTriangle } from 'lucide-react';

const Introduction: React.FC = () => {
  const researchCategories = [
    {
      title: "Cognition",
      icon: <Brain className="w-5 h-5" />,
      description: "Metrics for executive function and human-in-the-loop auditing."
    },
    {
      title: "Infrastructure",
      icon: <Shield className="w-5 h-5" />,
      description: "Local-first inference layers and verifiable agent orchestration."
    },
    {
      title: "Risk",
      icon: <AlertTriangle className="w-5 h-5" />,
      description: "Identification of failure modes and systemic durability."
    }
  ];

  return (
    <section id="introduction" className="relative pt-48 pb-32 px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-32">
          <div className="flex flex-wrap items-center gap-6 mb-10">
            <div className="inline-flex items-center space-x-3 px-3 py-1 rounded-sm bg-white/5 border border-white/10">
              <Microscope className="w-3 h-3 text-zinc-500" />
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Independent Research Lab</span>
            </div>
            <div className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
              Current state: active research, selective publication.
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 leading-[0.9]">
            Celaya Solutions.
          </h1>
          <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-16">
            For researchers, engineers, and institutions evaluating long-horizon AI systems.
          </p>
          
          <div className="max-w-3xl mb-12">
            <p className="text-2xl md:text-3xl text-zinc-300 font-light leading-snug mb-4">
              Celaya Solutions is an independent research lab. 
              We investigate the structural preservation of human agency within automated cognitive systems.
            </p>
            <p className="text-xs text-zinc-600 font-mono">
              No products. No consulting. No roadmap.
            </p>
          </div>
        </div>

        <div>
          <header className="mb-16">
            <h2 className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em] mb-4">Research Domains</h2>
            <div className="h-px w-24 bg-white/20"></div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {researchCategories.map((area, idx) => (
              <div key={idx} className="bg-black p-10 flex flex-col h-full">
                <div className="w-10 h-10 bg-zinc-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 text-zinc-600">
                  {area.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 tracking-tight">{area.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
