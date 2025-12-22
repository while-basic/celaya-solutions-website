# Convert Transcripts & Logs Into On Device Training Data

Last edited time: December 7, 2025 5:04 AM

Implementation-ready plan for converting real-world organic chat transcripts (Cursor, IDE logs, ChatGPT logs, audio transcripts, Notion entries, Apple Journal entries) into a clean training dataset suitable for fine-tuning or training an on-device LLM using Apple’s ML frameworks and Core ML tooling.

This is formatted as a technical blueprint, not just high-level advice.

It includes architecture, data pipelines, schema design, automation, and training workflow.

# **SECTION 1 — CORE GOAL**

Goal:

Use Notion + Apple Shortcuts + Apple’s ML Frameworks to extract, clean, structure, and prepare organic conversational transcripts into a consistent, high-quality dataset for training your own local LLM (Core ML–converted or natively trained model).

This means:

- Taking messy real-world logs
- Cleaning them algorithmically
- Assigning structure/labels
- Exporting to JSONL
- Training or fine-tuning a CoreML-ready transformer

This creates a self-sustaining cognitive dataset for CLOS.

# **SECTION 2 — TARGET TRAINING FORMAT (JSONL)**

The most compatible format for Apple training tools is:

{"instruction": "...", "input": "...", "output": "...", "metadata": {...}}

For your cognitive system, I recommend:

{"role": "user", "content": "...", "psychoContext": {...}}

{"role": "assistant", "content": "...", "analysis": {...}}

Apple’s ML frameworks accept custom annotation fields as long as the dataset loader knows what you’re feeding it.

# **SECTION 3 — THE PIPELINE ARCHITECTURE**

# **(Real World → Notion → Shortcuts → JSONL → ML Training)**

**STEP 1 — Capture raw conversations**

Locations you can gather from:

1. Cursor IDE chat history
2. ChatGPT history (export ZIP)
3. Apple Journal entries
4. Notes
5. Voice transcripts (Journal, Otter, Whisper, etc.)
6. Debug logs from your prototype apps

Your objective: funnel all sources into a single aggregator: Notion.

**STEP 2 — Push data into Notion automatically**

Use Apple Shortcuts → Notion API.

Your Shortcut should:

1. Accept input from share sheet / clipboard / file import.
2. Clean up obvious noise (headers, timestamps, UI artifacts).
3. Tag entries with:
    - Source (cursor, gpt, journal, audio)
    - Timestamp
    - Category (personal, technical, cognitive research, conversation)
    - PsychoContext fields (optional tags)
4. Append into a “Raw Data” database in Notion.

This database becomes the catch-all corpus.

**STEP 3 — Notion’s “Export JSON” becomes your intermediate dataset**

Notion → Settings → Export → JSON

You now have a big JSON dump of pages, blocks, and properties.

**STEP 4 — Apple Shortcuts “Post-Export Cleaning”**

Create a Shortcut that:

1. Takes the exported JSON from Files.
2. Runs a transformation workflow:
    - Remove UI noise
    - Remove formatting artifacts
    - Normalize roles (“user” / “assistant”)
    - Detect conversation turns via regex
    - Remove duplicated breaks
    - Collapse multiline into a single “content” block
    - Identify psychoContext markers if present
3. 
4. Convert into clean JSONL.

The JSONL is saved back into Files.

**STEP 5 — Prepare dataset with**

**Python on-device**

**or**

**Swift Create ML Tools**

You can now use:

- Python environment on Mac
- Swift and Create ML
- MLX (Apple’s new on-device ML training framework)

Workflow:

python prepare_dataset.py  # Cleans, balances, tokenizes

mlx_lm fine-tune model --dataset clean.jsonl

OR

In Swift:

let trainingData = MLDataTable(contentsOf: url)

let parameters = MLTextClassifier.ModelParameters(...)

let model = try MLTextClassifier(trainingData: trainingData, parameters: parameters)

**STEP 6 — Convert to Core ML**

Once trained:

mlx_lm export coreml model --output myModel.mlmodel

Or:

coremltools.convert(model, ...)

Then deploy to iOS.

# **SECTION 4 — WHAT MAKES A “TRULY CLEAN DATASET”**

# **(Your dataset quality = your model’s intelligence)**

Must remove:

- timestamps
- UI artifacts
- assistant formatting
- tool call syntax
- repeated content
- irrelevant blocks
- screen-name prefixes

Must add:

- persona labels
- cognitive modes
- psychoContext
- sentiment score
- flow-state ranking
- role clarity
- consistent speaker tagging
- coherent segmentation

Ideal final structure:

{"role": "user",

"content": "I had a difficult day...",

"psychoContext": {

"sentiment": -0.24,

"emotion": "sadness",

"HR": 82,

"locationFamiliarity": 1.0,

"timeOfDay": "02:22",

"flowState": 9.3

}}

{"role": "assistant",

"content": "Here is your structured cognitive analysis...",

"analysis": {

"cognitiveMode": "Reflective",

"themes": ["identity", "flow"],

"stateLoad": 10

}}

This dataset gives your model cognitive intelligence rather than conversational intelligence.

# **SECTION 5 — REAL-WORLD ALGORITHMS YOU CAN REPURPOSE FOR CLEANING**

**1.**

**Text normalization**

Use:

- SentencePiece
- BytePair Encoding cleanup
- Unicode normalization (NFKC)
- Apple’s natural language framework for tokenization

**2.**

**Speaker diarization (optional)**

Use heuristics:

- “User:”
- “Assistant:”
- “Christopher:”
- “System:”

**3.**

**Sentiment + psychoContext labeling**

You already have sentiment from Journal.app.

You can add:

- Flow detection via heuristics
- Cognitive mode classification from your own framework
- Distraction markers

**4.**

**Similarity hashing for duplicates**

Use MinHash or SimHash to remove near-duplicates.

**5.**

**Conversation segmentation**

Sliding-window algorithm:

- New segment if >6 lines change topic
- New segment if sentiment shifts sharply
- New segment if persona changes

# **SECTION 6 — APPLE ML FRAMEWORKS YOU CAN USE**

**1.**

**Apple MLX (new)**

On-device training for:

- LLMs
- Transformers
- Embedding models

Import dataset via JSONL.

**2.**

**Core ML + fine-tuning APIs (2024–2025)**

Apple added fine-tuning for:

- Text
- Embeddings
- Small LLMs

**3.**

**Create ML**

Classic approach: text classification or sequence tasks.

**4.**

**Natural Language Framework**

Use for:

- tokenization
- embeddings
- language tagging
- sentence boundary detection

# **SECTION 7 — COMPLETE PIPELINE (END-TO-END)**

1. Capture everything → Notion

(Shortcuts automates intake.)

2. Export JSON from Notion.

3. Shortcut transforms export → clean JSONL.

4. Python/Swift script validates dataset.

5. MLX fine-tunes transformer.

6. Convert trained model to .mlmodel.

7. Deploy inside iOS app with Apple frameworks and Shortcuts integration.

8. Your app becomes:

- a personal cognitive transcript analyzer
- a training dataset generator
- and a self-improving on-device LLM environment