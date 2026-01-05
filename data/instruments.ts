
export type Instrument = {
  slug: string;
  title: string;
  subtitle?: string;
  whatItIs: string;
  exampleUseCase: string;
  stopAndThink: string;
  tags: string[];

  // Modal-only / Detailed view
  longForm?: string;            // deeper narrative
  inputs?: string[];            // what signals/data it consumes
  outputs?: string[];           // artifacts it emits
  guardrails?: string[];        // safety boundaries
  evidenceRequired?: string[];  // proof-of-work expectations
  failureModes?: string[];      // known ways it can go wrong
  provenanceNotes?: string[];   // audit/log lineage notes
  related?: string[];           // slugs of related instruments
  links?: { label: string; href: string }[];
};

export const INSTRUMENTS: Instrument[] = [
  {
    slug: "clos",
    title: "CLOS",
    subtitle: "Cognitive Life Operating System",
    whatItIs:
      "A local-first cognitive observer that fuses voice, self-reports, biometrics, location, and context to detect patterns and trigger evidence-based interventions.",
    exampleUseCase:
      "CLOS identifies patterns in self-reported cognitive load and behavioral markers, suggesting a pause or reframing before executive fatigue sets in.",
    stopAndThink:
      "Like a flight data recorder for your mind — it doesn’t fly the plane, it helps you understand the conditions of flight.",
    tags: ["Cognitive", "Biometrics", "Local-first"],
    longForm: "CLOS represents our flagship integration of agentic AI and biometric telemetry. It functions as a metacognitive mirror, observing patterns to reduce executive load while strictly preserving user agency.",
    inputs: [
      "Daily self-assessment (0-10 scale)",
      "HRV-derived features (Exploratory Physiological Proxy)",
      "Voice-to-Text (Local Whisper/CoreML)",
      "Behavioral logs (App usage, decision points)"
    ],
    outputs: ["Ambient Interventions", "Cognitive Trace Logs", "Longitudinal Trend Reports"],
    guardrails: [
      "System cannot execute irreversible actions without user-confirm step",
      "HRV used as exploratory proxy only (not primary outcome)",
      "Zero cloud dependency for raw biometric data",
      "No autonomy over primary communication channels"
    ],
    evidenceRequired: ["Longitudinal biometric correlation study", "Privacy audit of on-device enclave"],
    links: [{ label: "Technical Dossier", href: "#clos" }]
  },
  {
    slug: "lmu",
    title: "LMU",
    subtitle: "Language Model Unit",
    whatItIs:
      "A research direction spanning (1) software utility for private on-device inference today, and (2) a proposed dedicated silicon for private LLM inference.",
    exampleUseCase:
      "Run a local assistant at interactive speeds without hijacking GPU/CPU or sending data to the cloud.",
    stopAndThink:
      "NVIDIA gave graphics a home. LMU argues language deserves one too.",
    tags: ["Infrastructure", "Local-first"],
    longForm: "Today's LLM landscape is bifurcated between cloud performance and on-device compromise. LMU proposes specialized, low-power silicon optimized for edge transformer architecture.",
    inputs: ["Model Weight Shards", "User Prompt Context", "Hardware Telemetry"],
    outputs: ["Private Inference Stream", "Energy Efficiency Reports"],
    guardrails: ["Air-gapped by default", "Hardware-level kill switch for inference loops"],
    failureModes: ["Context window memory saturation", "Thermal throttling on non-optimized silicon"]
  },
  {
    slug: "synapse",
    title: "Synapse",
    whatItIs:
      "A deterministic execution layer that routes cognition between humans, models, and tools while enforcing hard boundaries and auditability.",
    exampleUseCase:
      "A model requests a filesystem action → Synapse validates intent → executes or denies → records the outcome as semantic truth.",
    stopAndThink:
      "A nervous system: signals move safely, reflexes fire, but control stays distributed.",
    tags: ["Infrastructure", "Provenance", "Safety"],
    inputs: ["Tool Definitions", "Model Intents", "Permission Tokens"],
    outputs: ["Deterministic Actions", "Immutable Audit Logs"],
    guardrails: ["Strict sandboxing of file systems", "Human-in-the-loop for non-reversible destructive actions"],
    provenanceNotes: ["Every action is signed with the generating model's CID and timestamp."]
  },
  {
    slug: "rachel",
    title: "Rachel",
    subtitle: "Orchestrator",
    whatItIs:
      "A role-based orchestration system coordinating tools, agents, and humans without collapsing everything into one context window.",
    exampleUseCase:
      "Delegate analysis to one model, verification to another, and execution to MCP servers—preserving separation of concerns.",
    stopAndThink:
      "Air-traffic control, not the pilot.",
    tags: ["Orchestration", "Agents"],
    longForm: "Named as a nod to recursive orchestration, Rachel focuses on the 'manager of managers' problem in multi-agent systems.",
    inputs: ["Task Decompositions", "Agent Availability Matrix"],
    outputs: ["Routed Commands", "Sub-task status updates"],
    failureModes: ["Orchestration loops", "Ambiguous delegation"]
  },
  {
    slug: "biometriclm",
    title: "BiometricLM",
    whatItIs:
      "A research model exploring how physiological signals (heart rate, motion, time-of-day) become context, not commands.",
    exampleUseCase:
      "Detect which physiological states correlate with insight or overload and adapt responses accordingly.",
    stopAndThink:
      "Weather reports for the body—so the mind can plan.",
    tags: ["Biometrics", "Cognitive"],
    inputs: ["Raw Sensor Streams", "Chronobiological Cycles"],
    outputs: ["Physiological State Embeddings"],
    guardrails: ["No direct command execution from sensor data (Context ONLY)"]
  },
  {
    slug: "insight-explorer",
    title: "Insight Explorer",
    whatItIs:
      "A timestamped, provenance-aware system for capturing insights, decisions, and cognitive shifts as durable artifacts.",
    exampleUseCase:
      "A spoken realization is recorded with context, linked to prior insights, and retrievable months later with lineage intact.",
    stopAndThink:
      "Not a notebook—more like a fossil record of thought.",
    tags: ["Provenance", "Knowledge"],
    outputs: ["Markdown Artifacts", "Linked Semantic Graph Nodes"]
  },
  {
    slug: "verdict",
    title: "Verdict",
    whatItIs:
      "A judgment layer that separates decision from generation, enabling “insufficient evidence,” deferral, and risk-aware evaluation.",
    exampleUseCase:
      "Before acting on a suggestion, Verdict scores confidence, impact, and risk thresholds and routes to observe/recommend/approve.",
    stopAndThink:
      "A courtroom for claims—evidence over fluency.",
    tags: ["Safety", "Judgment"],
    guardrails: ["Explicit threshold requirements for high-impact actions"]
  },
  {
    slug: "volt",
    title: "Volt",
    whatItIs:
      "An attention and timing instrument that decides when cognition should happen, not what it should think.",
    exampleUseCase:
      "Delay non-critical prompts when cognitive load is high; prioritize interventions when risk rises.",
    stopAndThink:
      "Circuit breakers for thought.",
    tags: ["Cognitive", "Timing"],
    inputs: ["Current Load Delta", "Prompt Priority Matrix"],
    outputs: ["Timing Delays", "Urgency Signals"]
  },
  {
    slug: "artifacts",
    title: "Artifacts",
    whatItIs:
      "A system for minting durable, inspectable outputs from cognition—code, diagrams, decisions, proofs—with clear provenance and lineage.",
    exampleUseCase:
      "Every architecture diagram includes source inputs, model versions, human edits, and reproducible steps.",
    stopAndThink:
      "Receipts for intelligence.",
    tags: ["Provenance", "Audit"],
    outputs: ["Zipped Source Bundles", "Provenance Manifests"]
  },
  {
    slug: "robotics-spatial",
    title: "Robotics / Spatial Learning",
    whatItIs:
      "Research into training models from spatial movement and physical interaction rather than static datasets.",
    exampleUseCase:
      "Use recorded human motion to teach robots or simulations task intuition via demonstration.",
    stopAndThink:
      "Teaching by showing, not by manuals.",
    tags: ["Robotics", "Spatial AI"],
    inputs: ["HMD/Controller Telemetry", "Joint Transform Matrices"],
    outputs: ["Trained Motion Primitives"]
  },
];
