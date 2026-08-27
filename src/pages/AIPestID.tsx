import { Link } from 'react-router-dom';

export default function AIPestIdTool() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-16">
            {/* Top Navigation */}
      <header className="max-w-5xl mx-auto w-full px-8 sm:px-16 pt-12 pb-8 flex justify-between items-center text-xs tracking-widest uppercase font-semibold text-gray-900 border-b border-gray-100 mb-12">
        <a href="/" className="hover:text-gray-500 transition-colors">← BACK TO CASE STUDIES</a>
        <div className="flex items-center gap-8">
          <a href="/" className="font-extrabold text-sm tracking-normal">PATRICIA CHAVIRA</a>
        </div>
        <div className="flex items-center gap-6 text-gray-700">
          <a href="/#work" className="hover:text-gray-950 transition-colors">Work</a>
          <a href="/#about" className="hover:text-gray-950 transition-colors">About Me</a>
          <a href="/#contact" className="hover:text-gray-950 transition-colors">Contact</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-16 space-y-16">
        {/* Hero Section */}
        <section className="space-y-6">
          <p className="text-xs font-mono text-gray-400 tracking-wider uppercase">
            04 &mdash; UTILITY &amp; MID-FUNNEL CONSIDERATION
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight">
            AI Pest ID Tool &amp; Mid-Funnel Consideration Experience
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed font-normal">
            Responsive Experience &amp; UI Kit Architecture: Scaling intuitive mobile interaction patterns up to enterprise desktop layouts with accessibility-first design tokens.
          </p>
          <p className="text-base text-gray-700 leading-relaxed font-normal">
            Transformed ambiguous consumer uncertainty into active decision-making by creating a zero-friction diagnostic bridge that nurtures high-intent prospects toward targeted solutions.
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50/80 border border-gray-200/80 rounded-xl text-xs divide-y md:divide-y-0 md:divide-x divide-gray-200/80">
            <div className="pt-2 md:pt-0 md:pr-4 first:pt-0">
              <p className="font-bold text-gray-900 uppercase tracking-wider mb-1">Role:</p>
              <p className="font-normal text-gray-700">Lead Product Designer &amp; UX Strategist</p>
            </div>
            <div className="pt-2 md:pt-0 md:px-4">
              <p className="font-bold text-gray-900 uppercase tracking-wider mb-1">Scope:</p>
              <p className="font-normal text-gray-700">Consumer B2C Web / Mid-Funnel Diagnostic Tool / Lead Nurturing</p>
            </div>
            <div className="pt-2 md:pt-0 md:px-4">
              <p className="font-bold text-gray-900 uppercase tracking-wider mb-1">Tools &amp; Timeline:</p>
              <p className="font-normal text-gray-700">4 Weeks - 2026 | Figma, Claude, Behavioral UX Design, CRO Testing</p>
            </div>
            <div className="pt-2 md:pt-0 md:pl-4">
              <p className="font-bold text-gray-900 uppercase tracking-wider mb-1">Stakeholders:</p>
              <p className="font-normal text-gray-700">Accelerated consideration velocity; +30% lead progression; &gt;85% scan completion</p>
            </div>
          </div>

          {/* Confidentiality Disclaimer */}
          <div className="bg-gray-50/80 border border-gray-200/80 rounded-lg p-4 text-xs text-center text-gray-700 leading-relaxed">
            🔒 <span className="font-semibold italic">Global Confidentiality &amp; NDA Disclaimer: To comply with Non-Disclosure Agreements (NDAs), proprietary client names, live customer PII, and sensitive business metrics across these case studies have been sanitized or generalized. All designs, interaction models, and system architectures reflect my personal strategic direction and UX execution.</span>
          </div>
        </section>

        {/* Executive Summary & Visual Showcase */}
        <section className="space-y-6 text-gray-800 pt-6 border-t border-gray-100">
          <p className="text-base leading-relaxed">
            <strong className="text-black">Executive Summary:</strong> Architected an intent-driven consideration experience for an enterprise pest control platform to cut through content bloat.
          </p>
          <p className="text-base leading-relaxed">
            <strong className="text-black">Core Feature 1:</strong> Integrated dual image input options (live camera capture or photo gallery upload) for frictionless entry.
          </p>
          <p className="text-base leading-relaxed">
            <strong className="text-black">Core Feature 2:</strong> Engineered confidence-scored diagnostic feedback paired with WCAG-compliant color scales, high contrast, and accessible touch targets.
          </p>
          <p className="text-base leading-relaxed">
            <strong className="text-black">Mid-Funnel Impact:</strong> Created direct service matching and intelligent &quot;Next Steps&quot; suggestions that bridge identification directly into mid-funnel consideration and lead progression.
          </p>

                    {/* Dual Mockup Showcase: Mobile Interactive Video & Desktop Image */}
          <div className="w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 p-8 space-y-4 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left: Mobile Interactive Demo Video without outer mockup */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[280px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                  <video 
                    src="/video/pest-id/1.1 mobile-interactive-demo.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-auto object-cover bg-white"
                  />
                </div>
                <span className="text-xs font-mono text-gray-500 mt-3">Mobile Interactive Prototype Demo</span>
              </div>

              {/* Right: Desktop Home Image */}
              <div className="flex flex-col items-center">
                <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                  <img 
                    src="/images/pest-id/1.2 pest ID home desktop.png" 
                    alt="Pest ID Home Desktop View" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <span className="text-xs font-mono text-gray-500 mt-3">Desktop View</span>
              </div>
            </div>

            <p className="text-xs text-center text-gray-500 font-mono pt-4">
              Responsive Experience &amp; UI Kit Architecture: Scaling intuitive mobile interaction patterns up to enterprise desktop layouts with WCAG-compliant design tokens.
            </p>
          </div>
        </section>

        {/* Context & User Persona */}
        <section className="space-y-8 pt-8 border-t border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-950 mb-2">The Context:</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Enterprise pest control websites are traditionally content-heavy and text-dense, forcing mid-funnel users to hunt through generic, lengthy service pages when seeking immediate answers to urgent pest threats.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-950 mb-2">The Moment of Conflict:</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  This overwhelming information architecture creates high cognitive load. Users like Rachel face friction trying to self-diagnose pest threats manually, getting trapped in an &quot;evaluation loop&quot; and causing premature drop-offs prior to quote requests.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-950 mb-2">The Strategic Challenge:</h3>
                <p className="text-base text-gray-900 leading-relaxed font-medium">
                  How might we structure an AI Pest ID API to distill heavy informational clutter into an instant, accessible, diagnostic-first experience?
                </p>
              </div>
            </div>

            {/* Right: Persona Image */}
            <div className="flex flex-col items-center">
              <div className="w-full flex flex-col items-center">
                <img 
                  src="/images/pest-id/2 rachel.png" 
                  alt="User Persona: Rachel, Data Analyst" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-sm text-center text-gray-800 font-medium pt-4">
                <strong className="text-black">Core Motivation:</strong> &quot;Turning high-anxiety pest discovery into clear, confident buying intent.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* System Architecture & Wireframing */}
        <section className="space-y-6 pt-8 border-t border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Wireframe Image + Caption (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="w-full flex justify-center">
                <img 
                  src="/images/pest-id/3 system architecture wireframing.png" 
                  alt="System Architecture & Wireframing" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-sm text-gray-800 font-medium leading-relaxed">
                <strong className="text-black">System Foundations &amp; Accessibility Specifications:</strong> Mapping tokenized contrast ratios, 48x48px mobile touch targets, and scalable typographic hierarchy directly to the initial Smart Scan entry point.
              </p>
            </div>

            {/* Right: Architecture & Accessibility Points (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-bold text-gray-950">System Architecture &amp; Wire-framing</h2>

              <div>
                <h3 className="text-base font-bold text-gray-950 mb-1">Color, Contrast &amp; Tokenization:</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Built on tokenized color scales ensuring all text, diagnostic badges, and risk-level indicators meet rigorous WCAG contrast ratios against enterprise backgrounds.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-gray-950 mb-1">Touch Target Ergonomics:</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Engineered mobile touch targets (camera shutter, gallery upload buttons, and action pickers) to meet or exceed minimum sizing guidelines for thumb-friendly interaction under stress.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-gray-950 mb-1">Accessible Typography &amp; Hierarchy:</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Structured type scales with scalable font sizing and clear semantic headings to support screen readers and users navigating high-density content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Architectural Solution & Interaction Flow */}
        <section className="space-y-8 pt-8 border-t border-gray-100">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-950">The Architectural Solution &amp; Interaction Flow</h2>

            {/* Frictionless Input */}
            <div>
              <h3 className="text-lg font-bold text-gray-950 mb-2">Frictionless Input (Smart Scan Module):</h3>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
                <li>Designed dual-option capture modes (live viewfinder or gallery drop-and-drag).</li>
                <li>Eliminated early drop-offs for users who already had photos saved on their devices.</li>
              </ul>
            </div>

            {/* Instant Diagnostic Validation */}
            <div>
              <h3 className="text-lg font-bold text-gray-950 mb-2">Instant Diagnostic Validation (API Integration):</h3>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
                <li>Structured the UI to deliver transparent confidence scoring, risk ratings, and species identification immediately.</li>
                <li>Replaced walls of text with definitive, science-backed answers.</li>
                <li><strong className="text-gray-950">Consideration-to-Action Hand-off:</strong> Contextual callout matching the diagnosed pest directly with specialized local service plans and instant estimate calculators.</li>
              </ul>
            </div>

            {/* Mid-Funnel Bridge & Next Steps */}
            <div>
              <h3 className="text-lg font-bold text-gray-950 mb-2">Mid-Funnel Bridge &amp; Next Steps:</h3>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
                <li>Implemented structured &quot;Next Steps&quot; suggestions immediately following the diagnosis.</li>
                <li>Transitioned users smoothly from mere identification into mid-funnel consideration (exploring health risks, safety protocols, and tailored treatment plans).</li>
              </ul>
            </div>

            {/* Seamless Intent Hand-Off */}
            <div>
              <h3 className="text-lg font-bold text-gray-950 mb-2">Seamless Intent Hand-Off:</h3>
              <ul className="list-disc pl-5 space-y-1 text-base text-gray-700">
                <li>Pre-populated quote forms with diagnosed data and matched results directly to local service inventory and tiered pricing.</li>
              </ul>
            </div>
          </div>

          {/* Flow Diagram Image */}
          <div className="w-full flex justify-center pt-4">
            <img 
              src="/images/pest-id/4 flow pest id.png" 
              alt="Architectural Solution & Interaction Flow Diagram" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* UI Solution Showcase */}
          <div className="space-y-6 pt-8 border-t border-gray-100">
            <h3 className="text-2xl font-bold text-gray-950">UI Solution Showcase</h3>

            <div>
              <p className="text-base text-gray-700">
                <strong className="text-gray-950">Desktop Breakpoints:</strong> Multi-column layouts optimizing enterprise information architecture without clutter.
              </p>
              <p className="text-base text-gray-700 mt-2">
                <strong className="text-gray-950">Mobile Viewports:</strong> Thumb-friendly interactive camera scanning and accessible scan-result cards.
              </p>
            </div>

            {/* Desktop & Mobile Screens Showcase Image */}
            <div className="w-full flex justify-center pt-4">
              <img 
                src="/images/new-pest-ui-showcase.png" 
                alt="Desktop and Mobile Screens Showcase" 
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-sm text-gray-800 font-medium leading-relaxed pt-2">
              <strong className="text-black">Cross-Platform UI Execution:</strong> Translating desktop architectural structure into thumb-friendly mobile viewports across an unbroken 4-step diagnostic journey, demonstrating seamless transitions from zero-friction image capture to mid-funnel conversion.
            </p>
          </div>
        </section>

        {/* Business Impact Metrics & Key Strategic Lesson */}
        <section className="space-y-12 pt-12 border-t border-gray-100">
          {/* Business Impact Metrics Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-950">BUSINESS IMPACT METRICS</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gray-50/80 border border-gray-200/80 rounded-2xl text-center">
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-black text-gray-950">&lt; 35%</p>
                <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider">Bounce Rate</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-black text-gray-950">&gt; 85%</p>
                <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider">Scan Completion</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-black text-gray-950">&gt; 90%</p>
                <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider">Match Accuracy</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-black text-gray-950">+30%</p>
                <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider">Lead Progression</p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-gray-950">Context &amp; Strategic Value:</h3>
              <ul className="list-disc pl-5 space-y-2 text-base text-gray-700">
                <li>Eliminated upfront friction by removing requirements for credit cards or registration prior to scanning.</li>
                <li>Streamlined the dual-option capture flow to keep users engaged through analysis.</li>
                <li>Built deep advisory trust via transparent confidence scores, risk meters, and home safety tips.</li>
                <li>Accelerated mid-to-lower funnel conversion by pre-populating quote forms and mapping intelligent next steps with verified pest data.</li>
              </ul>
            </div>
          </div>

          {/* Key Strategic Lesson */}
          <div className="space-y-4 pt-6 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-950">KEY STRATEGIC LESSON</h2>
            <blockquote className="text-lg text-gray-800 leading-relaxed font-normal italic bg-gray-50/60 p-6 rounded-xl border-l-4 border-gray-900">
              &ldquo;When designing consumer AI utilities in high-anxiety situations, immediate diagnostic clarity builds trust. Providing zero-friction entry points like gallery photo uploads converts user uncertainty into confident buying intent, making the subsequent service quote feel like helpful guidance rather than a hard sales pitch.&rdquo;
            </blockquote>
          </div>
        </section>
      </main>

      {/* Case Studies Navigation */}
      <div className="max-w-6xl mx-auto px-12 mt-24">
        <div className="flex items-center justify-between pt-12 border-t border-gray-100 text-xs font-semibold">
          <Link to="/case-study/news-media" className="text-gray-600 hover:text-black transition flex items-center gap-1">
            &larr; BACK TO CASE STUDY: NEWS MEDIA
          </Link>
          <Link to="/" className="text-gray-900 hover:text-gray-600 transition flex items-center gap-1">
            BACK TO ALL CASE STUDIES
          </Link>
        </div>
      </div>

      {/* Global Footer */}
      <footer className="w-full border-t border-gray-100 bg-white mt-24">
        <div className="max-w-6xl mx-auto px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs">
          <div>
            <p className="font-bold text-gray-900 text-sm">Patricia Chavira</p>
            <p className="text-gray-500 font-mono mt-1">&copy; 2026 &middot; Guadalajara, MX &middot; Product Designer</p>
          </div>
          <div className="flex items-center gap-8 text-gray-600 font-medium">
            <Link to="/#work" className="hover:text-black transition">Work</Link>
            <Link to="/#about" className="hover:text-black transition">About</Link>
            <Link to="/#contact" className="hover:text-black transition">Contact</Link>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-black transition cursor-pointer flex items-center gap-1 font-medium">
              &uarr; Top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
