import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

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
  const description = 'I build engaging digital experiences across web and native platforms with a focus on delightful interactions, performance, and accessibility.'

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
        </section>
        <section>
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
