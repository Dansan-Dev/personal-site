import { createFileRoute } from '@tanstack/react-router'
import Project from '@/components/Project'
import BackButton from '@/components/BackButton'

export const Route = createFileRoute('/project/personal_website')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <BackButton to="/portfolio" label="Back" />
    <Project
      name="Personal Website"
      description="Portfolio + blog with animated hero, filterable projects, and a CSS-variables theme."
      tech={['TypeScript', 'React', 'TanStack Router', 'Vite', 'TailwindCSS']}
      highlights={[
        'Filterable project grid with route-based filtering',
        'Responsive layout and accessible components',
        'Theming via CSS variables layered over Tailwind',
        'Simple CI build & static hosting',
      ]}
      links={{ github: 'https://github.com/yourname/personal-website' }}
    />
  </div>
}
