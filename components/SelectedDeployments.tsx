/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-gray-*, cs-font-display, cs-font-mono, cs-font-body */
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Deployment {
  instrument: string;
  client: string;
  problem: string;
  result: string;
  accent: string;
}

const deployments: Deployment[] = [
  {
    instrument: 'Recall',
    client: 'Texas Archive',
    problem: 'Query 500 years of state archive PDFs with cited, verifiable answers.',
    result: 'CI 0.94 citation accuracy across 500 GB mixed-format corpus. $20/mo infrastructure floor.',
    accent: 'border-t-cs-orange',
  },
  {
    instrument: 'Research on Myself',
    client: 'Internal Lab',
    problem: 'Local-first personal knowledge base with sub-500 ms inference and no cloud dependency.',
    result: 'Latency < 400 ms on consumer hardware. 100% local — no tokens leave the device.',
    accent: 'border-t-cs-green',
  },
  {
    instrument: 'CORTEX',
    client: 'Manufacturing Client',
    problem: 'Real-time anomaly detection across production telemetry with human-readable audit trail.',
    result: '14-agent system. Anomaly detection latency < 200 ms. Every decision produces a signed trace receipt.',
    accent: 'border-t-cs-yellow',
  },
];

const SelectedDeployments: React.FC = () => {
  const handleAppliedNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = 'applied';
  };

  return (
    <section id="deployments" className="py-20 px-6 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
                Selected Deployments
              </span>
              <span className="block w-10 h-px bg-cs-orange opacity-50" />
            </div>
            <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05]">
              Lab Instruments in Production
            </h2>
          </div>
          <a
            href="#applied"
            onClick={handleAppliedNav}
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-cs-gray-400 hover:text-cs-orange transition-colors pb-2 shrink-0 ml-6"
          >
            Work with the lab →
          </a>
        </div>

        <p className="font-body text-cs-gray-400 text-base leading-relaxed mb-12 max-w-2xl">
          Each deployment is a direct extension of lab research. Instruments are not repackaged off-the-shelf tools — they are measured, documented, and boundary-tested before deployment.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {deployments.map((d) => (
            <div
              key={d.instrument}
              className={`border border-cs-gray-700 rounded bg-cs-gray-900 p-6 hover:bg-cs-gray-800 transition-colors duration-300 border-t-2 ${d.accent}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-sm font-medium tracking-[0.1em] uppercase text-white">
                  {d.instrument}
                </span>
                <span className="font-mono text-[0.65rem] text-cs-gray-300 uppercase tracking-[0.1em]">
                  {d.client}
                </span>
              </div>
              <p className="font-body text-[0.8125rem] text-cs-gray-300 leading-relaxed mb-3 italic">
                "{d.problem}"
              </p>
              <p className="font-body text-[0.8125rem] text-cs-gray-300 leading-relaxed">
                {d.result}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-cs-gray-700">
          <p className="font-mono text-[0.7rem] text-cs-gray-400 uppercase tracking-[0.1em]">
            All deployments run VERDICT CI checks. Source and methodology available on request.
          </p>
          <a
            href="#applied"
            onClick={handleAppliedNav}
            className="inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-cs-gray-400 hover:text-cs-orange transition-colors shrink-0"
          >
            View applied work
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SelectedDeployments;
