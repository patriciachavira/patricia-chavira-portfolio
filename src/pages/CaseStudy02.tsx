import { useState } from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'

const badges = ['Executive UX', 'Multi-Agent Synthesis', 'Data Visualization']

const metrics = [
  { value: '3.2×', label: 'Faster Decision Velocity' },
  { value: '6', label: 'Unified Agent Data Sources' },
  { value: '40%', label: 'Reduction in Briefing Prep Time' },
]

/* ── Section 1 data ───────────────────────────────────────────────────────── */

const agents = [
  {
    id: 'mkt',
    label: 'Market Intelligence',
    sub: 'Equity signals · Macro indicators · Sector rotation',
    color: 'bg-indigo-50 border-indigo-200',
    dot: 'bg-indigo-400',
  },
  {
    id: 'fin',
    label: 'Financial Risk',
    sub: 'P&L variance · Liquidity ratios · Exposure deltas',
    color: 'bg-brand-primary/8 border-brand-primary/30',
    dot: 'bg-brand-primary',
  },
  {
    id: 'ops',
    label: 'Operational Analytics',
    sub: 'KPI deviation · Capacity utilization · Pipeline health',
    color: 'bg-emerald-50 border-emerald-200',
    dot: 'bg-emerald-500',
  },
  {
    id: 'reg',
    label: 'Regulatory Compliance',
    sub: 'Filing deadlines · Violation flags · Audit trail',
    color: 'bg-amber-50 border-amber-200',
    dot: 'bg-amber-400',
  },
]

const briefingPillars = [
  {
    num: '01',
    title: 'Situation Summary',
    detail: 'A synthesized 3-sentence executive brief generated from all agent streams, ranked by urgency score and board relevance weighting.',
  },
  {
    num: '02',
    title: 'Priority Signals',
    detail: 'Up to five actionable signals surfaced above threshold, each linked to the originating agent stream and supporting data.',
  },
  {
    num: '03',
    title: 'Recommended Actions',
    detail: 'Agent-proposed next steps with confidence ratings, allowing board members to approve, defer, or escalate to committee review.',
  },
  {
    num: '04',
    title: 'Historical Comparison',
    detail: "Inline sparklines and period-over-period deltas contextualize current readings against the board's configured baseline windows.",
  },
]

/* ── Section 2 data ───────────────────────────────────────────────────────── */

const riskCategories = [
  { label: 'Credit Exposure', value: 72, delta: '+4.1%', severity: 'high', color: 'bg-red-400' },
  { label: 'Liquidity Coverage', value: 88, delta: '+1.2%', severity: 'low', color: 'bg-emerald-400' },
  { label: 'Operational Risk', value: 54, delta: '−2.8%', severity: 'medium', color: 'bg-amber-400' },
  { label: 'Market Volatility', value: 61, delta: '+7.3%', severity: 'medium', color: 'bg-amber-400' },
  { label: 'Regulatory Exposure', value: 29, delta: '−0.5%', severity: 'low', color: 'bg-emerald-400' },
  { label: 'Counterparty Risk', value: 83, delta: '+11.2%', severity: 'high', color: 'bg-red-400' },
]

const drillLevels = [
  { label: 'Board Summary', desc: 'Synthesized signal · one paragraph', active: true },
  { label: 'Category Detail', desc: 'Agent data by domain · expandable rows', active: false },
  { label: 'Raw Source Data', desc: 'Full dataset · export-ready tables', active: false },
]

/* ── Section 3 data ───────────────────────────────────────────────────────── */

const alertCategories = [
  {
    id: 'credit',
    label: 'Credit Exposure',
    description: 'Triggers when portfolio credit exposure exceeds the configured ratio ceiling.',
    severity: 'Critical',
    severityColor: 'text-red-600 bg-red-50 border-red-200',
    defaultThreshold: 75,
  },
  {
    id: 'liquidity',
    label: 'Liquidity Coverage Ratio',
    description: "Fires when LCR drops below the board's floor, prompting same-day committee review.",
    severity: 'High',
    severityColor: 'text-amber-700 bg-amber-50 border-amber-200',
    defaultThreshold: 85,
  },
  {
    id: 'market',
    label: 'Market Volatility Spike',
    description: "Alerts when 30-day VIX correlation deviates beyond the board's tolerance band.",
    severity: 'High',
    severityColor: 'text-amber-700 bg-amber-50 border-amber-200',
    defaultThreshold: 60,
  },
  {
    id: 'regulatory',
    label: 'Regulatory Filing Window',
    description: 'Surfaced 14, 7, and 3 days before mandatory filing deadlines; cannot be disabled.',
    severity: 'Informational',
    severityColor: 'text-brand-primary bg-brand-primary/8 border-brand-primary/25',
    defaultThreshold: null,
  },
]

const mockups = [
  {
    label: 'Executive Briefing Feed',
    description:
      'Prioritized intelligence stream with synthesis cards, agent attribution badges, and one-tap escalation to committee.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=520&fit=crop&auto=format',
    imageAlt:
      'Executive decision cockpit showing prioritized intelligence briefing cards with multi-agent data source attribution',
    badge: 'Cockpit · Desktop',
  },
  {
    label: 'Risk Ratio Dashboard',
    description:
      'High-density risk overview with drill-through to agent-level data, period comparison sparklines, and threshold markers.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=520&fit=crop&auto=format',
    imageAlt:
      'Risk ratio dashboard showing multi-category exposure bars with drill-down detail panels and trend indicators',
    badge: 'Analytics · Desktop',
  },
  {
    label: 'Alert Configuration Panel',
    description:
      'Board member-configurable threshold controls with per-category sensitivity settings and delivery channel preferences.',
    image:
      'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800&h=520&fit=crop&auto=format',
    imageAlt:
      'Alert threshold configuration panel showing per-category sensitivity sliders and notification delivery settings',
    badge: 'Settings · Desktop',
  },
]

/* ─────────────────────────────────────────────────────────────────────────── */

const PREV = { title: 'Agentic CHRO Onboarding Dashboard', slug: 'case-study-01' }
const NEXT = { title: 'News-Media Page Redesign & Scalable UI Kit', slug: 'case-study-03' }

export default function CaseStudy02() {
  return (
    <CaseStudyLayout prev={PREV} next={NEXT}>
      <article className="max-w-5xl mx-auto px-5 sm:px-8 pb-24" aria-labelledby="cs-title">

        {/* ── Hero Header ───────────────────────────────────────── */}
        <header className="pt-12 sm:pt-16 pb-10 sm:pb-14">
          <p className="font-mono text-xs text-text-secondary tracking-[0.18em] uppercase mb-5">
            Case Study 02 · Executive Intelligence Platform
          </p>

          <h1
            id="cs-title"
            className="text-text-primary text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-7 max-w-3xl"
          >
            Board Member Decision Cockpit
          </h1>

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

          {/* Impact metrics */}
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
            src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=1200&h=675&fit=crop&auto=format"
            alt="Board Member Decision Cockpit showing the executive intelligence feed with multi-agent synthesis cards, risk ratio visualizers, and configurable alert panels"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* ══ Section 1: Executive Summary & Multi-Agent Briefings ══ */}
        <section aria-labelledby="s1-heading" className="mb-20 sm:mb-28">
          <SectionLabel index="01" />
          <h2 id="s1-heading" className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight mb-8">
            Executive Summary & Multi-Agent Intelligence Briefings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-14 items-start mb-14">
            <div className="flex flex-col gap-5">
              <p className="text-text-secondary text-base leading-[1.85]">
                A twelve-member board at a publicly traded financial services firm was consuming
                pre-packaged PDF briefings assembled by three analyst teams — a process that
                introduced 48-hour lag between market events and board awareness. By the time a
                director opened a briefing, material conditions had often already shifted.
              </p>
              <p className="text-text-secondary text-base leading-[1.85]">
                The Decision Cockpit replaces the static briefing cycle with a live synthesis
                layer: four specialist agents continuously process their domains and surface
                prioritized signals into a unified feed. The design challenge was reducing cognitive
                load to near zero — a board member should be able to assess the company&apos;s
                risk posture in under ninety seconds, then drill into any signal that warrants
                deeper attention.
              </p>
              <p className="text-text-secondary text-base leading-[1.85]">
                Three competing prototypes were tested across two rounds of moderated sessions with
                actual board members. The winning pattern surfaced agent attribution on every card
                — so directors always know <em>which agent</em> generated a signal and with what
                confidence — rather than presenting synthesis as a monolithic, unverifiable output.
              </p>
            </div>

            {/* Problem stat cards */}
            <div className="flex flex-col gap-3" role="list" aria-label="Key problem metrics">
              {[
                { num: '48h', detail: 'Average lag between market event and board awareness under the legacy briefing model' },
                { num: '3', detail: 'Separate analyst teams producing disconnected, unreconciled briefing packages' },
                { num: '12', detail: 'Board members with divergent information needs, risk tolerances, and domain expertise' },
                { num: '6', detail: 'Agent data streams unified into a single coherent intelligence layer' },
              ].map(({ num, detail }) => (
                <div key={num} role="listitem" className="bg-surface-card border border-border-strong/40 rounded-xl px-5 py-4 flex items-start gap-4">
                  <span className="text-brand-primary text-2xl font-bold leading-none tabular-nums flex-shrink-0 pt-0.5">{num}</span>
                  <p className="text-text-secondary text-sm leading-snug">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Multi-agent architecture diagram */}
          <div
            className="bg-surface-card border border-border-strong/40 rounded-2xl p-6 sm:p-10"
            aria-label="Multi-agent synthesis architecture diagram"
            role="img"
          >
            <p className="font-mono text-[10px] text-text-secondary tracking-[0.16em] uppercase mb-8">
              Multi-Agent Synthesis Architecture
            </p>

            {/* Agent nodes → synthesis → cockpit */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              {/* Left: agent nodes */}
              <div className="flex flex-col gap-3 flex-1">
                {agents.map((agent) => (
                  <div key={agent.id} className={`border rounded-xl px-4 py-3 flex items-start gap-3 ${agent.color}`}>
                    <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${agent.dot}`} aria-hidden="true" />
                    <div>
                      <p className="text-text-primary text-sm font-semibold leading-tight">{agent.label}</p>
                      <p className="font-mono text-[10px] text-text-secondary mt-0.5 leading-snug">{agent.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Center: arrow + synthesis */}
              <div className="flex sm:flex-col items-center justify-center gap-2 sm:gap-3 px-2">
                <div className="hidden sm:flex flex-col items-center gap-1" aria-hidden="true">
                  <div className="w-px h-6 bg-border-strong/30" />
                  <div className="text-text-secondary text-lg font-light">→</div>
                  <div className="w-px h-6 bg-border-strong/30" />
                </div>
                <div className="bg-brand-primary rounded-xl px-5 py-5 text-center flex-shrink-0 min-w-[120px]">
                  <p className="text-white font-bold text-sm leading-tight">Synthesis</p>
                  <p className="font-mono text-[10px] text-white/70 mt-1">Engine</p>
                  <p className="font-mono text-[10px] text-white/50 mt-0.5">LLM · Ranker · Deduplicator</p>
                </div>
                <div className="text-text-secondary text-lg font-light" aria-hidden="true">→</div>
              </div>

              {/* Right: cockpit output */}
              <div className="flex-1 flex flex-col gap-3">
                {briefingPillars.map(({ num, title, detail }) => (
                  <div key={num} className="bg-surface-base border border-border-strong/30 rounded-xl px-4 py-3 flex items-start gap-3">
                    <span className="font-mono text-[10px] text-text-secondary tabular-nums flex-shrink-0 mt-0.5 w-5">{num}</span>
                    <div>
                      <p className="text-text-primary text-sm font-semibold leading-tight">{title}</p>
                      <p className="text-text-secondary text-xs leading-snug mt-0.5">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ Section 2: Risk Ratio Visualizers & Drill-Down ══════ */}
        <section aria-labelledby="s2-heading" className="mb-20 sm:mb-28">
          <SectionLabel index="02" />
          <h2 id="s2-heading" className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight mb-4">
            Risk Ratio Data Visualizers & Drill-Down Analytics
          </h2>
          <p className="text-text-secondary text-base leading-[1.85] max-w-2xl mb-12">
            The risk dashboard needed to communicate portfolio-wide exposure at a glance while
            remaining navigable to deep-detail data for directors who wanted to interrogate
            specific categories. The solution is a three-depth drill-down model: board summary,
            category detail, and raw source data.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 items-start mb-10">
            {/* Risk ratio bars */}
            <div
              className="bg-surface-card border border-border-strong/40 rounded-2xl p-7"
              aria-label="Portfolio risk ratio overview"
            >
              <p className="font-mono text-[10px] text-text-secondary tracking-[0.16em] uppercase mb-6">
                Portfolio Risk Overview · Q2 2025
              </p>
              <div className="flex flex-col gap-5" role="list" aria-label="Risk category ratios">
                {riskCategories.map(({ label, value, delta, severity, color }) => (
                  <div key={label} role="listitem" className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-text-primary text-sm font-medium">{label}</span>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span
                          className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${
                            severity === 'high'
                              ? 'text-red-700 bg-red-50 border-red-200'
                              : severity === 'medium'
                                ? 'text-amber-700 bg-amber-50 border-amber-200'
                                : 'text-emerald-700 bg-emerald-50 border-emerald-200'
                          }`}
                          aria-label={`Severity: ${severity}`}
                        >
                          {severity}
                        </span>
                        <span className="font-mono text-xs text-text-secondary tabular-nums w-12 text-right">{delta}</span>
                      </div>
                    </div>
                    {/* Bar */}
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden" role="presentation">
                      <div
                        className={`h-full rounded-full ${color} transition-all duration-700`}
                        style={{ width: `${value}%` }}
                        aria-label={`${label}: ${value}%`}
                      />
                    </div>
                    <div className="flex justify-between">
                      <span className="font-mono text-[10px] text-text-secondary">0</span>
                      <span className="font-mono text-[10px] text-text-secondary font-medium">{value}%</span>
                      <span className="font-mono text-[10px] text-text-secondary">100</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Drill-down model */}
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[11px] text-text-secondary tracking-[0.16em] uppercase">
                Drill-Down Depth Model
              </p>
              <div className="flex flex-col" role="list" aria-label="Data drill-down levels">
                {drillLevels.map(({ label, desc, active }, i) => (
                  <div
                    key={label}
                    role="listitem"
                    className={[
                      'flex items-start gap-4 px-5 py-4 rounded-xl border transition-colors',
                      active
                        ? 'bg-brand-primary/8 border-brand-primary/30'
                        : 'bg-surface-card border-border-strong/30',
                    ].join(' ')}
                  >
                    <div className="flex flex-col items-center gap-1 flex-shrink-0 pt-1" aria-hidden="true">
                      <div className={`w-3 h-3 rounded-full border-2 ${active ? 'border-brand-primary bg-brand-primary' : 'border-border-strong/40 bg-white'}`} />
                      {i < drillLevels.length - 1 && <div className="w-px h-5 bg-border-strong/20" />}
                    </div>
                    <div>
                      <p className={`text-sm font-semibold leading-tight ${active ? 'text-brand-primary' : 'text-text-primary'}`}>{label}</p>
                      <p className="font-mono text-[10px] text-text-secondary mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Design note callout */}
              <div className="bg-surface-card border border-border-strong/30 rounded-xl px-5 py-4 mt-2">
                <p className="font-mono text-[10px] text-text-secondary tracking-[0.12em] uppercase mb-2">Design Decision</p>
                <p className="text-text-secondary text-xs leading-relaxed">
                  Drill-down is triggered by row tap, not a separate button, reducing interaction cost.
                  Threshold markers overlay the bar at the board&apos;s configured ceiling to make
                  violations immediately legible without a legend.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ Section 3: Configurable Alert Thresholds UI ══════════ */}
        <section aria-labelledby="s3-heading" className="mb-20 sm:mb-28">
          <SectionLabel index="03" />
          <h2 id="s3-heading" className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight mb-4">
            Configurable Alert Thresholds UI
          </h2>
          <p className="text-text-secondary text-base leading-[1.85] max-w-2xl mb-12">
            Alert configuration was the most politically sensitive design surface: board members
            needed personal control over their alert sensitivity without creating compliance gaps.
            The UI enforces a floor on regulatory alerts while leaving risk and market alerts fully
            customisable per director.
          </p>

          {/* Alert config cards */}
          <div className="flex flex-col gap-4 mb-12" role="list" aria-label="Configurable alert categories">
            {alertCategories.map(({ id, label, description, severity, severityColor, defaultThreshold }) => (
              <AlertThresholdRow
                key={id}
                label={label}
                description={description}
                severity={severity}
                severityColor={severityColor}
                defaultThreshold={defaultThreshold}
              />
            ))}
          </div>

          {/* Design principles for alerts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" role="list" aria-label="Alert design principles">
            {[
              { num: '01', title: 'Never Silent by Default', body: 'All alert categories arrive enabled at recommended thresholds. Directors opt down, never up — reducing the risk of missed critical signals during onboarding.' },
              { num: '02', title: 'Compliance Floors', body: 'Regulatory filing alerts cannot be disabled or threshold-adjusted. The interface makes this constraint visible with a lock state rather than hiding the control.' },
              { num: '03', title: 'Delivery Channel Control', body: 'Each alert category independently routes to in-app, email, or SMS. Board members traveling internationally reported SMS as critical; in-app alone was insufficient.' },
            ].map(({ num, title, body }) => (
              <div key={num} role="listitem" className="bg-surface-card border border-border-strong/30 rounded-xl p-6 flex flex-col gap-3">
                <span className="font-mono text-xs text-text-secondary" aria-hidden="true">{num}</span>
                <p className="text-text-primary text-sm font-bold leading-snug">{title}</p>
                <p className="text-text-secondary text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ Screen Mockups ═══════════════════════════════════════ */}
        <section aria-labelledby="s4-heading" className="mb-20">
          <SectionLabel index="04" />
          <h2 id="s4-heading" className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight mb-4">
            UI Component Breakdown & Screen Mockups
          </h2>
          <p className="text-text-secondary text-base leading-[1.85] max-w-2xl mb-12">
            Each surface was validated across two rounds of moderated testing with eight active board
            members. All components ship with WCAG AA contrast minimums; the high-stakes alert
            states target AAA.
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
                      <span className="font-mono text-[9px] text-slate-400 leading-none">board.cockpit.internal / intelligence</span>
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

/* ─── Alert Threshold Row ─────────────────────────────────────────────────── */

function AlertThresholdRow({
  label,
  description,
  severity,
  severityColor,
  defaultThreshold,
}: {
  label: string
  description: string
  severity: string
  severityColor: string
  defaultThreshold: number | null
}) {
  const [threshold, setThreshold] = useState(defaultThreshold ?? 0)
  const [enabled, setEnabled] = useState(true)
  const locked = defaultThreshold === null

  return (
    <div
      role="listitem"
      className="bg-surface-card border border-border-strong/30 rounded-xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-5"
    >
      {/* Left: label + description */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <p className="text-text-primary text-sm font-semibold leading-tight">{label}</p>
          <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${severityColor}`}>
            {severity}
          </span>
          {locked && (
            <span className="font-mono text-[10px] text-text-secondary border border-border-strong/30 px-2 py-0.5 rounded-full flex items-center gap-1">
              <span aria-hidden="true">🔒</span> Required
            </span>
          )}
        </div>
        <p className="text-text-secondary text-xs leading-relaxed">{description}</p>
      </div>

      {/* Right: controls */}
      <div className="flex items-center gap-5 flex-shrink-0">
        {!locked && (
          <div className="flex flex-col gap-1 w-36">
            <div className="flex justify-between">
              <span className="font-mono text-[10px] text-text-secondary">Threshold</span>
              <span className="font-mono text-[10px] text-brand-primary font-medium">{threshold}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={threshold}
              onChange={(e) => setThreshold(Number(e.target.value))}
              className="w-full h-1.5 rounded-full accent-brand-primary cursor-pointer"
              aria-label={`${label} threshold: ${threshold}%`}
              disabled={!enabled}
            />
          </div>
        )}

        {/* Toggle */}
        <button
          role="switch"
          aria-checked={enabled}
          aria-label={`${locked ? 'Required — cannot disable' : `${enabled ? 'Disable' : 'Enable'} ${label} alerts`}`}
          disabled={locked}
          onClick={() => !locked && setEnabled((v) => !v)}
          className={[
            'relative w-10 h-6 rounded-full transition-colors duration-200 flex-shrink-0',
            locked
              ? 'bg-brand-primary/30 cursor-not-allowed'
              : enabled
                ? 'bg-brand-primary cursor-pointer hover:bg-brand-hover'
                : 'bg-slate-200 cursor-pointer hover:bg-slate-300',
          ].join(' ')}
        >
          <span
            className={[
              'absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200',
              enabled || locked ? 'left-5' : 'left-1',
            ].join(' ')}
            aria-hidden="true"
          />
        </button>
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
