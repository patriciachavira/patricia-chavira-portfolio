import React, { useState } from 'react'
import { Link } from 'react-router'
import PageShell from '../components/PageShell'

/* ── Data ────────────────────────────────────────────────────────────────── */

const capabilities = [
  {
    id: 'expertise',
    eyebrow: 'Core Expertise',
    accent: true,
    items: [
      'Product Strategy: End-to-end design execution, cross-functional Agile leadership, and mentoring.',
      'Data-Dense UI: Designing high-density analytics dashboards & complex B2B systems, and B2C experiences.',
      'Agentic AI & Systems Design: Architecting human-in-the-loop workflows & automated decision tools.',
    ],
  },
  {
    id: 'highlights',
    eyebrow: 'Highlights & Accomplishments',
    accent: false,
    items: [
      <><strong>Enterprise Scale:</strong> Delivered 100+ product assignments, user tests, and site enhancements for complex enterprise accounts.</>,
      <><strong>AI Optimization:</strong> Ranked Top 5 in enterprise-wide prompt optimization &amp; workflow competitions. Top finalist in enterprise-wide hackathon challenge.</>,
      <><strong>High performer:</strong> Evaluated by managers, stakeholders, and clients locally and globally.</>,
      <><strong>Community &amp; Media:</strong> Active community radio co-producer &amp; grassroots advocacy host. Coordinator, and speaker: Women In Tech events 2024-2025</>,
    ],
  },
  {
    id: 'rigor',
    eyebrow: 'TOOLKIT & Standards',
    accent: false,
    items: [
      <><strong>Design Suite:</strong> Advanced Figma, Claude, Gemini, Perplexity, and AI interaction patterns, Adobe CC Cloud.</>,
      <><strong>Accessibility:</strong> Accessible digital experiences, design system architecture, and universal usability standards.</>,
      <><strong>Methodologies:</strong> Double Diamond Process, Information Architecture, Heuristic Evaluations, Design System Governance, Formative &amp; Summative Usability Testing.</>,
    ],
  },
]

const principles = [
  { num: '01', label: 'End-to-End Product & Systems Design: I connect business goals with real user needs, designing interfaces with systematic rigor. From early discovery mapping to scalable component libraries, I build UI systems that remain flexible and consistent as products grow.' },
  { num: '02', label: 'Accessibility-Focused Design Systems: Continuously learning about accessibility towards WCAG 2.1 AA standards, high-contrast visual patterns, and inclusive navigation, actively embedding accessible practices into core component architectures to make digital products naturally usable for everyone.' },
  { num: '03', label: 'Transparency in AI & Complex Data: Making complex software understandable. Whether designing data-dense dashboards or AI-assisted tools, I focus on clear visual feedback, explicit system status, and giving users real control over automated workflows.' },
  { num: '04', label: 'Grounded in the Human Element: Great products are built through iteration, team trust, and learning alongside others. I actively seek feedback, ask for direction and mentoring when needed, and iterate without ego. Outside of Figma, I recharge through community radio, photography, movies, series, concerts, a good book, time in nature, hanging out with with the people I love and my three dogs. In an automated world, keeping things human is what makes the work matter.' },
]

const projects = [
  {
    id: 1,
    slug: 'case-study-01',
    title: 'Agentic CHRO Onboarding Dashboard',
    tags: ['Lead UX/UI', 'Systems Architecture', 'HITL'],
    description:
      'A multi-agent orchestration platform redesigning employee onboarding flows with human-in-the-loop checkpoints, real-time pipeline visibility, and configurable escalation paths for HR administrators.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'HR onboarding dashboard showing employee workflow pipeline with progress tracking and status indicators',
  },
  {
    id: 2,
    slug: 'case-study-02',
    title: 'Board Member Decision Cockpit',
    tags: ['Executive UX', 'Multi-Agent Synthesis', 'Data Visualization'],
    description:
      'An executive intelligence interface synthesizing multi-agent data streams into structured briefings, enabling board-level decision velocity with configurable alert thresholds and drill-down analytics.',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'Executive boardroom environment with strategic data visualization screens displaying key performance metrics',
  },
  {
    id: 3,
    slug: 'case-study-03',
    title: 'News-Media Page Redesign & Scalable UI Kit',
    tags: ['UI Kit / Design System', 'Information Architecture'],
    description:
      'A ground-up information architecture overhaul paired with a component library supporting five editorial templates, reducing design-to-production cycle time by 60% across four editorial verticals.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'News media editorial layout system showing typographic hierarchy and component structure across article templates',
  },
  {
    id: 4,
    slug: 'case-study-04',
    title: 'AI Pest ID Tool & Self-Service Conversion Funnel',
    tags: ['Lead UX/UI', 'Diagnostic UI', 'Workflow Integration'],
    description:
      'A diagnostic workflow embedding computer-vision pest identification into a guided self-service funnel, raising recommendation accuracy to 94% while reducing specialist escalations by 38%.',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=450&fit=crop&auto=format',
    imageAlt: 'Agricultural technology interface showing AI-powered pest identification diagnostic tool with guided workflow steps',
  },
]

const contactColumns = [
  {
    num: '01',
    heading: 'Email',
    content: (
      <div className="flex flex-col gap-3">
        <a
          href="mailto:patriciacfch@gmail.com"
          className="text-brand-primary font-semibold text-sm hover:text-brand-hover transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-focus-ring rounded focus:outline-none break-all"
        >
          patriciacfch@gmail.com
        </a>
        <p className="text-text-secondary text-sm leading-relaxed">
          Available for freelance and contract engagements. Typical response within 24 hours.
        </p>
      </div>
    ),
  },
  {
    num: '02',
    heading: 'Social & Network',
    content: (
      <ul className="flex flex-col gap-2" aria-label="Social and professional network links">
        {[
          { label: 'LinkedIn', href: 'https://linkedin.com/in/patriciachavira', sub: 'Connect professionally' },
          { label: 'Figma Community', href: 'https://figma.com/@patriciachavira', sub: 'Design work & resources' },
          { label: 'Resume', href: '#', sub: 'PDF · Updated 2026' },
        ].map(({ label, href, sub }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-start gap-3 min-h-[44px] py-1 focus-visible:ring-2 focus-visible:ring-focus-ring rounded focus:outline-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50 flex-shrink-0 mt-[6px]" aria-hidden="true" />
              <div>
                <span className="text-text-primary text-sm font-semibold group-hover:text-brand-primary transition-colors duration-150 leading-tight block">
                  {label}
                </span>
                <span className="font-mono text-[10px] text-text-secondary">{sub}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: '03',
    heading: 'Philosophy',
    content: (
      <p className="text-text-secondary text-sm leading-[1.8]">
        Design is most powerful as a shared practice — built on trust between designer,
        client, and the people ultimately using what we make together. I don&apos;t hand
        off deliverables; I hand off understanding.
      </p>
    ),
  },
]

const footerLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: '↑ Top', href: '#hero' },
]

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function MainHome() {
  return (
    <PageShell>
      <StickyNav />
      <main>
        <HeroSection />
        <CapabilitiesSection />
        <AboutSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <GlobalFooter />
    </PageShell>
  )
}

/* ── Sticky Nav ──────────────────────────────────────────────────────────── */

function StickyNav() {
  return (
    <nav
      className="sticky top-0 z-50 bg-surface-base/90 backdrop-blur-md border-b border-border-strong/20"
      aria-label="Primary navigation"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <a
          href="#hero"
          className="text-text-primary font-bold text-base sm:text-lg leading-none tracking-tight hover:text-brand-primary transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-focus-ring rounded focus:outline-none"
          aria-label="Patricia Chavira — scroll to top"
        >
          Patricia Chavira
        </a>

        <ul className="flex items-center gap-1 sm:gap-2" role="list">
          {[
            { label: 'Work', href: '#work' },
            { label: 'About', href: '#about' },
            { label: 'Experience', href: '#work' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="inline-flex items-center justify-center h-11 min-w-[44px] px-3 sm:px-4 text-text-secondary hover:text-text-primary text-sm font-medium transition-colors duration-200 rounded focus-visible:ring-2 focus-visible:ring-focus-ring focus:outline-none"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

/* ── Hero ────────────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="scroll-mt-16 max-w-6xl mx-auto px-5 sm:px-8 pt-20 sm:pt-28 lg:pt-36 pb-20 sm:pb-28"
    >
      <div className="flex items-center gap-3 mb-10" aria-hidden="true">
        <span className="w-8 h-px bg-brand-primary block" />
        <span className="font-mono text-xs text-text-secondary tracking-[0.18em] uppercase">
          Product Designer · Available for Engagements
        </span>
      </div>

      <h1
        id="hero-heading"
        className="text-text-primary font-bold leading-[1.06] mb-8 max-w-4xl"
      >
        <span className="block text-[clamp(2.75rem,7vw,5.5rem)] tracking-tight">
          Patricia Chavira
        </span>
        <span className="block mt-3 text-[clamp(1.5rem,3.8vw,2.75rem)] text-text-secondary font-semibold tracking-tight leading-[1.15]">
          Product Designer
          <span className="text-border-strong/50 mx-3 font-light">&amp;</span>
          UX/UI Strategist
        </span>
      </h1>

      <p className="text-text-secondary text-lg sm:text-xl leading-[1.75] max-w-2xl mb-12">
        Designing scalable digital products, high-density enterprise tools, and intuitive
        human-centered workflows — bridging complex systems, AI innovation, and measurable
        business impact.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="inline-flex items-center justify-center h-11 px-7 bg-brand-primary hover:bg-brand-hover text-white font-bold text-sm tracking-widest rounded-lg transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus:outline-none"
        >
          EXPLORE WORK
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center h-11 px-7 border border-border-strong text-text-primary font-bold text-sm tracking-widest rounded-lg hover:bg-surface-card transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus:outline-none"
        >
          GET IN TOUCH
        </a>
      </div>

      <div
        className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-14 pt-8 border-t border-border-strong/20"
        aria-label="Credentials at a glance"
      >
        {['8+ Years Enterprise Design', 'Fortune 500 Clients', 'WCAG AAA Certified Work', 'Published Speaker'].map((item) => (
          <span key={item} className="font-mono text-[11px] text-text-secondary tracking-wide">
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

/* ── Capabilities ────────────────────────────────────────────────────────── */

function CapabilitiesSection() {
  return (
    <section
      aria-labelledby="cap-heading"
      className="max-w-6xl mx-auto px-5 sm:px-8 pb-24 sm:pb-32"
    >
      <div className="flex items-end justify-between gap-4 mb-10 flex-wrap">
        <div>
          <p className="font-mono text-xs text-text-secondary tracking-[0.18em] uppercase mb-2" aria-hidden="true">
            What I bring
          </p>
          <h2 id="cap-heading" className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight">
            Core Capabilities
          </h2>
        </div>
        <a
          href="#work"
          className="text-brand-primary font-bold text-sm tracking-wider hover:text-brand-hover transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-focus-ring rounded focus:outline-none"
        >
          VIEW FULL WORK →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5" role="list" aria-label="Core capability areas">
        {capabilities.map((col) => (
          <CapabilityCard key={col.id} {...col} />
        ))}
      </div>
    </section>
  )
}

function CapabilityCard({ eyebrow, accent, items }: { eyebrow: string; accent: boolean; items: React.ReactNode[] }) {
  return (
    <div
      role="listitem"
      className={[
        'rounded-2xl p-7 flex flex-col gap-6 border',
        accent ? 'bg-brand-primary border-brand-primary' : 'bg-surface-card border-border-strong/30',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-3">
        <p className={['font-mono text-[11px] tracking-[0.18em] uppercase leading-snug', accent ? 'text-white/70' : 'text-text-secondary'].join(' ')}>
          {eyebrow}
        </p>
        {accent && (
          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <span className="w-1.5 h-1.5 rounded-full bg-white block" />
          </span>
        )}
      </div>

      <hr className={['border-0 h-px', accent ? 'bg-white/20' : 'bg-border-strong/20'].join(' ')} aria-hidden="true" />

      <ul className="flex flex-col gap-3" aria-label={`${eyebrow} items`}>
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className={['mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0', accent ? 'bg-white/50' : 'bg-brand-primary/50'].join(' ')} aria-hidden="true" />
            <span className={['text-sm leading-snug', accent ? 'text-white font-medium' : 'text-text-primary'].join(' ')}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ── About ───────────────────────────────────────────────────────────────── */

function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-t border-border-strong/20"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <p className="font-mono text-xs text-text-secondary tracking-[0.18em] uppercase mb-10" aria-hidden="true">
          About
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-12 md:gap-16 items-start">
          {/* Portrait */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden bg-slate-100 aspect-[3/4] w-full max-w-sm mx-auto md:max-w-none">
              <img
                src="/src/imports/Profile_pic-3.png"
                alt="Patricia Chavira, Product Designer — professional portrait"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[280px]" aria-hidden="true">
              <div className="bg-surface-base border border-border-strong rounded-xl px-5 py-3.5 shadow-lg shadow-slate-200/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-primary flex-shrink-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xs leading-none select-none">PC</span>
                </div>
                <div className="min-w-0">
                  <p className="text-text-primary font-semibold text-sm leading-tight truncate">Patricia Chavira</p>
                  <p className="font-mono text-[10px] text-text-secondary leading-tight mt-0.5 truncate">Product Designer</p>
                </div>
                <span className="ml-auto flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" />
              </div>
            </div>
          </div>

          {/* Copy + principles */}
          <div className="flex flex-col gap-7 pt-2 md:pt-0">
            <h2 id="about-heading" className="text-text-primary text-3xl sm:text-4xl font-bold leading-tight">
              Hi, I&apos;m Patricia.
            </h2>

            <p className="text-text-secondary text-base leading-[1.8]">
              I&apos;m a Product Designer who turns complex enterprise clutter into clear, human
              digital experiences. My way into design didn&apos;t start with software; it started
              with listening, observing, and telling stories. Before building digital interfaces, I
              navigated very different worlds—coordinating PR for international events, Social Media
              and Marketing consulting, customer care, and coproducing, cohosting and operating
              console in a community radio show every Saturday morning. As different as those sound,
              they taught me the same core truth:{" "}
              <strong>no product or system works unless you truly listen to the people using it.</strong>
              {" "}Trained in high-intensity design environments, I bring that human focus straight
              into complex enterprise work. I help teams untangle messy workflows, balance tough
              technical constraints, and design scalable UI systems from initial discovery all the
              way to Figma tokens.&nbsp;&nbsp;
            </p>

            <p className="text-text-secondary text-base leading-[1.8]">
              AI tools are a regular part of my daily toolkit—they help me speed up execution so I
              can spend more time on what actually matters: strategy, interaction detail, and
              research. When working with AI-driven products, my main priority is making complex tech
              feel trustworthy—opening up the &quot;black box&quot; so people always feel in control.
            </p>

            <div className="mt-1">
              <p className="font-mono text-[11px] text-text-secondary tracking-[0.16em] uppercase mb-1">
                Design Principles
              </p>
              <ol aria-label="Design principles">
                {principles.map(({ num, label }, i) => (
                  <li
                    key={num}
                    className="flex items-center gap-5 py-4 border-t"
                    style={{
                      borderColor: 'rgba(71,85,105,0.25)',
                      ...(i === principles.length - 1 ? { borderBottom: '1px solid rgba(71,85,105,0.25)' } : {}),
                    }}
                  >
                    <span className="font-mono text-xs text-text-secondary tabular-nums w-7 flex-shrink-0 select-none" aria-hidden="true">
                      {num}
                    </span>
                    <span className="text-text-primary text-sm sm:text-base font-medium leading-snug">
                      {label}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Case Studies ────────────────────────────────────────────────────────── */

function CaseStudiesSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-20 border-t border-border-strong/20"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <header className="mb-14">
          <p className="font-mono text-xs text-text-secondary tracking-[0.18em] uppercase mb-3" aria-hidden="true">
            Selected Work · 2023–2025
          </p>
          <h2 id="work-heading" className="text-text-primary text-3xl sm:text-4xl font-bold leading-tight">
            Case Studies
          </h2>
          <p className="text-text-secondary text-base mt-3 max-w-xl leading-relaxed">
            End-to-end design and systems work spanning agentic interfaces, executive tooling,
            and scalable design systems.
          </p>
        </header>

        <ol className="flex flex-col gap-5" aria-label="Case study projects">
          {projects.map((project, index) => (
            <CaseStudyCard key={project.id} index={index + 1} {...project} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function CaseStudyCard({
  index, slug, title, tags, description, image, imageAlt,
}: {
  index: number; slug: string; title: string; tags: string[]
  description: string; image: string; imageAlt: string
}) {
  const [focused, setFocused] = useState(false)

  return (
    <li>
      <article
        className={[
          'bg-surface-card border border-border-strong rounded-2xl overflow-hidden',
          'flex flex-col sm:flex-row transition-shadow duration-300',
          focused ? 'shadow-lg ring-2 ring-focus-ring' : 'hover:shadow-md',
        ].join(' ')}
        aria-label={`Case study ${index}: ${title}`}
      >
        <div className="sm:w-[42%] flex-shrink-0 bg-slate-200 overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover aspect-video sm:aspect-auto sm:h-full transition-transform duration-500 hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4 p-7 sm:p-9">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <div className="flex flex-wrap gap-2" role="list" aria-label={`Categories for ${title}`}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  role="listitem"
                  className="font-mono text-xs text-text-secondary border border-border-strong px-2.5 py-1 rounded-md leading-none tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="font-mono text-xs text-text-secondary opacity-40 flex-shrink-0 tabular-nums" aria-hidden="true">
              {String(index).padStart(2, '0')}
            </span>
          </div>

          <h3 className="text-text-primary text-xl sm:text-2xl font-bold leading-snug">{title}</h3>

          <p className="text-text-secondary text-sm sm:text-base leading-relaxed flex-1">{description}</p>

          <hr className="border-border-strong opacity-20" />

          <div>
            <Link
              to={`/${slug}`}
              className="inline-flex items-center gap-1.5 h-11 px-1 text-brand-primary font-bold text-sm tracking-wider hover:text-brand-hover transition-colors duration-200 rounded focus:outline-none"
              aria-label={`Explore case study: ${title}`}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            >
              <span>EXPLORE CASE STUDY</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>
    </li>
  )
}

/* ── Contact ─────────────────────────────────────────────────────────────── */

function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-t border-border-strong/20 bg-surface-card"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-surface-base border border-border-strong/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            <span className="font-mono text-[11px] text-text-secondary tracking-wide">
              Available for Engagements
            </span>
          </div>

          <h2
            id="contact-heading"
            className="text-text-primary text-3xl sm:text-4xl font-bold leading-tight max-w-2xl mb-4"
          >
            Got a complex system to build?{' '}
            <span className="text-brand-primary">Let&apos;s talk.</span>
          </h2>

          <p className="text-text-secondary text-base leading-relaxed max-w-xl">
            Whether it&apos;s a greenfield platform, an enterprise redesign, or a design system
            that needs to scale — I work best on problems where clarity is the hardest part.
          </p>
        </div>

        {/* 3-column contact grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-strong/20 rounded-2xl overflow-hidden border border-border-strong/20"
          role="list"
          aria-label="Contact options"
        >
          {contactColumns.map(({ num, heading, content }) => (
            <div
              key={num}
              role="listitem"
              className="bg-surface-base p-8 flex flex-col gap-5"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-text-secondary opacity-50" aria-hidden="true">{num}</span>
                <h3 className="text-text-primary text-base font-bold">{heading}</h3>
              </div>
              <hr className="border-border-strong/20" aria-hidden="true" />
              {content}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Footer ──────────────────────────────────────────────────────────────── */

function GlobalFooter() {
  return (
    <footer className="bg-text-primary border-t border-white/10" aria-label="Site footer">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Identity */}
        <div className="flex flex-col gap-1">
          <p className="text-white font-bold text-sm leading-tight">Patricia Chavira</p>
          <p className="font-mono text-[11px] text-white/40 tracking-wide">
            © 2026 · Guadalajara, MX ·&nbsp;&nbsp;Product Designer
          </p>
        </div>

        {/* Quick nav */}
        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-1 flex-wrap" role="list">
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="inline-flex items-center justify-center h-11 min-w-[44px] px-4 text-white/60 hover:text-white text-sm font-medium transition-colors duration-200 rounded focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-text-primary focus:outline-none"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
