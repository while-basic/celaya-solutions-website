/* Brand tokens: cs-orange, cs-green, cs-gray-*, cs-font-display, cs-font-mono, cs-font-body */
import React from 'react';
import { ArrowRight, Cpu, FileText, Globe } from 'lucide-react';

const proofStats = [
  { value: '2', label: 'Live deployments' },
  { value: '10,000+', label: 'Vectors indexed' },
  { value: 'PDF · MD · DOCX', label: 'Source formats' },
  { value: '~$20/mo', label: 'Hosting cost' },
];

const stackItems = [
  { icon: <FileText className="w-3.5 h-3.5" />, label: 'Ingestion', value: 'PyMuPDF + Docling' },
  { icon: <Cpu className="w-3.5 h-3.5" />, label: 'Embeddings', value: 'Nomic AI (768-dim)' },
  { icon: <Cpu className="w-3.5 h-3.5" />, label: 'Vector DB', value: 'FAISS / Qdrant' },
  { icon: <Cpu className="w-3.5 h-3.5" />, label: 'Generation', value: 'Claude (Anthropic)' },
  { icon: <Globe className="w-3.5 h-3.5" />, label: 'Backend', value: 'FastAPI / Next.js' },
  { icon: <Globe className="w-3.5 h-3.5" />, label: 'Hosting', value: 'Railway' },
];

const steps = [
  { n: '01', title: 'Intake', body: 'We audit your documents and produce a scoping doc: exactly what we build and for how much.' },
  { n: '02', title: 'Ingest', body: 'PDFs, Word files, Markdown, scanned docs — all become searchable vectors in a private database.' },
  { n: '03', title: 'Deploy', body: 'AI connects to your vectors, web UI ships, full source code is handed off. Live on Railway in weeks.' },
];

const RecallFeature: React.FC = () => {
  return (
    <section id="recall-feature" className="py-24 px-6 border-b border-cs-gray-800 bg-cs-gray-900">
      <div className="max-w-[1100px] mx-auto">

        {/* Label row */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Product
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
          {/* Production badge */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-cs-green/10 border border-cs-green/30">
            <span className="block w-1.5 h-1.5 rounded-full bg-cs-green animate-pulse" />
            <span className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-cs-green">
              Production
            </span>
          </span>
        </div>

        {/* Hero row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left: wordmark + copy */}
          <div>
            <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.95] mb-6" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}>
              Recall
            </h2>
            <p className="font-display text-xl text-cs-gray-300 leading-snug mb-4 max-w-md">
              A private AI trained on your documents. Not the internet.
            </p>
            <p className="font-body text-sm text-cs-gray-400 leading-relaxed mb-8 max-w-md">
              Most AI tools answer from the internet. Recall answers from your business — policies,
              archives, SOPs, research, whatever you have. Every answer cites the exact source.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@celayasolutions.com?subject=Recall Inquiry"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cs-orange text-cs-black font-mono text-[0.75rem] uppercase tracking-[0.15em] font-bold rounded-sm hover:brightness-110 transition-all duration-200"
              >
                <span>Book a Scoping Call</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              <a
                href="/recall"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.pushState({}, '', '/recall');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-cs-gray-600 text-cs-white font-mono text-[0.75rem] uppercase tracking-[0.15em] font-bold rounded-sm hover:border-cs-orange hover:text-cs-orange transition-all duration-200"
              >
                Full Product Page
              </a>
            </div>
          </div>

          {/* Right: proof stats */}
          <div className="grid grid-cols-2 gap-4">
            {proofStats.map((stat) => (
              <div
                key={stat.label}
                className="border border-cs-gray-700 rounded bg-cs-black p-6"
              >
                <p className="font-display font-bold text-2xl text-white mb-1">{stat.value}</p>
                <p className="font-mono text-[0.65rem] text-cs-gray-500 uppercase tracking-[0.15em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <p className="font-mono text-[0.75rem] text-cs-gray-500 uppercase tracking-[0.2em] mb-6">
            How it works
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step) => (
              <div
                key={step.n}
                className="relative border border-cs-gray-700 rounded bg-cs-black p-6 border-t-2 border-t-cs-orange overflow-hidden"
              >
                <span className="absolute top-2 right-3 font-display font-extrabold text-[3rem] leading-none text-white/5 select-none pointer-events-none">
                  {step.n}
                </span>
                <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-cs-orange block mb-3">
                  {step.n}
                </span>
                <h3 className="font-display text-lg font-bold mb-2 relative z-10">{step.title}</h3>
                <p className="font-body text-sm text-cs-gray-400 leading-relaxed relative z-10">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stack pills */}
        <div>
          <p className="font-mono text-[0.75rem] text-cs-gray-500 uppercase tracking-[0.2em] mb-4">
            Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {stackItems.map((item) => (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 px-3 py-2 border border-cs-gray-700 rounded-sm bg-cs-black"
              >
                <span className="text-cs-orange">{item.icon}</span>
                <span className="font-mono text-[0.65rem] text-cs-gray-500 uppercase tracking-[0.15em]">
                  {item.label}:
                </span>
                <span className="font-mono text-[0.75rem] text-cs-gray-300">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RecallFeature;
