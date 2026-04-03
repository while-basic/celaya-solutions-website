/* Brand tokens: cs-orange, cs-green, cs-gray-700, cs-font-mono, cs-font-display, cs-font-body */
import React from 'react';

const Philosophy: React.FC = () => {
  const principles = [
    "Do No Harm (non-negotiable)",
    "Novel, or it does not exist",
    "Connect technologies through abstraction",
    "Systems over wrappers",
    "Agency by design (local-first bias)",
    "Mirror, not replacement",
    "Proof of work gates collaboration",
    "Provenance by default (auditable trail)",
    "Cognition-safe systems (reduce load, reduce risk)",
    "Reversible iteration (safe failure, rollback)"
  ];

  const cards = [
    {
      title: "Systems Over Wrappers",
      description: "We refuse to build superficial UI layers around third-party APIs. We build architectural foundations from first principles."
    },
    {
      title: "Agency by Design",
      description: "Convenience is often a trap for data extraction. Our systems maximize local agency and minimize cloud dependency."
    },
    {
      title: "Mirror, Not Replacement",
      description: "AI should reveal patterns the user cannot see, not perform the thinking the user should do. We build tools for reflection."
    },
    {
      title: "Proof of Work",
      description: "We do not pitch; we ship. Collaboration in this lab is gated by the quality of the delta, not the volume of the hype."
    }
  ];

  return (
    <section id="philosophy" className="py-24 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto px-10">
        {/* Lab Principles */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
              The Standard
            </span>
            <span className="block w-10 h-px bg-cs-orange opacity-50" />
          </div>
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-12">
            Lab Principles
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-3">
              {principles.map((p, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-cs-gray-700 bg-cs-gray-900 rounded hover:bg-cs-gray-800 transition-colors group">
                  <span className="font-mono text-[0.875rem] text-cs-gray-500 group-hover:text-cs-gray-300">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-cs-gray-300 text-base font-medium font-body">{p}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center border-l-2 border-cs-orange/30 pl-12">
              <p className="font-display text-2xl text-cs-gray-400 font-normal leading-relaxed italic">
                "We optimize for the preservation of human judgment, not the automation of it."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((v, i) => (
              <div key={i} className="border border-cs-gray-700 bg-cs-gray-900 rounded p-6 hover:bg-cs-gray-800 transition-colors group">
                <div className="font-mono text-2xl text-cs-gray-600 group-hover:text-cs-orange transition-colors mb-4">0{i + 5}</div>
                <h3 className="font-display text-lg font-bold mb-3 tracking-tight">{v.title}</h3>
                <p className="font-body text-cs-gray-400 text-[0.875rem] leading-relaxed group-hover:text-cs-gray-300 transition-colors">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Boundaries */}
        <div className="pt-20 border-t border-cs-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
              The Guardrails
            </span>
            <span className="block w-10 h-px bg-cs-orange opacity-50" />
          </div>
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-12">
            Boundaries
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-8">
              <div>
                <h4 className="flex items-center gap-2 text-cs-green font-mono text-[0.875rem] uppercase tracking-widest mb-4">
                  Must Have
                </h4>
                <ul className="space-y-2 text-[0.875rem] text-cs-gray-400 font-mono">
                  <li>Local-first by default</li>
                  <li>Preserve human judgment</li>
                  <li>Auditable trail</li>
                  <li>Cognition-safe mechanics</li>
                  <li>Reusable primitives</li>
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-cs-white font-mono text-[0.875rem] uppercase tracking-widest mb-4">
                  Time Horizon
                </h4>
                <p className="text-[0.875rem] text-cs-gray-400 font-mono leading-relaxed">
                  Intended to hold for 10+ years. Principles change only via postmortem analysis.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="flex items-center gap-2 text-red-400 font-mono text-[0.875rem] uppercase tracking-widest mb-4">
                  Must Not Have
                </h4>
                <ul className="space-y-2 text-[0.875rem] text-cs-gray-400 font-mono">
                  <li>Generic SaaS framing</li>
                  <li>Silent data uploads</li>
                  <li>Surprise cloud dependencies</li>
                  <li>Replacement narratives</li>
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-cs-orange font-mono text-[0.875rem] uppercase tracking-widest mb-4">
                  Safety Boundary
                </h4>
                <ul className="space-y-2 text-[0.875rem] text-cs-gray-400 font-mono">
                  <li>No deception or harassment</li>
                  <li>No surveillance-by-default</li>
                  <li>No high-stakes autonomy</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="flex items-center gap-2 text-cs-white font-mono text-[0.875rem] uppercase tracking-widest mb-4">
                  Evidence Required
                </h4>
                <ul className="space-y-2 text-[0.875rem] text-cs-gray-400 font-mono">
                  <li>Runnable artifacts</li>
                  <li>Provenance logs</li>
                  <li>Failure mode fallbacks</li>
                  <li>Explicit privacy notes</li>
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-cs-yellow font-mono text-[0.875rem] uppercase tracking-widest mb-4">
                  Local-First Boundary
                </h4>
                <ul className="space-y-2 text-[0.875rem] text-cs-gray-400 font-mono">
                  <li>Offline-capable baseline</li>
                  <li>Cloud is explicit opt-in</li>
                  <li>Physiology stays on-device</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
