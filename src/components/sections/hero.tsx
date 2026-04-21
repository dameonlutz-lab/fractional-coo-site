import { Button } from "@/components/ui/button";
import { siteConfig, mailtoHref } from "@/lib/site-config";

const copy = {
  eyebrow: "Dr. Dameon Lutz · Fractional COO",
  headline: "Your operations have outgrown you.",
  subhead:
    "Fractional Chief Operating Officer for charter schools, nonprofits, and mission-driven organizations between $2M and $30M in revenue — embedded leadership without the full-time hire.",
  cta: "Email me to book a call",
  trustSignal:
    "DBA · Ed.D. · 10+ years building operational backbones for mission-driven organizations.",
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center border-b border-border/60 bg-background"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-8 px-6 pt-28 pb-24 md:px-10 md:pt-36 md:pb-32">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {copy.eyebrow}
        </p>

        <h1 className="text-balance font-serif text-[2rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]">
          {copy.headline}
        </h1>

        <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {copy.subhead}
        </p>

        <div className="flex flex-col items-start gap-4 pt-2">
          <Button
            size="lg"
            className="h-12 px-7 text-base"
            render={<a href={mailtoHref} />}
          >
            {copy.cta}
          </Button>
          <p className="text-sm text-muted-foreground">
            Or write directly to{" "}
            <a
              href={mailtoHref}
              className="font-medium text-foreground underline underline-offset-[3px] decoration-foreground/30 hover:decoration-foreground"
            >
              {siteConfig.email}
            </a>
          </p>
          <p className="text-sm text-muted-foreground">{copy.trustSignal}</p>
        </div>
      </div>
    </section>
  );
}
