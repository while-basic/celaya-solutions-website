export type Instrument = {
  slug: string;
  title: string;
  subtitle?: string;
  whatItIs: string;
  exampleUseCase: string;
  stopAndThink: string;
  tags: string[];
};

export const INSTRUMENTS: Instrument[] = [
  {
    slug: "clos",
    title: "CLOS",
    subtitle: "Cognitive Life Operating System",
    whatItIs:
      "A local-first cognitive observer that fuses voice, self-reports, biometrics, location, audio analysis, and context to detect patterns, flag risk, and trigger small, evidence-based interventions.",
    exampleUseCase:
      "CLOS notices elevated heart rate + fragmented speech + late-night hours and suggests a pause or reframing before cognitive overload happens.",
    stopAndThink:
      "Like a flight data recorder for your mind — it doesn’t fly the plane, it helps you understand why turbulence happened.",
    tags: ["Cognitive", "Biometrics", "Local-first"],
  },
  {
    slug: "lmu",
    title: "LMU",
    subtitle: "Language Model Unit",
    whatItIs:
      "A research direction spanning (1) software utility for private on-device inference today, and (2) a proposed Language Model Unit: dedicated silicon for private, always-on, consumer-grade LLM inference.",
    exampleUseCase:
      "Run a local assistant at interactive speeds without hijacking GPU/CPU or sending data to the cloud; benchmark bottlenecks to inform LMU requirements.",
    stopAndThink:
      "NVIDIA gave graphics a home. LMU argues language deserves one too.",
    tags: ["Infrastructure", "Local-first"],
  },
  {
    slug: "synapse",
    title: "Synapse",
    whatItIs:
      "A deterministic execution layer that routes cognition between humans, models, and tools while enforcing hard boundaries, provenance, and auditability.",
    exampleUseCase:
      "A model requests a filesystem action → Synapse validates intent → executes or denies → records the outcome as semantic truth (including denial).",
    stopAndThink:
      "A nervous system: signals move safely, reflexes fire, but control stays distributed.",
    tags: ["Infrastructure", "Provenance", "Safety"],
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
  },
  {
    slug: "biometriclm",
    title: "BiometricLM",
    whatItIs:
      "A research model exploring how physiological signals (heart rate, motion, time-of-day) become context, not commands.",
    exampleUseCase:
      "Detect which physiological states correlate with insight or overload and adapt responses/interventions accordingly.",
    stopAndThink:
      "Weather reports for the body—so the mind can plan.",
    tags: ["Biometrics", "Cognitive"],
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
  },
];