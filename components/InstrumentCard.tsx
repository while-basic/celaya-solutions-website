/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-gray-700, cs-gray-900, cs-font-mono, cs-font-body */
import React from "react";
import type { Instrument } from "../data/instruments.ts";

interface InstrumentCardProps {
  item: Instrument;
  onClick: () => void;
}

const classificationColor: Record<string, string> = {
  Cognition: 'text-cs-orange',
  Infrastructure: 'text-cs-green',
  Oversight: 'text-cs-yellow',
};

export const InstrumentCard: React.FC<InstrumentCardProps> = ({ item, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group text-left border border-cs-gray-700 p-6 rounded bg-cs-gray-900 hover:bg-cs-gray-800 transition-colors duration-300 flex flex-col h-full w-full"
    >
      <header className="mb-4 w-full">
        <span className={`font-mono text-[0.875rem] uppercase tracking-[0.15em] block mb-2 ${classificationColor[item.classification] || 'text-cs-gray-400'}`}>
          {item.classification}
        </span>
        <h3 className="font-display text-xl font-bold tracking-tight text-white">
          {item.title}
        </h3>
      </header>
      <p className="font-body text-[0.875rem] text-cs-gray-400 leading-relaxed">
        {item.role}
      </p>
    </button>
  );
};
