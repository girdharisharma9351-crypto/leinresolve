import { ShieldCheck, Scale, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";

export function Features() {
  return (
    <section className="w-full bg-zinc-950 py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Problem & Solution Split Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Problem Card */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:border-red-900/50 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-600" />
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              <h2 className="text-xl md:text-2xl font-bold text-white">The Problem</h2>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Is your bank manager telling you they can't do anything? Are Cyber Cell officers not responding?
            </p>
          </div>

          {/* Solution Card */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:border-emerald-900/50 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="h-6 w-6 text-emerald-500" />
              <h2 className="text-xl md:text-2xl font-bold text-white">The Solution</h2>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Under the old 2025 rules, you were stuck. As of January 2026, the law has changed. You have the right to a partial unfreeze of non-disputed funds.
            </p>
          </div>
        </div>

        {/* 3-Column Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
            <div className="h-14 w-14 rounded-full bg-blue-900/20 flex items-center justify-center mb-6">
              <ShieldCheck className="h-7 w-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Verified 2026 Directory</h3>
            <p className="text-zinc-400 leading-relaxed">
              Access official State Nodal & Bank Cyber Desk emails to ensure your communication reaches the right authority.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
            <div className="h-14 w-14 rounded-full bg-indigo-900/20 flex items-center justify-center mb-6">
              <Scale className="h-7 w-7 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">BNSS Compliance</h3>
            <p className="text-zinc-400 leading-relaxed">
              Cites Section 106 to ensure police take your request seriously and act within the legal framework.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors">
            <div className="h-14 w-14 rounded-full bg-orange-900/20 flex items-center justify-center mb-6">
              <Clock className="h-7 w-7 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">The 15-Day Mandate</h3>
            <p className="text-zinc-400 leading-relaxed">
              Triggers automatic grievance reports if no action is taken within the mandated timeframe.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
