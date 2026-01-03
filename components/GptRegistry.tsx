import React from 'react';
import { Bot, Shield, Cpu, Sparkles, ArrowRight, Terminal, Globe } from 'lucide-react';

interface GptModel {
  id: string;
  name: string;
  role: string;
  description: string;
  status: 'Production' | 'Beta' | 'Concept';
  specialization: string[];
}

const GptRegistry: React.FC = () => {
  const models: GptModel[] = [
    {
      id: "CLOS-EXEC-01",
      name: "CLOS Executive",
      role: "Orchestration & Mirroring",
      description: "The central executive node for the Cognitive Life Operating System. Manages cross-agent communication and biometric feedback loops.",
      status: "Production",
      specialization: ["Decision Support", "Context Management", "Metacognition"]
    },
    {
      id: "TURING-LOGIC",
      name: "Turing-01",
      role: "Formal Logic",
      description: "Specialized in algorithmic verification, technical debugging, and rigorous logical entailment checks.",
      status: "Production",
      specialization: ["Debugging", "System Architecture", "Proofs"]
    },
    {
      id: "LOVELACE-SYNTH",
      name: "Lovelace-02",
      role: "Creative Synthesis",
      description: "Focused on connecting disparate concepts through high-level abstraction and creative protocol design.",
      status: "Beta",
      specialization: ["Synthesis", "Design", "Ideation"]
    },
    {
      id: "SHANNON-SIGNAL",
      name: "Shannon-33",
      role: "Signal Recovery",
      description: "Optimized for extracting meaning from noisy data streams and reducing entropy in communication.",
      status: "Concept",
      specialization: ["Information Theory", "Data Cleaning", "Signal Processing"]
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <header className="mb-16 border-l border-white/10 pl-8">
        <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Inference Node Registry</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">Founder Series</h1>
        <p className="text-xl text-zinc-400 font-light max-w-3xl">
          Discrete agentic nodes optimized for specific cognitive primitives. Each node functions as a specialized inference loop within the CLOS swarm.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {models.map((model) => (
          <div key={model.id} className="group glass-card border-white/5 p-10 rounded-sm hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-zinc-900 border border-white/10 rounded flex items-center justify-center">
                    <Bot className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">{model.name}</h3>
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{model.role}</span>
                  </div>
                </div>
                <div className={`px-2 py-0.5 rounded-sm border text-[9px] font-mono uppercase tracking-widest ${
                  model.status === 'Production' ? 'border-emerald-500/20 text-emerald-500 bg-emerald-500/5' :
                  model.status === 'Beta' ? 'border-blue-500/20 text-blue-500 bg-blue-500/5' :
                  'border-zinc-800 text-zinc-700'
                }`}>
                  {model.status}
                </div>
              </div>

              <p className="text-zinc-500 text-sm leading-relaxed mb-8 group-hover:text-zinc-400 transition-colors">
                {model.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {model.specialization.map(tag => (
                  <span key={tag} className="px-2 py-0.5 text-[9px] font-mono rounded-sm border border-white/5 bg-white/[0.02] text-zinc-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-800 uppercase font-bold tracking-widest">{model.id}</span>
              <button className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center space-x-2">
                <span>View Node Logs</span>
                <Terminal className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 glass-card border-dashed border-white/10 rounded-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <Cpu className="w-12 h-12 text-zinc-800" />
            <div>
              <h4 className="text-lg font-bold mb-1">Scale the Swarm</h4>
              <p className="text-sm text-zinc-500">The Founder Series is limited to 37 nodes. Custom agentic architectures available for industrial partners.</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-white text-black text-[10px] font-mono uppercase font-bold tracking-[0.2em] flex items-center space-x-3 hover:bg-zinc-200 transition-colors">
            <span>Request Custom Inference Node</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GptRegistry;