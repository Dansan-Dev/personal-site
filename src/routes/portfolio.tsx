import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/portfolio')({
  component: PortfolioPage,
})

function PortfolioPage() {
  const allProjects = useMemo(
    () => [
      { id: 1, title: 'Interactive Landing', desc: 'High-perf WebGL hero.', tags: ['web', 'graphics'] },
      { id: 2, title: 'Design System', desc: 'Reusable UI library.', tags: ['design', 'web'] },
      { id: 3, title: 'iOS Utility', desc: 'Swift app for creators.', tags: ['mobile'] },
      { id: 4, title: 'AR Prototype', desc: 'Spatial UI exploration.', tags: ['ar', 'prototype'] },
    ],
    [],
  )

  const tagUniverse = useMemo(
    () => Array.from(new Set(allProjects.flatMap((p) => p.tags))).sort(),
    [allProjects],
  )

  const [activeTags, setActiveTags] = useState<string[]>([])

  const toggleTag = (t: string) =>
    setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))

  const visible = useMemo(
    () => (activeTags.length ? allProjects.filter((p) => activeTags.every((t) => p.tags.includes(t))) : allProjects),
    [activeTags, allProjects],
  )

  return (
    <div className="page-container">
      <div className="portfolio-layout">
        <aside className="aside">
          <h3 style={{marginTop:0}}>Filter</h3>
          <div className="filter-tags">
            {tagUniverse.map((t) => (
              <button
                key={t}
                className={`tag ${activeTags.includes(t) ? 'active' : ''}`}
                onClick={() => toggleTag(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </aside>
        <main className="projects">
          {visible.map((p) => (
            <article key={p.id} className="project">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </main>
      </div>
    </div>
  )
}

