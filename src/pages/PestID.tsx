import { Link } from 'react-router-dom';

export default function PestID() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-24">
      {/* Navigation Header */}
            {/* Top Navigation */}
      <header className="max-w-5xl mx-auto w-full px-6 pt-12 pb-8 flex justify-between items-center text-xs tracking-widest uppercase font-semibold text-gray-900 border-b border-gray-100 mb-12">
        <Link to="/" className="font-extrabold text-sm tracking-normal hover:text-blue-900 transition-colors">← Back to Portfolio</Link>
        <div className="flex items-center gap-6 text-gray-700">
          <Link to="/" className="hover:text-gray-950 transition-colors">Work</Link>
          <Link to="/#about" className="hover:text-gray-950 transition-colors">About</Link>
          <Link to="/#contact" className="hover:text-gray-950 transition-colors">Contact</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Section: Hero Header */}
        <section>
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
            04 — UTILITY & MID-FUNNEL CONSIDERATION
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            AI Pest ID Tool & Mid-Funnel Consideration Experience
          </h1>

          <p className="text-xl font-normal text-gray-900 leading-relaxed max-w-4xl mb-6">
            Designing an interactive mid-funnel diagnostic tool that validates consumer pest concerns through AI visual identification, bridging the gap between problem discovery and service consideration.
          </p>

          <p className="text-xl font-normal text-gray-900 leading-relaxed max-w-4xl mb-8">
            Transformed ambiguous consumer uncertainty into active decision-making by creating a zero-friction diagnostic bridge that nurtures high-intent prospects toward targeted solutions.
          </p>

          {/* 4-Column Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50/80 p-5 rounded-lg text-xs border border-gray-100 mb-8">
            <div className="border-r sm:border-r-0 md:border-r border-gray-200 pr-2">
              <span className="block font-bold text-gray-900 mb-1">Role:</span>
              <span className="text-gray-700">Lead Product Designer & UX Strategist</span>
            </div>
            <div className="border-r sm:border-r-0 md:border-r border-gray-200 pr-2">
              <span className="block font-bold text-gray-900 mb-1">Scope:</span>
              <span className="text-gray-700">Consumer B2C Web / Mid-Funnel Diagnostic Tool / Lead Nurturing</span>
            </div>
            <div className="border-r sm:border-r-0 md:border-r border-gray-200 pr-2">
              <span className="block font-bold text-gray-900 mb-1">Tools & Timeline:</span>
              <span className="text-gray-700">4 Weeks - 2026 | Figma, Claude, Behavioral UX Design, CRO Testing</span>
            </div>
            <div>
              <span className="block font-bold text-gray-900 mb-1">Stakeholders:</span>
              <span className="text-gray-700">Accelerated consideration velocity; +30% lead progression; &gt;85% scan completion</span>
            </div>
          </div>

          {/* NDA Disclaimer */}
          <div className="bg-gray-50 border border-gray-200/60 rounded-md p-4 text-xs text-center text-gray-900 leading-relaxed">
            🔒 <strong className="font-bold italic">Global Confidentiality & NDA Disclaimer:</strong> <span className="italic">To comply with Non-Disclosure Agreements (NDAs), proprietary client names, live customer PII, and sensitive business metrics across these case studies have been sanitized or generalized. All designs, interaction models, and system architectures reflect my personal strategic direction and UX execution.</span>
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="border-t border-gray-100 pt-8 flex justify-between items-center text-xs text-gray-500">
          <Link to="/case-study/news-media" className="hover:text-black transition">
            ← PREVIOUS CASE STUDY
          </Link>
          <Link to="/" className="hover:text-black transition">
            BACK TO HOME →
          </Link>
        </footer>
      </main>
    </div>
  );
}
