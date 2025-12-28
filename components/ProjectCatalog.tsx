
import React, { useState } from 'react';
import { Box, ExternalLink, ChevronRight, Activity, Terminal, Shield, Brain, X, Cpu, Globe, Database, Code, ArrowRight } from 'lucide-react';

interface ProjectEntry {
  id: string;
  name: string;
  category: string[];
  status: 'In Dev' | 'Internal' | 'No';
  icon: React.ReactNode;
  description: string;
  technicalSpecs: string[];
  architecture: string;
  roadmap: string[];
}

const ProjectCatalog: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectEntry | null>(null);

  const projects: ProjectEntry[] = [
    { 
      id: '1', 
      name: 'AI Beat Mapper', 
      category: ['Framework'], 
      status: 'In Dev', 
      icon: <Activity className="w-5 h-5" />,
      description: "A high-precision temporal alignment engine for mapping complex auditory rhythms to visual state machines. Used in reactive multi-sensory environments.",
      technicalSpecs: ["Fast Fourier Transform (FFT)", "Rust-based DSP Core", "WebAssembly Bindings"],
      architecture: "Edge-computed signal processing with zero-latency visual dispatch.",
      roadmap: ["Phase 1: Real-time frequency mapping", "Phase 2: Predictive tempo forecasting", "Phase 3: MIDI 2.0 Integration"]
    },
    { 
      id: '2', 
      name: 'Baby LLM', 
      category: ['Framework'], 
      status: 'In Dev', 
      icon: <Brain className="w-5 h-5" />,
      description: "A research-focused, small-parameter model designed to run exclusively on micro-controllers and low-power hardware for discrete classification tasks.",
      technicalSpecs: ["Quantized Transformer Core", "CoreML Optimization", "TensorFlow Lite Micro"],
      architecture: "Static graph weights optimized for SRAM constraints.",
      roadmap: ["Prototype: 100M param base", "Iteration: On-device fine-tuning", "Deploy: Ambient inference"]
    },
    { 
      id: '3', 
      name: 'MCP-MPC', 
      category: ['MPC Server'], 
      status: 'No', 
      icon: <Shield className="w-5 h-5" />,
      description: "Multi-party Computation (MPC) server architecture for secure collaborative intelligence without data pooling.",
      technicalSpecs: ["Differential Privacy", "Homomorphic Encryption", "Secure Enclaves"],
      architecture: "Distributed key generation across non-colluding nodes.",
      roadmap: ["Audit: Cryptographic primitives", "Beta: Federated learning wrapper"]
    },
    { 
      id: '4', 
      name: 'C-Suite', 
      category: ['Framework'], 
      status: 'No', 
      icon: <Box className="w-5 h-5" />,
      description: "A suite of orchestration tools for high-level executive cognitive support, managing context windows across multiple agents.",
      technicalSpecs: ["Context Window Sharding", "Long-term Vector Memory", "Agentic Orchestration"],
      architecture: "Hierarchical agent system with supervisor/worker topology.",
      roadmap: ["Launch: Context management core", "Future: Autonomous planning engine"]
    },
    { 
      id: '5', 
      name: 'Insight Explorer', 
      category: ['Framework'], 
      status: 'No', 
      icon: <Terminal className="w-5 h-5" />,
      description: "Dynamic visualization engine for semantic graphs, allowing users to traverse complex knowledge structures in VR/AR environments.",
      technicalSpecs: ["D3-Force-Directed Graphs", "Three.js Rendering", "Spatial UI"],
      architecture: "GPU-accelerated layout calculations for millions of nodes.",
      roadmap: ["Dev: Force-layout optimization", "Test: AR-overlay integration"]
    },
    { 
      id: '6', 
      name: 'Vitals', 
      category: ['LLM'], 
      status: 'No', 
      icon: <Activity className="w-5 h-5" />,
      description: "Longitudinal health telemetry analysis. Cross-references biometric data with cognitive state triggers.",
      technicalSpecs: ["HealthKit SDK", "Time-series forecasting", "Anomalous behavior detection"],
      architecture: "Private biometric processing pipeline running in Secure Enclave.",
      roadmap: ["Alpha: Sleep/Cognition correlation", "Beta: Real-time stress mitigation"]
    },
    { 
      id: '7', 
      name: 'Verdict', 
      category: ['LLM'], 
      status: 'No', 
      icon: <Shield className="w-5 h-5" />,
      description: "Legal and logic-based reasoning model for objective document analysis and internal consistency auditing.",
      technicalSpecs: ["Logical Entailment Trees", "RAG Grounding", "Semantic Search"],
      architecture: "Chain-of-thought verification with external web-search grounding.",
      roadmap: ["Core: Reasoning engine", "Integration: Legal document parser"]
    },
    { 
      id: '8', 
      name: 'Volt', 
      category: ['LLM'], 
      status: 'No', 
      icon: <Activity className="w-5 h-5" />,
      description: "Energy-efficient inference framework designed to optimize token-per-watt ratios for mobile deployments.",
      technicalSpecs: ["Hardware-aware scheduling", "Dynamic precision scaling", "Wait-time optimization"],
      architecture: "Low-level metal/vulkan bridge for direct GPU memory access.",
      roadmap: ["Research: Battery-aware inference", "Optimization: Dynamic LoRA switching"]
    },
    { 
      id: '9', 
      name: 'Rachel', 
      category: ['LLM'], 
      status: 'No', 
      icon: <Brain className="w-5 h-5" />,
      description: "An empathetic conversational agent designed for high-fidelity emotional resonance and therapeutic support modeling.",
      technicalSpecs: ["Affective computing", "Prosody analysis", "Multi-modal sentiment mapping"],
      architecture: "Cross-modality attention mechanisms for vocal and visual cues.",
      roadmap: ["Version 1: Text-based empathy", "Version 2: Real-time vocal prosody"]
    },
    { 
      id: '10', 
      name: 'Alignment', 
      category: ['Framework'], 
      status: 'No', 
      icon: <Shield className="w-5 h-5" />,
      description: "Systemic sanity checks for agentic models, ensuring output stays within strict ethical and safety parameters.",
      technicalSpecs: ["Rule-based filtering", "Adversarial testing suites", "Constraint-satisfaction modeling"],
      architecture: "Safety-guardrail layer integrated between user and core model.",
      roadmap: ["Launch: Benchmarking suite", "Iteration: Automated red-teaming"]
    },
    { 
      id: '11', 
      name: 'Afterlife', 
      category: ['Framework'], 
      status: 'No', 
      icon: <Box className="w-5 h-5" />,
      description: "Digital archival and legacy memory system. Synthesizing a semantic avatar based on a lifetime of communication data.",
      technicalSpecs: ["Biographical data extraction", "Tone mirroring", "Temporal consistency check"],
      architecture: "Long-term cold-storage vector databases with periodic re-indexing.",
      roadmap: ["Prototype: Archive ingest", "Development: Personality synthesis"]
    },
    { 
      id: '12', 
      name: 'CLOS', 
      category: ['Framework'], 
      status: 'No', 
      icon: <Brain className="w-5 h-5" />,
      description: "The Cognitive Life Operating System. The flagship integration of all Celaya Solutions cognitive research.",
      technicalSpecs: ["Full Stack Integration", "iOS Native Swift", "Cloudflare Edge Compute"],
      architecture: "Unified data plane connecting all lab frameworks into a single UI.",
      roadmap: ["Current: Private Alpha", "Next: Public Research release"]
    },
    { 
      id: '13', 
      name: 'layer-1', 
      category: ['CLI Tool', 'Web App'], 
      status: 'No', 
      icon: <Terminal className="w-5 h-5" />,
      description: "Low-level system access tool for managing local AI deployments across distributed local networks.",
      technicalSpecs: ["Go-based CLI", "React/Next.js frontend", "gRPC Communication"],
      architecture: "Peer-to-peer node management system for local compute clusters.",
      roadmap: ["Release: CLI Core", "Beta: Web Management Dashboard"]
    },
  ];

  return (
    <section id="catalog" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Research Registry</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Active AI Products</h2>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Live Development</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-zinc-800 rounded-full"></div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Internal Staging</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  project.status === 'In Dev' 
                    ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' 
                    : 'bg-zinc-800/30 border-white/5 text-zinc-600'
                }`}>
                  {project.status === 'In Dev' ? 'In Dev' : 'Staged'}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-white transition-colors">
                {project.name}
              </h3>
              <p className="text-xs text-zinc-500 line-clamp-2 mb-6 leading-relaxed group-hover:text-zinc-400 transition-colors">
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

        {/* Global Footer Button */}
        <div className="mt-20 flex justify-center">
          <button className="group flex items-center space-x-3 px-8 py-4 border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-white hover:border-white/30 transition-all">
            <span>Access Global Lab Registry</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Product Detail Overlay ("Page Layout") */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
          
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] glass-card border-white/10 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(255,255,255,0.05)] animate-in zoom-in-95 duration-500">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 p-2 text-zinc-500 hover:text-white transition-colors bg-white/5 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Context & Visuals */}
            <div className="w-full md:w-3/5 p-8 md:p-16 overflow-y-auto border-r border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
              <div className="flex items-center space-x-4 mb-12">
                <div className="p-4 bg-white text-black rounded-sm shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{selectedProject.name}</h3>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em]">Dossier No. {selectedProject.id}</span>
                    <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
                    <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.2em]">{selectedProject.status}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <section>
                  <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4">Core Objective</h4>
                  <p className="text-xl text-zinc-300 leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                </section>

                <section>
                  <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4">Systems Architecture</h4>
                  <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-sm">
                    <p className="text-sm font-mono text-zinc-400 leading-relaxed italic">
                      "{selectedProject.architecture}"
                    </p>
                  </div>
                </section>

                <section>
                  <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-6">Strategic Roadmap</h4>
                  <div className="space-y-4">
                    {selectedProject.roadmap.map((step, i) => (
                      <div key={i} className="flex items-center space-x-4 group">
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-mono text-zinc-600 group-hover:text-white group-hover:border-white/30 transition-colors">
                          0{i + 1}
                        </div>
                        <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">{step}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* Right Column: Technical Ledger */}
            <div className="w-full md:w-2/5 bg-zinc-950 p-8 md:p-12 overflow-y-auto">
              <div className="space-y-12">
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <Cpu className="w-4 h-4 text-zinc-500" />
                    <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Stack Inventory</h4>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedProject.technicalSpecs.map((spec, i) => (
                      <div key={i} className="flex items-center justify-between p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-sm">
                        <span className="text-xs font-mono text-zinc-400">{spec}</span>
                        <Code className="w-3 h-3 text-zinc-700" />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <Globe className="w-4 h-4 text-zinc-500" />
                    <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Global Taxonomy</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.category.map((cat, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 text-xs text-zinc-300 rounded-sm">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-12 border-t border-white/5">
                  <div className="p-6 border border-emerald-500/20 bg-emerald-500/5 rounded-sm">
                    <h5 className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-2">Alpha Participation</h5>
                    <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                      Access to this project is currently restricted to vetted lab partners and enterprise research units.
                    </p>
                    <button className="w-full py-3 bg-emerald-500 text-black text-[10px] font-mono uppercase font-bold tracking-widest flex items-center justify-center space-x-2 hover:bg-emerald-400 transition-colors">
                      <span>Request Access</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-[9px] font-mono text-zinc-800 uppercase tracking-[0.3em]">
                  Encrypted Research Stream • CS-{selectedProject.id}X
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectCatalog;
