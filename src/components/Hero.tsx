import { Button, buttonVariants } from "@/components/ui/button";
import { ShieldAlert, FileText, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-zinc-950 overflow-hidden pt-20 pb-16">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-950/90 z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] max-w-[600px] h-[300px] bg-red-600/20 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm font-medium text-zinc-300 mb-8 backdrop-blur-sm">
          <ShieldAlert className="mr-2 h-4 w-4 text-red-500" />
          Urgent Legal Action Required
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mb-6 leading-tight">
          Stop Your Bank Freeze Using the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
            January 2026 MHA SOP
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light">
          Don't let a small dispute lock your entire life savings. Generate a formal legal representation to invoke the <strong className="text-zinc-200 font-semibold">Proportionality Rule</strong> and the <strong className="text-zinc-200 font-semibold">90-Day Sunset Clause</strong> today.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
          <a 
            href="#selection"
            className={buttonVariants({ 
              size: "lg", 
              className: "w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold h-14 px-8 text-lg rounded-xl shadow-lg shadow-red-900/20 transition-all hover:scale-[1.02] active:scale-[0.98] border-0" 
            })}
          >
            <FileText className="mr-2 h-5 w-5" />
            Generate My 2026 Legal Draft – ₹499
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-col items-center justify-center opacity-80">
          <p className="text-sm text-zinc-500 mb-4 font-medium uppercase tracking-wider">Trusted by 10,000+ Indians</p>
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-8 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">
                👤
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
