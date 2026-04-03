/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-gray-*, cs-font-display, cs-font-mono, cs-font-body */
import React from 'react';
import { Database, Cpu, BarChart2, FileText, GitBranch, Archive } from 'lucide-react';

const steps = [
  {
    n: '01',
    icon: <Database className="w-4 h-4" />,
    label: 'Input',
    desc: 'Raw telemetry, documents, claims, or behavioral logs enter the system from an operator or external feed.',
  },
  {
    n: '02',
    icon: <Cpu className="w-4 h-4" />,
    label: 'Instrument',
    desc: 'A designated instrument processes the input against its defined constraint spec and failure boundaries.',
  },
  {
    n: '03',
    icon: <BarChart2 className="w-4 h-4" />,
    label: 'Measure',
    desc: 'A Coherence Index (CI) score (0.0–1.0) is produced alongside a risk classification and confidence bound.',
  },
  {
    n: '04',
    icon: <FileText className="w-4 h-4" />,
    label: 'Trace',
    desc: 'An immutable, cryptographically signed receipt is stored — input, score, timestamp, instrument version.',
  },
  {
    n: '05',
    icon: <GitBranch className="w-4 h-4" />,
    label: 'Decide',
    desc: 'Human or system acts on the trace: proceed, defer, escalate, or log for SIGNAL correlation.',
  },
  {
    n: '06',
    icon: <Archive className="w-4 h-4" />,
    label: 'Artifact',
    desc: 'A versioned, reproducible output bundle is minted via the Artifacts instrument and archived with full provenance.',
  },
];

const ciBands = [
  { range: '0.00 – 0.29', label: 'INCOHERENT',   color: 'text-red-400',    bg: 'bg-red-400/10 border-red-400/20',    action: 'Defer action · Human review required · Alert to SIGNAL' },
  { range: '0.30 – 0.59', label: 'MARGINAL',      color: 'text-cs-yellow',  bg: 'bg-cs-yellow/10 border-cs-yellow/20', action: 'Flag · Proceed with enhanced logging · DELTA baseline check' },
  { range: '0.60 – 0.79', label: 'COHERENT',      color: 'text-cs-orange',  bg: 'bg-cs-orange/10 border-cs-orange/20', action: 'Acceptable · Artifact minted · Trace receipt issued' },
  { range: '0.80 – 1.00', label: 'HIGH',          color: 'text-cs-green',   bg: 'bg-cs-green/10 border-cs-green/20',   action: 'Proceed · Full artifact bundle · Provenance manifest published' },
];

const ciDimensions = [
  { label: 'Source Fidelity',        desc: '% of claims traceable to verified evidence in provenance log' },
  { label: 'Boundary Adherence',     desc: 'Inverse of constraint violation rate over evaluation window' },
  { label: 'Decision Consistency',   desc: 'Variance in outputs across equivalent context conditions' },
  { label: 'Provenance Coverage',    desc: '% of outputs with complete, unbroken audit trail' },
];

const ProofArchitecture: React.FC = () => {
  return (
    <section id="proof-architecture" className="py-24 px-6 border-b border-cs-gray-800 bg-cs-gray-900">
      <div className="max-w-[1100px] mx-auto">

        {/* Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Proof Architecture
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
        </div>

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-6">
              How Coherence<br />Becomes Visible
            </h2>
            <p className="font-body text-cs-gray-400 text-base leading-relaxed">
              Every observation runs through a deterministic six-step loop. Input enters, measurement exits, trace persists.
              Nothing is asserted without a receipt. No output exists without provenance.
            </p>
          </div>
          <div className="border border-cs-gray-700 rounded bg-cs-black p-6">
            <p className="font-mono text-[0.7rem] text-cs-gray-500 uppercase tracking-[0.2em] mb-4">
              Sample Chain — VERDICT · Claim Risk Evaluation
            </p>
            <div className="space-y-2 font-mono text-[0.75rem]">
              {[
                { k: 'Input',      v: '"System X reduces cognitive load by 40%" — no provenance cited', c: 'text-cs-gray-300' },
                { k: 'Instrument', v: 'VERDICT evaluates source quality, confidence bounds, risk metadata', c: 'text-cs-gray-300' },
                { k: 'Score',      v: 'CI = 0.28 · Risk: HIGH · Tag: INSUFFICIENT_PROVENANCE', c: 'text-red-400' },
                { k: 'Trace',      v: 'Receipt #VRD-2024-0891 · sha256: a3f9d2c8b1e7...', c: 'text-cs-gray-400' },
                { k: 'Decision',   v: 'DEFERRED · Flagged for human review · Logged to SIGNAL', c: 'text-cs-yellow' },
                { k: 'Artifact',   v: 'Rejection manifest minted · Version 1.0.0 · Immutable', c: 'text-cs-green' },
              ].map(({ k, v, c }) => (
                <div key={k} className="grid grid-cols-[80px_1fr] gap-3">
                  <span className="text-cs-gray-600 uppercase tracking-[0.1em] text-[0.65rem] mt-0.5">{k}</span>
                  <span className={c}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Six-step flow */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {steps.map((step, i) => (
              <div key={step.n} className="relative">
                {/* connector arrow — hidden on last item */}
                {i < steps.length - 1 && (
                  <span className="hidden lg:block absolute top-6 right-0 translate-x-1/2 z-10 text-cs-gray-600 font-mono text-xs">›</span>
                )}
                <div className="border border-cs-gray-700 rounded bg-cs-black p-4 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-cs-orange">{step.icon}</span>
                    <span className="font-mono text-[0.6rem] text-cs-gray-600 uppercase tracking-[0.15em]">{step.n}</span>
                  </div>
                  <h4 className="font-mono text-[0.8rem] font-medium tracking-[0.1em] uppercase text-cs-white mb-2">
                    {step.label}
                  </h4>
                  <p className="font-body text-[0.75rem] text-cs-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Canonical metric */}
        <div className="border border-cs-gray-700 rounded bg-cs-black p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Left: what CI measures */}
            <div>
              <p className="font-mono text-[0.7rem] text-cs-orange uppercase tracking-[0.2em] mb-4">
                Canonical Metric
              </p>
              <h3 className="font-display text-xl font-bold mb-2">Coherence Index (CI)</h3>
              <p className="font-body text-sm text-cs-gray-400 leading-relaxed mb-6">
                A composite score from 0.0 to 1.0 measuring how well a system's outputs align with its stated constraints, evidence base, and behavioral boundaries. Every instrument in the ecosystem produces or consumes a CI score.
              </p>
              <div className="space-y-3">
                {ciDimensions.map((d) => (
                  <div key={d.label} className="border-l-2 border-cs-gray-700 pl-4">
                    <p className="font-mono text-[0.7rem] text-cs-gray-300 uppercase tracking-[0.1em] mb-0.5">{d.label}</p>
                    <p className="font-body text-[0.75rem] text-cs-gray-500">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CI bands */}
            <div>
              <p className="font-mono text-[0.7rem] text-cs-gray-500 uppercase tracking-[0.2em] mb-4">
                Score → Action Mapping
              </p>
              <div className="space-y-2">
                {ciBands.map((b) => (
                  <div key={b.label} className={`border rounded p-3 ${b.bg}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-mono text-[0.7rem] font-bold tracking-[0.12em] ${b.color}`}>
                        {b.label}
                      </span>
                      <span className="font-mono text-[0.65rem] text-cs-gray-500">{b.range}</span>
                    </div>
                    <p className="font-mono text-[0.65rem] text-cs-gray-400">{b.action}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProofArchitecture;
