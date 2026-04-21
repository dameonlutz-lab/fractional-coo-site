/**
 * Central config for copy and contact details. Edit this file to change
 * Calendly URL, email, or other site-wide values. Copy for individual
 * sections lives in the corresponding component file under src/components/sections.
 */
export const siteConfig = {
  name: "Dr. Dameon Lutz",
  title: "Fractional COO for Charter Schools & Nonprofits",
  email: "dameon.lutz@gmail.com",
  linkedin: "https://www.linkedin.com/in/dameon-l-95b5a558/",
  calendlyUrl: "[CALENDLY_URL]",
  location: "San Antonio, Texas · Remote nationwide",
  tagline: "Mr. Get It Done",
  emailSubject: "Discovery call — Fractional COO",
} as const;

export const mailtoHref =
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;
