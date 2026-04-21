/**
 * Central config for copy and contact details. Edit this file to change
 * email, or other site-wide values. Copy for individual sections lives in
 * the corresponding component file under src/components/sections.
 *
 * BOOKING MODE: The Hero and Final CTA buttons currently open a mailto (see
 * `mailtoHref` below). `calendlyUrl` is kept here but unused. To switch to
 * Calendly, populate `calendlyUrl` with the real event URL, then in
 * hero.tsx and final-cta.tsx replace `mailtoHref` with `siteConfig.calendlyUrl`
 * in the Button render prop (and add `target="_blank" rel="noopener noreferrer"`
 * back onto the anchor).
 */
export const siteConfig = {
  name: "Dr. Dameon Lutz",
  title: "Fractional COO for Charter Schools & Nonprofits",
  email: "dameon.lutz@gmail.com",
  linkedin: "https://www.linkedin.com/in/dameon-l-95b5a558/",
  calendlyUrl: "[CALENDLY_URL]", // unused while booking mode is "email" — see note above
  location: "San Antonio, Texas · Remote nationwide",
  tagline: "Mr. Get It Done",
  emailSubject: "Discovery call — Fractional COO",
} as const;

export const mailtoHref =
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;
