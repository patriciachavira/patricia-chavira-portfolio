import { Link } from "react-router-dom";

export default function AgenticCHRO() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-24">
      {/* Top Navigation */}
      <header className="max-w-5xl mx-auto w-full px-6 pt-12 pb-8 flex justify-between items-center text-xs tracking-widest uppercase font-semibold text-gray-900 border-b border-gray-100 mb-12">
        <Link to="/" className="font-extrabold text-sm tracking-normal hover:text-blue-900 transition-colors">← Back to Portfolio</Link>
        <div className="flex items-center gap-6 text-gray-700">
          <Link to="/" className="hover:text-gray-950 transition-colors">Work</Link>
          <Link to="/#about" className="hover:text-gray-950 transition-colors">About</Link>
          <Link to="/#contact" className="hover:text-gray-950 transition-colors">Contact</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase">01 — ENTERPRISE AI & WORKFLOW OPTIMIZATION</div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Agentic CHRO Onboarding Dashboard
          </h1>
          <p className="text-xl text-gray-800 leading-relaxed max-w-4xl">
            Streamlining a fragmented multi-system onboarding process into a unified, AI-augmented decision center with real-time Human-In-The-Loop (HITL) control.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Transformed an enterprise-wide onboarding bottleneck across 4+ disconnected tools into a single, high-density decision dashboard powered by multi-agent AI.
          </p>

          {/* Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 p-6 bg-gray-50/60 rounded-2xl border border-gray-100 text-xs">
            <div>
              <span className="text-gray-400 block uppercase tracking-wider mb-1 font-bold">Role:</span>
              <strong className="text-gray-950 font-medium">Lead Product Designer</strong>
            </div>
            <div>
              <span className="text-gray-400 block uppercase tracking-wider mb-1 font-bold">Scope:</span>
              <strong className="text-gray-950 font-medium">Enterprise B2B SaaS / HR Tech</strong>
            </div>
            <div>
              <span className="text-gray-400 block uppercase tracking-wider mb-1 font-bold">Tools & Timeline:</span>
              <strong className="text-gray-950 font-medium">2 Weeks - 2026 | Figma Make, FigJam, Miro Claude, Gemini, Design System Tokens</strong>
            </div>
            <div>
              <span className="text-gray-400 block uppercase tracking-wider mb-1 font-bold">Stakeholders:</span>
              <strong className="text-gray-950 font-medium">65% Reduction In Manual Tracking; 100% HITL Compliance</strong>
            </div>
          </div>

          {/* NDA Disclaimer */}
          <div className="p-4 bg-gray-50/80 border border-gray-200/60 rounded-xl text-xs text-gray-700 flex items-center gap-3">
            <span>🔒 <strong>Global Confidentiality & NDA Disclaimer:</strong> To comply with Non-Disclosure Agreements (NDAs), proprietary client names, live customer PII, and sensitive business metrics across these case studies have been sanitized or generalized. All designs, interaction models, and system architectures reflect my personal strategic direction and UX execution.</span>
          </div>
        </div>
      
        {/* Context & Architecture Section */}
        <div className="space-y-12 pt-12 border-t border-gray-100">
          <div className="space-y-6">
            <p className="text-gray-800 leading-relaxed text-base">
              <strong>The Context:</strong> Onboarding executive talent involved siloed coordination between HR, IT, Compliance, and Department Leads, leading to administrative delays and zero real-time visibility.
            </p>
            <p className="text-gray-800 leading-relaxed text-base">
              <strong>The Moment of Conflict:</strong> Full automation created executive distrust and compliance risks. HR leaders suffered from tool fatigue; they wanted AI speed but demanded uncompromised Human-In-The-Loop (HITL) authority on sensitive hiring and compensation decisions.
            </p>
          </div>

          <div className="space-y-6 pt-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              System Architecture, Wireframing & Prototyping (Rising Action)
            </h2>
            <p className="text-gray-800 leading-relaxed text-base">
              Given the aggressive timeline, I leveraged <strong>Figma Make</strong> to rapidly translate architectural mental models into dynamic, functional wireframes. Through rapid prototyping, the theoretical logic flow evolved into a <strong>4-step progressive disclosure architecture</strong>—spanning Executive Role Setup, Agent Canvas Orchestration, Simulation & Validation Gates, and Live KPI Telemetry—deliberately structured to prevent cognitive overload while giving executive CHROs full oversight over autonomous background agents with mandatory Human-In-The-Loop (HITL) override controls.
            </p>

            <div className="rounded-2xl border border-gray-200/60 bg-white shadow-sm overflow-hidden p-4 sm:p-6 my-8 flex justify-center">
              <img src="/images/agentic-chro/flow.png" alt="System Logic & Decision Gates" className="w-full h-auto object-contain rounded-xl max-h-[900px]" />
            </div>
          </div>
        </div>
      
        {/* Prototyping The Experience Section */}
        <div className="space-y-16 pt-16 border-t border-gray-100">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              PROTOTYPING THE EXPERIENCE: The 4-Step Progressive Disclosure Architecture
            </h2>
          </div>

          <div className="space-y-16">
            {/* Screen 1 */}
<div className="flex flex-col space-y-6">
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-gray-950">Screen 1: Context Definition & KPI Extraction (Onboarding Intake)</h3>
    <p className="text-sm text-gray-700 leading-relaxed">
      <strong>UI Focus:</strong> Structured vertical form coupled with natural language input.<br /><br />
      <strong>Agentic Logic:</strong> Captures role context (CHRO), strategic goals, and operational pain points. Jarvis AI executes background data extraction, automatically tagging relevant organizational KPIs and pulling live baseline data.<br /><br />
      <strong>UX Intent:</strong> Minimizes manual entry by letting executives express intent in plain text while AI structures the operational metadata.
    </p>
  </div>
  <div className="w-full rounded-2xl border border-gray-200/80 bg-white shadow-md overflow-hidden p-2">
    <img src="/images/agentic-chro/screen-1.png" alt="Screen 1" className="w-full h-auto object-cover rounded-xl" />
  </div>
</div>

 {/* Screen 2 */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-950">Screen 2: Agent Architecture & Trade-off Selection (Canvas & Option Matrix)</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>UI Focus:</strong> Card-based comparison canvas showing distinct process configurations and agent options.<br /><br />
              <strong>Agentic Logic:</strong> Maps candidate process flows to targeted KPIs. The platform evaluates cost, velocity, and risk parameters across options before human sign-off.<br /><br />
              <strong>UX Intent:</strong> Direct comparison mode allows decision-makers to weigh execution risks against speed without needing deep technical expertise.
            </p>
          </div>
          <div className="w-full rounded-2xl border border-gray-200/80 bg-white shadow-md overflow-hidden p-2">
            <img src="/images/agentic-chro/screen-2.png" alt="Screen 2" className="w-full h-auto object-cover rounded-xl" />
          </div>
        </div>

        {/* Screen 3 */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-950">Screen 3: Human-in-the-Loop Approval & Policy Governance</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>UI Focus:</strong> Explicit action panel highlighting high-stakes governance gates.<br /><br />
              <strong>Agentic Logic:</strong> Requests executive authorization prior to deploying automated workflows. Enforces policy constraints while presenting full visibility into action impacts.<br /><br />
              <strong>UX Intent:</strong> Prevents unauthorized agent autonomous behavior and builds institutional trust through transparent governance controls.
            </p>
          </div>
          <div className="w-full rounded-2xl border border-gray-200/80 bg-white shadow-md overflow-hidden p-2">
            <img src="/images/agentic-chro/screen-3.png" alt="Screen 3" className="w-full h-auto object-cover rounded-xl" />
          </div>
        </div>

        {/* Screen 4 */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-950">Screen 4: Executive KPI Command Center (Live Telemetry)</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>UI Focus:</strong> High-density executive analytics dashboard tracking real-time health metrics.<br /><br />
              <strong>Agentic Logic:</strong> Continuously monitors agent health over 30-day operational cycles, logging execution accuracy and policy compliance.<br /><br />
              <strong>UX Intent:</strong> Establishes a closed-loop system. When performance drifts, executives receive instant notifications to re-configure or intervene.
            </p>
          </div>
          <div className="w-full rounded-2xl border border-gray-200/80 bg-white shadow-md overflow-hidden p-2">
            <img src="/images/agentic-chro/screen-4.png" alt="Screen 4" className="w-full h-auto object-cover rounded-xl" />
          </div>
        </div>
      
        {/* Outcomes & Business Impact Section */}
        <div className="space-y-12 pt-16 border-t border-gray-100 mb-20">
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
              OUTCOMES & BUSINESS IMPACT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-gray-50/60 rounded-2xl border border-gray-100">
                <div className="text-4xl sm:text-5xl font-extrabold text-gray-950 mb-2">65%</div>
                <div className="text-sm text-gray-700 font-medium">Reduction in Manual Tracking Hours</div>
              </div>
              <div className="p-8 bg-gray-50/60 rounded-2xl border border-gray-100">
                <div className="text-4xl sm:text-5xl font-extrabold text-gray-950 mb-2">100%</div>
                <div className="text-sm text-gray-700 font-medium">Human-In-The-Loop Compliance Auditability</div>
              </div>
              <div className="p-8 bg-gray-50/60 rounded-2xl border border-gray-100">
                <div className="text-4xl sm:text-5xl font-extrabold text-gray-950 mb-2">3x</div>
                <div className="text-sm text-gray-700 font-medium">Accelerated Executive Time-to-Productivity</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-gray-100">
            <h3 className="text-sm font-bold tracking-widest text-gray-950 uppercase">
              KEY STRATEGIC LESSON
            </h3>
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              "When designing for AI-assisted enterprise tools, visual transparency regarding system status and agent confidence scores is far more critical for user adoption than achieving 100% full automation."
            </p>
          </div>
        </div>
      
        {/* Case Navigation & Global Footer */}
        <div className="space-y-16 pt-16 border-t border-gray-100 mt-20">
          <div className="flex justify-between items-center text-xs font-bold tracking-widest uppercase">
            <Link to="/" className="text-gray-500 hover:text-gray-950 transition-colors">← Back to Portfolio</Link>
            <Link to="/case-study/board-member" className="text-gray-950 hover:text-blue-900 transition-colors flex items-center gap-2">
              Next Case Study: Board Member →
            </Link>
          </div>

          <footer className="pt-12 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-gray-500 gap-4">
            <div>
              <strong className="text-gray-950 font-semibold block mb-0.5">Patricia Chavira</strong>
              <span>© 2026 · Guadalajara, MX · Product Designer</span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/#work" className="hover:text-gray-950 transition-colors">Work</Link>
              <Link to="/#about" className="hover:text-gray-950 transition-colors">About</Link>
              <Link to="/#contact" className="hover:text-gray-950 transition-colors">Contact</Link>
              <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-gray-950 transition-colors flex items-center gap-1 font-medium">
                ↑ Top
              </button>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
