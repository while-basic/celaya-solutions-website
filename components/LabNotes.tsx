//----------------------------------------------------------------------------
// File:       LabNotes.tsx
// Project:    Celaya Solutions Website
// Created by: Celaya Solutions, 2025
// Author:     Christopher Celaya <chris@chriscelaya.com>
// Description: Lab notes section displaying research blog posts and updates
// Version:    1.0.0
// License:    MIT
// Last Update: December 2025
//----------------------------------------------------------------------------

import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { useRouter } from './Router';
import { getItemsByCategory } from '../utils/documentationParser';

const LabNotes: React.FC = () => {
  let navigate: ((route: { type: 'lab-note-detail'; id: string }) => void) | null = null;
  
  try {
    const router = useRouter();
    navigate = router.navigate;
  } catch (error) {
    console.error('Router context not available:', error);
  }
  
  // Get lab notes from documentation parser
  const allLabNotes = getItemsByCategory('lab-notes');
  
  // Get the 4 most recent lab notes for preview
  const notes = allLabNotes.slice(0, 4);

  const handleNoteClick = (id: string) => {
    try {
      console.log('Lab note clicked:', id, 'Navigate available:', !!navigate);
      if (navigate) {
        navigate({ type: 'lab-note-detail', id });
      } else {
        console.error('Navigate function not available - Router context may not be set up correctly');
        // Fallback: try to navigate using window location
        window.location.href = `#lab-note-${id}`;
      }
    } catch (error) {
      console.error('Error navigating to lab note:', error);
    }
  };

  // If no notes, show message
  if (notes.length === 0) {
    return (
      <section id="lab-notes" className="py-32 px-6 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-zinc-500">No lab notes available.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="lab-notes" className="py-32 px-6 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">
              Lab Notes
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Experiments. Insights. <br/>
              <span className="text-zinc-600">Failures.</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm">
            Real-time documentation of what we're learning. Published weekly. Unfiltered thinking from the lab.
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {notes.map((note) => (
            <article 
              key={note.id}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleNoteClick(note.id);
              }}
              className="group glass-card p-8 rounded-sm border border-white/5 hover:border-white/20 transition-all cursor-pointer relative z-10"
              role="button"
              tabIndex={0}
              aria-label={`Read ${note.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleNoteClick(note.id);
                }
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3 text-[10px] font-mono text-zinc-600">
                  <Clock className="w-3 h-3" />
                  <span>{note.date}</span>
                  <span>•</span>
                  <span>{note.readTime}</span>
                </div>
                {note.status === 'new' && (
                  <span className="text-[10px] font-mono px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded uppercase">
                    New
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                {note.title}
              </h3>

              <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                {note.excerpt}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {note.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-[10px] font-mono px-2 py-1 bg-zinc-900 text-zinc-600 rounded hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <ArrowRight className="w-4 h-4 text-zinc-700 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate({ type: 'lab-notes' })}
            className="inline-flex items-center space-x-2 px-6 py-3 border border-white/10 hover:border-white/30 text-sm font-mono uppercase transition-all"
          >
            <span>View All Lab Notes</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LabNotes;

