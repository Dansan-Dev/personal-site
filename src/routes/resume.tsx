import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})

function ResumePage() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState<'en' | 'se'>('en')

  const resumeUrl = useMemo(() => (
    lang === 'en' ? '/cv-daniel-sandstrom-en.pdf' : '/cv-daniel-sandstrom-se.pdf'
  ), [lang])

  return (
    <div className="page-container">
      <div className="resume-frame">
        <div style={{display:'flex', gap:12, alignItems:'center', flexWrap:'wrap'}}>
          <div className="filter-tags">
            <button
              className={`tag ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              English
            </button>
            <button
              className={`tag ${lang === 'se' ? 'active' : ''}`}
              onClick={() => setLang('se')}
            >
              Svenska
            </button>
          </div>
          <a className="btn" href={resumeUrl} download>
            Download PDF
          </a>
        </div>
        <iframe
          className="resume-embed"
          src={resumeUrl}
          title="Resume"
          onClick={() => setOpen(true)}
        />
      </div>

      {open ? (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-content">
            <button className="modal-close" aria-label="Close" onClick={() => setOpen(false)}>
              ×
            </button>
            <iframe src={resumeUrl} title="Resume Fullscreen" />
          </div>
        </div>
      ) : null}
    </div>
  )
}

