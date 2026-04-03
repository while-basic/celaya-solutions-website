/* Brand tokens: cs-orange, cs-gray-*, cs-font-display, cs-font-mono, cs-font-body */
import React from 'react';

const components = [
  { name: 'Document Ingestion Pipeline', range: '$300 – $800' },
  { name: 'Vector Search Integration', range: '$400 – $600' },
  { name: 'LLM Query Layer + Streaming', range: '$500 – $800' },
  { name: 'Chat Interface (Web)', range: '$600 – $1,000' },
  { name: 'Mobile Interface (iOS / Android)', range: '$1,200 – $2,500' },
  { name: 'Auth + User Accounts', range: '$500 – $800' },
  { name: 'Billing Integration (Stripe)', range: '$400 – $700' },
  { name: 'Admin Dashboard', range: '$600 – $1,200' },
  { name: 'Deployment (Railway / Vercel)', range: '$300 – $600' },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Pricing
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
        </div>

        <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
          Component Pricing
        </h2>

        <p className="font-body text-cs-gray-400 text-base leading-relaxed mb-12 max-w-2xl">
          Every project is scoped individually. The ranges below reflect typical build complexity per component.
          Final quotes are provided after a discovery call.
        </p>

        {/* Table */}
        <div className="border border-cs-gray-700 rounded overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-2 bg-cs-gray-800 px-6 py-3 border-b border-cs-gray-700">
            <span className="font-mono text-[0.75rem] tracking-[0.2em] uppercase text-cs-gray-500">
              Component
            </span>
            <span className="font-mono text-[0.75rem] tracking-[0.2em] uppercase text-cs-gray-500 text-right">
              Typical Range
            </span>
          </div>

          {components.map((item, i) => (
            <div
              key={item.name}
              className={`grid grid-cols-2 px-6 py-4 hover:bg-cs-gray-800 transition-colors duration-150 ${
                i < components.length - 1 ? 'border-b border-cs-gray-800' : ''
              }`}
            >
              <span className="font-body text-cs-gray-300 text-sm">{item.name}</span>
              <span className="font-mono text-sm text-cs-orange text-right">{item.range}</span>
            </div>
          ))}
        </div>

        <p className="font-body text-cs-gray-500 text-sm mt-6">
          All projects include a 30-day warranty period. Retainer plans available for ongoing maintenance and updates.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
