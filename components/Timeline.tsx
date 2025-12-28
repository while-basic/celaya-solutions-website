
import React, { useState } from 'react';
import { Calendar, ChevronRight, Milestone } from 'lucide-react';

interface MilestoneData {
  year: string;
  title: string;
  description: string;
  details: string[];
}

const Timeline: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const milestones: MilestoneData[] = [
    {
      year: "2022",
      title: "First Principles Genesis",
      description: "Foundational research into cognitive load modeling and metacognitive architectures.",
      details: ["Initial conceptualization of the 'Cognitive Mirror'", "Research into zero-latency local LLM potential", "Mapping executive function to software modules"]
    },
    {
      year: "2023 Q1",
      title: "El Paso Lab Opening",
      description: "Establishment of the physical R&D space in El Paso, TX, focused on local AI innovation.",
      details: ["Deployment of localized compute cluster", "Start of Apple ecosystem integration research", "First cohort of private alpha testers"]
    },
    {
      year: "2023 Q4",
      title: "Local Inference Breakthrough",
      description: "Successful implementation of 7B parameter models running locally on M-series unified memory with <50ms latency.",
      details: ["Optimization of CoreML pipelines", "Zero-cloud inference protocol established", "Initial health-telemetry mapping"]
    },
    {
      year: "2024 Q1",
      title: "CLOS Alpha Deployment",
      description: "First functional prototype of the Cognitive Life Operating System launched to private technical partners.",
      details: ["Voice-native capture engine finalized", "Semantic Knowledge Graph v1.0", "Apple Watch/Shortcut synchronization"]
    },
    {
      year: "2024 Q3",
      title: "Multi-modal Evolution",
      description: "Integration of vision and longitudinal health data for predictive cognitive drift detection.",
      details: ["Burnout precursor detection algorithms", "Apple HealthKit deep-linking", "Real-time attention mapping"]
    }
  ];

  return (
    <section id="timeline" className="py-32 px-6 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Evolutionary Path</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Research Milestones</h2>
          <p className="text-zinc-400 max-w-xl">
            Tracing the transition from conceptual systems theory to working on-device infrastructure.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Milestone Selection (Left) */}
          <div className="lg:col-span-4 space-y-2">
            {milestones.map((m, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-full flex items-center justify-between p-6 transition-all border-l-2 text-left group
                  ${activeIdx === idx 
                    ? 'border-white bg-white/5 text-white' 
                    : 'border-white/5 text-zinc-500 hover:border-white/20 hover:text-zinc-300'}`}
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest block mb-1">{m.year}</span>
                  <span className="font-bold tracking-tight">{m.title}</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeIdx === idx ? 'translate-x-1' : 'opacity-0'}`} />
              </button>
            ))}
          </div>

          {/* Milestone Detail (Right) */}
          <div className="lg:col-span-8">
            <div className="glass-card p-10 rounded-sm h-full flex flex-col">
              <div className="flex items-center space-x-3 text-zinc-600 mb-8">
                <Milestone className="w-5 h-5" />
                <span className="text-xs font-mono uppercase tracking-widest">Detail View | {milestones[activeIdx].year}</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-6">{milestones[activeIdx].title}</h3>
              <p className="text-xl text-zinc-400 mb-10 font-light leading-relaxed">
                {milestones[activeIdx].description}
              </p>

              <div className="mt-auto pt-10 border-t border-white/5">
                <h4 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-6">Technical Outputs</h4>
                <ul className="grid md:grid-cols-2 gap-4">
                  {milestones[activeIdx].details.map((detail, i) => (
                    <li key={i} className="flex items-start space-x-3 group">
                      <div className="mt-1.5 w-1.5 h-1.5 bg-white/20 group-hover:bg-white transition-colors"></div>
                      <span className="text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
