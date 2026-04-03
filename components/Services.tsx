/* Brand tokens: cs-orange, cs-green, cs-gray-*, cs-font-display, cs-font-mono, cs-font-body */
import React from 'react';

const tier1Features = [
  'Document ingestion (PDF, Word, scanned)',
  'Private vector search',
  'Web or mobile chat interface',
  'Source citations in every answer',
  'Monthly maintenance + updates',
];

const tier2Features = [
  'Everything in Tier 1',
  'User auth + accounts',
  'Usage-based billing',
  'Admin dashboard + analytics',
  'Cloud deployment (Railway / Vercel)',
  'Custom domain + SSL',
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Services
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
        </div>

        <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
          Custom AI Knowledge Systems
        </h2>

        <p className="font-body text-cs-gray-400 text-base leading-relaxed mb-12 max-w-2xl">
          We build AI systems that answer from your data — not the internet. Private, fast, and specific to your organization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tier 1 */}
          <div className="relative border border-cs-gray-700 rounded bg-cs-gray-900 p-8 hover:bg-cs-gray-800 transition-colors duration-300 border-t-2 border-t-cs-orange">
            <span className="font-mono text-[0.75rem] tracking-[0.2em] uppercase text-cs-orange block mb-4">
              Tier 1
            </span>
            <h3 className="font-display text-[1.75rem] font-bold leading-tight mb-2">
              Knowledge Base
            </h3>
            <div className="mb-6">
              <span className="font-display text-[1.5rem] font-bold text-white">$3,500</span>
              <span className="font-mono text-sm text-cs-gray-400"> + $250/mo retainer</span>
            </div>
            <p className="font-body text-cs-gray-400 text-sm leading-relaxed mb-8">
              A private AI assistant trained on your documents. Drop in PDFs, manuals, reports — get instant, cited answers from your data.
            </p>
            <ul className="space-y-3">
              {tier1Features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-cs-orange mt-0.5 flex-shrink-0 font-mono text-sm">—</span>
                  <span className="font-body text-cs-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tier 2 */}
          <div className="relative border border-cs-gray-700 rounded bg-cs-gray-900 p-8 hover:bg-cs-gray-800 transition-colors duration-300 border-t-2 border-t-cs-green">
            <span className="font-mono text-[0.75rem] tracking-[0.2em] uppercase text-cs-green block mb-4">
              Tier 2
            </span>
            <h3 className="font-display text-[1.75rem] font-bold leading-tight mb-2">
              Full AI Product
            </h3>
            <div className="mb-6">
              <span className="font-display text-[1.5rem] font-bold text-white">$8,500</span>
              <span className="font-mono text-sm text-cs-gray-400"> + $500/mo retainer</span>
            </div>
            <p className="font-body text-cs-gray-400 text-sm leading-relaxed mb-8">
              A full-stack AI product with user accounts, usage billing, analytics, and deployment. Suitable for public-facing products or multi-user organizations.
            </p>
            <ul className="space-y-3">
              {tier2Features.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-cs-green mt-0.5 flex-shrink-0 font-mono text-sm">—</span>
                  <span className="font-body text-cs-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
