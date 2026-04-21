const copy = {
  eyebrow: "About",
  headline: "Why I can do this work.",
  bio: [
    "I've built operations from zero at a 501(c)(3), a 501(c)(4), and a charter school. I've led operations at BASIS Texas Charter Schools, and I serve as Board Vice Chair of a Texas public charter school. Before any of that: ten-plus years in the U.S. Marine Corps — Chief of Staff, Installation Operations, EOC Director.",
    "The pattern has been the same across every one of those roles: take a high-stakes operation, find where it's quietly breaking, and fix it before it costs anyone their mission. I keep the roster small — a handful of active clients at any time — so the work you get is real, and the attention is not split.",
  ],
  pullQuote: "Mr. Get It Done.",
  pullQuoteAttribution: "— what people call me.",
  book:
    "I wrote From Chaos to Clarity: Mastering the Five Operational Roles (available on Amazon) about exactly this framework.",
  credentialsLabel: "Credentials",
  credentials: [
    "Doctor of Business Administration",
    "Doctor of Education (Educational Leadership)",
    "MS Homeland Security (Disaster Management)",
    "Lean Six Sigma Black Belt",
    "Scrum Master",
    "COO Certification",
    "Nonprofit Management Certificate",
  ],
  veteranLine:
    "Service-disabled veteran (30%+) · reduced rates available for veteran-serving organizations.",
};

export function About() {
  return (
    <section id="about" className="border-b border-border/60 bg-background">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
            {copy.headline}
          </h2>

          <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-foreground/85 sm:text-lg">
            {copy.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        <figure className="mx-auto mt-14 max-w-2xl border-l-2 border-primary/40 pl-6 md:mt-16">
          <blockquote className="font-serif text-2xl font-medium italic leading-snug tracking-tight text-foreground sm:text-3xl">
            &ldquo;{copy.pullQuote}&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-sm text-muted-foreground">
            {copy.pullQuoteAttribution}
          </figcaption>
        </figure>

        <p className="mx-auto mt-14 max-w-3xl text-[0.95rem] leading-relaxed text-muted-foreground md:mt-16">
          {copy.book}
        </p>

        <div className="mt-12 border-t border-border/70 pt-8 md:mt-16">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {copy.credentialsLabel}
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground/80">
            {copy.credentials.join(" · ")}
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
            {copy.veteranLine}
          </p>
        </div>
      </div>
    </section>
  );
}
