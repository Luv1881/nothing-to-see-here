"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

interface CommandEntry {
  readonly command: string;
  readonly output: React.ReactNode;
}

const COMMANDS: Record<
  string,
  { description: string; action: "navigate" | "open" | "text"; target: string }
> = {
  about: { description: "read about me", action: "navigate", target: "/about" },
  projects: { description: "view projects", action: "navigate", target: "/projects" },
  experience: { description: "career history", action: "navigate", target: "/experience" },
  blog: { description: "open writing page", action: "navigate", target: "/writing" },
  contact: { description: "get in touch", action: "navigate", target: "/contact" },
  now: { description: "what I'm up to", action: "navigate", target: "/now" },
  resume: { description: "download resume", action: "open", target: "/resume.pdf" },
  github: { description: "open github profile", action: "open", target: "https://github.com/Luv1881" },
  whoami: {
    description: "who am I?",
    action: "text",
    target:
      "luv gupta. software engineer. builds systems that run quietly and break loudly — preferably only in staging. interested in security, automation, and the occasional existential question about why the build passed locally.",
  },
  coffee: { description: "you've earned it", action: "text", target: "coffee" },
};

// Undocumented commands ("// not everything is listed"). Module-scoped like
// COMMANDS so the table isn't rebuilt on every submitted command.
const HIDDEN_COMMANDS: Record<string, string> = {
  vim: "E37: no write since last change. you live here now. (:q! works on editors, not portfolios)",
  ls: "about/  projects/  experience/  writing/  now/  contact/  secrets/",
  "cat secrets": "cat: secrets/: permission denied. nice try though.",
  "cd secrets": "cd: secrets/: permission denied. it's called secrets for a reason.",
  "rm -rf /": "absolutely not. this portfolio took weeks.",
  pwd: "~/somewhere/over/the/vpn",
  exit: "there is no exit. only ⌘k.",
};

function CoffeeOutput() {
  return (
    <div className="text-muted/60 mt-1 mb-2">
      <pre className="text-xs leading-tight font-mono">{`    ( (
     ) )
  ._______.
  |       |]
  \\       /
   \`-----'`}</pre>
      <p className="mt-2">you&apos;ve earned it. ☕</p>
    </div>
  );
}

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<readonly CommandEntry[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<Element | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = document.activeElement?.tagName;
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "t" && !isOpen && tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      } else if (e.key === "Tab" && isOpen && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          "input, button, a[href]"
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!dialogRef.current.contains(document.activeElement)) {
          // Focus escaped the dialog (e.g. programmatic focus elsewhere) —
          // pull it back in instead of letting Tab walk the page behind.
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
      inputRef.current?.focus();
    } else if (triggerRef.current instanceof HTMLElement) {
      triggerRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();

      if (trimmed === "") {
        setHistory((prev) => [...prev, { command: cmd, output: "" }]);
        return;
      }

      if (trimmed === "clear") {
        setHistory([]);
        return;
      }

      if (trimmed in HIDDEN_COMMANDS) {
        setHistory((prev) => [
          ...prev,
          {
            command: cmd,
            output: <span className="text-muted/50">{HIDDEN_COMMANDS[trimmed]}</span>,
          },
        ]);
        return;
      }

      if (trimmed === "sudo hire-me") {
        setHistory((prev) => [
          ...prev,
          {
            command: cmd,
            output: (
              <span className="text-red-400/70">
                permission denied — but the{" "}
                <a href="/contact" className="text-accent/70 hover:text-accent underline">
                  /contact
                </a>{" "}
                page has no sudo requirements.
              </span>
            ),
          },
        ]);
        return;
      }

      let output: React.ReactNode = "";

      if (trimmed === "help") {
        output = (
          <div className="flex flex-col gap-0.5 mt-1 mb-3 text-muted/70">
            {Object.entries(COMMANDS).map(([name, { description }]) => (
              <div key={name} className="flex gap-4">
                <span className="text-accent/80 w-28">{name}</span>
                <span>{description}</span>
              </div>
            ))}
            <div className="flex gap-4">
              <span className="text-accent/80 w-28">sudo hire-me</span>
              <span>trust me on this one</span>
            </div>
            <div className="flex gap-4">
              <span className="text-accent/80 w-28">clear</span>
              <span>clear terminal</span>
            </div>
            <div className="flex gap-4">
              <span className="text-accent/80 w-28">help</span>
              <span>show this message</span>
            </div>
            <div className="mt-2 text-muted/40">{"// "}not everything is listed.</div>
          </div>
        );
      } else if (trimmed in COMMANDS) {
        const command = COMMANDS[trimmed];
        if (command.action === "navigate") {
          output = (
            <span className="text-muted/50">navigating to {command.target}...</span>
          );
          router.push(command.target);
          setTimeout(() => setIsOpen(false), 400);
        } else if (command.action === "open") {
          output = <span className="text-muted/50">opening...</span>;
          window.open(command.target, "_blank");
        } else if (trimmed === "coffee") {
          output = <CoffeeOutput />;
        } else {
          output = <span className="text-muted/50">{command.target}</span>;
        }
      } else {
        output = (
          <span className="text-red-400/70">
            command not found: {trimmed}. type &apos;help&apos; for available commands.
          </span>
        );
      }

      setHistory((prev) => [...prev, { command: cmd, output }]);
    },
    [router],
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Terminal"
        className="w-full max-w-xl bg-[#0a0a0b] border border-border rounded-xl shadow-2xl shadow-black/40 overflow-hidden font-mono text-[13px] flex flex-col max-h-[65vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-border/60 bg-surface/50">
          <div className="flex space-x-2">
            <button
              onClick={() => setIsOpen(false)}
              className="w-3 h-3 rounded-full bg-[#ff5f57]/80 hover:bg-[#ff5f57] transition-colors"
              aria-label="Close terminal"
            />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]/60" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]/60" />
          </div>
          <div className="flex-1 text-center text-[11px] text-muted/40 tracking-wider uppercase pr-10">
            terminal
          </div>
        </div>

        <div
          ref={scrollRef}
          className="p-4 flex-1 overflow-y-auto text-foreground/90"
          onClick={() => inputRef.current?.focus()}
        >
          {history.length === 0 && (
            <div className="mb-4 text-muted/40">
              type &apos;help&apos; to see available commands.
            </div>
          )}

          {history.map((entry, i) => (
            <div key={i} className="mb-3">
              <div className="flex gap-2">
                <span className="text-accent/60 select-none">~$</span>
                <span>{entry.command}</span>
              </div>
              {entry.output && <div className="mt-1 ml-6">{entry.output}</div>}
            </div>
          ))}

          <div className="flex gap-2 items-center">
            <span className="text-accent/60 select-none">~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleCommand(input);
                  setInput("");
                }
              }}
              className="flex-1 bg-transparent border-none outline-none text-foreground/90 w-full caret-accent"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
