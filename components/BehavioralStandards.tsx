/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-gray-700, cs-font-mono, cs-font-display */
import React from 'react';

const standards = [
  { num: '01', title: 'Evidence Before Claims', desc: 'Every claim follows proof. Speculation is labeled. Nothing ships without verifiable backing.' },
  { num: '02', title: 'Identity Protection by Default', desc: 'No system collects identity data unless explicitly required and consented to. PII stays off the wire.' },
  { num: '03', title: 'IP Documented in Real Time', desc: 'Intellectual property is versioned, timestamped, and logged as it is created. Not retroactively.' },
  { num: '04', title: 'No Sign-Up, No Tracking', desc: 'No analytics. No newsletters. No contact forms. No cookies. No third-party scripts.' },
  { num: '05', title: 'El Paso as Operating Context', desc: 'This lab operates from and for the border region. Systems account for jurisdictional and cultural boundaries.' },
  { num: '06', title: 'Surprise Over Market Fit', desc: 'We build what the research demands, not what the market expects. Novel outcomes over predictable ones.' },
  { num: '07', title: 'Systems Speak, Not Silos', desc: 'Every instrument must be able to communicate with every other instrument. No isolated components.' },
  { num: '08', title: 'Direct First, Diplomatic Always', desc: 'Communication is clear and unambiguous. Respect is non-negotiable. Hedging is not.' },
  { num: '09', title: 'Version What You Change', desc: 'Every modification is tracked. Every decision is reversible. Every artifact is inspectable.' },
];

const accentColors = ['border-b-cs-orange', 'border-b-cs-green', 'border-b-cs-yellow'];

const BehavioralStandards: React.FC = () => {
  return (
    <section id="standards" className="py-24 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto px-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Behavioral Standards
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
        </div>

        <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
          Nine Commitments
        </h2>
        <p className="font-body text-cs-gray-400 text-base leading-relaxed mb-12 max-w-2xl">
          Non-negotiable operating principles. These are not aspirational values: they are enforced constraints on how every system, document, and interaction is built.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {standards.map((s, i) => (
            <div
              key={s.num}
              className={`border border-cs-gray-700 rounded bg-cs-gray-900 p-6 transition-colors duration-300 hover:bg-cs-gray-800 border-b-2 ${accentColors[i % 3]}`}
            >
              <span className="font-mono text-[0.875rem] text-cs-gray-500 tracking-[0.15em] uppercase mb-2 block">
                {s.num}
              </span>
              <h3 className="font-display text-[1.125rem] font-bold leading-[1.2] mb-2">
                {s.title}
              </h3>
              <p className="font-body text-cs-gray-400 text-[0.875rem] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehavioralStandards;
