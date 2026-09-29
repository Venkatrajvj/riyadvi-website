"use client";

import { FormEvent, useState } from "react";

export default function ProjectPlanningGuidePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
    };

    try {
      const response = await fetch("/api/project-planning", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Something went wrong. Please try again.",
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7c5cff]/20 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#38d9ff]">
            Free Resource
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
            Software Project{" "}
            <span className="gradient-text">Planning Guide</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/60">
            Get a practical guide to help structure your software project,
            understand key requirements and plan your digital product journey.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          {/* GUIDE INFO */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
              What's inside
            </p>

            <h2 className="mt-5 text-3xl font-bold">Plan before you build.</h2>

            <p className="mt-5 leading-7 text-white/50">
              A well-planned software project starts with clear goals,
              requirements, technology decisions and a realistic execution
              approach.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Project goals and requirements",
                "Feature planning",
                "Technology considerations",
                "Development phases",
                "Launch preparation",
                "Growth and future improvements",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7c5cff]/15 text-sm text-[#a78bfa]">
                    {index + 1}
                  </span>

                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FORM / SUCCESS */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            {submitted ? (
              <div className="flex min-h-[500px] items-center justify-center text-center">
                <div>
                  {/* SUCCESS ICON */}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#38d9ff]/30 bg-[#38d9ff]/10 text-2xl text-[#38d9ff]">
                    ✓
                  </div>

                  {/* SUCCESS TITLE */}
                  <h2 className="mt-6 text-3xl font-bold">Request received.</h2>

                  {/* SUCCESS MESSAGE */}
                  <p className="mx-auto mt-4 max-w-md leading-7 text-white/50">
                    Thanks! Your details have been saved successfully. The
                    planning guide is ready to be accessed.
                  </p>

                  {/* DOWNLOAD BUTTON */}
                  <a
                    href="/software-project-planning-guide.pdf"
                    download
                    className="mt-8 inline-flex rounded-full bg-[#7c5cff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8d72ff]"
                  >
                    Download Planning Guide →
                  </a>

                  {/* SUBMIT AGAIN */}
                  <div>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setError("");
                      }}
                      className="mt-6 rounded-full border border-white/10 px-6 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* NAME */}
                <div>
                  <label className="text-sm text-white/60">Name</label>

                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none transition placeholder:text-white/25 focus:border-[#7c5cff]/50"
                  />
                </div>

                {/* COMPANY */}
                <div>
                  <label className="text-sm text-white/60">Company</label>

                  <input
                    name="company"
                    required
                    type="text"
                    placeholder="Company name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none transition placeholder:text-white/25 focus:border-[#7c5cff]/50"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm text-white/60">Email</label>

                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none transition placeholder:text-white/25 focus:border-[#7c5cff]/50"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-sm text-white/60">Phone</label>

                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none transition placeholder:text-white/25 focus:border-[#7c5cff]/50"
                  />
                </div>

                {/* ERROR */}
                {error && (
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                    {error}
                  </div>
                )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className="magnetic-button w-full rounded-full bg-[#7c5cff] px-7 py-4 text-sm font-semibold text-[#05060a] transition hover:bg-[#8d72ff] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Processing..." : "Get the Planning Guide →"}
                </button>

                <p className="text-center text-xs leading-5 text-white/30">
                  Your details will be securely saved to help us process your
                  request.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
