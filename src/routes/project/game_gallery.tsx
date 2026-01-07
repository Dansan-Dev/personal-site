import { createFileRoute } from '@tanstack/react-router'
import Project from '@/components/Project'

export const Route = createFileRoute('/project/game_gallery')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='project-page-container'>
    <Project
      name="Game Gallery"
      description="A site for browsing and installing my games."
      tech={[
        'React.js',
        'TypeScript',
        'TanStack Router',
        'TailwindCSS',
        'Docker',
        'Fly.io',
        'DNS Configuration',
        'Cloudflare'
      ]}
      highlights={[
        'Responsive web application for showcasing and distributing games',
        'Deployment via fly.io with Docker containerization',
        'DNS configuration and management via Cloudflare'
      ]}
      links={{ live: 'https://games.danielsandstrom.org' }}
    />
  </div>
}
