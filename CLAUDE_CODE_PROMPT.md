# Claude Code: Celaya Solutions Website — Full Brand Refresh

## Mission
Apply the full Celaya Solutions Brand Guidelines v1.0.0 to the existing website at
`https://github.com/while-basic/celaya-solutions-website`.

This is not a cosmetic pass. This is a ground-up alignment of every file, component,
token, and behavioral pattern to the brand specification. When you finish, the site
should be indistinguishable in spirit from the brand guidelines document.

---

## Phase 0 — Audit First, Touch Nothing

Before writing a single line, run a full audit:

```bash
git clone https://github.com/while-basic/celaya-solutions-website.git
cd celaya-solutions-website
```

Then map the repo:

1. Print the full directory tree (`find . -not -path '*/node_modules/*' -not -path '*/.git/*'`)
2. Identify the framework (Next.js / Vite / CRA / Astro / plain HTML — check `package.json`)
3. List all existing CSS files, globals, and design tokens
4. List all component files
5. List all page files and routes
6. Check for any existing color variables, font imports, or theme configs
7. Check for any existing content (copy, headlines, descriptions)
8. Check `README.md` for deployment context (Vercel? Netlify? GitHub Pages?)

DO NOT start editing until the audit is fully printed and you have a clear picture of
what exists. Print a short summary:

```
FRAMEWORK: [name + version]
STYLING: [Tailwind / CSS Modules / styled-components / plain CSS]
PAGES: [list]
COMPONENTS: [list]
EXISTING TOKENS: [yes/no — describe]
DEPLOYMENT: [platform]
```

---

## Phase 1 — Design Token System

### 1.1 Install fonts

If Next.js with `next/font`:
```javascript
import { JetBrains_Mono } from 'next/font/google'
import { Syne } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
```

Otherwise inject into `<head>` or global CSS:
```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

### 1.2 Create or replace design tokens

If Tailwind: update `tailwind.config.js` with the full token set below.
If CSS: create `tokens.css` or update the global stylesheet.
If JS theme (styled-components / Emotion / Stitches): create `theme.ts`.

**Required token set — implement ALL of these:**

```css
/* === CELAYA SOLUTIONS DESIGN TOKENS v1.0.0 === */

:root {
  /* Brand Colors */
  --cs-black:        #000000;
  --cs-white:        #FFFFFF;
  --cs-orange:       #FF6B35;
  --cs-green:        #06D6A0;
  --cs-yellow:       #FFBE0B;

  /* Neutral Scale */
  --cs-gray-900:     #0A0A0A;
  --cs-gray-800:     #111111;
  --cs-gray-700:     #1A1A1A;
  --cs-gray-600:     #242424;
  --cs-gray-500:     #3A3A3A;
  --cs-gray-400:     #6B6B6B;
  --cs-gray-300:     #9A9A9A;
  --cs-gray-200:     #CCCCCC;

  /* Typography */
  --cs-font-mono:    'JetBrains Mono', monospace;
  --cs-font-display: 'Syne', sans-serif;
  --cs-font-body:    'DM Sans', sans-serif;

  /* Type Scale */
  --cs-text-xs:      0.6rem;    /* 9.6px  captions, timestamps */
  --cs-text-sm:      0.7rem;    /* 11.2px labels, tags */
  --cs-text-base:    1rem;      /* 16px   body */
  --cs-text-lg:      1.25rem;   /* 20px   subheadings */
  --cs-text-xl:      2rem;      /* 32px   section headers */
  --cs-text-2xl:     3.5rem;    /* 56px   display */
  --cs-text-3xl:     clamp(3rem, 8vw, 7rem); /* hero */

  /* Spacing (base 4px) */
  --cs-space-1:  4px;
  --cs-space-2:  8px;
  --cs-space-3:  12px;
  --cs-space-4:  16px;
  --cs-space-6:  24px;
  --cs-space-8:  32px;
  --cs-space-12: 48px;
  --cs-space-16: 64px;
  --cs-space-20: 80px;

  /* Borders */
  --cs-border:        1px solid #242424;
  --cs-border-accent: 1px solid #FF6B35;
  --cs-border-green:  1px solid rgba(6,214,160,0.3);
  --cs-radius:        4px;
  --cs-radius-sm:     2px;

  /* Motion */
  --cs-ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --cs-ease-spring:   cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --cs-duration-fast: 0.2s;
  --cs-duration-base: 0.3s;
  --cs-duration-slow: 0.5s;

  /* Shadows */
  --cs-shadow-sm: 0 1px 3px rgba(0,0,0,0.6);
  --cs-shadow-md: 0 4px 16px rgba(0,0,0,0.8);
  --cs-shadow-glow-orange: 0 0 20px rgba(255,107,53,0.15);
  --cs-shadow-glow-green:  0 0 20px rgba(6,214,160,0.1);
}
```

If Tailwind, translate to `theme.extend`:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'cs-black':   '#000000',
        'cs-white':   '#FFFFFF',
        'cs-orange':  '#FF6B35',
        'cs-green':   '#06D6A0',
        'cs-yellow':  '#FFBE0B',
        'cs-gray': {
          900: '#0A0A0A',
          800: '#111111',
          700: '#1A1A1A',
          600: '#242424',
          500: '#3A3A3A',
          400: '#6B6B6B',
          300: '#9A9A9A',
          200: '#CCCCCC',
        }
      },
      fontFamily: {
        mono:    ['JetBrains Mono', 'monospace'],
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
    }
  }
}
```

---

## Phase 2 — Global Styles

Update the global CSS / root stylesheet:

```css
/* Global resets and base */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: var(--cs-black);
  color: var(--cs-white);
  font-family: var(--cs-font-body);
  font-size: var(--cs-text-base);
  line-height: 1.6;
  overflow-x: hidden;
}

/* Accessibility: focus ring */
:focus-visible {
  outline: 2px solid var(--cs-orange);
  outline-offset: 3px;
  border-radius: var(--cs-radius-sm);
}

/* Reduced motion compliance */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}

/* Selection */
::selection {
  background: rgba(255, 107, 53, 0.25);
  color: var(--cs-white);
}

/* Scrollbar (webkit) */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--cs-black); }
::-webkit-scrollbar-thumb { background: var(--cs-gray-600); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--cs-orange); }
```

---

## Phase 3 — Typography Components

Create or update typography components. If React:

```tsx
// components/ui/Typography.tsx

export const DisplayXL = ({ children, className = '' }) => (
  <h1 className={`font-display text-[clamp(3rem,8vw,7rem)] font-extrabold tracking-[-0.04em] leading-[0.95] ${className}`}>
    {children}
  </h1>
)

export const Display = ({ children, className = '' }) => (
  <h2 className={`font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] ${className}`}>
    {children}
  </h2>
)

export const Heading1 = ({ children, className = '' }) => (
  <h2 className={`font-display text-[1.75rem] font-bold leading-[1.1] ${className}`}>
    {children}
  </h2>
)

export const Label = ({ children, className = '' }) => (
  <span className={`font-mono text-[0.65rem] font-medium tracking-[0.15em] uppercase ${className}`}>
    {children}
  </span>
)

export const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="font-mono text-[0.65rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
      {children}
    </span>
    <span className="block w-10 h-px bg-cs-orange opacity-50" />
  </div>
)
```

---

## Phase 4 — Core UI Components

Create or replace these components. Each must use only brand tokens.
No hardcoded hex values anywhere in component files.

### 4.1 Button

```tsx
// components/ui/Button.tsx
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'

const variants: Record<ButtonVariant, string> = {
  primary:   'bg-cs-orange text-cs-black hover:bg-[#ff7d49] hover:-translate-y-px',
  secondary: 'bg-transparent text-white border border-cs-gray-600 hover:border-cs-orange hover:text-cs-orange',
  ghost:     'bg-transparent text-cs-green border border-cs-green/40 hover:bg-cs-green/8',
  danger:    'bg-transparent text-red-400 border border-red-400/30 hover:bg-red-400/8',
}

export const Button = ({ variant = 'primary', children, ...props }) => (
  <button
    className={`
      font-mono text-[0.7rem] font-medium tracking-[0.12em] uppercase
      px-6 py-3 rounded-sm border-none cursor-pointer
      inline-flex items-center gap-2 transition-all duration-200
      ${variants[variant]}
    `}
    {...props}
  >
    {children}
  </button>
)
```

### 4.2 Tag / Badge

```tsx
// components/ui/Tag.tsx
type TagVariant = 'orange' | 'green' | 'yellow' | 'ghost'

const variants = {
  orange: 'bg-cs-orange/15 text-cs-orange border border-cs-orange/30',
  green:  'bg-cs-green/10 text-cs-green border border-cs-green/25',
  yellow: 'bg-cs-yellow/10 text-cs-yellow border border-cs-yellow/25',
  ghost:  'bg-transparent text-cs-gray-400 border border-cs-gray-600',
}

export const Tag = ({ variant = 'ghost', children }) => (
  <span className={`font-mono text-[0.6rem] tracking-[0.1em] uppercase px-[0.7rem] py-[0.3rem] rounded-sm inline-block ${variants[variant]}`}>
    {children}
  </span>
)
```

### 4.3 Card

```tsx
// components/ui/Card.tsx
export const Card = ({ children, accent = false, className = '' }) => (
  <div className={`
    border border-cs-gray-700 rounded bg-cs-gray-900
    transition-colors duration-300 hover:bg-cs-gray-800
    ${accent ? 'border-t-2 border-t-cs-orange' : ''}
    ${className}
  `}>
    {children}
  </div>
)
```

### 4.4 Callout / Alert

```tsx
// components/ui/Callout.tsx
type CalloutType = 'info' | 'warn' | 'error'

const styles = {
  info:  { wrapper: 'bg-cs-green/8 border-cs-green/20',  label: 'bg-cs-green/15 text-cs-green' },
  warn:  { wrapper: 'bg-cs-yellow/6 border-cs-yellow/20', label: 'bg-cs-yellow/12 text-cs-yellow' },
  error: { wrapper: 'bg-red-500/8 border-red-500/20',   label: 'bg-red-500/12 text-red-400' },
}

export const Callout = ({ type = 'info', label, children }) => (
  <div className={`flex gap-3 p-4 rounded border ${styles[type].wrapper} text-sm text-cs-gray-300 leading-relaxed`}>
    <span className={`font-mono text-[0.6rem] tracking-[0.1em] uppercase px-2 py-1 rounded-sm flex-shrink-0 mt-0.5 ${styles[type].label}`}>
      {label}
    </span>
    <span>{children}</span>
  </div>
)
```

### 4.5 Code Block

```tsx
// components/ui/CodeBlock.tsx
export const CodeBlock = ({ children, language = '' }) => (
  <div className="bg-cs-gray-900 border border-cs-gray-700 border-l-[3px] border-l-cs-green rounded-r overflow-x-auto">
    {language && (
      <div className="px-4 py-2 border-b border-cs-gray-700 font-mono text-[0.6rem] tracking-[0.15em] uppercase text-cs-gray-500">
        {language}
      </div>
    )}
    <pre className="p-5 font-mono text-[0.75rem] leading-[1.7] text-cs-gray-300">
      {children}
    </pre>
  </div>
)
```

### 4.6 Section Wrapper

```tsx
// components/ui/Section.tsx
export const Section = ({ id, children, className = '' }) => (
  <section
    id={id}
    className={`py-24 border-b border-cs-gray-800 ${className}`}
  >
    <div className="max-w-[1100px] mx-auto px-10">
      {children}
    </div>
  </section>
)
```

---

## Phase 5 — Navigation

Replace or update the nav component:

Requirements:
- Fixed top, full width
- `background: rgba(0,0,0,0.92)` + `backdrop-filter: blur(12px)`
- `border-bottom: 1px solid var(--cs-gray-700)`
- Height: 60px
- Left: logo lockup using brand fonts
- Right: nav links in JetBrains Mono, 0.65rem, tracking-[0.12em], uppercase
- Active link: `color: var(--cs-orange)`
- Hover: `color: var(--cs-orange)` with `transition: 0.2s`
- Include scroll progress bar: 2px orange line below nav, `width` driven by JS scroll %
- Mobile: hamburger menu, full-screen overlay on `--cs-black` bg

Logo lockup markup:
```tsx
<div className="font-display font-extrabold tracking-[-0.03em]">
  Celaya
  <span className="font-mono text-[0.55rem] font-normal tracking-[0.35em] uppercase text-cs-orange block mt-0.5">
    Solutions
  </span>
</div>
```

---

## Phase 6 — Page Content

### Hero Section

Must include:
- Background: subtle grid overlay (CSS background-image, 60px grid, 1.5% opacity lines)
- Background: two radial gradients (orange at 70% 40%, green at 20% 70% — very subtle)
- Eyebrow: `font-mono text-[0.7rem] tracking-[0.25em] uppercase text-cs-orange` with `::before` 30px line
- Headline: Syne 800, `clamp(3rem, 8vw, 7rem)`, tracking -0.03em, "Make Coherence Visible" or equivalent
- Subhead: Syne 400, gray, letter-spacing -0.01em
- CTA buttons: Primary (orange) + Secondary (ghost)
- Meta bar at bottom: font-mono, gray-500, showing: Founded / El Paso TX, Primary Color / #FF6B35, Mission / Research Lab

### About / What We Build Section

Four-card grid (2x2) — each card represents a research principle:
1. Coherence as Prime Function (orange accent)
2. Precision Without Ceremony (green accent)
3. Border Intelligence (yellow accent)
4. Edge-of-Chaos Operations (white accent)

Card number displayed as large background watermark in `--cs-gray-800`.

### Research Ecosystem / Products Section

List the active research instruments. For each one, create a card showing:
- System name (font-mono, uppercase, brand color accent)
- Brief description (DM Sans, gray-400)
- Status tag (Active / Live / Research / Deployed)
- Stack/tech used if applicable

Systems to include:
- CORTEX (14-agent manufacturing intelligence)
- CLOS (37-agent cognitive life operating system)
- EPPE (El Paso Proof Engine — civic infrastructure)
- MORTEM (biometric blockchain lifecycle)
- Project Jupiter (civic accountability, water analysis)
- Neural Child (developmental AI with emotional memory)
- Celaya Chain Protocol (Layer 3 blockchain, Proof of Coherence)
- Juniper (7-agent OpenClaw architecture)
- MERIDIAN (meta-framework for cross-domain cognition)
- SIGNAL, VERDICT, SENTINEL (label each appropriately)

### Mission / Behavioral Standards Section

Nine behavioral commitments, rendered as a grid of cards:
1. Evidence Before Claims
2. Identity Protection by Default
3. IP Documented in Real Time
4. No Sign-Up, No Tracking
5. El Paso as Operating Context
6. Surprise Over Market Fit
7. Systems Speak, Not Silos
8. Direct First, Diplomatic Always
9. Version What You Change

Bottom accent line on each card alternates orange/green/yellow.

### Contact / Footer

```
hello@celayasolutions.com
chris@chriscelaya.com
```

No contact form (no sign-up, no tracking — behavioral standard 04).
Use `mailto:` links only.

Footer layout:
- Left: Celaya Solutions wordmark + "Independent AI Research Lab / El Paso, Texas"
- Right: Version info + copyright + "Make Coherence Visible" tagline

---

## Phase 7 — Content Rules (Apply Everywhere)

Before shipping any page content, run every string through these rules:

1. **No em dashes** — replace with colons, commas, periods, or parentheses. Zero exceptions.
2. **No corporate filler** — remove any: "leverage", "synergy", "empower", "innovative", "cutting-edge", "thought leader", "disrupt", "paradigm", "solutions" (standalone noun)
3. **Evidence-first** — any product claim must be specific and verifiable
4. **No form elements** — no newsletter signup, no contact form, no analytics widgets
5. **Minimum font size 14px** everywhere — enforce in CSS
6. **No color outside the token set** — audit every CSS file for hardcoded hex values

---

## Phase 8 — Metadata and SEO

Update `<head>` / metadata config:

```
title:       "Celaya Solutions — Make Coherence Visible"
description: "Independent AI research lab. El Paso, Texas. Building infrastructure for coherence to examine itself."
og:title:    "Celaya Solutions"
og:desc:     "31+ research instruments. Cross-domain AI architecture. Civic accountability tools."
og:image:    [generate from brand colors — black bg, orange wordmark]
theme-color: "#000000"
```

Favicon: Black background, "CS" in Syne 800, orange accent dot bottom-right.

---

## Phase 9 — Performance and Accessibility

### Accessibility checklist (enforce before committing):

- All images have descriptive `alt` text
- All interactive elements are keyboard-navigable
- Focus ring: `2px solid var(--cs-orange)` on `:focus-visible`
- Touch targets minimum 44px on mobile
- Color contrast verified:
  - White on black: 21:1 (AAA)
  - Orange on black: 4.6:1 (AA)
  - Green on black: 8.6:1 (AAA)
- `prefers-reduced-motion` respected for all animations
- No `aria-hidden` on content that should be visible to screen readers
- Heading hierarchy: one `h1` per page, logical `h2`/`h3` nesting

### Performance targets:
- No Google Fonts loaded synchronously — use `font-display: swap`
- No third-party scripts (analytics, tracking, chat widgets)
- Images: lazy load, WebP where possible
- No unused CSS shipped

---

## Phase 10 — Document Metadata in Repo

Add to repo root:

### `BRAND.md`

```markdown
# Celaya Solutions Brand Guidelines

Version: 1.0.0
Effective: 2026-01-01

## Core Palette
| Token        | Hex       | Role                       |
|--------------|-----------|----------------------------|
| cs-orange    | #FF6B35   | Primary action, brand anchor |
| cs-green     | #06D6A0   | Confirmed states, code     |
| cs-yellow    | #FFBE0B   | Warnings, highlights       |
| cs-white     | #FFFFFF   | Primary text               |
| cs-black     | #000000   | Canvas, background         |

## Typography
| Role    | Family         | Weights       |
|---------|----------------|---------------|
| Mono    | JetBrains Mono | 300, 400, 500, 700 |
| Display | Syne           | 400, 600, 800 |
| Body    | DM Sans        | 300, 400, 500 |

## Voice Rules
- No em dashes. Use colons, commas, periods, parentheses.
- Evidence-first: claim follows proof, not the other way around.
- No corporate filler vocabulary.
- Minimum 14px font size everywhere.

## Contact
hello@celayasolutions.com
chris@chriscelaya.com
```

### `CHANGELOG.md`

```markdown
# Changelog

## [1.0.0] — 2026-01-01
### Added
- Full brand system implementation (color, type, components)
- Research instruments section (31+ systems)
- Behavioral standards section
- Accessibility: WCAG AA minimum across all color pairs
- No-tracking policy enforced: no analytics, no forms, no third-party scripts
- Em dash prohibition enforced in all copy
```

---

## Phase 11 — Final Verification

Before `git push`, verify:

```bash
# 1. No em dashes anywhere
grep -r " — " src/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" --include="*.md" --include="*.html"
# Must return zero results

# 2. No hardcoded colors outside token file
grep -r "#[0-9A-Fa-f]\{6\}" src/ --include="*.css" --include="*.tsx" --include="*.jsx"
# Any result NOT in the token file is a violation

# 3. No font-size below 14px
grep -r "font-size:.*[0-9]\." src/ --include="*.css"
# Review each hit for sub-14px values

# 4. Build succeeds with no warnings
npm run build

# 5. Lighthouse accessibility score
# Target: 95+ on accessibility
```

Commit message format:
```
feat(brand): apply Celaya Solutions Brand Guidelines v1.0.0

- Full design token system (color, type, spacing, motion)
- New component library: Button, Tag, Card, Callout, CodeBlock
- Updated nav with scroll progress indicator
- Hero, about, research ecosystem, behavioral standards sections
- Content pass: em dashes removed, evidence-first voice applied
- Accessibility: WCAG AA+ across all color pairs
- No-tracking policy enforced
- BRAND.md and CHANGELOG.md added to repo root
```

---

## Constraints

DO NOT:
- Add any analytics (no GA, no Plausible, no Hotjar)
- Add any newsletter or contact form
- Use any color not in the token set
- Use em dashes in any copy
- Use fonts other than JetBrains Mono, Syne, DM Sans
- Set font sizes below 14px
- Add social proof widgets, testimonials, or star ratings
- Use the word "solutions" as a standalone product adjective
- Invent features or capabilities not documented in this prompt

DO:
- Ask for clarification before adding any page or section not specified here
- Comment all component files with the brand token they reference
- Keep all copy specific, verifiable, and direct
- Treat accessibility as infrastructure, not polish

---

*Celaya Solutions Brand Guidelines v1.0.0 / hello@celayasolutions.com*
