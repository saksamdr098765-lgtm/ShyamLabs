import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/app/data/blogs";
import { FaArrowRight } from "react-icons/fa";
import SITE_CONFIG from "@/app/siteConfig";

export const metadata = {
  title: `Health Blogs & Diagnostic Insights | ${SITE_CONFIG.name}`,
  description:
    "Read expert articles on blood tests, pathology diagnostics, preventive healthcare, wellness tips, and medical test awareness from Shyam Budget Friendly Labs.",
  keywords: [
    "health blogs",
    "pathology blog",
    "diagnostic tests",
    "blood test guide",
    "CBC test",
    "Vitamin D test",
    "health checkup",
    "medical tests",
    "pathology lab",
    "Shyam Budget Friendly Labs",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/blogs`,
  },
  openGraph: {
    title: `Health Blogs & Diagnostic Insights | ${SITE_CONFIG.name}`,
    description:
      "Expert healthcare articles, pathology insights, blood test guides, and wellness information.",
    url: `${SITE_CONFIG.url}/blogs`,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Shyam Budget Friendly Labs Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Blogs & Diagnostic Insights",
    description:
      "Expert articles on pathology, blood tests, preventive healthcare, and wellness.",
    images: [`${SITE_CONFIG.url}/logo.png`],
  },
};

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
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 relative">
        <div className="max-w-7xl mx-auto px-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#78BE43]">
            SHYAM PATHOLOGY LAB
          </span>

          <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 max-w-4xl">
            Health Insights & Diagnostic Awareness
          </h1>

          <p className="mt-4 text-slate-600 max-w-2xl text-sm sm:text-base">
            Expert articles about blood tests, preventive healthcare, pathology diagnostics and wellness guidance.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(blogs || []).map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group bg-white border shadow-xl border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-50">
                  <Image
                    src={blog.coverImage || blog.image || "/logo.png"}
                    alt={blog.title}
                    width={600}
                    height={400}
                    className="object-cover h-full w-full group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <span className="text-[#78BE43] text-xs font-bold uppercase tracking-wider">
                    {blog.publishedAt || blog.date || "Latest Update"}
                  </span>

                  <h2 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-[#0A4F8A]">
                    {blog.title}
                  </h2>

                  <p className="mt-2 text-slate-600 text-xs leading-5 line-clamp-3">
                    {blog.excerpt || blog.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <div className="flex items-center gap-2 text-[#0A4F8A] text-xs font-bold">
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