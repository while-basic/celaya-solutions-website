
import React from 'react';
import { Mail, Github, Sparkles, Code, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Collision Space</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">Synchronize <br/><span className="text-zinc-600 italic">Signal</span>.</h2>
          <p className="text-lg text-zinc-400 mb-12 leading-relaxed font-light">
            This is a collision space, not an application process. We are looking for peers working on adjacent systems problems. 
          </p>
          
          <div className="w-full p-8 border border-white/5 bg-zinc-950/50 rounded-sm mb-12 text-left">
            <div className="flex items-center space-x-3 mb-6 text-white">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest">Collaborator Filter</span>
            </div>
            <p className="text-sm text-zinc-500 italic mb-8 border-l border-zinc-800 pl-4">
              "No pitches. No decks. Just proof of work and shared curiosity."
            </p>
            
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest flex items-center space-x-2">
                <Code className="w-3 h-3" />
                <span>Protocol:</span>
              </h4>
              <ul className="text-[11px] font-mono text-zinc-400 space-y-4 list-none">
                <li className="flex items-start space-x-3">
                  <span className="text-zinc-700">01</span>
                  <span>1 link to a working artifact (repo/demo)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-zinc-700">02</span>
                  <span>3 bullets: problem, constraint, result</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-zinc-700">03</span>
                  <span>1 paragraph: what you’re debugging right now</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center w-full">
            <a href="mailto:hello@celayasolutions.com" className="flex items-center space-x-3 text-zinc-400 hover:text-white transition-colors group">
              <Mail className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">hello@celayasolutions.com</span>
            </a>
            <a href="https://github.com/celayasolutions" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-zinc-400 hover:text-white transition-colors group">
              <Github className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">github/celayasolutions</span>
            </a>
          </div>
        </div>

        <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[9px] font-mono text-zinc-600 uppercase tracking-[0.3em]">
          <div className="flex items-center space-x-6">
            <p>© 2024 Celaya Solutions.</p>
            <span className="w-px h-3 bg-zinc-800"></span>
            <p>A Cognitive Systems Lab.</p>
          </div>
          <div className="flex space-x-12">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Lab Protocol</a>
            <a href="#" className="hover:text-white transition-colors">System Status</a>
            <p className="text-zinc-500">El Paso, TX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
