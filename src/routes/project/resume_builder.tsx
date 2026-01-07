import { createFileRoute } from '@tanstack/react-router'
import Project from '@/components/Project'

export const Route = createFileRoute('/project/resume_builder')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='project-page-container'>
    <Project
      name="Resume Builder App"
      description="A new solution for SALT consultants to build, version, and manage CVs. Separates resume data from theme for more flexible theme management, and improved the PDF quality. Other features: LinkedIn import, translation, custom theme language built on html."
      highlights={[
        'Product Lead — defined product vision and scope',
        'Presentation Lead — responsible for presentation structure and delegation',
        'Contributed across the whole codebase',
      ]}
      tech={[
        'React.js',
        'TanStack Router & Query',
        'Spring Boot',
        'Docker',
        'Fly.io',
        'Gemini API (AI)',
      ]}
      reflections={`It was good experience as a Product Lead, to work together with the team to form a vision on what is or is not vital to the product. This project also deepened my understanding of AI in development. It taught me how to balance AI assistance with manual coding, and how good prompting and rule documents increase development speed and code quality for AI.`}
      links={{
        github: 'https://github.com/salt-community/json2resume/',
        live: 'https://frontend-proud-butterfly-9919.fly.dev/',
      }}
    />
  </div>
}
