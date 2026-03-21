import { FadeIn } from "@/components/fade-in";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

export const metadata = {
  title: "Writing | Luv",
  description: "Thoughts on engineering, systems, and design.",
};

export default function Writing() {
  const posts = getAllPosts();

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <FadeIn>
        <div className="mb-16">
          <p className="font-mono text-[12px] text-muted/60 tracking-[0.2em] uppercase mb-4">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-[-0.035em]">
            Writing
          </h1>
        </div>
      </FadeIn>

      <div className="max-w-3xl border-t border-border/30">
        {posts.map((post, index) => (
          <FadeIn key={post.slug} delay={index * 0.08}>
            <article>
              <Link
                href={`/writing/${post.slug}`}
                className="group block py-8 border-b border-border/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <h2 className="text-xl font-medium tracking-[-0.02em] text-foreground group-hover:text-foreground/80 transition-colors">
                    {post.title}
                  </h2>
                  <time
                    dateTime={new Date(post.date).toISOString()}
                    className="text-[11px] font-mono text-muted/55 tracking-wider uppercase shrink-0"
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <p className="text-muted font-normal leading-relaxed text-[15px]">
                  {post.preview}
                </p>
              </Link>
            </article>
          </FadeIn>
        ))}
        {posts.length === 0 && (
          <p className="text-muted/40 font-mono text-sm pt-8">No posts yet.</p>
        )}
      </div>
    </div>
  );
}
