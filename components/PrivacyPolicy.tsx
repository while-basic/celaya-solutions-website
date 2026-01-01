import React from 'react';

const PrivacyPolicy: React.FC = () => (
  <section id="privacy-policy" className="py-24 px-6 bg-black border-t border-white/5">
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Policy</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Celaya Solutions Privacy Policy</h2>
        <p className="text-sm font-mono text-zinc-500 mt-4">Site URL: https://celaya.solutions</p>
      </div>

      <div className="space-y-10 text-zinc-400 font-light leading-relaxed">
        <div>
          <h3 className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-3">Scope</h3>
          <p>
            This policy covers the use of Celaya Solutions instruments, including the Notion Miner GPT and its backend services.
          </p>
        </div>

        <div>
          <h3 className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-3">Data We Collect</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Operational metrics: session ID, timestamp, action name, input size, output size, success/failure, and whether a run was gated.</li>
            <li>Temporary files: your uploaded Notion export is stored only while it is being processed.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-3">How We Use Data</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>To deliver the requested functionality (cleaning and chunking Notion exports).</li>
            <li>To enforce usage limits and determine when to prompt for an upgrade.</li>
            <li>To improve system reliability and plan capacity.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-3">Data Storage and Retention</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Operational metrics are stored in a telemetry database.</li>
            <li>Uploaded files are deleted immediately after processing.</li>
            <li>We do not retain or index the contents of your Notion pages beyond the processing step.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-3">Data Sharing</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>We do not sell or share your data with third parties.</li>
            <li>If you choose to upgrade, payment information is handled by Stripe; we do not store payment details.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-3">User Choices</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>You may stop using the service at any time.</li>
            <li>To request removal of telemetry associated with your API key, contact us.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-3">Contact</h3>
          <p>
            For questions or concerns about this policy, please reach out to the Celaya Solutions support channel.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default PrivacyPolicy;
