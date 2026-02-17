"use client";

import Reveal from "./components/Reveal";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Real-Time Video Analytics Platform",
    description:
      "Real-time CV inference system that serves detections via an API, with performance tracking and monitoring-friendly outputs.",
    highlights: [
      "API-first inference flow: preprocess → YOLO → postprocess → JSON",
      "Latency mindset: stage timings + stable output schema",
      "Deployment-ready: containerized service + reproducible runs",
    ],
    stack: ["Python", "YOLO", "FastAPI", "Docker", "MLflow"],
    links: {
      caseStudy: "/case-study/yolo",
      github: "https://github.com/NitinJayavarapu12/real-time-video-analytics-platform",
    },
  },
  {
    num: "02",
    title: "Location-Aware Semantic Recommendation System",
    description:
      "Context-aware recommendation engine that ranks nearby places using semantic similarity, user intent, and geographic distance.",
    highlights: [
      "Combined vector similarity (semantic search) with geo-distance scoring for hybrid ranking.",
      "Built a modular retrieval pipeline: query → embed → filter by radius → rank → return results.",
      "Designed the system to support API deployment with scalable search patterns.",
    ],
    stack: ["Python", "Embeddings", "Vector Search", "Geo-Filtering", "FastAPI"],
    links: {
      caseStudy: "/case-study/smart-place-recommender",
      github: "https://github.com/NitinJayavarapu12/Smart-Place-Recommender",
    },
  },

  {
    num: "03",
    title: "LLM Document Intelligence API (RAG)",
    description:
      "Document Q&A system: ingest → chunk → embed → retrieve → answer, exposed as a simple API for deployment.",
    highlights: [
      "RAG grounding to reduce hallucinations and improve relevance",
      "Modular indexing pipeline for fast retrieval iterations",
      "Container-friendly service design with clean endpoints",
    ],
    stack: ["Python", "RAG", "Embeddings", "FAISS/Chroma", "FastAPI"],
    links: {
      caseStudy: "/case-study/document-intelligence-api",
      github: "https://github.com/NitinJayavarapu12/Production-LLM",
    },
  },
];

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm text-slate-700">
      {text}
    </span>
  );
}

function ProjectBlock({
  num,
  title,
  description,
  highlights,
  stack,
  links,
}: (typeof projects)[number]) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group rounded-3xl border border-slate-200 bg-white/75 backdrop-blur p-6 shadow-sm hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="text-sm font-semibold text-slate-500">{num}</div>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight">{title}</h3>
          <p className="mt-3 text-slate-600">{description}</p>

          <ul className="mt-5 space-y-2 text-slate-700">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((s) => (
              <Pill key={s} text={s} />
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            {links.caseStudy ? (
              <a className="font-medium hover:underline" href={links.caseStudy}>
                View case study →
              </a>
            ) : null}
            {links.github ? (
              <a
                className="font-medium text-slate-700 hover:underline"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </a>
            ) : null}
          </div>
        </div>

        {/* subtle “system” accent */}
        <div className="hidden shrink-0 md:block">
          <div className="h-16 w-16 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-sm" />
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="bg-blob bg-blob-a left-[-140px] top-[-140px] h-[520px] w-[520px] bg-slate-200" />
        <div className="bg-blob bg-blob-b right-[-160px] top-[40px] h-[560px] w-[560px] bg-indigo-200" />
        <div className="bg-blob bg-blob-c left-[18%] bottom-[-220px] h-[640px] w-[640px] bg-blue-200" />
      </div>

      {/* soft technical background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="bg-blob bg-blob-1 left-[-120px] top-[-120px] h-[380px] w-[380px] bg-slate-200" />
        <div className="bg-blob bg-blob-2 right-[-140px] top-[60px] h-[420px] w-[420px] bg-indigo-200" />
        <div className="bg-blob bg-blob-3 left-[20%] bottom-[-160px] h-[460px] w-[460px] bg-blue-200" />
      </div>

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute right-[-10%] top-[10%] h-[380px] w-[380px] rounded-full bg-slate-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Nav (matches reference style: clean + few links) */}
        <header className="flex items-center justify-between">
          <div className="font-semibold tracking-tight">Nitin Jayavarapu</div>
          <nav className="flex items-center gap-4 text-sm">
            <a className="text-slate-700 hover:underline" href="#work">
              My Work
            </a>
            <a className="text-slate-700 hover:underline" href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
            <a className="text-slate-700 hover:underline" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        {/* Hero (Hello + big name line) */}
        <Reveal>
        <section className="mt-16">
          <div className="text-lg text-slate-600">Hello,</div>
          <h1 className="mt-2 text-5xl font-semibold tracking-tight md:text-6xl">
            Nitin here!
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            I’m an <span className="font-medium text-slate-800">AI/ML Engineer</span> focused on
            production-style systems: real-time inference, API deployment, and monitoring-aware pipelines.
            I care about clear metrics, clean interfaces, and honest trade-offs.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              className="rounded-2xl bg-slate-900 px-5 py-2.5 text-white shadow-sm hover:opacity-90"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a
              className="rounded-2xl border border-slate-200 bg-white px-5 py-2.5 shadow-sm hover:bg-slate-50"
              href="https://github.com/<your-username>"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-2xl border border-slate-200 bg-white px-5 py-2.5 shadow-sm hover:bg-slate-50"
              href="https://www.linkedin.com/in/<your-handle>/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rounded-2xl border border-slate-200 bg-white px-5 py-2.5 shadow-sm hover:bg-slate-50"
              href="mailto:your@email.com"
            >
              Email
            </a>
          </div>
        </section>
        </Reveal>

        {/* Work */}
        <Reveal>
        <section id="work" className="mt-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">My Work</h2>
          </div>

          <div className="mt-6 space-y-6">
            {projects.map((p) => (
              <ProjectBlock key={p.title} {...p} />
            ))}
          </div>
        </section>
        </Reveal>

        {/* Contact */}
        <Reveal>
        <section id="contact" className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
          <p className="mt-3 text-slate-600">
            For roles, collaborations, or quick feedback on ML systems—email works best.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-2xl bg-slate-900 px-5 py-2.5 text-white shadow-sm hover:opacity-90"
              href="mailto:your@email.com"
            >
              Email me
            </a>
            <a
              className="rounded-2xl border border-slate-200 bg-white px-5 py-2.5 shadow-sm hover:bg-slate-50"
              href="https://www.linkedin.com/in/nitinjayavarapu"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

        </section>
        </Reveal>
      </div>
    </main>
  );
}
