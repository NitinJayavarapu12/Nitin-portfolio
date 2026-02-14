export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <a className="text-sm text-slate-600 hover:underline" href="/">← Back</a>

        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">Nithu</h1>
            <p className="mt-2 text-slate-600">
              AI/ML Engineer • CV / Recsys / GenAI • API Deployment • MLOps mindset
            </p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-600">
              <a className="hover:underline" href="https://github.com/<your-username>" target="_blank" rel="noreferrer">GitHub</a>
              <a className="hover:underline" href="https://www.linkedin.com/in/<your-handle>/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="hover:underline" href="mailto:your@email.com">Email</a>
            </div>
          </div>

          <a
            className="rounded-2xl bg-slate-900 px-5 py-2.5 text-white hover:opacity-90"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
          </a>
        </div>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white/75 backdrop-blur p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Summary</h2>
          <p className="mt-3 text-slate-700">
            AI/ML Engineer focused on building production-style ML systems: real-time inference, ranking/recommendation,
            and LLM-backed retrieval. Strong in Python, APIs, Docker, and measurable performance.
          </p>
        </section>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white/75 backdrop-blur p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Core Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Python", "PyTorch", "YOLO", "FastAPI", "Docker", "Embeddings", "Vector Search", "RAG", "SQL", "AWS (S3/EC2)"].map(s => (
              <span key={s} className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-sm text-slate-700">
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white/75 backdrop-blur p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Experience</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Add 3–5 bullets here (impact + stack + metrics).</li>
          </ul>
        </section>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white/75 backdrop-blur p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Projects</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li>• Real-Time Video Analytics Platform (YOLO, FastAPI, Docker)</li>
            <li>• Location-Aware Semantic Recommendation System (Embeddings, Vector Search, Geo Ranking)</li>
            <li>• LLM Document Intelligence API (RAG)</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
