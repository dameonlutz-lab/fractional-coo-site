import { Button } from "@/components/ui/button";
import { siteConfig, mailtoHref, gmailComposeHref } from "@/lib/site-config";

const copy = {
  headline: "The next twelve months are going to happen either way.",
  subhead:
    "Thirty minutes to find out whether I'm the right person to help you steer them. No pitch, no pressure — and if I'm not a fit, I'll tell you who might be.",
  primaryCta: "Email me to book a call",
};

export function FinalCta() {
  return (
    <section id="book" className="bg-background">
      <div className="mx-auto w-full max-w-4xl px-6 py-24 md:px-10 md:py-36">
        <h2 className="max-w-3xl text-balance font-serif text-[2.25rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-[3.5rem] lg:text-[4.75rem] lg:leading-[1.02]">
          {copy.headline}
        </h2>

        <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:mt-10">
          {copy.subhead}
        </p>

        <div className="mt-10 flex flex-col items-start gap-5 md:mt-12">
          <Button
            size="lg"
            className="h-12 px-7 text-base"
            render={
              <a
                href={gmailComposeHref}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            {copy.primaryCta}
          </Button>

          <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
            Or write directly to{" "}
            <a
              href={mailtoHref}
              className="font-medium text-foreground underline underline-offset-[3px] decoration-foreground/30 hover:decoration-foreground"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
