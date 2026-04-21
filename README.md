# Fractional COO Site

One-page marketing site for Dr. Dameon Lutz's fractional COO practice, serving charter schools and nonprofits ($2M – $30M). Single goal: move visitors toward booking a 30-minute discovery call.

- **Live:** https://fractional-coo-site.pages.dev
- **Repo:** https://github.com/dameonlutz-lab/fractional-coo-site

The `.pages.dev` URL is a temporary placeholder. When you buy a real domain, it becomes the canonical URL and this one recedes into the background (it keeps working as a fallback). See "Adding a custom domain" below.

## Stack

- Next.js 16 App Router + TypeScript, configured for static export (`output: 'export'`)
- React 19
- Tailwind CSS v4 + shadcn/ui (Button, Card, Accordion) + Lucide icons
- Fraunces (display) + Inter (body), self-hosted via `next/font/google`
- Cloudflare Pages for hosting, auto-deploys on push to `main`

No backend. No API routes. No runtime server components.

## Running locally

First time only:

```bash
npm install
```

Then any session:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Saves auto-reload.

Preview a real production build:

```bash
npm run build
npx serve out
```

## Editing copy

Copy lives as plain JavaScript constants at the top of each section component. No CMS. Edit the file, commit, push — Cloudflare deploys in ~2 minutes.

| Section | File | What's in it |
|---|---|---|
| Hero | `src/components/sections/hero.tsx` | Eyebrow, headline, subhead, CTA label, trust-signal line |
| Problem | `src/components/sections/problem.tsx` | Eyebrow, headline, subhead, 3 pain-point objects |
| What I Do | `src/components/sections/what-i-do.tsx` | Eyebrow, headline, subhead, 4 offer objects (name, duration, price anchor, outcome), closer line |
| How It Works | `src/components/sections/how-it-works.tsx` | Eyebrow, headline, subhead, 3 step objects |
| About | `src/components/sections/about.tsx` | Eyebrow, headline, bio paragraphs, pull quote, book line, credentials, veteran line |
| Proof | `src/components/sections/proof.tsx` | `SHOW_PROOF` toggle, eyebrow, headline, 2 testimonial objects |
| FAQ | `src/components/sections/faq.tsx` | Eyebrow, headline, 5 Q&A objects + commented-out 6th slot |
| Final CTA | `src/components/sections/final-cta.tsx` | Headline, subhead, primary CTA label, secondary email prefix |
| Footer | `src/components/sections/footer.tsx` | Copyright line + LinkedIn/email |

All copy is written in second person ("You're running..."). Keep it that way.

## Swapping the Calendly URL and email

Both live in **`src/lib/site-config.ts`** as the single source of truth. Every CTA on the site reads from these constants.

```ts
export const siteConfig = {
  name: "Dr. Dameon Lutz",
  email: "dameon.lutz@gmail.com",
  linkedin: "https://www.linkedin.com/in/dameon-l-95b5a558/",
  calendlyUrl: "[CALENDLY_URL]",   // ← replace before launch
  // ...
};
```

**To swap in the real Calendly URL:**

1. Grab your Calendly event link (e.g., `https://calendly.com/dameonlutz/discovery-call`)
2. Replace `"[CALENDLY_URL]"` in `src/lib/site-config.ts`
3. Commit and push

Where the constants are used:

- **`calendlyUrl`** — Hero CTA button, Final CTA button
- **`email`** — Final CTA inline link (with "Discovery call" subject pre-filled via `mailtoHref`), footer email link (plain mailto)

## Toggles and placeholders

### `SHOW_PROOF` (testimonials, hidden by default)

`src/components/sections/proof.tsx:5` contains `const SHOW_PROOF = false`. While false, the Proof section renders nothing — the site skips straight from About to FAQ.

**When to flip to `true`:**

1. Collect at least one real testimonial (Executive Director, board chair, founding team member — preferably outcome-specific, not generic praise)
2. In `proof.tsx`, replace one of the `[PLACEHOLDER - EDIT ME]` cards with the real quote + attribution
3. Set `SHOW_PROOF = true`
4. Commit and push

### Commented-out 6th FAQ slot

`src/components/sections/faq.tsx` has a commented-out 6th accordion item at the bottom of the `items` array. To activate: uncomment the block, replace the `[PLACEHOLDER - EDIT ME]` values, save. The accordion picks it up automatically — no re-render logic needed.

## Deploying updates

Cloudflare Pages is wired to GitHub auto-deploy. Any change to `main` ships.

```bash
git add .
git commit -m "your message"
git push
```

Build logs: https://dash.cloudflare.com → Workers & Pages → `dameonlutz` → Deployments.

## Adding a custom domain (e.g., `dameonlutz.com`)

When you're ready to spend ~$10/year on a real domain:

1. Buy a domain. Cloudflare Registrar is cheapest and zero-friction, but Namecheap / Google Domains / others work too.
2. Cloudflare dashboard → Workers & Pages → `dameonlutz` project → **Custom domains** tab → **Set up a custom domain**
3. Enter the domain. Cloudflare tells you what DNS records to add.
4. If you bought the domain through Cloudflare Registrar, records add automatically. Otherwise log in to your registrar and add them by hand.
5. SSL provisions in 5 – 15 minutes. You'll get an email when it's live.

The `.pages.dev` URL keeps working forever as a fallback — safe for testing without touching the real domain.

## First 30 days after launch — checklist

The site shipping is the start, not the end. Watch these signals for the first month and let them drive edits.

### Week 1 — verify it works

- [ ] Open the site on your phone and laptop. Every section renders right, no overflow, no awkward wrapping.
- [ ] Click every CTA. Calendly opens and accepts a booking. The Final CTA email link opens a draft with "Discovery call — Fractional COO" pre-filled.
- [ ] Click the footer email link. Opens a plain draft with no pre-filled subject (intentional — different context).
- [ ] Send the URL to 2 – 3 trusted people (a current ED, a board chair, a former colleague). Ask: "what does this site say it's for?" — not "do you like it."

### Weeks 2 – 4 — observe what the site does

Track these yourself in a note, not a dashboard:

- [ ] **Calendly bookings/week.** Target for month 1: 1 – 3 calls.
- [ ] **Booking → kept-call rate.** If people aren't showing up, check Calendly reminder settings.
- [ ] **Call → Audit conversion.** Of calls taken, how many lead to a signed Audit? Rough benchmark: 30%+.
- [ ] **Which FAQ question keeps surfacing on calls.** When one question comes up 3+ times, it becomes the 6th FAQ slot (see toggle above).
- [ ] **Words prospects use.** If EDs describe their pain in language that's different from the Problem section, rewrite the Problem to match their words — not yours.

### Triggers to revisit the site

- [ ] **First real testimonial** → update Proof card + flip `SHOW_PROOF = true`
- [ ] **Sixth FAQ pattern emerges** → uncomment and fill in the slot in `faq.tsx`
- [ ] **Custom domain purchased** → run the custom-domain steps above
- [ ] **You want analytics** → add Plausible (privacy-first, cookie-free, single script tag). Defer until there's traffic worth measuring.

## Scope discipline — what this site will NOT do

Single page, single goal. Do not add these without a real reason:

- Pricing page (it's a call topic, intentionally)
- Blog, newsletter signup, lead magnets, downloadable PDFs
- Multi-page navigation
- Client logos (unless you explicitly provide real ones)
- Tracking pixels, analytics, cookies on the initial build — Plausible only if you add it deliberately later
- Vercel as host
- Stock photos, hero video, parallax, animations beyond subtle fade-in

## Day-job firewall — what never appears on this site

This is your private practice. These stay off the site at all times:

- Current employer (NAVSUP, FLC Yokosuka, DMSS, or any federal/contractor role)
- Government/DoD affiliation references, .mil addresses, DoD logos
- Active clearance mentions
- Current duty station or contract details

Past military service (U.S. Marine Corps) is fine in **past tense only**, with no rank, unit, or current-duty language. Civilian credentials (DBA, Ed.D., MS, charter/nonprofit roles) are always fine.
