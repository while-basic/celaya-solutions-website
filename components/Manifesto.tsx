
import React from 'react';
import { ShieldAlert, Users, ZapOff, Fingerprint } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Signal Filter</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Who this is for.</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Users className="w-5 h-5 text-zinc-500 mt-1" />
                <p className="text-zinc-400 leading-relaxed">
                  <strong className="text-white block mb-1">Builders in the Arena.</strong> People moving from first principles to working prototypes in days, not months. You value the delta of research over the polish of the product.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <Fingerprint className="w-5 h-5 text-zinc-500 mt-1" />
                <p className="text-zinc-400 leading-relaxed">
                  <strong className="text-white block mb-1">Privacy Maximists.</strong> You understand that data is a liability. You seek agency and on-device sovereignty, not more surveillance-backed convenience.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <ShieldAlert className="w-5 h-5 text-zinc-500 mt-1" />
                <p className="text-zinc-400 leading-relaxed">
                  <strong className="text-white block mb-1">The Skeptical Technical.</strong> You are tired of wrappers, hype, and "assistants" that distract. You want infrastructure that mirrors your own cognition.
                </p>
              </div>
            </div>
            <p className="mt-12 text-sm font-mono text-zinc-600 border-l border-zinc-800 pl-6 uppercase tracking-widest leading-loose">
              If you are seeking a vendor, a career path, or a fundraising opportunity, this lab is not for you. This is a collision space for proof of work.
            </p>
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
                  <li>— A Product Company</li>
                  <li>— An Enterprise Solution Vendor</li>
                  <li>— A VC-Backed Hype Machine</li>
                  <li>— For Hire (Generalist)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center space-x-3 text-emerald-500">
                  <ZapOff className="w-4 h-4 rotate-180" />
                  <span>What We Are</span>
                </h4>
                <ul className="space-y-3 text-sm text-zinc-400 font-mono list-none">
                  <li>— A Cognitive Research Lab</li>
                  <li>— Systems Architecture Primitives</li>
                  <li>— Private-First Infrastructure</li>
                  <li>— High-Signal Peer Collision</li>
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
