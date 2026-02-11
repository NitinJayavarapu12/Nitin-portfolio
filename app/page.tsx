export default function Home() {
  const projects = [
    {
      title: "Real-Time Video Analytics Platform",
      subtitle: "YOLO-based real-time detection API with production-style deployment + monitoring hooks.",
      bullets: [
        "Built a real-time inference pipeline (preprocess → detect → postprocess) exposed via FastAPI-style endpoints.",
        "Focused on low-latency serving patterns (batching/async-ready design) and clear performance reporting.",
        "Added observability-friendly logging/metrics structure for debugging and reliability.",
      ],
      stack: ["Python", "YOLO", "FastAPI", "Docker", "MLflow", "Monitoring"],
      links: {
        github: "https://github.com/NitinJayavarapu12/real-time-video-analytics-platform",
        caseStudy: "/case-study/yolo",
      },
    },
    {
      title: "End-to-End ML Pipeline + Monitoring",
      subtitle: "Reproducible training workflow with experiment tracking, model registry patterns, and drift monitoring.",
      bullets: [
        "Tracked experiments and artifacts (metrics, parameters, models) in an MLflow-style workflow.",
        "Designed an evaluation loop that makes model comparisons repeatable and auditable.",
        "Monitored data/prediction drift patterns using an Evidently-style report pipeline.",
      ],
      stack: ["Python", "MLflow", "Evidently", "Pandas", "Docker"],
      links: {
        github: "",
        caseStudy: "/case-study/ml-pipeline",
      },
    },
    {
      title: "LLM Document Intelligence API (RAG)",
      subtitle: "Document Q&A system: ingest PDFs → chunk → embed → retrieve → answer via an API.",
      bullets: [
        "Implemented retrieval-augmented generation (RAG) to ground answers in retrieved document context.",
        "Built a modular indexing pipeline (chunking + embeddings + vector search) for fast retrieval.",
        "Exposed a simple API for upload + query, designed for easy deployment in containers.",
      ],
      stack: ["Python", "RAG", "Embeddings", "FAISS/Chroma", "FastAPI", "Docker"],
      links: {
        github: "https://github.com/NitinJayavarapu12/Production-LLM",
        caseStudy: "/case-study/rag-document-intelligence"
      },
    },
  ];

  const skillGroups = [
    {
      title: "ML / DL",
      items: ["PyTorch", "CNNs", "YOLO", "Model evaluation", "Data preprocessing"],
    },
    {
      title: "GenAI",
      items: ["RAG", "Embeddings", "Vector Search (FAISS/Chroma)", "Prompting (practical)"],
    },
    {
      title: "Backend",
      items: ["FastAPI", "REST APIs", "Async basics", "Service design"],
    },
    {
      title: "MLOps",
      items: ["Docker", "MLflow", "Evidently", "Experiment tracking", "Monitoring mindset"],
    },
    {
      title: "Cloud / Data",
      items: ["AWS (S3/EC2 basics)", "SQL", "Git/GitHub"],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Top bar */}
        <header className="flex items-center justify-between">
          <div className="font-semibold tracking-tight">Nitin Jayavarapu</div>
          <nav className="flex items-center gap-3 text-sm">
            <a className="hover:underline" href="#projects">Projects</a>
            <a className="hover:underline" href="#skills">Skills</a>
            <a className="hover:underline" href="#contact">Contact</a>
            <a
              className="rounded-xl bg-slate-900 px-4 py-2 text-white hover:opacity-90"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mt-14">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight">
            AI/ML Engineer building production-style ML systems
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Computer vision + MLOps + GenAI. I build end-to-end pipelines from data and modeling
            to API deployment and monitoring, with clear metrics and trade-offs.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-white hover:opacity-90"
              href="https://github.com/NitinJayavarapu12"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-xl border border-slate-200 px-5 py-2.5 hover:bg-slate-50"
              href="https://www.linkedin.com/in/nitinjayavarapu"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rounded-xl border border-slate-200 px-5 py-2.5 hover:bg-slate-50"
              href="nitinjayavarapu12@email.com"
            >
              Email
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-14">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Featured projects</h2>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.subtitle}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  <a className="hover:underline" href={p.links.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  {"caseStudy" in p.links ? (
                    <a className="hover:underline" href={(p.links as any).caseStudy}>
                      Case study
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How I build */}
        <section className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-semibold">How I build</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            {[
              ["Data", "Clean, validate, and design datasets for reliable training."],
              ["Modeling", "Choose baselines, iterate, and measure with honest metrics."],
              ["Deployment", "Package models behind APIs with reproducible environments."],
              ["Monitoring", "Track drift/quality and make failures visible early."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="font-semibold">{t}</div>
                <div className="mt-2 text-sm text-slate-600">{d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.title} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                <div className="font-semibold">{g.title}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-14 rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-slate-600">
            Want to talk roles, projects, or collaborations? Reach me here:
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-white hover:opacity-90"
              href="mailto:nitinjayavarapu12@gmail.com"
            >
              Email me
            </a>
            <a
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-white hover:opacity-90"
              href="https://www.linkedin.com/in/nitinjayavarapu"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-500">Last updated Feb 2026</p>
        </section>
      </div>
    </main>
  );
}
