# Claude Code Prompt: Celaya Solutions Instrument Pages
# Version 2.0 — Full Design System + All 12 Instruments + CORTEX Docs Suite

---

## CONTEXT

You are building and maintaining the Celaya Solutions instrument showcase website.
This is a static HTML site — no framework, no build step, vanilla JS only.
All pages share one design system. Each instrument has a unique accent color and SVG visualization.
CORTEX has an extended documentation suite (4 pages) plus a product landing page.

**Deployment target:** GitHub Pages or any static host.
**File structure:**

```
/instruments/
  instruments-index.html       ← showroom floor, all 12
  cortex.html                  ← instrument showcase
  cortex-landing.html          ← product landing page (sales)
  cortex-docs.html             ← documentation index
  cortex-architecture.html     ← REF-01
  cortex-agents.html           ← REF-02
  cortex-deployment.html       ← REF-03
  clos.html
  eppe.html
  mortem.html
  project-jupiter.html
  neural-child.html
  celaya-chain.html
  juniper.html
  meridian.html
  signal.html
  verdict.html
  sentinel.html
```

---

## DESIGN SYSTEM

### Brand Tokens

```css
:root {
  /* Base */
  --black: #000000;
  --white: #FFFFFF;

  /* Neutral scale */
  --g900: #0A0A0A;
  --g800: #111111;
  --g700: #1A1A1A;
  --g600: #242424;
  --g500: #3A3A3A;
  --g400: #6B6B6B;
  --g300: #9A9A9A;

  /* Brand accents */
  --orange: #FF6B35;   /* Signal Orange — primary brand */
  --green:  #06D6A0;   /* Proof Green */
  --yellow: #FFBE0B;   /* Alert Yellow */
  --blue:   #3D7EFF;   /* Documentation Blue */
  --red:    #FF3366;   /* Deep Crimson (MORTEM) */

  /* Typography */
  --mono:    'JetBrains Mono', monospace;
  --display: 'Syne', sans-serif;
  --body:    'DM Sans', sans-serif;
}
```

### Typography Rules
- **Display/Headlines:** Syne 800 — instrument names, section titles
- **Labels/Code/System:** JetBrains Mono — all caps, tracking .15–.25em
- **Body/Prose:** DM Sans 300–500
- **Minimum font size:** 14px everywhere. No exceptions.
- **NO em dashes.** Use colons, commas, periods, parentheses only.

### Color Rules
- Background always `#000` or `#0A0A0A`
- Primary text always `#FFFFFF`
- Each instrument has ONE accent color (see table below)
- Blue (`#3D7EFF`) is reserved for documentation/reference layer
- Orange (`#FF6B35`) is the brand anchor across all pages

### Instrument Accent Colors

| Instrument | Accent | Hex |
|---|---|---|
| CORTEX | Signal Orange | `#FF6B35` |
| CLOS | Proof Green | `#06D6A0` |
| EPPE | Pure White | `#FFFFFF` |
| MORTEM | Deep Crimson | `#FF3366` |
| Project Jupiter | Alert Yellow | `#FFBE0B` |
| Neural Child | Soft Cyan | `#00C2FF` |
| Celaya Chain Protocol | Electric Blue | `#3D7EFF` |
| Juniper | Forest Green | `#2ECC71` |
| MERIDIAN | Amber | `#FF9500` |
| SIGNAL | Magenta | `#FF2D78` |
| VERDICT | Ice White | `#E8F4FF` |
| SENTINEL | Emerald | `#00FF88` |

---

## SHARED COMPONENTS (required on every page)

### Custom Cursor
```javascript
// 8px solid dot (instant) + 32px ring (lerp 0.1)
// Both accent-colored, mix-blend-mode: screen
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0, my=0, rx=0, ry=0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx+'px'; cursor.style.top = my+'px';
});
(function tick() {
  rx += (mx-rx)*0.1; ry += (my-ry)*0.1;
  ring.style.left = rx+'px'; ring.style.top = ry+'px';
  requestAnimationFrame(tick);
})();
```

### Progress Bar
```css
.progress {
  position: fixed; top: 0; left: 0; height: 2px;
  width: 0%; background: var(--accent);
  z-index: 300; transition: width .1s;
}
```
```javascript
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  document.getElementById('progress').style.width = (scrollY/max*100)+'%';
}, { passive: true });
```

### Scroll Reveal
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity .7s cubic-bezier(.16,1,.3,1),
              transform .7s cubic-bezier(.16,1,.3,1);
}
.reveal.visible { opacity: 1; transform: translateY(0); }
.rd1 { transition-delay: .08s; }
.rd2 { transition-delay: .16s; }
.rd3 { transition-delay: .24s; }
```
```javascript
const io = new IntersectionObserver(entries =>
  entries.forEach(x => { if(x.isIntersecting) x.target.classList.add('visible'); }),
  { threshold: 0.08 }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
```

### CTA Button Shape
```css
clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
```

### Nav (standard instrument nav)
```
[INSTRUMENT NAME / Celaya Solutions] ← left
[← All Instruments] [Docs (if exists)] [Contact] ← right
```
- Fixed, 60px height, `rgba(0,0,0,.92)` + `backdrop-filter: blur(20px)`
- Bottom border: `1px solid var(--g800)`
- Active page: accent color label, `border: 1px solid accent@25%`, `background: accent@7%`

### Ecosystem Ticker
Infinite scroll strip showing all 12 instruments. Current instrument highlighted in accent color.
Animation: `@keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }`
Speed: `animation: ticker 35s linear infinite`
Pauses on hover: `animation-play-state: paused`

### Instrument Browser Footer Grid
4-column grid, all 12 instruments, navigate between them.
Cards show: instrument name, accent color, status tag, link to that instrument's page.

---

## INSTRUMENT PAGE STRUCTURE (standard 10 sections)

Every instrument page follows this section order:

```
1. NAV          — fixed, 60px
2. HERO         — 100vh, instrument name huge, custom SVG visualization
3. TICKER       — infinite scroll ecosystem strip
4. SPECS        — 3-column technical data grid
5. STATEMENT    — full-width cinematic quote block
6. INTERNALS    — agents/architecture/technical detail
7. CONFIGURE    — how to deploy or engage
8. HISTORY      — build timeline
9. BROWSER      — all 12 instruments grid
10. FOOTER      — shared
```

### Hero Section Requirements
- Viewport: `min-height: 100vh`
- Instrument name: `font-size: clamp(5rem, 18vw, 16rem)`, Syne 800
- Custom SVG visualization: unique per instrument (see specs below)
- Tagline: JetBrains Mono, small caps, accent color
- Scroll hint: animated bottom center

### SVG Visualization Specs (per instrument)

**CORTEX** — Hub-and-spoke, 14 named nodes on orbit ring, orange
- Center hub 20px circle
- 14 nodes on r=200 circle: YIELD, CADENCE, WATT, WRENCH, COMPASS, SPEC, RACHEL, VECTOR, EP44-A, EP44-B, EP44-C, SENTINEL, COORD-A, COORD-B
- Spoke lines: `stroke: #FF6B35, opacity: .3`
- Node pulse animation: `r` oscillates ±2px at 2s interval, staggered

**CLOS** — Three concentric rings of 37 nodes, breathing
- Outer ring: 16 nodes, r=220
- Mid ring: 12 nodes, r=150
- Inner ring: 8 nodes, r=80
- Center node: r=12
- All rings rotate slowly (outer: 40s, mid: 30s reverse, inner: 20s)
- Color: `#06D6A0`

**EPPE** — Hexagonal shield, SHA-256 hash strings inside
- Regular hexagon, stroke accent white
- Hash strings scrolling vertically inside clip
- Center checkmark icon
- Subtle pulse on outer hex

**MORTEM** — EKG waveform drawing itself left to right
- `stroke-dashoffset` animation from full length to 0
- Pacemaker origin dot (left)
- Solana diamond destination (right)
- Color: `#FF3366`
- JS counter: heartbeat countdown from 86400

**Project Jupiter** — Animated bar chart
- Two bars: "Water Demand" (197%, red) vs "Stated Surplus" (100%, yellow)
- Red threshold line draws in on load
- Color: `#FFBE0B`

**Neural Child** — 5-layer feedforward neural net
- Layers: 3-5-6-5-3 nodes
- Emotional memory nodes: colored differently
- Breathing pulse per layer, staggered
- Color: `#00C2FF`

**Celaya Chain Protocol** — Blockchain strip
- 6 blocks in sequence: genesis → latest
- Each block shows truncated hash
- Formula overlay: `A(t) = C(t)·e^(-αn)·e^(-λt)`
- Color: `#3D7EFF`

**Juniper** — 7-node flower
- Center: MUSE node
- 6 petals: Executive, Vitals, Ledger, Bridges, Sentinel, Ops
- Petal nodes connected to center only
- Slow rotation of outer ring
- Color: `#2ECC71`

**MERIDIAN** — 5 overlapping domain circles
- Domains: Electrical, AI, Audio, Civic, Cognitive (center)
- Venn-style overlap, center brightest
- Ripple animation from center outward
- Color: `#FF9500`

**SIGNAL** — Layered waveforms + frisson spike
- 3 layered psychoacoustic waveforms
- Frisson spike moment: sudden amplitude jump
- FFT spectrum bars at bottom
- Color: `#FF2D78`

**VERDICT** — Decision tree
- Root → branches → terminal nodes
- Terminal states: Verified / Disputed / Insufficient / Anchored
- Color: `#E8F4FF`

**SENTINEL** — Monitoring grid
- 6 metric panels in grid
- Live-style blinking indicators
- Log line scroll at bottom
- Color: `#00FF88`

---

## CORTEX DOCUMENTATION SUITE

CORTEX has 5 additional pages beyond the standard instrument showcase:

### cortex-landing.html — Product Landing Page
Sales-oriented. Not brand/showcase — conversion.
Sections:
1. Hero — "I was the error correction they optimized away" statement
2. The Record — Build documentation, exhibit block
3. The Situation — Full transparency on IP/termination situation, event sequence
4. The Product — 3-column feature cards, product spec ref block
5. Who It's For — Fit criteria + Not the right fit list
6. Engagement — 3-tier model, contact block, CTA

Key design note: Orange stays brand/identity. Blue handles documentation reference layer.
The situation is framed as proof of competence, not grievance. Evidence-first throughout.

### cortex-docs.html — Documentation Index
Hub page for all 4 reference documents.
Doc index strip: 4 cards (REF-01 through REF-04)
System manifest ref block, IP status panel with live-pulsing alert.

### cortex-architecture.html — REF-01
Sidebar-nav doc layout (260px sticky sidebar + content area).
Sections: Hub-and-spoke topology, Domain separation, Communication protocol, Integration layer.
All technical content in line-numbered ref blocks (orange keys, blue values).

### cortex-agents.html — REF-02
Same sidebar-nav layout.
All 14 agents in tiered cards:
- Tier 1 Core (orange accent): YIELD, CADENCE, WATT, WRENCH, COMPASS
- Tier 2 Domain (blue accent): SPEC, RACHEL, VECTOR, EP44-A, EP44-B, EP44-C
- Tier 3 Support: SENTINEL, COORD-A, COORD-B
Each card: domain, function, inputs, outputs, architectural notes.

### cortex-deployment.html — REF-03
Same sidebar-nav layout.
Sections: 90-day data gravity protocol, Teams integration, 220% expansion model, stakeholder rollout.
Animated gradient gravity meters. 4-phase timeline. 3 rollout phase blocks with checklists.

---

## INSTRUMENTS INDEX PAGE (instruments-index.html)

Showroom floor. All 12 instruments in asymmetric grid.
- Filter bar: All / Operational / Research / Live / Development
- Each card: accent color, instrument name, status tag, one-line description, link
- Hover: accent color sweep, arrow animation
- Stats strip: 12 instruments, 5 domains, 1 lab
- "INSTRUMENTS" large watermark text background

---

## PERFORMANCE RULES

- NO JavaScript libraries (vanilla only)
- NO external CSS files
- Fonts from Google Fonts CDN only
- All animations: `transform` + `opacity` only (hardware-accelerated)
- SVG animations: CSS only where possible, minimal JS
- Images: none — all visuals are SVG or CSS
- Total page weight target: under 100KB per page

---

## BRAND VOICE RULES

- NO em dashes. Colons, commas, periods, parentheses only.
- NO corporate filler: leverage, synergy, empower, innovative, cutting-edge, disrupt, paradigm
- Evidence-first: claims follow proof, not precede it
- Direct, no hedging
- Minimum 14px font size everywhere
- El Paso, TX always present as operating context

---

## CONTACT

- Lab email: hello@celayasolutions.com
- Personal: chris@chriscelaya.com
- Location: El Paso, TX
- Lab: Celaya Solutions

---

## EXTENDING THE SYSTEM

### Adding a new instrument page

1. Copy the closest existing instrument HTML as a base
2. Set `--accent` to the new instrument's color
3. Replace the hero SVG with the instrument-specific visualization
4. Update the ticker to highlight the new instrument
5. Update the instrument browser grid to include the new card
6. Add the new instrument to `instruments-index.html`

### Adding a new documentation page

1. Use the sidebar-nav doc layout from `cortex-architecture.html`
2. Keep all ref blocks with orange keys, blue values
3. Add to the sidebar navigation of all existing CORTEX doc pages
4. Add card to `cortex-docs.html` index

### Design constraints to never break

- Background stays `#000` or `#0A0A0A`
- No em dashes
- Custom cursor on every page
- Progress bar on every page
- Scroll reveal on all non-hero content
- Instrument accent color is consistent across all uses of that instrument
- Blue (`#3D7EFF`) is documentation layer only — not used as a general accent

---

## FULL FILE MANIFEST

| File | Type | Status |
|---|---|---|
| instruments-index.html | Showroom index | Complete |
| cortex.html | Instrument showcase | Complete |
| cortex-landing.html | Product landing page | Complete |
| cortex-docs.html | Docs index | Complete |
| cortex-architecture.html | REF-01 | Complete |
| cortex-agents.html | REF-02 | Complete |
| cortex-deployment.html | REF-03 | Complete |
| clos.html | Instrument showcase | Complete |
| eppe.html | Instrument showcase | Complete |
| mortem.html | Instrument showcase | Complete |
| project-jupiter.html | Instrument showcase | Complete |
| neural-child.html | Instrument showcase | Complete |
| celaya-chain.html | Instrument showcase | Complete |
| juniper.html | Instrument showcase | Complete |
| meridian.html | Instrument showcase | Complete |
| signal.html | Instrument showcase | Complete |
| verdict.html | Instrument showcase | Complete |
| sentinel.html | Instrument showcase | Complete |

Total: 18 HTML files / ~540KB uncompressed
