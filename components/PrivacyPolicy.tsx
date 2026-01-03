
import React from 'react';
import { Shield, Lock, Eye, Terminal, Clock, Database, FileText, Trash2, CheckCircle, ShieldAlert } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div id="privacy" className="pt-40 pb-32 px-6 max-w-5xl mx-auto min-h-screen">
      <header className="mb-16 border-l border-white/10 pl-8">
        <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Research Ethics & Governance</span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Ethics & Privacy</h1>
        <div className="flex items-center space-x-2 text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
          <Clock className="w-3 h-3" />
          <span>Protocol Version 1.2 | Updated: Dec 2025</span>
        </div>
      </header>

      <div className="space-y-20">
        {/* Storage Model (Fix #7) */}
        <section>
          <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-10 flex items-center space-x-3">
            <Shield className="w-4 h-4" />
            <span>Technical Storage Model</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 glass-card border-white/5 rounded-sm">
              <h4 className="text-sm font-bold mb-4">Local-First (Primary)</h4>
              <ul className="space-y-4 text-xs font-mono text-zinc-500">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-3 h-3 text-emerald-500 mt-0.5" />
                  <span>Encryption: AES-256 at-rest (macOS FileVault)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-3 h-3 text-emerald-500 mt-0.5" />
                  <span>Key Management: OS-level Secure Enclave</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-3 h-3 text-emerald-500 mt-0.5" />
                  <span>Access: User account only (Zero service access)</span>
                </li>
              </ul>
            </div>
            <div className="p-8 glass-card border-white/5 rounded-sm">
              <h4 className="text-sm font-bold mb-4">Cloud Backup (Secondary)</h4>
              <ul className="space-y-4 text-xs font-mono text-zinc-500">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-3 h-3 text-blue-500 mt-0.5" />
                  <span>Encryption: End-to-end (AES-256-GCM)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-3 h-3 text-blue-500 mt-0.5" />
                  <span>Client-side encryption before upload</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-3 h-3 text-blue-500 mt-0.5" />
                  <span>Anonymization: PII removed (names, locations, dates)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Retention (Fix #6) */}
        <section className="group border-l border-white/5 pl-8 hover:border-white/20 transition-colors">
          <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-10 flex items-center space-x-3">
            <Trash2 className="w-4 h-4" />
            <span>Data Retention Hierarchy</span>
          </h2>
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-zinc-200 uppercase">1. Aggregated/Published Data</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Cannot be deleted once published (Scientific reproducibility requirement). Covered by CC BY 4.0 license.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-zinc-200 uppercase">2. Individual Raw Data</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Retained 10 years post-publication minimum. Deletion requests honored within 30 days unless already aggregated.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-zinc-200 uppercase">3. Active Study Data</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Retained until study completion. Deletion requests pause participation and remove future collection only.
              </p>
            </div>
          </div>
          
          <div className="mt-10 p-6 bg-zinc-950/50 rounded-sm border border-white/5 inline-block">
            <a href="#deletion-form" className="text-[10px] font-mono text-blue-500 uppercase tracking-widest hover:text-blue-400 transition-colors flex items-center space-x-2">
              <FileText className="w-3 h-3" />
              <span>Request Data Deletion Certificate</span>
            </a>
          </div>
        </section>

        {/* IRB Statement (Fix #8) */}
        <section className="p-10 glass-card border-white/10 bg-zinc-950/50 rounded-sm">
          <h2 className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] mb-10 flex items-center space-x-3">
            <ShieldAlert className="w-4 h-4" />
            <span>Ethics Review & IRB Status</span>
          </h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-bold text-emerald-500 mb-2">Current Study (N=1)</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                No external IRB review required for self-experimentation (self as sole participant). Protocol follows the common law research exception for self-directed inquiry.
              </p>
            </div>
            <div className="border-t border-white/5 pt-8">
              <h4 className="text-sm font-bold text-blue-500 mb-2">Future Commitments</h4>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Any study involving external participants (collaborators, cohorts, or replication contributors) will require formal institutional IRB approval before data collection begins.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                <li>Planned IRB Submission: Q2 2026</li>
                <li>Expected Approval: Q3 2026</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="pt-16 border-t border-white/5 text-center">
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em] mb-4">Final Declaration</p>
          <p className="text-xs text-zinc-500 italic max-w-2xl mx-auto">
            "These protocols ensure the lab reads as research infrastructure, not a commercial product. We preserve the human in the loop, always."
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
