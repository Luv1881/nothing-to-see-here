import { FadeIn } from "@/components/fade-in";

export const metadata = {
  title: "About | Luv",
  description: "About Luv, software engineer and builder.",
};

export default function About() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="font-mono text-[12px] text-muted/60 tracking-[0.2em] uppercase mb-4">
              About
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-[-0.035em] leading-tight">
              Building quiet systems.
            </h1>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-muted font-normal leading-[1.85] text-[16px] md:text-[17px]">
            <p>
              I am a software engineer focused on building robust, performant
              systems. I value simplicity, clarity, and intentional design over
              complexity.
            </p>

            <p>
              My work primarily revolves around cloud infrastructure, security
              automation, and AI applications. I enjoy the process of reducing
              friction in developer workflows and securing systems at scale.
            </p>

            <p>
              I believe that good engineering is quiet. The best systems run in
              the background without drawing attention to themselves. They are
              observable, maintainable, and built to last.
            </p>

            <p>
              When I am not writing code, I am usually reading technical
              deep-dives, exploring new paradigms in Rust, or stepping away
              from the screen entirely.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
