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
    dns: 'DNS',
    cloudflare: 'Cloudflare',
  },
  Skills: {
    leadership: 'Leadership',
    presenting: 'Presenting',
  },
}

export const Route = createFileRoute('/portfolio')({
  component: PortfolioPage,
})

function PortfolioPage() {  
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})
  const isExpanded = (c: string) => !!expandedCategories[c]
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

  const [activeTags, setActiveTags] = useState<Array<string>>([])

  const toggleTag = (t: string) =>
    setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))

  const visible = useMemo(
    () => (activeTags.length ? allProjects.filter((p) => activeTags.every((t) => (p.tags).includes(t))) : allProjects),
    [activeTags, allProjects],
  )

  return (
    <div className="page-container">
      <div className="portfolio-layout">
        <aside className="aside">
          <div className="filter-header">
            <h3>Filter</h3>
            <button
              className="filter-clear"
              onClick={() => setActiveTags([])}
              disabled={activeTags.length === 0}
            >
              Clear
            </button>
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

