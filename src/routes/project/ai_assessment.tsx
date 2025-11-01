import { createFileRoute } from '@tanstack/react-router'
import Project from '@/components/Project'
import BackButton from '@/components/BackButton'

export const Route = createFileRoute('/project/ai_assessment')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <BackButton to="/portfolio" label="Back" />
    <Project
      name="AI Assessment App"
      description="An app responsible for managing forms for assessing AI Maturity — including a form creator, notifications, and handling links to fillable forms."
      highlights={[
        'Structured backend data models & implemented REST API endpoints',
        'Developed a Custom Form Builder in the frontend',
        'Managed hosting using Fly.io',
      ]}
      tech={[
        'Spring Boot',
        'Postgres & Supabase',
        'ReactJS',
        'TanStack Router & Query',
        'Docker',
        'Fly.io',
      ]}
      reflections={`It was my first time being fully responsible for the data models — a great learning experience in designing flexible, scalable data structures and improving documentation and communication across the team.`}
      links={{
        github: 'https://github.com/saltsthlm/jfs-2025-03-31-salt-ai-assesment',
      }}
    />
  </div>
}
