
import React, { useState } from 'react';
import { Cpu, Music, Activity, Smartphone, ChevronDown } from 'lucide-react';

const Capabilities: React.FC = () => {
  const [showFullInventory, setShowFullInventory] = useState(false);

  const stack = [
    {
      category: "Cognitive Systems",
      icon: <Cpu className="w-5 h-5" />,
      items: ["37 Agent Orchestration", "Cognitive Artifacts", "Systematic Reasoners", "Prompt Engineering Frameworks"]
    },
    {
      category: "Robotics & Simulation",
      icon: <Activity className="w-5 h-5" />,
      items: ["MuJoCo Physics Engine", "PyBullet Simulations", "Three.js Visualization", "Spatial Transform Pipelines"]
    },
    {
      category: "Mobile & Biometrics",
      icon: <Smartphone className="w-5 h-5" />,
      items: ["SwiftUI / Combine", "HealthKit Data Fusion", "Shortcuts Workflows", "On-Device Neural Engine"]
    }
  ];

  const secondaryStack = [
    {
      category: "Infrastructure & Audio",
      icon: <Music className="w-5 h-5" />,
      items: ["MCP Server Protocols", "172K+ Audio Sample Index", "MIDI Workflow Automation", "Node.js / gRPC Bridges"]
    }
  ];

  return (
    <section id="capabilities" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">The Synthesis Stack</span>
            <h2 className="text-4xl md:text-5xl font-bold">Production-grade toolkit.<br/>Cross-domain precision.</h2>
          </div>
          <p className="text-zinc-400 max-w-sm mb-2 text-sm leading-relaxed">
            From industrial electrical systems to advanced developmental AI—our stack is engineered for rigorous, real-world utility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {stack.map((group, idx) => (
            <div key={idx} className="bg-black p-10 hover:bg-zinc-900 transition-colors duration-500">
              <div className="w-10 h-10 bg-zinc-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 text-zinc-400">
                {group.icon}
              </div>
              <h3 className="text-lg font-bold mb-6 tracking-tight">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <li key={i} className="text-xs font-mono text-zinc-500 flex items-center">
                    <span className="w-1 h-1 bg-zinc-700 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {showFullInventory && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border-x border-b border-white/5 animate-in fade-in duration-500">
            {secondaryStack.map((group, idx) => (
              <div key={idx} className="bg-black p-10 hover:bg-zinc-900 transition-colors duration-500">
                <div className="w-10 h-10 bg-zinc-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 text-zinc-400">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold mb-6 tracking-tight">{group.category}</h3>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-xs font-mono text-zinc-500 flex items-center">
                      <span className="w-1 h-1 bg-zinc-700 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Fillers to maintain grid if needed */}
            <div className="bg-black/50 p-10 hidden lg:block border-l border-white/5"></div>
            <div className="bg-black/50 p-10 hidden lg:block border-l border-white/5"></div>
          </div>
        )}

        <button 
          onClick={() => setShowFullInventory(!showFullInventory)}
          className="mt-12 flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 hover:text-white transition-colors"
        >
          <span>{showFullInventory ? 'Minimize Registry' : 'View Full Stack Inventory'}</span>
          <ChevronDown className={`w-3 h-3 transition-transform ${showFullInventory ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </section>
  );
};

export default Capabilities;
