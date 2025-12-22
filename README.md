# Celaya Solutions Website

A modern research lab website featuring CLOS (Christopher Life Operating System) - a personal cognitive research environment for systematic self-experimentation, flow state optimization, and computational phenomenology research.

## Features

- 🎨 Modern, responsive design with dark theme
- 💬 Integrated Claude 3.5 Sonnet chatbot with documentation awareness
- 📚 Comprehensive documentation system
- 🔬 Research showcase and lab notes
- 📊 Interactive architecture diagrams
- 🚀 Built with React 19 + TypeScript + Vite

## Run Locally

**Prerequisites:** Node.js (v18 or higher)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure the chatbot (optional but recommended):**
   
   Create a `.env` file in the project root:
   ```bash
   cp .env.example .env
   ```
   
   Add your Anthropic API key to `.env`:
   ```env
   VITE_ANTHROPIC_API_KEY=sk-ant-your-api-key-here
   ```
   
   Get your API key from [Anthropic Console](https://console.anthropic.com/)
   
   See [CHATBOT_SETUP.md](./CHATBOT_SETUP.md) for detailed chatbot configuration.

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```
celaya-solutions-website/
├── components/          # React components
│   ├── Chatbot.tsx     # Claude 3.5 chatbot component
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── ...
├── documentation/       # Project documentation
│   ├── research/       # Research documents
│   ├── development/    # Development notes
│   ├── prompts/        # AI prompts
│   └── ...
├── api/                # API integrations
│   └── chat.ts         # Claude API handler
├── utils/              # Utility functions
│   └── documentationLoader.ts
└── ...
```

## Chatbot Features

The integrated Claude 3.5 chatbot can answer questions about:
- CLOS system and architecture
- Research goals and methodology
- Technology stack
- Project philosophy
- Development roadmap

Click the chat icon in the bottom-right corner to start a conversation!

## Tech Stack

- **Frontend:** React 19 + TypeScript
- **Build Tool:** Vite
- **AI:** Claude 3.5 Sonnet (Anthropic)
- **Icons:** Lucide React
- **Charts:** Recharts
- **Styling:** CSS with modern design system

## Documentation

- [Chatbot Setup Guide](./CHATBOT_SETUP.md) - Detailed chatbot configuration
- [Documentation Directory](./documentation/) - Full project documentation
- [Content Strategy](./documentation/CONTENT_STRATEGY.md)
- [Design System](./documentation/DESIGN_SYSTEM.md)

## Philosophy

- 🏗️ Build in Public
- 🔬 Research-driven development
- 🍎 Apple ecosystem + Local AI focus
- 📍 Based in El Paso, TX

---

Built with 🤍 by [Celaya Solutions](https://celayasolutions.com)
