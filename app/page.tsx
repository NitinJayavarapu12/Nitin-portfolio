import Link from "next/link";
import { projects } from "./lib/projects";
import Reveal from "./components/Reveal";


export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}


export default function Page() {
  return (
    <>
      <div className="bg" />
      <div className="noise" />

      <header className="nav">
        <div className="container navInner">
          <a className="brand" href="#">
            Nitin Jayavarapu
          </a>

          <nav className="navLinks" aria-label="Primary">
            <a href="#work">My Work</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="cta" href="mailto:nitinjayavarapu12@gmail.com">
            Get in touch →
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="section">
          <div className="container">
            <div className="heroGrid">
              <div>
                <Reveal>
                  <div className="badge">
                    <span className="pulse" />
                    Open to opportunities
                  </div>
                </Reveal>

                <Reveal delay={80}>
                  <h1 className="h1">
                    AI / ML <em>Engineer</em>
                    <br />
                    building production systems.
                  </h1>
                </Reveal>

                <Reveal delay={160}>
                  <p className="sub">
                    I build ML systems that work under real constraints — noisy
                    inputs, latency limits, and changing data. I care about
                    clean APIs, strong evaluation, and measurable impact.
                  </p>
                </Reveal>

                <Reveal delay={240}>
                  <div className="heroBtns">
                    <a className="btn" href="#work">
                      View projects →
                    </a>
                    <a
                      className="btn"
                      href="https://github.com/nitinjayavarapu12"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                    <a
                      className="btn"
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn ↗
                    </a>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={120}>
                <aside className="heroCard">
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                    <img
                      src="/profile.jpg"
                      alt="Nitin Jayavarapu"
                      style={{
                        width: 180,
                        height: 240,
                        borderRadius: "12px",
                        objectFit: "cover",
                        border: "3px solid rgba(255,255,255,0.15)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                      }}
                    />
                  </div>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section">
          <div className="container">
            <Reveal>
              <div className="kicker">Selected Work</div>
              <h2 className="h2">Projects that show real engineering</h2>
            </Reveal>

            <div className="grid">
              {projects.map((p, idx) => (
                <Reveal key={p.id} delay={80 + idx * 80}>
                  <Link href={`/case-study/${p.slug}`} style={{ textDecoration: "none"}}>
                    <article className="card">
                      <div className="cardNum">{p.id}</div>
                      <div className="cardTitle">{p.title}</div>
                      <p className="cardDesc">{p.oneLiner}</p>

                      <div className="pills">
                        {p.stack.map((t) => (
                          <span className="pill" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <Reveal>
              <div className="kicker">Contact</div>
              <h2 className="h2">Let’s talk</h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="contactBox">
                <p className="sub" style={{ marginTop: 0 }}>
                  If you’re hiring for an AI/ML role (or want to collaborate), email is best.
                </p>

                <div className="contactRow">
                  <a className="link" href="mailto:nitinjayavarapu12@gmail.com">
                    Email
                  </a>
                  <a
                    className="link"
                    href="https://github.com/nitinjayavarapu12"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="link"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>

            <div className="footer">
              © {new Date().getFullYear()} Nitin Jayavarapu — AI/ML Engineer
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
