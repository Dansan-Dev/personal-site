import { Link, createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

// Define all tags with their categories
const tagDefinitions = {
  Technologies: {
    java: 'Java',
    springBoot: 'Spring Boot',
    typeScript: 'JavaScript/TypeScript',
    react: 'React',
    apacheKafka: 'Apache Kafka',
    docker: 'Docker',
  },
  Domains: {
    backend: 'Backend',
    frontend: 'Frontend',
    database: 'Database',
    restApi: 'REST API',
    ai: 'AI',
    microservices: 'Microservices',
    webDevelopment: 'Web Development',
  },
  Skills: {
    leadership: 'Leadership',
  },
} as const

export const Route = createFileRoute('/portfolio')({
  component: PortfolioPage,
})

function PortfolioPage() {
  // Create tag constants from definitions
  const java = tagDefinitions.Technologies.java
  const springBoot = tagDefinitions.Technologies.springBoot
  const typeScript = tagDefinitions.Technologies.typeScript
  const react = tagDefinitions.Technologies.react
  const apacheKafka = tagDefinitions.Technologies.apacheKafka
  const docker = tagDefinitions.Technologies.docker

  const backend = tagDefinitions.Domains.backend
  const database = tagDefinitions.Domains.database
  const frontend = tagDefinitions.Domains.frontend
  const restApi = tagDefinitions.Domains.restApi
  const ai = tagDefinitions.Domains.ai
  const microservices = tagDefinitions.Domains.microservices
  const webDevelopment = tagDefinitions.Domains.webDevelopment

  const leadership = tagDefinitions.Skills.leadership

  const allProjects = useMemo(
    () => [
      { id: 1, 
        title: 'SALT - Nova Bank Platform',
        path: 'nova_bank',
        desc: 'Full-stack banking app built with Java, React, and Postgres during SALT’s final project.', 
        tags: [
          backend, 
          database, 
          restApi, 
          leadership, 
          webDevelopment, 
          java, 
          springBoot, 
          docker
      ] },
      { id: 2, 
        title: 'SALT - AI Assessment Tool', 
        path: 'ai_assessment',
        desc: 'Form builder and management tool for assessing AI maturity with custom workflows.', 
        tags: [
          backend, 
          database, 
          frontend, 
          restApi, 
          leadership, 
          webDevelopment, 
          java, 
          springBoot, 
          typeScript, 
          react, 
          docker
      ] },
      { id: 3, 
        title: 'SALT - Resume Builder', 
        path: 'resume_builder',
        desc: 'AI-powered CV builder with versioning, LinkedIn import, and theme customization.', 
        tags: [
          backend, 
          frontend, 
          restApi, 
          leadership, 
          webDevelopment, 
          ai, 
          java, 
          springBoot, 
          typeScript, 
          react, 
          docker
      ] },
      { id: 4, 
        title: 'SALT - Apache Kafka Upskilling Project', 
        path: 'kafka_upskilling',
        desc: 'Kafka-based microservice system for managing restaurant orders and workflows.', 
        tags: [
          backend, 
          restApi, 
          apacheKafka, 
          microservices, 
          java, 
          springBoot, 
          docker
      ] },
      { id: 5, 
        title: 'Private - Personal Marketing Website', 
        path: 'personal_website',
        desc: 'My portfolio site built with React, TanStack, and Tailwind.', 
        tags: [
          frontend, 
          webDevelopment, 
          typeScript, 
          react, 
          docker
      ] },
    ],
    [],
  )

  const tagCategories = useMemo(() => {
    const allTags = Array.from(new Set(allProjects.flatMap((p) => p.tags))) as Array<string>
    
    // Automatically generate categories from tagDefinitions
    const categorized: Record<string, Array<string>> = {}
    Object.entries(tagDefinitions).forEach(([category, tags]) => {
      const categoryTags = (Object.values(tags) as Array<string>).filter(t => allTags.includes(t))
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
    () => (activeTags.length ? allProjects.filter((p) => activeTags.every((t) => (p.tags as Array<string>).includes(t))) : allProjects),
    [activeTags, allProjects],
  )

  return (
    <div className="page-container">
      <div className="portfolio-layout">
        <aside className="aside">
          <h3>Filter</h3>
          {Object.entries(tagCategories).map(([category, tags]) => (
            <div key={category} className="filter-category">
              <h4 className="filter-category-title">{category}</h4>
              <div className="filter-tags">
                {tags.map((t) => (
                  <button
                    key={t}
                    className={`tag ${activeTags.includes(t) ? 'active' : ''}`}
                    onClick={() => toggleTag(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>
        <main className="projects">
          {visible.map((p) => (
            <Link key={p.id} className="project" to={'/project/' + p.path} params={{ id: p.path }}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </Link>
          ))}
        </main>
      </div>
    </div>
  )
}

