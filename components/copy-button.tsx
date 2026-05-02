"use client";

import { useState } from "react";

export function CopyButton({ text }: { readonly text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={copy}
      className="font-mono text-[13px] text-muted/65 hover:text-accent transition-colors duration-200 tracking-wider ml-3"
    >
      [{copied ? "copied" : "copy"}]
    </button>
  );
}
