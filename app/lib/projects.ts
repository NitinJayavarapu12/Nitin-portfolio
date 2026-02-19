export type Project = {
  id: string;
  slug: string;
  title: string;
  oneLiner: string;
  role: string[];
  stack: string[];
  highlights: string[];
  problem: string;
  solution: string;
  architecture: string[];
  evaluation: string[];
  results: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "rag-service",
    title: "Production LLM RAG Service",
    oneLiner:
      "RAG-based document Q&A API with improved retrieval relevance and more stable outputs.",
    role: [
      "Designed ingestion → chunking → embedding → retrieval pipeline",
      "Built FastAPI endpoints for query + evaluation",
      "Tuned prompts and retrieval settings to reduce low-quality answers",
    ],
    stack: ["Python", "FastAPI", "FAISS", "Transformers", "Docker"],
    highlights: [
      "Retrieval pipeline built for iteration (swap chunking/embedding models easily)",
      "Evaluation-minded: tracked Precision@k and failure modes",
      "Deployment-friendly API shape and predictable response schema",
    ],
    problem:
      "Keyword search and naive prompting produced irrelevant context and inconsistent answers, especially when documents were long or phrasing varied.",
    solution:
      "Implemented a RAG pipeline that retrieves semantically relevant chunks first, then generates answers grounded in retrieved context. Added guardrails (prompt structure + retrieval thresholds) to stabilize output quality.",
    architecture: [
      "Ingest documents → normalize text",
      "Chunk documents with overlap to preserve context",
      "Embed chunks and store vectors in FAISS",
      "At query time: embed query → retrieve top-k chunks → assemble prompt → generate answer",
      "Return answer + sources + debug metadata",
    ],
    evaluation: [
      "Precision@k on a small labeled query set",
      "Manual error buckets: missing context, wrong context, hallucination",
      "Latency breakdown: embedding + retrieval + generation timing",
    ],
    results: [
      "Improved retrieval relevance (Precision@k up vs keyword baseline)",
      "Reduced malformed / low-quality outputs via better prompting + retrieval filters",
      "Cleaner API contract for downstream usage (sources, confidence-ish signals, timings)",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/nitinjayavarapu12" },
      { label: "Live Demo (optional)", href: "#" },
    ],
  },
  {
    id: "02",
    slug: "location-aware-recommender",
    title: "Location-Aware Semantic Recommendation System",
    oneLiner:
      "Nearby place recommender using semantic similarity + geo-distance for hybrid ranking.",
    role: [
      "Built hybrid ranking: semantic similarity + geographic constraints",
      "Implemented API endpoints for search + filters",
      "Designed caching-friendly response structure",
    ],
    stack: ["Python", "Embeddings", "FastAPI", "SQLite", "Docker"],
    highlights: [
      "Hybrid ranker (meaning + distance) feels more “human” than pure distance sorting",
      "Filter-by-radius + intent improves result quality",
      "API designed to be front-end friendly (stable fields, predictable sort)",
    ],
    problem:
      "Distance-only search returns nearby places that aren’t relevant to intent; text-only search ignores real-world proximity constraints.",
    solution:
      "Implemented semantic retrieval to understand intent and combined it with geo-filtering + distance-aware scoring for a practical ‘nearby but relevant’ ranking.",
    architecture: [
      "User query → embed query",
      "Fetch candidate places within radius (geo filter)",
      "Compute semantic similarity + distance score",
      "Combine scores with weights → sort → return results",
      "Cache frequent queries and/or precompute embeddings for speed",
    ],
    evaluation: [
      "Offline spot checks using intent-focused queries (e.g., ‘quiet coffee’, ‘late-night food’)",
      "Latency tracking with and without caching",
      "Quality checks: diversity, duplicates, bad matches",
    ],
    results: [
      "More relevant ‘nearby’ results vs distance-only baseline",
      "Faster repeated lookups with caching",
      "Clear path to personalization (session feedback loop)",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/nitinjayavarapu12" },
      { label: "Live Demo (optional)", href: "#" },
    ],
  },
  {
    id: "03",
    slug: "real-time-video-analytics",
    title: "Real-Time Video Analytics Platform",
    oneLiner:
      "YOLO-based inference API with monitoring-friendly outputs and containerized deployment.",
    role: [
      "Designed inference API for predictable JSON outputs",
      "Added latency timing fields for monitoring",
      "Containerized for reproducible deployment",
    ],
    stack: ["Python", "YOLOv8", "FastAPI", "Docker"],
    highlights: [
      "Monitoring-minded schema (timings, counts, structured detections)",
      "Deployment-ready via Docker",
      "Designed for noisy real-world video inputs",
    ],
    problem:
      "Raw model outputs are hard to operationalize—teams need stable response formats, timings, and predictable fields for monitoring and downstream pipelines.",
    solution:
      "Built a structured inference API that returns normalized detection outputs + timings, making it easier to monitor performance and integrate into products.",
    architecture: [
      "Input: video frame/image → preprocess",
      "Model inference (YOLO) → postprocess detections",
      "Return JSON: detections, counts, timings, metadata",
      "Docker image for consistent runtime",
    ],
    evaluation: [
      "Latency: preprocess/infer/postprocess breakdown",
      "Sanity checks across different input resolutions",
      "Basic robustness checks for low-light/noisy frames",
    ],
    results: [
      "Cleaner integration into UIs and pipelines via stable schema",
      "Easier monitoring via stage timings",
      "Reproducible deployment through containerization",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/nitinjayavarapu12" },
      { label: "Live Demo (optional)", href: "#" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
