"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiClock,
  FiHome,
  FiStar,
} from "react-icons/fi";

export default function PackageImage({ pkg }) {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-100/40 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#78BE43]">
            Package Overview
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {pkg.name}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Everything included in your health package at a glance.
          </p>

        </motion.div>

        {/* Card */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
        >

          {/* Image */}

          <div className="bg-gradient-to-b from-slate-50 to-white p-5 sm:p-8">

            <div className="relative mx-auto h-[280px] w-full max-w-4xl sm:h-[420px] lg:h-[550px]">

              <Image
                src={pkg.posterImage || pkg.image}
                alt={pkg.name}
                fill
                priority
                className="object-contain"
              />

            </div>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 border-t border-slate-200 lg:grid-cols-4">

            <Stat
              icon={<FiCheckCircle />}
              color="text-[#78BE43]"
              label="Tests"
              value={`${pkg.testsCount}+`}
            />

            <Stat
              icon={<FiHome />}
              color="text-[#0A4F8A]"
              label="Collection"
              value={pkg.homeCollection ? "Home Available" : "Lab Visit"}
            />

            <Stat
              icon={<FiClock />}
              color="text-[#0A4F8A]"
              label="Reports"
              value={pkg.reportTime}
            />

            <Stat
              icon={<FiStar />}
              color="text-yellow-500"
              label="Rating"
              value={`${pkg.rating} ★`}
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

function Stat({
  icon,
  color,
  label,
  value,
}) {
  return (
    <div className="border-b border-r border-slate-200 p-5 last:border-r-0 lg:border-b-0">

      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-xl ${color}`}>
        {icon}
      </div>

      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-lg font-bold text-slate-900">
        {value}
      </p>

    </div>
  );
}