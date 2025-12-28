
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Play, Shield, Loader2, Cpu, Sparkles, RefreshCcw } from 'lucide-react';

const DemoVideo: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'generating' | 'ready' | 'error'>('idle');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [progress, setProgress] = useState(0);

  const messages = [
    "Initializing neural simulation...",
    "Establishing secure local enclave...",
    "Synthesizing voice-first interaction patterns...",
    "Rendering cognitive mirror interface...",
    "Optimizing for Apple Neural Engine architecture...",
    "Encrypting demo stream..."
  ];

  const generateDemo = async () => {
    try {
      // 1. Check/Select API Key
      if (!(await (window as any).aistudio.hasSelectedApiKey())) {
        await (window as any).aistudio.openSelectKey();
      }

      setStatus('generating');
      let msgIdx = 0;
      const msgInterval = setInterval(() => {
        setLoadingMessage(messages[msgIdx % messages.length]);
        msgIdx++;
        setProgress(prev => Math.min(prev + 2, 95));
      }, 4000);

      // 2. Initialize AI
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // 3. Request Video Generation
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'Cinematic minimalist 3D UI of a cognitive AI system called CLOS. Translucent glass interface, soft glowing blue voice waves reacting to sound, neural network patterns connecting in the background, elegant Apple-style aesthetics, macro focus, high-tech and private.',
        config: {
          numberOfVideos: 1,
          resolution: '1080p',
          aspectRatio: '16:9'
        }
      });

      // 4. Poll for completion
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      clearInterval(msgInterval);

      // 5. Fetch Video Data
      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
        setStatus('ready');
        setProgress(100);
      } else {
        throw new Error("Video generation failed to return a link.");
      }
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        await (window as any).aistudio.openSelectKey();
      }
      setStatus('error');
    }
  };

  return (
    <section id="demo" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono text-white/40 uppercase tracking-[0.3em] block mb-4">Visual Proof</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">The <span className="text-zinc-500 italic">Magic</span> in Action.</h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              Experience the visual language of CLOS. Our interface is designed to be invisible when not needed and profoundly insightful when invoked. 
              <br/><br/>
              <span className="text-sm font-mono text-zinc-600 block mt-4 border-l border-zinc-800 pl-4">
                Note: This generates a high-fidelity 1080p preview in real-time using our proprietary generative architecture. This requires a paid API key.
              </span>
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-zinc-500 text-sm">
                <Shield className="w-4 h-4" />
                <span>On-device rendering simulation</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-500 text-sm">
                <Cpu className="w-4 h-4" />
                <span>Apple Neural Engine integration</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-video glass-card rounded-xl overflow-hidden group">
              {status === 'idle' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-zinc-950/40">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cursor-pointer border border-white/10" onClick={generateDemo}>
                    <Play className="w-8 h-8 fill-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Generate System Demo</h3>
                  <p className="text-sm text-zinc-500 max-w-xs mb-8">Click to synthesize a real-time architectural preview of the CLOS cognitive environment.</p>
                  <button 
                    onClick={generateDemo}
                    className="px-8 py-3 bg-white text-black text-xs font-mono uppercase font-bold tracking-widest hover:bg-zinc-200 transition-colors"
                  >
                    Initialize Veo-3.1
                  </button>
                </div>
              )}

              {status === 'generating' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 bg-zinc-950">
                  <Loader2 className="w-12 h-12 text-white animate-spin mb-8 opacity-20" />
                  <div className="w-64 h-1 bg-zinc-900 rounded-full mb-8 overflow-hidden">
                    <div 
                      className="h-full bg-white transition-all duration-500 ease-out" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 animate-pulse">
                      {loadingMessage}
                    </p>
                    <p className="text-[10px] text-zinc-700">Estimated time: 2-3 minutes</p>
                  </div>
                </div>
              )}

              {status === 'ready' && videoUrl && (
                <video 
                  src={videoUrl} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}

              {status === 'error' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 bg-zinc-950 text-center">
                  <div className="text-red-500/50 mb-6">
                    <RefreshCcw className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Generation Interrupted</h3>
                  <p className="text-sm text-zinc-500 mb-8 max-w-xs">An error occurred while communicating with the Veo engine. Please ensure your API key is valid and linked to a paid project.</p>
                  <button 
                    onClick={generateDemo}
                    className="px-8 py-3 border border-white/10 text-white text-xs font-mono uppercase tracking-widest hover:bg-zinc-900"
                  >
                    Retry Generation
                  </button>
                </div>
              )}
              
              {/* Overlay for Ready State */}
              {status === 'ready' && (
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
                  <div className="p-4 glass-card border-white/10 rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Sparkles className="w-3 h-3 text-emerald-500" />
                      <span className="text-[10px] font-mono uppercase tracking-widest">AI Generated Preview</span>
                    </div>
                    <p className="text-[10px] text-zinc-400">CLOS Cognitive Core v0.1</p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="pointer-events-auto p-3 glass-card hover:bg-white hover:text-black transition-colors rounded-full"
                  >
                    <RefreshCcw className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
