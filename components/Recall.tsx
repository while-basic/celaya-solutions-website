import React, { useState, useRef } from 'react';
import { ArrowRight, FileText, Cpu, Globe, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useMesmerizingBg } from '../hooks/useMesmerizingBg.ts';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Tier {
  name: string;
  price: string;
  sub: string;
  timeline: string;
  items: string[];
  accent: boolean;
}

interface Step {
  n: string;
  title: string;
  body: string;
}

interface Example {
  name: string;
  problem: string;
  solution: string;
  result: string;
}

interface FAQ {
  q: string;
  a: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const STEPS: Step[] = [
  {
    n: '01',
    title: 'Intake',
    body: 'We audit your documents: PDFs, Word files, Notion exports, SOPs, spreadsheets. You get a scoping doc with exactly what we will build and for how much.',
  },
  {
    n: '02',
    title: 'Ingest',
    body: 'Your documents become searchable vectors in a private database. OCR handles scanned files. Nothing leaves your control. Every chunk is traceable to its source.',
  },
  {
    n: '03',
    title: 'Deploy',
    body: 'We connect the AI to your vector database and deploy it. You get a web UI, optional mobile app, full source code, and a walkthrough. Hosted on Railway at roughly $20/mo.',
  },
];

const TIERS: Tier[] = [
  {
    name: 'Knowledge Base',
    price: '$3,500',
    sub: 'starting price',
    timeline: '1 to 2 weeks',
    accent: false,
    items: [
      'Document audit and scoping',
      'OCR and text ingestion pipeline',
      'Private vector database',
      'AI query API with source citations',
      'Web UI hosted on Railway',
      'Full source code handoff',
      'Optional $250/mo retainer',
    ],
  },
  {
    name: 'Full AI Product',
    price: '$8,500',
    sub: 'starting price',
    timeline: '3 to 6 weeks',
    accent: true,
    items: [
      'Everything in Knowledge Base',
      'User authentication (Supabase)',
      'Token-based billing (Stripe)',
      'Usage dashboard',
      'Native iOS app (SwiftUI)',
      'TestFlight distribution',
      'Optional $500/mo retainer',
    ],
  },
];

const EXAMPLES: Example[] = [
  {
    name: 'Texas Archive',
    problem: '500GB of historical Texas government PDFs — unsearchable, unusable.',
    solution: 'OCR pipeline, vector search, and an AI assistant with exact source citations.',
    result: 'Researchers ask questions in plain English and get answers drawn from 200-year-old documents, with page-level citations.',
  },
  {
    name: 'MYSELF',
    problem: 'Years of Notion notes, SOPs, and project journals — impossible to query.',
    solution: 'Markdown ingestion, FAISS vector index, Claude AI, and a native iPhone app.',
    result: 'Ask "What projects am I working on?" and get answers pulled directly from your own writing.',
  },
];

const FAQS: FAQ[] = [
  {
    q: 'What file formats do you support?',
    a: 'PDFs (text-based and scanned), Word documents, Markdown files, Notion exports, plain text, and CSV. If your documents are in a different format, ask and we will scope it.',
  },
  {
    q: 'Does my data leave my control?',
    a: 'No. Your vector database is private and deployed to your own Railway project. The AI answers from your vectors only. We do use Anthropic\'s Claude API for generation, which means queries pass through Anthropic\'s infrastructure, but your source documents are never stored there.',
  },
  {
    q: 'Can the AI hallucinate?',
    a: 'Recall is constrained to answer only from your documents. If the answer is not in your knowledge base, it says so. It does not fill gaps with general internet knowledge.',
  },
  {
    q: 'What are the ongoing costs?',
    a: 'Railway hosting runs roughly $20 to $50/mo depending on usage. The Anthropic API costs vary with query volume, typically a few cents per conversation. Our optional retainer covers hosting management, updates, and re-ingestion as your documents change.',
  },
  {
    q: 'Do I get the source code?',
    a: 'Yes. Full source code is handed off at project completion. You own it.',
  },
  {
    q: 'What is the difference between the two tiers?',
    a: 'The Knowledge Base tier gives you a private AI assistant accessible by URL, built for internal teams. The Full AI Product tier adds user auth, Stripe billing, a usage dashboard, and a native iOS app, suitable for customer-facing products or SaaS tools.',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const StepCard: React.FC<{ step: Step }> = ({ step }) => (
  <div className="flex gap-6">
    <div className="flex-shrink-0">
      <span className="font-mono text-[0.75rem] text-cs-orange tracking-[0.2em]">{step.n}</span>
    </div>
    <div className="border-l border-white/10 pl-6 pb-10">
      <h3 className="font-display font-semibold text-xl text-cs-white mb-2">{step.title}</h3>
      <p className="font-body text-[0.9375rem] text-zinc-400 leading-relaxed">{step.body}</p>
    </div>
  </div>
);

const TierCard: React.FC<{ tier: Tier }> = ({ tier }) => (
  <div
    className={`relative flex flex-col p-8 rounded-sm border ${
      tier.accent
        ? 'border-cs-orange bg-[#0d0800]'
        : 'border-white/10 bg-zinc-950'
    }`}
  >
    {tier.accent && (
      <div className="absolute -top-px left-0 right-0 h-px bg-cs-orange" />
    )}
    <div className="mb-6">
      {tier.accent && (
        <span className="inline-block font-mono text-[0.625rem] text-cs-orange uppercase tracking-[0.25em] mb-3">
          Most Complete
        </span>
      )}
      <h3 className="font-display font-semibold text-2xl text-cs-white mb-1">{tier.name}</h3>
      <div className="flex items-baseline gap-2">
        <span className="font-display font-bold text-4xl text-cs-white">{tier.price}</span>
        <span className="font-mono text-[0.75rem] text-zinc-500 uppercase tracking-[0.1em]">{tier.sub}</span>
      </div>
      <p className="font-mono text-[0.75rem] text-zinc-500 mt-1 uppercase tracking-[0.1em]">{tier.timeline}</p>
    </div>
    <ul className="space-y-3 flex-1 mb-8">
      {tier.items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.accent ? 'text-cs-orange' : 'text-zinc-500'}`} />
          <span className="font-body text-[0.875rem] text-zinc-300">{item}</span>
        </li>
      ))}
    </ul>
    <a
      href="mailto:hello@celayasolutions.com?subject=Recall Inquiry"
      className={`block text-center py-3 px-6 font-mono text-[0.75rem] uppercase tracking-[0.15em] font-bold transition-colors ${
        tier.accent
          ? 'bg-cs-orange text-black hover:bg-orange-400'
          : 'border border-white/20 text-cs-white hover:bg-white/5'
      }`}
    >
      Book a Scoping Call
    </a>
  </div>
);

const ExampleCard: React.FC<{ example: Example }> = ({ example }) => (
  <div className="border border-white/10 p-8 rounded-sm bg-zinc-950">
    <div className="inline-flex items-center gap-2 mb-6">
      <FileText className="w-4 h-4 text-cs-orange" />
      <span className="font-mono text-[0.75rem] text-cs-orange uppercase tracking-[0.2em]">{example.name}</span>
    </div>
    <div className="space-y-4">
      <div>
        <p className="font-mono text-[0.625rem] text-zinc-500 uppercase tracking-[0.2em] mb-1">Problem</p>
        <p className="font-body text-[0.875rem] text-zinc-400">{example.problem}</p>
      </div>
      <div>
        <p className="font-mono text-[0.625rem] text-zinc-500 uppercase tracking-[0.2em] mb-1">Solution</p>
        <p className="font-body text-[0.875rem] text-zinc-400">{example.solution}</p>
      </div>
      <div>
        <p className="font-mono text-[0.625rem] text-zinc-500 uppercase tracking-[0.2em] mb-1">Result</p>
        <p className="font-body text-[0.875rem] text-zinc-300">{example.result}</p>
      </div>
    </div>
  </div>
);

const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-body text-[0.9375rem] text-cs-white font-medium">{faq.q}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-zinc-500 flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-zinc-500 flex-shrink-0" />
        }
      </button>
      {open && (
        <p className="font-body text-[0.875rem] text-zinc-400 leading-relaxed pb-5">{faq.a}</p>
      )}
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const Recall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useMesmerizingBg(canvasRef);

  return (
    <div className="bg-cs-black text-cs-white min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 border-b border-white/5 overflow-hidden">

        {/* Canvas: grid + curves + blocks + particles */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: -2 }}
        />

        {/* Orange glow — behind "Recall" headline */}
        <div aria-hidden="true" className="absolute pointer-events-none" style={{
          zIndex: -1, top: '2%', left: '-10%', width: '75%', height: '78%',
          background: 'radial-gradient(ellipse at 32% 32%, rgba(255,107,53,0.22) 0%, rgba(255,107,53,0.07) 38%, transparent 70%)',
          filter: 'blur(72px)',
          animation: 'cs-recall-orange 9s ease-in-out infinite',
        }} />

        {/* Green glow — lower right */}
        <div aria-hidden="true" className="absolute pointer-events-none" style={{
          zIndex: -1, bottom: '-6%', right: '-8%', width: '65%', height: '80%',
          background: 'radial-gradient(ellipse at 64% 62%, rgba(6,214,160,0.16) 0%, rgba(6,214,160,0.05) 40%, transparent 72%)',
          filter: 'blur(80px)',
          animation: 'cs-recall-green 13s ease-in-out infinite 3s',
        }} />

        {/* Violet accent — upper right */}
        <div aria-hidden="true" className="absolute pointer-events-none" style={{
          zIndex: -1, top: '10%', right: '2%', width: '48%', height: '60%',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.10) 0%, transparent 68%)',
          filter: 'blur(60px)',
          animation: 'cs-recall-violet 17s ease-in-out infinite 7s',
        }} />

        {/* Fade hero bottom to black */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-cs-black" style={{ zIndex: 0 }} />

        <style>{`
          @keyframes cs-recall-orange {
            0%,100% { opacity:1;    transform:scale(1)    translate(0%,  0%); }
            33%      { opacity:0.72; transform:scale(1.07) translate( 2%, -3%); }
            66%      { opacity:0.88; transform:scale(0.95) translate(-1%,  2%); }
          }
          @keyframes cs-recall-green {
            0%,100% { opacity:0.75; transform:scale(1)    translate( 0%,  0%); }
            50%      { opacity:1;   transform:scale(1.09) translate(-2%, -4%); }
          }
          @keyframes cs-recall-violet {
            0%,100% { opacity:0.5;  transform:scale(1)    translate( 0%,  0%); }
            40%      { opacity:1;   transform:scale(1.14) translate( 3%,  5%); }
            80%      { opacity:0.65; transform:scale(0.90) translate(-2%, -3%); }
          }
        `}</style>

        <div className="max-w-[1100px] mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-white/10 rounded-sm mb-8">
            <Cpu className="w-3 h-3 text-cs-orange" />
            <span className="font-mono text-[0.625rem] text-zinc-400 uppercase tracking-[0.25em]">
              Celaya Solutions / AI Services
            </span>
          </div>

          <h1 className="font-display font-extrabold text-6xl md:text-8xl tracking-[-0.03em] leading-[1.0] mb-6">
            Recall
          </h1>
          <p className="font-display font-semibold text-2xl md:text-3xl text-zinc-400 mb-6 max-w-2xl leading-snug">
            A private AI trained on your documents. Not the internet.
          </p>
          <p className="font-body text-[1rem] text-zinc-500 max-w-xl leading-relaxed mb-12">
            Most AI tools answer from the internet. Recall answers from your business: policies, archives, SOPs, research, whatever you have. Every answer cites the exact source it came from.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:hello@celayasolutions.com?subject=Recall Inquiry"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cs-orange text-black font-mono text-[0.75rem] uppercase tracking-[0.15em] font-bold hover:bg-orange-400 transition-colors"
            >
              <span>Book a Scoping Call</span>
              <ArrowRight className="w-3 h-3" />
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/15 text-cs-white font-mono text-[0.75rem] uppercase tracking-[0.15em] font-bold hover:bg-white/5 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Proof bar */}
      <section className="border-b border-white/5 px-6 py-6">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
          {[
            { label: 'Projects deployed', value: '2' },
            { label: 'Vectors indexed', value: '10,000+' },
            { label: 'Source formats handled', value: 'PDF, MD, DOCX, CSV' },
            { label: 'Hosting cost', value: '~$20/mo' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display font-bold text-2xl text-cs-white">{stat.value}</p>
              <p className="font-mono text-[0.625rem] text-zinc-500 uppercase tracking-[0.15em] mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-24 border-b border-white/5">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-14">
            <p className="font-mono text-[0.75rem] text-cs-orange uppercase tracking-[0.25em] mb-3">Process</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-[-0.02em] text-cs-white">
              How it works
            </h2>
          </div>
          <div className="max-w-xl">
            {STEPS.map((step) => (
              <StepCard key={step.n} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* What powers it */}
      <section className="px-6 py-24 border-b border-white/5 bg-zinc-950">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-14">
            <p className="font-mono text-[0.75rem] text-cs-orange uppercase tracking-[0.25em] mb-3">Stack</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-[-0.02em] text-cs-white mb-4">
              What it runs on
            </h2>
            <p className="font-body text-[0.9375rem] text-zinc-400 max-w-lg">
              Proven tools, no unnecessary dependencies. Same stack across every project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <FileText className="w-4 h-4" />, label: 'Ingestion', value: 'PyMuPDF + Docling' },
              { icon: <Cpu className="w-4 h-4" />, label: 'Embeddings', value: 'Nomic AI (768-dim)' },
              { icon: <Cpu className="w-4 h-4" />, label: 'Vector DB', value: 'FAISS / Qdrant' },
              { icon: <Cpu className="w-4 h-4" />, label: 'AI Generation', value: 'Claude (Anthropic)' },
              { icon: <Globe className="w-4 h-4" />, label: 'Backend', value: 'FastAPI / Next.js' },
              { icon: <Globe className="w-4 h-4" />, label: 'Hosting', value: 'Railway' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-5 border border-white/8 rounded-sm bg-cs-black">
                <div className="text-cs-orange mt-0.5">{item.icon}</div>
                <div>
                  <p className="font-mono text-[0.625rem] text-zinc-500 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                  <p className="font-body text-[0.9375rem] text-cs-white font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-24 border-b border-white/5">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-14">
            <p className="font-mono text-[0.75rem] text-cs-orange uppercase tracking-[0.25em] mb-3">Pricing</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-[-0.02em] text-cs-white mb-4">
              Two tiers
            </h2>
            <p className="font-body text-[0.9375rem] text-zinc-400 max-w-lg">
              Starting prices. Final scope depends on document volume, integrations, and custom features. All projects include a scoping call.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {TIERS.map((tier) => (
              <TierCard key={tier.name} tier={tier} />
            ))}
          </div>
          <p className="font-mono text-[0.75rem] text-zinc-600 mt-6 uppercase tracking-[0.1em]">
            Rush delivery (under 2 weeks): +25%
          </p>
        </div>
      </section>

      {/* Examples */}
      <section className="px-6 py-24 border-b border-white/5 bg-zinc-950">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-14">
            <p className="font-mono text-[0.75rem] text-cs-orange uppercase tracking-[0.25em] mb-3">Built Work</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-[-0.02em] text-cs-white mb-4">
              Real systems, shipped
            </h2>
            <p className="font-body text-[0.9375rem] text-zinc-400 max-w-lg">
              Both of these are live and in use. Not prototypes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {EXAMPLES.map((ex) => (
              <ExampleCard key={ex.name} example={ex} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 border-b border-white/5">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-14">
            <p className="font-mono text-[0.75rem] text-cs-orange uppercase tracking-[0.25em] mb-3">Questions</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-[-0.02em] text-cs-white">
              Common questions
            </h2>
          </div>
          <div className="max-w-2xl border-t border-white/10">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32">
        <div className="max-w-[1100px] mx-auto">
          <div className="max-w-2xl">
            <p className="font-mono text-[0.75rem] text-cs-orange uppercase tracking-[0.25em] mb-6">Get Started</p>
            <h2 className="font-display font-extrabold text-5xl md:text-6xl tracking-[-0.03em] leading-[1.05] mb-6">
              Ready to build yours?
            </h2>
            <p className="font-body text-[1rem] text-zinc-400 leading-relaxed mb-10 max-w-lg">
              Send a short description of your documents and what you want to be able to ask. We will scope it and get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:hello@celayasolutions.com?subject=Recall Inquiry"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cs-orange text-black font-mono text-[0.75rem] uppercase tracking-[0.15em] font-bold hover:bg-orange-400 transition-colors"
              >
                <span>hello@celayasolutions.com</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <p className="font-mono text-[0.75rem] text-zinc-600 mt-6 uppercase tracking-[0.1em]">
              Celaya Solutions / El Paso, TX
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Recall;
