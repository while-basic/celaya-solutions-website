
import React from 'react';

const ResearchInstrumentsSummary: React.FC = () => {
  return (
    <section id="research-instruments" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em] block mb-4">Laboratory Tools</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Research Instruments</h2>
        </header>

        <div className="max-w-4xl space-y-10">
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            The lab utilizes specialized instruments as probes to analyze system behavior and architectural durability.
          </p>

          <div className="space-y-6 text-sm md:text-base text-zinc-500 font-light leading-relaxed">
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-700 w-32 shrink-0">Cognition</span>
              <p>Instruments assess executive function and pattern mirroring (e.g., CLOS, BiometricLM, Volt).</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-700 w-32 shrink-0">Infrastructure</span>
              <p>Instruments enable local orchestration and verifiable logic (e.g., LMU, Synapse, Rachel).</p>
            </div>

            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-700 w-32 shrink-0">Oversight</span>
              <p>Instruments audit safety thresholds and decision provenance (e.g., Verdict, Artifacts).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchInstrumentsSummary;
