"use client";

import { useEffect, useRef, useState } from "react";

type InteractiveProjectVisualProps = {
  title: string;
  accent?: string;
  category?: string;
};

export default function InteractiveProjectVisual({
  title,
  accent = "#7c5cff",
  category = "Digital Experience",
}: InteractiveProjectVisualProps) {
  const visualRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const visual = visualRef.current;

    if (!visual) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = visual.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      visual.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-4px)
      `;
    };

    const handleMouseLeave = () => {
      visual.style.transform = `
        perspective(1200px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0)
      `;
    };

    visual.addEventListener("mousemove", handleMouseMove);
    visual.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      visual.removeEventListener("mousemove", handleMouseMove);
      visual.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const layers = [
    {
      number: "01",
      label: "Strategy",
      text: "Understanding the project vision",
    },
    {
      number: "02",
      label: "Design",
      text: "Creating the digital experience",
    },
    {
      number: "03",
      label: "Technology",
      text: "Building the interactive solution",
    },
    {
      number: "04",
      label: "Launch",
      text: "Delivering the final experience",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          background: `${accent}18`,
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-[0.3em]"
            style={{ color: accent }}
          >
            Interactive Case Study
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Explore the project
          </h2>

          <p className="mt-4 max-w-2xl text-white/50">
            Move your cursor across the visual and explore the different stages
            behind this digital experience.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* =====================================================
              INTERACTIVE VISUAL
          ===================================================== */}

          <div
            ref={visualRef}
            className="relative h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 transition-transform duration-200 ease-out"
          >
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Glow */}
            <div
              className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
              style={{
                background: `${accent}30`,
              }}
            />

            {/* Main Project Card */}
            <div className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-[#080a12]/90 p-6 shadow-2xl backdrop-blur-xl">
              {/* Browser top */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

                <div className="ml-3 h-2 flex-1 rounded-full bg-white/[0.06]" />
              </div>

              {/* Project content */}
              <div className="py-8">
                <p
                  className="text-xs uppercase tracking-[0.25em]"
                  style={{ color: accent }}
                >
                  {category}
                </p>

                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {title}
                </h3>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div
                    className="h-20 rounded-xl border"
                    style={{
                      borderColor: `${accent}30`,
                      background: `${accent}10`,
                    }}
                  />

                  <div className="h-20 rounded-xl border border-white/10 bg-white/[0.04]" />

                  <div className="h-20 rounded-xl border border-white/10 bg-white/[0.04]" />
                </div>

                <div className="mt-4 h-3 w-2/3 rounded-full bg-white/[0.07]" />

                <div className="mt-3 h-3 w-1/2 rounded-full bg-white/[0.04]" />
              </div>
            </div>

            {/* Orbit */}
            <div
              className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 animate-[spin_18s_linear_infinite] rounded-full border"
              style={{
                borderColor: `${accent}25`,
              }}
            >
              <span
                className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full"
                style={{
                  background: accent,
                  boxShadow: `0 0 20px ${accent}`,
                }}
              />
            </div>

            {/* Floating nodes */}
            <div
              className="absolute left-12 top-16 h-3 w-3 animate-pulse rounded-full"
              style={{
                background: accent,
                boxShadow: `0 0 18px ${accent}`,
              }}
            />

            <div
              className="absolute right-16 top-24 h-2.5 w-2.5 animate-pulse rounded-full"
              style={{
                background: accent,
                boxShadow: `0 0 15px ${accent}`,
              }}
            />

            <div
              className="absolute bottom-20 left-20 h-2.5 w-2.5 animate-pulse rounded-full"
              style={{
                background: accent,
                boxShadow: `0 0 15px ${accent}`,
              }}
            />

            {/* Bottom label */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/50 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white/50 backdrop-blur-md">
              {layers[active].label}
            </div>
          </div>

          {/* =====================================================
              INTERACTIVE STAGES
          ===================================================== */}

          <div>
            <div className="space-y-3">
              {layers.map((layer, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={layer.number}
                    type="button"
                    onClick={() => setActive(index)}
                    className="group w-full rounded-2xl border p-5 text-left transition-all duration-300"
                    style={{
                      borderColor: isActive
                        ? `${accent}55`
                        : "rgba(255,255,255,0.08)",
                      background: isActive
                        ? `${accent}0d`
                        : "rgba(255,255,255,0.02)",
                    }}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                        style={{
                          borderColor: isActive
                            ? `${accent}60`
                            : "rgba(255,255,255,0.1)",
                          color: isActive ? accent : "rgba(255,255,255,0.4)",
                          background: isActive
                            ? `${accent}12`
                            : "rgba(255,255,255,0.03)",
                        }}
                      >
                        {layer.number}
                      </div>

                      <div>
                        <h3
                          className="text-lg font-semibold transition-colors"
                          style={{
                            color: isActive ? "white" : "rgba(255,255,255,0.7)",
                          }}
                        >
                          {layer.label}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-white/40">
                          {layer.text}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active stage */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                Current stage
              </p>

              <h3
                className="mt-3 text-2xl font-semibold"
                style={{ color: accent }}
              >
                {layers[active].label}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/50">
                {layers[active].text}. This interactive presentation helps
                visitors understand how the project moves from concept to final
                digital experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
