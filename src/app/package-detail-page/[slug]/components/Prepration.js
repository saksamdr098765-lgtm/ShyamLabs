"use client";

import { motion } from "framer-motion";
import {
  FiCoffee,
  FiDroplet,
  FiMoon,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";

const iconMap = {
  fast: FiMoon,
  water: FiDroplet,
  alcohol: FiCoffee,
  reports: FiFileText,
  medicine: FiCheckCircle,
  relax: FiCheckCircle,
  default: FiCheckCircle,
};

function getIcon(title = "") {
  const text = title.toLowerCase();

  if (text.includes("fast")) return iconMap.fast;

  if (text.includes("water") || text.includes("hydrat"))
    return iconMap.water;

  if (
    text.includes("alcohol") ||
    text.includes("meal") ||
    text.includes("coffee")
  )
    return iconMap.alcohol;

  if (
    text.includes("report") ||
    text.includes("prescription") ||
    text.includes("previous")
  )
    return iconMap.reports;

  if (
    text.includes("medicine") ||
    text.includes("doctor") ||
    text.includes("relax")
  )
    return iconMap.medicine;

  return iconMap.default;
}

export default function Preparation({ pkg }) {
  if (!pkg?.preparation?.length) return null;

  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-20 lg:py-24">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-blue-100/40 blur-3xl sm:h-72 sm:w-72" />

        <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-green-100/40 blur-3xl sm:h-72 sm:w-72" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#78BE43] sm:px-4 sm:py-2 sm:text-xs">
            Before Your Test
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900 sm:mt-5 sm:text-4xl lg:text-5xl">
            Preparation
            <span className="block text-[#0A4F8A]">
              Guidelines
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
            Following these preparation instructions helps ensure
            accurate diagnostic results and a smooth sample collection
            experience.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto mt-10 max-w-4xl sm:mt-14">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-200 sm:left-6" />

          <div className="space-y-5 sm:space-y-7">

            {pkg.preparation.map((step, index) => {
              const Icon = getIcon(step.title);

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                  }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-3 sm:gap-5"
                >
                  {/* Icon */}

                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md ring-4 ring-slate-50 sm:h-12 sm:w-12">
                    <Icon
                      size={18}
                      className="text-[#0A4F8A]"
                    />
                  </div>

                  {/* Card */}

                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#0A4F8A]/20 hover:shadow-lg sm:rounded-3xl sm:p-6">

                    <div className="flex items-start gap-3">

                      <div className="flex shrink-0 h-7 w-7  items-center justify-center rounded-full bg-[#78BE43] text-xs  font-bold text-white sm:h-8 sm:w-8 sm:text-sm">
                        {index + 1}
                      </div>

                      <div className="min-w-0">

                        <h3 className="text-sm font-bold leading-6 text-slate-900 sm:text-lg">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-8">
                          {step.description}
                        </p>

                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl bg-gradient-to-r from-[#0A4F8A] to-[#78BE43] px-5 py-7 text-center text-white shadow-xl sm:mt-16 sm:px-8 sm:py-10"
        >
          <h3 className="text-xl font-black sm:text-3xl">
            Need Help Preparing?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
            If you have questions about fasting, medications, or sample
            collection, our healthcare team is happy to guide you before
            your appointment to ensure a comfortable and hassle-free
            experience.
          </p>
        </motion.div>

      </div>
    </section>
  );
}