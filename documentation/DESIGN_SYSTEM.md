# Celaya Solutions - Design System & Brand Guide

## Brand Identity

### Positioning Statement
"A one-person research lab building privacy-first cognitive tools through systems-level thinking."

### Brand Attributes
- **Technical**: Engineering-first, no fluff
- **Transparent**: Build in public, show the work
- **Precise**: Systems thinking, accurate terminology
- **Unpretentious**: Let work speak, not hype
- **Cross-Domain**: Bridging electrical/software/cognitive

---

## Visual Language

### Color Palette

```css
/* Primary Palette */
--black: #000000;           /* Background, primary text */
--white: #FFFFFF;           /* Accents, inverse text */

/* Grayscale */
--zinc-950: #09090B;        /* Secondary backgrounds */
--zinc-900: #18181B;        /* Cards, elevated surfaces */
--zinc-800: #27272A;        /* Subtle borders */
--zinc-700: #3F3F46;        /* Disabled states */
--zinc-600: #52525B;        /* Secondary text */
--zinc-500: #71717A;        /* Tertiary text */
--zinc-400: #A1A1AA;        /* Placeholder text */

/* Accent Colors */
--emerald-500: #10B981;     /* Success, live indicators */
--emerald-400: #34D399;     /* Hover states */
--blue-500: #3B82F6;        /* Links, interactive */
--red-500: #EF4444;         /* Errors, warnings */

/* Opacity Variations */
--white-5: rgba(255,255,255,0.05);   /* Subtle borders */
--white-10: rgba(255,255,255,0.10);  /* Elevated borders */
--white-20: rgba(255,255,255,0.20);  /* Hover states */
--white-40: rgba(255,255,255,0.40);  /* Active states */
```

### Typography

```css
/* Primary Font: Inter */
font-family: 'Inter', sans-serif;
font-weights: 300, 400, 500, 600, 700

/* Monospace Font: JetBrains Mono */
font-family: 'JetBrains Mono', monospace;
font-weights: 400, 500

/* Type Scale */
--text-xs: 12px;      /* Labels, metadata */
--text-sm: 14px;      /* Body text, small */
--text-base: 16px;    /* Body text, default */
--text-lg: 18px;      /* Body text, large */
--text-xl: 20px;      /* Subheadings */
--text-2xl: 24px;     /* Section headings */
--text-3xl: 30px;     /* Page headings */
--text-4xl: 36px;     /* Major headings */
--text-5xl: 48px;     /* Hero headings */
--text-6xl: 60px;     /* Display text */
--text-8xl: 96px;     /* Hero display */

/* Line Heights */
--leading-tight: 1.1;
--leading-normal: 1.5;
--leading-relaxed: 1.75;

/* Letter Spacing */
--tracking-tight: -0.02em;
--tracking-normal: 0;
--tracking-wide: 0.05em;
--tracking-widest: 0.3em;   /* Uppercase labels */
```

### Spacing System

```css
/* 8px base grid */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
--space-40: 160px;
--space-48: 192px;
```

---

## Component Patterns

### Glass Card
```tsx
className="glass-card p-8 rounded-sm border border-white/5"

/* CSS */
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

### Glow Border (Hover)
```tsx
className="glass-card glow-border"

/* CSS */
.glow-border:hover {
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
}
```

### Status Badges
```tsx
/* Active */
<span className="text-[10px] font-mono px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded uppercase">
  Active
</span>

/* Beta */
<span className="text-[10px] font-mono px-2 py-1 bg-blue-500/10 text-blue-500 rounded uppercase">
  Beta
</span>

/* In Progress */
<span className="text-[10px] font-mono px-2 py-1 bg-zinc-800 text-zinc-500 rounded uppercase">
  In Progress
</span>
```

### Section Headers
```tsx
<span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">
  Section Label
</span>
<h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
  Section Title <span className="text-zinc-600">Subtle Part</span>
</h2>
```

### Buttons

```tsx
/* Primary CTA */
<button className="px-8 py-4 bg-white text-black font-bold tracking-tight rounded-sm hover:scale-[1.02] transition-all">
  Primary Action
</button>

/* Secondary */
<button className="px-8 py-4 border border-white/10 text-white font-mono text-sm uppercase hover:bg-zinc-900 transition-colors">
  Secondary Action
</button>

/* Ghost */
<button className="text-xs font-mono uppercase text-zinc-400 hover:text-white transition-colors">
  Tertiary Action
</button>
```

---

## Layout Patterns

### Section Spacing
```tsx
<section className="py-32 px-6 bg-black">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Grid Layouts
```tsx
/* Two Column */
<div className="grid lg:grid-cols-2 gap-20">
  {/* Left/Right content */}
</div>

/* Three Column */
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>

/* Asymmetric */
<div className="grid lg:grid-cols-12 gap-16">
  <div className="lg:col-span-7">{/* Main */}</div>
  <div className="lg:col-span-5">{/* Sidebar */}</div>
</div>
```

---

## Animation Principles

### Timing Functions
```css
/* Smooth, natural */
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

/* Bouncy (use sparingly) */
transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Durations
```css
--duration-fast: 150ms;     /* Hover states */
--duration-normal: 300ms;   /* Default transitions */
--duration-slow: 500ms;     /* Complex animations */
```

### Common Patterns
```tsx
/* Hover Scale */
className="hover:scale-[1.02] transition-transform"

/* Fade In */
className="opacity-0 animate-fade-in"

/* Slide Up */
className="translate-y-4 opacity-0 animate-slide-up"

/* Glow Pulse */
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
```

---

## Icon System

### Primary: Lucide React
```tsx
import { Icon } from 'lucide-react';

/* Sizes */
<Icon className="w-4 h-4" />   /* Small */
<Icon className="w-5 h-5" />   /* Default */
<Icon className="w-6 h-6" />   /* Large */

/* Colors */
<Icon className="text-zinc-500" />     /* Inactive */
<Icon className="text-white" />        /* Active */
<Icon className="text-emerald-500" />  /* Success */
```

### Commonly Used Icons
- `ArrowUpRight` - External links
- `ArrowRight` - Next/Continue
- `Github` - GitHub links
- `Mail` - Contact
- `Terminal` - Code/Technical
- `Cpu` - Processing/AI
- `Shield` - Privacy/Security
- `Zap` - Performance
- `Eye` - Observation
- `Mic` - Voice input
- `Activity` - Analytics
- `Layout` - Architecture

---

## Background Patterns

### Grid Pattern
```tsx
<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
```

### Gradient Overlay
```tsx
<div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-transparent to-transparent"></div>
```

### Ambient Glow
```tsx
<div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
```

---

## Content Guidelines

### Voice & Tone

**Do:**
- Be direct and precise
- Use technical terminology correctly
- Show don't tell (evidence over claims)
- Acknowledge uncertainty when appropriate
- Use first person ("I'm building...")

**Don't:**
- Use marketing jargon
- Make unsubstantiated claims
- Oversimplify complex topics
- Use emojis excessively
- Write in third person

### Writing Patterns

**Strong Opening:**
```
Bad:  "In this post, I'm going to talk about..."
Good: "Local LLMs aren't just about privacy. They're about ownership."
```

**Clear Structure:**
```
1. Hook (why this matters)
2. Context (background needed)
3. Insight (what you learned)
4. Evidence (data/examples)
5. Implication (what this means)
```

**Code/Technical Content:**
```tsx
// Always include context
// Bad: Just code dump
// Good: Explain why, then show how

// Example:
"I needed zero-latency inference, so I chose Llama.cpp over cloud APIs:"

```python
# Implementation
```

---

## Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Common Patterns
```tsx
/* Typography */
className="text-4xl md:text-6xl"

/* Grid */
className="grid md:grid-cols-2 lg:grid-cols-3"

/* Spacing */
className="py-16 md:py-32"

/* Flex Direction */
className="flex flex-col md:flex-row"
```

---

## Accessibility

### Contrast Ratios
- Body text (zinc-400 on black): 4.5:1 ✓
- Headings (white on black): 21:1 ✓
- Links (blue-500 on black): 4.5:1 ✓

### Focus States
```css
/* Always visible */
focus:outline-none 
focus:ring-2 
focus:ring-white/40
```

### Semantic HTML
```tsx
/* Use correct elements */
<nav>       /* Navigation */
<main>      /* Main content */
<section>   /* Content sections */
<article>   /* Standalone content */
<aside>     /* Sidebar content */
```

---

## Brand Assets Checklist

### Logo Variations
- [ ] Primary (white on black)
- [ ] Inverse (black on white)
- [ ] Icon only (CS mark)
- [ ] Horizontal lockup
- [ ] Vertical lockup

### Social Media
- [ ] OG image (1200x630px)
- [ ] Twitter card (1200x600px)
- [ ] Profile photo (400x400px)
- [ ] Banner (1500x500px)

### Favicons
- [ ] favicon.ico (32x32px)
- [ ] apple-touch-icon (180x180px)
- [ ] android-chrome (192x192px, 512x512px)

### Email
- [ ] Email signature
- [ ] Newsletter header
- [ ] Footer logo

---

## Usage Examples

### Hero Section
```tsx
<h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
  Main Message <span className="text-zinc-500 italic">Subtle Part</span>
</h1>
```

### Card Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="glass-card p-6 rounded-sm border border-white/5 hover:border-white/20 transition-all">
    {/* Card content */}
  </div>
</div>
```

### Stats Display
```tsx
<div className="flex flex-col">
  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
    Label
  </span>
  <span className="text-xl font-bold tracking-tight">
    Value
  </span>
</div>
```

---

## Key Principle

**Clarity > Cleverness**

Every design decision should:
1. Reduce cognitive load
2. Enhance readability
3. Support the content
4. Reflect technical precision
5. Feel authentic to you

The design is a tool for communication, not decoration.
