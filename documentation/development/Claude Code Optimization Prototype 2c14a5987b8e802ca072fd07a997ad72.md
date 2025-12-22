# Claude Code Optimization Prototype

Last edited time: December 6, 2025 5:18 AM

---

**CLAUDE CODE PROMPT - LIFE OPTIMIZATION APP PROTOTYPE**

## Project Overview

Build a lightweight iOS app prototype that captures daily life events through voice memos, transcribes them to text, and feeds them into an LLM for pattern analysis and life optimization insights.

## Core Requirements

### 1. Voice Capture Integration

- Integrate with iOS Shortcuts to trigger voice memo recordings
- Capture points: Morning (wake-up thoughts) and Evening (midnight work review)
- Use Apple’s native Voice Memos app via Shortcuts automation
- Triggers: Time-based (morning/midnight) and proximity-based

### 2. Transcription Pipeline

- Automatically transcribe voice memos to text
- Use iOS Speech Recognition framework (on-device, free)
- Copy transcribed text directly to clipboard
- Handle transcription errors gracefully

### 3. LLM Integration

- Feed clipboard content into Claude API with pre-written prompt
- Prompt focus areas:
    - Pattern recognition in daily events
    - Decision optimization for building a software company
    - Innovative product ideas identification
    - Strategic business insights
    - Forward-thinking opportunities

### 4. Minimal Dependencies

- Use native iOS frameworks where possible:
    - Speech (for transcription)
    - AVFoundation (for audio)
    - UIKit/SwiftUI (for UI)
- Claude API (only external dependency)

### 5. Data Flow

```
Voice Memo → Transcription → Clipboard → LLM Prompt → Analysis → Display Insights

```

## Technical Stack

- **Platform**: iOS (Swift/SwiftUI)
- **Transcription**: iOS Speech Recognition framework
- **LLM**: Claude API (Anthropic)
- **Automation**: iOS Shortcuts integration
- **Storage**: Local (UserDefaults for now)

## MVP Features (Priority Order)

1. Manual voice recording button
2. Automatic transcription to text
3. Display transcribed text
4. Send to Claude API with preset prompt
5. Display AI insights/analysis
6. Simple history view (last 5 entries)

## Preset LLM Prompt Template

```
You are a strategic life optimization coach for an entrepreneur building Solvaya Solutions in El Paso, Texas.

Context: The user is focused on:
- Building innovative software products
- Making optimal business decisions
- Becoming known as a forward-thinking innovator
- Creating apps and solutions that don't currently exist
- Generating sustainable recurring income

Daily Entry:
{TRANSCRIBED_TEXT}

Provide:
1. Key patterns or insights from this entry
2. Strategic opportunities identified
3. Innovative product ideas sparked
4. Recommended next actions for business growth
5. Decision optimization suggestions

Keep responses actionable and forward-thinking.

```

## UI Requirements (Minimal)

- Single main screen with:
    - Record button (large, centered)
    - Transcription status indicator
    - Transcribed text display area
    - “Analyze” button
    - AI insights display area
    - Simple navigation to history

## iOS Shortcuts Setup Instructions

Include in README:

1. Create morning automation (7 AM or user’s wake time)
2. Create evening automation (midnight)
3. Shortcuts should open app and trigger recording
4. Optional: Location-based triggers (home, work, etc.)

## Security & Privacy

- All transcription happens on-device
- Only transcribed text sent to Claude API
- No audio stored remotely
- User controls all data

## Success Criteria

- Record voice → See transcription in < 5 seconds
- Get AI insights in < 10 seconds
- Zero crashes during basic workflow
- Works offline for recording/transcription
- Requires internet only for AI analysis

## File Structure

```
LifeOptimizer/
├── App/
│   ├── LifeOptimizerApp.swift
│   └── ContentView.swift
├── Services/
│   ├── TranscriptionService.swift
│   ├── ClaudeAPIService.swift
│   └── ClipboardService.swift
├── Models/
│   └── LifeEntry.swift
├── Views/
│   ├── RecordingView.swift
│   ├── AnalysisView.swift
│   └── HistoryView.swift
└── Resources/
    └── Info.plist

```

## Configuration Needed

- Add to Info.plist:
    - NSMicrophoneUsageDescription
    - NSSpeechRecognitionUsageDescription
- Claude API key (user provides or hardcode for prototype)

## Build Instructions

1. Start with SwiftUI single-view app template
2. Implement transcription service first (test independently)
3. Add Claude API integration
4. Connect UI components
5. Test full workflow end-to-end
6. Document Shortcuts setup for user

## Phase 2 Enhancements (Not Now)

- Automatic cloud sync
- Advanced pattern recognition
- Multiple daily capture points
- Trend visualization
- Export capabilities

---

**Start with the transcription service and basic recording UI. Get that working first, then add the Claude API integration. Focus on making the core workflow bulletproof before adding any polish.**