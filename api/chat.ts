//----------------------------------------------------------------------------
// File:       chat.ts
// Project:    celaya-solutions-website
// Created by: Celaya Solutions, 2025
// Author:     Christopher Celaya <chris@chriscelaya.com>
// Description: API endpoint for Claude chatbot integration
// Version:    1.0.0
// License:    MIT
// Last Update: December 2025
//----------------------------------------------------------------------------

import Anthropic from '@anthropic-ai/sdk';
import { formatQueryWithContext } from '../utils/documentationLoader';

export interface ChatRequest {
  message: string;
  conversationHistory?: Array<{ role: 'user' | 'assistant'; content: string }>;
}

export interface ChatResponse {
  response: string;
  error?: string;
}

/**
 * Handle chat requests to Claude API
 */
export async function handleChatRequest(request: ChatRequest): Promise<ChatResponse> {
  try {
    const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
    
    if (!apiKey) {
      return {
        response: '',
        error: 'Anthropic API key not configured. Please add VITE_ANTHROPIC_API_KEY to your .env file.',
      };
    }

    const anthropic = new Anthropic({
      apiKey,
      dangerouslyAllowBrowser: true, // Note: In production, use a backend proxy
    });

    // Format the user's message with documentation context
    const formattedMessage = formatQueryWithContext(request.message);

    // Build conversation history
    const messages: Array<{ role: 'user' | 'assistant'; content: string }> = [
      ...(request.conversationHistory || []),
      { role: 'user', content: formattedMessage },
    ];

    const response = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 512, // Reduced for more concise responses
      system: 'You are a friendly, helpful assistant. Keep responses brief (2-4 sentences) unless the user asks for more detail. Be conversational and warm, not overwhelming.',
      messages,
    });

    const textContent = response.content.find((block) => block.type === 'text');
    
    if (!textContent || textContent.type !== 'text') {
      return {
        response: '',
        error: 'Unexpected response format from Claude API',
      };
    }

    return {
      response: textContent.text,
    };
  } catch (error) {
    console.error('Chat API error:', error);
    return {
      response: '',
      error: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
}

