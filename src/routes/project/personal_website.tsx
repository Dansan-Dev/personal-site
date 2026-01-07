import { createFileRoute } from '@tanstack/react-router'
import Project from '@/components/Project'

export const Route = createFileRoute('/project/personal_website')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='project-page-container'>
    <Project
      name="Personal Website"
      description="Welcome to the project behind this very site. A personal project for displaying my work, skills, and experiences as a developer."
      tech={[
        'React.js',
        'TanStack Router',
        'TypeScript',
        'Vite',
        'TailwindCSS',
        'fly.io',
        'DNS Configuration',
        'Cloudflare'
      ]}
      highlights={[
        'Responsive layout for different screen sizes and devices',
        'Deployment via fly.io',
        'DNS configuration and management via Cloudflare'
      ]}
      links={{ github: 'https://github.com/Dansan-Dev/personal-marketing-server' }}
    />
  </div>
}
