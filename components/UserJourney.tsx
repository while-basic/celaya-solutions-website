
import React, { useState } from 'react';
import { Sun, Zap, Moon, ChevronRight, ChevronDown, Coffee } from 'lucide-react';

const UserJourney: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const mainSteps = [
    {
      time: "08:15 AM",
      icon: <Sun className="w-5 h-5" />,
      title: "Ambient Awareness",
      content: "As you wake, CLOS cross-references your HealthKit recovery data with your scheduled deep-work blocks. It subtly suggests adjusting your hardest task for 10 AM, when your cognitive readiness is peak.",
      focus: "Privacy: All physiological data remains on-device."
    },
    {
      time: "04:45 PM",
      icon: <Zap className="w-5 h-5" />,
      title: "Drift Detection",
      content: "CLOS detects a pattern of repetitive low-value task switching—a known precursor to your burnout loops. It triggers a 'Refocus' automation, silencing non-essential notifications and suggesting a 10-minute break.",
      focus: "Pattern Matching: Behavioral reflection in real-time."
    }
  ];

  const hiddenSteps = [
    {
      time: "01:30 PM",
      icon: <Coffee className="w-5 h-5" />,
      title: "Decision Support",
      content: "During a technical review, you capture a voice memo about a system bottleneck. CLOS immediately maps this to an architectural pattern you noted 3 months ago, surfacing the correlation without a manual search.",
      focus: "Voice-First: Instant capture via Apple Watch."
    },
    {
      time: "09:00 PM",
      icon: <Moon className="w-5 h-5" />,
      title: "Cognitive Reflection",
      content: "A summary of the day's meta-patterns is generated. You see the relationship between late-night caffeine and the next day's 'creative fog.' CLOS proposes an experiment for tomorrow.",
      focus: "Metacognition: Turning data into actionable insight."
    }
  ];

  return (
    <section className="py-32 px-6 bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">User Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">A day with <br/><span className="text-zinc-500 italic">CLOS</span>.</h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              CLOS isn't an assistant you 'use.' It's an environment you 'inhabit.' It lives in the background, observing patterns so you don't have to, ensuring your most valuable resource—attention—is never wasted.
            </p>
            <div className="p-6 border border-emerald-500/20 bg-emerald-500/5 rounded-sm">
              <h4 className="text-xs font-mono uppercase text-emerald-500 mb-2">The Result</h4>
              <p className="text-sm text-zinc-300">
                Reduced cognitive load by an average of 22% and a 3x increase in identified 'Aha!' moments through automated cross-linking.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-4">
            {mainSteps.map((step, idx) => (
              <div key={idx} className="group relative flex items-start space-x-6 p-6 hover:bg-white/5 transition-colors border-l border-white/10 hover:border-white/30">
                <div className="mt-1 flex-shrink-0 text-zinc-500 group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-zinc-600 uppercase">{step.time}</span>
                    <ChevronRight className="w-3 h-3 text-zinc-800" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-zinc-500 mb-4 leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {step.content}
                  </p>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-700">
                    {step.focus}
                  </div>
                </div>
              </div>
            ))}

            {isExpanded && hiddenSteps.map((step, idx) => (
              <div key={idx} className="group relative flex items-start space-x-6 p-6 hover:bg-white/5 transition-colors border-l border-white/10 hover:border-white/30 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="mt-1 flex-shrink-0 text-zinc-500 group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-zinc-600 uppercase">{step.time}</span>
                    <ChevronRight className="w-3 h-3 text-zinc-800" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-zinc-500 mb-4 leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {step.content}
                  </p>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-700">
                    {step.focus}
                  </div>
                </div>
              </div>
            ))}

            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center space-x-2 py-4 border border-white/5 hover:bg-white/5 transition-all group mt-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500"
            >
              <span>{isExpanded ? 'Hide Trace' : 'View Full Day Trace'}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserJourney;
