export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-12">
      {/* Top Navigation */}
      <header className="max-w-5xl mx-auto w-full px-8 sm:px-16 pt-12 pb-8 flex justify-between items-center text-xs tracking-widest uppercase font-semibold text-gray-900 border-b border-gray-100 mb-12">
        <div>
          <a href="/" className="font-extrabold text-sm tracking-normal">PATRICIA CHAVIRA</a>
        </div>
        <div className="flex items-center gap-6 text-gray-700">
          <a href="#work" className="hover:text-gray-950 transition-colors">Work</a>
          <a href="#about" className="hover:text-gray-950 transition-colors">About Me</a>
          <a href="#contact" className="hover:text-gray-950 transition-colors">Contact</a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-8 sm:px-16 py-8 flex-grow w-full space-y-24">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-950">Patricia Chavira</h1>
          <p className="text-2xl font-bold text-gray-700">Product Designer & UX/UI Strategist</p>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">Designing complex digital systems into clear, high-density user flows and scalable human-centered enterprise web apps.</p>
          <div className="flex gap-4 pt-4">
            <a href="#work" className="px-6 py-3 bg-blue-900 text-white text-sm font-semibold rounded-xl hover:bg-blue-800 transition-colors">
              EXPLORE WORK
            </a>
            <a href="#contact" className="px-6 py-3 bg-white border border-gray-300 text-gray-900 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-colors">
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* Selected Projects */}
        <section id="work" className="space-y-8 pt-12 border-t border-gray-100">
          <div>
            <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">SELECTED CASE STUDIES</div>
            <h2 className="text-3xl font-extrabold text-gray-950">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-gray-50/70 border border-gray-100 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-bold text-blue-900 uppercase tracking-widest">01 · ENTERPRISE AI</div>
                <h3 className="text-2xl font-bold text-gray-950">Agentic CHRO Onboarding Dashboard</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Unified multi-system enterprise onboarding into an AI-augmented decision hub with real-time Human-In-The-Loop controls.</p>
              </div>
              <a href="/case-study/agentic-chro" className="text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-blue-900 transition-colors">
                VIEW CASE STUDY →
              </a>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-gray-50/70 border border-gray-100 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-bold text-blue-900 uppercase tracking-widest">02 · RISK TELEMETRY</div>
                <h3 className="text-2xl font-bold text-gray-950">Board Member Intelligence Portal</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Replaced static 80-page board decks with real-time interactive telemetry and AI-synthesized executive briefings.</p>
              </div>
              <a href="/case-study/board-member" className="text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-blue-900 transition-colors">
                VIEW CASE STUDY →
              </a>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-gray-50/70 border border-gray-100 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-bold text-blue-900 uppercase tracking-widest">03 · MEDIA SYSTEMS</div>
                <h3 className="text-2xl font-bold text-gray-950">News Media Content Hub</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Streamlined editorial digital asset distribution across high-frequency publishing networks.</p>
              </div>
              <a href="/case-study/news-media" className="text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-blue-900 transition-colors">
                VIEW CASE STUDY →
              </a>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl bg-gray-50/70 border border-gray-100 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-bold text-blue-900 uppercase tracking-widest">04 · COMPUTER VISION</div>
                <h3 className="text-2xl font-bold text-gray-950">AI Pest Identification Tool</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Computer vision diagnostic flow providing instant agricultural pest identification and field mitigation guidance.</p>
              </div>
              <a href="/case-study/ai-pest-id" className="text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-blue-900 transition-colors">
                VIEW CASE STUDY →
              </a>
            </div>
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
            {/* Email Card */}
            <div className="p-8 flex flex-col justify-between space-y-8 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">01 · EMAIL</div>
                <a href="mailto:patriciacfch@gmail.com" className="text-lg font-bold text-gray-950 hover:text-blue-900 transition-colors block break-all">
                  patriciacfch@gmail.com
                </a>
                <p className="text-xs text-gray-500 leading-relaxed">Available for freelance and contract engagements. Typical response within 24 hours.</p>
              </div>
            </div>

            {/* Social & Network Card */}
            <div className="p-8 flex flex-col justify-between space-y-8 bg-white/60 rounded-2xl border border-gray-200/80 shadow-sm">
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

            {/* Philosophy Card */}
            <div className="p-8 flex flex-col justify-between space-y-8 bg-gradient-to-br from-white/60 to-gray-100/60 rounded-2xl border border-gray-200/80 shadow-sm">
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">03 · PHILOSOPHY</div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Design is most powerful as a shared practice — built on trust between designer, client, and the people ultimately using what we make together. I don't hand off deliverables; I hand off understanding.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto w-full px-8 sm:px-16 pt-16 border-t border-gray-100 text-xs text-gray-600 flex justify-between items-center mt-24">
        <div>
          <div className="font-bold text-gray-950 text-sm mb-1">Patricia Chavira</div>
          <div className="text-gray-500">© 2026 · Guadalajara, MX · Product Designer</div>
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
