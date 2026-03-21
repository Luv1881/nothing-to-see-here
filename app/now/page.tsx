import { FadeIn } from "@/components/fade-in";

export const metadata = {
  title: "Now | Luv",
  description: "What I am currently up to.",
};

function NowSection({
  title,
  items,
  delay = 0,
}: {
  title: string;
  items: string[];
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <section className="space-y-5">
        <h2 className="font-mono text-[12px] text-muted/60 tracking-[0.2em] uppercase">
          {title}
        </h2>
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 text-muted font-normal leading-relaxed text-[16px]"
            >
              <span className="inline-block w-5 h-px bg-border/60 mt-[0.75em] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </FadeIn>
  );
}

export default function Now() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <FadeIn>
        <div className="mb-16">
          <p className="font-mono text-[12px] text-muted/60 tracking-[0.2em] uppercase mb-4">
            Present
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-[-0.035em]">
            Now
          </h1>
          <p className="font-mono text-[11px] text-muted/50 tracking-wider uppercase mt-4">
            Last updated Mar 2026
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
        <NowSection
          title="Building"
          delay={0.1}
          items={[
            "Building weird tools to make my daily life easier"
          ]}
        />

        <NowSection
          title="Learning"
          delay={0.2}
          items={[
            "Deep-diving into eBPF for cloud security and observability",
            "Advanced patterns in Go concurrency",
            "Rust and as much about containerization as humanly possible (mostly me)"            
          ]}
        />

        <NowSection
          title="Reading"
          delay={0.3}
          items={[
            "Designing Data-Intensive Applications by Martin Kleppmann (very slowly)",
            "Various papers on distributed systems fault tolerance",
            "The Art of Computer Programming by Kevin Mitnick (slowly but surely)",
          ]}
        />
      </div>
    </div>
  );
}
