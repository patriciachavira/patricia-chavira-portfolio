import { type ReactNode } from 'react'
import { Link } from 'react-router'
import PageShell from './PageShell'

interface CaseNav {
  title: string
  slug: string
}

interface CaseStudyLayoutProps {
  children: ReactNode
  prev: CaseNav | null
  next: CaseNav | null
}

export default function CaseStudyLayout({ children, prev, next }: CaseStudyLayoutProps) {
  return (
    <PageShell>
      {/* ── Sticky top nav ──────────────────────────────────────────── */}
      <div className="sticky top-0 z-50 bg-surface-base/90 backdrop-blur-sm border-b border-border-strong/20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
          {/* Back link */}
          <Link
            to="/work"
            className="inline-flex items-center gap-2 h-10 px-3 -ml-3 text-brand-primary font-bold text-sm tracking-wide hover:text-brand-hover transition-colors duration-200 rounded focus-visible:ring-2 focus-visible:ring-focus-ring focus:outline-none flex-shrink-0"
            aria-label="Back to Selected Work"
          >
            <span aria-hidden="true" className="text-base">←</span>
            <span>Back to Selected Work</span>
          </Link>

          {/* Main nav header */}
          <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-2">
            <span className="hidden sm:block font-mono text-[10px] text-text-secondary tracking-[0.14em] uppercase mr-3 select-none">
              Patricia Chavira
            </span>
            {[
              { label: 'Work', to: '/work' },
              { label: 'About', to: '/' },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="h-8 px-3 inline-flex items-center font-mono text-[11px] text-text-secondary tracking-wide hover:text-text-primary transition-colors duration-150 rounded focus-visible:ring-2 focus-visible:ring-focus-ring focus:outline-none"
              >
                {label}
              </Link>
            ))}
            <a
              href="mailto:patricia@example.com"
              className="h-8 px-3 inline-flex items-center font-mono text-[11px] text-text-secondary tracking-wide hover:text-text-primary transition-colors duration-150 rounded focus-visible:ring-2 focus-visible:ring-focus-ring focus:outline-none"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* ── Page content ───────────────────────────────────────────── */}
      {children}

      {/* ── Bottom case navigation ─────────────────────────────────── */}
      <div className="w-full border-t border-border-strong/20 bg-surface-base">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-3 items-center py-6 gap-2">
            {/* Left: previous */}
            <div className="flex justify-start">
              {prev ? (
                <Link
                  to={`/${prev.slug}`}
                  className="group inline-flex flex-col gap-0.5 text-left focus-visible:ring-2 focus-visible:ring-focus-ring rounded focus:outline-none"
                >
                  <span className="font-mono text-[10px] text-text-secondary tracking-wide uppercase group-hover:text-brand-primary transition-colors duration-150 flex items-center gap-1.5">
                    <span aria-hidden="true">←</span> Previous
                  </span>
                  <span className="text-text-primary text-sm font-semibold leading-snug group-hover:text-brand-primary transition-colors duration-150 max-w-[160px] sm:max-w-xs">
                    {prev.title}
                  </span>
                </Link>
              ) : null}
            </div>

            {/* Center: view all */}
            <div className="flex justify-center">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 h-9 px-5 bg-surface-card border border-border-strong/40 rounded-lg font-mono text-[11px] text-text-secondary tracking-wide hover:text-text-primary hover:border-border-strong/70 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-focus-ring focus:outline-none"
              >
                View All Work
              </Link>
            </div>

            {/* Right: next */}
            <div className="flex justify-end">
              {next ? (
                <Link
                  to={`/${next.slug}`}
                  className="group inline-flex flex-col gap-0.5 text-right focus-visible:ring-2 focus-visible:ring-focus-ring rounded focus:outline-none"
                >
                  <span className="font-mono text-[10px] text-text-secondary tracking-wide uppercase group-hover:text-brand-primary transition-colors duration-150 flex items-center justify-end gap-1.5">
                    Next <span aria-hidden="true">→</span>
                  </span>
                  <span className="text-text-primary text-sm font-semibold leading-snug group-hover:text-brand-primary transition-colors duration-150 max-w-[160px] sm:max-w-xs">
                    {next.title}
                  </span>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* ── Global footer ───────────────────────────────────────────── */}
      <footer
        className="w-full"
        style={{ backgroundColor: '#0F172A' }}
        aria-label="Site footer"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          {/* Left: identity */}
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="text-white font-bold text-sm tracking-wide">Patricia Chavira</p>
            <p className="font-mono text-[11px] text-white/50 tracking-wide">Lead Product Designer · 2026</p>
          </div>

          {/* Right: footer links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
            {[
              { label: 'Selected Work', to: '/work', external: false },
              { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
              { label: 'Dribbble', href: 'https://dribbble.com', external: true },
              { label: 'Contact', href: 'mailto:patricia@example.com', external: true },
            ].map(({ label, to, href, external }) =>
              external ? (
                <a
                  key={label}
                  href={href}
                  target={href?.startsWith('mailto') ? undefined : '_blank'}
                  rel={href?.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="font-mono text-[11px] text-white/50 hover:text-white/90 transition-colors duration-150 tracking-wide focus-visible:ring-2 focus-visible:ring-white/40 rounded focus:outline-none"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  to={to!}
                  className="font-mono text-[11px] text-white/50 hover:text-white/90 transition-colors duration-150 tracking-wide focus-visible:ring-2 focus-visible:ring-white/40 rounded focus:outline-none"
                >
                  {label}
                </Link>
              )
            )}
          </nav>
        </div>
      </footer>
    </PageShell>
  )
}
