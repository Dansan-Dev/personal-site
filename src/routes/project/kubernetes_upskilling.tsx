import { createFileRoute } from '@tanstack/react-router'
import Project from '@/components/Project'

export const Route = createFileRoute('/project/kubernetes_upskilling')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='project-page-container'>
      <Project
        name="Kubernetes Project & Workshop"
        description="Migrated a Kafka-based microservice system into Kubernetes, implementing scaling strategies, and teaching Kubernetes through a workshop presentation and laboration."
        highlights={[
          'Deployed a multi-service Kafka architecture using Services, Deployments, and StatefulSets.',
          'Implemented Horizontal Pod Autoscaling (HPA).',
          'Stress-testing using K6 scripts to validate cluster resilience and observe real-time autoscaling behavior.',
          'Developed an educational workshop with hands-on lab to teach Kubernetes fundamentals.',
        ]}
        tech={[
          'Kubernetes',
          'K6',
          'Apache Kafka',
          'Spring Boot',
          'Docker',
          'Java'
        ]}
        reflections={`A hands-on introduction to Kubernetes orchestration and deployment. Deploying an older Kafka-based microservice system into Kubernetes gave great insight on how to structure and deploy real projects, and the preparing the workshop lab was an excersice in putting myself in the shoes of someone new to Kubernetes and preparing their learning journey in a pedagogical way.`}
        links={{
          extra: [
            {
              name: 'Kubernetes Workshop',
              link: 'https://github.com/salt-community/k8-workshop',
              icon: '/github-mark.png'
            },
            {
              name: 'Kubernetes Kafka Project',
              link: 'https://github.com/salt-community/kubernetes-kafka-project',
              icon: '/github-mark.png'
            },
            {
              name: 'Old Kafka Project',
              link: 'https://github.com/saltsthlm/restaurant-order-service',
              icon: '/github-mark.png'
            },
          ]

        }}
      />
    </div>
  )
}
