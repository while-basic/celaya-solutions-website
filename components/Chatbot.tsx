//----------------------------------------------------------------------------
// File:       Chatbot.tsx
// Project:    celaya-solutions-website
// Created by: Celaya Solutions, 2025
// Author:     Christopher Celaya <chris@chriscelaya.com>
// Description: Claude 3.5 chatbot component with documentation awareness
// Version:    1.0.0
// License:    MIT
// Last Update: December 2025
//----------------------------------------------------------------------------

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { handleChatRequest } from '../api/chat';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hey! 👋 I\'m here if you have questions about CLOS or Celaya Solutions. What would you like to know?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Get conversation history (last 10 messages for context)
      const conversationHistory = messages.slice(-10).map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await handleChatRequest({
        message: inputValue,
        conversationHistory,
      });

      if (response.error) {
        const errorMessage: Message = {
          role: 'assistant',
          content: `Sorry, I encountered an error: ${response.error}`,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      } else {
        const assistantMessage: Message = {
          role: 'assistant',
          content: response.response,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, something went wrong. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-white text-black rounded-full p-4 shadow-2xl hover:scale-110 transition-transform duration-200 group"
          aria-label="Open chat"
          data-test="chatbot-toggle"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div
          className="
            fixed 
            inset-x-0 bottom-0 
            sm:inset-auto sm:bottom-6 sm:right-6 sm:left-auto
            z-50 
            w-full sm:w-[360px] md:w-[400px] 
            h-[70vh] sm:h-[520px] md:h-[600px] max-h-[90vh]
            bg-zinc-950 border border-white/10 rounded-t-2xl sm:rounded-2xl 
            shadow-2xl flex flex-col overflow-hidden
          "
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border-b border-white/10 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">CLOS Assistant</h3>
                <p className="text-xs text-zinc-400">Powered by Claude 3.5</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Close chat"
              data-test="chatbot-close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-white text-black'
                      : 'bg-white/5 text-white border border-white/10'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className="text-[10px] mt-1 opacity-50">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                  <Loader2 className="w-5 h-5 animate-spin text-white" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-4 bg-zinc-900/50">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about CLOS..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                disabled={isLoading}
                data-test="chatbot-input"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-white text-black rounded-xl px-4 py-3 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Send message"
                data-test="chatbot-send"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-zinc-500 mt-2 text-center">
              Powered by Claude 3.5 Sonnet
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

