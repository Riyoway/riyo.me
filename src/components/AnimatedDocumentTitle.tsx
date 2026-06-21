"use client";

import { useEffect } from "react";

const title = "Riyo — Personal Website";
const separator = "  ✦  ";

export default function AnimatedDocumentTitle() {
  useEffect(() => {
    const text = `${title}${separator}`;
    let offset = 0;
    let timer: ReturnType<typeof setInterval> | undefined;

    const updateTitle = () => {
      document.title = `${text.slice(offset)}${text.slice(0, offset)}`;
      offset = (offset + 1) % text.length;
    };

    const start = () => {
      if (timer) return;
      updateTitle();
      timer = setInterval(updateTitle, 320);
    };

    const stop = () => {
      if (!timer) return;
      clearInterval(timer);
      timer = undefined;
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stop();
        document.title = title;
      } else {
        start();
      }
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleMotionPreference = () => {
      if (reducedMotion.matches) {
        stop();
        document.title = title;
      } else if (!document.hidden) {
        start();
      }
    };

    handleMotionPreference();
    document.addEventListener("visibilitychange", handleVisibility);
    reducedMotion.addEventListener("change", handleMotionPreference);

    return () => {
      stop();
      document.title = title;
      document.removeEventListener("visibilitychange", handleVisibility);
      reducedMotion.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return null;
}
