import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { SocialBubbles } from '../components/SocialBubbles'
import { WorkStatus } from '../components/WorkStatus'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const images = [
    '/profile-picture.png',
  ]
  const [index, setIndex] = useState(0)
  const name = 'Daniel Sandström'
  const title = 'Fullstack Java Developer'
  const description = 'I build reliable Apps and REST APIs using clean data models, consistent testing, and thoughtful design that keeps complexity down while making systems easy to understand and maintain.'

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="home-full">
      <div className="home-grid">
        <section className="home-text">
          <h1 className="home-title">{name}</h1>
          <h2 className="home-subtitle">{title}</h2>
          <p className="home-desc">{description}</p>
          <div className="home-actions">
            <SocialBubbles
              links={[
                { title: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-sandstr%C3%B6m-449874316/', iconSrc: '/linkedin_icon.svg' },
                { title: 'GitHub', href: 'https://github.com/Dansan-Dev', iconSrc: '/github-mark.png' },
                { title: 'Email', href: 'mailto:work@danielsandstrom.org', iconSrc: '/mail_icon.svg' },
              ]}
            />
            <WorkStatus status="consultant" />
          </div>
        </section>
        <section className="carousel-container">
          <div className="carousel">
            <img src={images[index]} alt="image" />
            <div className="carousel-dots">
              {images.map((_, i) => (
                <span key={i} className={`carousel-dot ${i === index ? 'active' : ''}`} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
