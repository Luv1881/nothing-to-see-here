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
  resume: { description: "download resume", action: "text", target: "Resume not uploaded yet." },
  github: { description: "open GitHub", action: "open", target: "https://github.com/luv" },
};

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<readonly CommandEntry[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
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
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
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

      let output: React.ReactNode = "";

      if (trimmed === "help") {
        output = (
          <div className="flex flex-col gap-0.5 mt-1 mb-3 text-muted/70">
            {Object.entries(COMMANDS).map(([name, { description }]) => (
              <div key={name} className="flex gap-4">
                <span className="text-accent/80 w-24">{name}</span>
                <span>{description}</span>
              </div>
            ))}
            <div className="flex gap-4">
              <span className="text-accent/80 w-24">clear</span>
              <span>clear terminal</span>
            </div>
            <div className="flex gap-4">
              <span className="text-accent/80 w-24">help</span>
              <span>show this message</span>
            </div>
          </div>
        );
      } else if (trimmed in COMMANDS) {
        const command = COMMANDS[trimmed];
        if (command.action === "navigate") {
          output = (
            <span className="text-muted/50">
              navigating to {command.target}...
            </span>
          );
          router.push(command.target);
          setTimeout(() => setIsOpen(false), 400);
        } else if (command.action === "open") {
          output = (
            <span className="text-muted/50">opening...</span>
          );
          window.open(command.target, "_blank");
        } else {
          output = <span className="text-muted/50">{command.target}</span>;
        }
      } else {
        output = (
          <span className="text-red-400/70">
            command not found: {trimmed}. type &apos;help&apos; for available
            commands.
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
        className="w-full max-w-xl bg-[#0a0a0b] border border-border rounded-xl shadow-2xl shadow-black/40 overflow-hidden font-mono text-[13px] flex flex-col max-h-[65vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-border bg-surface/50">
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
