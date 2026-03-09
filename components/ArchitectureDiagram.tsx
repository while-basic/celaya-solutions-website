/* Brand tokens: cs-orange, cs-green, cs-gray-700, cs-gray-900, cs-font-mono, cs-font-display, cs-font-body */
import React, { useState } from 'react';
import { Smartphone, Shield, Cpu, Cloud, Database } from 'lucide-react';

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
    className={`relative p-6 border rounded transition-all duration-300 cursor-pointer
      ${active ? 'border-cs-orange bg-cs-gray-800 scale-[1.02]' : 'border-cs-gray-700 bg-cs-gray-900 opacity-70'}`}
    style={active ? { boxShadow: 'var(--cs-shadow-glow-orange)' } : undefined}
    onMouseEnter={() => onHover(id)}
    onMouseLeave={() => onHover(null)}
  >
    <div className={`w-10 h-10 rounded flex items-center justify-center mb-4 transition-colors duration-300
      ${active ? 'bg-cs-orange text-cs-black' : 'bg-cs-gray-800 text-cs-gray-400'}`}>
      {icon}
    </div>
    <h4 className="font-mono text-[0.875rem] font-medium tracking-tight mb-2 uppercase">{title}</h4>
    <p className={`font-body text-[0.875rem] text-cs-gray-400 leading-relaxed transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
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
      description: 'Voice, vision, and health telemetry captured via Apple Watch and iPhone native integrations.',
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      id: 'privacy',
      title: 'Privacy Layer',
      description: 'On-device differential privacy and end-to-end encryption. Context stays in your secure enclave.',
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 'inference',
      title: 'Edge Inference',
      description: 'Local LLMs (Llama.cpp/CoreML) processing without cloud latency or surveillance.',
      icon: <Cpu className="w-5 h-5" />
    },
    {
      id: 'graph',
      title: 'Knowledge Graph',
      description: 'Vector-based memory storage building a semantic map of decisions and cognitive states over time.',
      icon: <Database className="w-5 h-5" />
    },
    {
      id: 'orchestration',
      title: 'Cloud RAG',
      description: 'Minimal cloud compute for complex web-grounding and long-term archival using Cloudflare Workers.',
      icon: <Cloud className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-24 border-b border-cs-gray-800">
      <div className="max-w-[1100px] mx-auto px-10">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
              The Stack
            </span>
            <span className="block w-10 h-px bg-cs-orange opacity-50" />
          </div>
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
            Systems-Level Architecture
          </h2>
          <p className="font-body text-base text-cs-gray-400 max-w-xl">
            Hover over nodes to explore the path from capture to orchestration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {nodes.map((node, idx) => (
            <Node
              key={node.id}
              {...node}
              active={activeNode === node.id || (!activeNode && idx === 0)}
              onHover={setActiveNode}
            />
          ))}
        </div>

        <div className="mt-12 p-6 border border-cs-gray-700 bg-cs-gray-900 rounded">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 bg-cs-green rounded-full" />
            <span className="font-mono text-[0.875rem] uppercase text-cs-gray-400 tracking-widest">Architectural Principle</span>
          </div>
          <p className="font-mono text-base text-cs-gray-300 leading-relaxed italic">
            "By prioritizing local inference and on-device context, we eliminate the surveillance tax typical of modern AI systems. CLOS mirrors cognition in a secure, high-fidelity environment."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDiagram;
