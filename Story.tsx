
import React from 'react';
import { Zap, Building2, Music, Code } from 'lucide-react';

const Story: React.FC = () => {
  const timeline = [
    {
      year: "2013-2024",
      icon: <Building2 className="w-5 h-5" />,
      title: "Industrial Electrical Systems",
      description: "11+ years across T5 Data Centers, CN Wire, and Schneider Electric. Recognized for systems-level thinking—understanding how components integrate into larger infrastructures."
    },
    {
      year: "2020-Present",
      icon: <Music className="w-5 h-5" />,
      title: "Music Production as C-Cell",
      description: "Weekly collaboration sessions applying engineering mindset to song structure and production. Built MCP server to bridge MIDI controllers with 172K+ sample libraries."
    },
    {
      year: "2024",
      icon: <Code className="w-5 h-5" />,
      title: "AI Systems Research",
      description: "Self-taught ML/AI development. Building CLOS and cognitive optimization systems. Bridging physical infrastructure expertise with software and cognitive science."
    },
    {
      year: "2024-Present",
      icon: <Zap className="w-5 h-5" />,
      title: "Celaya Solutions Founded",
      description: "Research lab focused on human-AI integration, privacy-first architecture, and cognitive enhancement. Based in El Paso, deploying globally."
    }
  ];

  return (
    <section id="story" className="py-32 px-6 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column - Story */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Origin Story</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              From electrical systems to <span className="text-zinc-600">cognitive systems</span>.
            </h2>

            <div className="prose prose-invert max-w-none space-y-6 text-zinc-400 leading-relaxed">
              <p className="text-lg">
                I spent over a decade as an industrial electrical technician, debugging complex systems at scale—data centers, manufacturing facilities, infrastructure that couldn't afford to fail.
              </p>
              
              <p>
                What I learned: <span className="text-white font-medium">the best debugging isn't at the component level, it's at the systems level.</span> You don't just fix the failing drive; you understand how power distribution, thermal management, and control systems interact.
              </p>

              <p>
                Then I realized: <span className="text-white font-medium">human cognition is also a system</span>—and it's equally debuggable.
              </p>

              <p>
                Most productivity tools treat symptoms (notifications, task lists). I'm interested in architecture: How do attention, memory, and decision-making integrate? What are the feedback loops? Where are the bottlenecks?
              </p>

              <p>
                That's what CLOS is—applying industrial systems thinking to personal cognitive infrastructure. Voice-native capture because friction kills data collection. Local-first processing because privacy is architecture, not policy. Pattern detection because humans are terrible at seeing their own loops.
              </p>

              <blockquote className="border-l-2 border-white/20 pl-6 italic text-white">
                "Think Different isn't a slogan. It's a methodology for building frameworks that don't exist yet."
              </blockquote>

              <p className="text-sm text-zinc-600 font-mono">
                — Chris Celaya, Founder & Systems Architect
              </p>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <h3 className="text-xs font-mono uppercase text-zinc-600 mb-8 tracking-widest">Timeline</h3>
              
              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-0 before:bottom-0 before:w-px before:bg-white/10">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative pl-16">
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-sm bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500">
                      {item.icon}
                    </div>
                    
                    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stats Card */}
              <div className="mt-12 glass-card p-6 rounded-sm border border-white/5">
                <h4 className="text-xs font-mono uppercase text-zinc-600 mb-4 tracking-widest">Based In</h4>
                <div className="flex items-baseline space-x-3 mb-2">
                  <span className="text-2xl font-bold">El Paso, TX</span>
                  <span className="text-xs text-zinc-600">🇺🇸 🇲🇽</span>
                </div>
                <p className="text-xs text-zinc-500">
                  Border town perspective. Mexican American. Building technology that respects cultural context and privacy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Statement */}
        <div className="mt-32 max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 rounded-sm border border-white/5">
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-300">
              "I operate with <span className="text-white font-bold">inverse imposter syndrome</span>—exceptional technical skills with difficulty recognizing their value. This lab is my proof of work. Every experiment documented. Every insight shared. No stealth mode."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
