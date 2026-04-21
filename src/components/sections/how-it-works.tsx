type Step = {
  number: string;
  title: string;
  duration: string;
  free?: boolean;
  body: string;
};

const copy = {
  eyebrow: "How It Works",
  headline: "Three steps. No surprises.",
  subhead:
    "Every engagement follows the same path. You get a clear picture of what you're buying before you commit to anything.",
  steps: [
    {
      number: "01",
      title: "Discovery call",
      duration: "30 minutes",
      free: true,
      body: "We talk about what's happening operationally and whether I'm the right fit. If I'm not, I'll tell you who might be.",
    },
    {
      number: "02",
      title: "Operational audit",
      duration: "2 – 3 weeks",
      body: "A full end-to-end assessment of your operations with prioritized findings and a 90-day roadmap. You own the document either way — even if we don't continue.",
    },
    {
      number: "03",
      title: "Retainer or project engagement",
      duration: "6-month minimum or fixed scope",
      body: "We define scope, sign a simple agreement, and I get to work. Most engagements become retainers because operational work compounds over time. Fixed-fee projects work when the outcome has a clear finish line.",
    },
  ] satisfies Step[],
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-b border-border/60 bg-secondary/50"
    >
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

        <ol className="mt-14 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {copy.steps.map((step) => (
            <li key={step.number} className="flex flex-col">
              <span
                className="font-serif text-5xl font-medium leading-none tracking-tight text-primary/90"
                aria-hidden
              >
                {step.number}
              </span>
              <h3 className="mt-5 font-serif text-xl font-medium leading-snug tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 flex flex-wrap items-center gap-2 text-[0.8rem] uppercase tracking-[0.12em] text-muted-foreground">
                <span>{step.duration}</span>
                {step.free && (
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[0.7rem] font-medium tracking-[0.1em] text-primary">
                    No charge
                  </span>
                )}
              </p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
