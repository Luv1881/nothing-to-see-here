export interface Job {
  readonly year: string;
  readonly role: string;
  readonly company: string;
  readonly logo: string;
  readonly period: string;
  readonly location: string;
  readonly description: string;
  readonly stack: readonly string[];
}

export const experience: readonly Job[] = [
  {
    year: "2026",
    role: "Software Engineering Intern",
    company: "SolarWinds",
    logo: "/logos/solarwinds.png",
    period: "2026 — Present",
    location: "On-site",
    description:
      "Writing automated agents that hunt down security vulnerabilities for the on-prem security team.",
    stack: ["Security", "Agents", "On-Prem"],
  },
  {
    year: "2025",
    role: "Intern, Founder's Office",
    company: "Datawise",
    logo: "/logos/datawise.png",
    period: "May 2025 — Jul 2025",
    location: "Remote",
    description:
      "Designed a highly-available on-prem network architecture from scratch using HAProxy, Proxmox, and ZFS.",
    stack: ["HAProxy", "Proxmox", "ZFS", "Networking"],
  },
  {
    year: "2024",
    role: "AWS System Operations Intern",
    company: "Tech Mahindra",
    logo: "/logos/techmahindra.png",
    period: "May 2024 — Jul 2024",
    location: "Remote",
    description:
      "Automated cloud operations and optimized AWS resources across EC2, Lambda, and CloudWatch.",
    stack: ["AWS", "EC2", "Lambda", "CloudWatch"],
  },
];
