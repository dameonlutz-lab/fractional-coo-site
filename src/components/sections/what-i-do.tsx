import { ClipboardList, Compass, Clock, Target } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const copy = {
  eyebrow: "What I Do",
  headline: "Four ways to work together.",
  subhead:
    "Most engagements start with an Operational Audit. From there, you decide what comes next.",
  offers: [
    {
      icon: ClipboardList,
      name: "Operational Audit",
      duration: "2–3 weeks",
      priceAnchor: "From $5,000",
      outcome:
        "A complete written assessment of your operations end to end, prioritized findings by risk and impact, and a 90-day roadmap you own. If we go no further, you leave with the plan.",
    },
    {
      icon: Compass,
      name: "Fractional COO Retainer",
      duration: "6-month minimum",
      priceAnchor: "From $3,500/mo",
      outcome:
        "Embedded operational leadership on an ongoing basis. Weekly rhythm with the ED, monthly leadership-team facilitation, ownership of the two or three initiatives that most need to move. Steady forward motion.",
    },
    {
      icon: Clock,
      name: "Interim COO Coverage",
      duration: "3–6 months, full-time-equivalent",
      priceAnchor: "From $10,000/mo",
      outcome:
        "Full operational coverage while you run a COO search, stabilize after a departure, or manage a major transition. The operations don't slip during the transition.",
    },
    {
      icon: Target,
      name: "Project Work",
      duration: "Fixed scope, fixed fee",
      priceAnchor: "From $5,000",
      outcome:
        "A defined outcome with a finish line. New school launches, authorizer renewal preparation, single audit remediation, ERP implementations, c3/c4 sister-entity builds.",
    },
  ],
  closer:
    "Every engagement starts with a 30-minute call. No pitch, no pressure — just a conversation about whether this is a fit.",
};

export function WhatIDo() {
  return (
    <section id="what-i-do" className="border-b border-border/60 bg-background">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            {copy.headline}
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {copy.subhead}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-7">
          {copy.offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <Card key={offer.name} className="gap-5 py-7">
                <CardHeader className="px-7">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <CardTitle className="font-serif text-xl font-medium tracking-tight text-foreground">
                      {offer.name}
                    </CardTitle>
                    <span className="whitespace-nowrap text-sm font-medium text-foreground">
                      {offer.priceAnchor}
                    </span>
                  </div>
                  <CardDescription className="text-[0.8rem] uppercase tracking-[0.12em] text-muted-foreground">
                    {offer.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-7">
                  <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
                    {offer.outcome}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="mt-10 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground md:mt-12">
          {copy.closer}
        </p>
      </div>
    </section>
  );
}
