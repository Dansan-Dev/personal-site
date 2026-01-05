import { createFileRoute } from '@tanstack/react-router'
import Project from '@/components/Project'

export const Route = createFileRoute('/project/kafka_upskilling')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='project-page-container'>
    <Project
      name="Smart Restaurant App"
      description="Digital restaurant solution handling and managing online orders. Built to learn Apache Kafka and Microservice Architecture with four microservices: Order, Payment, Delivery, and Kitchen."
      highlights={[
        'Self-driven studies Apache Kafka and Microservice Architecture',
        'Developed the Order Microservice and Frontend Simulation',
        'Implemented Kafka communication between services',
        'Built dockerized local environment for working with Kafka Broker Clusters',
        'Developed tests for Kafka communication'
      ]}
      tech={[
        'Apache Kafka',
        'Spring Boot',
        'JUnit',
        'Postgres',
        'Docker',
        'ReactJS',
      ]}
      reflections={`A hands-on introduction to Kafka architecture and microservices. Strengthened my team and inter-team collaboration skills, as well as technical problem-solving skills in a team environment.`}
      links={{
        github: 'https://github.com/saltsthlm/restaurant-order-service',
      }}
    />
  </div>
}
