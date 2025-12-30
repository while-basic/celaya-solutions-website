
import React, { useState, useMemo } from 'react';
import { Microscope, Activity, Cpu, Shield, Brain, ArrowUpRight, Search, Filter, Terminal, Zap } from 'lucide-react';

interface Note {
  id: string;
  date: string;
  category: 'Cognitive' | 'Industrial' | 'Inference' | 'Privacy' | 'Biometrics' | 'Hardware';
  title: string;
  finding: string;
  impact: 'low' | 'medium' | 'high';
  tags: string[];
}

const LabNotes: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const notes: Note[] = [
    {
      id: "OBS-045",
      date: "2024.12.02",
      category: "Industrial",
      title: "PLC Logic vs. Neural Net Latency",
      finding: "Synchronizing deterministic PLC cycle times with stochastic LLM inference requires a 50ms buffer to prevent actuator jitter in hardware-in-the-loop tests.",
      impact: "high",
      tags: ["Industrial", "Latency", "PLC"]
    },
    {
      id: "OBS-042",
      date: "2024.11.12",
      category: "Cognitive",
      title: "HRV vs. Context Switching",
      finding: "Sustained high-frequency heart rate variability (HRV) correlates with a 40% reduction in executive drift during deep-work sprints using the CLOS environment.",
      impact: "high",
      tags: ["HealthKit", "Attention", "CLOS"]
    },
    {
      id: "OBS-039",
      date: "2024.10.28",
      category: "Inference",
      title: "Local Llama 3.2 Performance",
      finding: "Quantized 8-bit weights on M3 Max unified memory achieve sub-20ms first-token latency in air-gapped environments without thermal throttling.",
      impact: "high",
      tags: ["Apple Silicon", "Llama", "Edge AI"]
    },
    {
      id: "OBS-035",
      date: "2024.10.15",
      category: "Privacy",
      title: "Differential Privacy Decay",
      finding: "Observed semantic loss in knowledge graph retrieval when noise injections exceed 0.15 epsilon thresholds. Tuning required for user-specific context preservation.",
      impact: "medium",
      tags: ["Encryption", "RAG", "Privacy"]
    },
    {
      id: "OBS-031",
      date: "2024.09.22",
      category: "Biometrics",
      title: "Sleep-Wake Synthesis",
      finding: "REM cycle duration from previous 48 hours is the primary predictor of successful agentic tool-use delegation accuracy in CLOS v0.1.",
      impact: "medium",
      tags: ["Sleep", "Predictive", "Agents"]
    },
    {
      id: "OBS-028",
      date: "2024.09.05",
      category: "Hardware",
      title: "Haptic Refocus Triggers",
      finding: "Wrist-based haptic prompts (2Hz) are 3x more effective than audio alerts for breaking attention-drift loops without spiking cortisol levels.",
      impact: "high",
      tags: ["Haptics", "UX", "Attention"]
    },
    {
      id: "OBS-025",
      date: "2024.08.20",
      category: "Inference",
      title: "Vector DB Persistence",
      finding: "Local-first vector indexing reduces energy overhead by 60% compared to REST-based cloud archival for high-frequency journaling.",
      impact: "medium",
      tags: ["Storage", "Green AI", "Local-First"]
    },
    {
      id: "OBS-019",
      date: "2024.07.12",
      category: "Industrial",
      title: "Hydraulic Pressure Anomaly Detection",
      finding: "Transformer-based sequence modeling identifies valve failure signatures 48 hours before physical sensors trigger standard high-pressure alarms.",
      impact: "high",
      tags: ["Predictive Maintenance", "Industrial AI"]
    }
  ];

  const categories = ['All', ...Array.from(new Set(notes.map(n => n.category)))];

  const filteredNotes = useMemo(() => {
    return notes.filter(note => {
      const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           note.finding.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || note.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Cognitive': return <Brain className="w-4 h-4" />;
      case 'Industrial': return <Zap className="w-4 h-4" />;
      case 'Inference': return <Cpu className="w-4 h-4" />;
      case 'Privacy': return <Shield className="w-4 h-4" />;
      case 'Biometrics': return <Activity className="w-4 h-4" />;
      case 'Hardware': return <Microscope className="w-4 h-4" />;
      default: return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <div id="lab-notes" className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-16 border-l border-white/10 pl-8">
        <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Internal Research Repository</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Lab Notes</h1>
        <p className="text-xl text-zinc-400 font-light max-w-3xl">
          A persistent log of raw observations, technical benchmarks, and cross-domain findings emerging from our industrial and cognitive systems research.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest border transition-all rounded-sm
                ${activeCategory === cat 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-zinc-500 border-white/10 hover:border-white/30'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
          <input
            type="text"
            placeholder="Search observations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-950 border border-white/10 rounded-sm py-2 pl-10 pr-4 text-xs font-mono text-zinc-300 focus:outline-none focus:border-white/30 transition-all"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div key={note.id} className="group glass-card border-white/5 p-8 rounded-sm hover:border-white/20 transition-all flex flex-col justify-between relative overflow-hidden h-full">
              {/* Subtle Animated Background Pulse */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3 text-zinc-500">
                    <div className="p-2 bg-zinc-900 rounded-sm border border-white/5">
                      {getIcon(note.category)}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest">{note.category}</span>
                  </div>
                  <div className="text-[10px] font-mono text-zinc-700">{note.date}</div>
                </div>

                <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">{note.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors mb-6">
                  {note.finding}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {note.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 font-bold">{note.id}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-[9px] font-mono text-zinc-800 uppercase font-bold">Signal:</span>
                  <div className="flex space-x-0.5">
                    {[1, 2, 3].map(i => (
                      <div 
                        key={i} 
                        className={`w-1 h-3 rounded-full ${
                          note.impact === 'high' ? 'bg-emerald-500' : 
                          note.impact === 'medium' && i < 3 ? 'bg-blue-500' : 
                          note.impact === 'low' && i < 2 ? 'bg-zinc-600' : 'bg-zinc-900'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4 text-zinc-600" />
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-24 text-center border border-dashed border-white/5 rounded-sm">
            <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">No matching observations found in signal history.</p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="mt-20 p-8 border border-white/5 bg-zinc-950/50 rounded-sm">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-mono uppercase text-zinc-500 tracking-widest">Live Sync Status: Optimized</span>
        </div>
        <p className="font-mono text-[10px] text-zinc-500 leading-relaxed uppercase tracking-wider">
          All findings are anonymized and staged for the Jan 2026 Public Launch. Continuous telemetry from industrial nodes and CLOS alpha instances is processed locally before archival.
        </p>
      </div>
    </div>
  );
};

export default LabNotes;
