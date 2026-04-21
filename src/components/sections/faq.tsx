"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const copy = {
  eyebrow: "FAQ",
  headline: "Questions you're probably asking.",
  items: [
    {
      value: "time",
      question: "How much of our team's time will this take?",
      answer:
        "Less than you'd expect. A weekly 60-minute check-in with you, a monthly 90-minute leadership-team meeting, and I come to each function — finance, compliance, HR — rather than pulling them into my schedule.",
    },
    {
      value: "scope",
      question: "Where does your work stop?",
      answer:
        "I'm not your grant writer, fundraiser, or accountant. I'm operational leadership — the person who owns how the organization runs so you can own where it's going. If what you need falls outside that, I'll tell you on the discovery call and point you toward someone better suited.",
    },
    {
      value: "fit",
      question: "How do I know if we're a fit?",
      answer:
        "Charter school or nonprofit. $2M–$30M. At a transition point — growth, leadership change, new compliance regime. Executive Director, Head of School, or board-authorized to hire. If any is off, I'll tell you on the call.",
    },
    {
      value: "process",
      question: "What do the first 90 days look like?",
      answer:
        "Weeks 1 – 3: Audit with written findings and a 90-day roadmap. Weeks 4 – 13 (if retainer): execute the top two or three items with bi-weekly written updates to the ED and a monthly summary to the board.",
    },
    {
      value: "next",
      question: "What happens after the discovery call?",
      answer:
        "If there's a fit, you'll get a one-page Operational Audit scope within 48 hours — dates, what I'll need from you, and a simple agreement to sign. If there isn't, you'll get a short email with two or three names of people who might be a better match. Either way, you hear from me inside two business days.",
    },
    /* Sixth FAQ slot — reserved for the question that comes up 3+ times in
       your first month of discovery calls. Uncomment, replace the placeholders,
       and save. The accordion will render it automatically. */
    // {
    //   value: "most-asked",
    //   question: "[PLACEHOLDER - EDIT ME — most-asked question from your first discovery calls]",
    //   answer: "[PLACEHOLDER - EDIT ME — your answer]",
    // },
  ],
};

export function FAQ() {
  return (
    <section id="faq" className="border-b border-border/60 bg-secondary/50">
      <div className="mx-auto w-full max-w-3xl px-6 py-20 md:px-10 md:py-28">
        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            {copy.headline}
          </h2>
        </div>

        <Accordion className="mt-10 border-t border-border/70 md:mt-12">
          {copy.items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-b border-border/70"
            >
              <AccordionTrigger className="py-5 font-serif text-lg font-medium tracking-tight text-foreground sm:text-xl [&_[data-slot=accordion-trigger-icon]]:ml-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[0.95rem] leading-relaxed text-muted-foreground sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
