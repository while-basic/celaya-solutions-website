import React, { useMemo, useState, useRef } from "react";
import { Search } from "lucide-react";
import type { Instrument } from "../data/instruments";
import { InstrumentCard } from "./InstrumentCard";
import { InstrumentModal } from "./InstrumentModal";

export function InstrumentRegistry({ instruments }: { instruments: Instrument[] }) {
  const [activeTag, setActiveTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lastFocusRef = useRef<HTMLElement>(null);

  const tags = useMemo(() => {
    const all = new Set<string>();
    instruments.forEach(i => i.tags.forEach(t => all.add(t)));
    return ["All", ...Array.from(all).sort()];
  }, [instruments]);

  const filtered = useMemo(() => {
    return instruments.filter(item => {
      const matchesTag = activeTag === "All" || item.tags.includes(activeTag);
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.whatItIs.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [instruments, activeTag, searchQuery]);

  const handleCardClick = (item: Instrument, el: HTMLElement) => {
    lastFocusRef.current = el;
    setSelectedInstrument(item);
    setIsModalOpen(true);
  };

  return (
    <section id="catalog" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Research Tools</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Instrument Registry</h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-lg">
              These are research instruments, not products. Each one is defined by what it is, a real-world example, and a structural analogy to ground its purpose.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
             <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
              <input
                type="text"
                placeholder="Filter instruments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 bg-zinc-950 border border-white/10 rounded-sm py-2 pl-10 pr-4 text-xs font-mono text-zinc-300 focus:outline-none focus:border-white/30 transition-all"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {tags.map(t => (
            <button 
              key={t} 
              onClick={() => setActiveTag(t)}
              className={`px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest border transition-all rounded-sm
                ${activeTag === t 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-zinc-500 border-white/10 hover:border-white/30'}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <InstrumentCard 
              key={item.slug} 
              item={item} 
              onClick={(el) => handleCardClick(item, el)}
            />
          ))}
        </div>
      </div>

      <InstrumentModal 
        open={isModalOpen}
        item={selectedInstrument}
        onClose={() => setIsModalOpen(false)}
        returnFocusRef={lastFocusRef as any}
      />
    </section>
  );
}