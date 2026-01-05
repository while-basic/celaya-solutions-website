
import React, { useState } from "react";
import type { Instrument } from "../data/instruments.ts";
import { InstrumentCard } from "./InstrumentCard.tsx";
import { InstrumentModal } from "./InstrumentModal.tsx";

export function InstrumentRegistry({ instruments }: { instruments: Instrument[] }) {
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);

  return (
    <section id="catalog" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 max-w-3xl">
          <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Registry</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Catalog of Research Instruments</h2>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            This page catalogs research instruments used to observe, constrain, and audit cognitive systems. 
            Instruments are not products. They are analytical probes. Each exists to make a specific class 
            of behavior visible, testable, or falsifiable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {instruments.map(item => (
            <div key={item.slug} className="bg-black">
              <InstrumentCard 
                item={item} 
                onClick={() => setSelectedInstrument(item)} 
              />
            </div>
          ))}
        </div>

        <footer className="mt-20 pt-12 border-t border-white/5">
          <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.4em]">
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
