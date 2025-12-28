
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot, User, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Systems online. I'm the Celaya Solutions interface. How can I assist your cognitive discovery today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: userText,
        config: {
          systemInstruction: `You are the Celaya Solutions AI assistant. You represent Chris Celaya's innovation lab in El Paso. 
          You focus on:
          1. Systems-level thinking (architecture over wrappers).
          2. Privacy-first philosophy (on-device processing, user agency).
          3. CLOS (Cognitive Life Operating System) which acts as an external executive function and metacognitive mirror.
          4. Innovation in the El Paso tech scene.
          
          Tone: Confident, highly technical, concise, declarative. 
          Avoid: Buzzwords, corporate fluff, apologies. 
          Goal: Reveal patterns and explain technical infrastructure clearly.`,
          temperature: 0.7,
        }
      });

      const botText = response.text || "I encountered a processing drift. Please rephrase your query.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'bot', text: "Error in retrieval pipeline. Ensure secure connection." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* FAB */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 border border-white/20"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-[90vw] md:w-[400px] h-[600px] glass-card rounded-xl border border-white/10 flex flex-col z-50 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="p-5 border-b border-white/5 bg-zinc-950/80 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-zinc-900 border border-white/10 rounded flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-tight uppercase">CLOS Assistant</h4>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase">gemini-3-pro Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-sm text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-white text-black font-medium' 
                    : 'bg-zinc-900 border border-white/5 text-zinc-300'
                }`}>
                  <div className="flex items-center space-x-2 mb-2 opacity-50">
                    {m.role === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                    <span className="text-[9px] font-mono uppercase tracking-widest">{m.role}</span>
                  </div>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 border border-white/5 p-4 rounded-sm">
                  <Loader2 className="w-4 h-4 text-zinc-500 animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/5 bg-zinc-950/80">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Ask about systems architecture..."
                className="w-full bg-zinc-900 border border-white/10 p-4 pr-12 text-sm focus:outline-none focus:border-white/30 transition-colors rounded-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-white/5 rounded transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
            <p className="text-[8px] font-mono text-zinc-700 mt-3 text-center uppercase tracking-widest">
              Secured Session • No Behavioral Data Persistent
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
