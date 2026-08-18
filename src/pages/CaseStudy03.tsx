import { useState } from 'react'
import CaseStudyLayout from '../components/CaseStudyLayout'

const badges = ['UI Kit / Design System', 'Information Architecture', 'Responsive Web']

const metrics = [
  { value: '60%', label: 'Reduction in Design-to-Production Cycle Time' },
  { value: '5', label: 'Editorial Templates Delivered' },
  { value: '4', label: 'Editorial Verticals Served' },
]

/* ── Section 1: IA data ───────────────────────────────────────────────────── */

const auditStats = [
  { num: '340+', detail: 'Unique page URLs audited across the legacy site for content type and structural role' },
  { num: '23', detail: 'Distinct layout variants collapsed into five canonical editorial templates' },
  { num: '8', detail: 'Stakeholder card-sort sessions run across editorial, product, and advertising teams' },
  { num: '3', detail: 'Rounds of tree-testing to validate the new taxonomy before any UI was designed' },
]

const iaTree = [
  {
    label: 'Homepage · Daily Front',
    type: 'root',
    children: [
      {
        label: 'Category Landing',
        sub: 'Politics · Business · Culture · Technology',
        children: [
          { label: 'Standard Article', sub: 'Breaking · Report · Analysis' },
          { label: 'Long-form Feature', sub: 'Investigative · Profile · Series' },
          { label: 'Opinion / Editorial', sub: 'Column · Letter · Review' },
          { label: 'Multimedia Gallery', sub: 'Photo · Video · Interactive' },
        ],
      },
      {
        label: 'Special Features',
        sub: 'Series · Sponsored · Elections · Live Blog',
        children: [],
      },
    ],
  },
]

/* ── Section 2: Token data ────────────────────────────────────────────────── */

const tokenTiers = [
  {
    tier: 'Global',
    label: 'Raw values. No semantic meaning.',
    color: 'bg-slate-100 border-slate-300',
    textColor: 'text-slate-700',
    examples: ['color-blue-600: #1565C0', 'font-size-32: 2rem', 'space-4: 1rem'],
  },
  {
    tier: 'Semantic',
    label: 'Purpose, not value. Maps global → intent.',
    color: 'bg-brand-primary/8 border-brand-primary/30',
    textColor: 'text-brand-primary',
    examples: ['color-editorial-accent → color-blue-600', 'size-headline-lg → font-size-32', 'space-section → space-4'],
  },
  {
    tier: 'Component',
    label: 'Scoped to a single component variant.',
    color: 'bg-emerald-50 border-emerald-200',
    textColor: 'text-emerald-800',
    examples: ['card-headline-color → color-editorial-accent', 'byline-size → size-caption', 'article-gutter → space-section'],
  },
]

const typescaleRows = [
  { token: 'display-xl', size: '3.5rem / 56px', weight: '700', usage: 'Homepage hero headline', sample: 'Aa' },
  { token: 'heading-lg', size: '2rem / 32px', weight: '700', usage: 'Article headline', sample: 'Aa' },
  { token: 'heading-md', size: '1.375rem / 22px', weight: '600', usage: 'Section label, kicker', sample: 'Aa' },
  { token: 'body-lg', size: '1.125rem / 18px', weight: '400', usage: 'Article body copy', sample: 'Aa' },
  { token: 'body-md', size: '1rem / 16px', weight: '400', usage: 'Card description, UI text', sample: 'Aa' },
  { token: 'caption', size: '0.8125rem / 13px', weight: '400', usage: 'Byline, timestamp, meta', sample: 'Aa' },
  { token: 'label', size: '0.6875rem / 11px', weight: '500', usage: 'Tags, badges, mono labels', sample: 'Aa' },
]

const colorPalette = [
  { token: 'ink-950', hex: '#0A0A0A', label: 'Display / Headline', swatch: 'bg-[#0A0A0A]', light: true },
  { token: 'ink-700', hex: '#2C2C2C', label: 'Body copy', swatch: 'bg-[#2C2C2C]', light: true },
  { token: 'ink-400', hex: '#737373', label: 'Captions, meta', swatch: 'bg-[#737373]', light: true },
  { token: 'accent-red', hex: '#C62828', label: 'Breaking news flag', swatch: 'bg-[#C62828]', light: true },
  { token: 'accent-blue', hex: '#1565C0', label: 'Editorial primary', swatch: 'bg-[#1565C0]', light: true },
  { token: 'surface-warm', hex: '#FAFAF8', label: 'Page background', swatch: 'bg-[#FAFAF8] border border-slate-200', light: false },
  { token: 'rule', hex: '#E5E5E3', label: 'Dividers, hairlines', swatch: 'bg-[#E5E5E3] border border-slate-200', light: false },
]

/* ── Section 3: Breakpoints & Templates ──────────────────────────────────── */

const breakpoints = [
  { name: 'xs', px: '375px', label: 'Mobile S', cols: 4, note: 'Single-column stack' },
  { name: 'sm', px: '640px', label: 'Mobile L', cols: 4, note: 'Expanded tap targets' },
  { name: 'md', px: '768px', label: 'Tablet', cols: 8, note: 'Two-column grid unlocks' },
  { name: 'lg', px: '1024px', label: 'Desktop S', cols: 12, note: 'Full sidebar + article' },
  { name: 'xl', px: '1280px', label: 'Desktop M', cols: 12, note: 'Max content width cap' },
  { name: '2xl', px: '1440px', label: 'Desktop L', cols: 12, note: 'Ad rail activates' },
]

const templates = [
  {
    id: 'daily-front',
    name: 'Daily Front',
    sub: 'Homepage',
    desc: 'Modular story grid anchored by a full-bleed hero. Top story drives 60% of above-fold real estate; secondary grid adapts from 3-col to 1-col across breakpoints.',
    badge: 'Template 01',
  },
  {
    id: 'category',
    name: 'Category Landing',
    sub: 'Section Index',
    desc: 'Masthead with section identity, lead story, and a paginated article river. Filters collapse into a bottom sheet on mobile; persist as a left rail on desktop.',
    badge: 'Template 02',
  },
  {
    id: 'standard',
    name: 'Standard Article',
    sub: 'News · Report · Analysis',
    desc: 'Centered 65-character body column with sticky sidebar on lg+. Byline, kicker, and publish metadata are structured tokens, not freeform text, enforcing consistency at scale.',
    badge: 'Template 03',
  },
  {
    id: 'longform',
    name: 'Long-form Feature',
    sub: 'Investigative · Profile · Series',
    desc: 'Full-bleed chapter hero with cinematic scroll behaviour. Body column widens to 740px; pull-quotes, data callouts, and chapter breaks are first-class layout primitives.',
    badge: 'Template 04',
  },
  {
    id: 'gallery',
    name: 'Multimedia Gallery',
    sub: 'Photo · Video · Interactive',
    desc: 'Masonry grid optimised for mixed aspect ratios. Keyboard-navigable lightbox, caption overlays, and a compact filmstrip for photo essays all derive from a shared media token set.',
    badge: 'Template 05',
  },
]

const mockups = [
  {
    label: 'Daily Front · Homepage',
    description: 'Modular story grid with full-bleed hero, category rails, and real-time breaking news integration at the top of the page hierarchy.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=520&fit=crop&auto=format',
    imageAlt: 'News media homepage redesign showing full-bleed hero story, modular story grid, and category navigation rail',
    badge: 'Template 01 · Desktop',
  },
  {
    label: 'Long-form Feature · Article',
    description: 'Cinematic full-bleed chapter hero with 740px body column, inline data callouts, and token-driven pull-quote components.',
    image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&h=520&fit=crop&auto=format',
    imageAlt: 'Long-form editorial article page showing full-bleed chapter header, centered reading column, and inline data visualization',
    badge: 'Template 04 · Desktop',
  },
  {
    label: 'Standard Article · Mobile',
    description: 'Responsive article view at 375px showing the single-column stack, sticky category badge, and bottom-sheet related story module.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=520&fit=crop&auto=format',
    imageAlt: 'Standard news article viewed on mobile device showing single-column layout with sticky category navigation and related stories',
    badge: 'Template 03 · Mobile',
  },
]

/* ─────────────────────────────────────────────────────────────────────────── */

const PREV = { title: 'Board Member Decision Cockpit', slug: 'case-study-02' }
const NEXT = { title: 'AI Pest ID Tool & Self-Service Conversion Funnel', slug: 'case-study-04' }

export default function CaseStudy03() {
  return (
    <CaseStudyLayout prev={PREV} next={NEXT}>
      <article className="max-w-5xl mx-auto px-5 sm:px-8 pb-24" aria-labelledby="cs-title">

        {/* ── Hero Header ─────────────────────────────────────── */}
        <header className="pt-12 sm:pt-16 pb-10 sm:pb-14">
          <p className="font-mono text-xs text-text-secondary tracking-[0.18em] uppercase mb-5">
            Case Study 03 · Editorial Design System
          </p>

          <h1
            id="cs-title"
            className="text-text-primary text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-7 max-w-3xl"
          >
            News-Media Page Redesign & Scalable UI Kit
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
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=675&fit=crop&auto=format"
            alt="News media editorial redesign showing the new homepage template with modular story grid, category navigation system, and typographic hierarchy"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* ══ Section 1: Editorial IA Overhaul ════════════════════ */}
        <section aria-labelledby="s1-heading" className="mb-20 sm:mb-28">
          <SectionLabel index="01" />
          <h2 id="s1-heading" className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight mb-8">
            Editorial Information Architecture Overhaul
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-14 items-start mb-14">
            <div className="flex flex-col gap-5">
              <p className="text-text-secondary text-base leading-[1.85]">
                The client — a regional news organisation with a 30-year print legacy — had migrated
                to digital in 2006 and accreted structure ever since. By 2024, the site contained
                over 340 unique URL patterns, 23 visually distinct page layouts, and no documented
                taxonomy. Editorial staff made page-type decisions by memory; advertising sold
                placements against positions that no longer existed in the CMS.
              </p>
              <p className="text-text-secondary text-base leading-[1.85]">
                The IA work preceded any design. Three weeks of content audit, card-sorting with
                editorial and product teams, and three rounds of tree-testing produced a five-type
                page taxonomy with a two-level navigation hierarchy — down from eight navigational
                levels that users reliably failed to traverse past level two.
              </p>
              <p className="text-text-secondary text-base leading-[1.85]">
                The revised IA was the upstream constraint for the component library: every
                component is typed to a page context, preventing accidental use of a homepage hero
                component inside a standard article — a class of error that had produced three
                significant rendering failures in the eighteen months prior.
              </p>
            </div>

            <div className="flex flex-col gap-3" role="list" aria-label="IA audit statistics">
              {auditStats.map(({ num, detail }) => (
                <div key={num} role="listitem" className="bg-surface-card border border-border-strong/40 rounded-xl px-5 py-4 flex items-start gap-4">
                  <span className="text-brand-primary text-2xl font-bold leading-none tabular-nums flex-shrink-0 pt-0.5">{num}</span>
                  <p className="text-text-secondary text-sm leading-snug">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* IA tree diagram */}
          <div
            className="bg-surface-card border border-border-strong/40 rounded-2xl p-6 sm:p-10"
            aria-label="New site information architecture tree"
            role="img"
          >
            <p className="font-mono text-[10px] text-text-secondary tracking-[0.16em] uppercase mb-8">
              Revised Page Taxonomy · 5-Type System
            </p>

            {/* Root node */}
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-3">
                <div className="bg-brand-primary text-white text-sm font-bold px-5 py-3 rounded-xl leading-tight">
                  Homepage · Daily Front
                </div>
                <div className="h-px flex-1 bg-border-strong/20" aria-hidden="true" />
              </div>

              {/* Level 1 */}
              <div className="flex gap-0 mt-0">
                <div className="w-px ml-8 bg-border-strong/25 mr-4" aria-hidden="true" />
                <div className="flex flex-col gap-3 flex-1 pt-4">
                  {/* Category Landing branch */}
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-4 h-px bg-border-strong/25 mt-[11px] flex-shrink-0" aria-hidden="true" />
                      <div>
                        <div className="bg-surface-base border border-border-strong/40 text-text-primary text-sm font-semibold px-4 py-2.5 rounded-lg inline-flex flex-col">
                          <span>Category Landing</span>
                          <span className="font-mono text-[10px] text-text-secondary font-normal mt-0.5">Politics · Business · Culture · Technology</span>
                        </div>
                      </div>
                    </div>

                    {/* Level 2: article types */}
                    <div className="flex gap-0 ml-7">
                      <div className="w-px bg-border-strong/25 mr-4" aria-hidden="true" />
                      <div className="flex flex-col gap-2 flex-1 pt-1 pb-2">
                        {[
                          { name: 'Standard Article', sub: 'Breaking · Report · Analysis', dot: 'bg-brand-primary' },
                          { name: 'Long-form Feature', sub: 'Investigative · Profile · Series', dot: 'bg-indigo-400' },
                          { name: 'Opinion / Editorial', sub: 'Column · Letter · Review', dot: 'bg-amber-400' },
                          { name: 'Multimedia Gallery', sub: 'Photo · Video · Interactive', dot: 'bg-emerald-400' },
                        ].map((item) => (
                          <div key={item.name} className="flex items-center gap-3">
                            <div className="w-3 h-px bg-border-strong/25 flex-shrink-0" aria-hidden="true" />
                            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.dot}`} aria-hidden="true" />
                            <div className="flex items-baseline gap-2 flex-wrap">
                              <span className="text-text-primary text-sm font-medium">{item.name}</span>
                              <span className="font-mono text-[10px] text-text-secondary">{item.sub}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Special Features branch */}
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-px bg-border-strong/25 mt-[11px] flex-shrink-0" aria-hidden="true" />
                    <div className="bg-surface-base border border-border-strong/40 text-text-primary text-sm font-semibold px-4 py-2.5 rounded-lg inline-flex flex-col">
                      <span>Special Features</span>
                      <span className="font-mono text-[10px] text-text-secondary font-normal mt-0.5">Series · Sponsored · Elections · Live Blog</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Page type count legend */}
            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-border-strong/20">
              {[
                { dot: 'bg-brand-primary', label: 'Standard Article (highest volume)' },
                { dot: 'bg-indigo-400', label: 'Long-form Feature' },
                { dot: 'bg-amber-400', label: 'Opinion / Editorial' },
                { dot: 'bg-emerald-400', label: 'Multimedia Gallery' },
              ].map(({ dot, label }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${dot}`} aria-hidden="true" />
                  <span className="font-mono text-[10px] text-text-secondary">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ Section 2: Token Library & Component Rules ══════════ */}
        <section aria-labelledby="s2-heading" className="mb-20 sm:mb-28">
          <SectionLabel index="02" />
          <h2 id="s2-heading" className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight mb-4">
            Scalable UI Token Library & Component Rules
          </h2>
          <p className="text-text-secondary text-base leading-[1.85] max-w-2xl mb-12">
            The token library uses a strict three-tier architecture: global raw values, semantic
            intent mappings, and component-scoped aliases. Engineers consume only semantic and
            component tokens; global tokens are internal. This means a brand color change updates
            every surface in a single file edit.
          </p>

          {/* Three-tier token diagram */}
          <div
            className="bg-surface-card border border-border-strong/40 rounded-2xl p-6 sm:p-10 mb-12"
            aria-label="Token architecture diagram showing three tiers: Global, Semantic, and Component"
            role="img"
          >
            <p className="font-mono text-[10px] text-text-secondary tracking-[0.16em] uppercase mb-8">
              Token Architecture · Three-Tier System
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              {tokenTiers.map((tier, i) => (
                <div key={tier.tier} className="flex sm:flex-col items-start sm:items-stretch gap-3 flex-1">
                  <div className={`border rounded-xl p-5 flex-1 flex flex-col gap-3 ${tier.color}`}>
                    <div className="flex items-center justify-between">
                      <p className={`font-bold text-sm ${tier.textColor}`}>{tier.tier}</p>
                      <span className="font-mono text-[10px] text-text-secondary">{`0${i + 1}`}</span>
                    </div>
                    <p className="text-text-secondary text-xs leading-snug">{tier.label}</p>
                    <ul className="flex flex-col gap-1 mt-1">
                      {tier.examples.map((ex) => (
                        <li key={ex} className="font-mono text-[10px] text-text-secondary bg-white/60 rounded px-2 py-1 leading-snug">
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < 2 && (
                    <div className="hidden sm:flex items-center justify-center flex-shrink-0 self-center" aria-hidden="true">
                      <span className="text-text-secondary text-lg font-light px-1">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Typography scale */}
          <div className="mb-12">
            <p className="font-mono text-[11px] text-text-secondary tracking-[0.16em] uppercase mb-5">
              Typography Token Scale
            </p>
            <div
              className="border border-border-strong/30 rounded-2xl overflow-hidden"
              role="table"
              aria-label="Editorial typography token scale"
            >
              <div className="grid grid-cols-[1fr_auto_auto_1fr] bg-surface-card border-b border-border-strong/20 px-5 py-3" role="row" aria-hidden="true">
                {['Token', 'Size', 'Weight', 'Usage'].map((h) => (
                  <span key={h} className="font-mono text-[10px] text-text-secondary tracking-wide uppercase">{h}</span>
                ))}
              </div>
              {typescaleRows.map(({ token, size, weight, usage, sample }, i) => (
                <div
                  key={token}
                  role="row"
                  className={[
                    'grid grid-cols-[1fr_auto_auto_1fr] items-center px-5 py-4 gap-4',
                    i < typescaleRows.length - 1 ? 'border-b border-border-strong/15' : '',
                  ].join(' ')}
                >
                  <div role="cell" className="flex items-center gap-3">
                    <span
                      className="font-bold text-text-primary leading-none select-none"
                      style={{ fontSize: `clamp(1rem, ${0.6 + i * 0.08}vw + 0.7rem, ${1.6 - i * 0.12}rem)` }}
                      aria-hidden="true"
                    >
                      {sample}
                    </span>
                    <span className="font-mono text-xs text-text-secondary">{token}</span>
                  </div>
                  <span role="cell" className="font-mono text-xs text-text-secondary tabular-nums whitespace-nowrap">{size}</span>
                  <span role="cell" className="font-mono text-xs text-text-secondary tabular-nums">{weight}</span>
                  <span role="cell" className="text-text-secondary text-xs">{usage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Color palette swatches */}
          <div>
            <p className="font-mono text-[11px] text-text-secondary tracking-[0.16em] uppercase mb-5">
              Editorial Color Token Palette
            </p>
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
              role="list"
              aria-label="Editorial color tokens"
            >
              {colorPalette.map(({ token, hex, label, swatch, light }) => (
                <div key={token} role="listitem" className="flex flex-col gap-2">
                  <div className={`h-12 rounded-lg ${swatch}`} aria-hidden="true" />
                  <div>
                    <p className="font-mono text-[11px] text-text-primary font-medium">{token}</p>
                    <p className="font-mono text-[10px] text-text-secondary">{hex}</p>
                    <p className="text-text-secondary text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ Section 3: Breakpoints & Template Previews ══════════ */}
        <section aria-labelledby="s3-heading" className="mb-20 sm:mb-28">
          <SectionLabel index="03" />
          <h2 id="s3-heading" className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight mb-4">
            Responsive Breakpoints & Editorial Template Previews
          </h2>
          <p className="text-text-secondary text-base leading-[1.85] max-w-2xl mb-12">
            Six breakpoints govern the grid system. Each of the five editorial templates was
            specced at every breakpoint — 30 layout states in total — ensuring engineering
            had no ambiguous in-between scenarios to resolve independently.
          </p>

          {/* Breakpoint table */}
          <div className="mb-14">
            <p className="font-mono text-[11px] text-text-secondary tracking-[0.16em] uppercase mb-5">
              Breakpoint System
            </p>
            <div
              className="border border-border-strong/30 rounded-2xl overflow-hidden"
              role="table"
              aria-label="Responsive breakpoint system"
            >
              <div className="grid grid-cols-[auto_auto_1fr_auto_1fr] bg-surface-card border-b border-border-strong/20 px-5 py-3" role="row" aria-hidden="true">
                {['Name', 'Width', 'Label', 'Cols', 'Behaviour'].map((h) => (
                  <span key={h} className="font-mono text-[10px] text-text-secondary tracking-wide uppercase">{h}</span>
                ))}
              </div>
              {breakpoints.map(({ name, px, label, cols, note }, i) => (
                <div
                  key={name}
                  role="row"
                  className={[
                    'grid grid-cols-[auto_auto_1fr_auto_1fr] items-center px-5 py-3.5 gap-4',
                    i < breakpoints.length - 1 ? 'border-b border-border-strong/15' : '',
                  ].join(' ')}
                >
                  <span role="cell" className="font-mono text-xs font-bold text-brand-primary w-8">{name}</span>
                  <span role="cell" className="font-mono text-xs text-text-secondary tabular-nums w-16">{px}</span>
                  <span role="cell" className="text-text-primary text-sm font-medium">{label}</span>
                  <span role="cell" className="font-mono text-xs text-text-secondary tabular-nums w-6 text-center">{cols}</span>
                  <span role="cell" className="text-text-secondary text-xs">{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5 editorial template wireframes */}
          <div>
            <p className="font-mono text-[11px] text-text-secondary tracking-[0.16em] uppercase mb-6">
              Five-Template System
            </p>
            <div className="flex flex-col gap-8" role="list" aria-label="Five editorial templates">
              {templates.map((t) => (
                <TemplateRow key={t.id} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* ══ Screen Mockups ═══════════════════════════════════════ */}
        <section aria-labelledby="s4-heading" className="mb-20">
          <SectionLabel index="04" />
          <h2 id="s4-heading" className="text-text-primary text-2xl sm:text-3xl font-bold leading-tight mb-4">
            UI Component Breakdown & Screen Mockups
          </h2>
          <p className="text-text-secondary text-base leading-[1.85] max-w-2xl mb-12">
            All components are documented in Storybook with token annotations, responsive
            behaviour notes, and WCAG contrast values. The library shipped with 94% design-dev
            parity on first integration — measured against a pre-agreed spec checklist.
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
                      <span className="font-mono text-[9px] text-slate-400 leading-none">regionalpress.com / news</span>
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

/* ─── Template Wireframe Row ──────────────────────────────────────────────── */

function TemplateRow({ name, sub, desc, badge, id }: { name: string; sub: string; desc: string; badge: string; id: string }) {
  const [active, setActive] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')

  return (
    <div role="listitem" className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="font-mono text-[10px] text-text-secondary">{badge}</span>
            <h3 className="text-text-primary text-base font-bold">{name}</h3>
          </div>
          <p className="font-mono text-[10px] text-text-secondary">{sub}</p>
        </div>
        {/* Breakpoint toggle */}
        <div className="flex items-center gap-1 bg-surface-card border border-border-strong/30 rounded-lg p-1" role="group" aria-label={`Preview breakpoint for ${name}`}>
          {(['desktop', 'tablet', 'mobile'] as const).map((bp) => (
            <button
              key={bp}
              onClick={() => setActive(bp)}
              className={[
                'h-7 px-3 rounded-md font-mono text-[10px] transition-colors duration-150 capitalize',
                active === bp
                  ? 'bg-brand-primary text-white'
                  : 'text-text-secondary hover:text-text-primary',
              ].join(' ')}
              aria-pressed={active === bp}
              aria-label={`${name} ${bp} preview`}
            >
              {bp}
            </button>
          ))}
        </div>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">{desc}</p>
      {/* Wireframe visual */}
      <TemplateWireframe id={id} breakpoint={active} />
    </div>
  )
}

function TemplateWireframe({ id, breakpoint }: { id: string; breakpoint: 'desktop' | 'tablet' | 'mobile' }) {
  const narrow = breakpoint === 'mobile'
  const mid = breakpoint === 'tablet'

  const base = 'bg-slate-200 rounded'
  const dark = 'bg-slate-300 rounded'
  const accent = 'bg-brand-primary/20 rounded'
  const text = 'bg-slate-100 rounded'

  const wrapClass = [
    'bg-surface-card border border-border-strong/30 rounded-xl p-5 transition-all duration-300',
    narrow ? 'max-w-[200px]' : mid ? 'max-w-sm' : 'w-full',
  ].join(' ')

  const wireframes: Record<string, Record<string, React.ReactNode>> = {
    'daily-front': {
      desktop: (
        <div className="flex flex-col gap-2">
          <div className={`h-2 w-24 ${base}`} />
          <div className={`h-28 w-full ${accent}`} />
          <div className="grid grid-cols-3 gap-2 mt-1">
            {[0,1,2].map(i => <div key={i} className="flex flex-col gap-1"><div className={`h-14 ${dark}`} /><div className={`h-2 ${text}`} /><div className={`h-1.5 w-3/4 ${text}`} /></div>)}
          </div>
          <div className="grid grid-cols-4 gap-1.5 mt-1">
            {[0,1,2,3].map(i => <div key={i} className={`h-2 ${base}`} />)}
          </div>
        </div>
      ),
      tablet: (
        <div className="flex flex-col gap-2">
          <div className={`h-2 w-20 ${base}`} />
          <div className={`h-20 w-full ${accent}`} />
          <div className="grid grid-cols-2 gap-2 mt-1">
            {[0,1].map(i => <div key={i} className="flex flex-col gap-1"><div className={`h-12 ${dark}`} /><div className={`h-2 ${text}`} /></div>)}
          </div>
        </div>
      ),
      mobile: (
        <div className="flex flex-col gap-2">
          <div className={`h-2 w-16 ${base}`} />
          <div className={`h-20 w-full ${accent}`} />
          <div className={`h-2 w-full ${text}`} />
          <div className={`h-2 w-3/4 ${text}`} />
          <div className={`h-12 w-full ${dark}`} />
          <div className={`h-2 w-full ${text}`} />
        </div>
      ),
    },
    'category': {
      desktop: (
        <div className="flex flex-col gap-2">
          <div className={`h-8 w-full ${accent}`} />
          <div className="flex gap-2 mt-1">
            <div className="flex flex-col gap-1.5 flex-1">
              {[0,1,2,3].map(i => <div key={i} className="flex gap-2 items-start"><div className={`w-16 h-10 flex-shrink-0 ${dark}`} /><div className="flex flex-col gap-1 flex-1"><div className={`h-2 ${base}`} /><div className={`h-1.5 w-3/4 ${text}`} /></div></div>)}
            </div>
            <div className={`w-16 flex-shrink-0 ${base} rounded-xl`} />
          </div>
        </div>
      ),
      tablet: (
        <div className="flex flex-col gap-2">
          <div className={`h-6 w-full ${accent}`} />
          <div className="flex flex-col gap-1.5 mt-1">
            {[0,1,2].map(i => <div key={i} className="flex gap-2"><div className={`w-14 h-8 flex-shrink-0 ${dark}`} /><div className="flex flex-col gap-1 flex-1"><div className={`h-2 ${base}`} /><div className={`h-1.5 w-2/3 ${text}`} /></div></div>)}
          </div>
        </div>
      ),
      mobile: (
        <div className="flex flex-col gap-2">
          <div className={`h-5 w-full ${accent}`} />
          <div className="flex flex-col gap-1.5 mt-1">
            {[0,1].map(i => <div key={i} className="flex flex-col gap-1"><div className={`h-10 w-full ${dark}`} /><div className={`h-2 ${text}`} /></div>)}
          </div>
        </div>
      ),
    },
    'standard': {
      desktop: (
        <div className="flex gap-3">
          <div className="flex flex-col gap-2 flex-1">
            <div className={`h-2 w-16 ${base}`} />
            <div className={`h-3 w-full ${dark}`} />
            <div className={`h-3 w-4/5 ${dark}`} />
            <div className={`h-16 w-full ${accent}`} />
            {[0,1,2,3].map(i => <div key={i} className={`h-1.5 w-full ${text}`} />)}
            <div className={`h-1.5 w-2/3 ${text}`} />
          </div>
          <div className="w-20 flex-shrink-0 flex flex-col gap-2">
            <div className={`h-16 w-full ${base}`} />
            <div className={`h-2 ${text}`} />
            <div className={`h-2 ${text}`} />
            <div className={`h-12 w-full ${base}`} />
          </div>
        </div>
      ),
      tablet: (
        <div className="flex flex-col gap-2">
          <div className={`h-2 w-16 ${base}`} />
          <div className={`h-3 w-full ${dark}`} />
          <div className={`h-10 w-full ${accent}`} />
          {[0,1,2].map(i => <div key={i} className={`h-1.5 w-full ${text}`} />)}
        </div>
      ),
      mobile: (
        <div className="flex flex-col gap-2">
          <div className={`h-2 w-12 ${base}`} />
          <div className={`h-2 w-full ${dark}`} />
          <div className={`h-8 w-full ${accent}`} />
          {[0,1,2].map(i => <div key={i} className={`h-1.5 w-full ${text}`} />)}
        </div>
      ),
    },
    'longform': {
      desktop: (
        <div className="flex flex-col gap-2">
          <div className={`h-20 w-full ${accent}`} />
          <div className="flex flex-col gap-1.5 items-center px-6">
            <div className={`h-3 w-full ${dark}`} />
            <div className={`h-3 w-5/6 ${dark}`} />
            {[0,1,2].map(i => <div key={i} className={`h-1.5 w-full ${text}`} />)}
            <div className={`h-8 w-full ${base}`} />
            {[0,1].map(i => <div key={i} className={`h-1.5 w-full ${text}`} />)}
          </div>
        </div>
      ),
      tablet: (
        <div className="flex flex-col gap-2">
          <div className={`h-16 w-full ${accent}`} />
          <div className="flex flex-col gap-1.5 px-4">
            <div className={`h-2 w-full ${dark}`} />
            {[0,1,2].map(i => <div key={i} className={`h-1.5 w-full ${text}`} />)}
          </div>
        </div>
      ),
      mobile: (
        <div className="flex flex-col gap-2">
          <div className={`h-14 w-full ${accent}`} />
          <div className={`h-2 w-full ${dark}`} />
          {[0,1,2].map(i => <div key={i} className={`h-1.5 w-full ${text}`} />)}
        </div>
      ),
    },
    'gallery': {
      desktop: (
        <div className="flex flex-col gap-2">
          <div className={`h-2 w-24 ${base}`} />
          <div className="grid grid-cols-3 gap-1.5">
            <div className={`col-span-2 h-20 ${accent}`} />
            <div className="flex flex-col gap-1.5">
              <div className={`h-9 ${dark}`} />
              <div className={`h-9 ${dark}`} />
            </div>
            {[0,1,2].map(i => <div key={i} className={`h-12 ${dark}`} />)}
          </div>
        </div>
      ),
      tablet: (
        <div className="flex flex-col gap-2">
          <div className={`h-2 w-20 ${base}`} />
          <div className="grid grid-cols-2 gap-1.5">
            <div className={`h-16 ${accent}`} />
            <div className={`h-16 ${dark}`} />
            <div className={`h-12 ${dark}`} />
            <div className={`h-12 ${dark}`} />
          </div>
        </div>
      ),
      mobile: (
        <div className="flex flex-col gap-2">
          <div className={`h-2 w-16 ${base}`} />
          <div className={`h-16 w-full ${accent}`} />
          <div className="grid grid-cols-2 gap-1.5">
            <div className={`h-10 ${dark}`} />
            <div className={`h-10 ${dark}`} />
          </div>
        </div>
      ),
    },
  }

  const frame = wireframes[id]?.[breakpoint]

  return (
    <div className={wrapClass} aria-label={`${id} template wireframe at ${breakpoint} breakpoint`}>
      {frame}
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
