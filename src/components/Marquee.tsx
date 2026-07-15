type MarqueeProps = {
  items: string[]
  className?: string
}

export function Marquee({ items, className = '' }: MarqueeProps) {
  const loop = [...items, ...items]

  return (
    <div className={`slash-band overflow-hidden ${className}`}>
      <div className="marquee-track gap-8 py-3.5 font-display text-xs font-semibold tracking-[0.2em] uppercase md:text-sm">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
            {item}
            <span aria-hidden>○</span>
          </span>
        ))}
      </div>
    </div>
  )
}
