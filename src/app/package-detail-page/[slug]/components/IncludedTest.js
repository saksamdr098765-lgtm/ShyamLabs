"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiHeart,
  FiDroplet,
  FiShield,
  FiSun,
  FiCheck,
  FiDatabase,
} from "react-icons/fi";

const iconMap = {
  Diabetes: FiActivity,
  Heart: FiHeart,
  Liver: FiShield,
  Kidney: FiDroplet,
  Thyroid: FiSun,
  Blood: FiDatabase,
  Iron: FiActivity,
  Electrolyte: FiDroplet,
  Urine: FiDroplet,
};

export default function IncludedTests({ pkg }) {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-100/40 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#78BE43]">
            Included Tests
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            What's Included In
            <span className="block text-[#0A4F8A]">
              {pkg.name}
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Comprehensive diagnostic investigations covering major
            organs and body systems for a complete preventive health
            assessment.
          </p>

        </motion.div>

        {/* Categories */}

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {pkg.testCategories.map((category, index) => {

            const Icon =
              Object.entries(iconMap).find(([key]) =>
                category.title.includes(key)
              )?.[1] || FiActivity;

            return (

              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="
rounded-3xl
border
border-slate-200
bg-white
p-5
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:border-[#0A4F8A]/20
hover:shadow-lg
"
              >

                {/* Header */}

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A4F8A]/10">

                    <Icon
                      className="text-[#0A4F8A]"
                      size={24}
                    />

                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {category.tests.length} Tests Included
                    </p>

                  </div>

                </div>

                {/* Tests */}

                <div className="mt-6 space-y-3">

                  {category.tests.map((test) => (

                    <div
                      key={test}
                      className="flex items-start gap-3"
                    >

                      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">

                        <FiCheck
                          size={12}
                          className="text-[#78BE43]"
                        />

                      </div>

                      <span className="text-sm leading-6 text-slate-700">
                        {test}
                      </span>

                    </div>

                  ))}

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom Card */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-3xl bg-gradient-to-r from-[#0A4F8A] to-[#78BE43] p-6 text-center text-white sm:mt-16 sm:p-8"
        >

          <h3 className="text-2xl font-black">
            Comprehensive Health Screening
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/90 sm:text-base">
            This package combines multiple diagnostic investigations
            into one convenient health checkup, helping detect health
            conditions early while giving you a complete picture of
            your overall wellness.
          </p>

        </motion.div>

      </div>

    </section>
  );
}