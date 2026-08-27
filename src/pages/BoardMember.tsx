import { Link } from 'react-router-dom';

export default function BoardMember() {
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
            02 — SCALE EXECUTIVE ANALYTICS &amp; HIGH-DENSITY SYSTEMS
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight">
            Board Member Decision Cockpit
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed font-normal">
            Architecting a high-density executive analytics cockpit that synthesizes complex organizational data via multi-agent AI for board-level decision-making.
          </p>
          <p className="text-base text-gray-700 leading-relaxed font-normal">
            Transformed static, 80+ page pre-read PDF board decks into an interactive, real-time analytics cockpit featuring AI-synthesized executive takeaways and real-time drill-downs.
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50/80 border border-gray-200/80 rounded-xl text-xs divide-y md:divide-y-0 md:divide-x divide-gray-200/80">
            <div className="pt-2 md:pt-0 md:pr-4 first:pt-0">
              <p className="font-bold text-gray-900 uppercase tracking-wider mb-1">Role:</p>
              <p className="font-normal text-gray-700">Lead Product Designer &amp; Information Architect</p>
            </div>
            <div className="pt-2 md:pt-0 md:px-4">
              <p className="font-bold text-gray-900 uppercase tracking-wider mb-1">Scope:</p>
              <p className="font-normal text-gray-700">Executive UX / Data Visualization / Agentic Workflows</p>
            </div>
            <div className="pt-2 md:pt-0 md:px-4">
              <p className="font-bold text-gray-900 uppercase tracking-wider mb-1">Tools &amp; Timeline:</p>
              <p className="font-normal text-gray-700">2 Weeks - 2026 | Figma, Figma Make, FigJam, Complex Design Systems</p>
            </div>
            <div className="pt-2 md:pt-0 md:pl-4">
              <p className="font-bold text-gray-900 uppercase tracking-wider mb-1">Stakeholders:</p>
              <p className="font-normal text-gray-700">Replaced 80-page static pre-read PDFs with a real-time, interactive board-level analytics cockpit.</p>
            </div>
          </div>

          {/* Confidentiality Disclaimer */}
          <div className="bg-gray-50/80 border border-gray-200/80 rounded-lg p-4 text-xs text-center text-gray-700 leading-relaxed">
            🔒 <span className="font-semibold italic">Global Confidentiality &amp; NDA Disclaimer: To comply with Non-Disclosure Agreements (NDAs), proprietary client names, live customer PII, and sensitive business metrics across these case studies have been sanitized or generalized. All designs, interaction models, and system architectures reflect my personal strategic direction and UX execution.</span>
          </div>
        </section>

        
        {/* Context & Moment of Conflict */}
        <section className="space-y-6 text-gray-800">
          <p className="text-base leading-relaxed">
            <strong className="text-black">The Context:</strong> Board members and C-suite executives review vast amounts of disconnected financial, operational, and regulatory compliance data (such as BCBS 239 metrics) prior to strategic governance meetings.
          </p>
          <p className="text-base leading-relaxed">
            <strong className="text-black">The Moment of Conflict:</strong> Information fragmentation led to severe cognitive overload, misaligned prep work, and inefficient board meetings spent questioning static metrics rather than taking accountable strategic action.
          </p>
        </section>

        {/* Accelerated Architecture & Collaborative Alignment */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Accelerated Architecture &amp; Collaborative Alignment</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Brought into the project to rapidly design and prototype the <em className="text-black font-semibold">Board Member Decision Cockpit</em> in Figma Make, I bypassed traditional, prolonged sketching phases to move directly from experience mapping to high-velocity prototyping. I mapped out the initial experience journey&mdash;spanning from reported metrics to confident decisions&mdash;and refined the architecture across <strong className="text-black">3 co-creation workshops in FigJam</strong> with key business and technical stakeholders.
          </p>
        </section>

        {/* Mapping the Proposed Experience Journey */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Mapping the Proposed Experience Journey</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            The architecture evolved from a static linear journey into a multi-layered, interactive decision cockpit:
          </p>
          <div className="w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 p-4">
            <img 
              src="/images/board-member/flow.png" 
              alt="The Decision Cockpit 3-phase layout transforming a linear data flow into a modular executive decision pipeline" 
              className="w-full h-auto object-cover rounded-xl"
              onError={(e) => { (e.target as HTMLVideoElement).src = "/video/board-member/board-decision-cockpit-walkthrough.mov"; }}
            />
            <p className="text-xs text-center text-gray-500 mt-3 font-mono">Proposed Experience Journey mapped and validated across 3 collaborative FigJam workshops with key stakeholders.</p>
          </div>
        </section>

        
        {/* Structuring High-Density Telemetry & Information Hierarchy */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Structuring High-Density Financial &amp; Compliance Telemetry</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Given the aggressive timeline, I leveraged <em className="text-black font-semibold">Figma Make</em> to rapidly translate architectural mental models into dynamic, functional wireframes. Through rapid prototyping, the theoretical logic flow evolved into a <em className="text-black font-semibold">4-screen progressive disclosure architecture</em>, deliberately structured to prevent cognitive overload while giving executive CHROs full oversight over autonomous background agents.
          </p>

          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-bold text-gray-900">Tier Information Hierarchy</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              To keep high data density scannable during high-stakes board reviews, we structured the interface across three distinct zoom levels:
            </p>
            
            <div className="space-y-4 pl-4 border-l-2 border-gray-200">
              <div>
                <h4 className="font-bold text-gray-900 text-base">Tier 1 &mdash; Macro KPIs (High-Level Summary):</h4>
                <p className="text-sm text-gray-600 mt-1">Immediate top-level metrics, capital positions, and executive risk appetite banners.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base">Tier 2 &mdash; Driver Tree (Root Cause Analysis):</h4>
                <p className="text-sm text-gray-600 mt-1">Contextual breakdown cards (Asset Support, Trust &amp; Privacy, Decision Support) allowing members to trace the &quot;why&quot; behind variance numbers.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base">Tier 3 &mdash; Granular Operational Data (Detail View):</h4>
                <p className="text-sm text-gray-600 mt-1">Non-intrusive side drawers and inline panels for line-item audits, historical trends, and AI-assisted scenario modeling.</p>
              </div>
            </div>
          </div>
        </section>

        
        {/* High-Density Layout Balancing & Interactive Solution Showcase */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-950">High-Density Layout Balancing &amp; Interactive Solution Showcase: BCBS 239 Board Decision Cockpit</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Wireframing the interface across 3 major layout variations in Figma Make allowed us to test high data density against executive cognitive load:
          </p>
          
          <ul className="space-y-3 text-base text-gray-700 pl-5 list-disc">
            <li><strong className="text-gray-900">Cockpit 1 (Hero Metric Focus):</strong> Prioritized key risk appetite signals via prominent summary cards and top-level KPI callouts.</li>
            <li><strong className="text-gray-900">Cockpit 2 (Modular Grid Layout):</strong> Balanced macro health scores with a 6-card grid for mid-level driver exploration.</li>
            <li><strong className="text-gray-900">Cockpit 3 (Split-Screen &amp; Side Drawer):</strong> Introduced a persistent left navigation bar with a dynamic right-hand inspection drawer&mdash;allowing deep-dive investigations without losing context of the main dashboard.</li>
          </ul>

          {/* Interactive Walkthrough Video Placeholder/Embed */}
          <div className="w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 p-2 shadow-sm">
            <video 
              src="/video/board-member/board-decision-cockpit-walkthrough.mov" 
              controls 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-auto rounded-xl"
            />
          </div>
          <p className="text-xs text-center text-gray-500 font-mono">Interactive Walkthrough: Demonstrating the transition from macro risk oversight to modular navigation and real-time AI side-drawer inspection.</p>

          <div className="space-y-4 pt-6">
            <h3 className="text-xl font-bold text-gray-950">Interactive Solution Showcase: BCBS 239 Board Decision Cockpit</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Following the FigJam alignment sessions, I translated our agreed flow into high-fidelity Figma Make prototypes, finalizing the interaction details in a review with the Product Owner. The outcome delivers a clean, high-density decision space featuring:
            </p>

            <ul className="space-y-3 text-base text-gray-700 pl-5 list-disc">
              <li><strong className="text-gray-900">AI-Generated Executive Summary Cards:</strong> Top-tier banners automatically synthesize complex risk data into plain-language executive briefs highlighting critical status and key drivers instantly.</li>
              <li><strong className="text-gray-900">Synchronized Global Filters &amp; Navigation:</strong> A fixed navigation sidebar enables seamless switching between Executive Summary, Risk Appetite, Trust &amp; Privacy, and Investigation Reports.</li>
              <li><strong className="text-gray-900">Contextual Side Drawer for Deep Exploration:</strong> Clicking into any driver card opens a multi-tabbed drawer (Risk Breakdown, Audit Logs, Related Metrics) for instant root-cause analysis without page jumps.</li>
            </ul>

            <div className="w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-200/80 p-2 shadow-sm mt-4">
              <img 
                src="/images/board-member/Executive Risk Governance Cockpit Ask Intelligence.png" 
                alt="Deep-Dive Regulatory Inspection: The split-screen side-drawer providing transparent, auditable answers to critical business concerns while maintaining full visibility into the active board position." 
                className="w-full h-auto rounded-xl"
              />
            </div>
            <p className="text-xs text-center text-gray-500 font-mono">Deep-Dive Regulatory Inspection: The split-screen side-drawer providing transparent, auditable answers to critical business concerns while maintaining full visibility into the active board position.</p>
          </div>
        </section>

        
        {/* Key Iterations Driven by Stakeholder Feedback */}
        <section className="space-y-6 pt-6">
          <h2 className="text-2xl font-bold text-gray-950">Key Iterations Driven by Stakeholder Feedback</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700 border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-900 font-bold">
                  <th className="py-3 pr-4">Iteration Phase</th>
                  <th className="py-3 px-4">Stakeholder Feedback</th>
                  <th className="py-3 pl-4">Design Solution &amp; Refinement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-4 pr-4 font-semibold text-gray-900 align-top">FigJam Workshop 1&ndash;2</td>
                  <td className="py-4 px-4 align-top">Needed clear visual separation between macro metrics and underlying operational drivers.</td>
                  <td className="py-4 pl-4 align-top"><strong className="text-gray-900">Structured Grid Layout:</strong> Separated top-tier KPI summaries from mid-level driver cards using modular containers.</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-semibold text-gray-900 align-top">FigJam Workshop 3</td>
                  <td className="py-4 px-4 align-top">Risk of overwhelming board members during deep investigations.</td>
                  <td className="py-4 pl-4 align-top"><strong className="text-gray-900">Slide-Out Inspection Drawer:</strong> Kept the primary dashboard visible while opening a contextual side panel for deeper telemetry.</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-semibold text-gray-900 align-top">Final PO Review</td>
                  <td className="py-4 px-4 align-top">High density of chart elements created visual noise.</td>
                  <td className="py-4 pl-4 align-top"><strong className="text-gray-900">Streamlined Inline Metrics:</strong> Replaced heavy multi-axis charts with clean sparklines, status pills, and hover-activated tooltip cards.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Outcomes & Business Impact */}
        <section className="space-y-8 pt-8 border-t border-gray-100">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-950 uppercase tracking-wider">Outcomes &amp; Business Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50/80 border border-gray-200/80 rounded-2xl space-y-2">
                <p className="text-4xl font-black text-gray-950">80+</p>
                <p className="text-sm font-semibold text-gray-800">Pages of static PDFs converted to dynamic real-time widgets</p>
              </div>
              <div className="p-6 bg-gray-50/80 border border-gray-200/80 rounded-2xl space-y-2">
                <p className="text-4xl font-black text-gray-950">100%</p>
                <p className="text-sm font-semibold text-gray-800">Single-source-of-truth alignment across C-suite executives</p>
              </div>
              <div className="p-6 bg-gray-50/80 border border-gray-200/80 rounded-2xl space-y-2">
                <p className="text-4xl font-black text-gray-950">2x</p>
                <p className="text-sm font-semibold text-gray-800">Faster meeting prep time for board members</p>
              </div>
            </div>
            <p className="text-base text-gray-700 leading-relaxed pt-2">
              <strong className="text-gray-950">Business Outcomes:</strong> Dramatically reduced board prep time by replacing 80-page decks with real-time, interactive risk telemetry and AI-synthesized briefings. Enabled instant root-cause analysis and scenario planning during live meetings.
            </p>
          </div>

          <div className="space-y-4 pt-6">
            <h3 className="text-xl font-bold text-gray-950 uppercase tracking-wider">Key Strategic Lesson</h3>
            <blockquote className="p-6 bg-gray-50/80 border-l-4 border-gray-950 rounded-r-2xl text-gray-800 text-base leading-relaxed font-normal">
              Designing for C-level leadership under tight timelines requires rapid stakeholder alignment and aggressive synthesis&mdash;prioritizing immediate clarity, contextual drill-downs, and actionable insights over sheer volume of data.
            </blockquote>
          </div>
        </section>

        {/* Case Studies Navigation */}
        <div className="flex items-center justify-between pt-12 border-t border-gray-100 text-xs font-semibold">
          <Link to="/case-study/agentic-chro">← BACK TO CASE STUDY: AGENTIC CHRO</Link>
          <Link to="/case-study/news-media" className="text-gray-900 hover:text-gray-600 transition flex items-center gap-1">NEXT CASE STUDY: NEWS MEDIA →
          </Link>
        </div>
      </main>

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
