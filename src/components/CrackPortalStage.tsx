"use client";

import { useEffect, useRef } from "react";

export default function CrackPortalStage() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      return;
    }

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.085;
      currentY += (targetY - currentY) * 0.085;

      stage.style.setProperty("--mouse-x", currentX.toFixed(3));
      stage.style.setProperty("--mouse-y", currentY.toFixed(3));

      frame = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      targetX = Math.max(-0.5, Math.min(0.5, x));
      targetY = Math.max(-0.5, Math.min(0.5, y));
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    frame = window.requestAnimationFrame(render);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <main className="crack-stage" ref={stageRef} aria-label="割れ目の奥に水色の背景が見えるテスト画面">
      <div className="distant-world" aria-hidden="true" />
      <div className="portal-vfx" aria-hidden="true">
        <span className="portal-glow" />
        <span className="portal-light portal-light-one" />
        <span className="portal-light portal-light-two" />
        <span className="portal-dust portal-dust-one" />
        <span className="portal-dust portal-dust-two" />
        <span className="portal-dust portal-dust-three" />
      </div>
      <div className="crack-layer crack-layer-top" aria-hidden="true" />
      <div className="crack-layer crack-layer-bottom" aria-hidden="true" />
    </main>
  );
}
