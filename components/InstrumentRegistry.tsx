/* Brand tokens: cs-orange, cs-gray-700, cs-font-mono, cs-font-display, cs-font-body */
import React, { useState } from "react";
import type { Instrument } from "../data/instruments.ts";
import { InstrumentCard } from "./InstrumentCard.tsx";
import { InstrumentModal } from "./InstrumentModal.tsx";

const ALL_CLASSIFICATIONS = ['All', 'Cognition', 'Infrastructure', 'Oversight', 'Civic', 'Blockchain', 'Robotics', 'Protocol', 'Audio'] as const;
type FilterOption = typeof ALL_CLASSIFICATIONS[number];

const classFilterColors: Record<string, string> = {
  All:            'text-cs-gray-300  border-cs-gray-600',
  Cognition:      'text-cs-orange    border-cs-orange/50',
  Infrastructure: 'text-cs-green     border-cs-green/50',
  Oversight:      'text-cs-yellow    border-cs-yellow/50',
  Civic:          'text-cs-green     border-cs-green/50',
  Blockchain:     'text-cs-orange    border-cs-orange/50',
  Robotics:       'text-cs-yellow    border-cs-yellow/50',
  Protocol:       'text-cs-gray-300  border-cs-gray-500',
  Audio:          'text-purple-400   border-purple-400/50',
};

export function InstrumentRegistry({ instruments }: { instruments: Instrument[] }) {
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');

  const filtered = activeFilter === 'All'
    ? instruments
    : instruments.filter(i => i.classification === activeFilter);

  const counts: Record<string, number> = {};
  ALL_CLASSIFICATIONS.forEach(c => {
    counts[c] = c === 'All' ? instruments.length : instruments.filter(i => i.classification === c).length;
  });

  return (
    <section id="catalog" className="py-24 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto px-10">
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
              Registry
            </span>
            <span className="block w-10 h-px bg-cs-orange opacity-50" />
          </div>
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
            Catalog of Research Instruments
          </h2>
          <p className="font-body text-lg text-cs-gray-400 leading-relaxed mb-2">
            {instruments.length} instruments cataloged across Cognition, Infrastructure, Oversight, Civic, Blockchain, Robotics, Protocol, and Audio. Instruments are analytical probes — not products. Each exists to make a specific class of behavior visible, testable, or falsifiable.
          </p>
        </div>

        {/* Classification filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {ALL_CLASSIFICATIONS.map((cls) => {
            const isActive = activeFilter === cls;
            const colorClasses = classFilterColors[cls] || 'text-cs-gray-400 border-cs-gray-600';
            return (
              <button
                key={cls}
                onClick={() => setActiveFilter(cls)}
                className={`inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] px-3 py-1.5 rounded-sm border transition-all duration-200 ${
                  isActive
                    ? `${colorClasses} bg-white/5`
                    : 'text-cs-gray-500 border-cs-gray-700 hover:text-cs-gray-300 hover:border-cs-gray-600 bg-transparent'
                }`}
              >
                {cls}
                <span className={`text-[0.65rem] ${isActive ? '' : 'text-cs-gray-600'}`}>
                  {counts[cls]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(item => (
            <InstrumentCard
              key={item.slug}
              item={item}
              onClick={() => setSelectedInstrument(item)}
            />
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-cs-gray-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em]">
            Instruments are evaluated continuously. Inclusion does not imply stability.
          </p>
          <p className="font-mono text-[0.75rem] text-cs-gray-600">
            Showing {filtered.length} of {instruments.length} instruments
          </p>
        </footer>
      </div>

      <InstrumentModal
        open={!!selectedInstrument}
        item={selectedInstrument}
        onClose={() => setSelectedInstrument(null)}
      />
    </section>
  );
}
