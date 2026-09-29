import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "../../data/projects";
import InteractiveProjectVisual from "../../components/InteractiveProjectVisual";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7c5cff]/20 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/portfolio"
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Back to Portfolio
          </Link>

          <p className="mt-12 text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
            {project.industry} / Case Study
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-bold md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
            {project.solution}
          </p>

          <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
            <div>
              <p className="text-sm text-white/40">Client</p>
              <p className="mt-2 font-medium">{project.client}</p>
            </div>

            <div>
              <p className="text-sm text-white/40">Industry</p>
              <p className="mt-2 font-medium">{project.industry}</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE PROJECT VISUAL
      ========================================================= */}

      <InteractiveProjectVisual
        title={project.title}
        category={project.industry}
        accent="#7c5cff"
      />

      {/* =========================================================
          CHALLENGE & SOLUTION
      ========================================================= */}

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a78bfa]">
              01 / Challenge
            </p>

            <h2 className="mt-5 text-3xl font-semibold">
              The business challenge
            </h2>

            <p className="mt-5 leading-8 text-white/55">{project.challenge}</p>
          </article>

          <article className="rounded-3xl border border-[#7c5cff]/20 bg-[#7c5cff]/[0.05] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[#38d9ff]">
              02 / Solution
            </p>

            <h2 className="mt-5 text-3xl font-semibold">Our approach</h2>

            <p className="mt-5 leading-8 text-white/55">{project.solution}</p>
          </article>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
            03 / Technology
          </p>

          <h2 className="mt-4 text-4xl font-bold">Technology stack</h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/65 transition-all duration-300 hover:border-[#7c5cff]/40 hover:bg-[#7c5cff]/10 hover:text-white"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OUTCOMES
      ========================================================= */}

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
            04 / Outcomes
          </p>

          <h2 className="mt-4 text-4xl font-bold">Project highlights</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {project.results.map((result, index) => (
              <div
                key={result}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-sm text-[#38d9ff]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-4 leading-7 text-white/70">{result}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-white/35">
            These are intended project highlights, not independently verified
            client results.
          </p>
        </div>
      </section>

      {/* =========================================================
          RELATED SERVICES
      ========================================================= */}

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold">Related services</h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.relatedServices.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition-all duration-300 hover:border-[#7c5cff]/40 hover:bg-[#7c5cff]/10 hover:text-white"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="px-6 pb-28 pt-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-16 text-center">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#7c5cff]/10 blur-[100px]" />

          <div className="relative">
            <p className="text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
              Your next project
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
              Have an idea? Let's build it.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-white/50">
              Tell us about your business goals and explore the right digital
              solution for your project.
            </p>

            <Link
              href="/contact"
              className="magnetic-button mt-8 inline-flex rounded-full border border-[#7c5cff]/40 bg-[#7c5cff]/15 px-7 py-4 text-sm font-semibold transition hover:bg-[#7c5cff]/25"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
