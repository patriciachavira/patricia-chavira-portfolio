import { useState } from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'

const badges = ['Lead UX/UI', 'Diagnostic UI', 'Workflow Integration']

const metrics = [
  { value: '94%', label: 'AI Recommendation Accuracy' },
  { value: '38%', label: 'Reduction in Specialist Escalations' },
  { value: '4.2×', label: 'Increase in Self-Service Conversion Rate' },
]

/* ── Section 1: Dual-ingestion data ──────────────────────────────────────── */

const problemStats = [
  { num: '62%', detail: 'Of specialist calls were routine pest IDs that self-service could resolve — at a cost of $18 per call handled' },
  { num: '41%', detail: 'Pre-redesign self-service completion rate; most users abandoned after failing to identify from a static chart' },
  { num: '8.3s', detail: 'Average time users spent on the old identification page before bouncing to the phone support line' },
  { num: '1.4M', detail: 'Annual pest ID queries across the client\'s four regional markets — demand the human specialist team could not scale to absorb' },
]

const ingestionPaths = [
  {
    id: 'photo',
    label: 'Photo Ingestion',
    sub: 'Camera capture · Gallery upload',
    steps: ['Image capture or upload', 'Pre-processing & crop detection', 'CV model inference (TensorFlow Lite)', 'Species classification + confidence score'],
    color: 'bg-emerald-50 border-emerald-200',
    dotColor: 'bg-emerald-500',
    textColor: 'text-emerald-800',
  },
  {
    id: 'symptom',
    label: 'Symptom Questionnaire',
    sub: 'Guided text-based flow',
    steps: ['Smart branching question tree (avg. 4.2 Qs)', 'Symptom clustering via NLP classifier', 'Damage pattern cross-reference', 'Likelihood weighting per pest species'],
    color: 'bg-amber-50 border-amber-200',
    dotColor: 'bg-amber-500',
    textColor: 'text-amber-800',
  },
]

const confidencePaths = [
  { label: 'High Confidence', sub: 'Score ≥ 0.82', outcome: 'Pest ID → Product Recommendations → CTA', color: 'border-emerald-300 bg-emerald-50 text-emerald-800', dot: 'bg-emerald-500' },
  { label: 'Low Confidence', sub: 'Score < 0.82', outcome: 'Specialist Escalation → Booking Flow', color: 'border-amber-300 bg-amber-50 text-amber-800', dot: 'bg-amber-400' },
]

/* ── Section 2: Journey Matrix data ──────────────────────────────────────── */

const journeyPhases = [
  {
    num: '01',
    phase: 'Discovery',
    userGoal: 'Identify that a pest problem exists and find a place to get help',
    uiSurface: 'Dual-entry landing hero with explicit choice: photograph or describe',
    keyInteraction: 'Entry-point selection — photo vs. symptom path — with zero ambiguity about what each does',
    signal: '71% first-step completion',
    delta: 'from 41% baseline',
    positive: true,
  },
  {
    num: '02',
    phase: 'Diagnosis',
    userGoal: 'Submit evidence and receive a confident pest identification',
    uiSurface: 'Progressive upload screen + smart-branching questionnaire (4.2 avg. questions)',
    keyInteraction: 'Real-time processing state with "what we\'re analysing" transparency copy — prevents abandonment during model inference',
    signal: '91% diagnosis completion',
    delta: '47 sec avg. to result',
    positive: true,
  },
  {
    num: '03',
    phase: 'Recommendation',
    userGoal: 'Understand the pest, trust the ID result, and evaluate treatment options',
    uiSurface: 'Result card: pest ID, confidence ring indicator, evidence thumbnails, ranked product ladder',
    keyInteraction: 'Confidence score shown as a filled ring — not a percentage — reducing anxiety for non-expert users while preserving precision for experts',
    signal: '88% recommendation engagement',
    delta: 'at least 1 product tap',
    positive: true,
  },
  {
    num: '04',
    phase: 'Conversion',
    userGoal: 'Purchase the recommended treatment or escalate to a specialist',
    uiSurface: 'Sticky CTA bar: primary add-to-cart + secondary "Talk to a Specialist" for low-confidence exits',
    keyInteraction: 'Specialist CTA is persistent but visually subordinate — it converts 38% fewer escalations than the old design while still surfacing as an accessible exit',
    signal: '44% funnel conversion',
    delta: 'from 19% baseline',
    positive: true,
  },
]

/* ── Section 3: Funnel & impact data ─────────────────────────────────────── */

const funnelStages = [
  { label: 'Pest Tool Entry', sublabel: 'All tool visitors', pct: 100, users: '182,400 / mo' },
  { label: 'ID Submitted', sublabel: 'Photo or symptom form completed', pct: 78, users: '142,270 / mo' },
  { label: 'Result Viewed', sublabel: 'Pest ID result card opened', pct: 67, users: '122,210 / mo' },
  { label: 'Recommendation Engaged', sublabel: 'At least one product tapped', pct: 54, users: '98,500 / mo' },
  { label: 'Cart / Booking', sublabel: 'Add-to-cart or specialist booked', pct: 44, users: '80,260 / mo' },
]

const impactCards = [
  { value: '38%', label: 'Reduction in Specialist Escalations', sub: 'Saved $2.1M annually in support cost', color: 'bg-emerald-50 border-emerald-200', valueColor: 'text-emerald-700' },
  { value: '94%', label: 'AI Recommendation Accuracy', sub: 'Validated against agronomist audit of 4,800 cases', color: 'bg-brand-primary/8 border-brand-primary/25', valueColor: 'text-brand-primary' },
  { value: '44%', label: 'Self-Service Conversion Rate', sub: 'Up from 19% before redesign — 4.2× lift', color: 'bg-surface-card border-border-strong/30', valueColor: 'text-text-primary' },
  { value: '47s', label: 'Average Time to Pest ID', sub: 'Photo path: 31s · Symptom path: 68s', color: 'bg-surface-card border-border-strong/30', valueColor: 'text-text-primary' },
]

const mockups = [
  {
    label: 'Dual-Entry Landing Hero',
    description: 'Clear binary choice between photo and symptom paths with outcome previews — eliminating the ambiguity that caused 59% of the original tool\'s abandonment.',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=520&fit=crop&auto=format',
    imageAlt: 'AI pest identification tool landing screen showing dual-entry hero with photo upload and symptom questionnaire paths',
    badge: 'Entry Screen · Mobile',
  },
  {
    label: 'Pest ID Result Card',
    description: 'Confidence ring indicator, matched reference image, severity label, and a ranked product ladder — structured so the highest-confidence recommendation is never more than one tap from conversion.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=520&fit=crop&auto=format',
    imageAlt: 'Pest identification result card showing AI confidence indicator, pest species match with reference image, and ranked treatment recommendations',
    badge: 'Result Card · Mobile',
  },
  {
    label: 'Product Recommendation Funnel',
    description: 'Sticky bottom CTA bar with primary add-to-cart action and subordinate specialist escalation — persistent across scroll, 44px touch target minimum on all interactive elements.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=520&fit=crop&auto=format',
    imageAlt: 'Product recommendation screen showing ranked treatment options with sticky conversion CTA bar and specialist escalation option',
    badge: 'Conversion · Desktop',
  },
]

/* ─────────────────────────────────────────────────────────────────────────── */

const PREV = { title: 'News-Media Page Redesign & Scalable UI Kit', slug: 'case-study-03' }
const NEXT = { title: 'Agentic CHRO Onboarding Dashboard', slug: 'case-study-01' }

export default function CaseStudy04() {
  return (
    <CaseStudyLayout prev={PREV} next={NEXT}>
      <article className="max-w-5xl mx-auto px-5 sm:px-8 pb-24" aria-labelledby="cs-title">

        {/* ── Hero Header ─────────────────────────────────────── */}
        <header className="pt-12 sm:pt-16 pb-10 sm:pb-14">
          <p className="font-mono text-xs text-text-secondary tracking-[0.18em] uppercase mb-5">
            Case Study 04 · Agricultural AI Platform
          </p>

          <h1
            id="cs-title"
            className="text-text-primary text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-7 max-w-3xl"
          >
            AI Pest ID Tool & Self-Service Conversion Funnel
          </h1>

          <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Project categories">
            {badges.map((b) => (
              <span key={b} role="listitem" className="font-mono text-xs text-text-secondary border border-border-strong px-3 py-1.5 rounded-md leading-none tracking-wide">
                {b}
              </span>
            ))}
          </div>

          <div className="bg-surface-card border border-border-strong rounded-2xl overflow-hidden" aria-label="Project impact metrics">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border-strong/30">
              {metrics.map(({ value, label }) => (
                <div key={label} className="px-8 py-7 flex flex-col gap-1">
                  <span className="text-brand-primary text-4xl font-bold leading-none tabular-nums">{value}</span>
                  <span className="text-text-secondary text-sm leading-snug mt-1">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden bg-slate-100 mb-20 sm:mb-28 aspect-video">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&h=675&fit=crop&auto=format"
            alt="AI pest identification tool showing the dual-ingestion interface with photo upload path and symptom questionnaire, agricultural field context"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* ══ Section 1: Diagnostic CV Workflow & Dual-Ingestion ══ */}
        <section aria-labelledby="s1-heading" className="mb-20 sm:mb-28">
          <SectionLabel index="01" />
          <h2 id="s1-heading" className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight mb-8">
            Diagnostic Computer-Vision Workflow & Dual-Ingestion Model
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-14 items-start mb-14">
            <div className="flex flex-col gap-5">
              <p className="text-text-secondary text-base leading-[1.85]">
                A regional agricultural retailer with four state markets was routing 62% of
                inbound support calls to human pest-identification specialists — work that a
                well-designed self-service tool should absorb entirely. The existing tool was a
                static image-matching library: users scrolled through 400+ pest photographs until
                they found something resembling their problem, then clicked through to a product
                page with no contextual recommendation logic.
              </p>
              <p className="text-text-secondary text-base leading-[1.85]">
                The design brief was specific: reduce specialist escalation rate by at least 25%
                within two quarters of launch, without degrading recommendation quality. The
                answer was a dual-ingestion AI model that accepts either a photograph or a guided
                symptom questionnaire — meeting users where they are, whether they&apos;re in a
                field with a phone or at a desk describing damage from memory.
              </p>
              <p className="text-text-secondary text-base leading-[1.85]">
                Both ingestion paths converge into a shared confidence combiner. When a user
                supplies both a photo and symptom answers, the model fuses both signal streams and
                typically achieves higher confidence than either path alone — a designed incentive
                that the UI surfaced as a &ldquo;verify with photo&rdquo; prompt on the symptom path.
              </p>
            </div>

            <div className="flex flex-col gap-3" role="list" aria-label="Problem scope statistics">
              {problemStats.map(({ num, detail }) => (
                <div key={num} role="listitem" className="bg-surface-card border border-border-strong/40 rounded-xl px-5 py-4 flex items-start gap-4">
                  <span className="text-brand-primary text-2xl font-bold leading-none tabular-nums flex-shrink-0 pt-0.5">{num}</span>
                  <p className="text-text-secondary text-sm leading-snug">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dual-ingestion architecture diagram */}
          <div
            className="bg-surface-card border border-border-strong/40 rounded-2xl p-6 sm:p-10"
            aria-label="Dual-ingestion diagnostic architecture diagram"
            role="img"
          >
            <p className="font-mono text-[10px] text-text-secondary tracking-[0.16em] uppercase mb-8">
              Dual-Ingestion Architecture · Convergent AI Pipeline
            </p>

            {/* Two input paths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {ingestionPaths.map((path) => (
                <div key={path.id} className={`border rounded-xl p-5 flex flex-col gap-3 ${path.color}`}>
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${path.dotColor}`} aria-hidden="true" />
                    <p className={`font-bold text-sm ${path.textColor}`}>{path.label}</p>
                  </div>
                  <p className="font-mono text-[10px] text-text-secondary">{path.sub}</p>
                  <ol className="flex flex-col gap-1.5 mt-1" aria-label={`${path.label} steps`}>
                    {path.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-mono text-[10px] text-text-secondary tabular-nums flex-shrink-0 mt-[2px]">{String(i + 1).padStart(2, '0')}</span>
                        <span className="text-text-secondary text-xs leading-snug">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

            {/* Convergence arrow */}
            <div className="flex justify-center mb-4" aria-hidden="true">
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-24 sm:gap-32">
                  <div className="w-px h-5 bg-border-strong/30" />
                  <div className="w-px h-5 bg-border-strong/30" />
                </div>
                <div className="flex gap-24 sm:gap-32 relative">
                  <div className="w-px h-0" />
                  <div className="w-px h-0" />
                  <div className="absolute left-1/2 -translate-x-1/2 -top-5 w-28 sm:w-36 border-t border-border-strong/30" />
                </div>
                <div className="w-px h-4 bg-border-strong/30" />
                <span className="text-text-secondary text-base font-light">↓</span>
              </div>
            </div>

            {/* Synthesis node */}
            <div className="flex justify-center mb-6">
              <div className="bg-brand-primary text-white rounded-xl px-8 py-4 text-center">
                <p className="font-bold text-sm">Confidence Combiner</p>
                <p className="font-mono text-[10px] text-white/70 mt-1">Fuses photo + symptom signals · outputs species ID + score</p>
              </div>
            </div>

            {/* Output branches */}
            <div className="flex justify-center mb-4" aria-hidden="true">
              <div className="flex flex-col items-center gap-1">
                <div className="w-px h-4 bg-border-strong/30" />
                <span className="text-text-secondary text-base font-light">↓</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {confidencePaths.map(({ label, sub, outcome, color, dot }) => (
                <div key={label} className={`border rounded-xl px-5 py-4 flex flex-col gap-2 ${color}`}>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dot}`} aria-hidden="true" />
                    <p className="font-semibold text-sm">{label}</p>
                    <span className="font-mono text-[10px] opacity-70">{sub}</span>
                  </div>
                  <p className="text-xs leading-snug opacity-80">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ Section 2: 4-Phase User Journey Matrix ══════════════ */}
        <section aria-labelledby="s2-heading" className="mb-20 sm:mb-28">
          <SectionLabel index="02" />
          <h2 id="s2-heading" className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight mb-4">
            4-Phase User Journey Matrix
          </h2>
          <p className="text-text-secondary text-base leading-[1.85] max-w-2xl mb-12">
            The journey was mapped across four phases with defined user goals, UI surfaces,
            key interaction decisions, and measurable success signals at each stage.
            The matrix was used as the alignment artifact across design, engineering, and the
            client&apos;s product team throughout the eight-week build.
          </p>

          <div className="flex flex-col" role="list" aria-label="4-phase user journey">
            {journeyPhases.map((phase, i) => (
              <PhaseRow key={phase.num} {...phase} isLast={i === journeyPhases.length - 1} />
            ))}
          </div>
        </section>

        {/* ══ Section 3: Funnel UI & Business Impact ══════════════ */}
        <section aria-labelledby="s3-heading" className="mb-20 sm:mb-28">
          <SectionLabel index="03" />
          <h2 id="s3-heading" className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight mb-4">
            Conversion Funnel UI Screens & Business Impact
          </h2>
          <p className="text-text-secondary text-base leading-[1.85] max-w-2xl mb-12">
            Funnel telemetry was instrumented at every stage gate. The 38% reduction in
            specialist escalations — the primary brief metric — was confirmed at the 12-week
            post-launch mark against the 6-month pre-launch baseline.
          </p>

          {/* Funnel visualisation */}
          <div className="mb-14">
            <p className="font-mono text-[11px] text-text-secondary tracking-[0.16em] uppercase mb-6">
              Conversion Funnel · Post-Launch Performance
            </p>
            <div
              className="bg-surface-card border border-border-strong/40 rounded-2xl p-6 sm:p-8 flex flex-col gap-3"
              role="list"
              aria-label="Conversion funnel stages with user percentages"
            >
              {funnelStages.map(({ label, sublabel, pct, users }, i) => (
                <div key={label} role="listitem" className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-text-secondary tabular-nums w-8 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <p className="text-text-primary text-sm font-semibold leading-tight">{label}</p>
                        <p className="font-mono text-[10px] text-text-secondary">{sublabel}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-brand-primary font-bold text-sm tabular-nums">{pct}%</p>
                      <p className="font-mono text-[10px] text-text-secondary">{users}</p>
                    </div>
                  </div>
                  {/* Funnel bar */}
                  <div className="ml-11">
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden" role="presentation">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${pct}%`,
                          background: `linear-gradient(90deg, #1E3A8A ${100 - pct}%, #0284C7 100%)`,
                        }}
                        aria-label={`${label}: ${pct}% of visitors`}
                      />
                    </div>
                    {/* Drop indicator */}
                    {i < funnelStages.length - 1 && (
                      <p className="font-mono text-[10px] text-text-secondary mt-1">
                        {`−${funnelStages[i].pct - funnelStages[i + 1].pct}pp drop to next stage`}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact metric cards */}
          <div className="mb-14">
            <p className="font-mono text-[11px] text-text-secondary tracking-[0.16em] uppercase mb-6">
              12-Week Post-Launch Business Impact
            </p>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              role="list"
              aria-label="Business impact metrics"
            >
              {impactCards.map(({ value, label, sub, color, valueColor }) => (
                <div key={label} role="listitem" className={`rounded-2xl border p-7 flex flex-col gap-2 ${color}`}>
                  <span className={`text-4xl font-bold leading-none tabular-nums ${valueColor}`}>{value}</span>
                  <p className="text-text-primary text-sm font-semibold leading-snug">{label}</p>
                  <p className="text-text-secondary text-xs leading-relaxed">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Screen mockups */}
          <div>
            <p className="font-mono text-[11px] text-text-secondary tracking-[0.16em] uppercase mb-6">
              UI Screen Breakdown
            </p>
            <div className="flex flex-col gap-10">
              {mockups.map(({ label, description, image, imageAlt, badge }) => (
                <div key={label} className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-text-primary text-lg font-bold">{label}</h3>
                    <span className="font-mono text-[10px] text-text-secondary border border-border-strong/40 px-2.5 py-1 rounded-md leading-none tracking-wide flex-shrink-0">
                      {badge}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-xl">{description}</p>
                  <div className="rounded-xl overflow-hidden border border-border-strong/40 bg-slate-50 shadow-sm">
                    <div className="bg-slate-100 border-b border-border-strong/20 px-4 py-2.5 flex items-center gap-2" aria-hidden="true">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                      <div className="ml-4 flex-1 bg-white/70 rounded px-3 py-1 max-w-xs">
                        <span className="font-mono text-[9px] text-slate-400 leading-none">growsmart.app / pest-id</span>
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
          </div>
        </section>

      </article>
    </CaseStudyLayout>
  )
}

/* ─── Phase Row ───────────────────────────────────────────────────────────── */

function PhaseRow({
  num, phase, userGoal, uiSurface, keyInteraction, signal, delta, isLast,
}: {
  num: string; phase: string; userGoal: string; uiSurface: string
  keyInteraction: string; signal: string; delta: string; positive: boolean; isLast: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      role="listitem"
      className={['border-t border-border-strong/25', isLast ? 'border-b' : ''].join(' ')}
    >
      {/* Collapsed row — always visible */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-center gap-5 py-5 group focus-visible:ring-2 focus-visible:ring-focus-ring rounded focus:outline-none"
        aria-expanded={open}
        aria-controls={`phase-${num}-detail`}
      >
        {/* Phase number */}
        <span className="font-mono text-xs text-text-secondary tabular-nums w-7 flex-shrink-0">{num}</span>

        {/* Phase name */}
        <span className="text-text-primary text-base font-bold flex-1 leading-tight">{phase}</span>

        {/* Signal badge */}
        <span className="font-mono text-xs text-brand-primary font-semibold hidden sm:block flex-shrink-0">
          {signal}
        </span>
        <span className="font-mono text-[10px] text-text-secondary hidden sm:block flex-shrink-0 w-28 text-right">
          {delta}
        </span>

        {/* Chevron */}
        <span
          className={['text-text-secondary text-sm transition-transform duration-200', open ? 'rotate-180' : ''].join(' ')}
          aria-hidden="true"
        >
          ↓
        </span>
      </button>

      {/* Expanded detail */}
      <div
        id={`phase-${num}-detail`}
        className={['overflow-hidden transition-all duration-300', open ? 'max-h-[480px] pb-6' : 'max-h-0'].join(' ')}
      >
        <div className="ml-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-[10px] text-text-secondary tracking-[0.14em] uppercase">User Goal</p>
            <p className="text-text-secondary text-sm leading-relaxed">{userGoal}</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-[10px] text-text-secondary tracking-[0.14em] uppercase">UI Surface</p>
            <p className="text-text-secondary text-sm leading-relaxed">{uiSurface}</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-[10px] text-text-secondary tracking-[0.14em] uppercase">Key Interaction</p>
            <p className="text-text-secondary text-sm leading-relaxed">{keyInteraction}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Section Label ───────────────────────────────────────────────────────── */

function SectionLabel({ index }: { index: string }) {
  return (
    <div className="flex items-center gap-3 mb-4" aria-hidden="true">
      <span className="font-mono text-xs text-text-secondary opacity-50">{index}</span>
      <div className="h-px flex-1 bg-border-strong opacity-20" />
    </div>
  )
}
