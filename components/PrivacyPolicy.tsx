/* Brand tokens: cs-orange, cs-green, cs-gray-700, cs-gray-900, cs-font-mono, cs-font-display, cs-font-body */
import React from 'react';
import { Shield, Clock, FileText, Trash2, CheckCircle, ShieldAlert } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div id="privacy" className="py-24">
      <div className="max-w-[1100px] mx-auto px-10 min-h-screen">
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[0.875rem] font-medium tracking-[0.2em] uppercase text-cs-orange">
              Research Ethics & Governance
            </span>
            <span className="block w-10 h-px bg-cs-orange opacity-50" />
          </div>
          <h2 className="font-display text-[2.5rem] font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
            Ethics & Privacy
          </h2>
          <div className="flex items-center gap-2 text-cs-gray-400 font-mono text-[0.875rem] uppercase tracking-widest">
            <Clock className="w-4 h-4" />
            <span>Protocol Version 1.2 | Updated: Dec 2025</span>
          </div>
        </header>

        <div className="space-y-16">
          {/* Storage Model */}
          <section>
            <h3 className="font-mono text-[0.875rem] text-cs-gray-300 uppercase tracking-[0.15em] mb-8 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Technical Storage Model</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 border border-cs-gray-700 bg-cs-gray-900 rounded">
                <h4 className="font-display text-base font-bold mb-4">Local-First (Primary)</h4>
                <ul className="space-y-3 font-mono text-[0.875rem] text-cs-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cs-green mt-0.5 shrink-0" />
                    <span>Encryption: AES-256 at-rest (macOS FileVault)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cs-green mt-0.5 shrink-0" />
                    <span>Key Management: OS-level Secure Enclave</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cs-green mt-0.5 shrink-0" />
                    <span>Access: User account only (Zero service access)</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 border border-cs-gray-700 bg-cs-gray-900 rounded">
                <h4 className="font-display text-base font-bold mb-4">Cloud Backup (Secondary)</h4>
                <ul className="space-y-3 font-mono text-[0.875rem] text-cs-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cs-orange mt-0.5 shrink-0" />
                    <span>Encryption: End-to-end (AES-256-GCM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cs-orange mt-0.5 shrink-0" />
                    <span>Client-side encryption before upload</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cs-orange mt-0.5 shrink-0" />
                    <span>Anonymization: PII removed (names, locations, dates)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section className="border-l-2 border-cs-orange/30 pl-8">
            <h3 className="font-mono text-[0.875rem] text-cs-gray-300 uppercase tracking-[0.15em] mb-8 flex items-center gap-2">
              <Trash2 className="w-4 h-4" />
              <span>Data Retention Hierarchy</span>
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-display text-base font-bold text-cs-gray-200 mb-2">1. Aggregated/Published Data</h4>
                <p className="font-body text-base text-cs-gray-400 leading-relaxed">
                  Cannot be deleted once published (Scientific reproducibility requirement). Covered by CC BY 4.0 license.
                </p>
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-cs-gray-200 mb-2">2. Individual Raw Data</h4>
                <p className="font-body text-base text-cs-gray-400 leading-relaxed">
                  Retained 10 years post-publication minimum. Deletion requests honored within 30 days unless already aggregated.
                </p>
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-cs-gray-200 mb-2">3. Active Study Data</h4>
                <p className="font-body text-base text-cs-gray-400 leading-relaxed">
                  Retained until study completion. Deletion requests pause participation and remove future collection only.
                </p>
              </div>
            </div>
            <div className="mt-8 p-4 bg-cs-gray-900 rounded border border-cs-gray-700 inline-block">
              <a href="mailto:hello@celayasolutions.com" className="font-mono text-[0.875rem] text-cs-orange uppercase tracking-widest hover:brightness-110 transition-colors flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Request Data Deletion via Email</span>
              </a>
            </div>
          </section>

          {/* IRB Statement */}
          <section className="p-8 border border-cs-gray-700 bg-cs-gray-900 rounded">
            <h3 className="font-mono text-[0.875rem] text-cs-gray-300 uppercase tracking-[0.15em] mb-8 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              <span>Ethics Review & IRB Status</span>
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="font-display text-base font-bold text-cs-green mb-2">Current Study (N=1)</h4>
                <p className="font-body text-base text-cs-gray-400 leading-relaxed">
                  No external IRB review required for self-experimentation (self as sole participant). Protocol follows the common law research exception for self-directed inquiry.
                </p>
              </div>
              <div className="border-t border-cs-gray-700 pt-6">
                <h4 className="font-display text-base font-bold text-cs-orange mb-2">Future Commitments</h4>
                <p className="font-body text-base text-cs-gray-400 leading-relaxed mb-4">
                  Any study involving external participants (collaborators, cohorts, or replication contributors) will require formal institutional IRB approval before data collection begins.
                </p>
                <div className="flex gap-6 font-mono text-[0.875rem] text-cs-gray-400 uppercase tracking-widest">
                  <span>Planned IRB Submission: Q2 2026</span>
                  <span>Expected Approval: Q3 2026</span>
                </div>
              </div>
            </div>
          </section>

          <footer className="pt-12 border-t border-cs-gray-700 text-center">
            <p className="font-mono text-[0.875rem] text-cs-gray-300 uppercase tracking-[0.15em] mb-3">Final Declaration</p>
            <p className="font-body text-base text-cs-gray-400 italic max-w-2xl mx-auto">
              "These protocols ensure the lab reads as research infrastructure, not a commercial product. We preserve the human in the loop, always."
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
