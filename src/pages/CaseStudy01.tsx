import CaseStudyLayout from '../components/CaseStudyLayout'

const badges = ['Lead UX/UI', 'Systems Architecture', 'HITL']

const metrics = [
  { value: '30%', label: 'Increase in Onboarding Velocity' },
  { value: '85%', label: 'Automation Rate Achieved' },
  { value: '12→4', label: 'Days to Full Productivity' },
]

const hitlTriggers = [
  {
    code: 'T-01',
    label: 'Compliance Flag',
    description: 'Any provisioning action touching regulated data (FINRA, SOX) requires HR sign-off before the agent proceeds.',
    severity: 'high',
  },
  {
    code: 'T-02',
    label: 'Confidence Threshold',
    description: 'LLM confidence score below 0.78 on role-mapping decisions routes to queue; above 0.92 auto-completes.',
    severity: 'medium',
  },
  {
    code: 'T-03',
    label: 'Policy Conflict',
    description: 'Contradictory signals between ATS, HRIS, and IT provisioning systems halt automation and surface a reconciliation task.',
    severity: 'high',
  },
  {
    code: 'T-04',
    label: 'New Hire Anomaly',
    description: 'Role type, department, or geo deviating from historical onboarding patterns triggers a manual playbook override.',
    severity: 'low',
  },
]

const mockups = [
  {
    label: 'Pipeline Overview',
    description: 'Real-time status of all active onboarding pipelines with agent action log and HITL queue count.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=520&fit=crop&auto=format',
    imageAlt: 'Dashboard showing pipeline overview with real-time onboarding status cards and agent activity log',
    badge: 'Dashboard · Desktop',
  },
  {
    label: 'HITL Review Queue',
    description: 'Structured review interface showing flagged actions, context snippets, and one-click approve / escalate controls.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=520&fit=crop&auto=format',
    imageAlt: 'HR administrator review queue showing flagged automation actions with approve and escalate controls',
    badge: 'Queue View · Desktop',
  },
  {
    label: 'New Hire Status Portal',
    description: 'Employee-facing progress tracker showing completed, pending, and upcoming onboarding milestones.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=520&fit=crop&auto=format',
    imageAlt: 'New hire onboarding portal showing progress timeline with completed and upcoming milestone steps',
    badge: 'Employee View · Mobile',
  },
]

const PREV = { title: 'AI Pest ID Tool & Self-Service Conversion Funnel', slug: 'case-study-04' }
const NEXT = { title: 'Board Member Decision Cockpit', slug: 'case-study-02' }

export default function CaseStudy01() {
  return (
    <CaseStudyLayout prev={PREV} next={NEXT}>
      <article className="max-w-5xl mx-auto px-5 sm:px-8 pb-24" aria-labelledby="cs-title">
        {/* ── Hero Header ───────────────────────────────────────── */}
        <header className="pt-12 sm:pt-16 pb-10 sm:pb-14">
          {/* Eyebrow */}
          <p className="font-mono text-xs text-text-secondary tracking-[0.18em] uppercase mb-5">
            Case Study 01 · Agentic HR Platform
          </p>

          {/* Title */}
          <h1
            id="cs-title"
            className="text-text-primary text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-7 max-w-3xl"
          >
            Agentic CHRO Onboarding Dashboard
          </h1>

          {/* Category badges */}
          <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Project categories">
            {badges.map((b) => (
              <span
                key={b}
                role="listitem"
                className="font-mono text-xs text-text-secondary border border-border-strong px-3 py-1.5 rounded-md leading-none tracking-wide"
              >
                {b}
              </span>
            ))}
          </div>

          {/* Impact metrics bar */}
          <div
            className="bg-surface-card border border-border-strong rounded-2xl overflow-hidden"
            aria-label="Project impact metrics"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border-strong/30">
              {metrics.map(({ value, label }) => (
                <div key={label} className="px-8 py-7 flex flex-col gap-1">
                  <span className="text-brand-primary text-4xl font-bold leading-none tabular-nums">
                    {value}
                  </span>
                  <span className="text-text-secondary text-sm leading-snug mt-1">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ── Hero image ────────────────────────────────────────── */}
        <div className="rounded-2xl overflow-hidden bg-slate-100 mb-20 sm:mb-28 aspect-video">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=675&fit=crop&auto=format"
            alt="Agentic CHRO Onboarding Dashboard showing the main pipeline view with real-time agent status, HITL queue indicators, and employee progress tracking"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* ══ Section 1: The Challenge ═════════════════════════════ */}
        <section aria-labelledby="s1-heading" className="mb-20 sm:mb-28">
          <SectionLabel index="01" />
          <h2 id="s1-heading" className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight mb-8">
            The Challenge & Enterprise Problem Statement
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-14 items-start">
            <div className="flex flex-col gap-5">
              <p className="text-text-secondary text-base leading-[1.85]">
                A Fortune 500 financial services client had accumulated 14 discrete onboarding
                touchpoints across three systems of record — none of them communicating state to each
                other. New hires were receiving contradictory provisioning statuses, IT ticket queues
                were chronically backlogged, and HR generalists were spending 60% of their onboarding
                time on status-chasing rather than relationship-building.
              </p>
              <p className="text-text-secondary text-base leading-[1.85]">
                The core design challenge wasn&apos;t the automation itself — it was designing a
                system that HR administrators could <em>trust</em>. A black-box pipeline that silently
                provisioned access and sent templated emails would collapse the moment a compliance
                exception surfaced. The platform needed to be legible, overridable, and audit-ready
                at every step.
              </p>
              <p className="text-text-secondary text-base leading-[1.85]">
                My remit spanned the full stack: agentic pipeline UX, the HITL review interface for
                HR administrators, and the new-hire-facing progress portal — three distinct surfaces
                sharing one underlying data model.
              </p>
            </div>

            {/* Challenge callout cards */}
            <div className="flex flex-col gap-3" role="list" aria-label="Key challenges">
              {[
                { num: '14', detail: 'Disconnected touchpoints across ATS, HRIS, and IT provisioning' },
                { num: '6', detail: 'Compliance categories requiring mandatory human sign-off' },
                { num: '4', detail: 'Stakeholder groups with competing onboarding priorities' },
                { num: '60%', detail: 'Of HR time lost to manual status-chasing and ticket triage' },
              ].map(({ num, detail }) => (
                <div
                  key={num}
                  role="listitem"
                  className="bg-surface-card border border-border-strong/40 rounded-xl px-5 py-4 flex items-start gap-4"
                >
                  <span className="text-brand-primary text-2xl font-bold leading-none tabular-nums flex-shrink-0 pt-0.5">
                    {num}
                  </span>
                  <p className="text-text-secondary text-sm leading-snug">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ Section 2: HITL Architecture ════════════════════════ */}
        <section aria-labelledby="s2-heading" className="mb-20 sm:mb-28">
          <SectionLabel index="02" />
          <h2 id="s2-heading" className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight mb-4">
            Human-In-The-Loop Architecture & Escalation Flows
          </h2>
          <p className="text-text-secondary text-base leading-[1.85] max-w-2xl mb-12">
            The HITL model introduced a three-tier trust system: fully automated paths for
            high-confidence, low-risk actions; a review queue for ambiguous or compliance-adjacent
            decisions; and a hard stop for any action touching regulated data.
          </p>

          {/* Flow diagram */}
          <div
            className="bg-surface-card border border-border-strong/40 rounded-2xl p-6 sm:p-10 mb-12 overflow-x-auto"
            aria-label="Agentic pipeline flow diagram"
            role="img"
          >
            <p className="font-mono text-[10px] text-text-secondary tracking-[0.16em] uppercase mb-8">
              Pipeline Execution Flow
            </p>

            {/* Top row: linear pipeline */}
            <div className="flex items-stretch gap-0 min-w-[560px] mb-6">
              {[
                { label: 'ATS Signal', sub: 'New hire event', color: 'bg-slate-100 border-slate-300' },
                { label: 'Agent Orchestrator', sub: 'LLM playbook execution', color: 'bg-brand-primary/8 border-brand-primary/30' },
                { label: 'Trust Evaluator', sub: 'Confidence + compliance check', color: 'bg-amber-50 border-amber-300' },
              ].map((node, i) => (
                <div key={node.label} className="flex items-center flex-1">
                  <div
                    className={`flex-1 border rounded-xl px-4 py-4 ${node.color}`}
                  >
                    <p className="text-text-primary text-sm font-semibold leading-tight">{node.label}</p>
                    <p className="font-mono text-[10px] text-text-secondary mt-1">{node.sub}</p>
                  </div>
                  {i < 2 && (
                    <div className="flex-shrink-0 px-2 text-text-secondary text-lg font-light" aria-hidden="true">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Branch indicator */}
            <div className="flex ml-[calc(66.66%-1px)] gap-0 min-w-[380px] mb-1" aria-hidden="true">
              <div className="w-px h-5 bg-border-strong/30 mx-auto" />
            </div>
            <div className="flex justify-end gap-0 min-w-[560px]" aria-hidden="true">
              <div className="w-[33.33%] border-t border-border-strong/30 relative">
                <div className="absolute -left-px top-0 w-px h-3 bg-border-strong/30" />
                <div className="absolute -right-px top-0 w-px h-3 bg-border-strong/30" />
              </div>
            </div>

            {/* Bottom row: two outcomes */}
            <div className="flex justify-end gap-3 min-w-[560px] mt-1">
              <div className="w-[32%] border border-emerald-300 bg-emerald-50 rounded-xl px-4 py-4">
                <p className="text-emerald-800 text-sm font-semibold leading-tight">Auto-Complete</p>
                <p className="font-mono text-[10px] text-emerald-700 mt-1">Confidence ≥ 0.92 · no flag</p>
              </div>
              <div className="w-[32%] border border-amber-300 bg-amber-50 rounded-xl px-4 py-4">
                <p className="text-amber-900 text-sm font-semibold leading-tight">HITL Review Queue</p>
                <p className="font-mono text-[10px] text-amber-800 mt-1">Confidence &lt; 0.78 · any flag</p>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-border-strong/20">
              {[
                { color: 'bg-slate-300', label: 'External signal' },
                { color: 'bg-brand-primary/40', label: 'Agent action' },
                { color: 'bg-amber-300', label: 'Evaluation gate' },
                { color: 'bg-emerald-400', label: 'Automated exit' },
                { color: 'bg-amber-400', label: 'Human review exit' },
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
                  <span className="font-mono text-[10px] text-text-secondary">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Escalation trigger table */}
          <div>
            <p className="font-mono text-[11px] text-text-secondary tracking-[0.16em] uppercase mb-4">
              Escalation Trigger Types
            </p>
            <div
              className="flex flex-col divide-y divide-border-strong/20"
              role="list"
              aria-label="HITL escalation trigger definitions"
            >
              {hitlTriggers.map((trigger) => (
                <div
                  key={trigger.code}
                  role="listitem"
                  className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 py-5"
                >
                  <div className="flex items-center gap-3 sm:w-56 flex-shrink-0">
                    <span className="font-mono text-xs text-text-secondary tabular-nums w-10">
                      {trigger.code}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={[
                          'w-2 h-2 rounded-full flex-shrink-0',
                          trigger.severity === 'high'
                            ? 'bg-red-400'
                            : trigger.severity === 'medium'
                              ? 'bg-amber-400'
                              : 'bg-slate-300',
                        ].join(' ')}
                        aria-label={`Severity: ${trigger.severity}`}
                      />
                      <span className="text-text-primary text-sm font-semibold">{trigger.label}</span>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{trigger.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ Section 3: UI Component Breakdown ═══════════════════ */}
        <section aria-labelledby="s3-heading" className="mb-20">
          <SectionLabel index="03" />
          <h2 id="s3-heading" className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight mb-4">
            UI Component Breakdown & Screen Mockups
          </h2>
          <p className="text-text-secondary text-base leading-[1.85] max-w-2xl mb-12">
            Three distinct surfaces were designed for three distinct roles — each optimized for
            cognitive load and decision speed. Components were built to a shared token set and
            contributed back to the enterprise design system.
          </p>

          <div className="flex flex-col gap-10">
            {mockups.map(({ label, description, image, imageAlt, badge }) => (
              <div key={label} className="flex flex-col gap-4">
                {/* Screen label row */}
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-text-primary text-lg font-bold">{label}</h3>
                  <span className="font-mono text-[10px] text-text-secondary border border-border-strong/40 px-2.5 py-1 rounded-md leading-none tracking-wide flex-shrink-0">
                    {badge}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xl">{description}</p>
                {/* Mockup frame */}
                <div className="rounded-xl overflow-hidden border border-border-strong/40 bg-slate-50 shadow-sm">
                  {/* Browser chrome strip */}
                  <div className="bg-slate-100 border-b border-border-strong/20 px-4 py-2.5 flex items-center gap-2" aria-hidden="true">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="ml-4 flex-1 bg-white/70 rounded px-3 py-1 max-w-xs">
                      <span className="font-mono text-[9px] text-slate-400 leading-none">
                        chro-platform.internal / onboarding
                      </span>
                    </div>
                  </div>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={image}
                      alt={imageAlt}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </article>
    </CaseStudyLayout>
  )
}

function SectionLabel({ index }: { index: string }) {
  return (
    <div className="flex items-center gap-3 mb-4" aria-hidden="true">
      <span className="font-mono text-xs text-text-secondary opacity-50">{index}</span>
      <div className="h-px flex-1 bg-border-strong opacity-20" />
    </div>
  )
}
