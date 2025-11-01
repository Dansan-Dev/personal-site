import { Link, useRouterState } from '@tanstack/react-router'

export function Navbar() {
  const router = useRouterState()
  const currentPath = router.location.pathname

  const isCurrent = (path: string) => currentPath.startsWith(path)

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
        <a target="_blank" rel="noreferrer" className='cursor-not-allowed select-none'>Game Development</a>
      </nav>
    </div>
  )
}


