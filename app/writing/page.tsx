import { FadeIn } from "@/components/fade-in";
import { PageTitle } from "@/components/page-title";
import { PageShell } from "@/components/page-shell";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

export const metadata = {
  title: "Writing",
  description: "Thoughts on engineering, systems, and design.",
};

export default function Writing() {
  const posts = getAllPosts();

  return (
    <PageShell>
      <FadeIn>
        <PageTitle eyebrow="Blog">Writing</PageTitle>
      </FadeIn>

      <div className="border-t border-border/40">
        {posts.map((post, index) => (
          <FadeIn key={post.slug} delay={index * 0.08}>
            <article>
              <Link
                href={`/writing/${post.slug}`}
                className="group block py-10 border-b border-border/40 hover:border-border transition-colors duration-300"
              >
                {/* Desktop: distributed grid */}
                <div className="hidden md:grid grid-cols-12 gap-x-8 lg:gap-x-12 items-start">
                  <div className="col-span-2">
                    <time
                      dateTime={new Date(post.date).toISOString()}
                      className="font-mono text-[13px] text-muted/75 tracking-wider uppercase"
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="col-span-7">
                    <h2 className="font-serif italic text-xl lg:text-2xl tracking-[-0.01em] text-foreground group-hover:text-foreground/80 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-muted font-normal leading-relaxed text-[16px] lg:text-[17px] measure">
                      {post.preview}
                    </p>
                  </div>
                  <div className="col-span-2">
                    {post.tags && post.tags.length > 0 && (
                      <p className="font-mono text-[13px] text-muted/65 tracking-wider leading-relaxed">
                        {post.tags.join(" · ")}
                      </p>
                    )}
                  </div>
                  <div className="col-span-1 text-right">
                    <span className="text-muted/45 group-hover:text-accent transition-colors duration-300 text-sm">
                      →
                    </span>
                  </div>
                </div>

                {/* Mobile: stacked */}
                <div className="md:hidden">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h2 className="font-serif italic text-xl tracking-[-0.01em] text-foreground group-hover:text-foreground/80 transition-colors">
                      {post.title}
                    </h2>
                    <time
                      dateTime={new Date(post.date).toISOString()}
                      className="font-mono text-[13px] text-muted/75 tracking-wider uppercase shrink-0"
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </time>
                  </div>
                  <p className="text-muted font-normal leading-relaxed text-[16px] mb-2">
                    {post.preview}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <p className="font-mono text-[13px] text-muted/65 tracking-wider">
                      {post.tags.join(" · ")}
                    </p>
                  )}
                </div>
              </Link>
            </article>
          </FadeIn>
        ))}
        {posts.length === 0 && (
          <p className="text-muted/65 font-mono text-sm pt-8">
            {"// "}no posts yet. working on it.
          </p>
        )}
      </div>
    </PageShell>
  );
}
