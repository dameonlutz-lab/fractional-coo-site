import { Inbox, FileWarning, Scale } from "lucide-react";

const copy = {
  eyebrow: "The Problem",
  headline: "You didn't build your organization to run operations yourself.",
  subhead: "And the cost is showing up in three places.",
  pains: [
    {
      icon: Inbox,
      title: "Operations is eating your week.",
      body: "Every decision on finance, HR, facilities, vendors, and compliance funnels to you. The programmatic work that actually scales your mission keeps getting pushed to next week.",
    },
    {
      icon: FileWarning,
      title: "The stakes just got existential.",
      body: "Authorizer renewals, single audits, federal grant reporting, board accountability — the next 12–18 months need to be defensible in writing, and right now they're not.",
    },
    {
      icon: Scale,
      title: "A full-time COO isn't the answer.",
      body: "The role doesn't justify a six-figure hire yet, and the volume doesn't either. But the complexity is already here. You need senior operational ownership, right-sized.",
    },
  ],
};

export function Problem() {
  return (
    <section
      id="problem"
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

        <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {copy.pains.map((pain) => {
            const Icon = pain.icon;
            return (
              <div key={pain.title} className="flex flex-col gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-xl font-medium leading-snug tracking-tight text-foreground">
                  {pain.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
                  {pain.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
