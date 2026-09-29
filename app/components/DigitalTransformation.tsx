"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Business Challenge",
    description:
      "Understand the business problem, users, goals and opportunities before building the solution.",
    icon: "◈",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Define the right digital strategy, product direction, technology approach and execution roadmap.",
    icon: "⌁",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Create intuitive interfaces, meaningful user journeys and a visual language for the product.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Technology",
    description:
      "Turn the strategy into a scalable digital product using modern frontend, backend and database technologies.",
    icon: "⌘",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Test, optimize and deploy the product with a focus on reliability, performance and usability.",
    icon: "↗",
  },
  {
    number: "06",
    title: "Growth",
    description:
      "Measure results, learn from users and continuously improve the digital experience.",
    icon: "∞",
  },
];

export default function DigitalTransformation() {
  const [activeStep, setActiveStep] = useState(0);

  const active = steps[activeStep];

  return (
    <section
      id="transformation"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glows */}
      <div className="absolute left-[-10%] top-1/3 h-[450px] w-[450px] rounded-full bg-[#7c5cff]/10 blur-[140px]" />

      <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-[#38d9ff]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#38d9ff]">
            Digital Transformation
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            From business challenge
            <span className="gradient-text"> to digital growth.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            A structured approach that connects business thinking, design,
            technology and continuous improvement.
          </p>
        </div>

        {/* Interactive Area */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Steps */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute bottom-6 left-[23px] top-6 hidden w-px bg-gradient-to-b from-[#7c5cff]/60 via-[#38d9ff]/30 to-transparent sm:block" />

            <div className="space-y-3">
              {steps.map((step, index) => {
                const isActive = index === activeStep;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`group relative flex w-full items-center gap-5 rounded-2xl border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-[#7c5cff]/40 bg-[#7c5cff]/10"
                        : "border-transparent bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
                    }`}
                  >
                    {/* Number */}
                    <span
                      className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "border-[#7c5cff]/50 bg-[#7c5cff]/20 text-[#a78bfa] shadow-[0_0_25px_rgba(124,92,255,0.2)]"
                          : "border-white/10 bg-[#05060a] text-white/30 group-hover:text-white/60"
                      }`}
                    >
                      {step.number}
                    </span>

                    {/* Step Info */}
                    <div>
                      <p
                        className={`text-base font-semibold transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-white/50 group-hover:text-white/80"
                        }`}
                      >
                        {step.title}
                      </p>

                      <p className="mt-1 text-xs text-white/30">
                        Step {index + 1} of {steps.length}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Experience */}
          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
            {/* Violet Glow */}
            <div className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-[#7c5cff]/20 blur-[90px]" />

            {/* Cyan Glow */}
            <div className="absolute bottom-[-100px] left-[-80px] h-64 w-64 rounded-full bg-[#38d9ff]/10 blur-[90px]" />

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:40px_40px]" />

            {/* Active Content */}
            <div className="relative z-10 flex min-h-[350px] flex-col justify-between">
              <div>
                {/* Icon + Number */}
                <div className="flex items-center justify-between">
                  <span className="text-6xl text-[#7c5cff]/30">
                    {active.icon}
                  </span>

                  <span className="text-sm font-medium tracking-[0.2em] text-white/20">
                    {active.number}
                  </span>
                </div>

                {/* Step Label */}
                <p className="mt-10 text-xs font-medium uppercase tracking-[0.3em] text-[#38d9ff]">
                  {active.number} / 06
                </p>

                {/* Title */}
                <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                  {active.title}
                </h3>

                {/* Description */}
                <p className="mt-5 max-w-xl text-base leading-8 text-white/50">
                  {active.description}
                </p>
              </div>

              {/* Progress */}
              <div className="mt-10">
                <div className="mb-3 flex justify-between text-xs text-white/30">
                  <span>Transformation journey</span>

                  <span>
                    {Math.round(
                      ((activeStep + 1) / steps.length) * 100
                    )}
                    %
                  </span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#7c5cff] to-[#38d9ff] transition-all duration-500"
                    style={{
                      width: `${
                        ((activeStep + 1) / steps.length) * 100
                      }%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Flow */}
        <div className="mt-10 hidden items-center justify-between md:flex">
          {steps.map((step, index) => (
            <div
              key={`flow-${step.number}`}
              className="flex items-center"
            >
              <button
                type="button"
                onClick={() => setActiveStep(index)}
                className={`text-xs transition-colors ${
                  index === activeStep
                    ? "text-[#38d9ff]"
                    : "text-white/25 hover:text-white/60"
                }`}
              >
                {step.title}
              </button>

              {index < steps.length - 1 && (
                <span className="mx-4 text-white/10">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}