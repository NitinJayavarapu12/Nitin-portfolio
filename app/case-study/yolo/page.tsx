const sections = [
  {
    title: "Problem",
    body: [
      "Build a real-time computer vision system that detects objects from video input and returns structured results through an API.",
      "Key constraints: low latency, stable throughput, and predictable outputs that can be logged/monitored in production.",
    ],
  },
  {
    title: "System overview",
    body: [
      "The system follows an end-to-end inference flow: input → preprocessing → YOLO inference → postprocessing → response.",
      "Designed as an API-first service so it can be deployed behind a gateway, containerized, and scaled later.",
    ],
  },
  {
    title: "Architecture",
    body: [
      "Client sends frames/video → API receives input → inference pipeline runs → predictions returned as JSON.",
      "Logging/metrics hooks are added around key stages (preprocess, infer, postprocess) to measure latency and failures.",
    ],
  },
  {
    title: "Model + data",
    body: [
      "YOLO model used for object detection (transfer learning-ready setup).",
      "Evaluation focused on detection quality and stability across varied inputs (lighting, motion, crowded scenes).",
    ],
  },
  {
    title: "Serving + performance",
    body: [
      "Designed the service to be async/batch-friendly (even if the first version runs single-stream).",
      "Measured timing per stage (ms): preprocess, inference, postprocess → surfaced as logs/metrics for debugging.",
    ],
  },
  {
    title: "Monitoring mindset",
    body: [
      "Tracked: inference latency, number of detections per frame, error rates, and input anomalies.",
      "Goal: make issues visible early (drift, bad inputs, unstable performance) instead of discovering them from user complaints.",
    ],
  },
  {
    title: "Results (add your numbers)",
    body: [
      "Add a small table here once you finalize metrics: average latency, p95 latency, and sample throughput (FPS).",
      "Include 2–3 example screenshots or sample JSON outputs to show what the system produces.",
    ],
  },
  {
    title: "Limitations + next steps",
    body: [
      "Add tracking for p95 latency under load, and introduce a queue-based worker for smoother throughput.",
      "Add automated evaluation and drift reports for ongoing model quality checks.",
      "Add a lightweight front-end demo page so recruiters can try it quickly.",
    ],
  },
];

export default function YoloCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <a className="text-sm text-slate-600 hover:underline" href="/">
          ← Back to home
        </a>

        <header className="mt-6">
          <h1 className="text-4xl font-semibold tracking-tight">
            Case Study: Real-Time Video Analytics Platform
          </h1>
          <p className="mt-3 text-slate-600">
            YOLO-based real-time detection system with an API-first design, performance tracking, and monitoring hooks.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Python", "YOLO", "FastAPI", "Docker", "MLflow", "Monitoring"].map((s) => (
              <span
                key={s}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a className="hover:underline" href="https://github.com/NitinJayavarapu12/real-time-video-analytics-platform" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </header>

        <section className="mt-10 space-y-8">
          {sections.map((sec) => (
            <div key={sec.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight">{sec.title}</h2>
              <ul className="mt-4 space-y-3 text-slate-700">
                {sec.body.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <p>{line}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <footer className="mt-12 text-xs text-slate-500">
          Tip: add an architecture diagram image and a small metrics table here to make this page recruiter-proof.
        </footer>
      </div>
    </main>
  );
}
