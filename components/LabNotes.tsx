
import React, { useState, useMemo } from 'react';
import { Microscope, Activity, Cpu, Shield, Brain, ArrowUpRight, Search, Terminal, Zap } from 'lucide-react';

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
      finding: "Synchronizing deterministic PLC cycle times with stochastic LLM inference requires a 50ms buffer to prevent actuator jitter.",
      impact: "high",
      tags: ["Industrial", "Latency", "PLC"]
    },
    {
      id: "OBS-042",
      date: "2024.11.12",
      category: "Cognitive",
      title: "HRV vs. Context Switching",
      finding: "Sustained high-frequency heart rate variability correlates with a 40% reduction in executive drift during deep-work sprints.",
      impact: "high",
      tags: ["HealthKit", "Attention", "CLOS"]
    },
    {
      id: "OBS-039",
      date: "2024.10.28",
      category: "Inference",
      title: "Local Llama 3.2 Performance",
      finding: "Quantized 8-bit weights on M3 Max achieve sub-20ms first-token latency in air-gapped environments.",
      impact: "high",
      tags: ["Apple Silicon", "Llama", "Edge AI"]
    },
    {
      id: "OBS-035",
      date: "2024.10.15",
      category: "Privacy",
      title: "Differential Privacy Decay",
      finding: "Observed semantic loss in knowledge graph retrieval when noise injections exceed 0.15 epsilon thresholds.",
      impact: "medium",
      tags: ["Encryption", "RAG", "Privacy"]
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
    <div id="lab-notes-container" className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-16 border-l border-white/10 pl-8">
        <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Internal Repository</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Lab Notes</h1>
        <p className="text-xl text-zinc-400 font-light max-w-3xl">
          A persistent log of raw observations, technical benchmarks, and cross-domain findings emerging from our research labs.
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
        {filteredNotes.map((note) => (
          <div key={note.id} className="group glass-card border-white/5 p-8 rounded-sm hover:border-white/20 transition-all flex flex-col justify-between relative overflow-hidden h-full">
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
        ))}
      </div>
    </div>
  );
};

export default LabNotes;
