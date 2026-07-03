export interface Project {
  readonly index: string;
  readonly name: string;
  readonly year: string;
  readonly description: string;
  readonly stack: readonly string[];
  /** GitHub URL, or null when the code isn't public — the row renders without a link. */
  readonly url: string | null;
}

export const projects: readonly Project[] = [
  {
    index: "01",
    name: "Market Data Feed Handler",
    year: "2026",
    description:
      "A C++20 systems library that processes 10M+ messages/sec with sub-3μs latency. Lock-free and zero-allocation throughout.",
    stack: ["C++20", "CMake", "Lock-Free", "SPSC/MPMC"],
    url: null,
  },
  {
    index: "02",
    name: "Invisible Ink in AI",
    year: "2025",
    description:
      "Embeds covert binary payloads directly into a neural network's weights via least-significant-bit encoding, designed to survive fine-tuning, pruning, and adversarial perturbation. Pairs the embedding with a steganalysis pipeline to evaluate detectability.",
    stack: ["Python", "PyTorch", "Steganalysis", "ResNet-18"],
    url: "https://github.com/Luv1881/Invisible-Ink-in-AI",
  },
  {
    index: "03",
    name: "Userspace TCP/UDP Stack",
    year: "2025",
    description:
      "A network stack built from raw frames up in C++ over a Linux TUN device — IPv4, ICMP, and UDP with an event-loop core, tested end-to-end by pinging the stack from the host.",
    stack: ["C++", "TUN/TAP", "IPv4/ICMP/UDP", "CMake"],
    url: "https://github.com/Luv1881/tcp-udp-stack",
  },
  {
    index: "04",
    name: "better-threagile",
    year: "2026",
    description:
      "A fork of Threagile that extends the original STRIDE-only engine with selectable threat modeling methodologies — STRIDE, LINDDUN, PASTA, and VAST — against the same YAML model. Adds new built-in rules (missing CSP headers, exposed default credentials) and fixes false positives in the upstream S3/SSRF checks.",
    stack: ["Go", "STRIDE", "LINDDUN", "PASTA"],
    url: "https://github.com/Luv1881/better-threagile",
  },
];
