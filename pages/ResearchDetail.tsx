//----------------------------------------------------------------------------
// File:       ResearchDetail.tsx
// Project:    celaya-solutions-website
// Created by: Celaya Solutions, 2025
// Author:     Christopher Celaya <chris@chriscelaya.com>
// Description: Individual research project detail page
// Version:    1.0.0
// License:    MIT
// Last Update: December 2025
//----------------------------------------------------------------------------

import React from 'react';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { getItemById, DocItem } from '../utils/documentationParser';

interface ResearchDetailProps {
  id: string;
  onBack: () => void;
}

const ResearchDetail: React.FC<ResearchDetailProps> = ({ id, onBack }) => {
  const item = getItemById(id);

  if (!item) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Research Not Found</h1>
          <button
            onClick={onBack}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            ← Back to Research
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/5 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors mb-8"
            data-test="back-button"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-mono uppercase">Back to Research</span>
          </button>

          <div className="flex items-center space-x-3 mb-6">
            {item.status && (
              <span
                className={`text-[10px] font-mono px-2 py-1 rounded uppercase ${
                  item.status === 'active'
                    ? 'bg-emerald-500/10 text-emerald-500'
                    : item.status === 'beta'
                    ? 'bg-blue-500/10 text-blue-500'
                    : 'bg-zinc-800 text-zinc-500'
                }`}
              >
                {item.status}
              </span>
            )}
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
              {item.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{item.title}</h1>

          <div className="flex items-center space-x-6 text-sm text-zinc-500">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{item.date}</span>
            </div>
            <span>•</span>
            <span>{item.readTime} read</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-mono px-3 py-1 bg-zinc-900 text-zinc-500 rounded hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-invert prose-zinc max-w-none">
          <p className="text-xl text-zinc-300 leading-relaxed mb-12">
            {item.excerpt}
          </p>

          {/* Placeholder for actual content */}
          <div className="space-y-8 text-zinc-400 leading-relaxed">
            <p>
              This research explores the intersection of cognitive science, AI-augmented
              development, and systematic self-experimentation. Through the CLOS project,
              we're building tools and methodologies for understanding and enhancing human
              cognitive performance.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Background</h2>
            <p>
              The journey began with a simple observation: traditional productivity tools
              don't account for the complexity of human cognition. They treat the mind as a
              simple input-output system, ignoring the rich patterns of attention, flow
              states, and cognitive drift that characterize actual human thinking.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Methodology</h2>
            <p>
              Our approach combines voice journaling, local LLM analysis, and systematic
              pattern recognition. By capturing cognitive states in real-time and analyzing
              them with AI, we can identify patterns that would be invisible to conscious
              introspection alone.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Key Findings</h2>
            <p>
              Early results show that cognitive drift precursors appear 23-47 minutes before
              conscious awareness. Speech pattern analysis reveals subtle changes in
              vocabulary, sentence structure, and topic coherence that correlate with
              decreased focus and productivity.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">Next Steps</h2>
            <p>
              We're expanding the research to include physiological markers (via HealthKit),
              environmental factors, and long-term pattern tracking. The goal is to build a
              comprehensive model of personal cognitive optimization that others can adapt
              to their own needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;

