import React, { useState } from 'react';
import { Mail, Github, Send, Sparkles, Code, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Collision Space</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">Synchronize <br/><span className="text-zinc-600 italic">Signal</span>.</h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-md leading-relaxed font-light">
              This is a collision space, not an application process. We are looking for peers working on adjacent systems problems. 
            </p>
            
            <div className="p-8 border border-white/5 bg-zinc-950/50 rounded-sm mb-12">
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
                  <span>Send:</span>
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

            <div className="flex flex-wrap gap-6 items-center">
              <a href="mailto:hello@celaya.solutions" className="flex items-center space-x-3 text-zinc-400 hover:text-white transition-colors group">
                <Mail className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-widest">hello@celaya.solutions</span>
              </a>
              <a href="https://github.com/chriscelaya" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-zinc-400 hover:text-white transition-colors group">
                <Github className="w-4 h-4" />
                <span className="font-mono text-xs uppercase tracking-widest">github/chriscelaya</span>
              </a>
            </div>
          </div>

          <div className="glass-card p-10 md:p-16 rounded-sm border border-white/10 bg-zinc-950/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-20">
               <ArrowUpRight className="w-12 h-12" />
             </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="space-y-2">
                <label className="text-[9px] font-mono uppercase text-zinc-500 tracking-[0.2em]">Handshake ID</label>
                <input 
                  type="text" 
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-white/5 p-4 text-sm font-light focus:outline-none focus:border-white/20 transition-colors rounded-sm"
                  placeholder="Your Name / Handle"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-mono uppercase text-zinc-500 tracking-[0.2em]">Secure Email</label>
                <input 
                  type="email" 
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-white/5 p-4 text-sm font-light focus:outline-none focus:border-white/20 transition-colors rounded-sm"
                  placeholder="address@domain.tld"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-mono uppercase text-zinc-500 tracking-[0.2em]">Proof of Work / Context</label>
                <textarea 
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-white/5 p-4 text-sm font-light focus:outline-none focus:border-white/20 transition-colors resize-none rounded-sm"
                  placeholder="Artifact link + Bullet points..."
                  required
                />
              </div>
              
              <button 
                type="submit"
                disabled={submitted}
                className={`w-full py-4 font-mono uppercase text-[10px] tracking-[0.3em] transition-all flex items-center justify-center space-x-3
                  ${submitted ? 'bg-emerald-500 text-black font-bold' : 'bg-white text-black hover:bg-zinc-200 active:scale-[0.98]'}
                `}
              >
                {submitted ? (
                  <span>Signal Locked</span>
                ) : (
                  <>
                    <span>Initialize Sync</span>
                    <Send className="w-3 h-3" />
                  </>
                )}
              </button>
            </form>
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