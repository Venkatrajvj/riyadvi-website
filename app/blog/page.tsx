import Link from "next/link";
import { blogs } from "../data/blogs";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7c5cff]/20 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#38d9ff]">
            Insights & Ideas
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
            The <span className="gradient-text">Riyadvi Blog</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/60">
            Ideas, insights and practical perspectives on software, technology,
            design and interactive digital experiences.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#7c5cff]/40 hover:bg-white/[0.05]"
            >
              {/* CATEGORY */}
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-[#7c5cff]/20 bg-[#7c5cff]/10 px-3 py-1 text-xs font-medium text-[#a78bfa]">
                  {blog.category}
                </span>

                <span className="text-xs text-white/30">{blog.readTime}</span>
              </div>

              {/* TITLE */}
              <h2 className="mt-7 text-2xl font-bold leading-tight transition group-hover:text-[#a78bfa]">
                {blog.title}
              </h2>

              {/* EXCERPT */}
              <p className="mt-4 leading-7 text-white/50">{blog.excerpt}</p>

              {/* DATE */}
              <p className="mt-6 text-xs text-white/30">{blog.date}</p>

              {/* LINK */}
              <Link
                href={`/blog/${blog.slug}`}
                className="mt-7 inline-flex items-center text-sm font-semibold text-[#38d9ff] transition hover:text-white"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
