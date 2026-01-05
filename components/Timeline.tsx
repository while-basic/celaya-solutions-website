
import React from 'react';

interface LogEntry {
  date: string;
  type: 'Observation' | 'Constraint Added' | 'Instrument Introduced' | 'Revision';
  description: string;
}

const researchLog: LogEntry[] = [
  {
    date: "2026-01-05",
    type: "Constraint Added",
    description: "ISO-standard logging and audit requirements were defined across models, prompts, and external access. This established minimum evidence needed for inspection and reproducibility."
  },
  {
    date: "2026-01-04",
    type: "Revision",
    description: "Research instruments were mapped by strategic value and interaction pathways. This clarified which components function as core probes versus supporting infrastructure."
  },
  {
    date: "2026-01-03",
    type: "Instrument Introduced",
    description: "An initial inventory of candidate research instruments was documented. This formalized instrumentation as the primary method of inquiry rather than feature development."
  },
  {
    date: "2025-12-31",
    type: "Instrument Introduced",
    description: "A canonical instruments registry was established. This created a stable reference for what behaviors each instrument is intended to make observable."
  },
  {
    date: "2025-12-30",
    type: "Observation",
    description: "Raw observation snapshots were captured with metadata. This enabled later comparison between subjective reports and structured artifacts."
  },
  {
    date: "2025-12-21",
    type: "Revision",
    description: "The CLOS pipeline was analyzed as an end-to-end cognitive system. This exposed coupling points where judgment could be unintentionally collapsed."
  },
  {
    date: "2025-12-06",
    type: "Observation",
    description: "Decision-point erosion was identified in consumer AI systems. This defined the requirement for explicit, auditable decision traces."
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-64 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32">
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.4em] block mb-4">Historical Archive</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">Research Timeline</h1>
          <p className="text-xl text-zinc-500 font-light max-w-2xl leading-relaxed italic">
            This timeline records documented shifts in understanding, constraints, and system architecture.
          </p>
        </header>

        <div className="space-y-px bg-white/5 border border-white/5">
          {researchLog.map((entry, idx) => (
            <div key={idx} className="bg-black p-10 md:p-16 grid md:grid-cols-4 gap-8 md:gap-16 border-b border-white/5 last:border-b-0">
              <div className="md:col-span-1">
                <span className="text-xs font-mono text-zinc-700 block mb-2">{entry.date}</span>
                <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-sm border inline-block ${
                  entry.type === 'Constraint Added' ? 'border-blue-500/20 text-blue-500/70 bg-blue-500/5' :
                  entry.type === 'Revision' ? 'border-zinc-500/20 text-zinc-400 bg-zinc-500/5' :
                  'border-white/10 text-zinc-500 bg-white/5'
                }`}>
                  {entry.type}
                </span>
              </div>
              <div className="md:col-span-3">
                <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-32 pt-12 border-t border-white/5">
          <p className="text-[10px] font-mono text-zinc-800 uppercase tracking-[0.4em]">
            Log persistence: immutable. entries derived from notion timestamps.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Timeline;
