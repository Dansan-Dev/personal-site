import { createFileRoute } from '@tanstack/react-router'
import Project from '@/components/Project'
import BackButton from '@/components/BackButton'

export const Route = createFileRoute('/project/resume_builder')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <BackButton to="/portfolio" label="Back" />
    <Project
      name="Resume Builder App"
      description="A new solution for SALT consultants to build, version, and manage CVs. Separates resume data from theme, allowing flexible theme changes and improved PDF quality."
      highlights={[
        'Product Lead — defined product vision and scope',
        'Presentation Lead — responsible for presentation structure and delegation',
        'Contributed across all code areas as developer',
        'Implemented LinkedIn conversion, translation, theme management, and PDF export',
      ]}
      tech={[
        'TanStack React',
        'Spring Boot (AI microservice)',
        'Fly.io',
        'Gemini API (AI)',
      ]}
      reflections={`This project deepened my understanding of AI in development. It taught me how to balance AI assistance with manual coding, and how good prompting and rule documents increase development speed and code quality.`}
      links={{
        github: 'https://github.com/salt-community/json2resume/',
        live: 'https://frontend-proud-butterfly-9919.fly.dev/',
      }}
    />
  </div>
}
