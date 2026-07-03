import { FadeIn } from "@/components/fade-in";
import { githubUrl, linkedinUrl } from "@/lib/site";
import { PageTitle } from "@/components/page-title";
import { PageShell } from "@/components/page-shell";
import { CopyButton } from "@/components/copy-button";

export const metadata = {
  title: "Contact",
  description: "How to reach me.",
};

const EMAIL = "luvgupta1805@gmail.com";

const socials = [
  {
    name: "GitHub",
    url: githubUrl,
    label: "github.com/Luv1881",
  },
  {
    name: "LinkedIn",
    url: linkedinUrl,
    label: "linkedin.com/in/luv-gupta",
  },
  {
    name: "Resume",
    url: "/resume.pdf",
    label: "resume.pdf",
  },
];

export default function Contact() {
  return (
    <PageShell>
      <FadeIn>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-x-12">
          <div className="lg:col-span-4">
            <PageTitle eyebrow="Contact">Get in touch.</PageTitle>
            <p className="text-muted font-normal leading-[1.8] measure -mt-8">
              Open to discussing systems, security, interesting engineering
              problems, or just about anything that runs at sub-millisecond
              latency.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-7">
            <dl className="border-t border-border/40">
              <div className="group flex items-baseline justify-between py-6 border-b border-border/40">
                <dt className="font-mono text-[12px] text-muted/75 tracking-wider uppercase w-24 shrink-0">
                  Email
                </dt>
                <dd className="font-mono text-[13px] text-muted/90 flex items-center">
                  <span>
                    {EMAIL.replace("@", " [at] ").replace(".", " [dot] ")}
                  </span>
                  <CopyButton text={EMAIL} />
                </dd>
              </div>

              {socials.map((s) => (
                <div
                  key={s.name}
                  className="group flex items-baseline justify-between py-6 border-b border-border/40"
                >
                  <dt className="font-mono text-[12px] text-muted/75 tracking-wider uppercase w-24 shrink-0">
                    {s.name}
                  </dt>
                  <dd>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[13px] text-muted/90 hover:text-foreground transition-colors duration-200 group-hover:text-foreground"
                    >
                      {s.label}
                      <span className="ml-2 text-muted/45 group-hover:text-accent transition-colors duration-200">
                        →
                      </span>
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </FadeIn>
    </PageShell>
  );
}
