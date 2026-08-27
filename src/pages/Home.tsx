export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-24">
      {/* Header */}
      <header className="max-w-5xl mx-auto w-full px-6 pt-12 pb-8 flex justify-between items-center text-xs tracking-widest uppercase font-semibold text-gray-900 border-b border-gray-100">
        <a href="/" className="font-extrabold text-sm tracking-normal hover:text-blue-900 transition-colors">Patricia Chavira</a>
        <div className="flex items-center gap-6 text-gray-700">
          <a href="#work" className="hover:text-gray-950 transition-colors">Work</a>
          <a href="#about" className="hover:text-gray-950 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-950 transition-colors">Contact</a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-24 mt-16">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase">Product & UX/UI Designer</div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-950 tracking-tight leading-tight max-w-4xl">
            Designing systemic clarity for enterprise AI, telemetry dashboards, and complex digital workflows.
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
            I bridge human intent and autonomous platform mechanics through high-density UI, transparent governance controls, and progressive disclosure architectures.
          </p>
        </div>

        {/* Selected Work Grid */}
        <section id="work" className="space-y-12 pt-12 border-t border-gray-100">
          <div className="flex justify-between items-end">
            <div>
              <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Selected Case Studies</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">Featured Projects</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <a href="/case-study/agentic-chro" className="group block p-8 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-md">
              <div className="text-xs font-bold tracking-widest text-blue-900 uppercase mb-3">01 · Enterprise AI</div>
              <h3 className="text-2xl font-bold text-gray-950 group-hover:text-blue-900 transition-colors mb-3">Agentic CHRO Onboarding Dashboard</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">Unified multi-system enterprise onboarding into an AI-augmented decision hub with real-time Human-In-The-Loop controls.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-blue-900">View Case Study →</span>
            </a>

            {/* Project 2 */}
            <a href="/case-study/board-member" className="group block p-8 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-gray-300 transition-all hover:shadow-md">
              <div className="text-xs font-bold tracking-widest text-blue-900 uppercase mb-3">02 · Risk Telemetry</div>
              <h3 className="text-2xl font-bold text-gray-950 group-hover:text-blue-900 transition-colors mb-3">Board Member Intelligence Portal</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">Replaced static 80-page board decks with real-time interactive telemetry and AI-synthesized executive briefings.</p>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-blue-900">View Case Study →</span>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-12 pt-12 border-t border-gray-100">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
              Got an idea, a problem to solve, a new product or project to work on? <span className="text-blue-900">Let's talk.</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Whether it's a greenfield platform, an enterprise redesign, or a design system that needs to scale — I work best on problems where clarity is the hardest part.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-8 flex flex-col justify-between space-y-8 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">01 · EMAIL</div>
                <a href="mailto:patriciacfch@gmail.com" className="font-bold text-gray-950 hover:text-blue-900 transition-colors block text-base break-all">
                  patriciacfch@gmail.com
                </a>
                <p className="text-xs text-gray-500 leading-relaxed">Available for freelance and contract engagements. Typical response within 24 hours.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 flex flex-col justify-between space-y-8 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">02 · SOCIAL & NETWORK</div>
                <div>
                  <a href="https://www.linkedin.com/in/patricia-chavira/" target="_blank" rel="noreferrer" className="font-bold text-gray-950 hover:text-blue-900 transition-colors block text-sm">
                    LinkedIn
                  </a>
                  <span className="text-[11px] text-gray-500">Connect professionally</span>
                </div>
                <div>
                  <a 
                    href="https://drive.google.com/file/d/1VaBQW04iQHdKRoYiG40N5gUYx8Zqxd-V/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold text-gray-950 hover:text-blue-900 transition-colors block text-sm"
                  >
                    Resume
                  </a>
                  <span className="text-[11px] text-gray-500">PDF · Updated 2026</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 flex flex-col justify-between space-y-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">03 · PHILOSOPHY</div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Design is most powerful as a shared practice — built on trust between designer, client, and the people ultimately using what we make together. I don't hand off deliverables; I hand off understanding.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 pt-16 border-t border-gray-100 mt-20 text-xs text-gray-600 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <div className="font-bold text-gray-950 text-sm mb-1">Patricia Chavira</div>
          <div>© 2026 · Guadalajara, MX · Product Designer</div>
        </div>
        <div className="flex gap-6 font-medium">
          <a href="#work" className="hover:text-gray-950 transition-colors">Work</a>
          <a href="#about" className="hover:text-gray-950 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-950 transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
