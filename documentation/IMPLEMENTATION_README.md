# Celaya Solutions - Research Lab Website

A **build-in-public** research lab showcasing cognitive systems development, privacy-first AI architecture, and systems-level thinking.

## What Changed

### New Sections Added

#### 1. **Story Section** (`components/Story.tsx`)
- **Why**: Establishes credibility and founder context
- **Content**: 
  - Origin story bridging electrical systems → cognitive systems
  - Timeline showing 11+ years of cross-domain experience
  - El Paso context and Mexican American perspective
  - "Inverse imposter syndrome" positioning

#### 2. **Research Section** (`components/Research.tsx`)
- **Why**: Core "build in public" showcase
- **Content**:
  - Active research projects with status indicators
  - Current experiments with key insights
  - Open source contributions
  - Direct links to GitHub

#### 3. **Lab Notes Section** (`components/LabNotes.tsx`)
- **Why**: Ongoing documentation of learnings
- **Content**:
  - Blog-style preview of research notes
  - Real experiments and findings
  - Newsletter signup for updates
  - Tags and reading time estimates

### Updated Sections

#### **Hero** (`components/Hero.tsx`)
- Stronger "research lab" positioning
- Added credibility metrics (11+ years, 172K words, 90-day experiment)
- Direct GitHub link
- "Building in public" emphasis

#### **Navbar** (`components/Navbar.tsx`)
- Added Story, Research, Lab Notes links
- Mobile-responsive hamburger menu
- Maintains clean aesthetic

#### **App.tsx**
- Integrated all new sections
- Updated statistics strip to emphasize "Research Lab" and "Build in Public"
- Proper content flow: Product → Story → Research → Notes → Philosophy

## Content Strategy

### For "Build in Public" Success

Your site now has:

1. **Social Proof**: Timeline, metrics, GitHub links
2. **Transparency**: Research section showing active work
3. **Narrative**: Story section connecting the dots
4. **Ongoing Updates**: Lab Notes for continuous engagement
5. **Clear CTAs**: Beta signup, GitHub, consultation

### What to Populate Next

#### Immediate (Week 1):
- [ ] Write first 3 lab notes (use existing voice journals)
- [ ] Create GitHub repos for:
  - CLOS architecture docs
  - MCP server code
  - Any utility scripts
- [ ] Add real metrics to Research section
- [ ] Set up actual newsletter (ConvertKit, Substack, etc.)

#### Short-term (Month 1):
- [ ] Document 90-day experiment publicly
- [ ] Publish technical specs for CLOS
- [ ] Share wire waste reduction proposal (redacted if needed)
- [ ] Write "Systems Thinking" deep dive post
- [ ] Record first dev log video

#### Medium-term (Quarter 1):
- [ ] Case study from Schneider Electric work
- [ ] First beta user testimonials
- [ ] Research paper on cognitive pattern detection
- [ ] Open source first tool/utility
- [ ] Speaking engagement or podcast appearance

## Technical Details

### Stack
- React + TypeScript
- Tailwind CSS (via CDN)
- Recharts for data visualization
- Lucide icons
- Vite for build

### File Structure
```
/
├── App.tsx                          # Main app with routing
├── components/
│   ├── Hero.tsx                    # Updated with credibility metrics
│   ├── Navbar.tsx                  # Updated with new nav links
│   ├── Story.tsx                   # NEW: Founder story & timeline
│   ├── Research.tsx                # NEW: Active research showcase
│   ├── LabNotes.tsx               # NEW: Blog/notes preview
│   ├── ClosSection.tsx            # Existing: CLOS product
│   ├── UserJourney.tsx            # Existing: Day in the life
│   ├── Philosophy.tsx             # Existing: Core principles
│   ├── ArchitectureDiagram.tsx    # Existing: Tech stack
│   ├── Capabilities.tsx           # Existing: Technical capabilities
│   └── Contact.tsx                # Existing: Contact form
```

## Design Philosophy

### Visual Identity
- **Minimalist Black/White/Zinc**: Technical, serious, focused
- **Monospace Accents**: Engineering aesthetic
- **Subtle Animations**: Professional, not flashy
- **Glassmorphism**: Modern depth without color distraction

### Content Voice
- **Direct**: No fluff, technical accuracy
- **Transparent**: Show the work, including failures
- **Systems-Focused**: Always connecting to larger patterns
- **Unpretentious**: Let the work speak

## Deployment

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Next Steps for Launch

### Pre-Launch Checklist
- [ ] Write actual lab notes content
- [ ] Create real GitHub repos
- [ ] Set up analytics (Plausible, Fathom, or similar)
- [ ] Configure newsletter service
- [ ] Set up contact form backend
- [ ] Add meta tags and OG images
- [ ] Test mobile responsiveness
- [ ] Proofread all copy

### Launch Strategy
1. **Soft Launch**: Share on Twitter/X with first lab note
2. **GitHub Activity**: Push repos, start building in public there too
3. **Weekly Cadence**: Lab note every Monday
4. **Engage**: Respond to all feedback, iterate publicly

## Content Ideas for Lab Notes

Based on your context:

1. "Why I'm Building CLOS Instead of Using Notion"
2. "The MCP Server No One Asked For (But I Needed)"
3. "11 Years of Electrical Systems Taught Me How to Debug Humans"
4. "Voice Journaling: 172K Words of Self-Documentation"
5. "Privacy Isn't a Feature, It's Architecture"
6. "El Paso Border Town → Global AI Research"
7. "Inverse Imposter Syndrome: When You're Too Good to Notice"
8. "The Flow State Reverse-Engineering Protocol"
9. "Why Local-First AI Changes Everything"
10. "Building a Company While Working Full-Time at Schneider"

## Brand Assets Needed

- [ ] Logo variations (light/dark)
- [ ] OG image for social sharing
- [ ] Favicon
- [ ] Email signature
- [ ] Twitter/X banner matching site aesthetic

## Contact

- **Email**: hello@celaya.solutions
- **GitHub**: [@chriscelaya](https://github.com/chriscelaya)
- **Location**: El Paso, TX

---

**Philosophy**: Systems over wrappers. Privacy by architecture. Build in public. Ship the delta of research.
