"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiHome,
  FiClock,
  FiShield,
  FiDroplet,
  FiCalendar,
} from "react-icons/fi";

export default function QuickInfo({ pkg }) {
  const items = [
    {
      icon: FiActivity,
      title: "Tests Included",
      value: `${pkg?.testsCount || pkg?.includedTests?.length || 0}+ Tests`,
      bg: "from-sky-100 to-cyan-100",
      iconColor: "text-sky-700",
    },
    {
      icon: FiHome,
      title: "Collection",
      value: pkg?.homeCollection ? "Home Available" : "Lab Visit",
      bg: "from-emerald-100 to-green-100",
      iconColor: "text-emerald-700",
    },
    {
      icon: FiClock,
      title: "Reports",
      value: pkg?.reportTime || "24–48 Hours",
      bg: "from-violet-100 to-indigo-100",
      iconColor: "text-violet-700",
    },
    {
      icon: FiDroplet,
      title: "Sample Type",
      value: "Blood & Urine",
      bg: "from-rose-100 to-pink-100",
      iconColor: "text-rose-700",
    },
    {
      icon: FiCalendar,
      title: "Preparation",
      value: pkg?.fasting || "No Fasting",
      bg: "from-amber-100 to-yellow-100",
      iconColor: "text-amber-700",
    },
    {
      icon: FiShield,
      title: "Quality",
      value: "NABL Standards",
      bg: "from-cyan-100 to-sky-100",
      iconColor: "text-cyan-700",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-sky-50/40 via-white to-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-sky-700 sm:text-sm">
            Package Information
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything You Need
            <span className="block text-sky-600">
              Before You Book
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Review the important details including sample collection,
            preparation, reporting time and testing information.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-6 xl:grid-cols-6">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.4,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-sky-200
                  hover:shadow-xl
                "
              >
                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    ${item.bg}
                    transition
                    duration-300
                    group-hover:scale-105
                  `}
                >
                  <Icon className={item.iconColor} size={24} />
                </div>

                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {item.title}
                </p>

                <h3 className="mt-2 text-sm font-bold leading-6 text-slate-900 sm:text-base">
                  {item.value}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}