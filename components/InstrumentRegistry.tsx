/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-gray-700, cs-font-mono, cs-font-display, cs-font-body */
import React from 'react';
import type { Instrument } from '../data/instruments.ts';
import { CATEGORIES, STATUS_COUNTS } from '../data/instruments.ts';

const statusColor: Record<Instrument['status'], string> = {
  Production:    'text-cs-green   border-cs-green/50',
  'Active Build':'text-cs-orange  border-cs-orange/50',
  Research:      'text-cs-yellow  border-cs-yellow/50',
  Specced:       'text-cs-gray-300 border-cs-gray-500',
};

const statusDot: Record<Instrument['status'], string> = {
  Production:    'bg-cs-green',
  'Active Build':'bg-cs-orange',
  Research:      'bg-cs-yellow',
  Specced:       'bg-cs-gray-300',
};

function StatBlock({ num, label, accent }: { num: number; label: string; accent?: string }) {
  return (
    <div className="px-5 py-6 border-r border-cs-gray-800 last:border-r-0 first:pl-0">
      <div className={`font-display font-extrabold text-[2.5rem] leading-none tracking-[-0.02em] mb-2 ${accent ?? 'text-white'}`}>
        {num}
      </div>
      <div className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-cs-gray-400">
        {label}
      </div>
    </div>
  );
}

function InstrumentEntry({ item }: { item: Instrument }) {
  return (
    <article className="border border-cs-gray-700 bg-cs-gray-900 hover:bg-cs-gray-800 transition-colors duration-300 p-7 flex flex-col gap-4">
      <header className="grid grid-cols-[1fr_auto] gap-4 items-start">
        <div className="min-w-0">
          <div className="font-display italic text-[0.9rem] text-cs-gray-400 tracking-[0.04em] mb-1">
            {item.roman}
          </div>
          <h3 className="font-display font-bold text-[1.5rem] leading-[1.05] tracking-[-0.01em] mb-1.5 text-white">
            {item.name}
          </h3>
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-cs-gray-400">
            {item.aka}
          </div>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] px-2 py-1 border ${statusColor[item.status]}`}
        >
          <span className={`block w-1.5 h-1.5 rounded-full ${statusDot[item.status]}`} />
          {item.status}
        </span>
      </header>

      <p className="font-body text-[0.95rem] text-cs-gray-300 leading-[1.6]">
        {item.purpose}
      </p>

      <dl className="border-t border-cs-gray-800 pt-3 grid grid-cols-[80px_1fr] gap-x-4 gap-y-2 font-mono text-[0.7rem] leading-[1.5]">
        <dt className="text-cs-gray-400 uppercase tracking-[0.08em] text-[0.65rem] pt-px">Wave</dt>
        <dd className="text-white">{item.wave}</dd>

        <dt className="text-cs-gray-400 uppercase tracking-[0.08em] text-[0.65rem] pt-px">Stack</dt>
        <dd className="flex flex-wrap gap-1.5">
          {item.stack.map((s) => (
            <span key={s} className="inline-block px-1.5 py-0.5 border border-cs-gray-700 text-cs-gray-300 text-[0.65rem]">
              {s}
            </span>
          ))}
        </dd>

        <dt className="text-cs-gray-400 uppercase tracking-[0.08em] text-[0.65rem] pt-px">Deps</dt>
        <dd className="text-cs-gray-300 break-words">{item.deps}</dd>

        {item.extra.map((row) => (
          <React.Fragment key={row.label}>
            <dt className="text-cs-gray-400 uppercase tracking-[0.08em] text-[0.65rem] pt-px">{row.label}</dt>
            <dd className="text-cs-gray-300 break-words">{row.value}</dd>
          </React.Fragment>
        ))}
      </dl>
    </article>
  );
}

export function InstrumentRegistry({ instruments }: { instruments: Instrument[] }) {
  return (
    <div id="catalog" className="bg-cs-black">
      {/* ── Masthead ────────────────────────────────────────────────────── */}
      <section className="px-6 pt-24 pb-12 border-b border-cs-gray-800">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-cs-orange" />
            <span className="font-mono text-[0.7rem] tracking-[0.18em] uppercase text-cs-orange">
              CSR-REG-001 / Instrument Registry
            </span>
          </div>

          <h1
            className="font-display font-extrabold tracking-[-0.03em] leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)' }}
          >
            Master Inventory<br/>of Research<br/>Instruments.
          </h1>

          <p className="font-display italic text-cs-gray-300 text-xl md:text-[1.4rem] leading-[1.5] max-w-[720px] mb-14">
            A complete enumeration of every named instrument, sub-instrument, paper, and framework produced under Celaya Solutions Research from inception through April 28, 2026. Internal document. Real names retained.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-6 border-t border-b border-cs-gray-800">
            <StatBlock num={instruments.length}                 label="Total Entries" />
            <StatBlock num={STATUS_COUNTS.Production    ?? 0}   label="Production / Live"  accent="text-cs-green" />
            <StatBlock num={STATUS_COUNTS['Active Build']?? 0}  label="Active Build"       accent="text-cs-orange" />
            <StatBlock num={STATUS_COUNTS.Research      ?? 0}   label="Research"           accent="text-cs-yellow" />
            <StatBlock num={STATUS_COUNTS.Specced       ?? 0}   label="Specced" />
            <StatBlock num={CATEGORIES.length}                  label="Categories" />
          </div>
        </div>
      </section>

      {/* ── Category nav ────────────────────────────────────────────────── */}
      <nav className="sticky top-[60px] z-30 border-b border-cs-gray-800 bg-cs-black/95 backdrop-blur-sm">
        <div className="max-w-[1100px] mx-auto px-6 py-3 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[0.65rem] uppercase tracking-[0.08em]">
          <span className="text-cs-gray-400 mr-2">Jump:</span>
          {CATEGORIES.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="text-cs-gray-300 hover:text-cs-orange transition-colors"
            >
              {c.num} {c.title}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Categories ──────────────────────────────────────────────────── */}
      <main className="max-w-[1100px] mx-auto px-6">
        {CATEGORIES.map((cat) => {
          const items = instruments.filter((i) => i.category === cat.title);
          return (
            <section key={cat.id} id={cat.id} className="py-20 border-b border-cs-gray-800 last:border-b-0">
              <header className="grid grid-cols-[60px_1fr_auto] gap-6 items-baseline mb-10 pb-6 border-b border-cs-gray-700">
                <div className="font-display italic font-light text-[3.5rem] leading-none text-white">
                  {cat.num}
                </div>
                <h2 className="font-display font-bold text-[2rem] leading-[1.1] tracking-[-0.01em]">
                  {cat.title}
                </h2>
                <div className="text-right font-mono text-[0.7rem] uppercase tracking-[0.08em] text-cs-gray-400 leading-[1.8]">
                  <div><span className="text-cs-orange text-[0.85rem]">{items.length}</span> instruments</div>
                  <div>{cat.caption}</div>
                </div>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((item) => (
                  <InstrumentEntry key={item.slug} item={item} />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {/* ── Methodology coda ────────────────────────────────────────────── */}
      <section className="px-6 py-16 border-t border-cs-gray-800">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-cs-gray-400 mb-4 pb-2 border-b border-cs-gray-800">
              Methodology Note
            </h4>
            <p className="font-display italic text-[1rem] leading-[1.55] text-cs-gray-300">
              Status taxonomy: <span className="text-cs-green not-italic font-mono text-[0.85rem]">Production</span> (deployed, live), <span className="text-cs-orange not-italic font-mono text-[0.85rem]">Active Build</span> (sprint underway), <span className="text-cs-yellow not-italic font-mono text-[0.85rem]">Research</span> (working but not deployed), <em>Specced</em> (designed, not built). Wave label indicates first significant work.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-cs-gray-400 mb-4 pb-2 border-b border-cs-gray-800">
              Coherence Equation
            </h4>
            <div className="font-display italic text-[1.4rem] my-3 text-white">
              C = <span className="text-cs-orange font-medium">A</span> × <span className="text-cs-orange font-medium">CE</span> × <span className="text-cs-orange font-medium">I</span> × <span className="text-cs-orange font-medium">CB</span> × <span className="text-cs-orange font-medium">S</span> × <span className="text-cs-orange font-medium">E</span>
            </div>
            <p className="font-display italic text-[1rem] leading-[1.55] text-cs-gray-300">
              The operator's priority and instrument-evaluation rubric. Multiplicative, so any zero collapses the whole.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-cs-gray-400 mb-4 pb-2 border-b border-cs-gray-800">
              Open Items
            </h4>
            <p className="font-display italic text-[1rem] leading-[1.55] text-cs-gray-300">
              Spec fill-ins required for: <span className="text-white not-italic">Sentinel</span>, <span className="text-white not-italic">Project Jupiter</span>, <span className="text-white not-italic">Imago</span>. Confirm scope before any external publication.
            </p>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto pt-8 mt-8 border-t border-cs-gray-800 flex flex-col md:flex-row justify-between gap-3 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-cs-gray-400">
          <span>// CSR / REG-001 / v.2026.04.28</span>
          <em className="font-display not-italic italic text-cs-gray-300 text-[0.9rem] tracking-normal normal-case">
            An index for the library.
          </em>
          <span>© {new Date().getFullYear()} Celaya Solutions Research</span>
        </div>
      </section>
    </div>
  );
}
