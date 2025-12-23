---
title: "Building CLOS: Week 1 Findings"
date: "December 22, 2024"
author: "Chris Celaya"
tags: ["CLOS", "Voice Capture", "Experiment Log"]
status: "draft"
readTime: "7 min"
---

# Building CLOS: Week 1 Findings

Week one of the CLOS build was about two things: getting real data flowing in, and being honest about where the friction actually lives.

Most of the work happened in three areas:

1. Voice capture friction
2. Speech‑to‑text accuracy with technical language
3. How fast the system has to respond before I stop trusting it

## Voice Capture Friction

The original plan was simple: open a shortcut, speak a thought, let the system handle the rest.

In practice:

- Cold‑start time on mobile matters more than I expected
- Anything over ~2 taps before speaking is enough for me to skip capturing
- Background noise in the shop is a constant variable, not an edge case

**Finding:** CLOS needs a *near‑zero interaction* capture surface. Physical buttons, always‑listening windows, and hardware triggers beat any “clever” UI.

## Speech‑to‑Text Accuracy

Technical language and invented terms broke most off‑the‑shelf speech‑to‑text setups:

- Model names (e.g., `llama.cpp`, `CoreML`, `MCP`) were consistently wrong
- Domain‑specific phrases around power systems and datacenters were mangled
- My own coined terms around “cognitive drift” and “attention rails” were basically noise

The current mitigation:

- Custom vocabulary lists for common terms
- Lightweight post‑processing rules for known mis‑transcriptions
- Flagging low‑confidence segments for manual review inside the lab interface

## Latency and Trust

If CLOS takes more than a couple seconds to surface something useful after a capture, I mentally mark it as “journal storage,” not “cognitive co‑pilot.”

The rough targets after week one:

- **< 250ms** from capture end to first insight for simple pattern matches
- **< 1s** for more complex multi‑step pipelines

Anything slower feels like a blog engine, not an operating system for thought.

## Where Week 2 Is Going

Week two focuses on:

- Hardening the capture shortcuts
- Experimenting with on‑device adaptation of the speech model
- Pushing more of the pipeline into local‑first components

The question I'm chasing: **how invisible can the capture layer become before it stops feeling like “using a tool” at all?**

---

**Related note:** This entry builds directly on *Why Local‑First AI Isn’t Just About Privacy* and feeds into the longer‑term CLOS technical spec.


