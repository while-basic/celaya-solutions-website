/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-font-display, cs-font-mono, cs-font-body */
import React, { useRef } from 'react';
import { useMesmerizingBg } from '../hooks/useMesmerizingBg.ts';

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
      {children}
    </span>
    <span className="block w-10 h-px bg-cs-orange opacity-50" />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
const Introduction: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useMesmerizingBg(canvasRef);

  return (
    <section
      id="introduction"
      className="relative pt-48 pb-32 px-6 border-b border-cs-gray-800 overflow-hidden"
    >
      {/* ── Layer 0: Canvas (grid + curves + blocks + particles) ──────────────── */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -2 }}
      />

      {/* ── Layer 1: Soft ambient glows behind the headline ───────────────────── */}

      {/* Primary orange — centred on the headline */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          zIndex: -1,
          top: '2%', left: '-12%',
          width: '80%', height: '75%',
          background:
            'radial-gradient(ellipse at 38% 36%, rgba(255,107,53,0.22) 0%, rgba(255,107,53,0.08) 38%, transparent 70%)',
          filter: 'blur(72px)',
          animation: 'cs-hero-glow 9s ease-in-out infinite',
        }}
      />

      {/* Secondary green — lower-right */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          zIndex: -1,
          bottom: '-6%', right: '-8%',
          width: '65%', height: '80%',
          background:
            'radial-gradient(ellipse at 64% 62%, rgba(6,214,160,0.16) 0%, rgba(6,214,160,0.05) 40%, transparent 72%)',
          filter: 'blur(80px)',
          animation: 'cs-green-glow 13s ease-in-out infinite 3s',
        }}
      />

      {/* Tertiary violet — right-centre */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          zIndex: -1,
          top: '35%', right: '5%',
          width: '45%', height: '55%',
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.10) 0%, transparent 68%)',
          filter: 'blur(60px)',
          animation: 'cs-violet-glow 17s ease-in-out infinite 6s',
        }}
      />

      {/* Keyframes — injected once per mount */}
      <style>{`
        @keyframes cs-hero-glow {
          0%,100% { opacity:1;    transform:scale(1)    translate(0%,   0%);  }
          33%      { opacity:0.72; transform:scale(1.07) translate( 2%,  -3%); }
          66%      { opacity:0.88; transform:scale(0.95) translate(-1%,   2%); }
        }
        @keyframes cs-green-glow {
          0%,100% { opacity:0.75; transform:scale(1)    translate(0%, 0%); }
          50%      { opacity:1;    transform:scale(1.09) translate(-2%,-4%); }
        }
        @keyframes cs-violet-glow {
          0%,100% { opacity:0.5;  transform:scale(1)    translate(0%, 0%); }
          40%      { opacity:1;    transform:scale(1.14) translate( 3%, 5%); }
          80%      { opacity:0.65; transform:scale(0.90) translate(-2%,-3%); }
        }
      `}</style>

      {/* ── Layer 2: Page content ─────────────────────────────────────────────── */}
      <div className="max-w-[1100px] mx-auto relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mb-32">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-[30px] h-px bg-cs-orange" />
            <span className="font-mono text-[0.875rem] tracking-[0.25em] uppercase text-cs-orange">
              Independent Research Lab
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-extrabold tracking-[-0.03em] leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            Make Coherence<br />Visible.
          </h1>

          {/* Subhead */}
          <p className="font-display font-normal text-cs-gray-300 tracking-[-0.01em] text-xl md:text-2xl max-w-3xl mb-12">
            An independent proof lab. We build instruments that convert system behavior into measurable coherence scores, inspectable traces, and versioned artifacts. 45 instruments across 8 domains.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#catalog"
              className="font-mono text-[0.875rem] font-medium tracking-[0.12em] uppercase px-6 py-3 rounded-sm bg-cs-orange text-cs-black hover:brightness-110 hover:-translate-y-px transition-all duration-200 inline-flex items-center gap-2 text-center justify-center"
            >
              View Instruments
            </a>
            <a
              href="#lab-notes"
              className="font-mono text-[0.875rem] font-medium tracking-[0.12em] uppercase px-6 py-3 rounded-sm bg-transparent text-white border border-cs-gray-600 hover:border-cs-orange hover:text-cs-orange transition-all duration-200 inline-flex items-center gap-2 text-center justify-center"
            >
              Read Lab Notes
            </a>
          </div>

          {/* Meta bar */}
          <div className="flex flex-wrap gap-8 pt-6 border-t border-cs-gray-700">
            <div>
              <span className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] block mb-1">
                Location
              </span>
              <span className="font-mono text-[0.875rem] text-cs-gray-300">El Paso, TX</span>
            </div>
            <div>
              <span className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] block mb-1">
                Flagship
              </span>
              <span className="font-mono text-[0.875rem] text-cs-orange">VERDICT · CORTEX · CLOS</span>
            </div>
            <div>
              <span className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] block mb-1">
                Output
              </span>
              <span className="font-mono text-[0.875rem] text-cs-gray-300">Traces · Benchmarks · Audits</span>
            </div>
          </div>
        </div>

        {/* Research Principles */}
        <div>
          <SectionLabel>What We Build</SectionLabel>
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-12">
            Research Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: 'Coherence as Prime Function',
                desc: 'Every system we build must make its own logic inspectable. If coherence cannot examine itself, the architecture fails.',
                accent: 'border-t-cs-orange',
                numColor: 'text-cs-orange/10',
              },
              {
                num: '02',
                title: 'Precision Without Ceremony',
                desc: 'Strip away abstraction layers that exist only for convention. Keep what survives contact with real data.',
                accent: 'border-t-cs-green',
                numColor: 'text-cs-green/10',
              },
              {
                num: '03',
                title: 'Border Intelligence',
                desc: 'El Paso is the operating context. Systems built here must account for jurisdictional, cultural, and infrastructural boundaries.',
                accent: 'border-t-cs-yellow',
                numColor: 'text-cs-yellow/10',
              },
              {
                num: '04',
                title: 'Edge-of-Chaos Operations',
                desc: 'The most valuable signal lives at the boundary between order and disorder. We build instruments to operate there.',
                accent: 'border-t-white',
                numColor: 'text-white/5',
              },
            ].map((card) => (
              <div
                key={card.num}
                className={`relative border border-cs-gray-700 rounded bg-cs-gray-900 p-8 transition-colors duration-300 hover:bg-cs-gray-800 border-t-2 ${card.accent} overflow-hidden`}
              >
                <span
                  className={`absolute top-4 right-4 font-display font-extrabold text-[5rem] leading-none ${card.numColor} select-none pointer-events-none`}
                >
                  {card.num}
                </span>
                <h3 className="font-display text-[1.25rem] font-bold leading-[1.1] mb-3 relative z-10">
                  {card.title}
                </h3>
                <p className="font-body text-cs-gray-400 text-base leading-relaxed relative z-10">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
