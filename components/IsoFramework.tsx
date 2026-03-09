/* Brand tokens: cs-orange, cs-gray-700, cs-gray-900, cs-font-mono, cs-font-display, cs-font-body */
import React from 'react';

const IsoFramework: React.FC = () => {
  const standards = [
    {
      id: 'ISO 9001',
      title: 'Research process integrity',
      items: ['Versioned experiments', 'Repeatable pipelines', 'Controlled change records', 'Traceable decisions']
    },
    {
      id: 'ISO/IEC 27001',
      title: 'Information security',
      items: ['Local-first data handling', 'Encrypted storage', 'Explicit access boundaries', 'No passive surveillance']
    },
    {
      id: 'ISO/IEC 23894',
      title: 'AI risk management',
      items: ['Hazard identification per system', 'Misuse and drift detection', 'Human override points', 'Safe failure modes']
    },
    {
      id: 'ISO/IEC 25010',
      title: 'System quality',
      items: ['Reliability under iteration', 'Explainability as a metric', 'Maintainability over performance', 'Auditability by default']
    }
  ];

  return (
    <section id="iso-framework" className="py-24 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto px-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Governance Protocol
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
        </div>

        <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
          AI ISO Standards Framework
        </h2>
        <p className="font-body text-xl text-cs-gray-400 font-light leading-relaxed mb-12 max-w-2xl">
          Defines how all research systems are constrained, audited, and made reproducible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {standards.map((s, idx) => (
            <div key={idx} className="border border-cs-gray-700 bg-cs-gray-900 rounded p-6 hover:bg-cs-gray-800 transition-colors group">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[0.875rem] text-cs-gray-500 group-hover:text-cs-gray-300 tracking-widest">{s.id}</span>
              </div>
              <h3 className="font-display text-lg font-bold mb-4 tracking-tight">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item, i) => (
                  <li key={i} className="font-mono text-[0.875rem] text-cs-gray-400 flex items-start gap-2">
                    <span className="text-cs-gray-600 mt-0.5">&#8226;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-cs-gray-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-widest">
            Operational Principle: Standards act as constraints on exploration, not bureaucracy.
          </p>
          <p className="font-body text-[0.875rem] text-cs-gray-400 italic">
            All artifacts are produced with the assumption they may be inspected years later.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IsoFramework;
