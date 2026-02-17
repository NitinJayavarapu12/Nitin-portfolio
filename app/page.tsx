"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Production LLM RAG Service",
    desc: "Built a retrieval-augmented generation API over structured documents. Improved Precision@k by ~25% and reduced malformed outputs.",
    tech: ["Python", "FastAPI", "FAISS", "Transformers", "Docker"],
  },
  {
    id: "02",
    title: "Location-Aware Semantic Recommendation System",
    desc: "Embedding-based recommendation engine combining semantic similarity and geo-distance ranking. Reduced lookup latency by ~50%.",
    tech: ["Python", "Embeddings", "FastAPI", "SQLite", "Docker"],
  },
  {
    id: "03",
    title: "Real-Time Video Analytics Platform",
    desc: "YOLO-based inference API with structured outputs and monitoring-friendly schema deployed via Docker.",
    tech: ["Python", "YOLOv8", "FastAPI", "Docker"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-white/80 backdrop-blur border-b z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">

          <div className="font-semibold text-lg">
            Nitin Jayavarapu
          </div>

          <div className="flex gap-8 text-sm text-slate-600">
            <a href="#work" className="hover:text-black">My Work</a>
            <a href="/resume.pdf" target="_blank" className="hover:text-black">Resume</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </div>

        </div>
      </nav>


      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-24">

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-semibold mb-6"
        >
          AI / ML Engineer
        </motion.h1>

        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          I build production-grade ML systems including recommendation engines,
          real-time inference pipelines, and LLM APIs. My focus is reliability,
          performance, and measurable real-world impact.
        </p>

      </section>


      {/* PROJECTS */}
      <section id="work" className="max-w-5xl mx-auto px-6 pb-24">

        <h2 className="text-2xl font-semibold mb-10">
          Selected Work
        </h2>

        <div className="space-y-6">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="border rounded-xl p-6 hover:shadow-lg transition"
            >

              <div className="text-sm text-slate-400 mb-2">
                {project.id}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-slate-600 mb-4 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex gap-2 flex-wrap">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="text-xs border px-3 py-1 rounded-full text-slate-600"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="bg-black text-white py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-4">
            Get in touch
          </h2>

          <p className="text-slate-400 mb-6">
            Open to AI / ML engineering roles and collaborations.
          </p>

          <div className="flex gap-6">

            <a href="mailto:nitinjayavarapu12@gmail.com" className="underline">
              Email
            </a>

            <a href="https://github.com/nitinjayavarapu12" target="_blank" className="underline">
              GitHub
            </a>

            <a href="https://linkedin.com" target="_blank" className="underline">
              LinkedIn
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}
