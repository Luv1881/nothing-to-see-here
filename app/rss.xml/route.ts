import { siteUrl } from "@/lib/site";
import { getAllPosts } from "@/lib/mdx";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts();

  const itemsXml = posts
    .map(
      (post) =>
        `    <item>
      <title>${escapeXml(post.title)}</title>
      <description>${escapeXml(post.preview)}</description>
      <link>${escapeXml(siteUrl)}/writing/${escapeXml(post.slug)}</link>
      <guid>${escapeXml(siteUrl)}/writing/${escapeXml(post.slug)}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Luv | Software Engineer</title>
    <link>${escapeXml(siteUrl)}/writing</link>
    <description>Thoughts on engineering, systems, and design.</description>
    <language>en-us</language>
${itemsXml}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
