/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-gray-700, cs-font-mono, cs-font-display, cs-font-body */
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

const typeStyles: Record<string, string> = {
  'Constraint Added':      'bg-cs-orange/10 text-cs-orange border-cs-orange/30',
  'Revision':              'bg-cs-gray-600 text-cs-gray-300 border-cs-gray-500',
  'Instrument Introduced': 'bg-cs-green/10 text-cs-green border-cs-green/25',
  'Observation':           'bg-cs-yellow/10 text-cs-yellow border-cs-yellow/25',
};

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-24 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto px-10">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
              Historical Archive
            </span>
            <span className="block w-10 h-px bg-cs-orange opacity-50" />
          </div>
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
            Research Timeline
          </h2>
          <p className="font-body text-lg text-cs-gray-400 italic max-w-2xl">
            This timeline records documented shifts in understanding, constraints, and system architecture.
          </p>
        </div>

        <div className="space-y-1">
          {researchLog.map((entry, idx) => (
            <div key={idx} className="border border-cs-gray-700 bg-cs-gray-900 rounded p-6 md:p-8 grid md:grid-cols-4 gap-6 hover:bg-cs-gray-800 transition-colors">
              <div className="md:col-span-1">
                <span className="font-mono text-[0.875rem] text-cs-gray-300 block mb-2">{entry.date}</span>
                <span className={`font-mono text-[0.875rem] uppercase tracking-[0.1em] px-2 py-1 rounded-sm border inline-block ${typeStyles[entry.type]}`}>
                  {entry.type}
                </span>
              </div>
              <div className="md:col-span-3">
                <p className="font-body text-lg text-cs-gray-300 leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-12 pt-8 border-t border-cs-gray-700">
          <p className="font-mono text-[0.875rem] text-cs-gray-300 uppercase tracking-[0.15em]">
            Log persistence: immutable. Entries derived from Notion timestamps.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Timeline;
