"use client";

import { useEffect, useRef } from "react";

export default function CursorEffects() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const buttons = document.querySelectorAll<HTMLElement>(".magnetic-button");

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      glow.style.transform = `translate3d(${currentX - 150}px, ${
        currentY - 150
      }px, 0)`;

      buttons.forEach((button) => {
        const rect = button.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = mouseX - centerX;
        const distanceY = mouseY - centerY;

        const distance = Math.sqrt(
          distanceX * distanceX + distanceY * distanceY,
        );

        const magneticRadius = 120;

        if (distance < magneticRadius) {
          const strength = 0.25;

          button.style.transform = `translate3d(
            ${distanceX * strength}px,
            ${distanceY * strength}px,
            0
          )`;
        } else {
          button.style.transform = "translate3d(0, 0, 0)";
        }
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);

      buttons.forEach((button) => {
        button.style.transform = "";
      });
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        h-[300px]
        w-[300px]
        rounded-full
        opacity-70
        blur-3xl
      "
      style={{
        background:
          "radial-gradient(circle, rgba(124,92,255,0.18) 0%, rgba(56,217,255,0.08) 35%, transparent 70%)",
      }}
    />
  );
}
