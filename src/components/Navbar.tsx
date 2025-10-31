import { Link, useRouterState } from '@tanstack/react-router'

export function Navbar() {
  const router = useRouterState()
  const currentPath = router.location.pathname

  return (
    <div className="navbar-wrap">
      <nav className="navbar" aria-label="Primary Navigation">
        <Link to="/" className={currentPath === '/' ? 'active' : ''}>Home</Link>
        <Link to="/cv" className={currentPath === '/cv' ? 'active' : ''}>CV</Link>
        <Link to="/portfolio" className={currentPath === '/portfolio' ? 'active' : ''}>Portfolio</Link>
        <a href="https://example.com" target="_blank" rel="noreferrer">Game Development</a>
      </nav>
    </div>
  )
}


