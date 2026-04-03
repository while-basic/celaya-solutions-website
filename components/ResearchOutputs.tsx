/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-gray-*, cs-font-display, cs-font-mono, cs-font-body */
import React from 'react';
import { FileText, BarChart2, BookOpen, ScrollText, Package, ClipboardList, ArrowRight } from 'lucide-react';

const outputTypes = [
  {
    icon: <FileText className="w-4 h-4" />,
    label: 'Trace Receipts',
    count: 'Ongoing',
    desc: 'Immutable, signed records of every instrument invocation. Contain inputs, CI scores, decisions, and provenance hashes. Cannot be modified after issuance.',
    example: 'CLOS-2024-0891.json — CI 0.23, risk HIGH, Volt delayed 22 min',
    color: 'text-cs-orange',
    border: 'border-t-cs-orange',
  },
  {
    icon: <BarChart2 className="w-4 h-4" />,
    label: 'Benchmarks',
    count: 'Published',
    desc: 'CI score distributions across test datasets for each instrument. Establishes baseline performance envelopes and drift thresholds. Used to calibrate DELTA.',
    example: 'VERDICT-bench-2024Q4: n=1,240 claims, median CI 0.61, σ=0.18',
    color: 'text-cs-green',
    border: 'border-t-cs-green',
  },
  {
    icon: <BookOpen className="w-4 h-4" />,
    label: 'Lab Notes',
    count: 'Live',
    desc: 'Research observations published as they occur. Include anomalies, unexpected findings, instrument failures, and methodology revisions. Not filtered for success.',
    example: 'LN-047: CLOS correlation with SpO₂ weaker than baseline in high-altitude conditions',
    color: 'text-cs-yellow',
    border: 'border-t-cs-yellow',
  },
  {
    icon: <ScrollText className="w-4 h-4" />,
    label: 'Protocols',
    count: 'Versioned',
    desc: 'Formal operating procedures for each instrument. Define valid input ranges, failure modes, calibration requirements, and mandatory human review thresholds.',
    example: 'VERDICT-PROTO-v2.1: Threshold CI < 0.3 requires dual human sign-off before archival',
    color: 'text-cs-orange',
    border: 'border-t-cs-orange',
  },
  {
    icon: <Package className="w-4 h-4" />,
    label: 'Versioned Artifacts',
    count: 'Cryptographically signed',
    desc: 'Complete, reproducible source bundles produced by the Artifacts instrument. Can be re-run against any historical system state. Stored with cryptographic provenance.',
    example: 'texas-archive-rag-v1.2.0.bundle — sha256: b7e3f1a9d2c4... — 6,828 docs',
    color: 'text-cs-green',
    border: 'border-t-cs-green',
  },
  {
    icon: <ClipboardList className="w-4 h-4" />,
    label: 'Field Reports',
    count: 'Post-deployment',
    desc: 'Deployment-condition analysis reports issued after instruments are run in production. Document real-world performance vs. benchmarks, encountered failure modes, and calibration drift.',
    example: 'FR-CORTEX-2024-11: 3 anomaly patterns not present in lab — baseline updated',
    color: 'text-cs-yellow',
    border: 'border-t-cs-yellow',
  },
];

const ResearchOutputs: React.FC = () => {
  const handleLabNotesNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = 'lab-notes';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="research-outputs" className="py-24 px-6 border-b border-cs-gray-800 bg-cs-gray-900">
      <div className="max-w-[1100px] mx-auto">

        {/* Label + CTA row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
              Lab Output
            </span>
            <span className="block w-10 h-px bg-cs-orange opacity-50" />
          </div>
          <a
            href="#lab-notes"
            onClick={handleLabNotesNav}
            className="inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-cs-gray-400 hover:text-cs-orange transition-colors"
          >
            Read Lab Notes
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="mb-12">
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
            What the Lab Produces
          </h2>
          <p className="font-body text-cs-gray-400 text-base leading-relaxed max-w-2xl">
            A research lab proves its claims through output. Every instrument run produces an artifact. Every artifact is inspectable. These are the six output classes this lab produces — not descriptions of what it plans to build.
          </p>
        </div>

        {/* Output grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {outputTypes.map((output) => (
            <div
              key={output.label}
              className={`border border-cs-gray-700 rounded bg-cs-black p-6 hover:bg-cs-gray-900 transition-colors border-t-2 ${output.border}`}
            >
              {/* Icon + label */}
              <div className="flex items-center gap-3 mb-4">
                <span className={output.color}>{output.icon}</span>
                <div>
                  <h3 className="font-mono text-[0.8rem] font-medium tracking-[0.1em] uppercase text-cs-white">
                    {output.label}
                  </h3>
                  <span className={`font-mono text-[0.6rem] uppercase tracking-[0.1em] ${output.color}`}>
                    {output.count}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-[0.8125rem] text-cs-gray-400 leading-relaxed mb-4">
                {output.desc}
              </p>

              {/* Example */}
              <div className="border border-cs-gray-700 rounded bg-cs-gray-900 px-3 py-2">
                <span className="font-mono text-[0.6rem] text-cs-gray-600 uppercase tracking-[0.1em] block mb-1">
                  Example
                </span>
                <span className="font-mono text-[0.68rem] text-cs-gray-400 leading-relaxed">
                  {output.example}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-10 pt-8 border-t border-cs-gray-700">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="font-body text-cs-gray-500 text-sm leading-relaxed max-w-xl">
              All outputs are produced with the assumption they may be inspected years later. Provenance is not optional — it is the product.
            </p>
            <a
              href="#lab-notes"
              onClick={handleLabNotesNav}
              className="inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.12em] px-4 py-2 bg-cs-orange text-cs-black font-bold hover:brightness-110 transition-all duration-200 rounded-sm shrink-0"
            >
              Read Lab Notes
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResearchOutputs;
