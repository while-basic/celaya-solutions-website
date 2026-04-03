import { useEffect } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Deterministic pseudo-random — stable seeded values, no re-seeding on re-render
// ─────────────────────────────────────────────────────────────────────────────
const sr = (i: number, s: number): number =>
  ((i * 9_301 + s * 49_297 + 233_280) * (i + 1)) % 233_280 / 233_280;

// ─────────────────────────────────────────────────────────────────────────────
// Canvas animation hook — grid + curves + floating blocks + particles
// ─────────────────────────────────────────────────────────────────────────────
export function useMesmerizingBg(ref: React.RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Cap at 2× — crisp on all retina screens, avoids excess memory on 3×
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
    const BLOCKS = Array.from({ length: 16 }, (_, i) => ({
      xp:     sr(i, 0),
      yp:     sr(i, 1),
      w:   i < 5  ? 14 + sr(i, 2) * 24
         : i < 11 ? 52 + sr(i, 2) * 88
         :         108 + sr(i, 2) * 128,
      h:   i < 5  ? 14 + sr(i, 3) * 24
         : i < 11 ? 16 + sr(i, 3) * 48
         :           8 + sr(i, 3) * 26,
      rot:    (sr(i, 4) - 0.5) * 38,
      rotSpd: (sr(i, 5) - 0.5) * 0.11,
      amp:     8  + sr(i, 6) * 20,
      freq:   0.14 + sr(i, 7) * 0.30,
      ph:     sr(i, 8) * Math.PI * 2,
      col:    ['o','o','o','g','g','g','w','o','g','o','g','w','o','g','w','o'][i],
      base:   0.048 + sr(i, 9) * 0.062,
    }));

    // ── Animated bezier / quadratic curves ────────────────────────────────────
    type Curve = {
      p: number[]; col: string; a: number; lw: number;
      ph: number; f: number[]; am: number[]; quad?: boolean;
    };
    const CURVES: Curve[] = [
      { p:[0,.68, .22,.08, .70,.92, 1,.18],  col:'o', a:.07,  lw:1.0,  ph:0.0, f:[.18,.14,.20,.16], am:[.050,.070,.040,.060] },
      { p:[.76,0, .94,.44, .06,.56, .16,1],  col:'g', a:.05,  lw:.75,  ph:1.2, f:[.12,.20,.15,.10], am:[.050,.040,.060,.050] },
      { p:[0,.50, .50,.03, 1,.50, 0,0],       col:'o', a:.04,  lw:1.5,  ph:2.1, f:[.10,.15,0,0],     am:[.070,.090,0,0],       quad:true },
      { p:[0,.32, .28,.65, .72,.18, 1,.44],  col:'w', a:.020, lw:.5,   ph:3.5, f:[.08,.13,.10,.09], am:[.040,.050,.040,.060] },
      { p:[.58,1, 1.06,.72, .88,.28, .48,0], col:'g', a:.038, lw:.75,  ph:0.7, f:[.15,.20,.18,.12], am:[.040,.050,.030,.060] },
      { p:[0,.88, .58,.95, .42,.05, 1,.12],  col:'o', a:.028, lw:.5,   ph:4.2, f:[.09,.11,.13,.08], am:[.060,.050,.070,.040] },
    ];

    // ── Drifting micro-particles ──────────────────────────────────────────────
    const PARTS = Array.from({ length: 80 }, (_, i) => ({
      xp: sr(i+200, 0),
      yp: sr(i+200, 1),
      r:  0.5 + sr(i+200, 2) * 1.2,
      vy: 0.005 + sr(i+200, 3) * 0.014,
      vx: (sr(i+200, 4) - 0.5) * 0.004,
      a:  0.05 + sr(i+200, 5) * 0.17,
      pp: sr(i+200, 6) * Math.PI * 2,
      pf: 0.35 + sr(i+200, 7) * 1.4,
    }));

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

      // 1 · Fine grid
      ctx.strokeStyle = 'rgba(255,255,255,0.013)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < w + 60; x += 60) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h + 60; y += 60) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // 2 · Animated bezier curves
      for (const c of CURVES) {
        ctx.strokeStyle = rgb(c.col, c.a);
        ctx.lineWidth   = c.lw;
        ctx.beginPath();
        if (c.quad) {
          ctx.moveTo(c.p[0]*w, c.p[1]*h);
          ctx.quadraticCurveTo(
            c.p[2]*w + Math.sin(t*c.f[0]+c.ph)*c.am[0]*w,
            c.p[3]*h + Math.cos(t*c.f[1]+c.ph)*c.am[1]*h,
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

      // 3 · Floating blocks
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

      // 4 · Drifting particles
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
