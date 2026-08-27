export default function BoardMember() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-24">
      {/* Top Navigation */}
      <header className="max-w-5xl mx-auto w-full px-6 pt-12 pb-8 flex justify-between items-center text-xs tracking-widest uppercase font-semibold text-gray-900 border-b border-gray-100">
        <a href="/" className="font-extrabold text-sm tracking-normal hover:text-blue-900 transition-colors">← Back to Portfolio</a>
        <div className="flex items-center gap-6 text-gray-700">
          <a href="/" className="hover:text-gray-950 transition-colors">Work</a>
          <a href="/#about" className="hover:text-gray-950 transition-colors">About</a>
          <a href="/#contact" className="hover:text-gray-950 transition-colors">Contact</a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-12 mt-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase">02 EXECUTIVE DASHBOARDS & RISK TELEMETRY</div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Board Member Intelligence Portal
          </h1>
          <p className="text-xl text-gray-800 leading-relaxed max-w-4xl">
            Replacing static 80-page board decks with real-time, interactive risk telemetry and AI-synthesized executive briefings.
          </p>
        </div>

        {/* Business Outcomes Section */}
        <div className="space-y-6 pt-12 border-t border-gray-100">
          <p className="text-lg text-gray-800 leading-relaxed">
            <strong>Business Outcomes:</strong> Dramatically reduced board prep time by replacing 80-page decks with real-time, interactive risk telemetry and AI-synthesized briefings. Enabled instant root-cause analysis and scenario planning during live meetings.
          </p>
        </div>

        {/* Key Strategic Lesson Section */}
        <div className="space-y-6 pt-12 border-t border-gray-100">
          <h2 className="text-xl font-bold tracking-widest uppercase text-gray-950">
            KEY STRATEGIC LESSON
          </h2>
          <div className="p-8 bg-gray-50/60 rounded-2xl border-l-4 border-gray-950 text-gray-800 text-base sm:text-lg leading-relaxed">
            Designing for C-level leadership under tight timelines requires rapid stakeholder alignment and aggressive synthesis—prioritizing immediate clarity, contextual drill-downs, and actionable insights over sheer volume of data.
          </div>
        </div>

        {/* Case Study Navigation Footer */}
        <div className="pt-16 border-t border-gray-100 flex justify-between items-center text-xs font-bold tracking-widest uppercase text-gray-900">
          <a href="/case-study/agentic-chro" className="hover:text-blue-900 transition-colors">
            ← BACK TO CASE STUDY: AGENTIC CHRO
          </a>
          <a href="/case-study/news-media" className="hover:text-blue-900 transition-colors">
            NEXT CASE STUDY: NEWS MEDIA →
          </a>
        </div>
      </main>

      {/* Global Footer */}
      <footer className="max-w-5xl mx-auto px-6 pt-20 border-t border-gray-100 mt-20 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <div>
          <div className="font-bold text-gray-900 mb-1">Patricia Chavira</div>
          <div>© 2026 · Guadalajara, MX · Product Designer</div>
        </div>
        <div className="flex gap-6 items-center">
          <a href="/" className="hover:text-gray-900 transition-colors">Work</a>
          <a href="/#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="/#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          <a href="#" className="hover:text-gray-900 transition-colors">↑ Top</a>
        </div>
      </footer>
    </div>
  );
}
