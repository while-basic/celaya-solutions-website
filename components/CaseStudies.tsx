/* Brand tokens: cs-orange, cs-green, cs-gray-*, cs-font-display, cs-font-mono, cs-font-body */
import React from 'react';

const cases = [
  {
    id: '01',
    label: 'Deployed Instrument',
    instrument: 'Recall · Texas Archive Instance',
    title: 'Texas Archive',
    researchQuestion: 'Can a private RAG system maintain source citation accuracy across 500GB of mixed-format historical PDFs, including OCR-required scanned documents?',
    system: 'Multi-vector retrieval pipeline: PyMuPDF + Docling ingestion, FAISS indexing, Nomic AI embeddings (768-dim), Claude generation layer. Deployed on Railway with Stripe billing and Supabase auth.',
    dataConditions: '6,828 documents ingested. 500GB archive spanning 500 years. Mixed scan quality — approximately 30% required OCR via Docling. No cloud storage; vectors on-device.',
    measurementOutcome: 'Source citation accuracy validated on 200-query test set. Median query latency under 2 seconds. Zero hallucinated citations across validation set.',
    deploymentResult: 'Live in production. Fully handed-off stack with source code, infrastructure configuration, and provenance documentation.',
    metrics: [
      { value: '6,828', label: 'Documents ingested' },
      { value: '500 GB', label: 'Archive size' },
      { value: '<2s', label: 'Median query latency' },
    ],
    accentBorder: 'border-t-cs-orange',
    metricColor: 'text-cs-orange',
  },
  {
    id: '02',
    label: 'Deployed Instrument',
    instrument: 'CLOS · Personal Instance',
    title: 'MYSELF',
    researchQuestion: 'Can local-first inference maintain sub-500ms latency on consumer hardware across a personal research corpus — with zero cloud dependency and complete data locality?',
    system: 'Nomic AI embeddings (768-dim), FAISS vector index, Ollama local inference (llama3.1:8b), custom query engine. Fully offline-capable. No data leaves the device.',
    dataConditions: '10,000+ vectors across personal research notes, session logs, and documents. Daily automated re-ingestion. No external API calls during inference.',
    measurementOutcome: '100% data locality maintained across 18 months of operation. Zero cloud calls logged. Median query latency 340ms on M-series MacBook Pro.',
    deploymentResult: 'Continuous production deployment. Serves as the reference implementation for the Recall product line. All telemetry feeds into CLOS baseline calibration.',
    metrics: [
      { value: '10,000+', label: 'Vectors indexed' },
      { value: '<340ms', label: 'Median latency' },
      { value: '0', label: 'Cloud calls' },
    ],
    accentBorder: 'border-t-cs-green',
    metricColor: 'text-cs-green',
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 px-6 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Field Results
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
        </div>

        <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
          Deployed Instruments
        </h2>
        <p className="font-body text-cs-gray-400 text-base leading-relaxed mb-12 max-w-2xl">
          These are not case studies in the marketing sense. They are field reports — research questions, system designs, data conditions, and measured outcomes from instruments currently in production.
        </p>

        <div className="space-y-8">
          {cases.map((c) => (
            <div
              key={c.id}
              className={`border border-cs-gray-700 rounded bg-cs-gray-900 hover:bg-cs-gray-800 transition-colors duration-300 border-t-2 ${c.accentBorder} overflow-hidden`}
            >
              {/* Header */}
              <div className="p-8 pb-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-cs-gray-500">
                        {c.label}
                      </span>
                      <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-cs-orange border border-cs-orange/30 px-2 py-0.5 rounded-sm">
                        {c.instrument}
                      </span>
                    </div>
                    <h3 className="font-display text-[2rem] font-bold leading-tight">{c.title}</h3>
                  </div>
                  {/* Metrics */}
                  <div className="flex gap-6 shrink-0">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="text-right">
                        <span className={`font-mono font-bold text-lg block ${c.metricColor}`}>{m.value}</span>
                        <span className="font-mono text-[0.6rem] text-cs-gray-500 uppercase tracking-[0.1em]">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Research fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-cs-gray-700">
                {[
                  { label: 'Research Question', value: c.researchQuestion },
                  { label: 'System Built',       value: c.system },
                  { label: 'Data Conditions',    value: c.dataConditions },
                  { label: 'Measurement Outcome + Deployment', value: `${c.measurementOutcome} ${c.deploymentResult}` },
                ].map((field, i) => (
                  <div
                    key={field.label}
                    className={`p-6 ${i % 2 === 0 ? 'md:border-r border-cs-gray-700' : ''} ${i >= 2 ? 'border-t border-cs-gray-700' : ''}`}
                  >
                    <p className="font-mono text-[0.65rem] text-cs-gray-500 uppercase tracking-[0.15em] mb-2">
                      {field.label}
                    </p>
                    <p className="font-body text-sm text-cs-gray-400 leading-relaxed">
                      {field.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
