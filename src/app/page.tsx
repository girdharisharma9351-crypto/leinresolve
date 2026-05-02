import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ComplianceTriangle } from "@/components/ComplianceTriangle";
import { Selection } from "@/components/Selection";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col">
      <Hero />
      <Features />
      <ComplianceTriangle />
      <Selection />
      <FAQ />
    </main>
  );
}
