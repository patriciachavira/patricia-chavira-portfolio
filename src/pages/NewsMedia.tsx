import { Link } from "react-router-dom";

export default function NewsMedia() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
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

      <main className="max-w-5xl mx-auto px-8 sm:px-16 py-8 flex-grow w-full">
        
        {/* Hero Section */}
        <div className="space-y-6 mb-16">
          <div className="text-xs font-bold tracking-widest text-gray-500 uppercase">
            03 — UI KIT & DESIGN SYSTEM ARCHITECTURE
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-950">
            News-Media Page Redesign & Scalable UI Kit
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed font-normal">
            Re-architecting a legacy digital media platform and engineering a comprehensive modular UI kit from scratch to maximize editorial velocity, mobile responsiveness, and WCAG 2.1 AAA color and contrast compliance.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Building a modular UI kit and editorial page framework required balancing surface-level content density with rigorous high-contrast, accessible design standards—empowering editorial teams to scale breaking news without breaking the design system.
          </p>

          {/* Metadata Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gray-50/60 rounded-2xl border border-gray-100 mt-8">
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Role:</div>
              <div className="text-sm font-semibold text-gray-900">Product Designer & Systems Architect</div>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Scope:</div>
              <div className="text-sm font-semibold text-gray-900">Responsive Web / Design System Migration</div>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Tools & Timeline:</div>
              <div className="text-sm font-semibold text-gray-900">3 Weeks - 2026 | Figma (Tokens, Auto-Layout, Variants)</div>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Stakeholders:</div>
              <div className="text-sm font-semibold text-gray-900">WCAG 2.1 AAA Color & Contrast Alignment | 100% Component Reusability</div>
            </div>
          </div>

          {/* NDA Disclaimer */}
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200/60 text-xs text-gray-600 leading-relaxed flex items-start gap-3">
            <span className="text-base">🔒</span>
            <div>
              <strong className="text-gray-900 font-semibold">Global Confidentiality & NDA Disclaimer:</strong> To comply with Non-Disclosure Agreements (NDAs), proprietary client names, live customer PII, and sensitive business metrics across these case studies have been sanitized or generalized. All designs, interaction models, and system architectures reflect my personal strategic direction and UX execution.
            </div>
          </div>
        </div>

      
        {/* Legacy Audit & Format Section */}
        <div className="space-y-12 my-16 border-t border-gray-100 pt-16">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-950">The Format</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To align with a rapidly consumer-driven refresh, the legacy desktop layout was being re-architected to a new-look shell-centric layout, requiring a fully modular, ground-up redesign to match the updated brand identity.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-950">The Moment of Conflict</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Re-architecting a grid system across desktop and mobile while preserving publication speed also introduced a critical risk of design system fragmentation and user engagement friction during live newsroom cycles.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-950">Legacy System Audit</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The audit exposed a bloated, overlapping multi-brand publishing ecosystem with a fragmented asset library, duplicating low-level design tokens and high cognitive overhead for digital designers and developers alike.
            </p>

            <ul className="space-y-2 text-gray-700 list-disc pl-5 text-lg">
              <li><strong className="text-gray-950">Audit Finding 01:</strong> Fragmented grids and multi-brand publishing overlap creating high cognitive load.</li>
              <li><strong className="text-gray-950">Audit Finding 02:</strong> Contrast failures and rigid code dependencies limiting editorial speed.</li>
            </ul>

            {/* Image display */}
            <div className="bg-gray-50/50 p-6 sm:p-8 rounded-2xl border border-gray-100 my-8 space-y-4">
              <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                <img src="/images/media-page/Media page 1.png" alt="Legacy System Audit" className="w-full rounded-lg border border-gray-100 object-cover" />
              </div>
              <p className="text-xs text-center text-gray-500 italic">
                Legacy System Audit: Identifying visual clutter, contrast failures, fragmented grids, and rigid code dependencies in the legacy newsroom layout.
              </p>
            </div>
          </div>
        </div>

      
        {/* Sketches, System Architecture & Wireframing & UI Kit */}
        <div className="space-y-16 my-16 border-t border-gray-100 pt-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-950">Sketches, System Architecture & Wireframing</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To modernize legacy publishing workflows and transition to accessibility-first frameworks, I established a strict structural foundation driving cross-departmental alignment. Key elements focused on modular layouts and automated validation tools while supporting strict information hierarchy:
            </p>

            <ul className="space-y-3 text-gray-700 list-disc pl-5 text-lg">
              <li><strong className="text-gray-950">Design Token Architecture:</strong> Established a robust foundation for color contrast, typography tokens, and spacing tokens, mapped directly to design tokenized JSON variables to ensure design to development consistency.</li>
              <li><strong className="text-gray-950">Modular Component Architecture:</strong> Built a comprehensive layout component library—using export profiles across Desktop (1440px), and Mobile breakpoints—designed to handle variable news layouts and high frequency live-editorial updates.</li>
              <li><strong className="text-gray-950">Fluid Responsive Grids:</strong> Configured an 8 column flexible system to seamlessly adjust whitespace and guarantee elite tier layout performance across multi-device user environments.</li>
            </ul>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-gray-950">New Verdantia Sciences Media Center</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Enhancing brand credibility as an industry leader with a modern, cohesive design aligned to the Verdantia website for a consistent brand experience.
              </p>
            </div>

            {/* Desktop & Mobile Wireframes Image */}
            <div className="bg-gray-50/50 p-6 sm:p-8 rounded-2xl border border-gray-100 my-8 space-y-4">
              <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                <img src="/images/media-page/Media page-2.png" alt="Desktop and Mobile Wireframes" className="w-full rounded-lg border border-gray-100 object-cover" />
              </div>
              <p className="text-xs text-center text-gray-500 italic">
                Responsive Architecture & Breakpoint Strategy: Mapping new editorial modules across Desktop (1440px) and Mobile viewpoints to validate layout adaptability, information hierarchy, and touch target optimization prior to component fabrication.
              </p>
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-950">UI Kit : Scalable Architecture</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A modular accessible component library designed to reduce design debt.
            </p>

            {/* UI Kit Components Image */}
            <div className="bg-gray-50/50 p-6 sm:p-8 rounded-2xl border border-gray-100 my-8 space-y-4">
              <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                <img src="/images/media-page/Media page 3.png?v=1787779170492" alt="UI Kit Scalable Architecture" className="w-full rounded-lg border border-gray-100 object-cover" />
              </div>
              <p className="text-xs text-center text-gray-500 italic">
                UI Kit & Scalable Component Architecture: A modular, accessible design system detailing semantic color contrast tokens, multi-viewport button matrices, and responsive expert and PR card variations engineered to eliminate design debt.
              </p>
            </div>
          </div>
        </div>

      
        {/* UI Kit Scalable Architecture & Core Highlights */}
        <div className="space-y-16 my-16 border-t border-gray-100 pt-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-950">UI Kit : Scalable Architecture</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Translating the architecture identified in our legacy audit into a near-production-ready, tokenized design system required deep structural iteration. The solution delivers a high-density Figma UI kit, focused on modular layout structures, accessible component hierarchies, and scale across multi-brand enterprise channels:
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-gray-950">Core UI Kit Highlights:</h3>
              <ul className="space-y-3 text-gray-700 list-disc pl-5 text-lg">
                <li><strong className="text-gray-950">AAA Contrast Semantic Tokens:</strong> Mapped high-contrast color palettes (Nightsky blues for structural framing, Sky accents, Forest/VerdantiaGreen anchors, and Sunlight callouts) meeting strict 7:1 AAA contrast ratios for all core text and UI controls across dark and light surfaces.</li>
                <li><strong className="text-gray-950">Accessible CTA Variant Matrix:</strong> Mapped high-contrast, accessible design token systems for structured readability, guaranteeing WCAG AAA compliance across dark and daylight viewing modes, and strict color contrast ratios for critical alerts and structural cards.</li>
                <li><strong className="text-gray-950">Modular Component Variants:</strong> Built modular content blocks (Hero, Lead Story, Teaser List) with flexible typography scales and content-density templates to gracefully accommodate breaking news, reader comments, and rich metadata.</li>
                <li><strong className="text-gray-950">Drag-and-Drop Editorial Modules:</strong> Delivered an assembled UI toolkit featuring modular components to publish accessible, scannable storylines and dynamic breaking-news blocks without breaking the structural information grid.</li>
              </ul>
            </div>

            <div className="space-y-6 pt-8">
              <h3 className="text-2xl font-bold text-gray-950">Interactive Solution Showcase: Tokenized UI & UI Kit</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Translating the legacy audit into a production-ready, responsive media hub built from modular design tokens
              </p>

              {/* Showcase Image */}
              <div className="bg-gray-50/50 p-6 sm:p-8 rounded-2xl border border-gray-100 my-8 space-y-4">
                <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                  <img src="/images/media-page/Media page 4.png" alt="Interactive Solution Showcase" className="w-full rounded-lg border border-gray-100 object-cover" />
                </div>
                
                <p className="text-xs text-center text-gray-500 italic mt-2">
                  A fully assembled, WCAG 2.1 AAA color- and contrast-compliant responsive media hub featuring desktop viewports, mobile interaction states, and modular component systems built from scalable design tokens.
                </p>
              </div>
            </div>
          </div>
        </div>

      
        {/* Outcomes & Business Impact */}
        <div className="space-y-12 my-16 border-t border-gray-100 pt-16">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-950 uppercase tracking-wide">Outcomes & Business Impact</h2>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-4xl font-extrabold text-gray-950 mb-2">80%</div>
                <div className="text-sm font-semibold text-gray-700">Projected Editorial Page Assembly Speed</div>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-4xl font-extrabold text-gray-950 mb-2">100%</div>
                <div className="text-sm font-semibold text-gray-700">Component Reusability Across Design Templates</div>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-4xl font-extrabold text-gray-950 mb-2">WCAG 2.1 AAA</div>
                <div className="text-sm font-semibold text-gray-700">Accessible Color & Contrast Patterns</div>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed pt-2">
              <strong className="text-gray-950">Business Outcomes:</strong> The design system architecture is currently being deployed to the new host, already achieving 100% component reusability and establishing a WCAG 2.1 AAA color and contrast framework that is projected to cut editorial publishing times by 80% post-launch.
            </p>
          </div>

          {/* Key Strategic Lesson */}
          <div className="space-y-6 pt-8 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-950 uppercase tracking-wide">Key Strategic Lesson</h2>
            
            <div className="p-6 bg-gray-50/70 rounded-2xl border-l-4 border-gray-950 shadow-sm">
              <p className="text-lg text-gray-800 leading-relaxed italic font-medium">
                "A design system’s primary user is the internal content team; true system scalability depends on editorial ergonomics, structured design tokens, and seamless workflow efficiency."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="max-w-5xl mx-auto w-full flex justify-between items-center py-12 border-t border-gray-100 mt-16">
          <button 
            onClick={() => window.location.href = "/"} 
            className="text-sm font-bold text-gray-950 hover:text-gray-600 transition-colors flex items-center gap-2 cursor-pointer bg-transparent border-none p-0"
          >
            ← BACK TO CASE STUDIES
          </button>
          <Link to="/case-study/ai-pest-id" className="text-sm font-bold text-gray-950 hover:text-gray-600 transition-colors flex items-center gap-2">
            NEXT CASE STUDY: AI PEST ID →
          </Link>
        </div>

      </main>

      {/* Global Footer */}
      <footer className="max-w-5xl mx-auto w-full px-8 sm:px-16 py-16 border-t border-gray-100 text-xs text-gray-600 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-24">
        <div>
          <div className="font-bold text-gray-950 text-sm mb-1">Patricia Chavira</div>
          <div className="text-gray-500">© 2026 · Guadalajara, MX · Product Designer</div>
        </div>
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <a href="/#work" className="hover:text-gray-950 transition-colors">Work</a>
          <a href="/#about" className="hover:text-gray-950 transition-colors">About</a>
          <a href="/#contact" className="hover:text-gray-950 transition-colors">Contact</a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-gray-950 transition-colors cursor-pointer bg-transparent border-none p-0">↑ Top</button>
        </div>
      </footer>
    </div>
  );
}
