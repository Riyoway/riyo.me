"use client";

import { useEffect } from "react";

export default function PortalPerspective() {
  useEffect(() => {
    const portals = Array.from(
      document.querySelectorAll<HTMLElement>("[data-portal-parallax]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches || portals.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      portals.forEach((portal, index) => {
        const rect = portal.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const progress = Math.max(
          -1,
          Math.min(1, (viewportCenter - center) / (viewportHeight * 0.72)),
        );
        const direction = index % 2 === 0 ? 1 : -1;

        portal.style.setProperty(
          "--view-window-x",
          `${(progress * direction * 3.2).toFixed(2)}px`,
        );
        portal.style.setProperty(
          "--view-window-y",
          `${(progress * 5.4).toFixed(2)}px`,
        );
        portal.style.setProperty(
          "--view-mid-x",
          `${(progress * direction * 1.4).toFixed(2)}px`,
        );
        portal.style.setProperty(
          "--view-mid-y",
          `${(progress * 2.2).toFixed(2)}px`,
        );
        portal.style.setProperty(
          "--scene-x",
          `${(-progress * direction * 5.8).toFixed(2)}px`,
        );
        portal.style.setProperty(
          "--scene-y",
          `${(-progress * 9.5).toFixed(2)}px`,
        );
        portal.style.setProperty(
          "--light-x",
          `${(44 + progress * direction * 15).toFixed(2)}%`,
        );
        portal.style.setProperty(
          "--light-y",
          `${(28 + progress * 12).toFixed(2)}%`,
        );
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
