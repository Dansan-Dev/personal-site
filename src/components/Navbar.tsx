import { Link } from '@tanstack/react-router'

export function Navbar() {
  return (
    <div className="navbar-wrap">
      <nav className="navbar" aria-label="Primary Navigation">
        <span className="brand" aria-hidden="true" />
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/portfolio">Portfolio</Link>
        <a href="https://example.com" target="_blank" rel="noreferrer">Game Development</a>
      </nav>
    </div>
  )
}


