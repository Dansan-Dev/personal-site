// components/Project.tsx
export type ProjectProps = {
    name: string
    description: string
    tech: Array<string>
    highlights?: Array<string>
    reflections?: string
    links: {
      github?: string
      live?: string
      docs?: string
      demo?: string
      presentation?: string
    }
  }
  
  export default function Project({ name, description, tech, highlights, reflections, links }: ProjectProps) {
    return (
      <main className="project-component page-container">
        <article className="bg-[rgba(12,20,32,0.5)] border border-[var(--color-border-dark)] rounded-2xl shadow-md p-7 md:p-9">
          {/* Header */}
          <header className="mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text-light)]">{name}</h1>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-[var(--text-dim)]">{description}</p>
          </header>
  
          {/* Tech stack */}
          <section aria-labelledby="tech-title" className="mt-6 md:mt-8">
            <h2 id="tech-title" className="text-sm font-semibold uppercase tracking-wide text-[var(--color-text-dim)]">Tech Stack</h2>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border-dark)] bg-[rgba(255,255,255,0.06)] px-3 py-1.5 text-sm text-[var(--color-text-light)]"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-[#50FB85]" aria-hidden />
                  {t}
                </span>
              ))}
            </div>
          </section>
  
          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <section aria-labelledby="highlights-title" className="mt-8">
              <h2 id="highlights-title" className="text-sm font-semibold uppercase tracking-wide text-[var(--text-dim)]">
                Highlights
              </h2>
              <ul className="mt-3 grid gap-2 list-disc pl-6 text-[var(--color-text-light)]">
                {highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </section>
          )}
  
          {/* Reflections */}
          {reflections && (
            <section aria-labelledby="reflections-title" className="mt-8">
              <h2 id="reflections-title" className="text-sm font-semibold uppercase tracking-wide text-[var(--text-dim)]">
                Reflections & Learnings
              </h2>
              <p className="mt-3 text-[var(--color-text-light)] leading-relaxed whitespace-pre-line">{reflections}</p>
            </section>
          )}
  
          {/* Links */}
          {
            (links.github || links.demo || links.docs || links.live || links.presentation) &&
            <section aria-labelledby="links-title" className="mt-8">
              <h2 id="links-title" className="text-sm font-semibold uppercase tracking-wide text-[var(--text-dim)]">Links</h2>
              <div className="mt-3 flex flex-wrap gap-3">
                {
                  links.github &&
                  <a className="btn flex items-center gap-2" href={links.github} target="_blank" rel="noreferrer noopener">
                    <img src="/github-mark.png" alt="GitHub logo" className="h-4 w-4" />
                    GitHub
                  </a>
                }
                {links.live && <a className="btn" href={links.live} target="_blank" rel="noreferrer noopener">App</a>}
                {links.demo && <a className="btn" href={links.demo} target="_blank" rel="noreferrer noopener">Demo</a>}
                {links.docs && <a className="btn" href={links.docs} target="_blank" rel="noreferrer noopener">Docs</a>}
                {links.presentation && <a className="btn" href={links.presentation} target="_blank" rel="noreferrer noopener">Presentation</a>}
              </div>
            </section>
          }
        </article>
      </main>
    )
  }
  