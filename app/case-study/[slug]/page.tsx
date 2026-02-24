import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, projects } from "../../lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  return (
    <>
      <div className="bg" />
      <div className="noise" />

      <header className="nav">
        <div className="container navInner">
          <Link className="brand" href="/">
            Nitin Jayavarapu
          </Link>

          <nav className="navLinks" aria-label="Primary">
            <Link href="/#work">My Work</Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
            <Link href="/#contact">Contact</Link>
          </nav>

          <a className="cta" href="mailto:nitinjayavarapu12@gmail.com">
            Get in touch →
          </a>
        </div>
      </header>

      <main className="section">
        <div className="container">
          <div className="kicker">Case Study</div>
          <h1 className="h2" style={{ marginTop: 10 }}>
            {project.title}
          </h1>

          <p className="sub" style={{ marginTop: 14 }}>
            {project.oneLiner}
          </p>

          <div className="contactBox" style={{ marginTop: 22 }}>
            <div className="kicker">Tech Stack</div>
            <div className="pills" style={{ marginTop: 12 }}>
              {project.stack.map((t) => (
                <span className="pill" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <div className="contactRow" style={{ marginTop: 16 }}>
              {project.links.map((l) => (
                <a className="link" key={l.label} href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
              <Link className="link" href="/#work">
                Back to projects
              </Link>
            </div>
          </div>

          <section className="section" style={{ paddingTop: 34 }}>
            <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 14 }}>
              <article className="card">
                <div className="cardTitle">Problem</div>
                <p className="cardDesc">{project.problem}</p>
              </article>

              <article className="card">
                <div className="cardTitle">Solution</div>
                <p className="cardDesc">{project.solution}</p>
              </article>

              <article className="card">
                <div className="cardTitle">What I did</div>
                <ul className="cardDesc" style={{ paddingLeft: 18 }}>
                  {project.role.map((x) => (
                    <li key={x} style={{ marginBottom: 8 }}>
                      {x}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="card">
                <div className="cardTitle">Architecture</div>
                <ol className="cardDesc" style={{ paddingLeft: 18 }}>
                  {project.architecture.map((x) => (
                    <li key={x} style={{ marginBottom: 8 }}>
                      {x}
                    </li>
                  ))}
                </ol>
              </article>

              <article className="card">
                <div className="cardTitle">Evaluation</div>
                <ul className="cardDesc" style={{ paddingLeft: 18 }}>
                  {project.evaluation.map((x) => (
                    <li key={x} style={{ marginBottom: 8 }}>
                      {x}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="card">
                <div className="cardTitle">Results</div>
                <ul className="cardDesc" style={{ paddingLeft: 18 }}>
                  {project.results.map((x) => (
                    <li key={x} style={{ marginBottom: 8 }}>
                      {x}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="footer">
              © {new Date().getFullYear()} Nitin Jayavarapu — AI/ML Engineer
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
