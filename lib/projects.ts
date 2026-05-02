export interface Project {
  readonly index: string;
  readonly name: string;
  readonly year: string;
  readonly description: string;
  readonly stack: readonly string[];
  readonly url: string;
}

export const projects: readonly Project[] = [
  {
    index: "01",
    name: "Market Data Feed Handler",
    year: "2026",
    description:
      "A C++20 systems library that processes 10M+ messages/sec with sub-3μs latency. Lock-free, zero-allocation, and caffeinated enough to make Wall Street's servers jealous.",
    stack: ["C++20", "CMake", "Lock-Free", "SPSC/MPMC"],
    url: "https://github.com/Luv1881/Market-data-feed-handler",
  },
  {
    index: "02",
    name: "Invisible Ink in AI",
    year: "2025",
    description:
      "Embedding covert messages into neural network weights while they pretend nothing happened. Survives fine-tuning, pruning, and adversarial attacks — basically the Jason Bourne of steganography.",
    stack: ["Python", "PyTorch", "Steganalysis", "ResNet-18"],
    url: "https://github.com/Luv1881/Invisible-Ink-in-AI",
  },
  {
    index: "03",
    name: "Neural Steganography",
    year: "2025",
    description:
      "Teaching ResNet-18 to keep secrets — hiding binary payloads inside CIFAR-10 model weights. Because sometimes your neural network needs a little privacy too.",
    stack: ["Python", "PyTorch", "ResNet-18", "CIFAR-10"],
    url: "https://github.com/Luv1881/Vit-Project",
  },
  {
    index: "04",
    name: "Threat Model",
    year: "2026",
    description:
      "Security threat modeling tool — because writing threat matrices in a Google Doc is a crime against engineering.",
    stack: ["JavaScript", "Security"],
    url: "https://github.com/Luv1881/Threat-model",
  },
  {
    index: "05",
    name: "Github Scan",
    year: "2026",
    description:
      "Automated GitHub recon tool — scans repos for exposed secrets, misconfigurations, and things developers hope nobody will ever find.",
    stack: ["Security", "Automation"],
    url: "https://github.com/Luv1881/Github-Scan",
  },
];
