type BubbleBg = {
  radius?: number
  color?: string
  offsetX?: number
  offsetY?: number
}

type SocialBubblesProps = {
  size?: number
  bg?: BubbleBg
  links: Array<{
    href: string
    title: string
    iconSrc: string
    bgColor?: string
  }>
}

export function SocialBubbles({ size = 36, bg, links }: SocialBubblesProps) {
  const styleVars: (React.CSSProperties & Record<string, string>) = {
    ['--bubble-size-default']: `${size}px`,
  }
  if (bg?.radius) styleVars['--bubble-bg-radius'] = `${bg.radius}px`
  if (bg?.color) styleVars['--bubble-bg-color'] = bg.color
  if (bg?.offsetX !== undefined) styleVars['--bubble-bg-offset-x'] = `${bg.offsetX}px`
  if (bg?.offsetY !== undefined) styleVars['--bubble-bg-offset-y'] = `${bg.offsetY}px`

  return (
    <div className="social-row" style={styleVars}>
      {links.map((link) => (
        <a
          key={link.title}
          className="bubble"
          href={link.href}
          target={link.href.startsWith('mailto:') ? undefined : '_blank'}
          rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
          aria-label={link.title}
          title={link.title}
          style={link.bgColor ? { background: link.bgColor } : undefined}
        >
          <span className="bubble-bg" aria-hidden="true" />
          <img src={link.iconSrc} alt="" />
        </a>
      ))}
    </div>
  )
}


