"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
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
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      service: String(formData.get("service") || ""),
      project: String(formData.get("project") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Something went wrong while submitting the form.",
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while submitting the form.",
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

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#38d9ff]">
            Contact
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Let's build something{" "}
            <span className="gradient-text">meaningful.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
            Tell us about your project, business challenge or idea. We'll
            explore the right digital solution with you.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* INFO */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#a78bfa]">
              Start a conversation
            </p>

            <h2 className="mt-5 text-3xl font-bold">
              Tell us what you're building.
            </h2>

            <p className="mt-5 leading-7 text-white/50">
              Whether you need a website, application, UI/UX design, immersive
              experience or a custom digital solution, let's discuss it.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Email
                </p>
                <p className="mt-2 text-white/75">hello@riyadvi.com</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Services
                </p>
                <p className="mt-2 text-white/75">
                  Web · Apps · UI/UX · AR/VR · 3D · Marketing
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Response
                </p>
                <p className="mt-2 text-white/75">
                  Tell us your requirements and we'll get back to you.
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            {submitted ? (
              <div className="flex min-h-[500px] items-center justify-center text-center">
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#38d9ff]/30 bg-[#38d9ff]/10 text-2xl text-[#38d9ff]">
                    ✓
                  </div>

                  <h2 className="mt-6 text-3xl font-bold">Message received.</h2>

                  <p className="mx-auto mt-4 max-w-md leading-7 text-white/50">
                    Thanks for reaching out. Your project details have been
                    successfully saved.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setError("");
                    }}
                    className="mt-8 rounded-full border border-white/10 px-6 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
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
                </div>

                <div>
                  <label className="text-sm text-white/60">Company</label>

                  <input
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none transition placeholder:text-white/25 focus:border-[#7c5cff]/50"
                  />
                </div>

                <div>
                  <label className="text-sm text-white/60">Service</label>

                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#080912] px-4 py-3.5 text-sm text-white/70 outline-none focus:border-[#7c5cff]/50"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Web Development</option>
                    <option>App Development</option>
                    <option>Digital Marketing</option>
                    <option>AR / VR</option>
                    <option>3D Modeling</option>
                    <option>UI/UX Design</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-white/60">
                    Project Details
                  </label>

                  <textarea
                    name="project"
                    required
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none transition placeholder:text-white/25 focus:border-[#7c5cff]/50"
                  />
                </div>

                {error && (
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="magnetic-button w-full rounded-full bg-[#7c5cff] px-7 py-4 text-sm font-semibold text-[#05060a] transition hover:bg-[#8d72ff] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Project Enquiry →"}
                </button>

                <p className="text-center text-xs text-white/30">
                  Your enquiry will be securely saved for follow-up.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
