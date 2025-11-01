import { createFileRoute } from '@tanstack/react-router'
import Project from '@/components/Project'
import BackButton from '@/components/BackButton'

export const Route = createFileRoute('/project/kafka_upskilling')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <BackButton to="/portfolio" label="Back" />
    <Project
      name="Smart Restaurant App"
      description="Digital restaurant solution handling and managing online orders. Built to learn Apache Kafka and Microservice Architecture with four microservices: Order, Payment, Delivery, and Kitchen."
      highlights={[
        'Developed the Order microservice and frontend simulation',
        'Implemented Kafka communication between services',
        'Built Dockerized local environment',
      ]}
      tech={[
        'Apache Kafka',
        'Spring Boot',
        'Postgres',
        'Docker',
        'ReactJS',
      ]}
      reflections={`A hands-on introduction to Kafka architecture and microservices. Strengthened collaboration and technical problem-solving skills in a small team environment.`}
      links={{
        github: 'https://github.com/saltsthlm/restaurant-order-service',
      }}
    />
  </div>
}
