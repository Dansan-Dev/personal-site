import { Outlet, createRootRoute, useRouterState, useMatches } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { CanonicalTag } from '../components/CanonicalTag'
import { NotFound } from '../components/NotFound'
import { useEffect } from 'react'

export const Route = createRootRoute({
  component: () => {
    const { location } = useRouterState()
    const matches = useMatches()

    useEffect(() => {
      // In TanStack Router, matches.length > 1 means root + valid child route.
      if (matches.length > 1) {
        sessionStorage.setItem('has_reached_internal_site', 'true')
        sessionStorage.setItem('last_valid_path', location.pathname)
      }
    }, [location.pathname, matches.length])

    return (
      <>
        <CanonicalTag />
        <Navbar />
        <Outlet />
      </>
    )
  },
  notFoundComponent: () => (
    <>
      <CanonicalTag />
      <Navbar />
      <NotFound />
    </>
  ),
})
