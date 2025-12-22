
import React, { useState } from 'react';
import { Smartphone, Shield, Cpu, Cloud, Database, ArrowRight } from 'lucide-react';

interface NodeProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  active: boolean;
  onHover: (id: string | null) => void;
}

const Node: React.FC<NodeProps> = ({ id, title, description, icon, active, onHover }) => (
  <div 
    className={`relative p-6 glass-card rounded-xl border transition-all duration-500 cursor-crosshair
      ${active ? 'border-white/40 scale-105 shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-zinc-900' : 'border-white/5 opacity-60'}`}
    onMouseEnter={() => onHover(id)}
    onMouseLeave={() => onHover(null)}
  >
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-500
      ${active ? 'bg-white text-black' : 'bg-zinc-900 text-zinc-500'}`}>
      {icon}
    </div>
    <h4 className="text-sm font-bold tracking-tight mb-2 uppercase">{title}</h4>
    <p className={`text-xs leading-relaxed transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
      {description}
    </p>
  </div>
);

const ArchitectureDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    {
      id: 'capture',
      title: 'Multi-Modal Capture',
      description: 'Zero-friction voice, vision, and health telemetry captured via Apple Watch and iPhone native integrations.',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      id: 'privacy',
      title: 'Privacy Layer',
      description: 'On-device differential privacy and end-to-end encryption. Context stays in your secure enclave.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 'inference',
      title: 'Edge Inference',
      description: 'Local LLMs (Llama.cpp/CoreML) processing thoughts without cloud latency or surveillance.',
      icon: <Cpu className="w-6 h-6" />
    },
    {
      id: 'graph',
      title: 'Knowledge Graph',
      description: 'Vector-based memory storage that builds a semantic map of your decisions and cognitive states over time.',
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 'orchestration',
      title: 'Cloud RAG',
      description: 'Minimal cloud compute for complex web-grounding and long-term archival using Cloudflare Workers.',
      icon: <Cloud className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">The Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Systems-Level Architecture</h2>
          <p className="text-zinc-400 max-w-xl">
            Hover over the nodes to explore how we bridge the gap between high-performance AI and extreme user privacy.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          {nodes.map((node, idx) => (
            <React.Fragment key={node.id}>
              <Node 
                {...node} 
                active={activeNode === node.id || (!activeNode && idx === 0)} 
                onHover={setActiveNode} 
              />
              {idx < nodes.length - 1 && (
                <div className="hidden md:flex justify-center text-zinc-800">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </React.Fragment>
          ))}
          
          {/* Connecting Line (Mobile Hidden) */}
          <svg className="absolute top-1/2 left-0 w-full h-px -z-10 hidden md:block" strokeDasharray="4 4">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </svg>
        </div>

        <div className="mt-20 p-8 border border-white/5 bg-zinc-950/50 rounded-sm">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono uppercase text-zinc-500 tracking-widest">Architectural Advantage</span>
          </div>
          <p className="font-mono text-sm text-zinc-300 leading-relaxed italic">
            "By prioritizing local inference and on-device context, we eliminate the 'surveillance tax' typical of modern AI systems. CLOS doesn't just process data; it mirrors your cognition in a secure, high-fidelity environment."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDiagram;
