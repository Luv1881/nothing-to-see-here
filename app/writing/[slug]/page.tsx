import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { FadeIn } from "@/components/fade-in";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import "./markdown.css";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug(slug);
    return {
      title: meta.title,
      description: meta.preview,
      openGraph: {
        title: meta.title,
        description: meta.preview,
        type: "article",
        publishedTime: new Date(meta.date).toISOString(),
        tags: meta.tags,
      },
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 230));
}

async function getPostData(slug: string) {
  try {
    return getPostBySlug(slug);
  } catch {
    return null;
  }
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  const { meta, content } = post;
  const readingTime = estimateReadingTime(content);
  const isoDate = new Date(meta.date).toISOString();
  const formattedDate = new Date(meta.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const githubContentUrl = `https://github.com/Luv1881/nothing-to-see-here/blob/main/content/blog/${slug}.mdx`;

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.preview,
    datePublished: isoDate,
    author: {
      "@type": "Person",
      name: "Luv Gupta",
    },
    keywords: meta.tags?.join(", "),
  };

  return (
    <PageShell>
      <JsonLd data={blogPostingJsonLd} />
      <FadeIn>
        {/* Desktop: sidebar + article layout */}
        <div className="hidden lg:grid grid-cols-12 gap-x-12">
          {/* Sticky sidebar (cols 1–2) */}
          <aside className="col-span-2 sticky top-24 self-start">
            <div className="font-mono text-[13px] text-muted/65 tracking-wider space-y-3">
              <div>
                <p className="text-muted/75 uppercase tracking-[0.2em] text-[12px] mb-1">Date</p>
                <time dateTime={isoDate}>{formattedDate}</time>
              </div>
              <div>
                <p className="text-muted/75 uppercase tracking-[0.2em] text-[12px] mb-1">Read</p>
                <p>{readingTime} min</p>
              </div>
              {meta.tags && meta.tags.length > 0 && (
                <div>
                  <p className="text-muted/75 uppercase tracking-[0.2em] text-[12px] mb-1">Tags</p>
                  <p className="leading-relaxed">{meta.tags.join(" · ")}</p>
                </div>
              )}
              <div className="pt-4 border-t border-border/30">
                <a
                  href={githubContentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted/80 hover:text-accent transition-colors duration-200 leading-relaxed"
                >
                  {"// "}prs welcome
                </a>
              </div>
            </div>
          </aside>

          {/* Article body (cols 4–10) */}
          <article className="col-span-8 col-start-4 markdown-body">
            <header className="pb-10 border-b border-border/40 mb-12">
              <h1 className="font-serif italic text-[1.75rem] md:text-3xl lg:text-4xl tracking-[-0.015em] text-foreground leading-tight">
                {meta.title}
              </h1>
            </header>
            <div>
              <MDXRemote source={content} />
            </div>
          </article>
        </div>

        {/* Mobile: stacked header + article */}
        <div className="lg:hidden">
          <article className="markdown-body">
            <header className="pb-10 border-b border-border/40 mb-12">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] font-mono text-muted/75 tracking-wider uppercase mb-5">
                <time dateTime={isoDate}>{formattedDate}</time>
                <span className="text-border">/</span>
                <span>{readingTime} min read</span>
                {meta.tags && meta.tags.length > 0 && (
                  <>
                    <span className="text-border">/</span>
                    <span>{meta.tags.join(" · ")}</span>
                  </>
                )}
              </div>
              <h1 className="font-serif italic text-[1.75rem] md:text-3xl tracking-[-0.015em] text-foreground leading-tight">
                {meta.title}
              </h1>
            </header>
            <div>
              <MDXRemote source={content} />
            </div>
            <footer className="mt-16 pt-8 border-t border-border/40">
              <p className="font-mono text-[12px] text-muted/65 tracking-wider">
                {"// "}thanks for reading. found a typo?{" "}
                <a
                  href={githubContentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent/50 hover:text-accent transition-colors duration-200"
                >
                  prs welcome →
                </a>
              </p>
            </footer>
          </article>
        </div>
      </FadeIn>
    </PageShell>
  );
}
