import { useState } from 'react'
import { Link } from 'react-router'
import PageShell from '../components/PageShell'

const principles = [
  { num: '01', label: 'End-to-End Product & Systems Design' },
  { num: '02', label: 'Accessibility-Focused Design Systems' },
  { num: '03', label: 'Transparency in AI & Complex Data' },
  { num: '04', label: 'Ego-Free Collaboration & Human Connection' },
]

const projects = [
  {
    id: 1,
    slug: 'case-study-01',
    title: 'Agentic CHRO Onboarding Dashboard',
    tags: ['Lead UX/UI', 'Systems Architecture', 'HITL'],
    description:
      'A multi-agent orchestration platform redesigning employee onboarding flows with human-in-the-loop checkpoints, real-time pipeline visibility, and configurable escalation paths for HR administrators.',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop&auto=format',
    imageAlt:
      'HR onboarding dashboard showing employee workflow pipeline with progress tracking and status indicators',
  },
  {
    id: 2,
    slug: 'case-study-02',
    title: 'Board Member Decision Cockpit',
    tags: ['Executive UX', 'Multi-Agent Synthesis', 'Data Visualization'],
    description:
      'An executive intelligence interface synthesizing multi-agent data streams into structured briefings, enabling board-level decision velocity with configurable alert thresholds and drill-down analytics.',
    image:
      'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&h=450&fit=crop&auto=format',
    imageAlt:
      'Executive boardroom environment with strategic data visualization screens displaying key performance metrics',
  },
  {
    id: 3,
    slug: 'case-study-03',
    title: 'News-Media Page Redesign & Scalable UI Kit',
    tags: ['UI Kit / Design System', 'Information Architecture'],
    description:
      'A ground-up information architecture overhaul paired with a component library supporting five editorial templates, reducing design-to-production cycle time by 60% across four editorial verticals.',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=450&fit=crop&auto=format',
    imageAlt:
      'News media editorial layout system showing typographic hierarchy and component structure across article templates',
  },
  {
    id: 4,
    slug: 'case-study-04',
    title: 'AI Pest ID Tool & Self-Service Conversion Funnel',
    tags: ['Lead UX/UI', 'Diagnostic UI', 'Workflow Integration'],
    description:
      'A diagnostic workflow embedding computer-vision pest identification into a guided self-service funnel, raising recommendation accuracy to 94% while reducing specialist escalations by 38%.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=450&fit=crop&auto=format',
    imageAlt:
      'Agricultural technology interface showing AI-powered pest identification diagnostic tool with guided workflow steps',
  },
]

export default function Home() {
  return (
    <PageShell>
      <main className="px-5 sm:px-8 py-14 sm:py-20 max-w-5xl mx-auto">
        <AboutSection />
        <hr className="border-border-strong opacity-20 mb-16 sm:mb-24" />
        <section aria-labelledby="work-heading">
          <header className="mb-12">
            <p
              className="font-mono text-xs text-text-secondary tracking-[0.18em] uppercase mb-3"
              aria-hidden="true"
            >
              Selected Work · 2023–2025
            </p>
            <h2
              id="work-heading"
              className="text-text-primary text-3xl sm:text-4xl font-bold leading-tight"
            >
              Case Studies
            </h2>
            <p className="text-text-secondary text-base mt-3 max-w-xl leading-relaxed">
              End-to-end design and systems work spanning agentic interfaces, executive tooling, and
              scalable design systems.
            </p>
          </header>
          <ol className="flex flex-col gap-5" aria-label="Case study projects">
            {projects.map((project, index) => (
              <CaseStudyCard key={project.id} index={index + 1} {...project} />
            ))}
          </ol>
        </section>
      </main>
    </PageShell>
  )
}

function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="mb-16 sm:mb-24">
      <p
        className="font-mono text-xs text-text-secondary tracking-[0.18em] uppercase mb-10"
        aria-hidden="true"
      >
        About
      </p>
      <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-12 md:gap-16 items-start">
        <div className="relative">
          <div className="rounded-xl overflow-hidden bg-slate-100 aspect-[3/4] w-full max-w-sm mx-auto md:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&auto=format"
              alt="Patricia Chavira, Lead Product Designer — professional portrait"
              className="w-full h-full object-cover object-top"
              loading="eager"
              decoding="async"
            />
          </div>
          <div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[280px]"
            aria-hidden="true"
          >
            <div className="bg-surface-base border border-border-strong rounded-xl px-5 py-3.5 shadow-lg shadow-slate-200/80 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-primary flex-shrink-0 flex items-center justify-center">
                <span className="text-white font-bold text-xs leading-none select-none">PC</span>
              </div>
              <div className="min-w-0">
                <p className="text-text-primary font-semibold text-sm leading-tight truncate">
                  Patricia Chavira
                </p>
                <p className="font-mono text-[10px] text-text-secondary leading-tight mt-0.5 truncate">
                  Lead Product Designer
                </p>
              </div>
              <span className="ml-auto flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 pt-2 md:pt-0">
          <h1
            id="about-heading"
            className="text-text-primary text-3xl sm:text-4xl font-bold leading-tight"
          >
            Hi, I&apos;m Patricia.
          </h1>
          <p className="text-text-secondary text-base leading-[1.8]">
            I&apos;m a Product Designer who turns complex enterprise clutter into clear, human
            digital experiences. My way into design didn&apos;t start with software; it started with
            listening, observing, and telling stories — translating messy realities into interfaces
            that actually make sense to the people using them.
          </p>
          <p className="text-text-secondary text-base leading-[1.8]">
            I bring that same discipline to every engagement: deeply understanding the system,
            advocating for the end user, and designing with enough rigor that teams can build
            confidently from what I hand off.
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
                    borderBottomColor: i === principles.length - 1 ? 'rgba(71,85,105,0.25)' : 'transparent',
                    borderBottomWidth: i === principles.length - 1 ? '1px' : '0',
                  }}
                >
                  <span
                    className="font-mono text-xs text-text-secondary tabular-nums w-7 flex-shrink-0 select-none"
                    aria-hidden="true"
                  >
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
    </section>
  )
}

interface CaseStudyCardProps {
  index: number
  slug: string | null
  title: string
  tags: string[]
  description: string
  image: string
  imageAlt: string
}

function CaseStudyCard({ index, slug, title, tags, description, image, imageAlt }: CaseStudyCardProps) {
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
            <span
              className="font-mono text-xs text-text-secondary opacity-40 flex-shrink-0 tabular-nums"
              aria-hidden="true"
            >
              {String(index).padStart(2, '0')}
            </span>
          </div>
          <h3 className="text-text-primary text-xl sm:text-2xl font-bold leading-snug">{title}</h3>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed flex-1">
            {description}
          </p>
          <hr className="border-border-strong opacity-30" />
          <div>
            {slug ? (
              <Link
                to={`/${slug}`}
                className={[
                  'inline-flex items-center gap-1 h-11 px-1',
                  'text-brand-primary font-bold text-sm tracking-wider',
                  'hover:text-brand-hover transition-colors duration-200 rounded',
                ].join(' ')}
                aria-label={`Explore case study: ${title}`}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              >
                <span>EXPLORE CASE STUDY</span>
                <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <span
                className="inline-flex items-center gap-1 h-11 px-1 text-text-secondary font-bold text-sm tracking-wider opacity-40 cursor-not-allowed select-none"
                aria-label={`Case study coming soon: ${title}`}
              >
                <span>COMING SOON</span>
              </span>
            )}
          </div>
        </div>
      </article>
    </li>
  )
}
