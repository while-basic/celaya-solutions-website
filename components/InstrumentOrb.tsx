/**
 * InstrumentOrb — animated visual identity for each research instrument.
 * 14 visual types, driven by a per-slug config table.
 * CSS animations are injected once into document.head.
 */
import React, { useEffect } from 'react';

// ── CSS keyframes (injected once) ─────────────────────────────────────────────
const KEYFRAMES = `
  @keyframes iorb-spin    { to   { transform: rotate(360deg); } }
  @keyframes iorb-rpin    { to   { transform: rotate(-360deg); } }
  @keyframes iorb-pulse   { 0%,100%{ opacity:.45;transform:scale(.92); } 50%{ opacity:1;transform:scale(1.08); } }
  @keyframes iorb-blink   { 0%,100%{ opacity:.12; } 50%{ opacity:.95; } }
  @keyframes iorb-wave    { 0%{ transform:translateX(0); } 100%{ transform:translateX(-56px); } }
  @keyframes iorb-lift    { 0%,100%{ transform:translateY(0); } 50%{ transform:translateY(-4px); } }
  @keyframes iorb-dash    { to  { stroke-dashoffset: -24; } }
  @keyframes iorb-scan    { 0%  { transform: rotate(0deg); }  100%{ transform: rotate(360deg); } }
  @keyframes iorb-bar1    { 0%,100%{ transform:scaleY(.25); } 50%{ transform:scaleY(1); } }
  @keyframes iorb-bar2    { 0%,100%{ transform:scaleY(.55); } 50%{ transform:scaleY(.2); } }
  @keyframes iorb-bar3    { 0%,100%{ transform:scaleY(.8);  } 50%{ transform:scaleY(.35); } }
  @keyframes iorb-sway    { 0%,100%{ transform:rotate(-12deg); } 50%{ transform:rotate(12deg); } }
  @keyframes iorb-march   { to  { stroke-dashoffset: -16; } }
`;

let _kfInjected = false;
function ensureStyles() {
  if (_kfInjected || typeof document === 'undefined') return;
  if (document.getElementById('iorb-kf')) { _kfInjected = true; return; }
  _kfInjected = true;
  const s = document.createElement('style');
  s.id = 'iorb-kf';
  s.textContent = KEYFRAMES;
  document.head.appendChild(s);
}

// ── Style helpers ─────────────────────────────────────────────────────────────
const sp = (d: number, rev = false, delay = 0): React.CSSProperties => ({
  animation: `${rev ? 'iorb-rpin' : 'iorb-spin'} ${d}s linear ${delay}s infinite`,
  transformOrigin: '28px 28px',
});
const pu  = (d = 2.5, delay = 0): React.CSSProperties => ({
  animation: `iorb-pulse ${d}s ease-in-out ${delay}s infinite`,
});
const bl  = (d = 1.8, delay = 0): React.CSSProperties => ({
  animation: `iorb-blink ${d}s ease-in-out ${delay}s infinite`,
});
const wv  = (d = 2, delay = 0): React.CSSProperties => ({
  animation: `iorb-wave ${d}s linear ${delay}s infinite`,
});
const da  = (d = 3, delay = 0): React.CSSProperties => ({
  animation: `iorb-dash ${d}s linear ${delay}s infinite`,
  strokeDasharray: '6 4',
  strokeDashoffset: 0,
});

// ── Orb type map ──────────────────────────────────────────────────────────────
type OT = 'orbital'|'neural'|'pulse'|'wave'|'lattice'|'shield'|'chain'|
          'strata'|'prism'|'rotor'|'spectrum'|'saber'|'core'|'civic';

interface OC { type: OT; p: string; s: string; n?: number; spd?: number; }

const ORBS: Record<string, OC> = {
  // ── Cognition ──
  'clos':                  { type:'orbital',   p:'#FF6B35', s:'#FFBE0B', n:7,  spd:5  },
  'cortex':                { type:'orbital',   p:'#FF6B35', s:'#06D6A0', n:5,  spd:7  },
  'neural-child':          { type:'neural',    p:'#FFBE0B', s:'#FF6B35', n:8              },
  'quick-neural-child':    { type:'neural',    p:'#FFBE0B', s:'#a855f7', n:5              },
  'echo':                  { type:'strata',    p:'#a855f7', s:'#FF6B35', n:5              },
  'volt':                  { type:'pulse',     p:'#FF6B35', s:'#FFBE0B'                   },
  'pulse':                 { type:'pulse',     p:'#06D6A0', s:'#FF6B35'                   },
  'research-on-myself':    { type:'strata',    p:'#94a3b8', s:'#e2e8f0', n:4              },
  // ── Infrastructure ──
  'lmu':                   { type:'core',      p:'#06D6A0', s:'#22d3ee', n:4              },
  'synapse':               { type:'rotor',     p:'#06D6A0', s:'#22d3ee', n:2              },
  'silt':                  { type:'strata',    p:'#06D6A0', s:'#14b8a6', n:6              },
  'meridian':              { type:'civic',     p:'#06D6A0', s:'#22d3ee'                   },
  'sentinel':              { type:'shield',    p:'#FFBE0B', s:'#ef4444'                   },
  'agent-habitat':         { type:'neural',    p:'#06D6A0', s:'#FFBE0B', n:10             },
  'deep-blue':             { type:'wave',      p:'#22d3ee', s:'#06D6A0'                   },
  'c3':                    { type:'rotor',     p:'#06D6A0', s:'#22d3ee', n:3              },
  'grid':                  { type:'lattice',   p:'#06D6A0', s:'#14b8a6'                   },
  'frame':                 { type:'lattice',   p:'#71717a', s:'#a1a1aa'                   },
  // ── Oversight ──
  'verdict':               { type:'shield',    p:'#FFBE0B', s:'#FF6B35'                   },
  'artifacts':             { type:'strata',    p:'#FFBE0B', s:'#FF6B35', n:5              },
  'signal':                { type:'wave',      p:'#FFBE0B', s:'#FF6B35'                   },
  'staple':                { type:'spectrum',  p:'#FFBE0B', s:'#FF6B35', n:7              },
  'trace':                 { type:'chain',     p:'#FFBE0B', s:'#06D6A0', n:4              },
  'delta':                 { type:'prism',     p:'#FFBE0B', s:'#FF6B35'                   },
  'warden':                { type:'shield',    p:'#FF6B35', s:'#FFBE0B'                   },
  // ── Civic ──
  'eppe':                  { type:'civic',     p:'#06D6A0', s:'#22d3ee'                   },
  'project-jupiter':       { type:'orbital',   p:'#06D6A0', s:'#FFBE0B', n:3,  spd:14 },
  'bess':                  { type:'core',      p:'#06D6A0', s:'#FFBE0B', n:3              },
  'atlas':                 { type:'civic',     p:'#22d3ee', s:'#06D6A0'                   },
  'ledger':                { type:'strata',    p:'#06D6A0', s:'#22d3ee', n:4              },
  'texas-archive-rag':     { type:'strata',    p:'#FF6B35', s:'#FFBE0B', n:6              },
  // ── Blockchain ──
  'celaya-chain-protocol': { type:'chain',     p:'#FF6B35', s:'#a855f7', n:4              },
  'mortem':                { type:'pulse',     p:'#ef4444', s:'#FF6B35'                   },
  'cipher':                { type:'prism',     p:'#a855f7', s:'#22d3ee'                   },
  // ── Robotics ──
  'juniper':               { type:'rotor',     p:'#FFBE0B', s:'#06D6A0', n:4              },
  'beat-saber-pipeline':   { type:'saber',     p:'#FFBE0B', s:'#ef4444'                   },
  'nexus':                 { type:'rotor',     p:'#FFBE0B', s:'#FF6B35', n:6              },
  // ── Audio ──
  'myelin':                { type:'wave',      p:'#a855f7', s:'#ec4899'                   },
  'frisson-analyzer':      { type:'spectrum',  p:'#a855f7', s:'#ec4899', n:9              },
  'tribe':                 { type:'neural',    p:'#a855f7', s:'#ec4899', n:7              },
  'soft-girl-era':         { type:'spectrum',  p:'#ec4899', s:'#a855f7', n:6              },
  // ── Protocol ──
  'flux':                  { type:'wave',      p:'#71717a', s:'#a1a1aa'                   },
  'lattice':               { type:'lattice',   p:'#71717a', s:'#06D6A0'                   },
  'kernel':                { type:'core',      p:'#71717a', s:'#a1a1aa', n:3              },
  'prism':                 { type:'prism',     p:'#a1a1aa', s:'#a855f7'                   },
};
const DEFAULT_ORB: OC = { type: 'core', p: '#FF6B35', s: '#FFBE0B' };

// ── Render functions ──────────────────────────────────────────────────────────

function Orbital({ p, s, n = 4, spd = 6 }: OC) {
  const dots = Array.from({ length: n }, (_, i) => i);
  return (
    <g>
      {/* Rings */}
      <circle cx="28" cy="28" r="23" fill="none" stroke={p} strokeWidth="0.5"
        strokeDasharray="4 3" opacity="0.35" style={sp(spd)} />
      <circle cx="28" cy="28" r="17" fill="none" stroke={p} strokeWidth="0.5"
        strokeDasharray="3 4" opacity="0.45" style={sp(spd * 1.5, true)} />
      <circle cx="28" cy="28" r="11" fill="none" stroke={s} strokeWidth="0.5"
        opacity="0.4" style={sp(spd * 0.8)} />
      {/* Orbiting particles */}
      {dots.map(i => {
        const r2 = i % 2 === 0 ? 23 : 17;
        const spd2 = spd * (0.9 + i * 0.07);
        return (
          <g key={i} style={sp(spd2, i % 2 !== 0)}>
            <circle cx="28" cy={28 - r2} r={i % 3 === 0 ? 2.2 : 1.4}
              fill={i % 2 === 0 ? p : s} opacity="0.9" />
          </g>
        );
      })}
      {/* Core */}
      <circle cx="28" cy="28" r="5.5" fill={p} opacity="0.85" style={pu(2.2)} />
      <circle cx="28" cy="28" r="2.5" fill="#fff" opacity="0.7" />
    </g>
  );
}

function Neural({ p, s, n = 7 }: OC) {
  const spokes = Array.from({ length: n }, (_, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    const r = 19 + (i % 3) * 3;
    const mx = 28 + Math.cos(angle) * r;
    const my = 28 + Math.sin(angle) * r;
    const midR = r * 0.55;
    const mx2 = 28 + Math.cos(angle) * midR;
    const my2 = 28 + Math.sin(angle) * midR;
    return { angle, mx, my, mx2, my2, i };
  });
  return (
    <g>
      {/* Spokes */}
      {spokes.map(({ mx, my, i }) => (
        <line key={i} x1="28" y1="28" x2={mx} y2={my}
          stroke={i % 2 === 0 ? p : s} strokeWidth="0.6" opacity="0.4" />
      ))}
      {/* Cross connections */}
      {spokes.map(({ mx, my, i }) => {
        const next = spokes[(i + 2) % n];
        return <line key={`c${i}`} x1={mx} y1={my} x2={next.mx} y2={next.my}
          stroke={s} strokeWidth="0.4" opacity="0.2" />;
      })}
      {/* Mid nodes */}
      {spokes.map(({ mx2, my2, i }) => (
        <circle key={`m${i}`} cx={mx2} cy={my2} r="1.5" fill={s} opacity="0.6"
          style={bl(1.6 + i * 0.1, i * 0.15)} />
      ))}
      {/* Tip nodes */}
      {spokes.map(({ mx, my, i }) => (
        <circle key={`t${i}`} cx={mx} cy={my} r="2" fill={i % 2 === 0 ? p : s} opacity="0.8"
          style={bl(2 + i * 0.1, i * 0.2)} />
      ))}
      {/* Center */}
      <circle cx="28" cy="28" r="5" fill={p} opacity="0.9" style={pu(2.5)} />
      <circle cx="28" cy="28" r="2.5" fill="#fff" opacity="0.7" />
    </g>
  );
}

function Pulse({ p, s }: OC) {
  // ECG waveform path
  const ecg = 'M2 28 L10 28 L13 20 L16 36 L19 22 L22 34 L25 28 L36 28 L39 18 L42 38 L45 24 L48 32 L51 28 L54 28';
  return (
    <g>
      {/* Background ring */}
      <circle cx="28" cy="28" r="24" fill="none" stroke={p} strokeWidth="0.5" opacity="0.15" />
      <circle cx="28" cy="28" r="18" fill="none" stroke={p} strokeWidth="0.5" opacity="0.2" style={pu(3)} />
      {/* ECG — animated dash march */}
      <path d={ecg} fill="none" stroke={p} strokeWidth="1.8" opacity="0.9"
        strokeDasharray="120" strokeDashoffset="120"
        style={{ animation: 'iorb-dash 2.4s linear infinite', strokeDashoffset: 0 }} />
      {/* Shadow line */}
      <path d={ecg} fill="none" stroke={s} strokeWidth="0.7" opacity="0.35"
        style={{ animation: 'iorb-dash 2.4s linear 0.3s infinite' }} />
      {/* Spike glow */}
      <circle cx="39" cy="18" r="2.5" fill={p} opacity="0.8" style={bl(1.2)} />
      {/* Center dot */}
      <circle cx="28" cy="28" r="2" fill={s} opacity="0.7" style={pu(2)} />
    </g>
  );
}

function Wave({ p, s }: OC) {
  // Two layered sine waves that scroll
  const w1 = 'M0 30 C7 20 14 20 21 30 S35 40 42 30 S56 20 63 30';
  const w2 = 'M0 26 C7 16 14 16 21 26 S35 36 42 26 S56 16 63 26';
  const w3 = 'M0 34 C7 24 14 24 21 34 S35 44 42 34 S56 24 63 34';
  return (
    <g>
      <defs>
        <clipPath id="iorb-wave-clip">
          <circle cx="28" cy="28" r="25" />
        </clipPath>
      </defs>
      <circle cx="28" cy="28" r="24" fill="none" stroke={p} strokeWidth="0.5" opacity="0.2" />
      {/* Wave set 1 */}
      <g clipPath="url(#iorb-wave-clip)">
        <g style={wv(2.2)}>
          <path d={w1} fill="none" stroke={p} strokeWidth="1.8" opacity="0.85" />
          <path d={w1.replace(/M0/,'M56').replace(/C7/,'C63').replace(/14/g,'70').replace(/21/g,'77').replace(/35/g,'91').replace(/42/g,'98').replace(/56/g,'112').replace(/63/g,'119')} fill="none" stroke={p} strokeWidth="1.8" opacity="0.85" />
        </g>
        <g style={wv(3, -0.8)}>
          <path d={w2} fill="none" stroke={s} strokeWidth="1" opacity="0.5" />
          <path d={w2.replace(/M0/,'M56')} fill="none" stroke={s} strokeWidth="1" opacity="0.5" />
        </g>
        <g style={wv(1.7, -0.4)}>
          <path d={w3} fill="none" stroke={p} strokeWidth="0.5" opacity="0.25" />
          <path d={w3.replace(/M0/,'M56')} fill="none" stroke={p} strokeWidth="0.5" opacity="0.25" />
        </g>
        {/* Center node */}
        <circle cx="28" cy="28" r="2.5" fill={p} opacity="0.9" style={pu(2)} />
      </g>
    </g>
  );
}

function Lattice({ p, s }: OC) {
  const pts: [number, number][] = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
    pts.push([10 + c * 12, 10 + r * 12]);
  }
  const lines: React.ReactNode[] = [];
  pts.forEach(([x, y], i) => {
    if (i % 4 < 3) lines.push(<line key={`h${i}`} x1={x} y1={y} x2={x + 12} y2={y} stroke={p} strokeWidth="0.5" opacity="0.3" />);
    if (i < 12)   lines.push(<line key={`v${i}`} x1={x} y1={y} x2={x} y2={y + 12} stroke={p} strokeWidth="0.5" opacity="0.3" />);
  });
  return (
    <g>
      <circle cx="28" cy="28" r="24" fill="none" stroke={p} strokeWidth="0.4" opacity="0.15" />
      {lines}
      {pts.map(([x, y], i) => {
        const highlight = [5, 6, 9, 10].includes(i);
        return (
          <circle key={i} cx={x} cy={y} r={highlight ? 2.5 : 1.4}
            fill={highlight ? p : s} opacity={highlight ? 0.9 : 0.5}
            style={highlight ? bl(1.8 + i * 0.15, i * 0.1) : undefined} />
        );
      })}
      {/* Central cross glow */}
      <circle cx="28" cy="28" r="4" fill={p} opacity="0.25" style={pu(2.5)} />
    </g>
  );
}

function Shield({ p, s }: OC) {
  return (
    <g>
      {/* Concentric rings */}
      <circle cx="28" cy="28" r="23" fill="none" stroke={p} strokeWidth="0.8" opacity="0.3"
        style={da(4)} />
      <circle cx="28" cy="28" r="18" fill="none" stroke={p} strokeWidth="0.6" opacity="0.4" />
      <circle cx="28" cy="28" r="13" fill="none" stroke={s} strokeWidth="0.8" opacity="0.35"
        style={sp(14)} />
      <circle cx="28" cy="28" r="8"  fill="none" stroke={p} strokeWidth="0.5" opacity="0.5" />
      {/* Scan arm */}
      <g style={sp(3)}>
        <line x1="28" y1="28" x2="28" y2="6" stroke={p} strokeWidth="0.7" opacity="0.7" />
        <circle cx="28" cy="7" r="1.5" fill={p} opacity="0.9" />
      </g>
      {/* Cross-hairs */}
      <line x1="28" y1="15" x2="28" y2="41" stroke={p} strokeWidth="0.3" opacity="0.2" />
      <line x1="15" y1="28" x2="41" y2="28" stroke={p} strokeWidth="0.3" opacity="0.2" />
      {/* Eye center */}
      <circle cx="28" cy="28" r="5" fill={p} opacity="0.2" style={pu(2)} />
      <circle cx="28" cy="28" r="2.8" fill={p} opacity="0.9" style={pu(2, 0.5)} />
      <circle cx="28" cy="28" r="1.2" fill="#fff" opacity="0.9" />
    </g>
  );
}

function Chain({ p, s, n = 4 }: OC) {
  const blocks = Array.from({ length: n }, (_, i) => i);
  const bw = 10, bh = 7, gap = 3;
  const total = n * bw + (n - 1) * gap;
  const startX = (56 - total) / 2;
  return (
    <g>
      <circle cx="28" cy="28" r="24" fill="none" stroke={p} strokeWidth="0.4" opacity="0.15" />
      {/* Horizontal chain */}
      {blocks.map(i => {
        const x = startX + i * (bw + gap);
        const highlight = i === Math.floor(n / 2);
        return (
          <g key={i}>
            <rect x={x} y={28 - bh / 2} width={bw} height={bh} rx="1.5"
              fill={highlight ? p : 'none'} stroke={highlight ? p : s}
              strokeWidth="0.8" opacity={highlight ? 0.9 : 0.5}
              style={highlight ? pu(2.2) : undefined} />
            {i < n - 1 && (
              <line x1={x + bw} y1="28" x2={x + bw + gap} y2="28"
                stroke={p} strokeWidth="0.6" opacity="0.4"
                style={da(2, i * 0.3)} />
            )}
          </g>
        );
      })}
      {/* Vertical links (second row) */}
      {blocks.map(i => {
        const x = startX + i * (bw + gap);
        return (
          <g key={`v${i}`}>
            <rect x={x} y={28 - bh / 2 - bh - 3} width={bw} height={bh} rx="1.5"
              fill="none" stroke={p} strokeWidth="0.5" opacity="0.25" />
            <line x1={x + bw / 2} y1={28 - bh / 2} x2={x + bw / 2} y2={28 - bh / 2 - 3}
              stroke={p} strokeWidth="0.5" opacity="0.3" />
          </g>
        );
      })}
      {/* Hash glow */}
      <circle cx="28" cy="28" r="3" fill={s} opacity="0.6" style={bl(1.4)} />
    </g>
  );
}

function Strata({ p, s, n = 5 }: OC) {
  const bands = Array.from({ length: n }, (_, i) => i);
  const bandH = 5, gap = 3;
  const total = n * bandH + (n - 1) * gap;
  const startY = (56 - total) / 2;
  return (
    <g>
      <circle cx="28" cy="28" r="24" fill="none" stroke={p} strokeWidth="0.4" opacity="0.18" />
      {bands.map(i => {
        const y = startY + i * (bandH + gap);
        const w = 36 - i * 4;
        const x = (56 - w) / 2;
        const opacity = 0.75 - i * 0.12;
        const isActive = i === 1;
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height={bandH} rx="2"
              fill={i % 2 === 0 ? p : s} opacity={opacity}
              style={isActive ? pu(2.8) : undefined} />
            {/* Scan dot on active band */}
            {isActive && (
              <circle cx={x + 4} cy={y + bandH / 2} r="1.8" fill="#fff" opacity="0.9"
                style={bl(1.6)} />
            )}
          </g>
        );
      })}
      {/* Version dots, right edge */}
      {bands.map(i => {
        const y = startY + i * (bandH + gap) + bandH / 2;
        return <circle key={`d${i}`} cx="48" cy={y} r="1" fill={p} opacity={0.5 - i * 0.08} />;
      })}
    </g>
  );
}

function Prism({ p, s }: OC) {
  // Triangle pointing up
  const tx = 28, ty = 10, bl_x = 10, bl_y = 44, br_x = 46, br_y = 44;
  // Ray angles from right edge of prism
  const rays = [
    { x1: br_x, y1: br_y, x2: 52, y2: 50, c: p },
    { x1: br_x, y1: br_y, x2: 53, y2: 44, c: s },
    { x1: br_x, y1: br_y, x2: 52, y2: 38, c: '#a855f7' },
    { x1: br_x, y1: br_y, x2: 51, y2: 32, c: '#22d3ee' },
    { x1: br_x, y1: br_y, x2: 50, y2: 26, c: '#06D6A0' },
  ];
  return (
    <g>
      {/* Prism */}
      <polygon points={`${tx},${ty} ${bl_x},${bl_y} ${br_x},${br_y}`}
        fill="none" stroke={p} strokeWidth="1" opacity="0.7" />
      {/* Inner glow fill */}
      <polygon points={`${tx},${ty} ${bl_x},${bl_y} ${br_x},${br_y}`}
        fill={p} opacity="0.07" />
      {/* Incident ray */}
      <line x1="5" y1="28" x2={tx + (br_x - tx) / 2} y2={ty + (br_y - ty) / 2}
        stroke="#fff" strokeWidth="1" opacity="0.5"
        style={da(3)} />
      {/* Dispersed rays */}
      {rays.map((r, i) => (
        <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
          stroke={r.c} strokeWidth="1.2" opacity={0.7 - i * 0.08}
          style={da(3, i * 0.15)} />
      ))}
      {/* Vertex glow */}
      <circle cx={tx} cy={ty} r="2" fill={p} opacity="0.8" style={bl(2)} />
      {/* Centroid */}
      <circle cx="28" cy="33" r="1.5" fill={s} opacity="0.7" style={pu(2.5)} />
    </g>
  );
}

function Rotor({ p, s, n = 4 }: OC) {
  const spokes = Array.from({ length: n }, (_, i) => {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    return {
      ex: 28 + Math.cos(angle) * 20,
      ey: 28 + Math.sin(angle) * 20,
      mx: 28 + Math.cos(angle) * 12,
      my: 28 + Math.sin(angle) * 12,
      i,
    };
  });
  return (
    <g>
      {/* Outer ring */}
      <circle cx="28" cy="28" r="22" fill="none" stroke={p} strokeWidth="0.5" opacity="0.25"
        style={sp(16)} />
      {/* Inner ring */}
      <circle cx="28" cy="28" r="7" fill="none" stroke={s} strokeWidth="0.8" opacity="0.5" />
      {/* Spinning spokes */}
      <g style={sp(5)}>
        {spokes.map(({ ex, ey, i }) => (
          <g key={i}>
            <line x1="28" y1="28" x2={ex} y2={ey} stroke={p} strokeWidth="0.8" opacity="0.5" />
            <circle cx={ex} cy={ey} r="2.5" fill={i === 0 ? p : s}
              opacity={i === 0 ? 0.95 : 0.65} />
          </g>
        ))}
      </g>
      {/* Mid-spoke nodes (counter-rotate for stability illusion) */}
      <g style={sp(5, true)}>
        {spokes.map(({ mx, my, i }) => (
          <circle key={i} cx={mx} cy={my} r="1.2" fill={s} opacity="0.5" />
        ))}
      </g>
      {/* Hub */}
      <circle cx="28" cy="28" r="5" fill={p} opacity="0.9" style={pu(2.2)} />
      <circle cx="28" cy="28" r="2.5" fill="#fff" opacity="0.7" />
    </g>
  );
}

function Spectrum({ p, s, n = 7 }: OC) {
  const barW = Math.floor(40 / n) - 1;
  const startX = (56 - n * (barW + 1) + 1) / 2;
  // Each bar gets a different animation
  const anims = ['iorb-bar1','iorb-bar2','iorb-bar3','iorb-bar1','iorb-bar2','iorb-bar3','iorb-bar1','iorb-bar2','iorb-bar3'];
  return (
    <g>
      <circle cx="28" cy="28" r="24" fill="none" stroke={p} strokeWidth="0.5" opacity="0.2" />
      {Array.from({ length: n }, (_, i) => {
        const x = startX + i * (barW + 1);
        const baseH = 8 + (i % 3) * 6;
        const anim = anims[i % anims.length];
        const delay = i * 0.12;
        const col = i % 2 === 0 ? p : s;
        return (
          <g key={i}>
            <rect
              x={x} y={28} width={barW} height={baseH}
              rx="1" fill={col} opacity="0.8"
              style={{
                animation: `${anim} ${1.2 + i * 0.1}s ease-in-out ${delay}s infinite`,
                transformOrigin: `${x + barW / 2}px 28px`,
              }}
            />
            <rect
              x={x} y={28 - baseH} width={barW} height={baseH}
              rx="1" fill={col} opacity="0.5"
              style={{
                animation: `${anim} ${1.2 + i * 0.1}s ease-in-out ${delay + 0.05}s infinite`,
                transformOrigin: `${x + barW / 2}px 28px`,
              }}
            />
          </g>
        );
      })}
      {/* Baseline */}
      <line x1="8" y1="28" x2="48" y2="28" stroke={p} strokeWidth="0.5" opacity="0.35" />
      {/* Peak indicator */}
      <circle cx="28" cy="28" r="2" fill={p} opacity="0.7" style={bl(1.2)} />
    </g>
  );
}

function Core({ p, s, n = 4 }: OC) {
  const rings = Array.from({ length: n }, (_, i) => ({
    r: 6 + i * 4.5,
    opacity: 0.6 - i * 0.1,
    dash: i % 2 === 0 ? '4 3' : '2 4',
    spd: 4 + i * 2,
    rev: i % 2 !== 0,
  }));
  return (
    <g>
      {rings.map((rng, i) => (
        <circle key={i} cx="28" cy="28" r={rng.r}
          fill="none" stroke={i % 2 === 0 ? p : s}
          strokeWidth={i === 0 ? 1.2 : 0.5}
          strokeDasharray={rng.dash} opacity={rng.opacity}
          style={sp(rng.spd, rng.rev)} />
      ))}
      {/* Tick marks on outermost ring */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const outerR = 6 + (n - 1) * 4.5;
        const x1 = 28 + Math.cos(angle) * (outerR - 2);
        const y1 = 28 + Math.sin(angle) * (outerR - 2);
        const x2 = 28 + Math.cos(angle) * (outerR + 2);
        const y2 = 28 + Math.sin(angle) * (outerR + 2);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={p} strokeWidth="0.6" opacity="0.4" />;
      })}
      {/* Core */}
      <circle cx="28" cy="28" r="5" fill={p} opacity="0.25" style={pu(3)} />
      <circle cx="28" cy="28" r="3" fill={p} opacity="0.9" style={pu(2)} />
      <circle cx="28" cy="28" r="1.4" fill="#fff" opacity="0.9" />
    </g>
  );
}

function Civic({ p, s }: OC) {
  // Globe lines (simplified lat/lon grid on sphere)
  return (
    <g>
      {/* Outer circle = equator */}
      <circle cx="28" cy="28" r="22" fill="none" stroke={p} strokeWidth="0.8" opacity="0.5"
        style={sp(18)} />
      {/* Horizontal lat lines */}
      {[-12, -4, 4, 12].map((dy, i) => (
        <ellipse key={i} cx="28" cy={28 + dy} rx={Math.sqrt(22 * 22 - dy * dy)} ry="4"
          fill="none" stroke={p} strokeWidth="0.4" opacity={0.3 + i * 0.05} />
      ))}
      {/* Vertical lon lines */}
      {[0, 60, 120].map((angle, i) => (
        <ellipse key={i} cx="28" cy="28" rx="5" ry="22"
          fill="none" stroke={s} strokeWidth="0.4" opacity="0.25"
          style={{ transform: `rotate(${angle}deg)`, transformOrigin: '28px 28px' }} />
      ))}
      {/* Pole dots */}
      <circle cx="28" cy="6" r="2.5" fill={p} opacity="0.8" style={bl(2)} />
      <circle cx="28" cy="50" r="2.5" fill={s} opacity="0.5" />
      {/* Center marker */}
      <circle cx="28" cy="28" r="3" fill={p} opacity="0.85" style={pu(2.5)} />
      <circle cx="28" cy="28" r="1.2" fill="#fff" opacity="0.9" />
    </g>
  );
}

function Saber({ p, s }: OC) {
  return (
    <g>
      {/* Motion trail arcs */}
      <path d="M10 46 Q28 8 46 46" fill="none" stroke={p} strokeWidth="0.4" opacity="0.15" />
      <path d="M13 46 Q28 12 43 46" fill="none" stroke={p} strokeWidth="0.4" opacity="0.2" />
      {/* Blade (animated sway) */}
      <g style={{ animation: 'iorb-sway 2.4s ease-in-out infinite', transformOrigin: '28px 42px' }}>
        {/* Handle */}
        <rect x="24" y="42" width="8" height="5" rx="1.5" fill={s} opacity="0.8" />
        <rect x="21" y="40" width="14" height="2.5" rx="1" fill={s} opacity="0.6" />
        {/* Guard */}
        <rect x="19" y="38" width="18" height="2" rx="1" fill="#fff" opacity="0.5" />
        {/* Blade */}
        <rect x="26.5" y="10" width="3" height="28" rx="1.5" fill={p} opacity="0.9" />
        {/* Blade glow edge */}
        <rect x="25.5" y="10" width="1" height="28" rx="0.5" fill="#fff" opacity="0.5"
          style={pu(1.5)} />
        {/* Tip */}
        <polygon points="28,8 26,12 30,12" fill={p} opacity="0.95" />
      </g>
      {/* Slash sparks */}
      {[[18, 22, p], [36, 18, s], [14, 34, s]].map(([x, y, c], i) => (
        <circle key={i} cx={x as number} cy={y as number} r="1.2" fill={c as string} opacity="0.7"
          style={bl(0.8 + i * 0.2, i * 0.3)} />
      ))}
    </g>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

function renderOrb(cfg: OC): React.ReactNode {
  switch (cfg.type) {
    case 'orbital':  return <Orbital  {...cfg} />;
    case 'neural':   return <Neural   {...cfg} />;
    case 'pulse':    return <Pulse    {...cfg} />;
    case 'wave':     return <Wave     {...cfg} />;
    case 'lattice':  return <Lattice  {...cfg} />;
    case 'shield':   return <Shield   {...cfg} />;
    case 'chain':    return <Chain    {...cfg} />;
    case 'strata':   return <Strata   {...cfg} />;
    case 'prism':    return <Prism    {...cfg} />;
    case 'rotor':    return <Rotor    {...cfg} />;
    case 'spectrum': return <Spectrum {...cfg} />;
    case 'saber':    return <Saber    {...cfg} />;
    case 'civic':    return <Civic    {...cfg} />;
    case 'core':     return <Core     {...cfg} />;
    default:         return <Core     {...cfg} />;
  }
}

interface InstrumentOrbProps {
  slug: string;
  size?: number;
}

export const InstrumentOrb: React.FC<InstrumentOrbProps> = ({ slug, size = 56 }) => {
  useEffect(() => { ensureStyles(); }, []);

  const cfg = ORBS[slug] ?? DEFAULT_ORB;

  return (
    <svg
      viewBox="0 0 56 56"
      width={size}
      height={size}
      overflow="visible"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {/* Dark background disc */}
      <circle cx="28" cy="28" r="26"
        fill="rgba(0,0,0,0.45)"
        stroke={cfg.p}
        strokeWidth="0.4"
        strokeOpacity="0.25" />
      {/* Outer ambient glow */}
      <circle cx="28" cy="28" r="26"
        fill="none"
        stroke={cfg.p}
        strokeWidth="6"
        strokeOpacity="0.06"
        filter="blur(4px)" />

      {renderOrb(cfg)}
    </svg>
  );
};
