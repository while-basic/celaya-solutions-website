//----------------------------------------------------------------------------
// File:       CHATBOT_SETUP.md
// Project:    celaya-solutions-website
// Created by: Celaya Solutions, 2025
// Author:     Christopher Celaya <chris@chriscelaya.com>
// Description: Setup instructions for Claude 3.5 chatbot integration
// Version:    1.0.0
// License:    MIT
// Last Update: December 2025
//----------------------------------------------------------------------------

# Claude 3.5 Chatbot Setup

This website includes an integrated Claude 3.5 Sonnet chatbot that is aware of the CLOS documentation and can answer questions about the project.

## Features

- **Documentation-Aware**: The chatbot has access to all documentation in the `/documentation` directory
- **Context-Aware Conversations**: Maintains conversation history for natural dialogue
- **Modern UI**: Beautiful, responsive chat interface matching the site design
- **Real-time Responses**: Powered by Claude 3.5 Sonnet for intelligent, accurate answers

## Setup Instructions

### 1. Get Your Anthropic API Key

1. Go to [Anthropic Console](https://console.anthropic.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key (starts with `sk-ant-`)

### 2. Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit `.env` and add your API key:

```env
VITE_ANTHROPIC_API_KEY=sk-ant-your-actual-api-key-here
```

**Important**: Never commit your `.env` file to version control. It's already in `.gitignore`.

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

The chatbot will appear as a floating button in the bottom-right corner of the website.

## Usage

1. Click the chat icon in the bottom-right corner
2. Ask questions about CLOS, the research, or Celaya Solutions
3. The chatbot will respond with information from the documentation

### Example Questions

- "What is CLOS?"
- "Tell me about the research goals"
- "What technology stack does Celaya Solutions use?"
- "Explain the cognitive optimization research"
- "What is the project philosophy?"

## Architecture

### Components

- **`components/Chatbot.tsx`**: Main chatbot UI component
- **`api/chat.ts`**: Claude API integration and request handling
- **`utils/documentationLoader.ts`**: Documentation context provider

### How It Works

1. User sends a message through the chat interface
2. The message is formatted with documentation context
3. Request is sent to Claude API with conversation history
4. Claude responds with documentation-aware answer
5. Response is displayed in the chat interface

### Documentation Context

The chatbot has access to information about:

- Research goals and methodology
- CLOS system architecture
- Development tech stack
- Project philosophy
- Planning and roadmaps
- Collaboration guidelines
- Coined terms and references

## Security Notes

⚠️ **Important**: The current implementation uses `dangerouslyAllowBrowser: true` for the Anthropic SDK, which is suitable for development but **NOT recommended for production**.

### For Production

You should:

1. Create a backend API endpoint (Node.js/Express, Next.js API routes, etc.)
2. Move the API key to server-side environment variables
3. Proxy requests through your backend
4. Never expose the API key to the client

Example backend structure:

```typescript
// backend/api/chat.ts
import Anthropic from '@anthropic-ai/sdk';

export async function POST(req: Request) {
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY, // Server-side only
  });
  
  // Handle request...
}
```

## Customization

### Modify Documentation Context

Edit `utils/documentationLoader.ts` to update the documentation context provided to the chatbot.

### Change Chatbot Appearance

Edit `components/Chatbot.tsx` to customize:
- Colors and styling
- Position and size
- Welcome message
- UI elements

### Adjust Claude Settings

Edit `api/chat.ts` to modify:
- Model version (currently `claude-3-haiku-20240307`)
- Max tokens (currently 512 for concise responses)
- Conversation history length (currently last 10 messages)
- System prompt for response style

## Troubleshooting

### Chatbot Not Responding

1. Check that your API key is correctly set in `.env`
2. Verify the API key is valid in Anthropic Console
3. Check browser console for error messages
4. Ensure you have sufficient API credits

### API Key Error

If you see "Anthropic API key not configured":
1. Make sure `.env` file exists in project root
2. Verify the variable name is exactly `VITE_ANTHROPIC_API_KEY`
3. Restart the development server after adding the key

### CORS Errors

If you encounter CORS issues:
1. This is expected with browser-based API calls
2. Implement a backend proxy (see Security Notes above)
3. Or use Anthropic's CORS-enabled endpoints if available

## Cost Considerations

- Claude API charges per token (input + output)
- Current settings: max 2048 output tokens per response
- Monitor usage in [Anthropic Console](https://console.anthropic.com/)
- Consider implementing rate limiting for production

## Future Enhancements

Potential improvements:
- [ ] Backend API proxy for security
- [ ] Rate limiting and usage tracking
- [ ] Conversation persistence (localStorage/database)
- [ ] File upload for document analysis
- [ ] Voice input/output
- [ ] Multi-language support
- [ ] Suggested questions/prompts
- [ ] Export conversation history

---

Built with 🤍 by [Celaya Solutions](https://celayasolutions.com)

