import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function TableOfContent({ blog }) {
  if (!blog.tableOfContents?.length) return null;

  return (
    <section className="py-8 md:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-[#f8fbff] to-[#eef6ff] p-6 sm:p-8 md:p-10">

          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-green-100/30 rounded-full blur-3xl" />

          <div className="relative z-10">

            <div className="flex items-center gap-4 mb-4">
              <div className="w-2 h-10 rounded-full bg-gradient-to-b from-[#78BE43] to-[#0A4F8A]" />

              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
                  Table of Contents
                </h2>

                <p className="text-sm sm:text-base text-slate-600 mt-1">
                  Navigate directly to the section you're interested in.
                </p>
              </div>
            </div>

            <div className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">

              {blog.tableOfContents.map((item, index) => (
              <a
  key={item}
  href={`#${item
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replaceAll(" ", "-")}`}
  className="
    group
    flex
    items-center
    justify-between
    py-4
    px-5
    rounded-xl
    bg-white
    border
    border-slate-200
    hover:border-[#0A4F8A]
    hover:bg-blue-50
    transition-all
  "
>
  <span className="font-medium text-slate-800">
    {item}
  </span>

  <FaArrowRight
    className="
      text-slate-400
      group-hover:text-[#0A4F8A]
      group-hover:translate-x-1
      transition
    "
  />
</a>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}