
import React from 'react';
import { Bot, Cpu, Sparkles, ArrowUpRight, Globe, ExternalLink, Info, Zap } from 'lucide-react';
import { CUSTOM_GPTS, CustomGpt } from '../data/gpts.ts';

const GptCard: React.FC<{ item: CustomGpt }> = ({ item }) => {
  const isExternal = item.url.startsWith('http');
  
  return (
    <a
      href={item.url}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className="group text-left glass-card border-white/5 p-8 rounded-sm hover:border-white/20 transition-all flex flex-col h-full relative overflow-hidden focus:outline-none focus:ring-1 focus:ring-white/20"
    >
      <header className="mb-8 w-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map(t => (
              <span key={t} className="px-2 py-0.5 text-[8px] font-mono rounded-sm border border-white/10 bg-white/[0.02] text-zinc-500 uppercase tracking-widest">
                {t}
              </span>
            ))}
          </div>
          {isExternal ? (
            <ExternalLink className="w-4 h-4 text-zinc-800 group-hover:text-zinc-500 transition-colors" />
          ) : (
            <ArrowUpRight className="w-4 h-4 text-zinc-800 group-hover:text-zinc-500 transition-colors" />
          )}
        </div>
        <div className="flex items-center space-x-3 mb-1">
          <h3 className="text-2xl font-bold tracking-tight group-hover:text-white transition-colors">
            {item.title}
          </h3>
          <span className="text-[9px] font-mono text-zinc-700 border border-white/5 px-1.5 py-0.5 rounded uppercase tracking-widest">{item.platform}</span>
        </div>
        {item.subtitle && (
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{item.subtitle}</p>
        )}
      </header>

      <div className="space-y-6 flex-grow w-full">
        <section>
          <h4 className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-2 flex items-center space-x-1.5">
            <Info className="w-3 h-3" />
            <span>What it is</span>
          </h4>
          <p className="text-sm text-zinc-400 leading-relaxed font-light">{item.whatItIs}</p>
        </section>

        <section>
          <h4 className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.2em] mb-2 flex items-center space-x-1.5">
            <Zap className="w-3 h-3" />
            <span>Operational Utility</span>
          </h4>
          <p className="text-xs text-zinc-500 leading-relaxed italic">{item.exampleUseCase}</p>
        </section>
      </div>

      <footer className="mt-8 pt-6 border-t border-white/5 w-full">
        <h4 className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em] mb-2">Stop-and-Think</h4>
        <p className="text-[11px] font-mono text-zinc-600 leading-relaxed group-hover:text-zinc-400 transition-colors">
          "{item.stopAndThink}"
        </p>
      </footer>
    </a>
  );
};

const GptRegistry: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <header className="mb-16 border-l border-white/10 pl-8">
        <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Laboratory Node Inventory</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">GPTS</h1>
        <p className="text-xl text-zinc-400 font-light max-w-3xl">
          Discrete agentic nodes deployed on the OpenAI ecosystem. These are public-facing instruments designed for specific regional and industrial reasoning tasks.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
        {CUSTOM_GPTS.map((gpt) => (
          <GptCard key={gpt.slug} item={gpt} />
        ))}
      </div>

      <div className="mt-20 p-12 glass-card border-dashed border-white/10 rounded-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <Cpu className="w-12 h-12 text-zinc-800" />
            <div>
              <h4 className="text-lg font-bold mb-1">Custom Inference Architecture</h4>
              <p className="text-sm text-zinc-500">We design specialized agentic swarms for industrial and civic partners. Request a laboratory handshake to discuss custom nodes.</p>
            </div>
          </div>
          <a href="#contact" className="px-8 py-4 bg-white text-black text-[10px] font-mono uppercase font-bold tracking-[0.2em] flex items-center space-x-3 hover:bg-zinc-200 transition-colors">
            <span>Request Custom Node Handshake</span>
            <Sparkles className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GptRegistry;
