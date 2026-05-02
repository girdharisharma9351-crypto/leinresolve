import { Button } from "@/components/ui/button";
import { CheckCircle, Lock, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function Selection() {
  return (
    <section id="selection" className="w-full bg-zinc-950 py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            What is your current account status?
          </h2>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
            Choose your specialized representation draft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: The Lien-Mark Draft */}
          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/20 hover:border-red-500/30 group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="w-24 h-24 text-red-500" />
            </div>
            
            <div className="mb-6 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-3">The Lien-Mark Draft <span className="text-red-400 text-lg font-normal">(Partial Hold)</span></h3>
              <p className="text-zinc-400 leading-relaxed min-h-[80px]">
                For when a specific amount is blocked, but the bank restricted everything. Demands immediate release of non-disputed funds under the Proportionality Rule.
              </p>
            </div>

            <div className="mt-auto relative z-10">
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-extrabold text-white">₹499</span>
                <span className="text-zinc-500">one-time</span>
              </div>
              
              <Link href="/intake?draftType=Lien%20Draft" className="block w-full">
                <Button className="w-full h-14 text-lg font-bold bg-white text-zinc-950 hover:bg-zinc-200 transition-colors">
                  Select Lien Draft
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: The Total Debit Freeze Draft */}
          <div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-900/20 hover:border-orange-500/30 group cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Lock className="w-24 h-24 text-orange-500" />
            </div>

            <div className="mb-6 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-3">The Total Debit Freeze Draft <span className="text-orange-400 text-lg font-normal">(Full Lock)</span></h3>
              <p className="text-zinc-400 leading-relaxed min-h-[80px]">
                For when the entire account is frozen. Invokes the 90-Day Sunset Clause forcing the I.O. to justify the freeze or convert it to a lien.
              </p>
            </div>

            <div className="mt-auto relative z-10">
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-extrabold text-white">₹499</span>
                <span className="text-zinc-500">one-time</span>
              </div>
              
              <Link href="/intake?draftType=Total%20Freeze%20Draft" className="block w-full">
                <Button className="w-full h-14 text-lg font-bold bg-white text-zinc-950 hover:bg-zinc-200 transition-colors">
                  Select Full Freeze Draft
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
