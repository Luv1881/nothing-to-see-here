"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { path: "/projects", name: "projects" },
  { path: "/experience", name: "experience" },
  { path: "/writing", name: "writing" },
  { path: "/now", name: "now" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function isActive(path: string): boolean {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  }

  return (
    <nav
      className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/30"
      aria-label="Main navigation"
    >
      <div className="w-full px-6 sm:px-8 md:px-14 lg:px-20 xl:px-28 2xl:max-w-[1800px] 2xl:mx-auto">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="text-foreground hover:text-foreground/70 transition-colors"
            aria-current={pathname === "/" ? "page" : undefined}
            aria-label="Home"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12L12 3l9 9" />
              <path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
            </svg>
          </Link>

          <div className="hidden md:flex items-center gap-8 font-mono text-[13px] tracking-wide">
            {navItems.map(({ path, name }) => {
              const active = isActive(path);
              return (
                <Link
                  key={path}
                  href={path}
                  aria-current={active ? "page" : undefined}
                  className={`relative transition-colors duration-200 ${
                    active
                      ? "text-foreground"
                      : "text-muted/75 hover:text-foreground"
                  }`}
                >
                  {name}
                  {active && (
                    <span className="absolute -bottom-[1.15rem] left-0 right-0 h-px bg-accent" />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-4 h-px bg-foreground transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-4 h-px bg-foreground transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-4 font-mono text-[13px] tracking-wide">
            {navItems.map(({ path, name }) => {
              const active = isActive(path);
              return (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setMobileOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`transition-colors duration-200 py-1 ${
                    active
                      ? "text-foreground"
                      : "text-muted/80 hover:text-foreground"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
