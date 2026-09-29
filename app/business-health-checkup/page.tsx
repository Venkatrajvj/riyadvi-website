"use client";

import { FormEvent, useState } from "react";

const steps = ["Business", "Goals", "Technology", "Contact"];

type FormData = {
  businessName: string;
  industry: string;
  digitalPresence: string;
  primaryGoal: string;
  biggestChallenge: string;
  serviceNeed: string;
  currentTechnology: string;
  additionalRequirements: string;
  name: string;
  email: string;
  phone: string;
};

const initialFormData: FormData = {
  businessName: "",
  industry: "",
  digitalPresence: "",
  primaryGoal: "",
  biggestChallenge: "",
  serviceNeed: "",
  currentTechnology: "",
  additionalRequirements: "",
  name: "",
  email: "",
  phone: "",
};

export default function BusinessHealthCheckupPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<FormData>(initialFormData);

  function updateField(field: keyof FormData, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function nextStep() {
    setError("");

    if (step === 0) {
      if (
        !formData.businessName.trim() ||
        !formData.industry ||
        !formData.digitalPresence
      ) {
        setError("Please complete all required fields in this step.");
        return;
      }
    }

    if (step === 1) {
      if (!formData.primaryGoal || !formData.biggestChallenge.trim()) {
        setError("Please complete all required fields in this step.");
        return;
      }
    }

    if (step === 2) {
      if (!formData.serviceNeed || !formData.currentTechnology.trim()) {
        setError("Please complete all required fields in this step.");
        return;
      }
    }

    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function previousStep() {
    setError("");
    setStep((current) => Math.max(current - 1, 0));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (
      !formData.businessName.trim() ||
      !formData.industry ||
      !formData.digitalPresence ||
      !formData.primaryGoal ||
      !formData.biggestChallenge.trim() ||
      !formData.serviceNeed ||
      !formData.currentTechnology.trim() ||
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/health-checkup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong. Please try again.",
        );
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#05060a] px-6 text-white">
        <div className="max-w-xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#38d9ff]/30 bg-[#38d9ff]/10 text-3xl text-[#38d9ff]">
            ✓
          </div>

          <h1 className="mt-8 text-4xl font-bold md:text-5xl">
            Checkup submitted.
          </h1>

          <p className="mt-5 leading-8 text-white/50">
            Thanks for sharing your business information. Your digital health
            checkup request has been captured successfully.
          </p>

          <button
            onClick={() => {
              setSubmitted(false);
              setStep(0);
              setFormData(initialFormData);
              setError("");
            }}
            className="mt-8 rounded-full border border-white/10 px-7 py-3 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            Start Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-12 pt-32">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7c5cff]/20 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#38d9ff]">
            Business Health Checkup
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl">
            Understand where your business stands{" "}
            <span className="gradient-text">digitally.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/55">
            Answer a few questions about your business, goals and technology
            needs to help identify areas for digital improvement.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-4xl">
          {/* PROGRESS */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              {steps.map((item, index) => (
                <div key={item} className="flex items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold ${
                      index <= step
                        ? "border-[#7c5cff] bg-[#7c5cff]/20 text-[#a78bfa]"
                        : "border-white/10 text-white/30"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <span
                    className={`ml-2 hidden text-xs sm:block ${
                      index <= step ? "text-white/70" : "text-white/30"
                    }`}
                  >
                    {item}
                  </span>

                  {index < steps.length - 1 && (
                    <div
                      className={`mx-3 hidden h-px w-8 sm:block md:w-20 ${
                        index < step ? "bg-[#7c5cff]" : "bg-white/10"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-10"
          >
            {/* STEP 1 */}
            {step === 0 && (
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
                  Step 01
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  Tell us about your business
                </h2>

                <div className="mt-8 space-y-6">
                  {/* Business Name */}
                  <div>
                    <label className="text-sm text-white/60">
                      Business Name
                    </label>

                    <input
                      required
                      type="text"
                      value={formData.businessName}
                      onChange={(e) =>
                        updateField("businessName", e.target.value)
                      }
                      placeholder="Your business name"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none placeholder:text-white/25 focus:border-[#7c5cff]/50"
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="text-sm text-white/60">Industry</label>

                    <select
                      required
                      value={formData.industry}
                      onChange={(e) => updateField("industry", e.target.value)}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-[#080912] px-4 py-3.5 text-sm text-white/70 outline-none focus:border-[#7c5cff]/50"
                    >
                      <option value="" disabled>
                        Select industry
                      </option>

                      <option>Healthcare</option>
                      <option>E-commerce</option>
                      <option>Education</option>
                      <option>Real Estate</option>
                      <option>Technology</option>
                      <option>Finance</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Digital Presence */}
                  <div>
                    <label className="text-sm text-white/60">
                      Current Digital Presence
                    </label>

                    <select
                      required
                      value={formData.digitalPresence}
                      onChange={(e) =>
                        updateField("digitalPresence", e.target.value)
                      }
                      className="mt-2 w-full rounded-xl border border-white/10 bg-[#080912] px-4 py-3.5 text-sm text-white/70 outline-none focus:border-[#7c5cff]/50"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>

                      <option>Website</option>
                      <option>Mobile App</option>
                      <option>Website + App</option>
                      <option>Social Media Only</option>
                      <option>No Digital Presence</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 1 && (
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
                  Step 02
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  What are your goals?
                </h2>

                <div className="mt-8 space-y-6">
                  {/* Primary Goal */}
                  <div>
                    <label className="text-sm text-white/60">
                      Primary Goal
                    </label>

                    <select
                      required
                      value={formData.primaryGoal}
                      onChange={(e) =>
                        updateField("primaryGoal", e.target.value)
                      }
                      className="mt-2 w-full rounded-xl border border-white/10 bg-[#080912] px-4 py-3.5 text-sm text-white/70 outline-none focus:border-[#7c5cff]/50"
                    >
                      <option value="" disabled>
                        Select your goal
                      </option>

                      <option>Build a new digital product</option>

                      <option>Improve existing website</option>

                      <option>Improve customer experience</option>

                      <option>Increase online visibility</option>

                      <option>Automate business processes</option>
                    </select>
                  </div>

                  {/* Biggest Challenge */}
                  <div>
                    <label className="text-sm text-white/60">
                      Biggest Challenge
                    </label>

                    <textarea
                      required
                      rows={5}
                      value={formData.biggestChallenge}
                      onChange={(e) =>
                        updateField("biggestChallenge", e.target.value)
                      }
                      placeholder="Describe your biggest digital challenge..."
                      className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none placeholder:text-white/25 focus:border-[#7c5cff]/50"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 2 && (
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
                  Step 03
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  Technology & digital needs
                </h2>

                <div className="mt-8 space-y-6">
                  {/* Services */}
                  <div>
                    <label className="text-sm text-white/60">
                      Services You Need
                    </label>

                    <select
                      required
                      value={formData.serviceNeed}
                      onChange={(e) =>
                        updateField("serviceNeed", e.target.value)
                      }
                      className="mt-2 w-full rounded-xl border border-white/10 bg-[#080912] px-4 py-3.5 text-sm text-white/70 outline-none focus:border-[#7c5cff]/50"
                    >
                      <option value="" disabled>
                        Select primary requirement
                      </option>

                      <option>Web Development</option>
                      <option>App Development</option>
                      <option>Digital Marketing</option>
                      <option>AR / VR</option>
                      <option>3D Modeling</option>
                      <option>UI/UX Design</option>
                    </select>
                  </div>

                  {/* Current Technology */}
                  <div>
                    <label className="text-sm text-white/60">
                      Current Technology
                    </label>

                    <input
                      required
                      type="text"
                      value={formData.currentTechnology}
                      onChange={(e) =>
                        updateField("currentTechnology", e.target.value)
                      }
                      placeholder="Example: WordPress, React, Java..."
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none placeholder:text-white/25 focus:border-[#7c5cff]/50"
                    />
                  </div>

                  {/* Additional Requirements */}
                  <div>
                    <label className="text-sm text-white/60">
                      Additional Requirements
                    </label>

                    <textarea
                      rows={5}
                      value={formData.additionalRequirements}
                      onChange={(e) =>
                        updateField("additionalRequirements", e.target.value)
                      }
                      placeholder="Anything else we should know?"
                      className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none placeholder:text-white/25 focus:border-[#7c5cff]/50"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 3 && (
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
                  Step 04
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                  How can we reach you?
                </h2>

                <div className="mt-8 space-y-6">
                  {/* Name */}
                  <div>
                    <label className="text-sm text-white/60">Name</label>

                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none placeholder:text-white/25 focus:border-[#7c5cff]/50"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm text-white/60">Email</label>

                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none placeholder:text-white/25 focus:border-[#7c5cff]/50"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-sm text-white/60">Phone</label>

                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm outline-none placeholder:text-white/25 focus:border-[#7c5cff]/50"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <div className="mt-6 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            {/* BUTTONS */}
            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
              {/* Previous */}
              <button
                type="button"
                onClick={previousStep}
                disabled={step === 0 || loading}
                className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/60 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-20"
              >
                ← Previous
              </button>

              {/* Continue */}
              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={loading}
                  className="rounded-full bg-[#7c5cff] px-7 py-3 text-sm font-semibold text-[#05060a] transition hover:bg-[#8d72ff] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Continue →
                </button>
              ) : (
                /* Submit */
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-[#38d9ff] px-7 py-3 text-sm font-semibold text-[#05060a] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Checkup →"}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
