// Flip to true when at least one real testimonial has replaced a
// [PLACEHOLDER - EDIT ME] card below. Keeping the section hidden at launch is
// intentional — an empty "Proof" is honest ("launching, no track record yet"),
// while placeholder quotes read as an unfinished site. The README points here.
const SHOW_PROOF = false;

const copy = {
  eyebrow: "Proof",
  headline: "What the work looks like.",
  testimonials: [
    {
      quote:
        "[PLACEHOLDER - EDIT ME] Replace with a 2-3 sentence quote from an Executive Director or Head of School. Best candidates speak to a concrete outcome: a renewal that got approved, an audit finding that got closed, a transition that didn't disrupt programs. Avoid generic praise.",
      name: "[PLACEHOLDER - EDIT ME]",
      role: "Executive Director",
      org: "[Organization name]",
    },
    {
      quote:
        "[PLACEHOLDER - EDIT ME] Replace with a quote from a board member, founding team member, or former colleague. Best candidates speak to working style — clarity, follow-through, not creating more work for leadership. This balances the outcome-focused quote above.",
      name: "[PLACEHOLDER - EDIT ME]",
      role: "Board Chair",
      org: "[Organization name]",
    },
  ],
};

export function Proof() {
  if (!SHOW_PROOF) return null;

  return (
    <section id="proof" className="border-b border-border/60 bg-secondary/50">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            {copy.headline}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 md:gap-7">
          {copy.testimonials.map((t, idx) => (
            <figure
              key={idx}
              className="flex flex-col gap-5 rounded-xl bg-background p-8 ring-1 ring-foreground/10 md:p-10"
            >
              <span
                aria-hidden
                className="font-serif text-5xl leading-none text-primary/30"
              >
                &ldquo;
              </span>
              <blockquote className="flex-1 text-pretty font-serif text-lg leading-relaxed text-foreground sm:text-xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-2 border-t border-border/70 pt-5 text-sm leading-relaxed text-muted-foreground">
                <div className="font-medium text-foreground">{t.name}</div>
                <div>
                  {t.role}, {t.org}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
