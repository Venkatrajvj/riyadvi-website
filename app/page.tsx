"use client";

import { useEffect, useState } from "react";

import ParticleBackground from "./components/ParticleBackground";
import ThreeHero from "./components/ThreeHero";
import DigitalTransformation from "./components/DigitalTransformation";
import TechnologyEcosystem from "./components/TechnologyEcosystem";
import WhyRiyadvi from "./components/WhyRiyadvi";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and scalable web applications built for modern businesses.",
    href: "/services/web-development",
  },
  {
    number: "02",
    title: "App Development",
    description:
      "Mobile-first digital products designed to create seamless experiences across devices.",
    href: "/services/app-development",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "Data-driven digital strategies that help businesses reach, engage and convert customers.",
    href: "/services/digital-marketing",
  },
  {
    number: "04",
    title: "AR / VR",
    description:
      "Immersive experiences that combine technology, storytelling and interactive environments.",
    href: "/services/ar-vr",
  },
  {
    number: "05",
    title: "3D Modeling",
    description:
      "Interactive 3D assets and experiences designed to bring products and ideas to life.",
    href: "/services/3d-modeling",
  },
  {
    number: "06",
    title: "UI / UX Design",
    description:
      "User-centered interfaces that balance visual quality, usability and business objectives.",
    href: "/services/ui-ux-design",
  },
];

const projects = [
  {
    title: "Puratap",
    category: "Digital Experience",
    description:
      "A modern digital experience focused on product discovery and customer engagement.",
    href: "/portfolio/puratap",
  },
  {
    title: "Wanaromah Perfumers",
    category: "E-Commerce",
    description:
      "A premium digital presence designed around products, storytelling and brand identity.",
    href: "/portfolio/wanaromah-perfumers",
  },
  {
    title: "Laxmi Astro AI",
    category: "AI Platform",
    description:
      "An intelligent digital platform combining AI-driven experiences with modern UI.",
    href: "/portfolio/laxmi-astro-ai",
  },
  {
    title: "Tony & Guy",
    category: "Service Platform",
    description:
      "A polished digital experience designed for service discovery and customer interaction.",
    href: "/portfolio/tony-and-guy",
  },
];

const stats = [
  {
    value: "2021",
    label: "Since",
  },
  {
    value: "10+",
    label: "Projects",
  },
  {
    value: "6",
    label: "Core Services",
  },
  {
    value: "360°",
    label: "Digital Approach",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const cursor = document.createElement("div");

    cursor.className =
      "pointer-events-none fixed left-0 top-0 z-[9999] hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#38d9ff]/30 bg-[#38d9ff]/5 blur-[1px] transition-transform duration-100 md:block";

    document.body.appendChild(cursor);

    const moveCursor = (event: MouseEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
    };

    window.addEventListener("mousemove", moveCursor);

    const magneticElements =
      document.querySelectorAll<HTMLElement>(".magnetic");

    const magneticMove = (event: Event) => {
      const mouseEvent = event as MouseEvent;
      const element = mouseEvent.currentTarget as HTMLElement;

      const rect = element.getBoundingClientRect();

      const x = mouseEvent.clientX - (rect.left + rect.width / 2);

      const y = mouseEvent.clientY - (rect.top + rect.height / 2);

      element.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    };

    const magneticLeave = (event: Event) => {
      const element = event.currentTarget as HTMLElement;

      element.style.transform = "translate(0px, 0px)";
    };

    magneticElements.forEach((element) => {
      element.addEventListener("mousemove", magneticMove);
      element.addEventListener("mouseleave", magneticLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      magneticElements.forEach((element) => {
        element.removeEventListener("mousemove", magneticMove);
        element.removeEventListener("mouseleave", magneticLeave);
      });

      cursor.remove();
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060a] text-white">
      {/* =====================================================
          GLOBAL BACKGROUND
      ====================================================== */}

      <ParticleBackground />

      {/* Aurora Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="aurora-glow absolute left-[-20%] top-[-20%] h-[600px] w-[600px] rounded-full bg-[#7c5cff]/10 blur-[140px]" />

        <div className="aurora-glow absolute right-[-20%] top-[20%] h-[600px] w-[600px] rounded-full bg-[#38d9ff]/10 blur-[140px]" />

        <div className="absolute bottom-[-20%] left-[20%] h-[500px] w-[500px] rounded-full bg-[#7c5cff]/5 blur-[140px]" />
      </div>

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#05060a]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="magnetic group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7c5cff]/30 bg-[#7c5cff]/10 text-sm font-bold text-[#a78bfa] shadow-[0_0_25px_rgba(124,92,255,0.15)]">
              R
            </span>

            <div>
              <p className="text-sm font-bold tracking-[0.15em]">RIYADVI</p>

              <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                Digital Experiences
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="text-sm text-white/70 transition hover:text-white"
            >
              Home
            </a>

            <a
              href="/services"
              className="text-sm text-white/50 transition hover:text-white"
            >
              Services
            </a>

            <a
              href="/portfolio"
              className="text-sm text-white/50 transition hover:text-white"
            >
              Portfolio
            </a>

            <a
              href="/about"
              className="text-sm text-white/50 transition hover:text-white"
            >
              About
            </a>

            <a
              href="/blog"
              className="text-sm text-white/50 transition hover:text-white"
            >
              Blog
            </a>

            <a
              href="/careers"
              className="text-sm text-white/50 transition hover:text-white"
            >
              Careers
            </a>
          </nav>

          {/* Desktop CTA */}
          <a
            href="/contact"
            className="magnetic hidden rounded-full border border-[#7c5cff]/30 bg-[#7c5cff]/10 px-5 py-2.5 text-sm font-medium text-[#a78bfa] transition hover:border-[#7c5cff]/60 hover:bg-[#7c5cff]/20 md:block"
          >
            Let's Talk
          </a>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/70 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-xl">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/5 bg-[#05060a]/95 px-6 py-6 backdrop-blur-xl md:hidden">
            <nav className="flex flex-col gap-5">
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-white"
              >
                Home
              </a>

              <a
                href="/services"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-white/60"
              >
                Services
              </a>

              <a
                href="/portfolio"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-white/60"
              >
                Portfolio
              </a>

              <a
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-white/60"
              >
                About
              </a>

              <a
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-white/60"
              >
                Blog
              </a>

              <a
                href="/careers"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-white/60"
              >
                Careers
              </a>

              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex w-fit rounded-full border border-[#7c5cff]/30 bg-[#7c5cff]/10 px-5 py-2.5 text-sm text-[#a78bfa]"
              >
                Let's Talk
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden pt-20">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          {/* Hero Content */}
          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#38d9ff] shadow-[0_0_15px_#38d9ff]" />

              <span className="text-xs uppercase tracking-[0.25em] text-white/50">
                Digital Innovation Studio
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Building digital
              <span className="block gradient-text">experiences</span>
              that move people.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/45">
              We combine strategy, design, technology, AI and immersive
              experiences to create digital products that help businesses grow.
            </p>

            {/* Hero Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="magnetic group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#05060a] transition hover:bg-[#38d9ff]"
              >
                Start a Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/portfolio"
                className="magnetic inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/70 transition hover:border-[#7c5cff]/40 hover:text-white"
              >
                Explore Work
              </a>
            </div>

            {/* Hero Mini Info */}
            <div className="mt-14 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-bold">2021</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/30">
                  Since
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">10+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/30">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">6</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/30">
                  Services
                </p>
              </div>
            </div>
          </div>

          {/* 3D Hero */}
          <div className="relative z-10 flex min-h-[500px] items-center justify-center lg:min-h-[650px]">
            <div className="absolute h-[420px] w-[420px] rounded-full bg-[#7c5cff]/10 blur-[100px]" />

            <div className="relative h-full w-full">
              <ThreeHero />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#services"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/30 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>

          <span className="h-10 w-px bg-gradient-to-b from-[#38d9ff] to-transparent" />
        </a>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-r border-white/5 px-6 py-10 last:border-r-0"
            >
              <p className="text-3xl font-bold sm:text-4xl">{stat.value}</p>

              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/30">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section id="services" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#38d9ff]">
                What We Do
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl lg:text-6xl">
                Digital solutions
                <span className="gradient-text"> built to evolve.</span>
              </h2>
            </div>

            <a
              href="/services"
              className="magnetic inline-flex w-fit items-center gap-2 text-sm text-white/50 transition hover:text-white"
            >
              View all services
              <span>→</span>
            </a>
          </div>

          {/* Service Grid */}
          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.number}
                href={service.href}
                className="group relative min-h-[280px] bg-[#08090f] p-8 transition duration-500 hover:bg-[#0d0e17]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-[#7c5cff]/60">
                    {service.number}
                  </span>

                  <span className="text-white/20 transition duration-300 group-hover:translate-x-1 group-hover:text-[#38d9ff]">
                    ↗
                  </span>
                </div>

                <div className="mt-20">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-[#a78bfa]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/35">
                    {service.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#7c5cff] to-[#38d9ff] transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DIGITAL TRANSFORMATION
      ====================================================== */}

      <div id="transformation">
        <DigitalTransformation />
      </div>

      {/* =====================================================
          TECHNOLOGY ECOSYSTEM
      ====================================================== */}

      <TechnologyEcosystem />

      <WhyRiyadvi />

      {/* =====================================================
          ABOUT / WHY RIYADVI
      ====================================================== */}

      <section id="about" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#38d9ff]">
                Why Riyadvi
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                Technology with
                <span className="gradient-text"> business purpose.</span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/45">
                We don't build technology for technology's sake. Every digital
                experience starts with understanding the business challenge and
                ends with measurable value.
              </p>

              <a
                href="/about"
                className="magnetic mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm text-white/70 transition hover:border-[#7c5cff]/40 hover:text-white"
              >
                Discover Riyadvi
                <span>→</span>
              </a>
            </div>

            {/* Values */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-3xl p-7">
                <span className="text-3xl text-[#7c5cff]">◈</span>

                <h3 className="mt-6 text-lg font-semibold">Strategy First</h3>

                <p className="mt-3 text-sm leading-7 text-white/35">
                  Business understanding guides every product decision.
                </p>
              </div>

              <div className="glass rounded-3xl p-7">
                <span className="text-3xl text-[#38d9ff]">◇</span>

                <h3 className="mt-6 text-lg font-semibold">Human Centered</h3>

                <p className="mt-3 text-sm leading-7 text-white/35">
                  Experiences are designed around real people and real needs.
                </p>
              </div>

              <div className="glass rounded-3xl p-7">
                <span className="text-3xl text-[#a78bfa]">⌘</span>

                <h3 className="mt-6 text-lg font-semibold">
                  Modern Technology
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/35">
                  Modern frameworks, AI and immersive technology power our
                  solutions.
                </p>
              </div>

              <div className="glass rounded-3xl p-7">
                <span className="text-3xl text-[#38d9ff]">∞</span>

                <h3 className="mt-6 text-lg font-semibold">
                  Continuous Growth
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/35">
                  Products evolve through data, feedback and continuous
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PORTFOLIO
      ====================================================== */}

      <section id="portfolio" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#38d9ff]">
                Selected Work
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                Projects built with
                <span className="gradient-text"> purpose.</span>
              </h2>
            </div>

            <a
              href="/portfolio"
              className="magnetic inline-flex w-fit items-center gap-2 text-sm text-white/50 transition hover:text-white"
            >
              View portfolio
              <span>→</span>
            </a>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <a
                key={project.title}
                href={project.href}
                className="group relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 transition duration-500 hover:border-[#7c5cff]/30"
              >
                {/* Visual */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(124,92,255,0.14),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(56,217,255,0.08),transparent_30%)] opacity-60 transition duration-500 group-hover:scale-110" />

                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:40px_40px]" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#38d9ff]/70">
                      {project.category}
                    </span>

                    <span className="text-xs text-white/20">0{index + 1}</span>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold transition-colors group-hover:text-[#a78bfa]">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/35">
                      {project.description}
                    </p>

                    <div className="mt-7 inline-flex items-center gap-2 text-sm text-white/40 transition group-hover:text-white">
                      View case study
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEAD GENERATION
      ====================================================== */}

      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#7c5cff]/20 bg-[#7c5cff]/5 p-8 md:p-14 lg:p-20">
            <div className="absolute right-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#7c5cff]/15 blur-[100px]" />

            <div className="absolute bottom-[-120px] left-[-80px] h-[300px] w-[300px] rounded-full bg-[#38d9ff]/10 blur-[100px]" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
                  Free Resource
                </p>

                <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                  Planning a software
                  <span className="gradient-text"> project?</span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/45">
                  Get a practical project planning guide to understand
                  requirements, technology, execution and delivery.
                </p>
              </div>

              <a
                href="/software-project-planning-guide"
                className="magnetic inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#05060a] transition hover:bg-[#38d9ff]"
              >
                Get the Guide
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS HEALTH CHECKUP
      ====================================================== */}

      <section className="relative pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="glass rounded-[2rem] p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
                  Digital Assessment
                </p>

                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Understand where your
                  <span className="gradient-text">
                    {" "}
                    digital business stands.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
                  Complete the Business Health Checkup and identify
                  opportunities across your digital presence, technology and
                  customer experience.
                </p>
              </div>

              <a
                href="/business-health-checkup"
                className="magnetic inline-flex w-fit items-center gap-3 rounded-full border border-[#38d9ff]/30 bg-[#38d9ff]/5 px-6 py-3.5 text-sm text-[#38d9ff] transition hover:bg-[#38d9ff]/10"
              >
                Start Checkup
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ====================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/5 py-32"
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c5cff]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#38d9ff]">
            Let's Build
          </p>

          <h2 className="mt-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Have an idea?
            <span className="block gradient-text">Let's make it real.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/40">
            Tell us about your business, product or digital challenge. Let's
            explore what we can build together.
          </p>

          <a
            href="/contact"
            className="magnetic mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#05060a] transition hover:bg-[#38d9ff]"
          >
            Start a Conversation
            <span>→</span>
          </a>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold tracking-[0.15em]">RIYADVI</p>

              <p className="mt-2 text-xs text-white/30">
                Building digital experiences that move people.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-xs text-white/30">
              <a href="/services" className="transition hover:text-white">
                Services
              </a>

              <a href="/portfolio" className="transition hover:text-white">
                Portfolio
              </a>

              <a href="/about" className="transition hover:text-white">
                About
              </a>

              <a href="/blog" className="transition hover:text-white">
                Blog
              </a>

              <a href="/contact" className="transition hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-white/5 pt-6 text-xs text-white/20">
            © {new Date().getFullYear()} Riyadvi. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
