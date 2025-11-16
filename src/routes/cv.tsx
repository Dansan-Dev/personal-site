import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/cv')({
  component: CVPage,
})

function CVPage() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState<'en' | 'se'>('en')

  const resumeUrl = useMemo(() => (
    lang === 'en' ? '/cv-daniel-sandstrom-en.pdf' : '/cv-daniel-sandstrom-se.pdf'
  ), [lang])

  return (
    <div className="page-container cv-page-container">
      <div className="resume-frame">
        <div className='resume-options-bar'>
          <div className="filter-tags">
            <button
              className={`filter-tag cv-language-selector ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              English
            </button>
            <button
              className={`filter-tag cv-language-selector ${lang === 'se' ? 'active' : ''}`}
              onClick={() => setLang('se')}
            >
              Swedish
            </button>
          </div>
            <a className="btn" href={resumeUrl} download>
              <img className="btn-icon" src="download_icon.svg" alt=""/>
            </a>
          </div>
        <iframe
          className="resume-embed"
          src={resumeUrl}
          title="CV"
          onClick={() => setOpen(true)}
        />
      </div>

      {open ? (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-content">
            <button className="modal-close" aria-label="Close" onClick={() => setOpen(false)}>
              ×
            </button>
            <iframe src={resumeUrl} title="CV Fullscreen" />
          </div>
        </div>
      ) : null}
    </div>
  )
}

