import { Link, createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'
import projectsData from '@/assets/projects.yml'

// Define all tags with their categories
const tagDefinitions = {
  Domains: {
    backend: 'Backend',
    frontend: 'Frontend',
    database: 'Database',
    testing: 'Testing',
    hosting: 'Cloud Hosting',
    restApi: 'REST API',
    ai: 'AI',
    microservices: 'Microservices',
    webDevelopment: 'Web Development',
    gameDevelopment: 'Game Development',
  },
  Technologies: {
    java: 'Java',
    springBoot: 'Spring Boot',
    typeScript: 'JavaScript/TypeScript',
    junit: 'JUnit',
    playwright: 'Playwright',
    jest: 'Jest',
    postgres: 'PostgreSQL',
    react: 'React',
    nextJs: 'Next.js',
    nestJs: 'Nest.js',
    grafana: 'Grafana',
    prometheus: 'Prometheus',
    apacheKafka: 'Apache Kafka',
    docker: 'Docker',
    kubernetes: 'Kubernetes',
    k6: 'K6',
    dns: 'DNS',
    cloudflare: 'Cloudflare',
  },
  Skills: {
    leadership: 'Leadership',
    selfLeadership: 'Self-Leadership',
    presenting: 'Presenting',
    teaching: 'Teaching',
  },
}

export const Route = createFileRoute('/portfolio')({
  component: PortfolioPage,
})

function PortfolioPage() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})
  const isExpanded = (c: string) => expandedCategories[c]
  const toggleCategory = (c: string) =>
    setExpandedCategories((prev) => ({ ...prev, [c]: !prev[c] }))

  // Prepare a canonical list of defined tags for normalization
  const definedTags = useMemo(() => {
    return [
      ...Object.values(tagDefinitions.Technologies),
      ...Object.values(tagDefinitions.Domains),
      ...Object.values(tagDefinitions.Skills),
    ]
  }, [])

  type YamlProject = {
    id: number
    client: string
    title: string
    path: string
    desc: string
    highlight: number
    date: string
    tags: Array<string>
  }

  const allProjects = useMemo(() => {
    const items = (projectsData?.projects ?? []) as Array<YamlProject>
    // Normalize YAML tags to match our defined tag values (case-insensitive)
    const normalizeTag = (t: string) => {
      const match = definedTags.find(
        (dt) => dt.toLowerCase() === t.toLowerCase()
      )
      return match ?? t
    }
    return items.map((p) => ({
      ...p,
      tags: (p.tags).map(normalizeTag),
    }))
  }, [definedTags])

  const tagCategories = useMemo(() => {
    const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags)))

    // Automatically generate categories from tagDefinitions
    const categorized: Record<string, Array<string>> = {}
    Object.entries(tagDefinitions).forEach(([category, tags]) => {
      const categoryTags = (Object.values(tags)).filter(t => allTags.includes(t))
      if (categoryTags.length > 0) {
        categorized[category] = categoryTags.sort()
      }
    })

    return categorized
  }, [allProjects])

  const clients = useMemo(() => {
    const uniqueClients = Array.from(new Set(allProjects.map((p) => p.client).filter(Boolean)))
    return uniqueClients.sort()
  }, [allProjects])

  const [activeTags, setActiveTags] = useState<Array<string>>([])
  const [activeClients, setActiveClients] = useState<Array<string>>([])
  const [sortBy, setSortBy] = useState<'highlight' | 'client' | 'date'>('highlight')

  const toggleTag = (t: string) =>
    setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))

  const toggleClient = (c: string) =>
    setActiveClients((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]))

  const visible = useMemo(
    () => {
      let filtered = allProjects

      if (activeTags.length > 0) {
        filtered = filtered.filter((p) => activeTags.every((t) => (p.tags).includes(t)))
      }

      if (activeClients.length > 0) {
        filtered = filtered.filter((p) => activeClients.includes(p.client))
      }

      // Sort the filtered results
      return [...filtered].sort((a, b) => {
        if (sortBy === 'highlight') {
          return a.highlight - b.highlight
        }
        if (sortBy === 'client') {
          const cmp = (b.client || '').localeCompare(a.client || '')
          if (cmp !== 0) return cmp
          return a.highlight - b.highlight
        }
        if (sortBy === 'date') {
          const dateA = a.date === 'Ongoing' ? Infinity : new Date(a.date).getTime()
          const dateB = b.date === 'Ongoing' ? Infinity : new Date(b.date).getTime()
          const cmp = dateB - dateA
          if (cmp !== 0) return cmp
          return a.highlight - b.highlight
        }
        return 0
      })
    },
    [activeTags, activeClients, allProjects, sortBy],
  )

  return (
    <div className="page-container">
      <div className="portfolio-layout">
        <aside className="aside">
          <div className="filter-header">
            <h3>Filter</h3>
            <button
              className="filter-clear"
              onClick={() => {
                setActiveTags([])
                setActiveClients([])
                setSortBy('highlight')
              }}
              disabled={activeTags.length === 0 && activeClients.length === 0 && sortBy === 'highlight'}
            >
              Clear
            </button>
          </div>

          <div className="filter-category open">
            <div className="filter-category-title no-caret">
              Sort By
            </div>
            <div className="filter-sort-dropdown">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="sort-select"
              >
                <option value="highlight">Highlighted Projects</option>
                <option value="client">Client</option>
                <option value="date">Date</option>
              </select>
            </div>
          </div>

          {/* Clients Section */}
          <div className={`filter-category ${isExpanded('Clients') ? 'open' : ''}`}>
            <button
              className="filter-category-title clickable"
              onClick={() => toggleCategory('Clients')}
              aria-expanded={isExpanded('Clients')}
            >
              <span className="caret">{isExpanded('Clients') ? '▾' : '▸'}</span>
              Clients
            </button>
            {isExpanded('Clients') && (
              <div className="filter-tags">
                {clients.map((client) => (
                  <button
                    key={client}
                    className={`filter-tag ${activeClients.includes(client) ? 'active' : ''}`}
                    onClick={() => toggleClient(client)}
                  >
                    {client}
                  </button>
                ))}
              </div>
            )}
          </div>

          {Object.entries(tagCategories).map(([category, tags]) => (
            <div key={category} className={`filter-category ${isExpanded(category) ? 'open' : ''}`}>
              <button
                className="filter-category-title clickable"
                onClick={() => toggleCategory(category)}
                aria-expanded={isExpanded(category)}
              >
                <span className="caret">{isExpanded(category) ? '▾' : '▸'}</span>
                {category}
              </button>
              {isExpanded(category) && (
                <div className="filter-tags">
                  {tags.map((t) => (
                    <button
                      key={t}
                      className={`filter-tag ${activeTags.includes(t) ? 'active' : ''}`}
                      onClick={() => toggleTag(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>
        <main className="projects">
          {visible.map((p) => (
            <Link key={p.id} className="project" to={'/project/' + p.path} params={{ id: p.path }}>
              <h3>{p.client ? `${p.client} - ${p.title}` : p.title}</h3>
              <p>{p.desc}</p>
            </Link>
          ))}
        </main>
      </div>
    </div>
  )
}

