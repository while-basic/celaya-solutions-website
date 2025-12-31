
import React from "react";
import { Info, Zap, ArrowUpRight } from "lucide-react";
import type { Instrument } from "../data/instruments";

interface InstrumentCardProps {
  item: Instrument;
}

// Convert to React.FC to handle standard React props like 'key' correctly in the TypeScript environment
export const InstrumentCard: React.FC<InstrumentCardProps> = ({ item }) => {
  return (
    <article className="group glass-card border-white/5 p-8 rounded-sm hover:border-white/20 transition-all flex flex-col h-full relative overflow-hidden">
      <header className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map(t => (
              <span key={t} className="px-2 py-0.5 text-[8px] font-mono rounded-sm border border-white/10 bg-white/[0.02] text-zinc-500 uppercase tracking-widest">
                {t}
              </span>
            ))}
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-800 group-hover:text-zinc-500 transition-colors" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight mb-1 group-hover:text-white transition-colors">
          {item.title}
        </h3>
        {item.subtitle && (
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{item.subtitle}</p>
        )}
      </header>

      <div className="space-y-6 flex-grow">
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
            <span>Example Use Case</span>
          </h4>
          <p className="text-xs text-zinc-500 leading-relaxed italic">{item.exampleUseCase}</p>
        </section>
      </div>

      <footer className="mt-8 pt-6 border-t border-white/5">
        <h4 className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em] mb-2">Stop-and-Think</h4>
        <p className="text-[11px] font-mono text-zinc-600 leading-relaxed group-hover:text-zinc-400 transition-colors">
          "{item.stopAndThink}"
        </p>
      </footer>
    </article>
  );
};
