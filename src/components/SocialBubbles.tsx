type SocialBubblesProps = {
  links: Array<{
    href: string
    title: string
    iconSrc: string
  }>
}

export function SocialBubbles({ links }: SocialBubblesProps) {
  return (
    <div className="social-row">
      {links.map((link) => (
        <a
          key={link.title}
          className="bubble"
          href={link.href}
          target={link.href.startsWith('mailto:') ? undefined : '_blank'}
          rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
          aria-label={link.title}
          title={link.title}
        >
          <span className="bubble-bg" aria-hidden="true" />
          <img src={link.iconSrc} alt="" />
        </a>
      ))}
    </div>
  )
}


