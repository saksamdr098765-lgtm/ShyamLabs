import packagesData from "@/app/packagesData";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function PopularTests({ location }) {
  const locationPackages = packagesData.filter((pkg) =>
    location.featuredPackages.includes(pkg.slug)
  );

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0A4F8A 1px, transparent 1px), linear-gradient(90deg, #0A4F8A 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5">

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-[#78BE43]/10 text-[#78BE43] text-sm font-semibold">
            MOST BOOKED HEALTH PACKAGES
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-black text-slate-900">
            Popular  Tests in {location.city}
          </h2>

          <p className="mt-5 text-slate-600 leading-relaxed">
            Explore the most recommended blood tests, thyroid profiles,
            diabetes screening packages, full body checkups, vitamin tests,
            and preventive health packages available in {location.city}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {locationPackages.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="group bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0A4F8A] transition-colors">
                  {item.title}
                </h3>

                <div className="w-10 h-10 rounded-full bg-[#0A4F8A]/10 flex items-center justify-center text-[#0A4F8A] group-hover:bg-[#0A4F8A] group-hover:text-white transition">
                  <FaArrowRight size={14} />
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 line-clamp-3">
                {item.description}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-100">
                <span className="text-[#0A4F8A] font-semibold text-sm">
                  View Package Details →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}