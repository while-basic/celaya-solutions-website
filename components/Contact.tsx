
import React from 'react';
import { Mail, Github, Code } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-32 pb-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Engagement</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">Technical <br/><span className="text-zinc-600">Sync</span>.</h2>
          
          <div className="w-full p-8 border border-white/5 bg-zinc-950/50 rounded-sm mb-12 text-left">
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest flex items-center space-x-2">
                <Code className="w-3 h-3" />
                <span>Protocol:</span>
              </h4>
              <ul className="text-[11px] font-mono text-zinc-400 space-y-4 list-none">
                <li className="flex items-start space-x-3">
                  <span className="text-zinc-700">01</span>
                  <span>Inspect published artifacts in the registry.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-zinc-700">02</span>
                  <span>Review findings in the lab notes.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-zinc-700">03</span>
                  <span>Synchronize via direct technical inquiry.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 items-center justify-center w-full">
            <a href="mailto:hello@celayasolutions.com" className="flex items-center space-x-3 text-zinc-500 hover:text-white transition-colors group">
              <Mail className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">hello@celayasolutions.com</span>
            </a>
            <a href="https://github.com/celayasolutions" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-zinc-500 hover:text-white transition-colors group">
              <Github className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em]">github/celayasolutions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
