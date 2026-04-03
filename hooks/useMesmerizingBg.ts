import { useEffect } from 'react';

// Deterministic pseudo-random — stable seeded values, no re-seeding on re-render
const sr = (i: number, s: number): number =>
  ((i * 9_301 + s * 49_297 + 233_280) * (i + 1)) % 233_280 / 233_280;

// Canvas animation hook — grid + curves + floating blocks + particles
export function useMesmerizingBg(ref: React.RefObject<HTMLCanvasElement>) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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

    // ── Floating geometric blocks — three families ────────────────────────────
    const BLOCKS = Array.from({ length: 18 }, (_, i) => ({
      xp:     sr(i, 0),
      yp:     sr(i, 1),
      w:   i < 6  ? 18  + sr(i, 2) * 32    // tiny squares
         : i < 13 ? 64  + sr(i, 2) * 100   // medium rects
         :          130 + sr(i, 2) * 150,   // large slivers
      h:   i < 6  ? 18  + sr(i, 3) * 32
         : i < 13 ? 20  + sr(i, 3) * 60
         :          10  + sr(i, 3) * 32,
      rot:    (sr(i, 4) - 0.5) * 40,
      rotSpd: (sr(i, 5) - 0.5) * 0.14,
      amp:     12 + sr(i, 6) * 26,
      freq:   0.12 + sr(i, 7) * 0.28,
      ph:     sr(i, 8) * Math.PI * 2,
      col:    ['o','o','o','o','g','g','g','w','o','g','o','g','w','o','g','w','o','g'][i],
      base:   0.12 + sr(i, 9) * 0.14,   // ← significantly increased
    }));

    // ── Curves — 7 animated bezier / quadratic traces ─────────────────────────
    type Curve = {
      p: number[]; col: string; a: number; lw: number;
      ph: number; f: number[]; am: number[]; quad?: boolean;
    };
    const CURVES: Curve[] = [
      // 1  long orange sweep: bottom-left → top-right
      { p:[0,.68, .22,.08, .70,.92, 1,.18],  col:'o', a:.18, lw:1.2, ph:0.0, f:[.18,.14,.20,.16], am:[.050,.070,.040,.060] },
      // 2  green diagonal: top-right → bottom-left
      { p:[.76,0, .94,.44, .06,.56, .16,1],  col:'g', a:.13, lw:1.0, ph:1.2, f:[.12,.20,.15,.10], am:[.050,.040,.060,.050] },
      // 3  wide orange arc: quadratic sweep
      { p:[0,.50, .50,.03, 1,.50, 0,0],       col:'o', a:.11, lw:1.8, ph:2.1, f:[.10,.15,0,0],     am:[.070,.090,0,0],      quad:true },
      // 4  white whisper: left → right mid
      { p:[0,.32, .28,.65, .72,.18, 1,.44],  col:'w', a:.060,lw:.8,  ph:3.5, f:[.08,.13,.10,.09], am:[.040,.050,.040,.060] },
      // 5  green right-side rise
      { p:[.58,1, 1.06,.72, .88,.28, .48,0], col:'g', a:.10, lw:1.0, ph:0.7, f:[.15,.20,.18,.12], am:[.040,.050,.030,.060] },
      // 6  orange lower stray
      { p:[0,.88, .58,.95, .42,.05, 1,.12],  col:'o', a:.08, lw:.8,  ph:4.2, f:[.09,.11,.13,.08], am:[.060,.050,.070,.040] },
      // 7  extra green arc — upper right
      { p:[.5,0, .85,.3, .6,.7, 1,.55],      col:'g', a:.07, lw:0.6, ph:5.1, f:[.11,.09,.14,.12], am:[.045,.060,.035,.050] },
    ];

    // ── Drifting particles ────────────────────────────────────────────────────
    const PARTS = Array.from({ length: 100 }, (_, i) => ({
      xp: sr(i+200, 0),
      yp: sr(i+200, 1),
      r:  1.0 + sr(i+200, 2) * 1.8,          // larger dots
      vy: 0.006 + sr(i+200, 3) * 0.016,
      vx: (sr(i+200, 4) - 0.5) * 0.005,
      a:  0.14 + sr(i+200, 5) * 0.28,        // much more visible
      pp: sr(i+200, 6) * Math.PI * 2,
      pf: 0.35 + sr(i+200, 7) * 1.4,
    }));

    const rgb = (c: string, a: number): string =>
      c === 'o' ? `rgba(255,107,53,${a.toFixed(3)})` :
      c === 'g' ? `rgba(6,214,160,${a.toFixed(3)})` :
                  `rgba(210,220,255,${a.toFixed(3)})`;

    let last = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      t += dt;

      const w = canvas.width  / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      // 1 · Grid — more visible than before
      ctx.strokeStyle = 'rgba(255,255,255,0.030)';
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
        const a   = b.base * (0.55 + 0.45 * Math.sin(t * 0.20 + b.ph));

        ctx.save();
        ctx.translate(bx, by);
        ctx.rotate(rot);
        ctx.strokeStyle = rgb(b.col, a);
        ctx.fillStyle   = rgb(b.col, a * 0.12);
        ctx.lineWidth   = 0.75;
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

        const pulse = 0.45 + 0.55 * Math.sin(t * p.pf * Math.PI * 2 + p.pp);
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
