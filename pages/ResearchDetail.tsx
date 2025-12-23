//----------------------------------------------------------------------------
// File:       ResearchDetail.tsx
// Project:    Celaya Solutions Website
// Created by: Celaya Solutions, 2025
// Author:     Christopher Celaya <chris@chriscelaya.com>
// Description: Individual research project detail page with markdown support
// Version:    1.0.0
// License:    MIT
// Last Update: December 2025
//----------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getItemById } from '../utils/documentationParser';
import { loadLabNoteById, ParsedMarkdown } from '../utils/markdownLoader';

interface ResearchDetailProps {
  id: string;
  onBack: () => void;
}

const ResearchDetail: React.FC<ResearchDetailProps> = ({ id, onBack }) => {
  const item = getItemById(id);
  const [markdownContent, setMarkdownContent] = useState<ParsedMarkdown | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load markdown content for lab notes
    if (item?.category === 'lab-notes') {
      setLoading(true);
      loadLabNoteById(id)
        .then((content) => {
          if (content) {
            setMarkdownContent(content);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error loading markdown:', err);
          setError('Failed to load article content');
          setLoading(false);
        });
    }
  }, [id, item?.category]);

  if (!item) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <button
            onClick={onBack}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            ← Back
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
            <span className="text-sm font-mono uppercase">
              {item.category === 'lab-notes' ? 'Back to Lab Notes' : 'Back to Research'}
            </span>
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
        <div className="prose prose-invert max-w-none">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-zinc-500">Loading article...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-zinc-500 mb-4">{error}</p>
              <p className="text-sm text-zinc-600">{item.excerpt}</p>
            </div>
          ) : markdownContent ? (
            // Render markdown content for lab notes
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 mt-12 text-white">{children}</h1>,
                h2: ({ children }) => <h2 className="text-3xl font-bold mb-4 mt-10 text-white border-b border-white/10 pb-2">{children}</h2>,
                h3: ({ children }) => <h3 className="text-2xl font-bold mb-3 mt-8 text-white">{children}</h3>,
                p: ({ children }) => <p className="mb-6 leading-relaxed text-zinc-300">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-zinc-300">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-zinc-300">{children}</ol>,
                li: ({ children }) => <li className="text-zinc-300">{children}</li>,
                code: ({ children, className }) => {
                  const isInline = !className;
                  return isInline ? (
                    <code className="bg-zinc-900 px-2 py-1 rounded text-sm font-mono text-zinc-300">{children}</code>
                  ) : (
                    <code className="block bg-zinc-950 p-4 rounded-sm overflow-x-auto mb-6 border border-white/10 text-sm font-mono text-zinc-300">{children}</code>
                  );
                },
                blockquote: ({ children }) => <blockquote className="border-l-4 border-white/20 pl-6 italic my-6 text-zinc-400">{children}</blockquote>,
                a: ({ href, children }) => <a href={href} className="text-blue-400 hover:text-blue-300 underline">{children}</a>,
                strong: ({ children }) => <strong className="text-white font-bold">{children}</strong>,
                em: ({ children }) => <em className="italic text-zinc-200">{children}</em>,
              }}
            >
              {markdownContent.content}
            </ReactMarkdown>
          ) : (
            // Fallback placeholder content for non-lab-note items
            <>
              <p className="text-xl text-zinc-300 leading-relaxed mb-12">
                {item.excerpt}
              </p>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;

