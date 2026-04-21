/**
 * Central config for copy and contact details. Edit this file to change
 * email, or other site-wide values. Copy for individual sections lives in
 * the corresponding component file under src/components/sections.
 *
 * BOOKING MODE: The Hero and Final CTA primary buttons open a Gmail compose
 * window in a new tab (see `gmailComposeHref` below). This works reliably
 * regardless of the visitor's OS or default mail handler. The visible
 * email-address fallback links use standard `mailtoHref` so visitors who
 * prefer their native mail app (Outlook, Apple Mail) still get it when
 * clicking the email text directly. `calendlyUrl` is preserved for a future
 * switch back — see "Switching to Calendly later" in README.
 */
export const siteConfig = {
  name: "Dr. Dameon Lutz",
  title: "Fractional COO for Charter Schools & Nonprofits",
  email: "dameon.lutz@gmail.com",
  linkedin: "https://www.linkedin.com/in/dameon-l-95b5a558/",
  calendlyUrl: "[CALENDLY_URL]", // unused while booking mode is email/Gmail compose
  location: "San Antonio, Texas · Remote nationwide",
  tagline: "Mr. Get It Done",
  emailSubject: "Discovery call — Fractional COO",
} as const;

export const mailtoHref =
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.emailSubject)}`;

export const gmailComposeHref =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}&su=${encodeURIComponent(siteConfig.emailSubject)}`;
