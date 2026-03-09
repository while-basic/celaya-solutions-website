/* Brand tokens: cs-orange, cs-gray-400, cs-gray-700, cs-font-mono, cs-font-display, cs-font-body */
import React from 'react';

const ResearchInstrumentsSummary: React.FC = () => {
  return (
    <section id="research-instruments" className="py-24 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto px-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Laboratory Tools
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
        </div>
        <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-8">
          Research Instruments
        </h2>

        <div className="max-w-4xl space-y-10">
          <p className="font-body text-xl text-cs-gray-400 font-light leading-relaxed">
            The lab utilizes specialized instruments as probes to analyze system behavior and architectural durability.
          </p>

          <div className="space-y-4">
            {[
              { label: 'Cognition', desc: 'Instruments assess executive function and pattern mirroring (e.g., CLOS, BiometricLM, Volt).' },
              { label: 'Infrastructure', desc: 'Instruments enable local orchestration and verifiable logic (e.g., LMU, Synapse, Rachel).' },
              { label: 'Oversight', desc: 'Instruments audit safety thresholds and decision provenance (e.g., Verdict, Artifacts).' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                <span className="font-mono text-[0.875rem] uppercase tracking-widest text-cs-gray-500 w-32 shrink-0">{item.label}</span>
                <p className="font-body text-base text-cs-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchInstrumentsSummary;
