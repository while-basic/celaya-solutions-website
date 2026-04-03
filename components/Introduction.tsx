/* Brand tokens: cs-orange, cs-green, cs-yellow, cs-font-display, cs-font-mono, cs-font-body */
import React, { useEffect, useRef } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Deterministic pseudo-random — stable seeded values, no layout-shift re-seeding
// ─────────────────────────────────────────────────────────────────────────────
const sr = (i: number, s: number): number =>
  ((i * 9_301 + s * 49_297 + 233_280) * (i + 1)) % 233_280 / 233_280;

// ─────────────────────────────────────────────────────────────────────────────
// Canvas background hook
// ─────────────────────────────────────────────────────────────────────────────
function useMesmerizingBg(ref: React.RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Cap at 2× — enough for all retina screens, avoids excess memory on 3×
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let t = 0;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      canvas.width  = r.width  * dpr;
      canvas.height = r.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // ── Floating geometric blocks ─────────────────────────────────────────────
    // Three families: tiny squares  |  medium rectangles  |  thin wide slivers
    const BLOCKS = Array.from({ length: 16 }, (_, i) => ({
      xp:     sr(i, 0),
      yp:     sr(i, 1),
      w:   i < 5  ? 14 + sr(i, 2) * 24          // tiny
         : i < 11 ? 52 + sr(i, 2) * 88           // medium
         :         108 + sr(i, 2) * 128,          // sliver
      h:   i < 5  ? 14 + sr(i, 3) * 24
         : i < 11 ? 16 + sr(i, 3) * 48
         :           8 + sr(i, 3) * 26,
      rot:    (sr(i, 4) - 0.5) * 38,             // initial angle °
      rotSpd: (sr(i, 5) - 0.5) * 0.11,           // °/sec
      amp:     8  + sr(i, 6) * 20,               // float amplitude px
      freq:   0.14 + sr(i, 7) * 0.30,            // float Hz
      ph:     sr(i, 8) * Math.PI * 2,
      col:    ['o','o','o','g','g','g','w','o','g','o','g','w','o','g','w','o'][i],
      base:   0.048 + sr(i, 9) * 0.062,
    }));

    // ── Animated bezier / quadratic curves ────────────────────────────────────
    // pts layout: [sx,sy, cp1x,cp1y, cp2x,cp2y, ex,ey]  (fractions of w/h)
    // quad: true  →  uses only [sx,sy, cpx,cpy, ex,ey]
    type Curve = {
      p: number[]; col: string; a: number; lw: number;
      ph: number; f: number[]; am: number[]; quad?: boolean;
    };
    const CURVES: Curve[] = [
      // 1  long orange sweep: bottom-left → top-right
      { p:[0,.68, .22,.08, .70,.92, 1,.18], col:'o', a:.07,  lw:1.0,  ph:0.0, f:[.18,.14,.20,.16], am:[.050,.070,.040,.060] },
      // 2  green diagonal: top-right → bottom-left
      { p:[.76,0, .94,.44, .06,.56, .16,1], col:'g', a:.05,  lw:.75,  ph:1.2, f:[.12,.20,.15,.10], am:[.050,.040,.060,.050] },
      // 3  wide orange arc: left edge → right edge (quadratic)
      { p:[0,.50, .50,.03, 1,.50, 0,0],     col:'o', a:.04,  lw:1.5,  ph:2.1, f:[.10,.15,0,0],     am:[.070,.090,0,0],       quad:true },
      // 4  white whisper: left → right, mid height
      { p:[0,.32, .28,.65, .72,.18, 1,.44], col:'w', a:.020, lw:.5,   ph:3.5, f:[.08,.13,.10,.09], am:[.040,.050,.040,.060] },
      // 5  green right-side rise: bottom-right → top-center
      { p:[.58,1, 1.06,.72, .88,.28, .48,0],col:'g', a:.038, lw:.75,  ph:0.7, f:[.15,.20,.18,.12], am:[.040,.050,.030,.060] },
      // 6  faint orange stray: left → right, low
      { p:[0,.88, .58,.95, .42,.05, 1,.12], col:'o', a:.028, lw:.5,   ph:4.2, f:[.09,.11,.13,.08], am:[.060,.050,.070,.040] },
    ];

    // ── Drifting micro-particles ──────────────────────────────────────────────
    const PARTS = Array.from({ length: 80 }, (_, i) => ({
      xp: sr(i+200, 0),
      yp: sr(i+200, 1),
      r:  0.5 + sr(i+200, 2) * 1.2,
      vy: 0.005 + sr(i+200, 3) * 0.014,         // upward drift (fraction/s)
      vx: (sr(i+200, 4) - 0.5) * 0.004,
      a:  0.05 + sr(i+200, 5) * 0.17,
      pp: sr(i+200, 6) * Math.PI * 2,            // pulse phase
      pf: 0.35 + sr(i+200, 7) * 1.4,            // pulse Hz
    }));

    // ── Color builder ─────────────────────────────────────────────────────────
    const rgb = (c: string, a: number): string =>
      c === 'o' ? `rgba(255,107,53,${a.toFixed(3)})` :
      c === 'g' ? `rgba(6,214,160,${a.toFixed(3)})` :
                  `rgba(220,228,255,${a.toFixed(3)})`;

    // ── Render loop ───────────────────────────────────────────────────────────
    let last = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      t += dt;

      const w = canvas.width  / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      // 1 · Fine grid ──────────────────────────────────────────────────────────
      ctx.strokeStyle = 'rgba(255,255,255,0.013)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < w + 60; x += 60) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h + 60; y += 60) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // 2 · Animated bezier curves ─────────────────────────────────────────────
      for (const c of CURVES) {
        ctx.strokeStyle = rgb(c.col, c.a);
        ctx.lineWidth   = c.lw;
        ctx.beginPath();
        if (c.quad) {
          ctx.moveTo(c.p[0]*w, c.p[1]*h);
          ctx.quadraticCurveTo(
            c.p[2]*w + Math.sin(t*c.f[0]+c.ph) * c.am[0]*w,
            c.p[3]*h + Math.cos(t*c.f[1]+c.ph) * c.am[1]*h,
            c.p[4]*w, c.p[5]*h,
          );
        } else {
          ctx.moveTo(c.p[0]*w, c.p[1]*h);
          ctx.bezierCurveTo(
            c.p[2]*w + Math.sin(t*c.f[0]+c.ph      )*c.am[0]*w,
            c.p[3]*h + Math.cos(t*c.f[1]+c.ph      )*c.am[1]*h,
            c.p[4]*w + Math.sin(t*c.f[2]+c.ph+0.45 )*c.am[2]*w,
            c.p[5]*h + Math.cos(t*c.f[3]+c.ph+0.45 )*c.am[3]*h,
            c.p[6]*w, c.p[7]*h,
          );
        }
        ctx.stroke();
      }

      // 3 · Floating blocks ────────────────────────────────────────────────────
      for (const b of BLOCKS) {
        const bx  = b.xp * w;
        const by  = b.yp * h + Math.sin(t * b.freq * Math.PI * 2 + b.ph) * b.amp;
        const rot = (b.rot + b.rotSpd * t) * (Math.PI / 180);
        const a   = b.base * (0.5 + 0.5 * Math.sin(t * 0.20 + b.ph));

        ctx.save();
        ctx.translate(bx, by);
        ctx.rotate(rot);
        ctx.strokeStyle = rgb(b.col, a);
        ctx.fillStyle   = rgb(b.col, a * 0.10);
        ctx.lineWidth   = 0.5;
        ctx.beginPath();
        ctx.rect(-b.w / 2, -b.h / 2, b.w, b.h);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      // 4 · Drifting particles ─────────────────────────────────────────────────
      for (const p of PARTS) {
        p.yp -= p.vy * dt;
        p.xp += p.vx * dt;
        if (p.yp < -0.02) { p.yp = 1.02; p.xp = Math.random(); }
        if (p.xp < 0)  p.xp = 1;
        if (p.xp > 1)  p.xp = 0;

        const pulse = 0.4 + 0.6 * Math.sin(t * p.pf * Math.PI * 2 + p.pp);
        ctx.beginPath();
        ctx.arc(p.xp * w, p.yp * h, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${(p.a * pulse).toFixed(3)})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
      {children}
    </span>
    <span className="block w-10 h-px bg-cs-orange opacity-50" />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
const Introduction: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useMesmerizingBg(canvasRef);

  return (
    <section
      id="introduction"
      className="relative pt-48 pb-32 px-6 border-b border-cs-gray-800 overflow-hidden"
    >
      {/* ── Layer 0: Canvas (grid + curves + blocks + particles) ──────────────── */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -2 }}
      />

      {/* ── Layer 1: Soft ambient glows behind the headline ───────────────────── */}

      {/* Primary orange — centred on the headline */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          zIndex: -1,
          top: '4%', left: '-10%',
          width: '68%', height: '62%',
          background:
            'radial-gradient(ellipse at 38% 36%, rgba(255,107,53,0.11) 0%, rgba(255,107,53,0.04) 38%, transparent 70%)',
          filter: 'blur(52px)',
          animation: 'cs-hero-glow 9s ease-in-out infinite',
        }}
      />

      {/* Secondary green — lower-right */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          zIndex: -1,
          bottom: '-4%', right: '-6%',
          width: '56%', height: '72%',
          background:
            'radial-gradient(ellipse at 64% 62%, rgba(6,214,160,0.07) 0%, rgba(6,214,160,0.02) 40%, transparent 72%)',
          filter: 'blur(64px)',
          animation: 'cs-green-glow 13s ease-in-out infinite 3s',
        }}
      />

      {/* Tertiary violet — right-centre */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          zIndex: -1,
          top: '38%', right: '8%',
          width: '36%', height: '44%',
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.05) 0%, transparent 68%)',
          filter: 'blur(44px)',
          animation: 'cs-violet-glow 17s ease-in-out infinite 6s',
        }}
      />

      {/* Keyframes — injected once per mount */}
      <style>{`
        @keyframes cs-hero-glow {
          0%,100% { opacity:1;    transform:scale(1)    translate(0%,   0%);  }
          33%      { opacity:0.72; transform:scale(1.07) translate( 2%,  -3%); }
          66%      { opacity:0.88; transform:scale(0.95) translate(-1%,   2%); }
        }
        @keyframes cs-green-glow {
          0%,100% { opacity:0.75; transform:scale(1)    translate(0%, 0%); }
          50%      { opacity:1;    transform:scale(1.09) translate(-2%,-4%); }
        }
        @keyframes cs-violet-glow {
          0%,100% { opacity:0.5;  transform:scale(1)    translate(0%, 0%); }
          40%      { opacity:1;    transform:scale(1.14) translate( 3%, 5%); }
          80%      { opacity:0.65; transform:scale(0.90) translate(-2%,-3%); }
        }
      `}</style>

      {/* ── Layer 2: Page content ─────────────────────────────────────────────── */}
      <div className="max-w-[1100px] mx-auto relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mb-32">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-[30px] h-px bg-cs-orange" />
            <span className="font-mono text-[0.875rem] tracking-[0.25em] uppercase text-cs-orange">
              Independent Research Lab
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-extrabold tracking-[-0.03em] leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            Make Coherence<br />Visible.
          </h1>

          {/* Subhead */}
          <p className="font-display font-normal text-cs-gray-300 tracking-[-0.01em] text-xl md:text-2xl max-w-3xl mb-12">
            Building infrastructure for coherence to examine itself.
            31+ research instruments across cognition, civic accountability, and cross-domain AI architecture.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#research"
              className="font-mono text-[0.875rem] font-medium tracking-[0.12em] uppercase px-6 py-3 rounded-sm bg-cs-orange text-cs-black hover:brightness-110 hover:-translate-y-px transition-all duration-200 inline-flex items-center gap-2 text-center justify-center"
            >
              Explore Research
            </a>
            <a
              href="#catalog"
              className="font-mono text-[0.875rem] font-medium tracking-[0.12em] uppercase px-6 py-3 rounded-sm bg-transparent text-white border border-cs-gray-600 hover:border-cs-orange hover:text-cs-orange transition-all duration-200 inline-flex items-center gap-2 text-center justify-center"
            >
              View Instruments
            </a>
          </div>

          {/* Meta bar */}
          <div className="flex flex-wrap gap-8 pt-6 border-t border-cs-gray-700">
            <div>
              <span className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] block mb-1">
                Founded
              </span>
              <span className="font-mono text-[0.875rem] text-cs-gray-300">El Paso, TX</span>
            </div>
            <div>
              <span className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] block mb-1">
                Primary Color
              </span>
              <span className="font-mono text-[0.875rem] text-cs-orange">#FF6B35</span>
            </div>
            <div>
              <span className="font-mono text-[0.875rem] text-cs-gray-500 uppercase tracking-[0.15em] block mb-1">
                Mission
              </span>
              <span className="font-mono text-[0.875rem] text-cs-gray-300">Research Lab</span>
            </div>
          </div>
        </div>

        {/* Research Principles */}
        <div>
          <SectionLabel>What We Build</SectionLabel>
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-12">
            Research Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: 'Coherence as Prime Function',
                desc: 'Every system we build must make its own logic inspectable. If coherence cannot examine itself, the architecture fails.',
                accent: 'border-t-cs-orange',
                numColor: 'text-cs-orange/10',
              },
              {
                num: '02',
                title: 'Precision Without Ceremony',
                desc: 'Strip away abstraction layers that exist only for convention. Keep what survives contact with real data.',
                accent: 'border-t-cs-green',
                numColor: 'text-cs-green/10',
              },
              {
                num: '03',
                title: 'Border Intelligence',
                desc: 'El Paso is the operating context. Systems built here must account for jurisdictional, cultural, and infrastructural boundaries.',
                accent: 'border-t-cs-yellow',
                numColor: 'text-cs-yellow/10',
              },
              {
                num: '04',
                title: 'Edge-of-Chaos Operations',
                desc: 'The most valuable signal lives at the boundary between order and disorder. We build instruments to operate there.',
                accent: 'border-t-white',
                numColor: 'text-white/5',
              },
            ].map((card) => (
              <div
                key={card.num}
                className={`relative border border-cs-gray-700 rounded bg-cs-gray-900 p-8 transition-colors duration-300 hover:bg-cs-gray-800 border-t-2 ${card.accent} overflow-hidden`}
              >
                <span
                  className={`absolute top-4 right-4 font-display font-extrabold text-[5rem] leading-none ${card.numColor} select-none pointer-events-none`}
                >
                  {card.num}
                </span>
                <h3 className="font-display text-[1.25rem] font-bold leading-[1.1] mb-3 relative z-10">
                  {card.title}
                </h3>
                <p className="font-body text-cs-gray-400 text-base leading-relaxed relative z-10">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
