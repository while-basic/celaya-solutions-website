
import React from 'react';
import { FileText, Beaker, TrendingUp, ExternalLink } from 'lucide-react';
import { useRouter } from './components/Router';
import { getItemsByCategory } from './utils/documentationParser';

const Research: React.FC = () => {
  const { navigate } = useRouter();
  const researchItems = getItemsByCategory('research').slice(0, 3);

  const publications = [
    {
      title: "CLOS: A Privacy-First Cognitive Operating System",
      type: "Technical Specification",
      date: "December 2024",
      status: "In Progress",
      description: "Architectural design for voice-native metacognitive mirror using local LLM inference and Apple ecosystem integration.",
      link: "#",
      tags: ["Architecture", "Privacy", "iOS"]
    },
    {
      title: "90-Day Self-Experimentation Protocol",
      type: "Research Log",
      date: "Ongoing",
      status: "Active",
      description: "Structured voice memo protocol to establish cognitive baselines and reverse-engineer personal flow states through quantified self-tracking.",
      link: "#",
      tags: ["Cognitive Science", "QS", "Flow States"]
    },
    {
      title: "MCP Server for Music Production",
      type: "Open Source Tool",
      date: "December 2024",
      status: "Beta",
      description: "Python-based Model Context Protocol server bridging IDE, MIDI controllers, and 172K+ sample library for automated expansion pack creation.",
      link: "#",
      tags: ["MCP", "Audio", "Automation"]
    }
  ];

  const experiments = [
    {
      title: "Industrial Systems → Cognitive Systems",
      metric: "Cross-Domain Transfer",
      description: "Applying electrical infrastructure thinking to software architecture for cognitive enhancement systems.",
      insight: "Systems-level debugging patterns from datacenter work directly translate to debugging human attention patterns."
    },
    {
      title: "Voice Journal LLM Analysis",
      metric: "172K+ words processed",
      description: "Using custom LLM pipelines to identify cognitive patterns and flow state triggers from daily voice memos.",
      insight: "Cognitive drift precursors appear 23-47 minutes before conscious awareness, detectable via speech pattern changes."
    },
    {
      title: "On-Device vs Cloud Inference",
      metric: "Privacy/Performance Trade-offs",
      description: "Benchmarking Llama.cpp, CoreML, and cloud APIs for real-time cognitive pattern detection.",
      insight: "95% of CLOS functionality achievable with on-device processing, eliminating surveillance economics."
    }
  ];

  return (
    <section id="research" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-sm bg-zinc-900 border border-white/10 flex items-center justify-center">
              <Beaker className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em]">Research Lab</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Building in public. <br/>
            <span className="text-zinc-600">Sharing the process.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            We document our experiments, publish our findings, and open-source our tools. Research transparency over stealth mode.
          </p>
        </div>

        {/* Active Research */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">Active Research</h3>
            <button 
              onClick={() => navigate({ type: 'lab-notes' })}
              className="text-xs font-mono uppercase text-zinc-500 hover:text-white transition-colors flex items-center space-x-2"
              data-test="view-all-research"
            >
              <span>View All Research</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => navigate({ type: 'research-detail', id: item.id })}
                className="group glass-card p-6 rounded-sm border border-white/5 hover:border-white/20 transition-all cursor-pointer"
                data-test={`research-${item.id}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <FileText className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                  {item.status && (
                    <span className={`text-[10px] font-mono px-2 py-1 rounded uppercase ${
                      item.status === 'active' ? 'bg-emerald-500/10 text-emerald-500' :
                      item.status === 'beta' ? 'bg-blue-500/10 text-blue-500' :
                      'bg-zinc-800 text-zinc-500'
                    }`}>
                      {item.status}
                    </span>
                  )}
                </div>

                <h4 className="font-bold mb-2 group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-xs text-zinc-500 mb-4">{item.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-1 bg-zinc-900 text-zinc-600 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-700">
                  <span>{item.readTime}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Experiments */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-8">Current Experiments</h3>
          
          <div className="space-y-4">
            {experiments.map((exp, idx) => (
              <div 
                key={idx}
                className="glass-card p-8 rounded-sm border border-white/5 hover:bg-white/[0.02] transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-3">
                      <h4 className="text-xl font-bold">{exp.title}</h4>
                      <span className="text-xs font-mono text-zinc-600 px-2 py-1 bg-zinc-900 rounded">
                        {exp.metric}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 mb-4">{exp.description}</p>
                    <div className="flex items-start space-x-2 p-4 bg-zinc-950/50 border border-white/5 rounded">
                      <TrendingUp className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-zinc-500">
                        <span className="text-white font-medium">Key Insight:</span> {exp.insight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
