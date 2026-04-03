/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-gray-*, cs-font-mono, cs-font-display */
import React from 'react';

const ExampleTrace: React.FC = () => {
  return (
    <section id="example-trace" className="py-24 px-6 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto">

        {/* Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Research Trace
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
        </div>

        {/* Heading + description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10 items-start">
          <div>
            <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
              Example Output
            </h2>
            <p className="font-body text-cs-gray-400 text-base leading-relaxed mb-4">
              This is an actual trace receipt from a CLOS instrument run. Every instrument invocation produces exactly this artifact — signed, immutable, re-runnable. This is what "Make Coherence Visible" looks like in practice.
            </p>
            <p className="font-body text-cs-gray-300 text-sm leading-relaxed">
              The receipt below triggered a Volt delay of 22 minutes, raised a SIGNAL anomaly flag, and logged to the operator's nightly coherence summary. The artifact is stored at <span className="font-mono text-cs-orange">/traces/CLOS-2024-0891.json</span> and cannot be modified after issuance.
            </p>
          </div>

          {/* Live metric summary */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'CI Score',        value: '0.23',          sub: 'Overloaded',  color: 'text-red-400' },
              { label: 'Risk Level',      value: 'HIGH',          sub: 'Deferred',    color: 'text-red-400' },
              { label: 'Volt Delay',      value: '22 min',        sub: 'Triggered',   color: 'text-cs-yellow' },
              { label: 'Artifact Status', value: 'Immutable',     sub: 'Minted',      color: 'text-cs-green' },
            ].map((m) => (
              <div key={m.label} className="border border-cs-gray-700 rounded bg-cs-gray-900 p-5">
                <p className={`font-mono text-xl font-bold ${m.color} mb-1`}>{m.value}</p>
                <p className="font-mono text-[0.6rem] text-cs-gray-300 uppercase tracking-[0.15em] mb-0.5">{m.label}</p>
                <p className="font-mono text-[0.6rem] text-cs-gray-400 uppercase tracking-[0.1em]">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal trace display */}
        <div className="border border-cs-gray-700 rounded overflow-hidden">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-cs-gray-700 bg-cs-gray-900">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-cs-yellow/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-cs-green/70" />
            <span className="font-mono text-[0.7rem] text-cs-gray-300 ml-3 uppercase tracking-[0.15em]">
              CLOS-2024-0891.json · Trace Receipt · READ ONLY
            </span>
          </div>

          {/* Trace body */}
          <div className="bg-cs-black p-6 md:p-8 font-mono text-[0.75rem] leading-relaxed overflow-x-auto">
            <div className="space-y-5 text-cs-gray-400">

              {/* Header */}
              <div>
                <div className="text-cs-gray-400 mb-2">{'// ─────────────────────────────────────────────────────────────────────'}</div>
                <div><span className="text-cs-gray-300">TRACE RECEIPT</span></div>
                <div className="text-cs-gray-400">{'// ─────────────────────────────────────────────────────────────────────'}</div>
              </div>

              {/* Metadata */}
              <div className="space-y-1">
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <span className="text-cs-gray-400">Instrument:</span>
                  <span className="text-cs-orange">CLOS v1.4.2</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <span className="text-cs-gray-400">Run ID:</span>
                  <span className="text-white">CLOS-2024-0891</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <span className="text-cs-gray-400">Timestamp:</span>
                  <span className="text-cs-gray-300">2024-11-14T09:23:41Z</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <span className="text-cs-gray-400">Operator:</span>
                  <span className="text-cs-gray-300">autonomous</span>
                </div>
              </div>

              {/* Inputs */}
              <div>
                <div className="text-cs-gray-400 mb-2">{'// ── INPUTS ──────────────────────────────────────────────────────────'}</div>
                <div className="space-y-1">
                  {[
                    { k: 'hrv_ms',      v: '42.3',            note: '(baseline: 58.1 · delta: −15.8ms · −27%)',  c: 'text-red-400' },
                    { k: 'task_state',  v: 'DEEP_FOCUS',       note: '(duration: 94 min)',                         c: 'text-cs-yellow' },
                    { k: 'voice_rate',  v: '67 wpm',           note: '(baseline: 112 wpm · −40%)',                 c: 'text-red-400' },
                    { k: 'self_report', v: '"can\'t concentrate"', note: '(0 days prior)',                         c: 'text-cs-gray-300' },
                  ].map(({ k, v, note, c }) => (
                    <div key={k} className="grid grid-cols-[140px_1fr] gap-2">
                      <span className="text-cs-gray-400">{k}:</span>
                      <span>
                        <span className={c}>{v}</span>
                        <span className="text-cs-gray-400 ml-2">{note}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measurement */}
              <div>
                <div className="text-cs-gray-400 mb-2">{'// ── MEASUREMENT ────────────────────────────────────────────────────'}</div>
                <div className="space-y-1">
                  <div className="grid grid-cols-[140px_1fr] gap-2">
                    <span className="text-cs-gray-400">CI:</span>
                    <span className="text-red-400 font-bold">0.23 · INCOHERENT</span>
                  </div>
                  <div className="grid grid-cols-[140px_1fr] gap-2">
                    <span className="text-cs-gray-400">Load class:</span>
                    <span className="text-red-400">OVERLOADED</span>
                  </div>
                  <div className="grid grid-cols-[140px_1fr] gap-2">
                    <span className="text-cs-gray-400">Risk level:</span>
                    <span className="text-red-400">HIGH</span>
                  </div>
                  <div className="grid grid-cols-[140px_1fr] gap-2">
                    <span className="text-cs-gray-400">Confidence:</span>
                    <span className="text-cs-gray-300">0.91 (n=4 signals)</span>
                  </div>
                </div>
              </div>

              {/* Decision */}
              <div>
                <div className="text-cs-gray-400 mb-2">{'// ── DECISION ────────────────────────────────────────────────────────'}</div>
                <div className="space-y-1">
                  <div className="grid grid-cols-[140px_1fr] gap-2">
                    <span className="text-cs-gray-400">Action:</span>
                    <span className="text-cs-yellow">DEFER</span>
                  </div>
                  <div className="grid grid-cols-[140px_1fr] gap-2">
                    <span className="text-cs-gray-400">Triggered:</span>
                    <span className="text-cs-gray-300">Volt — prompt delay: 22 minutes</span>
                  </div>
                  <div className="grid grid-cols-[140px_1fr] gap-2">
                    <span className="text-cs-gray-400">Logged to:</span>
                    <span className="text-cs-gray-300">SIGNAL · anomaly flag raised</span>
                  </div>
                </div>
              </div>

              {/* Artifact */}
              <div>
                <div className="text-cs-gray-400 mb-2">{'// ── ARTIFACT ────────────────────────────────────────────────────────'}</div>
                <div className="space-y-1">
                  <div className="grid grid-cols-[140px_1fr] gap-2">
                    <span className="text-cs-gray-400">Provenance:</span>
                    <span className="text-cs-gray-300">sha256:a3f9d2c8b1e7f4a6d9c2e8b5f1a7d3c9</span>
                  </div>
                  <div className="grid grid-cols-[140px_1fr] gap-2">
                    <span className="text-cs-gray-400">Receipt:</span>
                    <span className="text-cs-orange">/traces/CLOS-2024-0891.json</span>
                  </div>
                  <div className="grid grid-cols-[140px_1fr] gap-2">
                    <span className="text-cs-gray-400">Status:</span>
                    <span className="text-cs-green">IMMUTABLE</span>
                  </div>
                </div>
              </div>

              {/* Footer line */}
              <div className="text-cs-gray-700 pt-2 border-t border-cs-gray-800">
                {'// End of receipt — this artifact cannot be modified after issuance'}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExampleTrace;
