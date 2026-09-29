import Link from "next/link";
import { careers } from "../data/careers";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7c5cff]/20 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#38d9ff]">
            Careers
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
            Build the future with{" "}
            <span className="gradient-text">Riyadvi.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/60">
            Explore opportunities to work on modern software, digital
            experiences, interactive products and emerging technologies.
          </p>
        </div>
      </section>

      {/* OPENINGS */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
              Open positions
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Find your next opportunity.
            </h2>
          </div>

          <div className="space-y-5">
            {careers.map((career) => (
              <article
                key={career.slug}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-[#7c5cff]/40 hover:bg-white/[0.05] md:p-8"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex flex-wrap gap-3 text-xs">
                      <span className="rounded-full border border-[#7c5cff]/20 bg-[#7c5cff]/10 px-3 py-1 text-[#a78bfa]">
                        {career.type}
                      </span>

                      <span className="rounded-full border border-white/10 px-3 py-1 text-white/40">
                        {career.location}
                      </span>

                      <span className="rounded-full border border-white/10 px-3 py-1 text-white/40">
                        {career.experience}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold transition group-hover:text-[#a78bfa]">
                      {career.title}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-7 text-white/50">
                      {career.description}
                    </p>
                  </div>

                  <Link
                    href={`/careers/${career.slug}`}
                    className="inline-flex shrink-0 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-[#7c5cff]/50 hover:bg-[#7c5cff]/10 hover:text-white"
                  >
                    View Position →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}