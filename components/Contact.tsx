
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Synchronize <span className="italic">Signal</span>.</h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-md leading-relaxed font-light">
              This is a collision space, not an application process. We are looking for peers working on adjacent systems problems. 
            </p>
            
            <div className="p-6 border border-white/10 bg-zinc-950/50 rounded-sm mb-12">
              <div className="flex items-center space-x-3 mb-4 text-white">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-widest">Collaborator Filter</span>
              </div>
              <p className="text-sm text-zinc-500 italic">
                "No pitches. No decks. Just proof of work and shared curiosity."
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:hello@celaya.solutions" className="flex items-center space-x-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 glass-card rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm">hello@celaya.solutions</span>
              </a>
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/chriscelaya" className="w-12 h-12 glass-card rounded-sm flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-sm border border-white/5 bg-zinc-950/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Handshake ID</label>
                <input 
                  type="text" 
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="Your Name / Handle"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Secure Email</label>
                <input 
                  type="email" 
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="address@domain.tld"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Proof of Work / Project Scope</label>
                <textarea 
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
                  placeholder="What systems are you debugging right now?"
                  required
                />
              </div>
              
              <button 
                type="submit"
                disabled={submitted}
                className={`w-full py-4 font-mono uppercase text-xs tracking-[0.2em] transition-all flex items-center justify-center space-x-2
                  ${submitted ? 'bg-emerald-500 text-black' : 'bg-white text-black hover:scale-[1.01] active:scale-[0.99]'}
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

        <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <p>© 2024 Celaya Solutions. A Cognitive Systems Lab.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Lab Status</a>
            <p>El Paso, TX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
