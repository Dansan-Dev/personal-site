import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export function NotFound() {
    const [navConfig, setNavConfig] = useState<{ label: string; to?: string; isBack?: boolean }>({
        label: 'Return Home',
        to: '/'
    })

    useEffect(() => {
        const referrer = document.referrer
        const isInternalRef = referrer && referrer.includes(window.location.host)
        const isExternalRef = referrer && !isInternalRef
        const lastPath = sessionStorage.getItem('last_valid_path')

        if (isInternalRef) {
            // Came from another page on our site (standard click)
            setNavConfig({ label: 'Go Back', isBack: true })
        } else if (isExternalRef) {
            // Came from an external site, show Return Home
            setNavConfig({ label: 'Return Home', to: '/' })
        } else if (lastPath) {
            // Direct hit (no referrer), but we have internal history in this session
            setNavConfig({ label: 'Go Back', to: lastPath })
        } else {
            // Natural default
            setNavConfig({ label: 'Return Home', to: '/' })
        }
    }, [])

    const handleAction = () => {
        if (navConfig.isBack) {
            window.history.back()
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] p-6 text-center">
            <div className="bg-[var(--color-navbar-background)] border border-[var(--color-border-dark)] rounded-[24px] p-10 md:p-16 backdrop-blur-xl max-w-lg w-full shadow-2xl">
                <div className="mb-6">
                    <span className="text-3sm uppercase tracking-widest text-[var(--color-text-dim)] font-semibold opacity-80">
                        Error 404
                    </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-text-light)]">
                    Page Not Found
                </h1>
                <p className="text-[var(--color-text-dim)] text-base md:text-lg leading-relaxed mb-10 max-w-sm mx-auto">
                    The requested resource could not be located. It may have been moved or deleted.
                </p>

                {navConfig.isBack ? (
                    <button
                        onClick={handleAction}
                        className="inline-block px-8 py-3 bg-[var(--color-white-glass)] border border-[var(--color-border-dark)] rounded-full text-[var(--color-text-bright)] font-medium transition-all duration-300 hover:bg-[var(--color-white-glass-strong)] hover:border-[var(--color-text-dim)] hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                    >
                        {navConfig.label}
                    </button>
                ) : (
                    <Link
                        to={navConfig.to || '/'}
                        className="inline-block px-8 py-3 bg-[var(--color-white-glass)] border border(--color-border-dark) rounded-full text-[var(--color-text-bright)] font-medium transition-all duration-300 hover:bg-[var(--color-white-glass-strong)] hover:border-[var(--color-text-dim)] hover:-translate-y-0.5 active:scale-95"
                    >
                        {navConfig.label}
                    </Link>
                )}
            </div>
        </div>
    )
}
