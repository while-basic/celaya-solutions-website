//----------------------------------------------------------------------------
// File:       documentationLoader.ts
// Project:    celaya-solutions-website
// Created by: Celaya Solutions, 2025
// Author:     Christopher Celaya <chris@chriscelaya.com>
// Description: Loads and indexes documentation files for chatbot context
// Version:    1.0.0
// License:    MIT
// Last Update: December 2025
//----------------------------------------------------------------------------

export interface DocumentationFile {
  path: string;
  category: string;
  title: string;
  content: string;
}

/**
 * Documentation structure for the chatbot
 * This provides context about the CLOS system and research
 */
export const documentationContext = `
# CLOS - Christopher Life Operating System Documentation

## Overview
CLOS is a personal cognitive research environment for systematic self-experimentation, flow state optimization, and computational phenomenology research.

## Key Research Areas
- Flow states and cognitive optimization
- Human-AI augmented cognition
- Computational phenomenology
- Self-experimental research methodologies
- Pattern recognition in cognitive processes

## Documentation Categories

### Research
Core research documents, cognitive analysis reports, and discovery notes including:
- Research Glossary and terminology
- Cognitive Analysis Reports
- Observation Analysis
- Discovery Moments
- Psychological Analysis Documents
- LLM Psychoanalysis Prompts
- Research Strategy Documents

### Development
Technical implementation notes, features, and development tasks:
- Research Lab Tech Stack (Apple + Local AI)
- Code Optimization Prototypes
- Feature Implementation Notes
- Data Collection Systems
- UI/UX Improvements
- System Architecture Documents

### Prompts
AI prompts, instructions, and interaction protocols:
- CLOS Prompt (Core System Prompt)
- Meta Extraction Prompts
- Verbal Context Entry Blueprint
- Meta-Cognitive Safety Protocols
- Claude Interaction Instructions

### Context Entries
Voice journal entries and contextual recordings:
- Pre/Post Studio Entries
- Time-based Context Entries
- Cognitive State Recordings

### Planning
Project planning, strategic initiatives, and future concepts:
- Implementation Protocols
- Biological Self-Improving Code
- Venture Capital Strategy
- Innovation Concepts (NeuraLoop, etc.)
- Feature Roadmaps

### Collaboration
Working guides and collaboration documentation:
- Working with Chris Guide
- Advice and Feedback Documents

### References
Glossaries, terminology, and reference materials:
- Coined Terms
- Research Terminology
- Definition Frameworks

## Research Goals
1. Reverse-engineer cognitive processes - Systematic decomposition of cognitive architecture
2. Mathematical formalization - Create quantitative models of flow states and cognitive patterns
3. Replicable frameworks - Develop methodologies others can use
4. Intellectual contribution - Achieve recognition through academic citation and research impact

## Project Philosophy
- Build in Public
- Research-driven development
- Apple ecosystem + Local AI focus
- Located in El Paso, TX

## About Celaya Solutions
Celaya Solutions is a research lab focused on cognitive optimization, AI-augmented development, and computational phenomenology. The team builds tools and systems for understanding and enhancing human cognitive performance through systematic experimentation and data-driven approaches.
`;

/**
 * Get the documentation context for the chatbot
 */
export function getDocumentationContext(): string {
  return documentationContext;
}

/**
 * Format a user query with documentation context
 */
export function formatQueryWithContext(userQuery: string): string {
  return `You are a friendly, concise assistant for Celaya Solutions and the CLOS project. 

IMPORTANT GUIDELINES:
- Keep responses SHORT and conversational (2-4 sentences max unless asked for details)
- Be warm and approachable, not overwhelming
- Only provide detailed explanations if specifically asked
- Use natural, casual language
- If unsure, it's okay to say "I can tell you more about that if you'd like"
- Avoid bullet points and long lists unless requested

Documentation context:
${documentationContext}

User: ${userQuery}

Respond naturally and briefly. You're here to help, not to info-dump.`;
}

