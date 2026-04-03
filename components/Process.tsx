/* Brand tokens: cs-orange, cs-gray-*, cs-font-display, cs-font-mono, cs-font-body */
import React from 'react';

const steps = [
  {
    num: '01',
    week: 'Week 1',
    title: 'Onboarding',
    desc: 'Discovery call, scope definition, document audit. We agree on what the system needs to answer.',
  },
  {
    num: '02',
    week: 'Weeks 1–2',
    title: 'Document Ingestion',
    desc: 'All PDFs, scanned docs, and text files are processed, chunked, and embedded into a private vector store.',
  },
  {
    num: '03',
    week: 'Weeks 2–3',
    title: 'AI Layer',
    desc: 'Retrieval pipeline is built and tested. LLM is configured with system prompts, citation formatting, and fallback behavior.',
  },
  {
    num: '04',
    week: 'Weeks 3–5',
    title: 'Interface',
    desc: 'Chat UI, API endpoints, auth, and billing are built to spec. You review and provide feedback.',
  },
  {
    num: '05',
    week: 'Week 6',
    title: 'Deploy & Hand Off',
    desc: 'System goes live. You receive full documentation, a handoff call, and ongoing support under the retainer.',
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Process
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
        </div>

        <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
          Six Weeks, Start to Deploy
        </h2>

        <p className="font-body text-cs-gray-400 text-base leading-relaxed mb-12 max-w-2xl">
          No long engagements. No scope creep. A defined process from first call to production.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative border border-cs-gray-700 rounded bg-cs-gray-900 p-6 hover:bg-cs-gray-800 transition-colors duration-300 border-t-2 border-t-cs-orange overflow-hidden"
            >
              {/* Ghost number */}
              <span className="absolute top-2 right-3 font-display font-extrabold text-[3.5rem] leading-none text-white/5 select-none pointer-events-none">
                {step.num}
              </span>
              <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-cs-gray-300 block mb-3">
                {step.week}
              </span>
              <h3 className="font-display text-base font-bold leading-tight mb-3 relative z-10">
                {step.title}
              </h3>
              <p className="font-body text-cs-gray-400 text-sm leading-relaxed relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
