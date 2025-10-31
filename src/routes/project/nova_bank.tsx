import { createFileRoute } from '@tanstack/react-router'
import Project from '@/components/Project'

export const Route = createFileRoute('/project/nova_bank')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Project
      name="Nova Bank Platform"
      description="Final project of the 13-week Java Fullstack Program at SALT. A banking solution for a fictional customer with business and functional requirements — secure, scalable, user-friendly, and innovative."
      highlights={[
        'Acted as Project Manager — led communication, meetings, planning',
        'Worked as Backend Developer across all layers',
      ]}
      tech={[
        'Spring Boot',
        'Postgres',
        'Supabase',
        'ReactJS',
        'TanStack Router & Query',
        'Clerk',
        'GCP',
        'GitHub Actions (CI/CD)',
      ]}
      reflections={`As Project Manager, I grew my leadership, communication, and documentation skills. As Backend Developer, I learned to deliver high-quality, secure software under tight deadlines in a team environment.`}
      links={{
        github: 'https://github.com/saltsthlm/jfs-2025-03-31-novabank-ab',
        demo: 'https://youtu.be/nE_16cvehM0?t=1389',
        presentation: 'https://youtu.be/nE_16cvehM0?t=399',
      }}
    />
  </div>
}
