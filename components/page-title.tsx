"use client";

import { motion } from "framer-motion";

interface PageTitleProps {
  readonly eyebrow?: string;
  readonly children: string;
}

export function PageTitle({ eyebrow, children }: PageTitleProps) {
  return (
    <div className="mb-16 md:mb-24">
      {eyebrow && (
        <p className="font-mono text-[12px] text-muted/80 tracking-[0.2em] uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif italic text-4xl md:text-5xl tracking-[-0.015em] leading-[1.1]">
        {children}
      </h1>
      <motion.div
        className="mt-4 h-px bg-accent/30 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        style={{ maxWidth: "12rem" }}
      />
    </div>
  );
}
