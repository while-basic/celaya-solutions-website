/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-gray-700, cs-gray-900, cs-font-mono, cs-font-body */
import React from "react";
import type { Instrument } from "../data/instruments.ts";
import { InstrumentOrb } from "./InstrumentOrb.tsx";

interface InstrumentCardProps {
  item: Instrument;
  onClick: () => void;
}

const classificationColor: Record<string, string> = {
  Cognition:      'text-cs-orange',
  Infrastructure: 'text-cs-green',
  Oversight:      'text-cs-yellow',
  Civic:          'text-cs-green',
  Blockchain:     'text-cs-orange',
  Robotics:       'text-cs-yellow',
  Protocol:       'text-cs-gray-300',
  Audio:          'text-purple-400',
};

export const InstrumentCard: React.FC<InstrumentCardProps> = ({ item, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group text-left border border-cs-gray-700 p-6 rounded bg-cs-gray-900 hover:bg-cs-gray-800 transition-colors duration-300 flex flex-col h-full w-full"
    >
      <header className="mb-4 w-full">
        {/* Classification + Published badge */}
        <div className="flex items-center justify-between mb-2.5">
          <span className={`font-mono text-[0.75rem] uppercase tracking-[0.15em] ${classificationColor[item.classification] || 'text-cs-gray-400'}`}>
            {item.classification}
          </span>
          {item.externalUrl && (
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.1em] text-cs-green border border-cs-green/25 px-1.5 py-0.5 rounded-sm">
              Published ↗
            </span>
          )}
        </div>
        {/* Title row: name left, orb right */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-bold tracking-tight text-white leading-tight flex-1 min-w-0">
            {item.title}
          </h3>
          <div className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            <InstrumentOrb slug={item.slug} size={52} />
          </div>
        </div>
      </header>
      <p className="font-body text-[0.875rem] text-cs-gray-400 leading-relaxed flex-1">
        {item.role.length > 160 ? item.role.slice(0, 157) + '…' : item.role}
      </p>
      <div className="mt-3 pt-3 border-t border-cs-gray-800 flex items-center gap-2">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-cs-gray-400 group-hover:text-cs-gray-200 transition-colors">
          {item.status}
        </span>
      </div>
    </button>
  );
};
