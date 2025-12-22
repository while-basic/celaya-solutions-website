//----------------------------------------------------------------------------
// File:       documentationParser.ts
// Project:    celaya-solutions-website
// Created by: Celaya Solutions, 2025
// Author:     Christopher Celaya <chris@chriscelaya.com>
// Description: Parse and structure documentation files for display
// Version:    1.0.0
// License:    MIT
// Last Update: December 2025
//----------------------------------------------------------------------------

export interface DocItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  status?: 'new' | 'active' | 'beta' | null;
  content?: string;
}

/**
 * All documentation items organized by category
 */
export const allDocumentation: DocItem[] = [
  // Research Items
  {
    id: 'clos-privacy-first',
    title: 'CLOS: A Privacy-First Cognitive Operating System',
    category: 'research',
    date: 'December 2024',
    readTime: '15 min',
    excerpt: 'Architectural design for voice-native metacognitive mirror using local LLM inference and Apple ecosystem integration.',
    tags: ['Architecture', 'Privacy', 'iOS', 'CLOS'],
    status: 'active',
  },
  {
    id: 'discovery-crystallizes',
    title: 'The Discovery Crystallizes',
    category: 'research',
    date: 'December 6, 2024',
    readTime: '12 min',
    excerpt: 'Core discovery about cognitive wandering, LLM-assisted prioritization, and finding purpose through systematic self-experimentation.',
    tags: ['Cognitive Science', 'Discovery', 'CLOS'],
    status: 'new',
  },
  {
    id: 'cognitive-research-environment',
    title: 'Personal Cognitive Research Environment',
    category: 'research',
    date: 'December 2024',
    readTime: '10 min',
    excerpt: 'Framework for systematic self-experimentation and cognitive optimization research.',
    tags: ['Research', 'Methodology', 'Framework'],
    status: null,
  },
  {
    id: 'observation-analysis',
    title: 'Observation Analysis: The Core Discovery',
    category: 'research',
    date: 'December 2024',
    readTime: '18 min',
    excerpt: 'Deep analysis of cognitive patterns, flow states, and the mechanisms behind enhanced decision-making.',
    tags: ['Analysis', 'Cognitive Science', 'Patterns'],
    status: null,
  },
  {
    id: 'research-strategy',
    title: 'The Research Strategy for Someone Who Builds First',
    category: 'research',
    date: 'December 2024',
    readTime: '8 min',
    excerpt: 'Bridging the gap between building and researching - a methodology for practitioner-researchers.',
    tags: ['Strategy', 'Methodology', 'Research'],
    status: null,
  },

  // Development Items
  {
    id: 'local-first-ai',
    title: "Why Local-First AI Isn't Just About Privacy",
    category: 'development',
    date: 'December 18, 2024',
    readTime: '8 min',
    excerpt: 'Most people think local LLMs are about avoiding surveillance. That\'s true, but incomplete. The real advantage is latency, cost structure, and owning your cognitive infrastructure.',
    tags: ['Architecture', 'Privacy', 'Economics'],
    status: 'new',
  },
  {
    id: 'claude-optimization',
    title: 'Claude Code Optimization Prototype',
    category: 'development',
    date: 'December 6, 2024',
    readTime: '10 min',
    excerpt: 'Building a lightweight iOS app that captures daily life events through voice memos and feeds them into an LLM for pattern analysis.',
    tags: ['iOS', 'Prototype', 'LLM'],
    status: null,
  },
  {
    id: 'research-lab-stack',
    title: 'Research Lab Tech Stack',
    category: 'development',
    date: 'December 7, 2024',
    readTime: '6 min',
    excerpt: 'Complete technical infrastructure: Apple ecosystem, local AI, distributed systems, and data visualization tools.',
    tags: ['Tech Stack', 'Infrastructure', 'Tools'],
    status: null,
  },
  {
    id: 'mission-control-redesign',
    title: 'Redesign Mission Control',
    category: 'development',
    date: 'December 2024',
    readTime: '7 min',
    excerpt: 'Rethinking the central dashboard for cognitive state monitoring and system control.',
    tags: ['UI/UX', 'Design', 'Dashboard'],
    status: null,
  },
  {
    id: 'on-device-training',
    title: 'Convert Transcripts & Logs Into On-Device Training',
    category: 'development',
    date: 'December 2024',
    readTime: '9 min',
    excerpt: 'Methodology for training personalized models using voice journals and system logs while maintaining privacy.',
    tags: ['ML', 'Privacy', 'Training'],
    status: null,
  },

  // Planning Items
  {
    id: 'biological-self-improving',
    title: 'Biological Self-Improving Code',
    category: 'planning',
    date: 'December 6, 2024',
    readTime: '20 min',
    excerpt: 'Building a Python web app that operates like Christopher\'s cognitive architecture: cross-domain pattern synthesis and continuous self-improvement.',
    tags: ['Architecture', 'AI', 'Planning'],
    status: null,
  },
  {
    id: 'neuraloop',
    title: 'What\'s Neuralink? JK, lemme introduce you to NeuraLoop',
    category: 'planning',
    date: 'December 2024',
    readTime: '12 min',
    excerpt: 'A software-based approach to cognitive enhancement that doesn\'t require brain implants.',
    tags: ['Innovation', 'Concept', 'Future'],
    status: null,
  },
  {
    id: 'vc-problem',
    title: 'The Venture Capital Problem',
    category: 'planning',
    date: 'December 2024',
    readTime: '11 min',
    excerpt: 'Why traditional VC funding models don\'t work for cognitive research and what to do instead.',
    tags: ['Business', 'Strategy', 'Funding'],
    status: null,
  },
  {
    id: 'implementation-protocol',
    title: 'Part IV: Implementation Activation Protocol',
    category: 'planning',
    date: 'December 2024',
    readTime: '14 min',
    excerpt: 'Step-by-step protocol for activating and deploying the CLOS system.',
    tags: ['Protocol', 'Implementation', 'Guide'],
    status: null,
  },

  // Lab Notes / Insights
  {
    id: 'week-1-findings',
    title: 'Building CLOS: Week 1 Findings',
    category: 'lab-notes',
    date: 'December 15, 2024',
    readTime: '12 min',
    excerpt: 'First week of 90-day self-experimentation protocol. Voice capture friction still too high. Speech-to-text accuracy degrades with technical jargon. Switching to hybrid approach.',
    tags: ['CLOS', 'Self-Experimentation', 'Product'],
    status: null,
  },
  {
    id: 'mcp-server',
    title: 'The MCP Server I Needed Didn\'t Exist',
    category: 'lab-notes',
    date: 'December 10, 2024',
    readTime: '6 min',
    excerpt: 'So I built one. Bridging my MPC Key 37, IDE, and 172K sample library. Sometimes the best tools are the ones you make for yourself.',
    tags: ['MCP', 'Music Production', 'Automation'],
    status: null,
  },
  {
    id: 'systems-thinking',
    title: 'Systems Thinking: Electrical ↔ Software ↔ Cognitive',
    category: 'lab-notes',
    date: 'December 5, 2024',
    readTime: '15 min',
    excerpt: 'The debugging patterns I learned in datacenters directly translate to debugging human attention patterns. Here\'s how systems-level thinking bridges three seemingly different domains.',
    tags: ['Systems Thinking', 'Cross-Domain', 'Philosophy'],
    status: null,
  },
  {
    id: 'cognitive-drift',
    title: 'Detecting Cognitive Drift 23-47 Minutes Early',
    category: 'lab-notes',
    date: 'December 2024',
    readTime: '10 min',
    excerpt: 'Voice journal LLM analysis reveals cognitive drift precursors appear 23-47 minutes before conscious awareness, detectable via speech pattern changes.',
    tags: ['Research', 'Discovery', 'Patterns'],
    status: null,
  },
];

/**
 * Get all items by category
 */
export function getItemsByCategory(category: string): DocItem[] {
  return allDocumentation.filter((item) => item.category === category);
}

/**
 * Get item by ID
 */
export function getItemById(id: string): DocItem | undefined {
  return allDocumentation.find((item) => item.id === id);
}

/**
 * Get recent items (last N items)
 */
export function getRecentItems(count: number = 4): DocItem[] {
  return allDocumentation.slice(0, count);
}

