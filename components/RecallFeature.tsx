/* Brand tokens: cs-orange, cs-green, cs-gray-*, cs-font-display, cs-font-mono, cs-font-body */
import React from 'react';
import { ArrowRight, Cpu, FileText, Globe } from 'lucide-react';

const proofStats = [
  { value: '2',           label: 'Live deployments' },
  { value: '10,000+',    label: 'Vectors indexed' },
  { value: '$20/mo',     label: 'Infrastructure cost' },
  { value: 'CI 0.94',    label: 'Source citation accuracy' },
];

const stackItems = [
  { icon: <FileText className="w-3.5 h-3.5" />, label: 'Ingestion',   value: 'PyMuPDF + Docling' },
  { icon: <Cpu className="w-3.5 h-3.5" />,      label: 'Embeddings',  value: 'Nomic AI (768-dim)' },
  { icon: <Cpu className="w-3.5 h-3.5" />,      label: 'Vector DB',   value: 'FAISS / Qdrant' },
  { icon: <Cpu className="w-3.5 h-3.5" />,      label: 'Generation',  value: 'Claude (Anthropic)' },
  { icon: <Globe className="w-3.5 h-3.5" />,    label: 'Backend',     value: 'FastAPI / Next.js' },
  { icon: <Globe className="w-3.5 h-3.5" />,    label: 'Hosting',     value: 'Railway' },
];

const findings = [
  {
    n: '01',
    title: 'Citation Provenance at Scale',
    body: 'Private vector search maintains source citation accuracy above CI 0.9 across document corpora up to 500GB. Every answer cites an exact source — hallucinated citations register CI < 0.3 and are blocked by VERDICT.'
  },
  {
    n: '02',
    title: 'Edge Deployment is Viable',
    body: 'Sub-400ms queries on consumer hardware. No cloud dependency. The LMU instrument manages local inference scheduling to prevent context saturation.'
  },
  {
    n: '03',
    title: '$20/mo Infrastructure Threshold',
    body: 'Railway + FAISS achieves production-grade performance at marginal cost. The cost floor for a fully private, cited AI knowledge system is under $25/month.'
  },
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

        {/* Label row */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Deployed Instrument
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
            <h2
              className="font-display font-extrabold tracking-[-0.04em] leading-[0.95] mb-4"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
            >
              Recall
            </h2>
            <p className="font-mono text-[0.7rem] text-cs-gray-500 uppercase tracking-[0.15em] mb-4">
              Research finding → deployed instrument
            </p>
            <p className="font-display text-xl text-cs-gray-300 leading-snug mb-4 max-w-md">
              Private vector search with citation provenance. The lab's most deployed applied instrument.
            </p>
            <p className="font-body text-sm text-cs-gray-400 leading-relaxed mb-4 max-w-md">
              Recall is a production instrument that emerged from lab research into citation-provenance RAG systems. It proves that private, cited AI knowledge retrieval is deployable at minimal infrastructure cost — with no cloud dependency and no hallucinated citations passing VERDICT's CI threshold.
            </p>
            <p className="font-body text-sm text-cs-gray-500 leading-relaxed mb-8 max-w-md">
              Two live deployments. 10,000+ vectors. Source formats: PDF · MD · DOCX. Infrastructure cost: ~$20/mo. All findings documented in field reports.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@celayasolutions.com?subject=Recall Instrument Inquiry"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cs-orange text-cs-black font-mono text-[0.75rem] uppercase tracking-[0.15em] font-bold rounded-sm hover:brightness-110 transition-all duration-200"
              >
                <span>Request a Research Brief</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              <a
                href="/recall"
                onClick={handleRecallNav}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-cs-gray-600 text-cs-white font-mono text-[0.75rem] uppercase tracking-[0.15em] font-bold rounded-sm hover:border-cs-orange hover:text-cs-orange transition-all duration-200"
              >
                Full Instrument Spec
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

        {/* Research findings */}
        <div className="mb-16">
          <p className="font-mono text-[0.75rem] text-cs-gray-500 uppercase tracking-[0.2em] mb-6">
            Key Research Findings
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {findings.map((finding) => (
              <div
                key={finding.n}
                className="relative border border-cs-gray-700 rounded bg-cs-black p-6 border-t-2 border-t-cs-orange overflow-hidden"
              >
                <span className="absolute top-2 right-3 font-display font-extrabold text-[3rem] leading-none text-white/5 select-none pointer-events-none">
                  {finding.n}
                </span>
                <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-cs-orange block mb-3">
                  Finding {finding.n}
                </span>
                <h3 className="font-display text-base font-bold mb-2 relative z-10">{finding.title}</h3>
                <p className="font-body text-sm text-cs-gray-400 leading-relaxed relative z-10">{finding.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stack pills */}
        <div>
          <p className="font-mono text-[0.75rem] text-cs-gray-500 uppercase tracking-[0.2em] mb-4">
            Instrument Stack
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
