import { FadeIn } from "@/components/fade-in";

export const metadata = {
  title: "Contact | Luv",
  description: "How to reach me.",
};

const links = [
  { name: "Email", url: "mailto:hello@example.com", label: "hello@example.com" },
  { name: "GitHub", url: "https://github.com/luv", label: "github.com/luv" },
  { name: "LinkedIn", url: "https://linkedin.com/in/luv", label: "linkedin.com/in/luv" },
  { name: "Twitter", url: "https://twitter.com/luv", label: "twitter.com/luv" },
];

export default function Contact() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="font-mono text-[12px] text-muted/60 tracking-[0.2em] uppercase mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-light tracking-[-0.035em] leading-tight mb-6">
              Get in touch.
            </h1>
            <p className="text-muted font-normal leading-[1.8] max-w-[36ch]">
              I am always open to discussing systems, security, or interesting
              engineering problems.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 border-b border-border/30 first:border-t first:border-border/30 transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="font-mono text-[12px] text-muted/60 tracking-wider uppercase w-20">
                      {link.name}
                    </span>
                    <span className="text-muted font-normal group-hover:text-foreground transition-colors duration-300">
                      {link.label}
                    </span>
                  </div>
                  <span className="text-muted/20 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-300 text-sm">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
