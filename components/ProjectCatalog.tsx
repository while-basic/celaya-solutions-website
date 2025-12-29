
import React, { useState } from 'react';
import { Box, ExternalLink, ChevronRight, Activity, Terminal, Shield, Brain, X, Cpu, Globe, Database, Code, ArrowRight, Mic, Layout, Music, Bot, Share2 } from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ProjectEntry {
  id: string;
  name: string;
  category: string[];
  status: 'Active Dev' | 'Pre-Launch' | 'Staged';
  icon: React.ReactNode;
  description: string;
  metrics: string;
  technicalSpecs: string[];
  architecture: string;
  roadmap: string[];
  features?: { title: string; description: string; icon: React.ReactNode }[];
}

const chartData = [
  { time: '00:00', load: 12, awareness: 20 },
  { time: '04:00', load: 8, awareness: 15 },
  { time: '08:00', load: 45, awareness: 60 },
  { time: '12:00', load: 78, awareness: 85 },
  { time: '16:00', load: 65, awareness: 90 },
  { time: '20:00', load: 34, awareness: 75 },
  { time: '23:59', load: 15, awareness: 40 },
];

const ProjectCatalog: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(null);

  const projects: ProjectEntry[] = [
    { 
      id: '01', 
      name: 'CLOS', 
      category: ['Cognitive OS', 'Agentic Framework'], 
      status: 'Pre-Launch', 
      icon: <Brain className="w-5 h-5" />,
      metrics: "37 Specialized Agents",
      description: "The Cognitive Life Operating System. A biometric-integrated agentic layer designed to mirror and optimize executive function. Features 37 specialized agents named after algorithm founders to manage diverse cognitive workflows.",
      technicalSpecs: ["37 LLM Agents (Founder Series)", "HealthKit Biometric Fusion", "Real-time Flow State Detection", "SwiftUI / iCloud Encrypted Sync"],
      architecture: "Decentralized agentic swarm managed by a primary executive 'mirror' node.",
      roadmap: ["v0.1: Biometric-Informed Reflection", "v0.2: Agent Swarm Coordination", "Jan 2026: Public Release"],
      features: [
        { title: "Flow Detection", description: "Real-time biometric analysis to protect and sustain deep work states.", icon: <Activity className="w-4 h-4" /> },
        { title: "Founder Agents", description: "37 distinct cognitive personas optimized for specific reasoning modes.", icon: <Bot className="w-4 h-4" /> },
        { title: "Voice Journaling", description: "NLP-driven analysis pipeline for structured thought capture.", icon: <Mic className="w-4 h-4" /> },
        { title: "Privacy First", description: "On-device processing with zero-knowledge biometric storage.", icon: <Shield className="w-4 h-4" /> }
      ]
    },
    { 
      id: '02', 
      name: 'Robotics Pipeline', 
      category: ['Robotics', 'Spatial AI'], 
      status: 'Active Dev', 
      icon: <Activity className="w-5 h-5" />,
      metrics: "~20,000 VR Training Files",
      description: "Transforming high-fidelity VR movement data (Beat Saber) into humanoid robotics training datasets. Mapping spatial rhythms to joint-velocity coordinate transformations for MuJoCo and PyBullet simulations.",
      technicalSpecs: ["MuJoCo / PyBullet Integration", "Three.js Spatial Simulator", "Coordinate Transform: VR → Joint Space", "Mobile Simulation Previews"],
      architecture: "Data ingestion pipeline translating .dat/json movement files into robotic control primitives.",
      roadmap: ["Phase 1: 20k File Processing", "Phase 2: Humanoid Simulation Model", "Phase 3: Real-world Hardware Mapping"]
    },
    { 
      id: '03', 
      name: 'Music MCP Servers', 
      category: ['Automation', 'Audio'], 
      status: 'Active Dev', 
      icon: <Music className="w-5 h-5" />,
      metrics: "172,737 Audio Samples",
      description: "Artist C-Cell's custom Model Context Protocol (MCP) servers for music production. Integrating an IDE + MIDI controller workflow with a massive, structured sample library.",
      technicalSpecs: ["MCP Server Architecture", "Python-driven Sample Management", "MIDI Hardware Handshake", "Ableton/Logic Integration Tools"],
      architecture: "Headless management node acting as a bridge between LLMs and audio production software.",
      roadmap: ["Core: Library Indexing", "Beta: AI-Co-Production Sync", "Sunday Sessions: Performance Test"]
    },
    { 
      id: '04', 
      name: 'Neural Child', 
      category: ['Research', 'Developmental AI'], 
      status: 'Staged', 
      icon: <Share2 className="w-5 h-5" />,
      metrics: "5 Interacting Networks",
      description: "An exploration of developmental AI through the interaction of five distinct neural networks. Researching emergent intelligence and cognitive growth stages within constrained digital environments.",
      technicalSpecs: ["Multi-Network Topology", "Reinforcement Learning Stages", "Emergent Strategy Monitoring", "Local GPU Training Cluster"],
      architecture: "A hierarchy of learning nodes designed to simulate developmental growth phases.",
      roadmap: ["Prototype: Base Connectivity", "Alpha: Strategic Emergence", "Release: Research Findings"]
    },
    { 
      id: '05', 
      name: 'Cognitive Artifacts', 
      category: ['Framework', 'Prompt Engineering'], 
      status: 'Staged', 
      icon: <Terminal className="w-5 h-5" />,
      metrics: "Production Reasoning Suite",
      description: "An advanced framework for systematic LLM interaction. Utilizing cognitive artifacts and prompt engineering to trigger higher-order reasoning and consistent logic paths in complex problem solving.",
      technicalSpecs: ["Artifact-Based Prompting", "Logical Entailment Trees", "Systematic Reasoning Triggers", "IDE Extension Suite"],
      architecture: "Modular reasoning triggers that can be injected into any agentic workflow.",
      roadmap: ["Core: Artifact Library", "Integration: VS Code Extension", "Jan 2026: Lab-wide Rollout"]
    },
  ];

  return (
    <section id="catalog" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Core Research Projects</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Project Registry</h2>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-nowrap">Active Development</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col p-8 glass-card rounded-sm border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-zinc-900 border border-white/5 rounded-sm text-zinc-500 group-hover:text-white group-hover:border-white/20 transition-all">
                  {project.icon}
                </div>
                <div className={`px-2 py-0.5 rounded-full border text-[9px] font-mono uppercase tracking-widest ${
                  project.status === 'Active Dev' 
                    ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' 
                    : 'bg-zinc-800/30 border-white/5 text-zinc-600'
                }`}>
                  {project.status}
                </div>
              </div>

              <div className="mb-4">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">{project.metrics}</span>
                <h3 className="text-2xl font-bold tracking-tight group-hover:text-white transition-colors">
                  {project.name}
                </h3>
              </div>
              
              <p className="text-xs text-zinc-500 line-clamp-3 mb-6 leading-relaxed group-hover:text-zinc-400 transition-colors">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                {project.category.map((cat, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-0.5 text-[9px] font-mono rounded-sm border border-white/5 bg-white/[0.02] text-zinc-500 group-hover:text-zinc-400"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-3 h-3 text-zinc-600" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
          
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] glass-card border-white/10 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(255,255,255,0.05)] animate-in zoom-in-95 duration-500">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 p-2 text-zinc-500 hover:text-white transition-colors bg-white/5 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column */}
            <div className="w-full md:w-3/5 p-8 md:p-16 overflow-y-auto border-r border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
              <div className="flex items-center space-x-4 mb-12">
                <div className="p-4 bg-white text-black rounded-sm shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{selectedProject.name}</h3>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">{selectedProject.metrics}</span>
                    <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
                    <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.2em]">{selectedProject.status}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <section>
                  <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4">Core Research Overview</h4>
                  <p className="text-xl text-zinc-300 leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                </section>

                {/* Specific Visuals for CLOS */}
                {selectedProject.name === 'CLOS' && (
                  <section className="p-8 border border-white/5 bg-zinc-900/30 rounded-sm">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Cognitive Load Simulation</h4>
                      <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Active Mirroring</span>
                    </div>
                    <div className="h-48 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                          <defs>
                            <linearGradient id="colorAware" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="time" stroke="#333" fontSize={10} axisLine={false} tickLine={false} />
                          <Tooltip 
                            contentStyle={{ background: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', fontSize: '10px' }}
                            itemStyle={{ color: '#fff' }}
                          />
                          <Area type="monotone" dataKey="awareness" stroke="#fff" fillOpacity={1} fill="url(#colorAware)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </section>
                )}

                {selectedProject.features && (
                  <section>
                    <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-6">System Capabilities</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.features.map((feat, i) => (
                        <div key={i} className="p-4 border border-white/5 bg-white/[0.02] rounded-sm">
                          <div className="flex items-center space-x-3 mb-3 text-white">
                            {feat.icon}
                            <span className="text-sm font-bold">{feat.title}</span>
                          </div>
                          <p className="text-xs text-zinc-500 leading-relaxed">{feat.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                <section>
                  <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4">Architecture Detail</h4>
                  <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-sm font-mono text-sm text-zinc-400 leading-relaxed italic">
                    "{selectedProject.architecture}"
                  </div>
                </section>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-2/5 bg-zinc-950 p-8 md:p-12 overflow-y-auto">
              <div className="space-y-12">
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <Cpu className="w-4 h-4 text-zinc-500" />
                    <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Tech Stack Inventory</h4>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedProject.technicalSpecs.map((spec, i) => (
                      <div key={i} className="flex items-center justify-between p-3 border border-white/5 bg-white/[0.01] rounded-sm">
                        <span className="text-[10px] font-mono text-zinc-400">{spec}</span>
                        <Code className="w-3 h-3 text-zinc-800" />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-6">Strategic Milestone Roadmap</h4>
                  <div className="space-y-4">
                    {selectedProject.roadmap.map((step, i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-mono text-zinc-600">
                          0{i + 1}
                        </div>
                        <span className="text-xs text-zinc-400">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-12 border-t border-white/5">
                  <div className="p-6 border border-white/10 bg-white/[0.02] rounded-sm mb-6">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase mb-2">Internal Project Reference</p>
                    <p className="text-xs text-zinc-400 leading-relaxed">This project is part of our production-grade research cycle. Public beta scheduled for early 2026.</p>
                  </div>
                  <button className="w-full py-4 bg-white text-black text-[10px] font-mono uppercase font-bold tracking-[0.2em] flex items-center justify-center space-x-2 hover:bg-zinc-200 transition-colors">
                    <span>Initialize Researcher Sync</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectCatalog;
