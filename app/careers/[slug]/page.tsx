import Link from "next/link";
import { notFound } from "next/navigation";
import { careers, getCareerBySlug } from "../../data/careers";

type CareerPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return careers.map((career) => ({
    slug: career.slug,
  }));
}

export default async function CareerDetailPage({ params }: CareerPageProps) {
  const { slug } = await params;
  const career = getCareerBySlug(slug);

  if (!career) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7c5cff]/20 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl">
          <Link
            href="/careers"
            className="inline-flex items-center text-sm text-white/40 transition hover:text-white"
          >
            ← Back to Careers
          </Link>

          <div className="mt-10 flex flex-wrap gap-3 text-xs">
            <span className="rounded-full border border-[#7c5cff]/20 bg-[#7c5cff]/10 px-4 py-2 text-[#a78bfa]">
              {career.type}
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-white/50">
              {career.location}
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-white/50">
              {career.experience}
            </span>
          </div>

          <h1 className="mt-7 text-5xl font-bold leading-tight md:text-7xl">
            {career.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/50">
            {career.description}
          </p>
        </div>
      </section>

      {/* Job Details */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.35fr]">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Responsibilities */}
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
                Responsibilities
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                What you&apos;ll work on
              </h2>

              <div className="mt-8 space-y-4">
                {career.responsibilities.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7c5cff]/15 text-sm text-[#a78bfa]">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-white/60">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
                Requirements
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                What we&apos;re looking for
              </h2>

              <div className="mt-8 space-y-4">
                {career.requirements.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                  >
                    <span className="mt-1 text-[#38d9ff]">✓</span>

                    <p className="text-sm leading-6 text-white/60">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-7 lg:sticky lg:top-28">
            <p className="text-sm uppercase tracking-[0.3em] text-white/30">
              Position
            </p>

            <h2 className="mt-4 text-2xl font-bold">{career.title}</h2>

            <div className="mt-7 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/30">
                  Location
                </p>
                <p className="mt-1 text-sm text-white/70">{career.location}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-white/30">
                  Employment
                </p>
                <p className="mt-1 text-sm text-white/70">{career.type}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-white/30">
                  Experience
                </p>
                <p className="mt-1 text-sm text-white/70">
                  {career.experience}
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 flex w-full items-center justify-center rounded-full bg-[#7c5cff] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#8d72ff]"
            >
              Apply / Get in Touch →
            </Link>

            <p className="mt-4 text-center text-xs leading-5 text-white/30">
              Interested in this opportunity? Contact the Riyadvi team to
              discuss the position.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
