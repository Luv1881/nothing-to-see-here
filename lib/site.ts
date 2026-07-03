// Single source of truth for the site's absolute URL.
//
// Resolution order:
// 1. NEXT_PUBLIC_SITE_URL — set this to the real domain when one exists.
// 2. Vercel's auto-provided production domain (present on every Vercel build,
//    no configuration needed).
// 3. localhost — only ever reached in local dev/builds.
const fromEnv =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

// Trailing slash would double up in every `${siteUrl}/path` interpolation
// (rss/OG/JSON-LD), so normalize it away.
export const siteUrl = (fromEnv ?? "http://localhost:3000").replace(/\/+$/, "");

// Single source of truth for profile links (footer, contact, JSON-LD sameAs).
export const githubUrl = "https://github.com/Luv1881";
export const linkedinUrl = "https://linkedin.com/in/luv-gupta-b73491261";
