import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { CanonicalTag } from '../components/CanonicalTag'
import { NotFound } from '../components/NotFound'

export const Route = createRootRoute({
  component: () => (
    <>
      <CanonicalTag />
      <Navbar />
      <Outlet />
    </>
  ),
  notFoundComponent: () => <NotFound />,
})
