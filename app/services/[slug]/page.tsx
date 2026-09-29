import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "../../data/services";
import InteractiveServiceHero from "../../components/InteractiveServiceHero";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      {/* =========================================================
          INTERACTIVE SERVICE HERO
      ========================================================= */}

      <InteractiveServiceHero
        title={service.title}
        description={service.description}
        eyebrow={service.shortTitle}
      />

      {/* =========================================================
          PROBLEM + SOLUTION
      ========================================================= */}

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {/* PROBLEM */}

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-white/30">
              The Challenge
            </p>

            <h2 className="mt-5 text-3xl font-semibold">
              The problem businesses face
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              {service.problem}
            </p>
          </div>

          {/* SOLUTION */}

          <div
            className="rounded-3xl border p-8 md:p-10"
            style={{
              borderColor: `${service.accent}30`,
              background: `${service.accent}08`,
            }}
          >
            <p
              className="text-sm uppercase tracking-[0.25em]"
              style={{ color: service.accent }}
            >
              Our Approach
            </p>

            <h2 className="mt-5 text-3xl font-semibold">
              How we solve it
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              {service.solution}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p
            className="text-sm uppercase tracking-[0.3em]"
            style={{ color: service.accent }}
          >
            Capabilities
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            What we deliver
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <span
                  className="text-sm font-semibold"
                  style={{ color: service.accent }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-lg font-semibold">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/30">
            Technology
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Technology ecosystem
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {service.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/65 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/30">
            Industries
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Where it can be applied
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {service.industries.map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center text-sm text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p
            className="text-sm uppercase tracking-[0.3em]"
            style={{ color: service.accent }}
          >
            Process
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            From idea to launch
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {service.process.map((step, index) => (
              <div key={step} className="relative">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border text-sm font-bold"
                  style={{
                    borderColor: `${service.accent}55`,
                    color: service.accent,
                    background: `${service.accent}10`,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-sm font-semibold">
                  {step}
                </h3>

                {index < service.process.length - 1 && (
                  <div
                    className="absolute left-14 top-7 hidden h-px w-full lg:block"
                    style={{
                      background: `${service.accent}20`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="px-6 pb-28 pt-20">
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border px-8 py-16 text-center md:px-16"
          style={{
            borderColor: `${service.accent}30`,
            background: `${service.accent}08`,
          }}
        >
          {/* Glow */}

          <div
            className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full blur-[100px]"
            style={{
              background: `${service.accent}20`,
            }}
          />

          <div className="relative">
            <p
              className="text-sm uppercase tracking-[0.3em]"
              style={{ color: service.accent }}
            >
              Start a project
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
              Let's create something{" "}
              <span className="gradient-text">remarkable.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-white/50">
              Have a project in mind? Let's discuss your requirements,
              goals and technology needs.
            </p>

            <Link
              href="/contact"
              className="magnetic-button mt-8 inline-flex rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: service.accent,
                color: "#05060a",
              }}
            >
              Get a Quote →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}