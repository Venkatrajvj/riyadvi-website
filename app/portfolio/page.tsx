import Link from "next/link";
import { projects } from "../data/projects";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7c5cff]/15 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#38d9ff]">
            Selected Work
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Digital experiences built for{" "}
            <span className="gradient-text">real businesses.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
            Explore our selected projects across technology, healthcare,
            lifestyle, real estate and other industries.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]"
            >
              {/* Glow */}
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#7c5cff]/10 blur-[90px] transition-all duration-500 group-hover:bg-[#38d9ff]/15" />

              <div className="relative flex items-center justify-between">
                <span className="text-sm text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xl text-[#38d9ff] transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </div>

              {/* Visual */}
              <div className="relative mt-8 flex h-56 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#7c5cff]/10 to-[#38d9ff]/5">
                <div className="absolute h-32 w-32 rounded-full bg-[#7c5cff]/20 blur-3xl" />

                <div className="relative text-center">
                  <div className="text-4xl font-bold text-white/80">
                    {project.title.charAt(0)}
                  </div>

                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/30">
                    Case Study
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="relative mt-7">
                <p className="text-xs uppercase tracking-[0.25em] text-[#38d9ff]">
                  {project.industry}
                </p>

                <h2 className="mt-3 text-2xl font-semibold">{project.title}</h2>

                <p className="mt-4 line-clamp-3 text-sm leading-7 text-white/50">
                  {project.solution}
                </p>
              </div>

              {/* Technologies */}
              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="relative mt-7 text-sm font-semibold text-white/60 transition-colors group-hover:text-white">
                View Case Study →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-16 text-center md:px-16">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#7c5cff]/20 blur-[100px]" />

          <div className="relative">
            <p className="text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
              Have a project?
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
              Let's build your next{" "}
              <span className="gradient-text">digital experience.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-white/50">
              Tell us about your idea and let's turn it into a scalable digital
              product.
            </p>

            <Link
              href="/contact"
              className="magnetic-button mt-8 inline-flex rounded-full border border-[#7c5cff]/40 bg-[#7c5cff]/15 px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-[#7c5cff]/25"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
