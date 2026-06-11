// app/blog/page.js

import Link from "next/link";
import Image from "next/image";
import { blogs } from "../blogs";
import { FaArrowRight } from "react-icons/fa";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* Grid Background */}
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0A4F8A 1px, transparent 1px), linear-gradient(90deg, #0A4F8A 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 relative">
        <div className="max-w-7xl mx-auto px-5">

          <span className="text-sm font-semibold text-[#78BE43]">
            SHYAM PATHOLOGY LAB
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-black text-slate-900 max-w-4xl">
            Health Insights &
            Diagnostic Awareness
          </h1>

          <p className="mt-6 text-slate-600 max-w-2xl">
            Expert articles about blood tests, preventive healthcare,
            pathology diagnostics and wellness guidance.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group bg-white border shadow-xl border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                   width={600}
  height={400}
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">

                <span className="text-[#78BE43] text-sm font-medium">
                  {blog.date}
                </span>

                <h2 className="mt-3 text-xl font-bold text-slate-900">
                  {blog.title}
                </h2>

                <p className="mt-3 text-slate-600 text-sm line-clamp-3">
                  {blog.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[#0A4F8A] font-semibold">
                  Read Article
                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                </div>

              </div>
            </Link>
          ))}

        </div>
      </section>

    </main>
  );
}