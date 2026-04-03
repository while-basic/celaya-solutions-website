/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-gray-700, cs-font-mono, cs-font-display */
import React from 'react';

type SystemStatus = 'Active' | 'Live' | 'Research' | 'Deployed';

interface ResearchSystem {
  name: string;
  description: string;
  status: SystemStatus;
  accent: string;
  stack?: string;
}

const statusStyles: Record<SystemStatus, string> = {
  Active:   'bg-cs-green/10 text-cs-green border border-cs-green/25',
  Live:     'bg-cs-orange/15 text-cs-orange border border-cs-orange/30',
  Research: 'bg-cs-yellow/10 text-cs-yellow border border-cs-yellow/25',
  Deployed: 'bg-cs-green/10 text-cs-green border border-cs-green/25',
};

const systems: ResearchSystem[] = [
  {
    name: 'CORTEX',
    description: '14-agent manufacturing intelligence system for real-time production orchestration and anomaly detection.',
    status: 'Active',
    accent: 'border-t-cs-orange',
    stack: 'Multi-agent, real-time telemetry',
  },
  {
    name: 'CLOS',
    description: '37-agent cognitive life operating system. Fuses physiological and behavioral telemetry to mirror executive state.',
    status: 'Active',
    accent: 'border-t-cs-green',
    stack: 'Biometrics, local-first inference',
  },
  {
    name: 'EPPE',
    description: 'El Paso Proof Engine. Civic infrastructure for verifiable municipal data and accountability reporting.',
    status: 'Research',
    accent: 'border-t-cs-yellow',
    stack: 'Civic data, proof systems',
  },
  {
    name: 'MORTEM',
    description: 'Biometric blockchain lifecycle protocol for identity verification and end-of-life data management.',
    status: 'Research',
    accent: 'border-t-cs-orange',
    stack: 'Blockchain, biometrics',
  },
  {
    name: 'Project Jupiter',
    description: 'Civic accountability platform: water analysis, public infrastructure auditing, and environmental monitoring for El Paso.',
    status: 'Active',
    accent: 'border-t-cs-green',
    stack: 'Environmental data, civic reporting',
  },
  {
    name: 'Neural Child',
    description: 'Developmental AI with emotional memory architecture. Studies how synthetic cognition forms attachments and behavioral patterns.',
    status: 'Research',
    accent: 'border-t-cs-yellow',
    stack: 'Emotional memory, developmental AI',
  },
  {
    name: 'Celaya Chain Protocol',
    description: 'Layer 3 blockchain implementing Proof of Coherence consensus. Verifiable state transitions for cross-domain systems.',
    status: 'Research',
    accent: 'border-t-cs-orange',
    stack: 'Layer 3, Proof of Coherence',
  },
  {
    name: 'Juniper',
    description: '7-agent OpenClaw architecture for adaptive robotic control and dexterous manipulation research.',
    status: 'Active',
    accent: 'border-t-cs-green',
    stack: 'Robotics, OpenClaw',
  },
  {
    name: 'MERIDIAN',
    description: 'Meta-framework for cross-domain cognition. Orchestrates instrument-to-instrument communication across research boundaries.',
    status: 'Research',
    accent: 'border-t-cs-yellow',
    stack: 'Meta-framework, orchestration',
  },
  {
    name: 'SIGNAL',
    description: 'Pattern detection and anomaly identification across telemetry streams. Surfaces correlations invisible to single-domain analysis.',
    status: 'Active',
    accent: 'border-t-cs-orange',
    stack: 'Signal processing, anomaly detection',
  },
  {
    name: 'VERDICT',
    description: 'Claim confidence evaluator. Separates automated generation from system decision via risk threshold analysis.',
    status: 'Active',
    accent: 'border-t-cs-green',
    stack: 'Safety, audit, risk scoring',
  },
  {
    name: 'SENTINEL',
    description: 'Continuous monitoring layer for deployed research instruments. Watches for drift, degradation, and boundary violations.',
    status: 'Deployed',
    accent: 'border-t-cs-yellow',
    stack: 'Monitoring, drift detection',
  },
];

const ResearchEcosystem: React.FC = () => {
  return (
    <section id="research" className="py-24 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto px-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Research Ecosystem
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
        </div>

        <div className="flex items-end justify-between mb-4">
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05]">
            Full Ecosystem
          </h2>
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'catalog';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-cs-gray-400 hover:text-cs-orange transition-colors pb-2"
          >
            View full registry →
          </a>
        </div>
        <p className="font-body text-cs-gray-400 text-base leading-relaxed mb-12 max-w-2xl">
          45 research instruments across Cognition, Infrastructure, Oversight, Civic, Blockchain, Robotics, Protocol, and Audio. VERDICT, CORTEX, and CLOS are the primary active instruments. All others are supporting nodes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {systems.map((sys) => (
            <div
              key={sys.name}
              className={`border border-cs-gray-700 rounded bg-cs-gray-900 p-6 transition-colors duration-300 hover:bg-cs-gray-800 border-t-2 ${sys.accent}`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-mono text-base font-medium tracking-[0.1em] uppercase text-cs-white">
                  {sys.name}
                </h3>
                <span className={`font-mono text-[0.875rem] tracking-[0.1em] uppercase px-2 py-1 rounded-sm inline-block ${statusStyles[sys.status]}`}>
                  {sys.status}
                </span>
              </div>
              <p className="font-body text-cs-gray-400 text-[0.875rem] leading-relaxed mb-3">
                {sys.description}
              </p>
              {sys.stack && (
                <span className="font-mono text-[0.875rem] text-cs-gray-500 tracking-[0.05em]">
                  {sys.stack}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-8 pt-6 border-t border-cs-gray-700 flex items-center justify-between">
          <p className="font-mono text-[0.75rem] text-cs-gray-600 uppercase tracking-[0.1em]">
            Instrument inclusion does not imply stability. Status reflects current operational mode.
          </p>
          <a
            href="#catalog"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = 'catalog';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-mono text-[0.75rem] uppercase tracking-[0.12em] text-cs-gray-400 hover:text-cs-orange transition-colors shrink-0 ml-4"
          >
            Full Registry →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResearchEcosystem;
