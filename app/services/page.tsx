"use client";

import Link from "next/link";
import { services } from "../data/services";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#7c5cff]/15 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#38d9ff]">
            What We Do
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Digital solutions built for{" "}
            <span className="gradient-text">real growth.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
            From websites and applications to immersive 3D experiences and
            digital strategy, we create technology that moves businesses
            forward.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
            >
              {/* Glow */}
              <div
                className="absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                style={{ background: service.accent }}
              />

              {/* Number */}
              <div className="relative flex items-center justify-between">
                <span className="text-sm font-medium text-white/30">
                  0{index + 1}
                </span>

                <span
                  className="text-2xl transition-transform duration-500 group-hover:translate-x-2"
                  style={{ color: service.accent }}
                >
                  →
                </span>
              </div>

              {/* Icon */}
              <div
                className="relative mt-12 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 text-sm font-bold"
                style={{
                  background: `${service.accent}12`,
                  color: service.accent,
                }}
              >
                {service.shortTitle}
              </div>

              {/* Content */}
              <h2 className="relative mt-7 text-2xl font-semibold">
                {service.title}
              </h2>

              <p className="relative mt-4 min-h-[96px] text-sm leading-7 text-white/55">
                {service.description}
              </p>

              {/* Features */}
              <div className="relative mt-6 flex flex-wrap gap-2">
                {service.features.slice(0, 3).map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="relative mt-8 text-sm font-semibold text-white/70 transition-colors group-hover:text-white">
                Explore service
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-16 text-center md:px-16">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#7c5cff]/20 blur-[100px]" />

          <div className="relative">
            <p className="text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
              Have a project in mind?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
              Let's build something{" "}
              <span className="gradient-text">meaningful.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-white/50">
              Tell us what you are building and let's explore the right
              technology for your business.
            </p>

            <Link
              href="/contact"
              className="magnetic-button mt-8 inline-flex rounded-full border border-[#7c5cff]/40 bg-[#7c5cff]/15 px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-[#7c5cff]/25"
            >
              Get a Quote →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
