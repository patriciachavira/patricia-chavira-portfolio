import { Link } from 'react-router'
import PageShell from '../components/PageShell'

const navItems = [
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/work' },
  { label: 'Experience', to: '#experience' },
  { label: 'Contact', to: 'mailto:patricia@chaviradesign.com' },
]

const capabilities = [
  {
    id: 'expertise',
    eyebrow: 'Core Expertise',
    accent: true,
    items: [
      'Enterprise UX/UI Design',
      'Agentic Workflow Interfaces',
      'Design Systems Architecture',
      'Design Token Management',
      'Cross-functional UX Research',
      'Rapid Prototyping & Handoff',
    ],
  },
  {
    id: 'highlights',
    eyebrow: 'Highlights & Accomplishments',
    accent: false,
    items: [
      'Enterprise design system serving 12 product teams',
      'WCAG AAA compliance across 3 product surfaces',
      'Community Radio Production · KXLU 88.9 FM',
      'Mentorship Program Lead · 8 junior designers',
      'Speaker · Interaction Design Conference 2024',
    ],
  },
  {
    id: 'rigor',
    eyebrow: 'Rigor & Standards',
    accent: false,
    items: [
      'WCAG 2.1 AA / AAA compliance',
      'High-contrast visual pattern design',
      'Formative & summative UX research',
      'Handoff-ready component specifications',
      'Inclusive design methodology',
      'Accessibility-first component architecture',
    ],
  },
]

export default function Landing() {
  return (
    <PageShell>
      {/* ── Navigation ─────────────────────────────────────────── */}
      <header>
        <Nav />
      </header>

      <main>
        {/* ── Hero ───────────────────────────────────────────────── */}
        <HeroSection />

        {/* ── Capabilities ───────────────────────────────────────── */}
        <CapabilitiesSection />
      </main>
    </PageShell>
  )
}

/* ─── Nav ────────────────────────────────────────────────────────────────── */

function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 bg-surface-base/90 backdrop-blur-md border-b border-border-strong/20"
      aria-label="Primary navigation"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="text-text-primary font-bold text-base sm:text-lg leading-none tracking-tight hover:text-brand-primary transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-focus-ring rounded focus:outline-none"
          aria-label="Patricia Chavira — home"
        >
          Patricia Chavira
        </Link>

        {/* Nav items */}
        <ul className="flex items-center gap-1 sm:gap-2" role="list">
          {navItems.map(({ label, to }) => {
            const isExternal = to.startsWith('mailto:') || to.startsWith('http')
            return (
              <li key={label}>
                {isExternal ? (
                  <a
                    href={to}
                    className="inline-flex items-center justify-center h-11 px-3 sm:px-4 text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-200 rounded focus-visible:ring-2 focus-visible:ring-focus-ring focus:outline-none min-w-[44px]"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    to={to}
                    className="inline-flex items-center justify-center h-11 px-3 sm:px-4 text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-200 rounded focus-visible:ring-2 focus-visible:ring-focus-ring focus:outline-none min-w-[44px]"
                  >
                    {label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 sm:pt-28 lg:pt-36 pb-20 sm:pb-28"
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-10" aria-hidden="true">
        <span className="w-8 h-px bg-brand-primary block" />
        <span className="font-mono text-xs text-text-secondary tracking-[0.18em] uppercase">
          Lead Product Designer · Available for Engagements
        </span>
      </div>

      {/* Headline */}
      <h1
        id="hero-heading"
        className="text-text-primary font-bold leading-[1.06] mb-8 max-w-4xl"
      >
        {/* Name — large display */}
        <span className="block text-[clamp(2.75rem,7vw,5.5rem)] tracking-tight">
          Patricia Chavira
        </span>
        {/* Rule + role — reads as subtitle but stays in one h1 for SEO */}
        <span className="block mt-3 text-[clamp(1.5rem,3.8vw,2.75rem)] text-text-secondary font-semibold tracking-tight leading-[1.15]">
          Lead Product Designer
          <span className="text-border-strong/60 mx-3 font-light">&amp;</span>
          UX/UI Strategist
        </span>
      </h1>

      {/* Subhead */}
      <p className="text-text-secondary text-lg sm:text-xl leading-[1.75] max-w-2xl mb-12">
        Designing scalable digital products, high-density enterprise tools, and intuitive
        human-centered workflows — bridging complex systems, AI innovation, and measurable
        business impact.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-4">
        <Link
          to="/work"
          className="inline-flex items-center justify-center gap-2 h-11 px-7 bg-brand-primary hover:bg-brand-hover text-white font-bold text-sm tracking-widest rounded-lg transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus:outline-none"
          aria-label="Explore Patricia's selected work and case studies"
        >
          EXPLORE WORK
        </Link>
        <a
          href="#"
          aria-label="Download Patricia Chavira's resume"
          className="inline-flex items-center justify-center gap-2 h-11 px-7 border border-border-strong text-text-primary font-bold text-sm tracking-widest rounded-lg hover:bg-surface-card transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus:outline-none"
        >
          GET IN TOUCH
        </a>
      </div>

      {/* Social proof strip */}
      <div
        className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-14 pt-8 border-t border-border-strong/20"
        aria-label="Credentials"
      >
        {[
          '8+ Years Enterprise Design',
          'Fortune 500 Clients',
          'WCAG AAA Certified Work',
          'Published Speaker',
        ].map((item) => (
          <span key={item} className="font-mono text-[11px] text-text-secondary tracking-wide">
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

/* ─── Capabilities ───────────────────────────────────────────────────────── */

function CapabilitiesSection() {
  return (
    <section
      aria-labelledby="capabilities-heading"
      className="max-w-6xl mx-auto px-5 sm:px-8 pb-24 sm:pb-32"
    >
      {/* Section header */}
      <div className="flex items-end justify-between gap-4 mb-10 flex-wrap">
        <div>
          <p
            className="font-mono text-xs text-text-secondary tracking-[0.18em] uppercase mb-2"
            aria-hidden="true"
          >
            What I bring
          </p>
          <h2
            id="capabilities-heading"
            className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight"
          >
            Core Capabilities
          </h2>
        </div>
        <Link
          to="/work"
          className="text-brand-primary font-bold text-sm tracking-wider hover:text-brand-hover transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-focus-ring rounded focus:outline-none"
          aria-label="View full portfolio and case studies"
        >
          VIEW FULL WORK →
        </Link>
      </div>

      {/* 3-column grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
        role="list"
        aria-label="Core capability areas"
      >
        {capabilities.map((col) => (
          <CapabilityCard key={col.id} {...col} />
        ))}
      </div>
    </section>
  )
}

interface CapabilityCardProps {
  eyebrow: string
  accent: boolean
  items: string[]
}

function CapabilityCard({ eyebrow, accent, items }: CapabilityCardProps) {
  return (
    <div
      role="listitem"
      className={[
        'rounded-2xl p-7 flex flex-col gap-6 border',
        accent
          ? 'bg-brand-primary border-brand-primary'
          : 'bg-surface-card border-border-strong/30',
      ].join(' ')}
    >
      {/* Column header */}
      <div className="flex items-start justify-between gap-3">
        <p
          className={[
            'font-mono text-[11px] tracking-[0.18em] uppercase leading-snug',
            accent ? 'text-white/70' : 'text-text-secondary',
          ].join(' ')}
        >
          {eyebrow}
        </p>
        {accent && (
          <span
            className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white block" />
          </span>
        )}
      </div>

      {/* Rule */}
      <hr
        className={[
          'border-0 h-px',
          accent ? 'bg-white/20' : 'bg-border-strong/20',
        ].join(' ')}
        aria-hidden="true"
      />

      {/* Items */}
      <ul className="flex flex-col gap-3" aria-label={`${eyebrow} items`}>
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className={[
                'mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0',
                accent ? 'bg-white/50' : 'bg-brand-primary/50',
              ].join(' ')}
              aria-hidden="true"
            />
            <span
              className={[
                'text-sm leading-snug',
                accent ? 'text-white font-medium' : 'text-text-primary',
              ].join(' ')}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
