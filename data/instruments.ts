
export type Instrument = {
  slug: string;
  title: string;
  classification: 'Cognition' | 'Infrastructure' | 'Oversight';
  role: string;
  inputs: string[];
  artifacts: string[];
  failureBoundaries: string[];
  status: 'Exploratory' | 'Active' | 'Constrained' | 'Archived';
  tags: string[];
};

export const INSTRUMENTS: Instrument[] = [
  {
    slug: "clos",
    title: "CLOS",
    classification: "Cognition",
    role: "Fuses physiological and behavioral telemetry to detect cognitive load patterns and mirror executive state.",
    inputs: ["voice fragments", "task state", "HRV features", "daily self-reports"],
    artifacts: ["structured representations", "decision traces", "load deltas"],
    failureBoundaries: ["Cannot execute irreversible actions.", "Not a diagnostic medical tool.", "Inaccurate during acute physical exertion."],
    status: "Active",
    tags: ["Biometrics", "Local-first"]
  },
  {
    slug: "lmu",
    title: "LMU",
    classification: "Infrastructure",
    role: "Allocates local compute resources for private, edge-based inference tasks.",
    inputs: ["weight shards", "context windows", "thermal telemetry"],
    artifacts: ["inference traces", "resource consumption logs"],
    failureBoundaries: ["Limited by local hardware constraints.", "No cloud-bursting capability.", "Context saturation at 32k tokens."],
    status: "Active",
    tags: ["Silicon", "Edge"]
  },
  {
    slug: "synapse",
    title: "Synapse",
    classification: "Infrastructure",
    role: "Enforces deterministic routing and boundary constraints between models and external environments.",
    inputs: ["model intent", "routing constraints", "execution tokens"],
    artifacts: ["signed immutable logs", "permission denials"],
    failureBoundaries: ["Does not verify logic quality.", "Bypassed by direct manual overrides.", "Limited to POSIX-compliant environments."],
    status: "Constrained",
    tags: ["Provenance", "Logic"]
  },
  {
    slug: "verdict",
    title: "Verdict",
    classification: "Oversight",
    role: "Evaluates claim confidence and risk thresholds to separate automated generation from system decision.",
    inputs: ["claim probability", "risk metadata", "threshold parameters"],
    artifacts: ["risk scores", "deferral markers", "failure justifications"],
    failureBoundaries: ["Cannot evaluate non-quantifiable ambiguity.", "Reliant on base model probability accuracy."],
    status: "Exploratory",
    tags: ["Safety", "Audit"]
  },
  {
    slug: "artifacts",
    title: "Artifacts",
    classification: "Oversight",
    role: "Mints inspectable and version-controlled representations of system state and logic provenance.",
    inputs: ["source deltas", "human edits", "model metadata"],
    artifacts: ["provenance manifests", "reproducible source bundles"],
    failureBoundaries: ["Does not guarantee logical correctness.", "Requires manual auditing for semantic accuracy."],
    status: "Active",
    tags: ["Provenance", "Audit"]
  },
  {
    slug: "volt",
    title: "Volt",
    classification: "Cognition",
    role: "Manages prompt timing based on observed cognitive load to prevent attention saturation.",
    inputs: ["current load delta", "priority matrix", "interruption logs"],
    artifacts: ["timing delays", "saturation warnings"],
    failureBoundaries: ["Limited to supported notification channels.", "Cannot force user attention."],
    status: "Exploratory",
    tags: ["Timing", "Attention"]
  }
];
