import { createFileRoute } from '@tanstack/react-router'
import Project from '@/components/Project'
import BackButton from '@/components/BackButton'

export const Route = createFileRoute('/project/testing_health')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='project-page-container'>
    <BackButton to="/portfolio" label="Back" />
    <Project
      name="Testing & Health Project"
      description="Implemented automated tests and a health dashboard for Chattrick products, improving reliability and observability."
      highlights={[
        'End-to-end tests with Playwright and Jest unit/integration tests',
        'Service health metrics and dashboards in Grafana with Prometheus',
        'Next.js/Nest.js stack with CI-friendly test runs',
      ]}
      tech={[
        'JavaScript/TypeScript',
        'Next.js',
        'Nest.js',
        'Playwright',
        'Jest',
        'Grafana',
        'Prometheus',
      ]}
      links={{}}
    />
    <BackButton to='/portfolio' label='Back' hidden={true} />
  </div>
}

