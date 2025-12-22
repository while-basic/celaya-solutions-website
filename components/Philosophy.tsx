
import React from 'react';

const Philosophy: React.FC = () => {
  const values = [
    {
      title: "Systems Over Wrappers",
      description: "We focus on building architectural foundations rather than superficial UI layers around third-party APIs."
    },
    {
      title: "Privacy by Architecture",
      description: "Data is a liability, not an asset. Our systems are designed to minimize cloud footprint and maximize local agency."
    },
    {
      title: "Emergent Intelligence",
      description: "We build for surprise and discovery, not predictability. Our tools help humans see what they previously couldn't."
    },
    {
      title: "Rapid Iteration",
      description: "Transitioning from first principles to working prototypes in days, not months. We ship the delta of our research."
    }
  ];

  return (
    <section id="philosophy" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Core Principles</span>
          <h2 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
            Research-oriented execution grounded in <span className="text-zinc-500">first-principles</span> thinking.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="group p-8 glass-card rounded-sm glow-border transition-all">
              <div className="text-2xl font-mono text-zinc-800 group-hover:text-white transition-colors mb-6">0{i + 1}</div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{v.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
