/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-gray-*, cs-font-display, cs-font-mono, cs-font-body */
import React, { useRef, useEffect } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { ArrowRight, ExternalLink } from 'lucide-react';

function DisplayMath({ formula }: { formula: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      katex.render(formula, ref.current, { throwOnError: false, displayMode: true });
    }
  }, [formula]);
  return <div ref={ref} className="overflow-x-auto py-1" />;
}

function InlineMath({ formula }: { formula: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (ref.current) {
      katex.render(formula, ref.current, { throwOnError: false, displayMode: false });
    }
  }, [formula]);
  return <span ref={ref} className="mx-0.5 align-middle" />;
}

const ResearchPublications: React.FC = () => {
  const handleCCPNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = 'ccp';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="publications" className="py-24 px-6 border-b border-cs-gray-800 bg-cs-gray-900">
      <div className="max-w-[1100px] mx-auto">

        {/* Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Research Publications
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
        </div>

        <div className="mb-10">
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
            Published Work
          </h2>
          <p className="font-body text-cs-gray-400 text-base leading-relaxed max-w-2xl">
            Formal research output from the lab — peer-reviewed papers, protocol drafts, and mathematical frameworks. Not blog posts. These are submissions to technical venues requiring citation, proof, and reproducibility.
          </p>
        </div>

        {/* Featured paper */}
        <div className="border border-cs-gray-700 rounded bg-cs-black border-t-2 border-t-cs-orange overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Left: paper info */}
            <div className="p-8 lg:border-r border-cs-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cs-gray-300">
                  Ethereum Research Forum · February 2026
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold leading-tight mb-3">
                Formalizing Vitalik's Security Pattern
              </h3>
              <p className="font-body text-sm text-cs-gray-400 leading-relaxed mb-4 italic">
                A Mathematical Framework for Multi-Dimensional Intent Alignment
              </p>
              <p className="font-body text-sm text-cs-gray-400 leading-relaxed mb-6">
                Formalizes the recurring security pattern — N independent intent specifications, execute only when all align — into a computable authority equation with temporal decay and biological grounding. Implemented as the Celaya Chain Protocol with Proof of Coherence consensus.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-cs-gray-700">
                {[
                  { label: 'Blocks verified',  value: '83' },
                  { label: 'Tests passing',    value: '9' },
                  { label: 'Threat vectors',   value: '12' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="font-mono text-lg font-bold text-cs-orange">{value}</p>
                    <p className="font-mono text-[0.6rem] text-cs-gray-300 uppercase tracking-[0.1em]">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#ccp"
                  onClick={handleCCPNav}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-cs-orange text-cs-black font-mono text-[0.7rem] uppercase tracking-[0.15em] font-bold rounded-sm hover:brightness-110 transition-all duration-200"
                >
                  Read Full Paper
                  <ArrowRight className="w-3 h-3" />
                </a>
                <a
                  href="https://ethresear.ch/t/applications-economics/24194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-cs-gray-600 text-cs-gray-400 font-mono text-[0.7rem] uppercase tracking-[0.15em] hover:border-cs-orange hover:text-cs-orange transition-all duration-200 rounded-sm"
                >
                  Ethereum Research ↗
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right: key equation preview */}
            <div className="p-8 flex flex-col justify-center">
              <p className="font-mono text-[0.65rem] text-cs-gray-400 uppercase tracking-[0.15em] mb-4">
                Core Equations
              </p>

              <div className="space-y-6">
                <div>
                  <p className="font-mono text-[0.65rem] text-cs-gray-300 uppercase tracking-[0.1em] mb-2">
                    Authority Function
                  </p>
                  <div className="bg-cs-gray-900 rounded px-4 py-3 border border-cs-gray-700">
                    <DisplayMath formula="A(t) = C(t) \cdot e^{-\alpha n} \cdot e^{-\lambda \tau}" />
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[0.65rem] text-cs-gray-300 uppercase tracking-[0.1em] mb-2">
                    Coherence Composite
                  </p>
                  <div className="bg-cs-gray-900 rounded px-4 py-3 border border-cs-gray-700">
                    <DisplayMath formula="C(t) = \left( I^{\beta} \cdot R^{\gamma} \cdot P^{\delta} \cdot X^{\epsilon} \cdot B^{\zeta} \right)^{\!\frac{1}{\beta+\gamma+\delta+\epsilon+\zeta}}" />
                  </div>
                </div>

                <div className="border border-cs-gray-700 rounded bg-cs-gray-900 p-4">
                  <p className="font-mono text-[0.65rem] text-cs-gray-300 uppercase tracking-[0.1em] mb-2">Key Property</p>
                  <p className="font-body text-sm text-cs-gray-400 leading-relaxed">
                    Zero in any axis (<InlineMath formula="I, R, P, X, B" />) collapses total authority to zero. No dimension compensates for another. Redundant intent verification enforced mathematically.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* More coming */}
        <div className="mt-6 text-center">
          <p className="font-mono text-[0.75rem] text-cs-gray-400 uppercase tracking-[0.1em]">
            Additional publications in preparation — CLOS priority equation formalization, EPPE proof architecture
          </p>
        </div>

      </div>
    </section>
  );
};

export default ResearchPublications;
