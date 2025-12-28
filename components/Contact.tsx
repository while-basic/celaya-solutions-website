
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

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
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's build the <span className="italic">unknown</span>.</h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-md">
              Available for specialized consulting, R&D collaboration, and technical architecture advisory. Based in El Paso, TX — deploying globally.
            </p>
            
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
                <a href="#" className="w-12 h-12 glass-card rounded-sm flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-sm border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Work Email</label>
                <input 
                  type="email" 
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-white/40 transition-colors"
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Project Scope</label>
                <textarea 
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-white/10 p-4 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
                  placeholder="Tell us about the systems you're building..."
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
                  <span>Message Received</span>
                ) : (
                  <>
                    <span>Initialize Contact</span>
                    <Send className="w-3 h-3" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <p>© 2024 Celaya Solutions. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
            <p>Made in El Paso, TX</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
