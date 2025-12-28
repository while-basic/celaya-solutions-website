
import React from 'react';
import { Cpu, Layers, Code, Database, Terminal, Smartphone } from 'lucide-react';

const Capabilities: React.FC = () => {
  const stack = [
    {
      category: "AI & ML",
      icon: <Cpu className="w-5 h-5" />,
      items: ["Local LLMs (Llama, Gemma)", "Vector Embeddings", "RAG Infrastructure", "Modal Audio Processing"]
    },
    {
      category: "Apple Ecosystem",
      icon: <Smartphone className="w-5 h-5" />,
      items: ["SwiftUI & Combine", "HealthKit Integration", "Shortcuts Workflows", "App Intents / SiriKit"]
    },
    {
      category: "Distributed Systems",
      icon: <Layers className="w-5 h-5" />,
      items: ["Cloudflare Workers", "D1 & KV Store", "Flask Microservices", "PostgreSQL / Prisma"]
    },
    {
      category: "Data Viz",
      icon: <Database className="w-5 h-5" />,
      items: ["D3.js / Recharts", "Plotly / Dash", "Real-time Telemetry", "Pattern Recognition"]
    }
  ];

  return (
    <section id="capabilities" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Technical Stack</span>
            <h2 className="text-4xl md:text-5xl font-bold">Built for performance. <br/>Engineered for scale.</h2>
          </div>
          <p className="text-zinc-400 max-w-sm mb-2 text-sm leading-relaxed">
            Our toolkit is curated for speed and reliability, prioritizing local execution and edge computing to ensure zero-latency intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {stack.map((group, idx) => (
            <div key={idx} className="bg-black p-10 hover:bg-zinc-900 transition-colors duration-500">
              <div className="w-10 h-10 bg-zinc-900 rounded-sm flex items-center justify-center mb-8 border border-white/5">
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
      </div>
    </section>
  );
};

export default Capabilities;
