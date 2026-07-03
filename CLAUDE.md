# CLAUDE.md

Personal portfolio site for Luv Gupta — software engineer (systems, security, automation).

## Stack & Commands

- Next.js 16 (App Router, RSC) · Tailwind v4 · MDX via `gray-matter` + `next-mdx-remote` · Framer Motion
- `npm run dev` — dev server · `npm run build` — production build · `npm run lint` — eslint

## Architecture

- `app/` — routes: `/` (hero), `/about`, `/projects`, `/experience`, `/writing` (+ `[slug]` MDX posts), `/now`, `/contact`, `/rss.xml`
- `components/` — `nav`, `footer`, `terminal` (⌘K / `t` command palette easter egg), `status-panel`, `fade-in`, `page-shell`, `page-title`, `title-rotator`
- `lib/projects.ts` and `lib/now.ts` — hardcoded content data; `lib/mdx.ts` — blog loader from `content/blog/*.mdx`
- `content/blog/` — MDX posts with frontmatter (title, date, preview, tags)

## Design Constraints — DO NOT VIOLATE

The entire identity of this site is **minimalist dark/black**. Every change must preserve:

- **Palette**: near-black background (`#0a0a0b`), muted grays, single desaturated blue-gray accent (`#93a0b0`). No new colors, no gradients beyond the existing subtle radial glow, no images except company logos.
- **Type system**: Instrument Serif (italic display), IBM Plex Sans (body), JetBrains Mono (labels/meta). Lowercase mono labels with wide tracking are the signature — keep them.
- **Layout language**: 12-col editorial grids, hairline `border-border/40` rules, generous whitespace, `measure` (65ch) text blocks.
- **Restraint**: no carousels, no cards with shadows, no badges/pills, no analytics/tracking, dark mode only. Motion stays subtle (fade-up only, `prefers-reduced-motion` respected).
- Improvements should mean *better content and fewer rough edges*, not *more stuff on screen*.

---

# Improvement Roadmap

## Phase 1 — Credibility Fixes (highest impact, do first)

The site looks polished but several details undermine trust for a recruiter/peer reading it:

1. **Replace placeholder domain.** `app/layout.tsx` uses `metadataBase: https://example.com` and the same in OpenGraph. Set the real production URL (also affects `/rss.xml` links).
2. **Use a professional contact email.** `app/contact/page.tsx` exposes `chatgptvandl@gmail.com` — this is the single biggest credibility leak on a portfolio. Switch to a name-based address (e.g. firstname.lastname@ or a custom domain) and update the obfuscated display + copy button.
3. **Ship the resume.** The terminal `resume` command answers "resume not uploaded yet." Add `public/resume.pdf`, wire the command to open it, and add a quiet `resume` link on `/contact`.
4. **Fix hardcoded/fragile numbers.**
   - `/projects` footer says "22 more on github" — hardcode rot. Either fetch the repo count at build time or reword to "more on github →".
   - `status-panel.tsx` "easter eggs 0 / 3" never updates. Either track discovery (localStorage) so it actually counts, or drop the counter and keep just the hint.
5. **Consistent metadata titles.** Home is `Luv | Software Engineer`, subpages are `X | Luv`. Pick one pattern via `title.template` in the root layout.

## Phase 2 — Content & Tone Pass (the actual differentiator)

The writing currently leans hard on jokes. One wit-beat per item reads as personality; two reads as nervousness. Keep the dry voice, but lead every item with the *concrete engineering claim*:

1. **Projects (`lib/projects.ts`)** — each description should answer "what did you build, how hard was it, what was the result" before any joke:
   - Keep: "10M+ messages/sec, sub-3μs latency, lock-free, zero-allocation" — this is the model. Cut "caffeinated enough to make Wall Street's servers jealous."
   - Rewrite "Jason Bourne of steganography" / "neural network needs privacy too" items to state the actual technique and result (capacity, robustness numbers, accuracy delta after embedding).
   - "Threat Model" and "Github Scan" have no substance at all — add what they detect, how, and one number (rules count, repos scanned, findings). If a repo is thin, drop it from the list; five strong beats two weak.
2. **Experience (`app/experience/page.tsx`)** — same rule. "so the security team can finally get some sleep" is fine as a closer, but each role needs at least one specific, verifiable contribution (what the agents detect, scale of the network designed, what was automated on AWS and the measurable effect).
3. **Now page (`lib/now.ts`)** — fix the persona inconsistency: "wife very concerned" conflicts with the student/intern timeline elsewhere. Keep "last updated" honest (it's the page's whole premise).
4. **About (`app/about/page.tsx`)** — solid. Trim to one parenthetical joke max; the "good engineering is quiet" paragraph is the keeper and should anchor the page.
5. **Writing** — only 2 posts. The single highest-leverage content investment: one deep technical post about the feed handler (the strongest project) with real benchmarks. Target cadence over quantity.

## Phase 3 — Information Architecture & Discoverability

1. **`/about` and `/contact` are orphaned** — they exist but are absent from `components/nav.tsx` (only reachable via terminal). Recruiters won't find the terminal. Add both to the nav (6 lowercase mono items still reads minimal), or add quiet footer links.
2. **Home → work funnel.** The hero has no link to projects; the only affordance is a scroll hint that leads nowhere (the page doesn't scroll). Add one understated text link under the tagline ("selected work →") in the existing mono style.
3. **Footer** — add mirrored quiet links (github · linkedin · rss · contact) in the existing 13px mono style; currently the footer is purely decorative.
4. **Cross-link posts ↔ projects** where they cover the same work.

## Phase 4 — SEO & Sharing Surface

1. **OG image** — generate a minimal one with `next/og`: black background, Instrument Serif italic name, mono subtitle. Matches the aesthetic, makes shared links look intentional.
2. **`sitemap.ts` + `robots.ts`** via the Metadata API (blog slugs included).
3. **JSON-LD** — `Person` schema on home, `BlogPosting` on post pages.
4. **Per-post OG metadata** in `app/writing/[slug]/page.tsx` (currently title/description only).
5. **Favicon** — replace the default with a minimal mark consistent with the nav's home glyph.

## Phase 5 — Polish & Hardening

1. **Terminal a11y**: focus is set on open but there's no focus trap and no `role="dialog"`/`aria-modal`; Tab escapes into the page behind the overlay. Restore focus on close.
2. **Status panel uptime** (`status-panel.tsx`) computes `Date.now()` at module scope in a server component — value freezes at build time. Compute per-request or render client-side.
3. **Easter egg coherence**: hint promises 3 eggs — make the inventory real (e.g. terminal discovery, `sudo hire-me`, title rotator) and count them if Phase 1.4 chose tracking.
4. **Dead assets**: remove unused Next.js boilerplate SVGs from `public/` (`next.svg`, `vercel.svg`, `globe.svg`, `file.svg`, `window.svg`).
5. **404 page** — add a custom `not-found.tsx` in the site's voice (mono, terminal-flavored) instead of the Next default.
6. **Lighthouse pass** — verify the fixed noise overlay (`body::after`) and backdrop blurs don't hurt paint on low-end devices; check CLS from `FadeIn` on slow connections.

## Working Rules for This Repo

- Content lives in `lib/*.ts` and `content/blog/` — edit data, not markup, for copy changes.
- Every page has a desktop 12-col grid + separate mobile stacked block; change both when touching list layouts.
- All meta/label text is lowercase mono with `tracking-wider`; match it.
- Never add a dependency for something CSS or a small component can do.
