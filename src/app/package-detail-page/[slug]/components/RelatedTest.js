"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiActivity,
  FiCheckCircle,
  FiClock,
  FiHome,
} from "react-icons/fi";
import PackageCard from "@/app/components/PackageCard";

export default function RelatedPackages({
  packages = [],
  currentSlug,
}) {
  const related = packages
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section className="bg-gradient-to-b from-white via-sky-50/40 to-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Header */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-sky-700 sm:text-sm">
              Related Packages
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Explore Similar
              <span className="block text-sky-600">
                Health Packages
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Discover preventive health packages designed for routine
              wellness screening, early disease detection and complete
              health monitoring.
            </p>
          </div>

          <Link
            href="/packages"
            className="group inline-flex items-center gap-2 font-semibold text-sky-600 transition hover:text-sky-700"
          >
            View All Packages

            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards */}

        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {related.map((pkg, index) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
              }}
              viewport={{ once: true }}
            >
             <PackageCard pkg={pkg}></PackageCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}