import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { FadeIn } from "@/components/fade-in";

export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <PageShell className="flex flex-col items-start justify-center min-h-[60vh]">
      <FadeIn>
        <p className="font-mono text-[12px] text-muted/80 tracking-[0.2em] uppercase mb-6">
          404
        </p>
        <h1 className="font-serif italic text-5xl md:text-7xl tracking-[-0.015em] leading-[0.95] mb-8">
          Not found.
        </h1>
        <p className="text-muted font-normal leading-relaxed measure mb-8">
          This route doesn&apos;t exist — or it does, and it&apos;s hiding.
        </p>
        <p className="font-mono text-[12px] text-muted/65 tracking-wider">
          <span className="text-red-400/70">~$ cd {"<this-page>"}</span>
          <br />
          command not found. try{" "}
          <Link
            href="/"
            className="text-accent/60 hover:text-accent transition-colors duration-200"
          >
            cd ~
          </Link>
          {" "}or press{" "}
          <span className="text-accent/60">t</span> for the terminal.
        </p>
      </FadeIn>
    </PageShell>
  );
}
