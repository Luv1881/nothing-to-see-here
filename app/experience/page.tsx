import { FadeIn } from "@/components/fade-in";
import { PageTitle } from "@/components/page-title";
import { PageShell } from "@/components/page-shell";
import { CompanyLogo } from "@/components/company-logo";
import { experience } from "@/lib/experience";

export const metadata = {
  title: "Experience",
  description: "Professional experience and career journey.",
};

export default function Experience() {
  return (
    <PageShell>
      <FadeIn>
        <PageTitle eyebrow="Career">Experience</PageTitle>
      </FadeIn>

      <div className="border-t border-border/40">
        {experience.map((job, index) => (
          <FadeIn key={index} delay={index * 0.08}>
            {/* Desktop: distributed 12-col */}
            <div className="hidden md:grid grid-cols-12 gap-x-8 lg:gap-x-12 items-start py-10 border-b border-border/40">
              <div className="col-span-2">
                <p className="font-mono text-[13px] text-muted/80 tracking-wider leading-relaxed">
                  {job.year}
                  <br />
                  <span className="text-muted/75">{job.period}</span>
                </p>
              </div>
              <div className="col-span-4">
                <h2 className="text-base lg:text-lg font-medium tracking-[-0.02em] text-foreground leading-snug">
                  {job.role}
                </h2>
                <p className="font-mono text-[13px] text-muted/75 tracking-wider mt-1 flex items-center gap-1.5">
                  <CompanyLogo src={job.logo} alt={job.company} size={14} />
                  {job.company}
                  <span className="text-border mx-0.5">/</span>
                  {job.location}
                </p>
              </div>
              <div className="col-span-4">
                <p className="text-muted font-normal leading-relaxed text-[16px] lg:text-[17px] measure">
                  {job.description}
                </p>
              </div>
              <div className="col-span-2">
                <p className="font-mono text-[13px] text-muted/65 tracking-wider leading-relaxed">
                  {job.stack.map((t) => t.toLowerCase()).join(" · ")}
                </p>
              </div>
            </div>

            {/* Mobile: stacked */}
            <div className="md:hidden py-10 border-b border-border/40">
              <p className="font-mono text-[13px] text-muted/80 tracking-wider mb-2">
                {job.year} · {job.period}
              </p>
              <h2 className="text-lg font-medium tracking-[-0.02em] text-foreground mb-1">
                {job.role}
              </h2>
              <p className="font-mono text-[12px] text-muted/75 tracking-wider mb-4 flex items-center gap-1.5">
                <CompanyLogo src={job.logo} alt={job.company} size={13} />
                {job.company}
                <span className="text-border mx-1">/</span>
                {job.location}
              </p>
              <p className="text-muted font-normal leading-relaxed text-[16px] mb-4">
                {job.description}
              </p>
              <p className="font-mono text-[13px] text-muted/65 tracking-wider">
                {job.stack.map((t) => t.toLowerCase()).join(" · ")}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </PageShell>
  );
}
