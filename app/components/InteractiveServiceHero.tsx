"use client";

import { useEffect, useRef } from "react";

type InteractiveServiceHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export default function InteractiveServiceHero({
  title,
  description,
  eyebrow = "Riyadvi Digital Solutions",
}: InteractiveServiceHeroProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = card.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-4px)
      `;
    };

    const handleMouseLeave = () => {
      card.style.transform = `
        perspective(900px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0)
      `;
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c5cff]/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT CONTENT */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#38d9ff]">
            {eyebrow}
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full border border-[#7c5cff]/60 bg-[#7c5cff]/15 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#38d9ff] hover:bg-[#7c5cff]/25 hover:shadow-[0_0_30px_rgba(124,92,255,0.25)]"
            >
              Get a Quote
            </a>

            <a
              href="/portfolio"
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* RIGHT INTERACTIVE VISUAL */}
        <div className="flex justify-center lg:justify-end">
          <div
            ref={cardRef}
            className="relative h-[360px] w-full max-w-[500px] rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-transform duration-200 ease-out"
          >
            {/* Outer glow */}
            <div className="absolute inset-8 rounded-[28px] border border-[#7c5cff]/20 shadow-[0_0_80px_rgba(124,92,255,0.15)]" />

            {/* Grid */}
            <div
              className="absolute inset-0 rounded-[32px] opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "35px 35px",
              }}
            />

            {/* Central 3D-style core */}
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 animate-pulse rounded-full bg-[#7c5cff]/20 blur-2xl" />

              <div className="absolute inset-5 rounded-full border border-[#38d9ff]/60 bg-[#05060a]/80 shadow-[0_0_40px_rgba(56,217,255,0.2)]" />

              <div className="absolute inset-9 rounded-full bg-gradient-to-br from-[#7c5cff] via-[#38d9ff] to-[#7c5cff] shadow-[0_0_35px_rgba(124,92,255,0.7)]" />

              <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)]" />
            </div>

            {/* Orbit 1 */}
            <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 animate-[spin_12s_linear_infinite] rounded-full border border-[#7c5cff]/30">
              <span className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#7c5cff] shadow-[0_0_15px_#7c5cff]" />
            </div>

            {/* Orbit 2 */}
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rotate-45 animate-[spin_18s_linear_infinite_reverse] rounded-full border border-[#38d9ff]/20">
              <span className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#38d9ff] shadow-[0_0_15px_#38d9ff]" />
            </div>

            {/* Floating nodes */}
            <div className="absolute left-12 top-12 h-3 w-3 animate-pulse rounded-full bg-[#38d9ff] shadow-[0_0_20px_#38d9ff]" />

            <div className="absolute right-14 top-20 h-2 w-2 animate-pulse rounded-full bg-[#7c5cff] shadow-[0_0_15px_#7c5cff]" />

            <div className="absolute bottom-16 left-20 h-2 w-2 animate-pulse rounded-full bg-[#a78bfa] shadow-[0_0_15px_#a78bfa]" />

            <div className="absolute bottom-12 right-16 h-3 w-3 animate-pulse rounded-full bg-[#38d9ff] shadow-[0_0_20px_#38d9ff]" />

            {/* Label */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
              Interactive Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}