
import React from "react";
import type { Instrument } from "../data/instruments.ts";

interface InstrumentCardProps {
  item: Instrument;
  onClick: () => void;
}

export const InstrumentCard: React.FC<InstrumentCardProps> = ({ item, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group text-left border border-white/5 p-8 rounded-sm bg-zinc-950/30 hover:bg-zinc-900/40 transition-all flex flex-col h-full relative w-full"
    >
      <header className="mb-6 w-full">
        <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.3em] block mb-2">
          {item.classification}
        </span>
        <h3 className="text-xl font-bold tracking-tight text-white">
          {item.title}
        </h3>
      </header>

      <div className="flex-grow w-full">
        <p className="text-sm text-zinc-500 leading-relaxed font-light">
          {item.role}
        </p>
      </div>
    </button>
  );
};
