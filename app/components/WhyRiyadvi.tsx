"use client";

import { useState } from "react";

const timeline = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "Riyadvi began with a focus on helping businesses build meaningful digital experiences and establish a strong online presence.",
    number: "01",
  },
  {
    year: "2022",
    title: "Building Digital Foundations",
    description:
      "The journey expanded into modern web development, UI/UX design and technology-driven business solutions.",
    number: "02",
  },
  {
    year: "2023",
    title: "Expanding Capabilities",
    description:
      "New digital capabilities were introduced across development, marketing, applications and immersive experiences.",
    number: "03",
  },
  {
    year: "2024",
    title: "Technology & Innovation",
    description:
      "The focus moved toward modern technologies, interactive experiences, AI-assisted workflows and scalable digital products.",
    number: "04",
  },
  {
    year: "2025",
    title: "Experience-Led Growth",
    description:
      "Riyadvi continued bringing strategy, design and technology together to create stronger digital experiences.",
    number: "05",
  },
];

export default function WhyRiyadvi() {
  const [activeYear, setActiveYear] = useState(0);

  const active = timeline[activeYear];

  return (
    <section id="why-riyadvi" className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute left-[-15%] top-1/4 h-[500px] w-[500px] rounded-full bg-[#7c5cff]/10 blur-[150px]" />

      <div className="absolute bottom-[-15%] right-[-10%] h-[450px] w-[450px] rounded-full bg-[#38d9ff]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#38d9ff]">
            Why Riyadvi
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            A journey of
            <span className="gradient-text"> continuous evolution.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/45">
            Since 2021, our journey has evolved around business understanding,
            technology, design and digital innovation.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute bottom-8 left-[28px] top-8 hidden w-px bg-gradient-to-b from-[#7c5cff]/60 via-[#38d9ff]/30 to-transparent sm:block" />

            <div className="space-y-3">
              {timeline.map((item, index) => {
                const isActive = index === activeYear;

                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => setActiveYear(index)}
                    className={`group relative flex w-full items-center gap-6 rounded-2xl border p-5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-[#7c5cff]/40 bg-[#7c5cff]/10"
                        : "border-transparent bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
                    }`}
                  >
                    {/* Year Circle */}
                    <span
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-all duration-300 ${
                        isActive
                          ? "border-[#7c5cff]/60 bg-[#7c5cff]/20 text-[#a78bfa] shadow-[0_0_30px_rgba(124,92,255,0.25)]"
                          : "border-white/10 bg-[#05060a] text-white/30 group-hover:text-white/60"
                      }`}
                    >
                      {item.year}
                    </span>

                    {/* Title */}
                    <div>
                      <p
                        className={`text-base font-semibold transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-white/45 group-hover:text-white/80"
                        }`}
                      >
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs text-white/25">
                        Chapter {item.number}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Experience */}
          <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
            {/* Glow */}
            <div className="absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-[#7c5cff]/20 blur-[100px]" />

            <div className="absolute bottom-[-100px] left-[-100px] h-72 w-72 rounded-full bg-[#38d9ff]/10 blur-[100px]" />

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:40px_40px]" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[360px] flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-7xl font-bold text-[#7c5cff]/15">
                    {active.year}
                  </span>

                  <span className="text-sm tracking-[0.25em] text-white/20">
                    {active.number} / 05
                  </span>
                </div>

                <p className="mt-12 text-xs uppercase tracking-[0.3em] text-[#38d9ff]">
                  Our Journey
                </p>

                <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                  {active.title}
                </h3>

                <p className="mt-6 max-w-xl text-base leading-8 text-white/45">
                  {active.description}
                </p>
              </div>

              {/* Progress */}
              <div className="mt-10">
                <div className="mb-3 flex items-center justify-between text-xs text-white/25">
                  <span>Riyadvi evolution</span>

                  <span>
                    {Math.round(((activeYear + 1) / timeline.length) * 100)}%
                  </span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#7c5cff] to-[#38d9ff] transition-all duration-500"
                    style={{
                      width: `${((activeYear + 1) / timeline.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Years */}
        <div className="mt-10 hidden items-center justify-between md:flex">
          {timeline.map((item, index) => (
            <div key={`year-${item.year}`} className="flex items-center">
              <button
                type="button"
                onClick={() => setActiveYear(index)}
                className={`text-xs transition-colors ${
                  index === activeYear
                    ? "text-[#38d9ff]"
                    : "text-white/25 hover:text-white/60"
                }`}
              >
                {item.year}
              </button>

              {index < timeline.length - 1 && (
                <span className="mx-6 text-white/10">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
