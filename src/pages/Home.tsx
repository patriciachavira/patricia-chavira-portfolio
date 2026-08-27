import { Link } from "react-router-dom";





export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-12">
      {/* Top Navigation */}
      <header className="max-w-5xl mx-auto w-full px-8 sm:px-16 pt-12 pb-8 flex justify-between items-center text-xs tracking-widest uppercase font-semibold text-gray-900 border-b border-gray-100 mb-12">
        <div className="flex items-center gap-8">
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


        {/* Core Capabilities Section */}
        <div className="space-y-8">
          <div>
            <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">WHAT I BRING</div>
            <h2 className="text-3xl font-extrabold text-gray-950">Core Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Core Expertise */}
            <div className="p-8 bg-blue-950 text-white rounded-2xl flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-bold tracking-widest uppercase opacity-75 mb-6">CORE EXPERTISE</div>
                <ul className="space-y-4 text-sm text-blue-100">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                    <span><strong>Product Strategy:</strong> End-to-end design execution, cross-functional Agile leadership, and mentoring.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                    <span><strong>Data-Dense UI:</strong> Designing high-density analytics dashboards & complex B2B systems, and B2C experiences.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                    <span><strong>Agentic AI & Systems Design:</strong> Architecting human-in-the-loop workflows & automated decision tools.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Highlights & Accomplishments */}
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">HIGHLIGHTS & ACCOMPLISHMENTS</div>
                <ul className="space-y-4 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                    <span><strong>Enterprise Scale:</strong> Delivered 100+ product assignments, user tests, and site enhancements for complex enterprise accounts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                    <span><strong>AI Optimization:</strong> Ranked Top 5 in enterprise-wide prompt optimization & workflow competitions. Top finalist in enterprise-wide hackathon challenge.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                    <span><strong>High performer:</strong> Evaluated by managers, stakeholders, and clients locally and globally.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                    <span><strong>Community & Media:</strong> Active community radio co-producer & grassroots advocacy host. Coordinator, and speaker: Women In Tech events 2024-2025</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Toolkit & Standards */}
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">TOOLKIT & STANDARDS</div>
                <ul className="space-y-4 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                    <span><strong>Design Suite:</strong> Advanced Figma, Claude, Gemini, Perplexity, and AI interaction patterns, Adobe CC Cloud.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                    <span><strong>Accessibility:</strong> Accessible digital experiences, design system architecture, and universal usability standards.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                    <span><strong>Methodologies:</strong> Double Diamond Process, Information Architecture, Heuristic Evaluations, Design System Governance, Formative & Summative Usability Testing.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        {/* Case Studies Section */}
        <div id="work" className="space-y-12 pt-16 border-t border-gray-100">
          <div className="space-y-4">
            <div className="text-xs font-bold tracking-widest text-gray-400 uppercase">SELECTED WORK · 2023–2025</div>
            <h2 className="text-3xl font-extrabold text-gray-950">Case Studies</h2>
            <p className="text-gray-600 max-w-2xl">End-to-end design and systems work spanning agentic interfaces, executive tooling, and scalable design systems.</p>
            <div className="p-4 bg-amber-50 border border-amber-200/60 rounded-xl text-xs text-amber-900 flex items-center gap-3">
              <span>🔒 To comply with non-disclosure agreements, proprietary client data and system metrics across these case studies have been sanitized. All designs reflect my personal strategic direction and product architecture.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {/* Case 01 */}
            <Link to="/case-study/agentic-chro" className="bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-300 transition-all group overflow-hidden block p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 overflow-hidden rounded-xl border border-gray-200/60 bg-white shadow-sm">
                  <img src="/images/home/case-1-thumb.png" alt="Agentic CHRO Onboarding Dashboard" className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] font-semibold rounded-md">Lead UX/UI</span>
                    <span className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] font-semibold rounded-md">Systems Architecture</span>
                    <span className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] font-semibold rounded-md">HITL</span>
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">01</div>
                  <h3 className="text-2xl font-bold text-gray-950 group-hover:text-blue-900 transition-colors">Agentic CHRO Onboarding Dashboard</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Redesigned a fragmented multi-system onboarding process into an AI-augmented decision center that reduces administrative fatigue and accelerates time-to-productivity for new hires while maintaining human-in-the-loop control.</p>
                  <div className="pt-2 text-xs font-bold text-gray-950 group-hover:underline flex items-center gap-1">EXPLORE CASE STUDY →</div>
                </div>
              </div>
            </Link>

            {/* Case 02 */}
            <Link to="/case-study/board-member" className="bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-300 transition-all group overflow-hidden block p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 overflow-hidden rounded-xl border border-gray-200/60 bg-white shadow-sm">
                  <img src="/images/home/case-2-thumb.png" alt="Board Member Decision Cockpit" className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] font-semibold rounded-md">Executive UX</span>
                    <span className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] font-semibold rounded-md">Multi-Agent Synthesis</span>
                    <span className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] font-semibold rounded-md">Data Visualization</span>
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">02</div>
                  <h3 className="text-2xl font-bold text-gray-950 group-hover:text-blue-900 transition-colors">Board Member Decision Cockpit</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Architected a high-density executive dashboard that aggregates complex organizational metrics and leverages multi-agent AI to synthesize strategic recommendations for board-level decision-making.</p>
                  <div className="pt-2 text-xs font-bold text-gray-950 group-hover:underline flex items-center gap-1">EXPLORE CASE STUDY →</div>
                </div>
              </div>
            </Link>

            {/* Case 03 */}
            <Link to="/case-study/news-media" className="bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-300 transition-all group overflow-hidden block p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 overflow-hidden rounded-xl border border-gray-200/60 bg-white shadow-sm">
                  <img src="/images/home/case-3-thumb.png" alt="News-Media Page Redesign & Scalable UI Kit" className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] font-semibold rounded-md">UI Kit / Design System</span>
                    <span className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] font-semibold rounded-md">Responsive Web Migration</span>
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">03</div>
                  <h3 className="text-2xl font-bold text-gray-950 group-hover:text-blue-900 transition-colors">News-Media Page Redesign & Scalable UI Kit</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Actively migrating a legacy digital news platform to a new host and domain through a ground-up responsive redesign. Engineered a modular UI kit that enables editorial teams to compose high-performance, flexible layouts while enforcing WCAG 2.1 AAA color and contrast compliance across all breakpoints.</p>
                  <div className="pt-2 text-xs font-bold text-gray-950 group-hover:underline flex items-center gap-1">EXPLORE CASE STUDY →</div>
                </div>
              </div>
            </Link>

            {/* Case 04 */}
            <Link to="/case-study/ai-pest-id" className="bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-300 transition-all group overflow-hidden block p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 overflow-hidden rounded-xl border border-gray-200/60 bg-white shadow-sm">
                  <img src="/images/home/case-4-thumb.png" alt="AI Pest ID Tool & Mid-Funnel Consideration Experience" className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300" />
                </div>
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] font-semibold rounded-md">Lead UX/UI</span>
                    <span className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] font-semibold rounded-md">Diagnostic UI</span>
                    <span className="px-2.5 py-1 bg-white border border-gray-200 text-gray-700 text-[11px] font-semibold rounded-md">Workflow Integration</span>
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">04</div>
                  <h3 className="text-2xl font-bold text-gray-950 group-hover:text-blue-900 transition-colors">AI Pest ID Tool & Mid-Funnel Consideration Experience</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Created an interactive diagnostic tool that uses AI for visual pest identification, helping consumers clarify their concerns and consider services. This tool turns uncertainty into informed decisions, guiding high-intent prospects toward tailored solutions.</p>
                  <div className="pt-2 text-xs font-bold text-gray-950 group-hover:underline flex items-center gap-1">EXPLORE CASE STUDY →</div>
                </div>
              </div>
            </Link>
          </div>
        </div>


        {/* About Me Section */}
        <div id="about" className="space-y-16 pt-16 border-t border-gray-100">
          <div className="space-y-12">
            <div className="text-xs font-bold tracking-widest text-gray-400 uppercase">ABOUT ME</div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-5 relative">
                <img src="/images/home/profile-photo.png" alt="Patricia Chavira" className="w-full rounded-2xl shadow-sm object-cover aspect-[4/5]" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-950 text-white flex items-center justify-center font-bold text-xs">PC</div>
                    <div>
                      <div className="font-bold text-gray-950 text-xs">Patricia Chavira</div>
                      <div className="text-[10px] text-gray-500">Product Designer</div>
                    </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-6">
                <h2 className="text-3xl font-bold text-gray-950">Hi, I'm Patricia.</h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  I'm a Product Designer who turns complex enterprise clutter into clear, human digital experiences. My way into design didn't start with software; it started with listening, observing, and telling stories. Before building digital interfaces, I navigated very different worlds—coordinating PR for international events, Social Media and Marketing consulting, customer care, and coproducing, cohosting and operating console in a community radio show every Saturday morning. As different as those sound, they taught me the same core truth: <strong className="text-gray-950">no product or system works unless you truly listen to the people using it.</strong> Trained in high-intensity design environments, I bring that human focus straight into complex enterprise work. I help teams untangle messy workflows, balance tough technical constraints, and design scalable UI systems from initial discovery all the way to Figma tokens.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  AI tools are a regular part of my daily toolkit—they help me speed up execution so I can spend more time on what actually matters: strategy, interaction detail, and research. When working with AI-driven products, my main priority is making complex tech feel trustworthy—opening up the "black box" so people always feel in control.
                </p>
              </div>
            </div>
          </div>

          {/* Design Principles */}
          <div className="space-y-6 pt-8 border-t border-gray-100">
            <div className="text-xs font-bold tracking-widest text-gray-400 uppercase">DESIGN PRINCIPLES</div>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-6">
                <span className="text-2xl font-black text-gray-300">01</span>
                <div>
                  <h3 className="font-bold text-gray-950 mb-1">End-to-End Product & Systems Design</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">I connect business goals with real user needs, designing interfaces with systematic rigor. From early discovery mapping to scalable component libraries, I build UI systems that remain flexible and consistent as products grow.</p>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-6">
                <span className="text-2xl font-black text-gray-300">02</span>
                <div>
                  <h3 className="font-bold text-gray-950 mb-1">Accessibility-Focused Design Systems</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Continuously learning about accessibility towards WCAG 2.1 AA standards, high-contrast visual patterns, and inclusive navigation, actively embedding accessible practices into core component architectures to make digital products naturally usable for everyone.</p>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-6">
                <span className="text-2xl font-black text-gray-300">03</span>
                <div>
                  <h3 className="font-bold text-gray-950 mb-1">Transparency in AI & Complex Data</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Making complex software understandable. Whether designing data-dense dashboards or AI-assisted tools, I focus on clear visual feedback, explicit system status, and giving users real control over automated workflows.</p>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start gap-6">
                <span className="text-2xl font-black text-gray-300">04</span>
                <div>
                  <h3 className="font-bold text-gray-950 mb-1">Grounded in the Human Element</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Great products are built through iteration, team trust, and learning alongside others. I actively seek feedback, ask for direction and mentoring when needed, and iterate without ego. Outside of Figma, I recharge through community radio, photography, movies, series, concerts, a good book, time in nature, hanging out with the people I love and my three dogs. In an automated world, keeping things human is what makes the work matter.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="pt-16 border-t border-gray-100">
          <h2 className="text-3xl font-extrabold text-gray-950 mb-8">Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col justify-between space-y-6">
              <p className="text-sm text-gray-700 leading-relaxed italic">
                &ldquo;In the years I collaborated with Patricia, she proved herself to be a kind and collaborative leader and creative professional. Her wide array of skills make her a valuable asset in any team she is a part of. Pats can hold her own in client-facing engagement and stakeholder conversation. A team player through and through.&rdquo;
              </p>
              <div>
                <div className="font-bold text-gray-950 text-sm">Lex Soto</div>
                <div className="text-xs text-gray-500">Senior Lead Content Design</div>
              </div>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col justify-between space-y-6">
              <p className="text-sm text-gray-700 leading-relaxed italic">
                &ldquo;Patricia is an exceptional Product Designer with a genuine passion for her craft. From early in her career, she demonstrated a strong grasp of design principles and UX patterns... Patricia thrives in cross team collaboration and is confident in sharing her perspective when it matters, always ensuring her solutions are both thoughtful and strategic.&rdquo;
              </p>
              <div>
                <div className="font-bold text-gray-950 text-sm">Brittany McFarland</div>
                <div className="text-xs text-gray-500">Senior Design Lead</div>
              </div>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col justify-between space-y-6">
              <p className="text-sm text-gray-700 leading-relaxed italic">
                &ldquo;Working with Patricia and crafting strategies to execute projects has been an incredibly gratifying experience. Patricia is a determined, creative, self-taught, and highly professional individual... Her ability to coordinate and collaborate in diverse work environments is impressive.&rdquo;
              </p>
              <div>
                <div className="font-bold text-gray-950 text-sm">Melany Olivares</div>
                <div className="text-xs text-gray-500">Product Designer</div>
              </div>
            </div>
          </div>
        </div>


        {/* Contact Section */}
        <div id="contact" className="pt-16 border-t border-gray-100 space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200/60 rounded-full text-xs font-semibold text-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Engagements
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 max-w-3xl leading-tight">
              Got an idea, a problem to solve, a new product or project to work on? <span className="text-blue-900">Let's talk.</span>
            </h2>
            <p className="text-gray-600 max-w-xl text-base leading-relaxed">
              Whether it's a greenfield platform, an enterprise redesign, or a design system that needs to scale — I work best on problems where clarity is the hardest part.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-200/60">
            {/* Card 1: Email */}
            <div className="p-8 flex flex-col justify-between space-y-8 bg-white/60">
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">01 · Email</div>
                <div className="space-y-2">
                  <a href="mailto:patriciacfch@gmail.com" className="text-lg font-bold text-gray-950 hover:text-blue-900 transition-colors block break-all">
                    patriciacfch@gmail.com
                  </a>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Available for freelance and contract engagements. Typical response within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Social & Network */}
            <div className="p-8 flex flex-col justify-between space-y-8 bg-white/60">
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">02 · Social & Network</div>
                <div className="space-y-4 pt-1">
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

            {/* Card 3: Philosophy */}
            <div className="p-8 flex flex-col justify-between space-y-8 bg-gradient-to-br from-white/60 to-gray-100/60">
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">03 · Philosophy</div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Design is most powerful as a shared practice — built on trust between designer, client, and the people ultimately using what we make together. I don't hand off deliverables; I hand off understanding.
                </p>
              </div>
            </div>
          </div>
        </div>

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
