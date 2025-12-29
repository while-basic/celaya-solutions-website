
import React from 'react';

const Philosophy: React.FC = () => {
  const values = [
    {
      title: "Systems Over Wrappers",
      description: "We refuse to build superficial UI layers around third-party APIs. We build architectural foundations from first principles."
    },
    {
      title: "Agency by Design",
      description: "Convenience is often a trap for data extraction. Our systems maximize local agency and minimize cloud dependency."
    },
    {
      title: "Mirror, Not Replacement",
      description: "AI should reveal patterns the user can't see, not perform the thinking the user should do. We build tools for reflection."
    },
    {
      title: "Proof of Work",
      description: "We don't pitch; we ship. Collaboration in this lab is gated by the quality of the delta, not the volume of the hype."
    }
  ];

  return (
    <section id="philosophy" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">The Filter</span>
          <h2 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight tracking-tight">
            Applied systems engineering for <span className="text-zinc-500">cognitive sovereignty</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="group p-8 glass-card rounded-sm glow-border transition-all border-white/5">
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
