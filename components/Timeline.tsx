
import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Globe, Cpu, Link as LinkIcon } from 'lucide-react';

interface MilestoneData {
  year: string;
  title: string;
  description: string;
  details: string[];
  status: 'Complete' | 'Active' | 'Projected';
  metadata?: string;
}

const milestones: MilestoneData[] = [
  {
    year: "2022",
    status: "Complete",
    title: "First Principles Genesis",
    description: "Foundational research into cognitive load modeling and metacognitive architectures. Defining the boundaries between human executive function and agentic support.",
    details: ["Initial conceptualization of the 'Cognitive Mirror'", "Research into zero-latency local LLM potential", "Mapping executive function to software modules"],
    metadata: "TRL-2 | CONCEPT_STABLE"
  },
  {
    year: "2023 Q1",
    status: "Complete",
    title: "El Paso Lab Opening",
    description: "Establishment of the physical R&D space in El Paso, TX. Transitioning from theoretical frameworks to high-performance local compute clusters.",
    details: ["Deployment of localized compute cluster", "Start of Apple ecosystem integration research", "First cohort of private alpha testers"],
    metadata: "FACILITY_READY | EPS-TX-01"
  },
  {
    year: "2023 Q4",
    status: "Complete",
    title: "Local Inference Breakthrough",
    description: "Successful implementation of 7B parameter models running locally on M-series unified memory with <50ms latency. Zero cloud dependency achieved.",
    details: ["Optimization of CoreML pipelines", "Zero-cloud inference protocol established", "Initial health-telemetry mapping"],
    metadata: "LATENCY < 50MS | M3_MAX_OPTIMIZED"
  },
  {
    year: "2024 Q1",
    status: "Active",
    title: "CLOS Alpha Deployment",
    description: "First functional prototype of the Cognitive Life Operating System launched to private technical partners. Focus on ambient thought capture.",
    details: ["Voice-native capture engine finalized", "Semantic Knowledge Graph v1.0", "Apple Watch/Shortcut synchronization"],
    metadata: "NODE_ACTIVE | SWARM_SYNC_ENABLED"
  },
  {
    year: "2024 Q3",
    status: "Projected",
    title: "Multi-modal Evolution",
    description: "Integration of vision and longitudinal health data for predictive cognitive drift detection. Mapping the 'Aha!' moment in real-time.",
    details: ["Burnout precursor detection algorithms", "Apple HealthKit deep-linking", "Real-time attention mapping"],
    metadata: "EST_DEPL_2024.09"
  },
  {
    year: "2025",
    status: "Projected",
    title: "Industrial Swarm Synthesis",
    description: "Expanding CLOS to industrial electromechanical systems. Orchestrating agentic logic with deterministic hardware cycle times.",
    details: ["PLC-Neural Handshake Protocol", "Safety-critical Agent Gating", "Distributed Reasoning Mesh"],
    metadata: "TRL-7 | SCALE_STAGED"
  }
];

const TimelineNode: React.FC<{ data: MilestoneData; index: number }> = ({ data, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  const isLast = index === milestones.length - 1;

  return (
    <div 
      ref={nodeRef}
      className={`relative flex items-start mb-32 last:mb-0 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
      }`}
    >
      {/* Background Watermark Year */}
      <div className="absolute -left-12 md:-left-24 top-0 text-[120px] md:text-[200px] font-bold text-white/[0.02] select-none pointer-events-none font-mono tracking-tighter leading-none whitespace-nowrap">
        {data.year.split(' ')[0]}
      </div>

      {/* Vertical Gutter (The Data Stream) */}
      <div className="relative flex flex-col items-center flex-shrink-0 w-10 mr-8 md:mr-16">
        <div className={`w-[1px] absolute top-0 bottom-[-128px] ${
          data.status === 'Active' ? 'bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent shadow-[0_0_10px_rgba(59,130,246,0.3)]' : 
          data.status === 'Complete' ? 'bg-zinc-800' : 'bg-dashed border-l border-zinc-900'
        } ${isLast ? 'h-0' : ''}`}></div>
        
        <div className={`relative z-10 w-4 h-4 rounded-full border bg-black transition-all duration-700 ${
          data.status === 'Active' ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] scale-125' : 
          data.status === 'Complete' ? 'border-zinc-700' : 'border-zinc-900'
        }`}>
          {data.status === 'Active' && (
            <div className="absolute inset-0 rounded-full animate-ping bg-blue-500 opacity-20"></div>
          )}
          <div className={`absolute inset-[3px] rounded-full ${
            data.status === 'Complete' ? 'bg-zinc-700' : 
            data.status === 'Active' ? 'bg-blue-500' : 'bg-zinc-900'
          }`}></div>
        </div>
      </div>

      {/* Content Card */}
      <div className="flex-grow max-w-3xl">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className={`text-[11px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm border ${
              data.status === 'Active' ? 'text-blue-500 border-blue-500/20 bg-blue-500/5' : 
              data.status === 'Complete' ? 'text-zinc-500 border-white/5 bg-white/5' : 
              'text-zinc-700 border-transparent'
            }`}>
              {data.status}
            </span>
            {data.metadata && (
              <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest hidden sm:inline-block">
                [{data.metadata}]
              </span>
            )}
          </div>
          <span className="text-xs font-mono text-zinc-600 tracking-widest">{data.year}</span>
        </div>

        <div className="group glass-card border-white/5 p-8 md:p-10 rounded-sm hover:border-white/10 transition-all relative overflow-hidden">
          {/* Subtle Scanning Line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent translate-y-[-100%] group-hover:translate-y-[10000%] transition-transform duration-[3s] ease-linear pointer-events-none"></div>

          <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-6 group-hover:text-blue-400/80 transition-colors">
            {data.title}
          </h3>
          
          <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10 group-hover:text-zinc-300 transition-colors">
            {data.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] flex items-center space-x-2">
                <Terminal className="w-3 h-3" />
                <span>Technical Delta</span>
              </h4>
              <ul className="space-y-3">
                {data.details.map((detail, i) => (
                  <li key={i} className="flex items-start space-x-3 text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    <span className="text-zinc-800 mt-1">/</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-end items-end">
              <div className="p-4 bg-zinc-950/50 border border-white/5 rounded-sm opacity-40 group-hover:opacity-100 transition-opacity">
                <Cpu className="w-5 h-5 text-zinc-700 group-hover:text-blue-500/50 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-64 px-6 bg-black relative overflow-hidden">
      {/* Immersive Background Grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-transparent to-black"></div>

      <div className="max-w-7xl mx-auto relative">
        <header className="mb-48 max-w-3xl">
          <div className="inline-flex items-center space-x-3 px-3 py-1 rounded-sm bg-zinc-900 border border-white/10 mb-8">
            <Globe className="w-3 h-3 text-zinc-500" />
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Chronological Infrastructure</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.9]">
            The Journey to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600 italic">2027.</span>
          </h2>
          <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-xl">
            Tracing the technical pivots and research milestones that define the evolution of private cognitive computing.
          </p>
        </header>

        <div className="relative pl-4 md:pl-24">
          {milestones.map((m, idx) => (
            <TimelineNode key={idx} data={m} index={idx} />
          ))}
        </div>

        <footer className="mt-64 pt-32 border-t border-white/5 flex flex-col items-center text-center">
          <div className="group cursor-crosshair">
            <div className="w-px h-32 bg-gradient-to-b from-white/20 to-transparent mb-16 mx-auto group-hover:h-48 transition-all duration-700"></div>
            <span className="text-[11px] font-mono text-zinc-700 uppercase tracking-[0.6em] mb-4 block">Continuum Persistent</span>
            <p className="text-sm text-zinc-600 max-w-md italic font-light">
              "We are building the systems that bridge the gap between human intuition and machine precision."
            </p>
            <div className="mt-12 flex justify-center space-x-8 opacity-20 hover:opacity-100 transition-opacity duration-700">
               <LinkIcon className="w-4 h-4 text-zinc-500" />
               <Globe className="w-4 h-4 text-zinc-500" />
               <Terminal className="w-4 h-4 text-zinc-500" />
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Timeline;
