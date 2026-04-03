/* CCP Research Publication — LaTeX rendered via KaTeX DOM API (no dangerouslySetInnerHTML) */
import React, { useRef, useEffect } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// ── Safe KaTeX renderers using ref + DOM API ─────────────────────────────────
// KaTeX renders math into a DOM node directly — no innerHTML needed.

function InlineMath({ formula }: { formula: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (ref.current) {
      katex.render(formula, ref.current, { throwOnError: false, displayMode: false });
    }
  }, [formula]);
  return <span ref={ref} className="mx-0.5 align-middle" />;
}

function DisplayMath({ formula }: { formula: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      katex.render(formula, ref.current, { throwOnError: false, displayMode: true });
    }
  }, [formula]);
  return <div ref={ref} className="my-6 overflow-x-auto py-2 text-center" />;
}

// ── Layout helpers ────────────────────────────────────────────────────────────

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h3 className="font-display text-xl font-bold mb-5 tracking-tight text-cs-white">{label}</h3>
      {children}
    </div>
  );
}

function Subsection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 pl-6 border-l-2 border-cs-gray-700">
      <h4 className="font-mono text-[0.8rem] uppercase tracking-[0.12em] text-cs-orange mb-3">{label}</h4>
      {children}
    </div>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body text-cs-gray-300 text-base leading-relaxed mb-4">{children}</p>;
}

// ── Main component ────────────────────────────────────────────────────────────

const CCPPublication: React.FC = () => {
  return (
    <section id="ccp-publication" className="py-24 border-b border-cs-gray-800">
      <div className="max-w-[860px] mx-auto px-6 lg:px-10">

        {/* Label row */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
            Research Publication
          </span>
          <span className="block w-10 h-px bg-cs-orange opacity-50" />
          <a
            href="https://ethresear.ch/t/applications-economics/24194"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-cs-green border border-cs-green/30 px-2 py-0.5 rounded-sm hover:bg-cs-green/10 transition-colors"
          >
            ethresear.ch ↗
          </a>
        </div>

        {/* Paper header */}
        <div className="mb-16 pb-12 border-b border-cs-gray-700">
          <h1 className="font-display text-[2.2rem] md:text-[3rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
            Formalizing Vitalik's Security Pattern
          </h1>
          <p className="font-display text-xl text-cs-gray-300 mb-8">
            A Mathematical Framework for Multi-Dimensional Intent Alignment
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {[
              { label: 'Author',       value: 'Christopher Celaya' },
              { label: 'Organization', value: 'Celaya Solutions' },
              { label: 'Location',     value: 'El Paso, Texas' },
              { label: 'Date',         value: 'February 2026' },
            ].map(({ label, value }) => (
              <div key={label}>
                <span className="font-mono text-[0.65rem] text-cs-gray-500 uppercase tracking-[0.15em] block mb-1">{label}</span>
                <span className="font-body text-cs-gray-300 text-sm">{value}</span>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-cs-gray-800">
            <span className="font-mono text-[0.65rem] text-cs-gray-500 uppercase tracking-[0.15em] block mb-1">Published at</span>
            <a
              href="https://ethresear.ch/t/applications-economics/24194"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-cs-orange hover:underline"
            >
              https://ethresear.ch/t/applications-economics/24194
            </a>
          </div>
        </div>

        {/* Summary */}
        <Section label="Summary">
          <P>
            Vitalik's post <em>"How I think about security"</em> identifies a recurring pattern: users specify intent across multiple independent dimensions, and systems execute only when all dimensions align.
          </P>
          <P>This work formalizes that pattern into a computable framework with three components:</P>
          <ul className="space-y-2 mb-4 pl-4 border-l-2 border-cs-gray-700">
            {['A multi-dimensional authority function', 'Temporal decay mechanisms', 'Biological grounding via MORTEM'].map(item => (
              <li key={item} className="font-body text-cs-gray-300 flex items-center gap-3">
                <span className="text-cs-orange shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <P>
            Implemented as the <strong className="text-cs-white">Celaya Chain Protocol (CCP)</strong> — a Layer 3 blockchain with Proof of Coherence consensus. This paper focuses on the game-theoretic properties of the composite scoring system.
          </P>
        </Section>

        {/* Core Observation */}
        <Section label="Core Observation">
          <div className="border border-cs-gray-700 rounded bg-cs-gray-900 p-6 mb-6">
            <p className="font-body text-cs-gray-300 text-lg italic">
              Security = minimizing divergence between user intent and system behavior. This makes security <strong className="text-cs-white not-italic">continuous</strong>, not binary.
            </p>
          </div>
          <P>The structural pattern appears across domains:</P>
          <div className="overflow-x-auto mb-6">
            <table className="w-full font-mono text-[0.72rem] border-collapse">
              <thead>
                <tr className="border-b border-cs-gray-700">
                  {['Pattern', 'Axis 1', 'Axis 2', 'Alignment Condition'].map(h => (
                    <th key={h} className="text-left py-2 pr-4 text-cs-gray-500 uppercase tracking-[0.08em] font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-cs-gray-400">
                {[
                  ['Type systems',          'Code behavior',     'Type annotations',           'Must agree at every step'],
                  ['Formal verification',   'Code',              'Mathematical properties',     'Program satisfies properties'],
                  ['Transaction simulation','User action',       'Previewed consequences',      'User confirms alignment'],
                  ['Multi-sig / recovery',  'Multiple keys',     'Multiple authority defs',     'All must agree'],
                ].map(row => (
                  <tr key={row[0]} className="border-b border-cs-gray-800">
                    {row.map((cell, i) => (
                      <td key={i} className="py-2 pr-4">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>Generalized form: N independent specifications → system acts only when all align.</P>
        </Section>

        {/* Authority Equation */}
        <Section label="The Authority Equation">
          <DisplayMath formula="A(t) = C(t) \cdot e^{-\alpha n} \cdot e^{-\lambda \tau}" />

          <Subsection label="Coherence Composite C(t)">
            <DisplayMath formula="C(t) = \left( I^{\beta} \cdot R^{\gamma} \cdot P^{\delta} \cdot X^{\epsilon} \cdot B^{\zeta} \right)^{\!\frac{1}{\beta + \gamma + \delta + \epsilon + \zeta}}" />
            <div className="space-y-2 mb-4">
              {[
                ['I', 'Identity tier — verification strength'],
                ['R', 'Reputation composite — multi-axis behavioral history'],
                ['P', 'Policy compliance score'],
                ['X', 'Action audit consistency'],
                ['B', 'Biological continuity (MORTEM-sourced heartbeat attestations)'],
              ].map(([sym, desc]) => (
                <div key={sym} className="flex items-baseline gap-4">
                  <span className="font-mono text-cs-orange shrink-0 w-5">
                    <InlineMath formula={sym} />
                  </span>
                  <span className="font-body text-sm text-cs-gray-400">{desc}</span>
                </div>
              ))}
            </div>
          </Subsection>

          <Subsection label="Key Property: Non-Compensation">
            <P>
              The weighted geometric mean enforces that no axis compensates for another. Zero in any axis collapses total authority:
            </P>
            <DisplayMath formula="\exists\; i : \text{axis}_i = 0 \implies C(t) = 0 \implies A(t) = 0" />
            <P>
              This provides the same structural guarantee as multi-sig systems, generalized across heterogeneous authority dimensions with mathematically enforced redundancy.
            </P>
          </Subsection>
        </Section>

        {/* Extensions */}
        <Section label="Extensions Beyond Prior Work">
          <Subsection label="1. Temporal Decay Mechanisms">
            <P><strong className="text-cs-white">Founder Decay</strong> — authority converges to zero as network size grows:</P>
            <DisplayMath formula="e^{-\alpha n} \;\xrightarrow{n \to \infty}\; 0" />
            <P><strong className="text-cs-white">Staleness Decay</strong> — authority degrades without continued alignment:</P>
            <DisplayMath formula="e^{-\lambda \tau} \;\xrightarrow{\tau \to \infty}\; 0" />
            <P>Both mechanisms require continuous re-validation of intent alignment — authority cannot accumulate permanently.</P>
          </Subsection>

          <Subsection label="2. Biological Ground Truth">
            <P>
              The <InlineMath formula="B" /> axis grounds the authority equation in physical continuity, addressing credential transfer at the protocol level:
            </P>
            <ul className="space-y-2 font-body text-sm text-cs-gray-400 mb-4 pl-4 border-l-2 border-cs-gray-700">
              <li>Continuous cardiac signature via MORTEM — 86,400 timestamped beats per day on Solana</li>
              <li>Sequential cryptographic commitment per heartbeat</li>
              <li>Credential theft cannot maintain <InlineMath formula="B > 0" /> — biological continuity enforces operator identity</li>
            </ul>
          </Subsection>

          <Subsection label="3. Governed Parameters">
            <P>All weights are adjustable under a coherence-weighted constitutional system:</P>
            <DisplayMath formula="\{\beta,\, \gamma,\, \delta,\, \epsilon,\, \zeta,\, \alpha,\, \lambda\} \;\subseteq\; \Theta_{\text{governed}}" />
            <P>
              Parameter updates require the governing system to satisfy a minimum coherence threshold — preventing manipulation of the parameters through the same mechanism they protect.
            </P>
          </Subsection>
        </Section>

        {/* Attack Vectors */}
        <Section label="Attack Vectors Under Peer Review">
          <Subsection label="1. Coordinated Attestation Inflation">
            <P>Mutual reinforcement among colluding validators inflates <InlineMath formula="R" />. Attester credibility weighting provides partial resistance. Coalition resistance bounds remain an open question.</P>
          </Subsection>
          <Subsection label="2. Temporal Gaming">
            <P>
              Build authority slowly; exploit during a high-impact window before decay invalidates it. Requires optimal <InlineMath formula="\lambda" /> selection accounting for maximum plausible preparation time.
            </P>
          </Subsection>
          <Subsection label="3. Axis Correlation Attacks">
            <P>
              If axes share hidden dependencies, the non-compensation property weakens. Requires formal correlation tolerance bounds:
            </P>
            <DisplayMath formula="\text{Corr}(\text{axis}_i,\, \text{axis}_j) < \varepsilon_{\text{tol}} \quad \forall\; i \neq j" />
          </Subsection>
        </Section>

        {/* Implementation */}
        <Section label="Implementation Status">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Blocks verified',    value: '83',            color: 'text-cs-green' },
              { label: 'Property tests',     value: '9 passing',     color: 'text-cs-green' },
              { label: 'Replay confirmed',   value: 'Deterministic', color: 'text-cs-green' },
              { label: 'Threat vectors',     value: '12 documented', color: 'text-cs-yellow' },
            ].map(({ label, value, color }) => (
              <div key={label} className="border border-cs-gray-700 rounded bg-cs-gray-900 p-4">
                <p className={`font-mono text-base font-bold ${color}`}>{value}</p>
                <p className="font-mono text-[0.6rem] text-cs-gray-500 uppercase tracking-[0.1em]">{label}</p>
              </div>
            ))}
          </div>
          <P>
            Biological layer: <strong className="text-cs-white">MORTEM</strong> on Solana devnet. 8 autonomous witness agents providing continuous heartbeat attestations. System is running.
          </P>
        </Section>

        {/* Related Work */}
        <Section label="Related Work">
          <P>Comparable structures in the literature: Quadratic voting (Weyl &amp; Posner), Conviction voting, Eigentrust. Key differences from this framework:</P>
          <ul className="space-y-2 pl-4 border-l-2 border-cs-gray-700 mb-4">
            {['Biological continuity as a protocol-level constraint', 'Temporal decay as a first-class parameter', 'Non-compensatory weighted geometric mean scoring'].map(d => (
              <li key={d} className="font-body text-sm text-cs-gray-400 flex items-start gap-3">
                <span className="text-cs-orange mt-0.5 shrink-0">—</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Ethical Consideration */}
        <Section label="Ethical Consideration">
          <div className="border border-cs-orange/20 rounded bg-cs-orange/5 p-6">
            <P>
              The mechanism is domain-agnostic. A system that correctly enforces multi-dimensional intent alignment can serve security — or social control infrastructure.
            </P>
            <P>
              The risk is not failure. The risk is <strong className="text-cs-white">correct function under adversarial intent</strong>.
            </P>
            <P>
              This publication is intended for technical validation, game-theoretic analysis, and ethical evaluation. The mathematics is stable. The implications are not fully understood.
            </P>
          </div>
        </Section>

        {/* Footer */}
        <div className="pt-8 border-t border-cs-gray-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-[0.65rem] text-cs-gray-500 uppercase tracking-[0.15em] block mb-1">Status</span>
            <span className="font-mono text-sm text-cs-yellow">Research draft — open for peer review</span>
          </div>
          <a
            href="https://ethresear.ch/t/applications-economics/24194"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-[0.12em] px-4 py-2 border border-cs-orange/50 text-cs-orange hover:bg-cs-orange/10 transition-all duration-200 rounded-sm"
          >
            Read on Ethereum Research ↗
          </a>
        </div>

      </div>
    </section>
  );
};

export default CCPPublication;
