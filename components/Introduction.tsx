/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-font-display, cs-font-mono, cs-font-body */
import React from 'react';

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
      {children}
    </span>
    <span className="block w-10 h-px bg-cs-orange opacity-50" />
  </div>
);

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="relative pt-48 pb-32 px-6 border-b border-cs-gray-800">
      {/* Background grid overlay */}
      <div className="absolute inset-0 -z-10" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />
      {/* Radial gradient accents */}
      <div className="absolute inset-0 -z-10" style={{
        background: `
          radial-gradient(ellipse at 70% 40%, rgba(255,107,53,0.06) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 70%, rgba(6,214,160,0.04) 0%, transparent 60%)
        `
      }} />

      <div className="max-w-[1100px] mx-auto">
        <div className="max-w-4xl mb-32">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-[30px] h-px bg-cs-orange" />
            <span className="font-mono text-[0.875rem] tracking-[0.25em] uppercase text-cs-orange">
              Independent Research Lab
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold tracking-[-0.03em] leading-[0.95] mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
            Make Coherence<br />Visible.
          </h1>

          {/* Subhead */}
          <p className="font-display font-normal text-cs-gray-300 tracking-[-0.01em] text-xl md:text-2xl max-w-3xl mb-12">
            Building infrastructure for coherence to examine itself.
            31+ research instruments across cognition, civic accountability, and cross-domain AI architecture.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#research"
              className="font-mono text-[0.875rem] font-medium tracking-[0.12em] uppercase px-6 py-3 rounded-sm bg-cs-orange text-cs-black hover:brightness-110 hover:-translate-y-px transition-all duration-200 inline-flex items-center gap-2 text-center justify-center"
            >
              Explore Research
            </a>
            <a
              href="#catalog"
              className="font-mono text-[0.875rem] font-medium tracking-[0.12em] uppercase px-6 py-3 rounded-sm bg-transparent text-white border border-cs-gray-600 hover:border-cs-orange hover:text-cs-orange transition-all duration-200 inline-flex items-center gap-2 text-center justify-center"
            >
              View Instruments
            </a>
          </div>

          {/* Meta bar */}
          <div className="flex flex-wrap gap-8 pt-6 border-t border-cs-gray-700">
            <div>
              <span className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] block mb-1">Founded</span>
              <span className="font-mono text-[0.875rem] text-cs-gray-300">El Paso, TX</span>
            </div>
            <div>
              <span className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] block mb-1">Primary Color</span>
              <span className="font-mono text-[0.875rem] text-cs-orange">#FF6B35</span>
            </div>
            <div>
              <span className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] block mb-1">Mission</span>
              <span className="font-mono text-[0.875rem] text-cs-gray-300">Research Lab</span>
            </div>
          </div>
        </div>

        {/* Research Principles (About / What We Build) */}
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
                <span className={`absolute top-4 right-4 font-display font-extrabold text-[5rem] leading-none ${card.numColor} select-none pointer-events-none`}>
                  {card.num}
                </span>
                <h3 className="font-display text-[1.25rem] font-bold leading-[1.1] mb-3 relative z-10">{card.title}</h3>
                <p className="font-body text-cs-gray-400 text-base leading-relaxed relative z-10">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
