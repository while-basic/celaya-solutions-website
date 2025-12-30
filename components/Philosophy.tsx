
import React from 'react';
import { CheckCircle2, XCircle, Info, Shield, Clock, Zap } from 'lucide-react';

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
      description: "AI should reveal patterns the user can't see, not perform the thinking the user should do. We build tools for reflection."
    },
    {
      title: "Proof of Work",
      description: "We don't pitch; we ship. Collaboration in this lab is gated by the quality of the delta, not the volume of the hype."
    }
  ];

  return (
    <section id="philosophy" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* LAB PRINCIPLES SECTION */}
        <div className="mb-20">
          <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">The Standard</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Lab Principles</h2>
          
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-4">
              {principles.map((p, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 border border-white/5 bg-white/[0.01] rounded-sm hover:bg-white/[0.03] transition-colors group">
                  <span className="text-xs font-mono text-zinc-700 group-hover:text-zinc-400">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-zinc-400 text-sm font-medium">{p}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center border-l border-white/10 pl-12">
              <p className="text-2xl text-zinc-500 font-light leading-relaxed italic">
                "We optimize for the preservation of human judgment, not the automation of it."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((v, i) => (
              <div key={i} className="group p-8 glass-card rounded-sm glow-border transition-all border-white/5">
                <div className="text-2xl font-mono text-zinc-800 group-hover:text-white transition-colors mb-6">0{i + 5}</div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">{v.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BOUNDARIES SECTION */}
        <div className="pt-32 border-t border-white/5">
          <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">The Guardrails</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">Boundaries</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <div>
                <h4 className="flex items-center space-x-2 text-emerald-500 text-xs font-mono uppercase tracking-widest mb-6">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Must Have</span>
                </h4>
                <ul className="space-y-3 text-sm text-zinc-400 font-mono">
                  <li>— Local-first by default</li>
                  <li>— Preserve human judgment</li>
                  <li>— Auditable trail</li>
                  <li>— Cognition-safe mechanics</li>
                  <li>— Reusable primitives</li>
                </ul>
              </div>
              <div>
                <h4 className="flex items-center space-x-2 text-zinc-600 text-xs font-mono uppercase tracking-widest mb-6">
                  <Clock className="w-4 h-4" />
                  <span>Time Horizon</span>
                </h4>
                <p className="text-xs text-zinc-500 font-mono leading-relaxed">
                  Intended to hold for 10+ years. Principles change only via postmortem analysis.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="flex items-center space-x-2 text-red-500/70 text-xs font-mono uppercase tracking-widest mb-6">
                  <XCircle className="w-4 h-4" />
                  <span>Must Not Have</span>
                </h4>
                <ul className="space-y-3 text-sm text-zinc-400 font-mono">
                  <li>— Generic SaaS framing</li>
                  <li>— Silent data uploads</li>
                  <li>— Surprise cloud dependencies</li>
                  <li>— Replacement narratives</li>
                </ul>
              </div>
              <div>
                <h4 className="flex items-center space-x-2 text-blue-500/70 text-xs font-mono uppercase tracking-widest mb-6">
                  <Shield className="w-4 h-4" />
                  <span>Safety Boundary</span>
                </h4>
                <ul className="space-y-3 text-sm text-zinc-400 font-mono">
                  <li>— No deception/harassment</li>
                  <li>— No surveillance-by-default</li>
                  <li>— No high-stakes autonomy</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="flex items-center space-x-2 text-white text-xs font-mono uppercase tracking-widest mb-6">
                  <Info className="w-4 h-4" />
                  <span>Evidence Required</span>
                </h4>
                <ul className="space-y-3 text-sm text-zinc-400 font-mono">
                  <li>— Runnable artifacts</li>
                  <li>— Provenance logs</li>
                  <li>— Failure mode Fallbacks</li>
                  <li>— Explicit privacy notes</li>
                </ul>
              </div>
              <div>
                <h4 className="flex items-center space-x-2 text-zinc-400 text-xs font-mono uppercase tracking-widest mb-6">
                  <Zap className="w-4 h-4" />
                  <span>Local-First Boundary</span>
                </h4>
                <ul className="space-y-3 text-sm text-zinc-400 font-mono">
                  <li>— Offline-capable baseline</li>
                  <li>— Cloud is explicit opt-in</li>
                  <li>— Physiology stays on-device</li>
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
