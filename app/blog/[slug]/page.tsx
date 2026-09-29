import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, blogs } from "../../data/blogs";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogArticlePage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#7c5cff]/20 blur-[140px]" />

        <div className="relative mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="text-sm text-[#38d9ff] transition hover:text-white"
          >
            ← Back to Blog
          </Link>

          <div className="mt-10">
            <span className="rounded-full border border-[#7c5cff]/20 bg-[#7c5cff]/10 px-3 py-1 text-xs font-medium text-[#a78bfa]">
              {blog.category}
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight md:text-6xl">
              {blog.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/40">
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
              {blog.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="px-6 pb-28">
        <article className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="space-y-8">
            {blog.content.map((paragraph, index) => (
              <div key={index}>
                <p className="text-lg leading-8 text-white/70">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-2xl border border-[#7c5cff]/20 bg-[#7c5cff]/10 p-7">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a78bfa]">
              Have a project idea?
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              Let&apos;s build something meaningful.
            </h2>

            <p className="mt-3 leading-7 text-white/50">
              Tell us about your project and explore how Riyadvi can help.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-[#7c5cff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8d72ff]"
            >
              Start a Conversation →
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}