import { useState, type CSSProperties, type PointerEvent, type ReactNode } from 'react'

interface PageShellProps {
  children: ReactNode
}

export default function PageShell({ children }: PageShellProps) {
  const [hovering, setHovering] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const mask = `radial-gradient(circle at ${cursor.x}px ${cursor.y}px, #000 72px, transparent 120px)`

  const containerStyle: CSSProperties = {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
  }
  const dotsStyle: CSSProperties = {
    position: 'fixed',
    inset: 0,
    backgroundImage:
      'radial-gradient(circle at center, rgba(30, 58, 138, 0.12) 1.2px, transparent 1.4px)',
    backgroundPosition: 'center',
    backgroundSize: '18px 18px',
    pointerEvents: 'none',
    zIndex: 0,
  }
  const dotsHoverStyle: CSSProperties = {
    position: 'fixed',
    inset: 0,
    backgroundImage:
      'radial-gradient(circle at center, rgba(30, 58, 138, 0.22) 2.16px, transparent 2.36px)',
    backgroundPosition: 'center',
    backgroundSize: '18px 18px',
    opacity: hovering ? 1 : 0,
    maskImage: mask,
    WebkitMaskImage: mask,
    transition: 'opacity 0.15s ease',
    pointerEvents: 'none',
    zIndex: 0,
  }

  return (
    <div
      style={containerStyle}
      onPointerEnter={() => setHovering(true)}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setHovering(false)}
    >
      <div style={dotsStyle} aria-hidden="true" />
      <div style={dotsHoverStyle} aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
