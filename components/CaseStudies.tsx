/* Brand tokens: cs-orange, cs-green, cs-gray-*, cs-font-display, cs-font-mono, cs-font-body */
import React from 'react';

const cases = [
  {
    id: '01',
    title: 'Texas Archive',
    subtitle: '500 years of Texas history. Searchable in seconds.',
    description:
      'The Texas State Library holds over 500GB of mixed scanned and text PDFs spanning 500 years of state history. We built a full AI research platform on top of it — 6,828 documents ingested, vectorized, and deployed on Railway with Stripe billing and Supabase auth.',
    metrics: [
      { value: '6,828', label: 'Documents' },
      { value: '500 GB', label: 'Archive size' },
      { value: '500 yr', label: 'Coverage' },
    ],
    accentBorder: 'border-t-cs-orange',
    metricColor: 'text-cs-orange',
  },
  {
    id: '02',
    title: 'MYSELF',
    subtitle: 'A personal knowledge base that knows how you think.',
    description:
      'Built for a solo researcher managing thousands of notes, documents, and session logs. MYSELF is a local-first AI assistant that runs entirely on-device — no cloud, no data leaving the machine. Queries return cited answers in under 500ms.',
    metrics: [
      { value: 'Local', label: 'Deployment' },
      { value: '<500ms', label: 'Query time' },
      { value: '0', label: 'Cloud calls' },
    ],
    accentBorder: 'border-t-cs-green',
    metricColor: 'text-cs-green',
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 px-6 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Case Studies
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
        </div>

        <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-12">
          Deployed Systems
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c) => (
            <div
              key={c.id}
              className={`border border-cs-gray-700 rounded bg-cs-gray-900 p-8 hover:bg-cs-gray-800 transition-colors duration-300 border-t-2 ${c.accentBorder}`}
            >
              <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-cs-gray-500 block mb-4">
                Case Study {c.id}
              </span>
              <h3 className="font-display text-[1.75rem] font-bold leading-tight mb-2">{c.title}</h3>
              <p className="font-body text-cs-gray-400 text-sm italic mb-4">{c.subtitle}</p>
              <p className="font-body text-cs-gray-400 text-sm leading-relaxed mb-8">{c.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-cs-gray-700">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <span className={`font-mono font-bold text-lg block ${c.metricColor}`}>{m.value}</span>
                    <span className="font-mono text-[0.7rem] text-cs-gray-500 uppercase tracking-[0.1em]">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
