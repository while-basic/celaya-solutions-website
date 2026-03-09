/* Brand tokens: cs-orange, cs-gray-700, cs-font-mono, cs-font-display, cs-font-body */
import React, { useState } from "react";
import type { Instrument } from "../data/instruments.ts";
import { InstrumentCard } from "./InstrumentCard.tsx";
import { InstrumentModal } from "./InstrumentModal.tsx";

export function InstrumentRegistry({ instruments }: { instruments: Instrument[] }) {
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);

  return (
    <section id="catalog" className="py-24 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto px-10">
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
              Registry
            </span>
            <span className="block w-10 h-px bg-cs-orange opacity-50" />
          </div>
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
            Catalog of Research Instruments
          </h2>
          <p className="font-body text-lg text-cs-gray-400 leading-relaxed">
            This page catalogs research instruments used to observe, constrain, and audit cognitive systems.
            Instruments are not products. They are analytical probes. Each exists to make a specific class
            of behavior visible, testable, or falsifiable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {instruments.map(item => (
            <InstrumentCard
              key={item.slug}
              item={item}
              onClick={() => setSelectedInstrument(item)}
            />
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-cs-gray-700">
          <p className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em]">
            Instruments are evaluated continuously. Inclusion does not imply stability.
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
