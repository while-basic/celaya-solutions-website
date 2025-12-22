
import React from 'react';
import { Eye, Mic, Shield, Zap, Layout, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { time: '00:00', load: 12, awareness: 20 },
  { time: '04:00', load: 8, awareness: 15 },
  { time: '08:00', load: 45, awareness: 60 },
  { time: '12:00', load: 78, awareness: 85 },
  { time: '16:00', load: 65, awareness: 90 },
  { time: '20:00', load: 34, awareness: 75 },
  { time: '23:59', load: 15, awareness: 40 },
];

const ClosSection: React.FC = () => {
  return (
    <section id="clos" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Featured Product</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">CLOS <span className="text-zinc-600">v0.1</span></h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              The Cognitive Life Operating System is a privacy-first, voice-native meta-cognitive mirror. It tracks patterns, detects cognitive drift, and acts as an external executive function for the technical mind.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="space-y-3">
                <div className="flex items-center text-white space-x-3">
                  <Mic className="w-5 h-5 text-zinc-500" />
                  <span className="font-medium">Voice First</span>
                </div>
                <p className="text-sm text-zinc-500">Zero-friction capture via Apple Ecosystem shortcuts and local STT.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-white space-x-3">
                  <Shield className="w-5 h-5 text-zinc-500" />
                  <span className="font-medium">Privacy Hardened</span>
                </div>
                <p className="text-sm text-zinc-500">Local LLM inference where possible. No behavioral data harvesting.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-white space-x-3">
                  <Activity className="w-5 h-5 text-zinc-500" />
                  <span className="font-medium">Pattern Detection</span>
                </div>
                <p className="text-sm text-zinc-500">Detecting burnout, flow state triggers, and decision fatigue cycles.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-white space-x-3">
                  <Layout className="w-5 h-5 text-zinc-500" />
                  <span className="font-medium">Apple Native</span>
                </div>
                <p className="text-sm text-zinc-500">Deep integration with SwiftUI, HealthKit, and iCloud sync.</p>
              </div>
            </div>

            <button className="px-6 py-3 bg-zinc-900 border border-white/5 hover:border-white/20 transition-all text-sm font-mono uppercase">
              Join Private Beta
            </button>
          </div>

          <div className="relative">
            <div className="aspect-square glass-card rounded-2xl p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase">System Intelligence Status</p>
                  <p className="text-2xl font-bold">Optimal Alignment</p>
                </div>
                <div className="bg-emerald-500/10 text-emerald-500 text-[10px] font-mono px-2 py-1 rounded">LIVE</div>
              </div>
              
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="time" stroke="#444" fontSize={10} axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ background: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', fontSize: '10px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="awareness" stroke="#fff" fillOpacity={1} fill="url(#colorLoad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase">Cognitive Load</p>
                  <p className="text-lg font-mono">34%</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase">Focus Score</p>
                  <p className="text-lg font-mono">92/100</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase">Pattern Match</p>
                  <p className="text-lg font-mono">High</p>
                </div>
              </div>
            </div>
            {/* Ambient Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-zinc-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosSection;
