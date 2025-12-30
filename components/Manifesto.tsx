
import React from 'react';
import { ShieldAlert, Users, ZapOff, Fingerprint, Zap } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">The Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Think Different. <br/><span className="text-zinc-600">Build Production.</span></h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Zap className="w-5 h-5 text-zinc-500 mt-1" />
                <p className="text-zinc-400 leading-relaxed">
                  <strong className="text-white block mb-1">Industrial Rigor.</strong> Extensive experience as an industrial electromechanical technician informs our approach to software. We don't build prototypes; we build hardened systems designed for continuous operation.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <Fingerprint className="w-5 h-5 text-zinc-500 mt-1" />
                <p className="text-zinc-400 leading-relaxed">
                  <strong className="text-white block mb-1">Self-Experimentation.</strong> We treat ourselves as research subjects. CLOS is tested through longitudinal studies of the developer's own cognitive patterns and health telemetry.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <ShieldAlert className="w-5 h-5 text-zinc-500 mt-1" />
                <p className="text-zinc-400 leading-relaxed">
                  <strong className="text-white block mb-1">Neurodivergent Advantage.</strong> Our systems are architected to leverage non-linear cognitive pathways, turning perceived friction into structured innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 md:p-16 rounded-sm border-white/5 bg-zinc-950/50">
            <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-10">Divergence Matrix</h3>
            <div className="space-y-12">
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center space-x-3">
                  <ZapOff className="w-4 h-4 text-white" />
                  <span>What We Are Not</span>
                </h4>
                <ul className="space-y-3 text-sm text-zinc-500 font-mono list-none">
                  <li>— Generic AI SaaS</li>
                  <li>— Prototype Factory</li>
                  <li>— Speculative Hype House</li>
                  <li>— Isolated Academics</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center space-x-3 text-emerald-500">
                  <ZapOff className="w-4 h-4 rotate-180" />
                  <span>What We Are</span>
                </h4>
                <ul className="space-y-3 text-sm text-zinc-400 font-mono list-none">
                  <li>— Cognitive Research Lab</li>
                  <li>— Industrial Systems Engineers</li>
                  <li>— Cross-Domain Synthesis Hub</li>
                  <li>— Production-Grade Builders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
