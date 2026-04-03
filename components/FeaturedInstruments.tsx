/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-gray-*, cs-font-display, cs-font-mono, cs-font-body */
import React from 'react';
import { ArrowRight } from 'lucide-react';

type FeaturedInstrument = {
  slug: string;
  name: string;
  classification: string;
  classColor: string;
  accent: string;
  status: string;
  statusColor: string;
  role: string;
  ciRole: string;
  exampleOutput: string;
  tags: string[];
};

const featured: FeaturedInstrument[] = [
  {
    slug: 'verdict',
    name: 'VERDICT',
    classification: 'Oversight',
    classColor: 'text-cs-yellow',
    accent: 'border-t-cs-orange',
    status: 'Active',
    statusColor: 'text-cs-green',
    role: 'Flagship claim confidence evaluator. Scores every assertion against its provenance, confidence bounds, and risk metadata. Produces the canonical Coherence Index for the instrument ecosystem.',
    ciRole: 'Primary CI producer — every evaluated claim exits with a 0.0–1.0 score and a risk classification.',
    exampleOutput: 'CI = 0.28 · Risk: HIGH · DEFER · Receipt #VRD-2024-0891',
    tags: ['Flagship', 'CI-producer', 'Safety', 'Audit'],
  },
  {
    slug: 'cortex',
    name: 'CORTEX',
    classification: 'Cognition',
    classColor: 'text-cs-orange',
    accent: 'border-t-cs-green',
    status: 'Active',
    statusColor: 'text-cs-green',
    role: '14-agent manufacturing intelligence system. Measures coherence between planned production processes and observed physical outputs. Detects anomalies before they propagate to quality gates.',
    ciRole: 'Produces per-run coherence scores for physical process lines. Feeds anomaly data to SIGNAL.',
    exampleOutput: 'Run coherence: 0.81 · 2 anomalies flagged · Process deviation receipt logged',
    tags: ['Flagship', 'Manufacturing', 'Multi-agent', 'Telemetry'],
  },
  {
    slug: 'clos',
    name: 'CLOS',
    classification: 'Cognition',
    classColor: 'text-cs-orange',
    accent: 'border-t-cs-green',
    status: 'Active',
    statusColor: 'text-cs-green',
    role: 'Cognitive Life Operating System. 37-agent system fusing physiological and behavioral telemetry to measure operator cognitive load. The primary instrument for human-AI interaction coherence.',
    ciRole: 'Outputs a per-session load CI that gates Volt interrupt scheduling and feeds SIGNAL.',
    exampleOutput: 'CI = 0.23 · Load: OVERLOADED · Volt delay: 22 min · Receipt issued',
    tags: ['Flagship', 'Biometrics', 'Local-first', 'Cognition'],
  },
  {
    slug: 'signal',
    name: 'SIGNAL',
    classification: 'Oversight',
    classColor: 'text-cs-yellow',
    accent: 'border-t-cs-yellow',
    status: 'Active',
    statusColor: 'text-cs-green',
    role: 'Cross-instrument pattern detection engine. Aggregates telemetry feeds from CLOS, CORTEX, and SENTINEL to surface correlations that single-domain analysis cannot see. Identifies systemic coherence failures before they manifest as incidents.',
    ciRole: 'Consumer of CI scores from all active instruments. Generates multi-domain anomaly reports.',
    exampleOutput: 'Correlation detected: CLOS overload + CORTEX deviation → System-level alert raised',
    tags: ['Pattern-detection', 'Cross-domain', 'Anomaly-detection'],
  },
  {
    slug: 'eppe',
    name: 'EPPE',
    classification: 'Civic',
    classColor: 'text-cs-green',
    accent: 'border-t-cs-yellow',
    status: 'Research',
    statusColor: 'text-cs-yellow',
    role: 'El Paso Proof Engine. Generates verifiable, machine-readable proof of municipal data accuracy. Targets water analysis, public contracts, and environmental monitoring — infrastructure accountability for a border city.',
    ciRole: 'Applies CI scoring to public data claims. A low CI triggers a public accountability flag.',
    exampleOutput: 'Water analysis data CI = 0.61 · COHERENT · Public attestation minted',
    tags: ['Civic', 'El Paso', 'Proof-systems', 'Border-intelligence'],
  },
];

const FeaturedInstruments: React.FC = () => {
  const handleCatalogNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = 'catalog';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="featured-instruments" className="py-24 px-6 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto">

        {/* Label + CTA row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
              Primary Instruments
            </span>
            <span className="block w-10 h-px bg-cs-orange opacity-50" />
          </div>
          <a
            href="#catalog"
            onClick={handleCatalogNav}
            className="inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-cs-gray-400 hover:text-cs-orange transition-colors"
          >
            View all 45 instruments
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="mb-10">
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
            Instrument Hierarchy
          </h2>
          <p className="font-body text-cs-gray-400 text-base leading-relaxed max-w-2xl">
            Not all instruments carry equal weight. These five are the primary nodes — the instruments most actively generating coherence scores, traces, and artifacts. All others are supporting infrastructure.
          </p>
        </div>

        {/* Featured grid — first item spans full width on lg */}
        <div className="space-y-4">
          {/* Top row: VERDICT spans full width as the anchor */}
          <div
            className={`border border-cs-gray-700 rounded bg-cs-gray-900 p-8 hover:bg-cs-gray-800 transition-colors border-t-2 ${featured[0].accent}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className={`font-mono text-[0.7rem] uppercase tracking-[0.15em] block mb-1 ${featured[0].classColor}`}>
                      {featured[0].classification}
                    </span>
                    <h3 className="font-display text-3xl font-extrabold tracking-[-0.02em]">{featured[0].name}</h3>
                  </div>
                  <span className={`font-mono text-[0.65rem] uppercase tracking-[0.15em] px-2 py-1 rounded-sm border border-cs-green/25 bg-cs-green/10 ${featured[0].statusColor}`}>
                    {featured[0].status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {featured[0].tags.map(t => (
                    <span key={t} className="font-mono text-[0.6rem] uppercase tracking-[0.1em] px-2 py-0.5 border border-cs-gray-700 rounded-sm text-cs-gray-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 space-y-4">
                <p className="font-body text-cs-gray-300 text-base leading-relaxed">{featured[0].role}</p>
                <div className="border-l-2 border-cs-orange/30 pl-4">
                  <p className="font-mono text-[0.7rem] text-cs-gray-500 uppercase tracking-[0.1em] mb-1">CI Role</p>
                  <p className="font-body text-sm text-cs-gray-400">{featured[0].ciRole}</p>
                </div>
                <div className="border border-cs-gray-700 rounded bg-cs-black px-4 py-2">
                  <span className="font-mono text-[0.65rem] text-cs-gray-600 uppercase tracking-[0.1em] block mb-1">Example Output</span>
                  <span className="font-mono text-[0.75rem] text-cs-orange">{featured[0].exampleOutput}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row: CORTEX, CLOS, SIGNAL, EPPE in 2×2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.slice(1).map((inst) => (
              <div
                key={inst.slug}
                className={`border border-cs-gray-700 rounded bg-cs-gray-900 p-6 hover:bg-cs-gray-800 transition-colors border-t-2 ${inst.accent}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`font-mono text-[0.65rem] uppercase tracking-[0.15em] block mb-1 ${inst.classColor}`}>
                      {inst.classification}
                    </span>
                    <h3 className="font-display text-xl font-bold">{inst.name}</h3>
                  </div>
                  <span className={`font-mono text-[0.6rem] uppercase tracking-[0.15em] px-2 py-0.5 rounded-sm border ${
                    inst.status === 'Active'
                      ? 'border-cs-green/25 bg-cs-green/10 text-cs-green'
                      : 'border-cs-yellow/25 bg-cs-yellow/10 text-cs-yellow'
                  }`}>
                    {inst.status}
                  </span>
                </div>
                <p className="font-body text-sm text-cs-gray-400 leading-relaxed mb-4">{inst.role}</p>
                <div className="border border-cs-gray-700 rounded bg-cs-black px-3 py-2 mb-4">
                  <span className="font-mono text-[0.6rem] text-cs-gray-600 uppercase tracking-[0.1em] block mb-0.5">Example Output</span>
                  <span className="font-mono text-[0.7rem] text-cs-orange">{inst.exampleOutput}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {inst.tags.filter(t => t !== 'Flagship').map(t => (
                    <span key={t} className="font-mono text-[0.55rem] uppercase tracking-[0.1em] px-1.5 py-0.5 border border-cs-gray-700 rounded-sm text-cs-gray-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full catalog link */}
        <div className="mt-8 pt-8 border-t border-cs-gray-700 flex items-center justify-between">
          <p className="font-mono text-[0.75rem] text-cs-gray-500">
            45 instruments across Cognition, Infrastructure, Oversight, Civic, Blockchain, Robotics, Protocol, and Audio.
          </p>
          <a
            href="#catalog"
            onClick={handleCatalogNav}
            className="inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.12em] px-4 py-2 border border-cs-gray-600 text-cs-gray-400 hover:border-cs-orange hover:text-cs-orange transition-all duration-200 rounded-sm"
          >
            View Full Instrument Registry
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default FeaturedInstruments;
