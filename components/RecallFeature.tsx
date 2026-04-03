/* Brand tokens: cs-orange, cs-green, cs-gray-*, cs-font-display, cs-font-mono, cs-font-body */
import React from 'react';

const findings = [
  {
    n: '01',
    title: 'Citation Provenance at Scale',
    body: 'Private vector search maintains source citation accuracy above CI 0.9 across document corpora up to 500 GB. Hallucinated citations register CI < 0.3 and are blocked by VERDICT before issuance.',
  },
  {
    n: '02',
    title: 'Edge Deployment is Viable',
    body: 'Sub-400ms queries on consumer hardware. No cloud dependency required. The LMU instrument manages local inference scheduling to prevent context saturation.',
  },
];

const stackItems = [
  { label: 'Ingestion',   value: 'PyMuPDF + Docling' },
  { label: 'Embeddings',  value: 'Nomic AI (768-dim)' },
  { label: 'Vector DB',   value: 'FAISS / Qdrant' },
  { label: 'Generation',  value: 'Claude (Anthropic)' },
  { label: 'Backend',     value: 'FastAPI / Next.js' },
  { label: 'Hosting',     value: 'Railway' },
];

const RecallFeature: React.FC = () => {
  const handleRecallNav = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.history.pushState({}, '', '/recall');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="recall-feature" className="py-24 px-6 border-b border-cs-gray-800 bg-cs-gray-900">
      <div className="max-w-[1100px] mx-auto">

        {/* Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Deployed Instrument
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-cs-green/10 border border-cs-green/30">
            <span className="block w-1.5 h-1.5 rounded-full bg-cs-green animate-pulse" />
            <span className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-cs-green">Production</span>
          </span>
        </div>

        {/* Header + instrument spec */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14 items-start">
          {/* Left */}
          <div>
            <h2
              className="font-display font-extrabold tracking-[-0.04em] leading-[0.95] mb-3"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
            >
              Recall
            </h2>
            <p className="font-mono text-[0.7rem] text-cs-gray-300 uppercase tracking-[0.15em] mb-6">
              Research finding → deployed instrument
            </p>
            <p className="font-body text-base text-cs-gray-400 leading-relaxed max-w-md">
              Citation-provenance RAG. Private vector search — every answer cites an exact source document and page. Deployed at $20/month infrastructure cost with no cloud dependency.
            </p>
          </div>

          {/* Right: instrument stats as a field-report table */}
          <div className="border border-cs-gray-700 rounded bg-cs-black p-6">
            <p className="font-mono text-[0.65rem] text-cs-gray-400 uppercase tracking-[0.2em] mb-5">
              Field Report — Instrument Summary
            </p>
            <dl className="space-y-3">
              {[
                { label: 'Deployments',        value: '2 live' },
                { label: 'Vectors indexed',    value: '10,000+' },
                { label: 'Source formats',     value: 'PDF · MD · DOCX' },
                { label: 'Infrastructure cost', value: '~$20 / mo',   accent: true },
                { label: 'CI accuracy',        value: 'CI 0.94',       accent: true },
                { label: 'Cloud calls',        value: '0 (local-first)' },
              ].map(({ label, value, accent }) => (
                <div key={label} className="flex items-center justify-between border-b border-cs-gray-800 pb-2 last:border-0 last:pb-0">
                  <dt className="font-mono text-[0.7rem] text-cs-gray-300 uppercase tracking-[0.1em]">{label}</dt>
                  <dd className={`font-mono text-[0.75rem] ${accent ? 'text-cs-orange' : 'text-cs-gray-300'}`}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Research findings */}
        <div className="mb-12">
          <p className="font-mono text-[0.7rem] text-cs-gray-400 uppercase tracking-[0.2em] mb-5">
            Key Findings
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {findings.map((finding) => (
              <div
                key={finding.n}
                className="relative border border-cs-gray-700 rounded bg-cs-black p-6 border-t-2 border-t-cs-orange overflow-hidden"
              >
                <span className="absolute top-2 right-3 font-display font-extrabold text-[3rem] leading-none text-white/4 select-none pointer-events-none">
                  {finding.n}
                </span>
                <h3 className="font-display text-base font-bold mb-2 relative z-10">{finding.title}</h3>
                <p className="font-body text-sm text-cs-gray-400 leading-relaxed relative z-10">{finding.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stack + link row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 border-t border-cs-gray-700">
          {/* Stack pills */}
          <div>
            <p className="font-mono text-[0.65rem] text-cs-gray-400 uppercase tracking-[0.2em] mb-3">
              Instrument Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {stackItems.map((item) => (
                <span
                  key={item.label}
                  className="inline-block border border-cs-gray-700 rounded-sm bg-cs-black px-2.5 py-1 font-mono text-[0.65rem] text-cs-gray-400"
                >
                  <span className="text-cs-gray-400">{item.label}:</span> {item.value}
                </span>
              ))}
            </div>
          </div>

          {/* Single link — field report, not a sales CTA */}
          <a
            href="/recall"
            onClick={handleRecallNav}
            className="shrink-0 inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-cs-gray-400 hover:text-cs-orange transition-colors"
          >
            Full instrument spec →
          </a>
        </div>

      </div>
    </section>
  );
};

export default RecallFeature;
