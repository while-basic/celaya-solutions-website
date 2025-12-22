
import React from 'react';
import { Cpu, Layers, Code, Database, Terminal, Smartphone } from 'lucide-react';

const Capabilities: React.FC = () => {
  const stack = [
    {
      category: "AI & ML",
      icon: <Cpu className="w-7 h-7" />,
      items: ["Local LLMs (Llama, Gemma)", "Vector Embeddings", "RAG Infrastructure", "Modal Audio Processing"]
    },
    {
      category: "Apple Ecosystem",
      icon: <Smartphone className="w-7 h-7" />,
      items: ["SwiftUI & Combine", "HealthKit Integration", "Shortcuts Workflows", "App Intents / SiriKit"]
    },
    {
      category: "Distributed Systems",
      icon: <Layers className="w-7 h-7" />,
      items: ["Cloudflare Workers", "D1 & KV Store", "Flask Microservices", "PostgreSQL / Prisma"]
    },
    {
      category: "Data Viz",
      icon: <Database className="w-7 h-7" />,
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
            Our toolkit is curated for speed, reliability and redundancy, prioritizing local execution and edge computing to ensure zero-latency intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {stack.map((group, idx) => (
            <div key={idx} className="bg-black p-10 hover:bg-zinc-900 transition-colors duration-500 group">
              <div className="relative mb-8">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  {/* Main icon container with gradient border */}
                  <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-white/10 group-hover:border-white/20 transition-all duration-500 flex items-center justify-center overflow-hidden">
                    {/* Inner gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon with color on hover */}
                    <div className="relative z-10 text-zinc-400 group-hover:text-white transition-colors duration-500">
                      {group.icon}
                    </div>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Animated corner highlight */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                </div>
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
