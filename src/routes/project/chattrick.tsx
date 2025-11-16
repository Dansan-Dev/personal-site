import { createFileRoute } from '@tanstack/react-router'
import Project from '@/components/Project'

export const Route = createFileRoute('/project/chattrick')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='project-page-container'>
    <Project
      name="Testing & Health Project"
      description="Implemented automated tests and a health dashboard for Chattrick services, improving reliability and observability. The health dashboard app were implemented using a spring backend with prometheus for metrics and grafana for displaying dashboards."
      highlights={[
        'Implemented Health Dashboard for monitoring Chattrick services and sending alerts through Resend Mails',
        'Next.js/Nest.js stack for frontend and backend',
        'Playwright e2e tests',
        'Jest unit/integration/e2e tests',
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
  </div>
}

