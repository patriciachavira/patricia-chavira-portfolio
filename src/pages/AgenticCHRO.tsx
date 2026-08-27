import { Link } from "react-router-dom";

export default function AgenticCHRO() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-24">
      {/* Top Navigation */}
      <header className="max-w-5xl mx-auto w-full px-6 pt-12 pb-8 flex justify-between items-center text-xs tracking-widest uppercase font-semibold text-gray-900 border-b border-gray-100">
        <Link to="/" className="font-extrabold text-sm tracking-normal hover:text-blue-900 transition-colors">← Back to Portfolio</Link>
        <div className="flex items-center gap-6 text-gray-700">
          <Link to="/" className="hover:text-gray-950 transition-colors">Work</Link>
          <Link to="/#about" className="hover:text-gray-950 transition-colors">About</Link>
          <Link to="/#contact" className="hover:text-gray-950 transition-colors">Contact</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 space-y-12 mt-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase">01 ENTERPRISE AI & WORKFLOW OPTIMIZATION</div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Agentic CHRO Onboarding Dashboard
          </h1>
          <p className="text-xl text-gray-800 leading-relaxed max-w-4xl">
            Streamlining a fragmented multi-system onboarding process into a unified, AI-augmented decision center with real-time Human-In-The-Loop (HITL) control.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            Transformed an enterprise-wide onboarding bottleneck across 4+ disconnected tools into a single, high-density decision dashboard powered by multi-agent AI.
          </p>
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
          </div>
        </div>
      </main>
    </div>
  );
}