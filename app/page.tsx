import Link from "next/link";
import { FadeIn } from "../components/fade-in";
import { TitleRotator } from "../components/title-rotator";
import { StatusPanel } from "../components/status-panel";
import { nowData } from "../lib/now";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] flex flex-col justify-center">
      <TitleRotator />

      <div
        className="absolute top-1/3 left-[55%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(120, 140, 170, 0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative w-full px-6 sm:px-8 md:px-14 lg:px-20 xl:px-28 2xl:max-w-[1800px] 2xl:mx-auto">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-8 lg:gap-x-12 items-center">

          <div className="col-span-12 lg:col-span-7">
            <FadeIn>
              <p className="font-mono text-[12px] text-muted/80 tracking-[0.2em] uppercase mb-6">
                Software Engineer
              </p>
              <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] tracking-[-0.015em] leading-[0.92] mb-8">
                Luv Gupta
              </h1>
              <p className="text-lg md:text-xl text-muted font-normal tracking-[-0.01em] leading-relaxed measure">
                Exploring systems, security, and automation.
                Building tools that work quietly in the background.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="font-mono text-[12px] text-muted/75 tracking-wider mt-6">
                <span className="text-accent/60 animate-pulse">▍</span>
                {" "}currently · {nowData.currently}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
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
                    className="group relative text-muted/90 hover:text-foreground transition-colors duration-300"
                  >
                    {label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </nav>
            </FadeIn>
          </div>

          <FadeIn delay={0.5} className="hidden lg:block lg:col-span-4 lg:col-start-9">
            <StatusPanel />
          </FadeIn>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <FadeIn delay={0.7}>
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-border/60" />
        </FadeIn>
      </div>
    </div>
  );
}
