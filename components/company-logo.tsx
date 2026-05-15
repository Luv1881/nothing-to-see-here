"use client";

import { useState } from "react";

export function CompanyLogo({ src, alt, size = 14 }: { src: string; alt: string; size?: number }) {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-sm opacity-70 inline-block"
      onError={() => setHidden(true)}
    />
  );
}
