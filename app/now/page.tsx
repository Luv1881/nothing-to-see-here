import { FadeIn } from "@/components/fade-in";
import { PageTitle } from "@/components/page-title";
import { PageShell } from "@/components/page-shell";
import { nowData } from "@/lib/now";

export const metadata = {
  title: "Now | Luv",
  description: "What I am currently up to.",
};

function NowSection({
  title,
  items,
  delay = 0,
}: {
  readonly title: string;
  readonly items: readonly string[];
  readonly delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <section>
        <h2 className="font-mono text-[12px] text-muted/80 tracking-[0.2em] uppercase mb-6">
          {title}
        </h2>
        <ul className="space-y-4 border-l border-border/40 pl-6">
          {items.map((item, i) => (
            <li key={i} className="text-muted font-normal leading-relaxed text-[16px] measure">
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
    <PageShell>
      <FadeIn>
        <PageTitle eyebrow="Present">Now</PageTitle>
        <p className="font-mono text-[13px] text-muted/65 tracking-wider -mt-16 mb-16">
          last updated · {nowData.lastUpdated}
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-14">
        <NowSection title="Building" items={nowData.building} delay={0.1} />
        <NowSection title="Learning" items={nowData.learning} delay={0.2} />
        <NowSection title="Reading" items={nowData.reading} delay={0.3} />
      </div>
    </PageShell>
  );
}
