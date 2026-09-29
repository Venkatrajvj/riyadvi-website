"use client";

import { useState } from "react";

const technologies = [
  {
    name: "React",
    category: "Frontend",
    description:
      "Build reusable and interactive user interfaces with a component-driven architecture.",
    symbol: "⚛",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description:
      "Create fast, scalable and production-ready web applications with modern React architecture.",
    symbol: "▲",
  },
  {
    name: "Node.js",
    category: "Backend",
    description:
      "Build scalable backend services and APIs using JavaScript on the server.",
    symbol: "⬢",
  },
  {
    name: "MongoDB",
    category: "Database",
    description:
      "Flexible NoSQL database technology for applications that need scalable document storage.",
    symbol: "◆",
  },
  {
    name: "MySQL",
    category: "Database",
    description:
      "Reliable relational database technology for structured application data and business systems.",
    symbol: "◈",
  },
  {
    name: "JavaScript",
    category: "Language",
    description:
      "Power interactive web experiences, application logic and modern frontend functionality.",
    symbol: "JS",
  },
  {
    name: "Three.js",
    category: "3D",
    description:
      "Create immersive 3D scenes, objects and visual experiences directly in the browser.",
    symbol: "✦",
  },
  {
    name: "React Three Fiber",
    category: "3D",
    description:
      "Bring Three.js experiences into React using a declarative component-based approach.",
    symbol: "R3F",
  },
  {
    name: "WordPress",
    category: "CMS",
    description:
      "Create flexible content-driven websites and business platforms with a powerful CMS.",
    symbol: "W",
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Language",
  "3D",
  "CMS",
];

export default function TechnologyEcosystem() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTech, setActiveTech] = useState("React");

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter(
          (technology) => technology.category === activeCategory,
        );

  const selectedTechnology =
    technologies.find((technology) => technology.name === activeTech) ??
    technologies[0];

  return (
    <section className="relative overflow-hidden py-32">
      {/* Background glow */}
      <div className="absolute left-[-10%] top-1/4 h-[400px] w-[400px] rounded-full bg-[#7c5cff]/10 blur-[140px]" />

      <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-[#38d9ff]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#38d9ff]">
            Technology Ecosystem
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Built with the
            <span className="gradient-text"> right technology.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            A modern technology ecosystem designed to build scalable,
            interactive and reliable digital products.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-sm transition-all duration-300 ${
                  isActive
                    ? "border-[#7c5cff]/50 bg-[#7c5cff]/15 text-[#c4b5fd]"
                    : "border-white/10 bg-white/[0.02] text-white/40 hover:border-white/20 hover:text-white/80"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Technology Grid + Detail */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Technology cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTechnologies.map((technology) => {
              const isActive = activeTech === technology.name;

              return (
                <button
                  key={technology.name}
                  type="button"
                  onClick={() => setActiveTech(technology.name)}
                  className={`group relative overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 ${
                    isActive
                      ? "border-[#7c5cff]/40 bg-[#7c5cff]/10"
                      : "border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-[#7c5cff]/30 hover:bg-white/[0.05]"
                  }`}
                >
                  {/* Card glow */}
                  <div
                    className={`absolute right-[-40px] top-[-40px] h-28 w-28 rounded-full blur-[50px] transition-opacity ${
                      isActive
                        ? "bg-[#7c5cff]/30 opacity-100"
                        : "bg-[#38d9ff]/20 opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  <div className="relative">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-lg font-bold transition-all ${
                        isActive
                          ? "border-[#7c5cff]/40 bg-[#7c5cff]/15 text-[#c4b5fd]"
                          : "border-white/10 bg-white/[0.03] text-white/60 group-hover:text-white"
                      }`}
                    >
                      {technology.symbol}
                    </div>

                    <p className="mt-6 text-lg font-semibold text-white">
                      {technology.name}
                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#38d9ff]/70">
                      {technology.category}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected technology */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#7c5cff]/15 blur-[90px]" />

            <div className="absolute bottom-[-100px] left-[-80px] h-60 w-60 rounded-full bg-[#38d9ff]/10 blur-[90px]" />

            <div className="relative z-10 flex min-h-[320px] flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#7c5cff]/30 bg-[#7c5cff]/10 text-xl font-bold text-[#c4b5fd]">
                    {selectedTechnology.symbol}
                  </div>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/30">
                    {selectedTechnology.category}
                  </span>
                </div>

                <p className="mt-10 text-xs uppercase tracking-[0.3em] text-[#38d9ff]">
                  Selected technology
                </p>

                <h3 className="mt-4 text-3xl font-bold">
                  {selectedTechnology.name}
                </h3>

                <p className="mt-5 leading-8 text-white/50">
                  {selectedTechnology.description}
                </p>
              </div>

              <div className="mt-10">
                <div className="h-px w-full bg-white/10" />

                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-white/25">
                  Part of our digital stack
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology flow */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/40">
            <span>Design</span>
            <span className="text-[#7c5cff]">→</span>

            <span>Frontend</span>
            <span className="text-[#7c5cff]">→</span>

            <span>Backend</span>
            <span className="text-[#38d9ff]">→</span>

            <span>Database</span>
            <span className="text-[#38d9ff]">→</span>

            <span>3D / Interactive</span>
            <span className="text-[#7c5cff]">→</span>

            <span className="text-white/70">Digital Product</span>
          </div>
        </div>
      </div>
    </section>
  );
}
