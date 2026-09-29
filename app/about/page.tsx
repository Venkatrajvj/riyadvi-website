import Link from "next/link";

const timeline = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "Riyadvi started with a vision to create meaningful digital solutions for modern businesses.",
  },
  {
    year: "2022",
    title: "Growing Digital",
    description:
      "The focus expanded across web development, UI/UX and technology-driven business solutions.",
  },
  {
    year: "2023",
    title: "Expanding Experiences",
    description:
      "Interactive experiences, modern frontend technologies and creative digital solutions became a stronger focus.",
  },
  {
    year: "2024",
    title: "Technology & Innovation",
    description:
      "The technology ecosystem continued growing with modern frameworks, immersive experiences and scalable architectures.",
  },
  {
    year: "2025",
    title: "Building What's Next",
    description:
      "Riyadvi continues exploring new ways to combine technology, design, AI and interactive experiences.",
  },
];

const values = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We explore modern technologies and new approaches to solve business problems.",
  },
  {
    number: "02",
    title: "Experience",
    description:
      "Every digital experience should be intuitive, useful and memorable.",
  },
  {
    number: "03",
    title: "Quality",
    description:
      "We focus on clean execution, scalable architecture and thoughtful details.",
  },
  {
    number: "04",
    title: "Partnership",
    description:
      "We work alongside businesses to understand their goals and build meaningful solutions.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-32">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7c5cff]/20 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#38d9ff]">
            About Riyadvi
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            We build digital experiences that{" "}
            <span className="gradient-text">move businesses forward.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            Riyadvi brings together technology, design and digital thinking to
            create modern experiences for businesses and their customers.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
              Who We Are
            </p>

            <h2 className="mt-5 text-4xl font-bold md:text-5xl">
              Technology with purpose.
            </h2>

            <p className="mt-6 leading-8 text-white/55">
              We believe technology should do more than simply look good. It
              should solve problems, improve experiences and create measurable
              value for businesses.
            </p>

            <p className="mt-5 leading-8 text-white/55">
              Our approach combines strategy, UI/UX, frontend engineering,
              backend architecture and emerging technologies to create complete
              digital experiences.
            </p>
          </div>

          {/* VISUAL */}
          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
            <div className="absolute h-72 w-72 rounded-full bg-[#7c5cff]/20 blur-[100px]" />

            <div className="relative h-52 w-52 rounded-full border border-[#7c5cff]/40 bg-[#7c5cff]/10 shadow-[0_0_100px_rgba(124,92,255,0.25)]">
              <div className="absolute inset-6 rounded-full border border-[#38d9ff]/40" />

              <div className="absolute inset-12 rounded-full border border-[#a78bfa]/40" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold">R</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY RIYADVI */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
            Why Riyadvi
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
            Built around technology, creativity and business understanding.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.number}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.06]"
              >
                <span className="text-sm text-[#7c5cff]">{value.number}</span>

                <h3 className="mt-8 text-xl font-semibold">{value.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
            Our Journey
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            From 2021 to what's next.
          </h2>

          <div className="relative mt-16">
            <div className="absolute bottom-0 left-[19px] top-0 w-px bg-white/10 md:left-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative grid gap-8 md:grid-cols-2 md:gap-16 ${
                    index % 2 === 0 ? "" : "md:text-right"
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 0 ? "md:pr-16" : "md:order-2 md:pl-16"
                    } pl-14 md:pl-0`}
                  >
                    <p className="text-4xl font-bold text-[#7c5cff]">
                      {item.year}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-white/50">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className={`hidden md:block ${
                      index % 2 === 0 ? "" : "md:order-1"
                    }`}
                  />

                  <div className="absolute left-[10px] top-2 flex h-5 w-5 items-center justify-center rounded-full border border-[#38d9ff]/50 bg-[#05060a] md:left-1/2 md:-translate-x-1/2">
                    <div className="h-2 w-2 rounded-full bg-[#38d9ff]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28 pt-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-16 text-center md:px-16">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#7c5cff]/20 blur-[100px]" />

          <div className="relative">
            <p className="text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
              Let's Work Together
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold md:text-5xl">
              Have an idea worth{" "}
              <span className="gradient-text">building?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-white/50">
              Let's turn your business challenge into a meaningful digital
              experience.
            </p>

            <Link
              href="/contact"
              className="magnetic-button mt-8 inline-flex rounded-full border border-[#7c5cff]/40 bg-[#7c5cff]/15 px-8 py-4 text-sm font-semibold transition hover:bg-[#7c5cff]/25"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
