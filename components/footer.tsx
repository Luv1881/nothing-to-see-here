import { githubUrl, linkedinUrl } from "@/lib/site";

const links = [
  { name: "github", url: githubUrl },
  { name: "linkedin", url: linkedinUrl },
  { name: "rss", url: "/rss.xml" },
  { name: "contact", url: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/30">
      <div className="w-full px-6 sm:px-8 md:px-14 lg:px-20 xl:px-28 2xl:max-w-[1800px] 2xl:mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center text-[13px] font-mono text-muted/75 tracking-wider">
          <span className="uppercase">Engineered with empty stomach and caffeine</span>
          <span className="text-center normal-case tracking-normal lowercase text-muted/80">
            press <span className="text-accent/50">t</span> or{" "}
            <span className="text-accent/50">⌘k</span> for terminal
          </span>
          <span className="sm:text-right uppercase">&copy; {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start mt-4 lowercase tracking-wider text-[13px] font-mono text-muted/65">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("/") ? undefined : "_blank"}
              rel={link.url.startsWith("/") ? undefined : "noopener noreferrer"}
              className="hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
