import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

type BackButtonProps = {
  to: string
  label?: string
}


export default function BackButton({ to, label = 'Back' }: BackButtonProps) {
    return (
      // Zero-height wrapper so it doesn't push content down
      <div className="relative h-0">
        <Link
          to={to}
          // Absolute overlay: doesn’t affect layout
          className="pointer-events-auto absolute left-4 top-4
                     inline-flex items-center gap-2 px-4 py-2 border border-[var(--border-dark)]
                     bg-[rgba(12,20,32,0.5)] rounded-xl text-[var(--text-light)] text-sm font-medium
                     shadow-sm transition-all duration-200 hover:shadow-[0_0_8px_var(--color-main)]
                     hover:brightness-125"
          aria-label={label}
        >
          <ArrowLeft className="h-4 w-4" />
          {label}
        </Link>
      </div>
    )
  }
