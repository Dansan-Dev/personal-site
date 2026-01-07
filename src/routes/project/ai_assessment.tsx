import { createFileRoute } from '@tanstack/react-router'
import Project from '@/components/Project'

export const Route = createFileRoute('/project/ai_assessment')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='project-page-container'>
    <Project
      name="AI Assessment App"
      description="An app responsible for managing forms for assessing AI Maturity. It includes a form creator, notification management, and links management for fillable forms."
      highlights={[
        'Structured backend data models & implemented REST API endpoints',
        'Developed a Custom Form Builder in the frontend',
        'Managed hosting using Fly.io',
      ]}
      tech={[
        'Spring Boot',
        'Postgres',
        'Supabase',
        'React.js',
        'TanStack Router & Query',
        'Docker',
        'Fly.io',
        'JUnit',
      ]}
      reflections={`It was my first time being almost solely responsible for the data models. It was a great learning experience in designing flexible, scalable data structures and improving documentation and communication across the team.`}
      links={{
        github: 'https://github.com/saltsthlm/jfs-2025-03-31-salt-ai-assesment',
      }}
    />
  </div>
}
