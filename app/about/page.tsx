import { FadeIn } from "@/components/fade-in";
import { PageTitle } from "@/components/page-title";
import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "About | Luv",
  description: "About Luv, software engineer and builder.",
};

export default function About() {
  return (
    <PageShell>
      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-x-12 mb-24">
          <div className="lg:col-span-4">
            <PageTitle>Building quiet systems.</PageTitle>
          </div>

          <div className="lg:col-span-6 lg:col-start-6 space-y-6 text-muted font-normal leading-[1.85] text-[16px] md:text-[17px]">
            <p>
              I am a software engineer focused on building robust, performant
              systems. I value simplicity, clarity, and intentional design over
              complexity. (If you can&apos;t explain it simply, you probably built it wrong.)
            </p>

            <p>
              My work primarily revolves around cloud infrastructure, security
              automation, and AI applications. I enjoy the process of reducing
              friction in developer workflows and securing systems at scale.
            </p>

            <p>
              I believe that good engineering is quiet. The best systems run in
              the background without drawing attention to themselves. They are
              observable, maintainable, and built to last. The noisy ones are
              just more expensive to debug at 2am.
            </p>

            <p>
              When I&apos;m not writing code, I&apos;m usually reading technical
              deep-dives, exploring new paradigms in Rust, or stepping away
              from the screen entirely. Mostly the first one.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="border-t border-border/40 pt-12">
          <p className="font-mono text-[12px] text-muted/80 tracking-[0.2em] uppercase mb-8">
            Colophon
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-8">
            <div>
              <p className="font-mono text-[12px] text-muted/65 tracking-[0.2em] uppercase mb-3">Stack</p>
              <p className="font-mono text-[12px] text-muted/75 tracking-wider leading-loose">
                next.js 16<br />
                tailwind v4<br />
                framer motion<br />
                mdx / gray-matter
              </p>
            </div>
            <div>
              <p className="font-mono text-[12px] text-muted/65 tracking-[0.2em] uppercase mb-3">Type</p>
              <p className="font-mono text-[12px] text-muted/75 tracking-wider leading-loose">
                instrument serif<br />
                ibm plex sans<br />
                jetbrains mono
              </p>
            </div>
            <div>
              <p className="font-mono text-[12px] text-muted/65 tracking-[0.2em] uppercase mb-3">Principles</p>
              <p className="font-mono text-[12px] text-muted/75 tracking-wider leading-loose">
                dark mode only<br />
                no tracking<br />
                no cookies<br />
                no regrets
              </p>
            </div>
          </div>
          <p className="font-mono text-[12px] text-muted/80 tracking-wider mt-8">
            source:{" "}
            <a
              href="https://github.com/Luv1881"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent/50 hover:text-accent transition-colors duration-200"
            >
              github.com/Luv1881
            </a>
          </p>
        </div>
      </FadeIn>
    </PageShell>
  );
}
