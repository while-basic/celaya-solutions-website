
export interface CustomGpt {
  slug: string;
  title: string;
  subtitle: string;
  whatItIs: string;
  exampleUseCase: string;
  stopAndThink: string;
  tags: string[];
  url: string;
  platform: 'OpenAI' | 'Vercel' | 'Local';
}

export const CUSTOM_GPTS: CustomGpt[] = [
  {
    slug: "civic-ledger",
    title: "Civic Ledger",
    subtitle: "El Paso & Doña Ana Intelligence",
    whatItIs: "A specialized data intelligence node focused on parsing municipal records, regional policy documents, and civic data for the El Paso and Doña Ana County border region.",
    exampleUseCase: "Synthesizing regional budget allocations or analyzing local zoning changes across multiple jurisdictions simultaneously.",
    stopAndThink: "Information transparency is the prerequisite for civic agency; interpreting it at scale reduces the friction of participation.",
    tags: ["Civic Tech", "Regional Data", "OpenAI"],
    url: "https://chatgpt.com/g/g-69581a2a2c1c8191b3d86c8a237369a2-civic-ledger-el-paso-tx-dona-ana",
    platform: "OpenAI"
  },
  {
    slug: "hire-right",
    title: "Hire Right",
    subtitle: "Recruitment Logic Engine",
    whatItIs: "A systematic recruitment intelligence tool designed to optimize candidate benchmarking through cognitive bias reduction and evidence-based reasoning.",
    exampleUseCase: "Benchmarking technical artifacts against established rubric primitives to ensure objective evaluation of outlier talent.",
    stopAndThink: "Hiring is a search for signals in a high-entropy environment; the goal is to reduce noise without filtering out genius.",
    tags: ["HR Tech", "Reasoning", "OpenAI"],
    url: "https://hire-right-sigma.vercel.app/",
    platform: "OpenAI"
  }
];
