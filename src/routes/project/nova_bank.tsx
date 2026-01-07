import { createFileRoute } from '@tanstack/react-router'
import Project from '@/components/Project'

export const Route = createFileRoute('/project/nova_bank')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='project-page-container'>
    <Project
      name="Nova Bank Platform"
      description="Final project of the 13-week Java Fullstack Program at SALT. A banking solution for a fictional customer with functional and business requirements in areas such as security, scalability and user-friendliness."
      highlights={[
        'Project Manager — responsible for meetings and ensuring inter-team communication and collaboration',
        'Worked as Backend Developer across all layers',
      ]}
      tech={[
        'Spring Boot',
        'PostgreSQL',
        'Supabase',
        'React.js',
        'TanStack Router & Query',
        'Clerk',
        'Docker',
        'GCP',
        'GitHub Actions (CI/CD)',
      ]}
      reflections={`As Project Manager I grew my leadership, communication, and documentation skills. As a Backend Developer I learned to deliver secure, scalable, high-quality software under tight deadlines in a team environment.`}
      links={{
        github: 'https://github.com/saltsthlm/jfs-2025-03-31-novabank-ab',
        demo: 'https://youtu.be/nE_16cvehM0?t=1389',
        presentation: 'https://youtu.be/nE_16cvehM0?t=399',
      }}
    />
  </div>
}
