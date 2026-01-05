import { Link, useRouterState } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'

export function Navbar() {
  const router = useRouterState()
  const currentPath = router.location.pathname

  return (
    <div className="navbar-wrap">
      <nav className="navbar" aria-label="Primary Navigation">
        <Link to="/" className={currentPath === '/' ? 'active' : ''}>Home</Link>
        <Link to="/cv" className={currentPath === '/cv' ? 'active' : ''}>CV</Link>
        <Link to="/portfolio" className={
          currentPath === '/portfolio' || currentPath.startsWith('/project')
            ? 'active'
            : ''
        }>Portfolio</Link>
        {import.meta.env.VITE_GAME_GALLERY_URL ? (
          <a
            href={import.meta.env.VITE_GAME_GALLERY_URL}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-[8px]"
          >
            Games
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <a target="_blank" rel="noreferrer" className='cursor-not-allowed select-none flex items-center gap-2'>
            Games
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </nav>
    </div>
  )
}


