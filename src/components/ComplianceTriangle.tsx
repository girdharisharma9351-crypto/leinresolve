import { Crosshair, Eye, Building2 } from "lucide-react";

export function ComplianceTriangle() {
  return (
    <section className="w-full bg-zinc-950 py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background glow for analytical feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-4">Our Methodology</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            The Compliance Triangle
          </h3>
          <p className="text-xl text-zinc-400 font-light">
            How We Force Action
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-12 space-y-16 pb-8">
          
          {/* Step 1 */}
          <div className="relative pl-10 md:pl-16 group">
            <div className="absolute -left-[25px] top-4 flex h-12 w-12 items-center justify-center rounded-full border-4 border-zinc-950 bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)] group-hover:scale-110 transition-transform duration-300">
              <Crosshair className="h-5 w-5 text-white" />
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm group-hover:border-red-500/30 transition-all duration-300 group-hover:bg-zinc-900/60 group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="text-red-500 text-sm font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
                <span>Step 1</span>
                <div className="h-px w-8 bg-red-500/50" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Target the Source</h4>
              <p className="text-zinc-400 leading-relaxed text-lg">
                We address the specific District Cyber Cell Investigating Officer (I.O.) handling your case.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative pl-10 md:pl-16 group">
            <div className="absolute -left-[25px] top-4 flex h-12 w-12 items-center justify-center rounded-full border-4 border-zinc-950 bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform duration-300">
              <Eye className="h-5 w-5 text-white" />
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm group-hover:border-blue-500/30 transition-all duration-300 group-hover:bg-zinc-900/60 group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="text-blue-500 text-sm font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
                <span>Step 2</span>
                <div className="h-px w-8 bg-blue-500/50" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Supervisory Pressure</h4>
              <p className="text-zinc-400 leading-relaxed text-lg">
                We simultaneously CC the State Nodal Officer to ensure the 90-Day Sunset Clause is monitored.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative pl-10 md:pl-16 group">
            <div className="absolute -left-[25px] top-4 flex h-12 w-12 items-center justify-center rounded-full border-4 border-zinc-950 bg-emerald-600 shadow-[0_0_20px_rgba(5,150,105,0.4)] group-hover:scale-110 transition-transform duration-300">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-sm group-hover:border-emerald-500/30 transition-all duration-300 group-hover:bg-zinc-900/60 group-hover:shadow-xl group-hover:-translate-y-1">
              <div className="text-emerald-500 text-sm font-bold tracking-wider uppercase mb-3 flex items-center gap-2">
                <span>Step 3</span>
                <div className="h-px w-8 bg-emerald-500/50" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Bank Execution</h4>
              <p className="text-zinc-400 leading-relaxed text-lg">
                We notify the Bank Nodal Officer to release non-disputed funds under the Proportionality Rule.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
