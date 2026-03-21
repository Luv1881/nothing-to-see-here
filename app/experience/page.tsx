import { FadeIn } from "@/components/fade-in";

export const metadata = {
  title: "Experience | Luv",
  description: "Professional experience and career journey.",
};

const experience = [
  {
    role: "Software Engineering Intern",
    company: "SolarWinds",
    period: "2026 — Present",
    location: "On-site",
    description: [
      "Writing automated agents to hunt down security vulnerabilities, so the on-prem security team can finally get some sleep.",
    ],
    stack: ["Security", "Agents", "On-Prem"],
  },
  {
    role: "Intern, Founder's Office",
    company: "Datawise",
    period: "May 2025 — Jul 2025",
    location: "Remote",
    description: [
      "Designed a highly-available on-prem network architecture from scratch, ensuring the servers stay up even if someone trips over the router cable.",
    ],
    stack: ["HAProxy", "Proxmox", "ZFS", "Networking"],
  },
  {
    role: "AWS System Operations Intern",
    company: "Tech Mahindra",
    period: "May 2024 — Jul 2024",
    location: "Remote",
    description: [
      "Automated cloud operations and optimized AWS resources, mostly to prove that manually clicking through the AWS console is a terrible idea.",
    ],
    stack: ["AWS", "EC2", "Lambda", "CloudWatch"],
  },
];

export default function Experience() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <FadeIn>
        <div className="mb-16 md:mb-24">
          <p className="font-mono text-[12px] text-muted/60 tracking-[0.2em] uppercase mb-4">
            Career
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-[-0.035em]">
            Experience
          </h1>
        </div>
      </FadeIn>

      <div className="border-t border-border/30">
        {experience.map((job, index) => (
          <FadeIn key={index} delay={index * 0.08}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 border-b border-border/30">
              <div className="lg:col-span-4 xl:col-span-3">
                <p className="font-mono text-[11px] text-muted/60 tracking-wider uppercase mb-3">
                  {job.period}
                </p>
                <h2 className="text-xl font-medium tracking-[-0.02em] text-foreground mb-1">
                  {job.role}
                </h2>
                <p className="text-muted/80 font-normal text-[15px]">
                  {job.company}
                  <span className="text-border mx-2">/</span>
                  {job.location}
                </p>
              </div>

              <div className="lg:col-span-8 xl:col-span-8 xl:col-start-5">
                <ul className="space-y-3 mb-6">
                  {job.description.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-muted font-normal leading-relaxed text-[15px]"
                    >
                      <span className="inline-block w-5 h-px bg-border/60 mt-[0.75em] shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-muted/60 tracking-wider uppercase px-2.5 py-1 border border-border/50 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
