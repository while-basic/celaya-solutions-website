
import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { useRouter } from './components/Router';
import { getItemsByCategory, getRecentItems } from './utils/documentationParser';

const LabNotes: React.FC = () => {
  const { navigate } = useRouter();
  const labNoteItems = getItemsByCategory('lab-notes');
  const recentItems = getRecentItems(4);

  const notes = [
    {
      title: "Why Local-First AI Isn't Just About Privacy",
      date: "December 18, 2024",
      readTime: "8 min",
      excerpt: "Most people think local LLMs are about avoiding surveillance. That's true, but incomplete. The real advantage is latency, cost structure, and owning your cognitive infrastructure.",
      tags: ["Architecture", "Privacy", "Economics"],
      status: "new"
    },
    {
      title: "Building CLOS: Week 1 Findings",
      date: "December 15, 2024",
      readTime: "12 min",
      excerpt: "First week of 90-day self-experimentation protocol. Voice capture friction still too high. Speech-to-text accuracy degrades with technical jargon. Switching to hybrid approach.",
      tags: ["CLOS", "Self-Experimentation", "Product"],
      status: null
    },
    {
      title: "The MCP Server I Needed Didn't Exist",
      date: "December 10, 2024",
      readTime: "6 min",
      excerpt: "So I built one. Bridging my MPC Key 37, IDE, and 172K sample library. Sometimes the best tools are the ones you make for yourself.",
      tags: ["MCP", "Music Production", "Automation"],
      status: null
    },
    {
      title: "Systems Thinking: Electrical ↔ Software ↔ Cognitive",
      date: "December 5, 2024",
      readTime: "15 min",
      excerpt: "The debugging patterns I learned in datacenters directly translate to debugging human attention patterns. Here's how systems-level thinking bridges three seemingly different domains.",
      tags: ["Systems Thinking", "Cross-Domain", "Philosophy"],
      status: null
    }
  ];

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
          {recentItems.map((item) => (
            <article 
              key={item.id}
              onClick={() => navigate({ type: 'lab-note-detail', id: item.id })}
              className="group glass-card p-8 rounded-sm border border-white/5 hover:border-white/20 transition-all cursor-pointer"
              data-test={`lab-note-${item.id}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3 text-[10px] font-mono text-zinc-600">
                  <Clock className="w-3 h-3" />
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.readTime}</span>
                </div>
                {item.status === 'new' && (
                  <span className="text-[10px] font-mono px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded uppercase">
                    New
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                {item.excerpt}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
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
            data-test="view-all-lab-notes"
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
