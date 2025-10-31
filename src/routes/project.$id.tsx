import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div className="flex items-center justify-center h-screen">
    <div>Unknown Project</div>
  </div>
)
}
