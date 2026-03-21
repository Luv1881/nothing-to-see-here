import { FadeIn } from "@/components/fade-in";

export const metadata = {
  title: "Projects | Luv",
  description: "Selected projects and open-source contributions.",
};

const projects = [
  {
    name: "Neural Steganography",
    description:
      "Teaching ResNet-18 to keep secrets — a comprehensive scaffold for hiding binary payloads inside CIFAR-10 model weights. Because sometimes your neural network needs a little privacy too.",
    stack: ["Python", "PyTorch", "ResNet-18", "CIFAR-10"],
    link: "https://github.com/Luv1881/Vit-Project",
  },
  {
    name: "Invisible Ink in AI",
    description:
      "Embedding covert messages into neural network weights while they pretend nothing happened. Survives fine-tuning, pruning, and adversarial attacks — basically the Jason Bourne of steganography.",
    stack: ["Python", "PyTorch", "Steganalysis", "ResNet-18"],
    link: "https://github.com/Luv1881/Invisible-Ink-in-AI",
  },
  {
    name: "Market Data Feed Handler",
    description:
      "A C++20 systems library that processes 10M+ messages/sec with sub-3μs latency. Lock-free, zero-allocation, and caffeinated enough to make Wall Street's servers jealous.",
    stack: ["C++20", "CMake", "Lock-Free", "SPSC/MPMC"],
    link: "https://github.com/Luv1881/Market-data-feed-handler",
  },
];

export default function Projects() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <FadeIn>
        <div className="mb-16">
          <p className="font-mono text-[12px] text-muted/60 tracking-[0.2em] uppercase mb-4">
            Work
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-[-0.035em]">
            Projects
          </h1>
        </div>
      </FadeIn>

      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
        {projects.map((project, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-background p-8 md:p-10 h-full transition-colors duration-300 hover:bg-surface/40"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-xl font-medium tracking-[-0.02em] text-foreground">
                    {project.name}
                  </h2>
                  <span className="text-muted/20 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-lg ml-3 mt-0.5">
                    {"\u2197"}
                  </span>
                </div>

                <p className="text-muted font-normal leading-relaxed text-[15px] mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-muted/60 tracking-wider uppercase px-2.5 py-1 border border-border/50 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      <div className="md:hidden border-t border-border/30">
        {projects.map((project, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-8 border-b border-border/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-medium tracking-[-0.02em] text-foreground">
                  {project.name}
                </h2>
                <span className="text-muted/20 group-hover:text-accent transition-colors duration-300 text-lg ml-3">
                  {"\u2197"}
                </span>
              </div>

              <p className="text-muted font-normal leading-relaxed text-[15px] mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-muted/60 tracking-wider uppercase px-2.5 py-1 border border-border/50 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
