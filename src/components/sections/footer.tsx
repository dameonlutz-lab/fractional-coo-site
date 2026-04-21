import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="mx-auto w-full max-w-5xl px-6 py-10 md:px-10 md:py-12">
        <div className="flex flex-col gap-3 text-[0.85rem] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} Dr. Dameon Lutz · Remote nationwide</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-foreground"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
