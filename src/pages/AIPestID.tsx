import { Link } from 'react-router-dom';

export default function AIPestID() {
  return (
    <div className="focus:outline-none focus:ring-2 focus:ring-black min-h-screen bg-white text-gray-900 font-sans pb-24">
      {/* Navigation Header */}
      <header className="focus:outline-none focus:ring-2 focus:ring-black border-b border-gray-100 px-8 py-4 flex items-center justify-between text-xs tracking-wider uppercase">
        <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-black text-gray-500 hover:text-black transition">
          ← Back to Case Studies
        </Link>
        <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-black font-semibold text-black tracking-widest hover:text-gray-600 transition">PATRICIA CHAVIRA</Link>
        <div className="focus:outline-none focus:ring-2 focus:ring-black flex gap-6 text-gray-400">
          <a href="#work" className="focus:outline-none focus:ring-2 focus:ring-black hover:text-black">WORK</a>
          <a href="#about" className="focus:outline-none focus:ring-2 focus:ring-black hover:text-black">ABOUT ME</a>
          
          <a href="#contact" className="focus:outline-none focus:ring-2 focus:ring-black hover:text-black">CONTACT</a>
        </div>
      </header>

      <main className="focus:outline-none focus:ring-2 focus:ring-black max-w-6xl mx-auto px-12 py-12 space-y-16">
        {/* Section 1: Hero Header */}
        <section>
          <p className="focus:outline-none focus:ring-2 focus:ring-black text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
            04 — UTILITY & MID-FUNNEL CONSIDERATION
          </p>

          <h1 className="focus:outline-none focus:ring-2 focus:ring-black text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            AI Pest ID Tool & Mid-Funnel Consideration Experience
          </h1>

          <p className="focus:outline-none focus:ring-2 focus:ring-black text-xl font-normal text-gray-900 leading-relaxed max-w-4xl mb-6">
            Designing an interactive mid-funnel diagnostic tool that validates consumer pest concerns through AI visual identification, bridging the gap between problem discovery and service consideration.
          </p>

          <p className="focus:outline-none focus:ring-2 focus:ring-black text-xl font-normal text-gray-900 leading-relaxed max-w-4xl mb-8">
            Transformed ambiguous consumer uncertainty into active decision-making by creating a zero-friction diagnostic bridge that nurtures high-intent prospects toward targeted solutions.
          </p>

          {/* 4-Column Metadata Grid */}
          <div className="focus:outline-none focus:ring-2 focus:ring-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50/80 p-5 rounded-lg text-xs border border-gray-100 mb-8">
            <div className="focus:outline-none focus:ring-2 focus:ring-black border-r sm:border-r-0 md:border-r border-gray-200 pr-2">
              <span className="focus:outline-none focus:ring-2 focus:ring-black block font-bold text-gray-900 mb-1">Role:</span>
              <span className="focus:outline-none focus:ring-2 focus:ring-black text-gray-700">Lead Product Designer & UX Strategist</span>
            </div>
            <div className="focus:outline-none focus:ring-2 focus:ring-black border-r sm:border-r-0 md:border-r border-gray-200 pr-2">
              <span className="focus:outline-none focus:ring-2 focus:ring-black block font-bold text-gray-900 mb-1">Scope:</span>
              <span className="focus:outline-none focus:ring-2 focus:ring-black text-gray-700">Consumer B2C Web / Mid-Funnel Diagnostic Tool / Lead Nurturing</span>
            </div>
            <div className="focus:outline-none focus:ring-2 focus:ring-black border-r sm:border-r-0 md:border-r border-gray-200 pr-2">
              <span className="focus:outline-none focus:ring-2 focus:ring-black block font-bold text-gray-900 mb-1">Tools & Timeline:</span>
              <span className="focus:outline-none focus:ring-2 focus:ring-black text-gray-700">4 Weeks - 2026 | Figma, Claude, Behavioral UX Design, CRO Testing</span>
            </div>
            <div>
              <span className="focus:outline-none focus:ring-2 focus:ring-black block font-bold text-gray-900 mb-1">Stakeholders:</span>
              <span className="focus:outline-none focus:ring-2 focus:ring-black text-gray-700">Accelerated consideration velocity; +30% lead progression; &gt;85% scan completion</span>
            </div>
          </div>

          {/* NDA Disclaimer */}
          <div className="focus:outline-none focus:ring-2 focus:ring-black bg-gray-50 border border-gray-200/60 rounded-md p-4 text-xs text-center text-gray-900 leading-relaxed">
            🔒 <strong className="focus:outline-none focus:ring-2 focus:ring-black font-bold italic">Global Confidentiality & NDA Disclaimer:</strong> <span className="focus:outline-none focus:ring-2 focus:ring-black italic">To comply with Non-Disclosure Agreements (NDAs), proprietary client names, live customer PII, and sensitive business metrics across these case studies have been sanitized or generalized. All designs, interaction models, and system architectures reflect my personal strategic direction and UX execution.</span>
          </div>
        </section>

        {/* Section 2: Executive Summary */}
        <section className="focus:outline-none focus:ring-2 focus:ring-black space-y-6 border-t border-gray-100 pt-8">
          <p className="focus:outline-none focus:ring-2 focus:ring-black text-base text-gray-900 leading-relaxed">
            <strong>Executive Summary:</strong> Architected an intent-driven consideration experience featuring dual image input options (live camera capture or photo gallery upload), confidence-scored diagnostic feedback, and direct service matching that accelerates lead progression.
          </p>

          <div className="focus:outline-none focus:ring-2 focus:ring-black grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="focus:outline-none focus:ring-2 focus:ring-black space-y-2">
              <div className="focus:outline-none focus:ring-2 focus:ring-black bg-gray-100 border border-gray-200 rounded-lg h-96 flex flex-col items-center justify-center text-xs text-gray-400 p-4 text-center">
                <span className="focus:outline-none focus:ring-2 focus:ring-black font-semibold text-gray-500 mb-1">[ Smart AI Scan Upload Screen Placeholder ]</span>
                <span>Desktop Upload Interface & Step Indicator</span>
              </div>
              <p className="focus:outline-none focus:ring-2 focus:ring-black text-xs text-center text-gray-500 italic">
                Responsive Wireframe Exploration: Desktop and mobile layouts highlighting core content modules and structural annotations, used during stakeholder alignment workshops to refine UX flow prior to UI kit implementation.
              </p>
            </div>

            <div className="focus:outline-none focus:ring-2 focus:ring-black space-y-2">
              <div className="focus:outline-none focus:ring-2 focus:ring-black bg-gray-100 border border-gray-200 rounded-lg h-96 flex flex-col items-center justify-center text-xs text-gray-400 p-4 text-center">
                <span className="focus:outline-none focus:ring-2 focus:ring-black font-semibold text-gray-500 mb-1">[ Smart AI Scan Diagnostic Results Screen Placeholder ]</span>
                <span>German Cockroach Identification & Threat Assessment</span>
              </div>
              <p className="focus:outline-none focus:ring-2 focus:ring-black text-xs text-center text-gray-500 italic">
                Verdantia Sciences UI Kit Engine: Tokenized color scales, interactive button matrices, multi-breakpoint Expert Cards, and pre-assembled Media Asset components built with Figma Auto-Layout.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: The Context & The Moment of Conflict */}
        <section className="focus:outline-none focus:ring-2 focus:ring-black space-y-6 border-t border-gray-100 pt-8">
          <p className="focus:outline-none focus:ring-2 focus:ring-black text-base text-gray-900 leading-relaxed">
            <strong>The Context:</strong> Mid-funnel prospects actively researching pest threats often bounce when confronted with generic service pages or premature sales pitches. They seek diagnostic clarity and validation first.
          </p>
          <p className="focus:outline-none focus:ring-2 focus:ring-black text-base text-gray-900 leading-relaxed">
            <strong>The Moment of Conflict:</strong> Standard mid-funnel content was passive and text-heavy, failing to resolve specific user doubts. Users got stuck in an "evaluation loop" and left the platform to seek secondary opinions, causing high drop-offs prior to quote requests.
          </p>

          <div className="focus:outline-none focus:ring-2 focus:ring-black space-y-2 pt-4">
            <div className="focus:outline-none focus:ring-2 focus:ring-black bg-gray-100 border border-gray-200 rounded-lg h-96 flex flex-col items-center justify-center text-xs text-gray-400 p-4 text-center">
              <span className="focus:outline-none focus:ring-2 focus:ring-black font-semibold text-gray-500 mb-1">[ User Journey Map Placeholder ]</span>
              <span>4-Phase User Journey Matrix: Research → Smart Scan → Diagnosis & Risk → Intent Hand-Off</span>
            </div>
            <p className="focus:outline-none focus:ring-2 focus:ring-black text-xs text-center text-gray-500 italic">
              The 4-phase User Journey Map Matrix (Rachel - Data Analyst) mapping Research → Smart Scan → Diagnosis & Risk → Intent Hand-Off across Actions, Quotes, Mindsets, UI Touchpoints, and KPIs.
            </p>
          </div>
        </section>

        {/* Section 4: System Architecture & Wire-framing */}
        <section className="focus:outline-none focus:ring-2 focus:ring-black space-y-6 border-t border-gray-100 pt-8">
          <h2 className="focus:outline-none focus:ring-2 focus:ring-black text-2xl font-bold text-gray-900">
            System Architecture & Wire-framing
          </h2>

          <ul className="focus:outline-none focus:ring-2 focus:ring-black space-y-3 text-sm text-gray-700 list-disc pl-5">
            <li>
              <strong>Mid-Funnel Consideration Journey:</strong> Mapped an interactive consideration flow: Consideration Landing Hub → Dual-Option AI Smart Scan → Interactive Species & Risk Profile → Targeted Service Recommendation & Lead Hand-off.
            </li>
            <li>
              <strong>Behavioral Nurturing & Dual Image Inputs:</strong> Designed a flexible input modal enabling users to either <em>snap a live photo with framing guides</em> or <em>upload an existing photo from their device library</em>, eliminating friction for users who documented the pest issue earlier.
            </li>
            <li>
              <strong>Fluid Responsive Grids:</strong> Configured adaptive spatial rules to guarantee a consistent visual hierarchy across Mobile, Tablet, and Desktop viewports.
            </li>
          </ul>

          <div className="focus:outline-none focus:ring-2 focus:ring-black space-y-4 pt-4">
            <h3 className="focus:outline-none focus:ring-2 focus:ring-black text-lg font-bold text-gray-900">
              Systemic Pipeline Mapping: Dual Ingestion & AI Classification Architecture
            </h3>
            <p className="focus:outline-none focus:ring-2 focus:ring-black text-base text-gray-700 leading-relaxed">
              To support users and field operators handling pest identification under varied environmental conditions, I architected a dual-capture ingestion model. The pipeline routes both live optical streams and local file uploads through a standardized AI feature extraction engine, enforcing strict confidence thresholds before triggering operational alerts.
            </p>

            <ul className="focus:outline-none focus:ring-2 focus:ring-black space-y-3 text-sm text-gray-700 list-disc pl-5">
              <li>
                <strong>Dual Ingestion Channels (Green / Blue Nodes):</strong> Supports instant optical capture via Live Camera Viewfinder alongside Gallery File Drag-and-Drop uploads with automated resolution checks and metadata extraction.
              </li>
              <li>
                <strong>AI Processing Core (Purple Nodes):</strong> Ingests raw media to execute biological marker scanning, morphological analysis, and pattern recognition.
              </li>
              <li>
                <strong>Classification & Risk Assignment (Blue / Orange Nodes):</strong> Cross-references extracted features against species databases to compute confidence scores and assign environmental risk tiers.
              </li>
              <li>
                <strong>Actionable Triage Gate (Red / Yellow / Green Nodes):</strong> Evaluates classification results to automatically execute High Risk or Low Risk operational triggers, preventing unnecessary field escalations and false positives.
              </li>
            </ul>

            <div className="focus:outline-none focus:ring-2 focus:ring-black space-y-2 pt-4">
              <div className="focus:outline-none focus:ring-2 focus:ring-black bg-gray-100 border border-gray-200 rounded-lg h-96 flex flex-col items-center justify-center text-xs text-gray-400 p-4 text-center">
                <span className="focus:outline-none focus:ring-2 focus:ring-black font-semibold text-gray-500 mb-1">[ System Architecture Pipeline Diagram Placeholder ]</span>
                <span>Color-Coded Dual Ingestion & AI Classification Flowchart</span>
              </div>
              <p className="focus:outline-none focus:ring-2 focus:ring-black text-xs text-center text-gray-500 italic">
                Dual-Capture Ingestion & AI Pipeline: Color-coded architecture diagram mapping optical capture (Green) and file ingestion (Blue) through AI feature extraction (Purple) to drive confidence scoring and automated risk triggers (Red/Yellow)
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Interactive Solution Showcase */}
        <section className="focus:outline-none focus:ring-2 focus:ring-black space-y-6 border-t border-gray-100 pt-8">
          <h2 className="focus:outline-none focus:ring-2 focus:ring-black text-2xl font-bold text-gray-900">
            Interactive Solution Showcase:
          </h2>

          <ul className="focus:outline-none focus:ring-2 focus:ring-black space-y-3 text-sm text-gray-700 list-disc pl-5">
            <li>
              <strong>Dedicated Diagnostic Hub:</strong> Mid-funnel entry point focused on problem resolution rather than hard sales.
            </li>
            <li>
              <strong>AI Visual Identification Tool:</strong> Instant photo upload delivering a confidence-scored diagnosis, behavioral facts, and severity assessment.
            </li>
            <li>
              <strong>Consideration-to-Action Hand-off:</strong> Contextual callout matching the diagnosed pest directly with specialized local service plans and instant estimate calculators.
            </li>
          </ul>

          <div className="focus:outline-none focus:ring-2 focus:ring-black space-y-4 pt-2">
            <p className="focus:outline-none focus:ring-2 focus:ring-black text-base text-gray-900 leading-relaxed">
              <strong>Critical Design Iteration:</strong> Shifted the booking and quote trigger to appear immediately alongside the diagnostic results, pre-populating the form with the identified species and moving users from problem discovery to solution checkout in a single continuous flow.
            </p>

            <div className="focus:outline-none focus:ring-2 focus:ring-black bg-gray-100 border border-gray-200 rounded-lg h-96 flex flex-col items-center justify-center text-xs text-gray-400 p-4 text-center">
              <span className="focus:outline-none focus:ring-2 focus:ring-black font-semibold text-gray-500 mb-1">[ End-to-End User Journey Desktop & Mobile Screen Layouts Placeholder ]</span>
              <span>10 Desktop & Mobile Viewports Showcase</span>
            </div>

            <p className="focus:outline-none focus:ring-2 focus:ring-black text-xs text-center text-gray-500 italic">
              End to end journey, from entry point to results
            </p>
          </div>
        </section>

        {/* Section 6: Business Impact Metrics */}
        <section className="focus:outline-none focus:ring-2 focus:ring-black border-t border-gray-100 pt-12 space-y-8">
          <h2 className="focus:outline-none focus:ring-2 focus:ring-black text-xs font-bold tracking-widest uppercase text-gray-900">
            BUSINESS IMPACT METRICS
          </h2>

          <div className="focus:outline-none focus:ring-2 focus:ring-black grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
            <div>
              <span className="focus:outline-none focus:ring-2 focus:ring-black text-4xl sm:text-5xl font-normal text-gray-600 block mb-3">&lt; 35%</span>
              <p className="focus:outline-none focus:ring-2 focus:ring-black text-base font-bold text-gray-900 leading-snug">
                Bounce Rate
              </p>
            </div>
            <div>
              <span className="focus:outline-none focus:ring-2 focus:ring-black text-4xl sm:text-5xl font-normal text-gray-600 block mb-3">&gt; 85%</span>
              <p className="focus:outline-none focus:ring-2 focus:ring-black text-base font-bold text-gray-900 leading-snug">
                Scan Completion
              </p>
            </div>
            <div>
              <span className="focus:outline-none focus:ring-2 focus:ring-black text-4xl sm:text-5xl font-normal text-gray-600 block mb-3">&gt; 90%</span>
              <p className="focus:outline-none focus:ring-2 focus:ring-black text-base font-bold text-gray-900 leading-snug">
                Match Accuracy
              </p>
            </div>
            <div>
              <span className="focus:outline-none focus:ring-2 focus:ring-black text-4xl sm:text-5xl font-normal text-gray-600 block mb-3">+30%</span>
              <p className="focus:outline-none focus:ring-2 focus:ring-black text-base font-bold text-gray-900 leading-snug">
                Lead Progression
              </p>
            </div>
          </div>

          <div className="focus:outline-none focus:ring-2 focus:ring-black space-y-3 pt-4">
            <p className="focus:outline-none focus:ring-2 focus:ring-black text-base font-bold text-gray-900">Context & Strategic Value:</p>
            <ul className="focus:outline-none focus:ring-2 focus:ring-black space-y-3 text-sm text-gray-700 list-disc pl-5">
              <li>Reduced upfront bounce by removing mandatory contact forms prior to scan.</li>
              <li>High completion rate driven by offering dual camera capture and gallery upload options.</li>
              <li>Diagnostic accuracy verified by backend AI species classification models.</li>
              <li>Increase in mid-to-lower funnel conversion by pre-filling quotes with diagnostic data.</li>
            </ul>
          </div>
        </section>

        {/* Section 7: Key Strategic Lesson */}
        <section className="focus:outline-none focus:ring-2 focus:ring-black border-t border-gray-100 pt-12 space-y-4">
          <h2 className="focus:outline-none focus:ring-2 focus:ring-black text-xs font-bold tracking-widest uppercase text-gray-900">
            KEY STRATEGIC LESSON
          </h2>
          <p className="focus:outline-none focus:ring-2 focus:ring-black text-base text-gray-900 leading-relaxed">
            When designing consumer AI utilities in high-anxiety situations, immediate diagnostic clarity builds trust. Providing zero-friction entry points like gallery photo uploads converts user uncertainty into confident buying intent, making the subsequent service quote feel like helpful guidance rather than a hard sales pitch.
          </p>
        </section>

        {/* Footer Navigation */}
        <footer className="focus:outline-none focus:ring-2 focus:ring-black border-t border-gray-100 pt-8 flex justify-between items-center text-xs text-gray-500">
          <Link to="/case-study/news-media" className="focus:outline-none focus:ring-2 focus:ring-black hover:text-black transition">
            ← PREVIOUS CASE STUDY
          </Link>
          <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-black hover:text-black transition">
            BACK TO HOME →
          </Link>
        </footer>
      </main>
    
      {/* Global Footer */}
      <footer className="focus:outline-none focus:ring-2 focus:ring-black w-full border-t border-gray-100 bg-white mt-16">
        <div className="focus:outline-none focus:ring-2 focus:ring-black max-w-6xl mx-auto px-12 py-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="focus:outline-none focus:ring-2 focus:ring-black space-y-1 text-left">
            <p className="focus:outline-none focus:ring-2 focus:ring-black font-bold text-gray-900 text-sm">Patricia Chavira</p>
            <p className="focus:outline-none focus:ring-2 focus:ring-black font-mono text-gray-500">
              © 2026 · Guadalajara, MX · Product Designer
            </p>
          </div>

          <div className="focus:outline-none focus:ring-2 focus:ring-black flex items-center gap-8 text-gray-600 font-medium">
            <a href="/#work" className="focus:outline-none focus:ring-2 focus:ring-black hover:text-black transition-colors">Work</a>
            <a href="/#about" className="focus:outline-none focus:ring-2 focus:ring-black hover:text-black transition-colors">About</a>
            <a href="/#contact" className="focus:outline-none focus:ring-2 focus:ring-black hover:text-black transition-colors">Contact</a>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="focus:outline-none focus:ring-2 focus:ring-black hover:text-black transition-colors flex items-center gap-1 font-medium cursor-pointer"
            >
              ↑ Top
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
