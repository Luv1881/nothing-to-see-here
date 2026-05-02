"use client";

import { useEffect } from "react";

const titles = [
  "Luv Gupta",
  "// still here?",
  "// hi mom",
  "Luv Gupta",
  "// go touch grass",
  "Luv Gupta",
];

export function TitleRotator() {
  useEffect(() => {
    let idleTimer: ReturnType<typeof setTimeout>;
    let titleIndex = 0;
    let rotateInterval: ReturnType<typeof setInterval> | null = null;

    function startRotating() {
      if (rotateInterval) return;
      titleIndex = 1;
      document.title = titles[titleIndex];
      rotateInterval = setInterval(() => {
        titleIndex = (titleIndex + 1) % titles.length;
        document.title = titles[titleIndex];
      }, 3000);
    }

    function stopRotating() {
      if (rotateInterval) {
        clearInterval(rotateInterval);
        rotateInterval = null;
      }
      document.title = titles[0];
    }

    function resetIdle() {
      clearTimeout(idleTimer);
      stopRotating();
      idleTimer = setTimeout(startRotating, 30000);
    }

    const events = ["mousemove", "keydown", "scroll", "click"] as const;
    events.forEach((e) => window.addEventListener(e, resetIdle));
    idleTimer = setTimeout(startRotating, 30000);

    return () => {
      clearTimeout(idleTimer);
      stopRotating();
      events.forEach((e) => window.removeEventListener(e, resetIdle));
    };
  }, []);

  return null;
}
