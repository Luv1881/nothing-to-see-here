import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { FadeIn } from "@/components/fade-in";
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
      title: `${meta.title} | Luv`,
      description: meta.preview,
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 230));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const { meta, content } = getPostBySlug(slug);
    const readingTime = estimateReadingTime(content);
    const isoDate = new Date(meta.date).toISOString();

    return (
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <FadeIn>
          <article className="max-w-[65ch] mx-auto markdown-body">
            <header className="space-y-5 pb-10 border-b border-border/40 mb-12">
              <h1 className="text-[1.75rem] md:text-3xl lg:text-4xl font-light tracking-[-0.03em] text-foreground leading-tight">
                {meta.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] font-mono text-muted/60 tracking-wider uppercase">
                <time dateTime={isoDate}>
                  {new Date(meta.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <span className="text-border hidden sm:inline">/</span>
                <span>{readingTime} min read</span>
                {meta.tags && meta.tags.length > 0 && (
                  <>
                    <span className="text-border hidden sm:inline">/</span>
                    <div className="flex gap-2">
                      {meta.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </header>

            <div className="max-w-none">
              <MDXRemote source={content} />
            </div>
          </article>
        </FadeIn>
      </div>
    );
  } catch {
    notFound();
  }
}
