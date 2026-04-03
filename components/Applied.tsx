/* Brand tokens: cs-orange, cs-green, cs-gray-*, cs-font-display, cs-font-mono, cs-font-body */
import React from 'react';
import { ArrowRight } from 'lucide-react';

// ── Pricing components ────────────────────────────────────────────────────────
const tier1Features = [
  'Document ingestion — PDF, Word, scanned',
  'Private vector search (Qdrant / FAISS)',
  'Web or mobile chat interface',
  'Source citations in every answer (VERDICT-gated)',
  'Monthly maintenance + updates',
];

const tier2Features = [
  'Everything in Tier 1',
  'User auth + accounts',
  'Usage-based billing (Stripe)',
  'Admin dashboard + analytics',
  'Cloud deployment (Railway / Vercel)',
  'Custom domain + SSL',
];

const componentPricing = [
  { name: 'Document Ingestion Pipeline',   range: '$300 – $800'   },
  { name: 'Vector Search Integration',     range: '$400 – $600'   },
  { name: 'LLM Query Layer + Streaming',   range: '$500 – $800'   },
  { name: 'Chat Interface (Web)',          range: '$600 – $1,000' },
  { name: 'Mobile Interface (iOS / Android)', range: '$1,200 – $2,500' },
  { name: 'Auth + User Accounts',         range: '$500 – $800'   },
  { name: 'Billing Integration (Stripe)',  range: '$400 – $700'   },
  { name: 'Admin Dashboard',              range: '$600 – $1,200' },
  { name: 'Deployment (Railway / Vercel)', range: '$300 – $600'   },
];

const steps = [
  {
    num: '01', week: 'Week 1',
    title: 'Onboarding',
    desc: 'Discovery call, scope definition, document audit. We agree on what the system needs to answer.',
  },
  {
    num: '02', week: 'Weeks 1–2',
    title: 'Document Ingestion',
    desc: 'All PDFs, scanned docs, and text files are processed, chunked, and embedded into a private vector store.',
  },
  {
    num: '03', week: 'Weeks 2–3',
    title: 'AI Layer',
    desc: 'Retrieval pipeline built and tested. LLM configured with system prompts, citation formatting, and fallback behavior.',
  },
  {
    num: '04', week: 'Weeks 3–5',
    title: 'Interface',
    desc: 'Chat UI, API endpoints, auth, and billing built to spec. You review and provide feedback.',
  },
  {
    num: '05', week: 'Week 6',
    title: 'Deploy & Hand Off',
    desc: 'System goes live. You receive full documentation, a handoff call, and ongoing support under the retainer.',
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const Applied: React.FC = () => {
  return (
    <div className="min-h-screen">

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-16 px-6 border-b border-cs-gray-800">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-[30px] h-px bg-cs-orange" />
            <span className="font-mono text-[0.875rem] tracking-[0.25em] uppercase text-cs-orange">
              Applied Systems
            </span>
          </div>
          <h1
            className="font-display font-extrabold tracking-[-0.03em] leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Work With<br />the Lab
          </h1>
          <p className="font-display font-normal text-cs-gray-300 text-xl max-w-2xl mb-8">
            Lab instruments deployed as production systems for organizations with specific knowledge retrieval problems.
          </p>
          <p className="font-body text-cs-gray-400 text-base leading-relaxed max-w-2xl">
            The lab's applied work is a direct extension of its research. Every deployment runs on instruments proven in the lab — VERDICT for citation validation, Recall for RAG retrieval, SIGNAL for anomaly detection. There are no off-the-shelf configurations. Every system is scoped, built, and measured against documented baselines.
          </p>
        </div>
      </section>

      {/* ── Services / Tiers ──────────────────────────────────────────────── */}
      <section id="services" className="py-20 px-6 border-b border-cs-gray-800">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
              Instruments for Deployment
            </span>
            <span className="block w-10 h-px bg-cs-orange opacity-50" />
          </div>

          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
            Knowledge Systems
          </h2>
          <p className="font-body text-cs-gray-400 text-base leading-relaxed mb-12 max-w-2xl">
            Private AI systems that answer from your data — not the internet. Built on lab-proven retrieval architecture with VERDICT-gated citation accuracy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                A private AI assistant trained on your documents. Drop in PDFs, manuals, reports — get cited answers from your own data.
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
                Full-stack AI product with user accounts, usage billing, analytics, and deployment. For public-facing products or multi-user organizations.
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

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@celayasolutions.com?subject=Applied Systems Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cs-orange text-cs-black font-mono text-[0.75rem] uppercase tracking-[0.15em] font-bold rounded-sm hover:brightness-110 transition-all duration-200"
            >
              Start a Conversation
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Component Pricing ─────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 px-6 border-b border-cs-gray-800 bg-cs-gray-900">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
              À La Carte
            </span>
            <span className="block w-10 h-px bg-cs-orange opacity-50" />
          </div>
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
            Component Pricing
          </h2>
          <p className="font-body text-cs-gray-400 text-base leading-relaxed mb-12 max-w-2xl">
            Need one layer, not the whole stack? Components can be commissioned individually. Ranges reflect scope variation — final quote after a brief discovery call.
          </p>

          <div className="border border-cs-gray-700 rounded overflow-hidden">
            {componentPricing.map((comp, i) => (
              <div
                key={comp.name}
                className={`flex items-center justify-between px-6 py-4 ${
                  i < componentPricing.length - 1 ? 'border-b border-cs-gray-800' : ''
                } hover:bg-cs-gray-800 transition-colors duration-150`}
              >
                <span className="font-body text-cs-gray-300 text-sm">{comp.name}</span>
                <span className="font-mono text-sm text-cs-orange shrink-0 ml-4">{comp.range}</span>
              </div>
            ))}
          </div>

          <p className="font-mono text-[0.7rem] text-cs-gray-400 uppercase tracking-[0.1em] mt-4">
            All prices in USD. Retainer optional on à la carte work.
          </p>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────────────── */}
      <section id="process" className="py-20 px-6 border-b border-cs-gray-800">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
              Process
            </span>
            <span className="block w-10 h-px bg-cs-orange opacity-50" />
          </div>
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
            Six Weeks, Start to Deploy
          </h2>
          <p className="font-body text-cs-gray-400 text-base leading-relaxed mb-12 max-w-2xl">
            No long engagements. No scope creep. A defined process from first call to production.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="relative border border-cs-gray-700 rounded bg-cs-gray-900 p-6 hover:bg-cs-gray-800 transition-colors duration-300 border-t-2 border-t-cs-orange overflow-hidden"
              >
                <span className="absolute top-2 right-3 font-display font-extrabold text-[3.5rem] leading-none text-white/5 select-none pointer-events-none">
                  {step.num}
                </span>
                <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-cs-gray-300 block mb-3">
                  {step.week}
                </span>
                <h3 className="font-display text-base font-bold leading-tight mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="font-body text-cs-gray-400 text-sm leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-mono text-[0.75rem] text-cs-gray-300 uppercase tracking-[0.2em] mb-3">
              Next step
            </p>
            <h3 className="font-display text-[1.75rem] font-bold tracking-tight mb-2">
              Send a brief description of your problem.
            </h3>
            <p className="font-body text-cs-gray-400 text-sm">
              No forms. One email. We'll scope it and reply within 48 hours.
            </p>
          </div>
          <a
            href="mailto:hello@celayasolutions.com?subject=Applied Systems Inquiry"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-cs-orange text-cs-black font-mono text-[0.75rem] uppercase tracking-[0.15em] font-bold rounded-sm hover:brightness-110 transition-all duration-200"
          >
            hello@celayasolutions.com
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Applied;
