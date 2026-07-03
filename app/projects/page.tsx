import { FadeIn } from "@/components/fade-in";
import { PageTitle } from "@/components/page-title";
import { PageShell } from "@/components/page-shell";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description: "Selected projects and open-source contributions.",
};

export default function Projects() {
  return (
    <PageShell>
      <FadeIn>
        <PageTitle eyebrow="Work">Projects</PageTitle>
      </FadeIn>

      <div className="border-t border-border/40">
        {projects.map((project, index) => {
          const Row = project.url ? "a" : "div";
          const rowProps = project.url
            ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
          <FadeIn key={project.index} delay={index * 0.06}>
            <Row
              {...rowProps}
              className="group block py-10 border-b border-border/40 hover:border-border transition-colors duration-300"
            >
              {/* Desktop: distributed 12-col table row */}
              <div className="hidden md:grid grid-cols-12 gap-x-8 lg:gap-x-12 items-start">
                <div className="col-span-1 pt-0.5">
                  <span className="font-mono text-[13px] text-muted/80 group-hover:text-accent/60 transition-colors duration-300 tracking-wider">
                    {project.index}
                  </span>
                </div>
                <div className="col-span-3">
                  <h2 className="text-base lg:text-lg font-medium tracking-[-0.02em] text-foreground leading-snug">
                    {project.name}
                  </h2>
                  <p className="font-mono text-[13px] text-muted/65 tracking-wider mt-1">
                    {project.year}
                  </p>
                </div>
                <div className="col-span-5">
                  <p className="text-muted font-normal leading-relaxed text-[16px] lg:text-[17px] measure">
                    {project.description}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="font-mono text-[13px] text-muted/65 tracking-wider leading-relaxed">
                    {project.stack.map((t) => t.toLowerCase()).join(" · ")}
                  </p>
                </div>
                <div className="col-span-1 text-right">
                  {project.url ? (
                    <span className="text-muted/45 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-base inline-block">
                      ↗
                    </span>
                  ) : (
                    <span className="font-mono text-[11px] text-muted/45 tracking-wider">
                      private
                    </span>
                  )}
                </div>
              </div>

              {/* Mobile: stacked */}
              <div className="md:hidden">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-lg font-medium tracking-[-0.02em] text-foreground">
                      {project.name}
                    </h2>
                    <span className="font-mono text-[13px] text-muted/65 tracking-wider">
                      {project.year}
                    </span>
                  </div>
                  {project.url ? (
                    <span className="text-muted/45 group-hover:text-accent transition-all duration-300 text-base mt-0.5 ml-4 shrink-0">
                      ↗
                    </span>
                  ) : (
                    <span className="font-mono text-[11px] text-muted/45 tracking-wider mt-1.5 ml-4 shrink-0">
                      private
                    </span>
                  )}
                </div>
                <p className="text-muted font-normal leading-relaxed text-[16px] mb-3">
                  {project.description}
                </p>
                <p className="font-mono text-[13px] text-muted/65 tracking-wider">
                  {project.stack.map((t) => t.toLowerCase()).join(" · ")}
                </p>
              </div>
            </Row>
          </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={projects.length * 0.06 + 0.1}>
        <p className="font-mono text-[12px] text-muted/80 mt-10">
          {"// "}more on github →{" "}
          <a
            href="https://github.com/Luv1881"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent/50 hover:text-accent transition-colors duration-200"
          >
            github.com/Luv1881
          </a>
        </p>
      </FadeIn>
    </PageShell>
  );
}
