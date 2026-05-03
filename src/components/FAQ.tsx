import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="w-full bg-zinc-950 py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-zinc-400 font-light">
            Everything you need to know about our legal drafts.
          </p>
        </div>

        <Accordion className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-zinc-800 bg-zinc-900/50 rounded-xl px-6 data-[state=open]:bg-zinc-900 transition-colors">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-white hover:no-underline py-6">
              Why can't I just go to my local bank branch?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 leading-relaxed text-base pb-6">
              Local managers are rarely trained on the January 2026 MHA SOP. They often enforce a full freeze out of caution. Our legal drafts force them to acknowledge the Proportionality Rule.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-zinc-800 bg-zinc-900/50 rounded-xl px-6 data-[state=open]:bg-zinc-900 transition-colors">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-white hover:no-underline py-6">
              What is the difference between a Lien and a Debit Freeze?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 leading-relaxed text-base pb-6">
              A Lien restricts only a specific disputed amount. A Debit Freeze locks the entire account. We provide specialized representations for both.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-zinc-800 bg-zinc-900/50 rounded-xl px-6 data-[state=open]:bg-zinc-900 transition-colors">
            <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-white hover:no-underline py-6">
              How quickly will I get my draft?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 leading-relaxed text-base pb-6">
              Once your ₹499 payment is verified via WhatsApp, your custom PDF is generated and sent to you instantly, complete with the verified directory of emails for your specific state.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
