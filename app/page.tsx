import Link from "next/link";
import { FadeIn } from "../components/fade-in";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] flex flex-col justify-center">
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(120, 140, 170, 0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="font-mono text-[12px] text-muted/60 tracking-[0.2em] uppercase mb-6">
              Software Engineer
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] leading-[0.95] mb-8">
              Luv Gupta
            </h1>
            <p className="text-lg md:text-xl text-muted font-normal tracking-[-0.01em] leading-relaxed max-w-[44ch]">
              Exploring systems, security, and automation.
              Building tools that work quietly in the background.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <nav aria-label="Quick links" className="flex items-center gap-8 mt-14 font-mono text-[13px]">
              {[
                { href: "/projects", label: "projects" },
                { href: "/experience", label: "experience" },
                { href: "/writing", label: "writing" },
                { href: "/about", label: "about" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="group relative text-muted/70 hover:text-foreground transition-colors duration-300"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <FadeIn delay={0.6}>
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-border/60" />
        </FadeIn>
      </div>
    </div>
  );
}
