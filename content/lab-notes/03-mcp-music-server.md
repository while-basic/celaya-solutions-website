---
title: "The MCP Server I Needed Didn’t Exist"
date: "December 24, 2024"
author: "Chris Celaya"
tags: ["MCP", "Music", "Automation"]
status: "draft"
readTime: "6 min"
---

# The MCP Server I Needed Didn’t Exist

At some point I realized I was spending more time wiring tools together than actually making music.

I wanted one thing:

> A Model Context Protocol server that could see my DAW, my MPC Key 37, and a 172K‑sample library as a single programmable surface.

Nothing like that existed, so I built a prototype.

## What the Server Actually Does

The MCP server sits in the middle of:

- The IDE (for code‑driven workflows)
- The sampler and MIDI controllers
- A structured index of the sample library

From there, it exposes:

- Tools for browsing, tagging, and querying samples
- Routines for generating expansion packs on demand
- Hooks for routing ideas from “code → sequence → rendered audio”

## Why MCP Instead of a Custom API?

MCP gives me:

- A standard way to describe tools and capabilities
- Drop‑in interoperability with modern LLM clients
- A clean separation between “what the tool does” and “how the model uses it”

The point isn’t to make the AI write music. It’s to turn the entire production environment into something scriptable, repeatable, and debuggable.

## Early Outcomes

Even in the early, rough state:

- Pulling a curated set of samples for a specific mood takes seconds, not hours
- Re‑running a creative pipeline is as simple as re‑running a script
- I can treat a “sound” as a first‑class object: searchable, versioned, and reproducible

This project now feeds back into CLOS as a concrete example of **cognitive tools for creative work**, not just productivity.

---

**Next steps:** hardening the server, documenting the tool interface, and open‑sourcing a minimal version for other producers.


