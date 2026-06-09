"use client";

import { motion } from "framer-motion";
import {
  FaTint,
  FaHeartbeat,
  FaBrain,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    title: "Blood Tests",
    tests: "120+ Parameters",
    icon: FaTint,
    color: "bg-red-50",
    accent: "text-red-500",
    border: "border-red-100",
  },
  {
    title: "Heart Health",
    tests: "Cardiac Risk Assessment",
    icon: FaHeartbeat,
    color: "bg-pink-50",
    accent: "text-pink-500",
    border: "border-pink-100",
  },
  {
    title: "Diabetes",
    tests: "HbA1c • Fasting • PP",
    icon: FaBolt,
    color: "bg-orange-50",
    accent: "text-orange-500",
    border: "border-orange-100",
  },
  {
    title: "Thyroid",
    tests: "T3 • T4 • TSH",
    icon: FaBrain,
    color: "bg-sky-50",
    accent: "text-sky-500",
    border: "border-sky-100",
  },
];

export default function TestCategories() {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#0A4F8A 1px, transparent 1px),
            linear-gradient(90deg, #0A4F8A 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-gradient-to-r from-green-100/40 to-blue-100/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex px-4 py-2 rounded-full border border-green-100 bg-green-50 text-[#78BE43] text-sm font-semibold">
            POPULAR DIAGNOSTICS
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Choose The Right
            <span className="block text-[#0A4F8A]">
              Health Screening
            </span>
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            Preventive screening packages designed to detect
            health concerns early and help you stay ahead.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          {/* Featured Card */}
          <motion.div
            whileHover={{ y: -6 }}
            className="
              lg:col-span-6
              rounded-[36px]
              bg-gradient-to-br
              from-[#0A4F8A]
              to-[#08345c]
              overflow-hidden
              p-8
              md:p-10
              relative
              text-white
            "
          >
            <div className="absolute right-0 top-0 text-[250px] opacity-10">
              🩸
            </div>

            <span className="text-green-300 text-sm font-semibold tracking-wider">
              MOST BOOKED TEST
            </span>

            <h3 className="mt-4 text-4xl md:text-6xl font-black">
              Blood
              <br />
              Testing
            </h3>

            <p className="mt-6 text-white/70 max-w-md">
              Comprehensive blood analysis for cholesterol,
              diabetes, thyroid, vitamin deficiency and
              preventive screening.
            </p>

            <div className="mt-10 flex items-center gap-8">
              <div>
                <h4 className="text-5xl font-black">120+</h4>
                <p className="text-white/60">
                  Parameters
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-black">24H</h4>
                <p className="text-white/60">
                  Reporting
                </p>
              </div>
            </div>

            <button className="mt-10 bg-white text-[#0A4F8A] px-6 py-4 rounded-2xl font-semibold flex items-center gap-3">
              Explore Tests
              <FaArrowRight />
            </button>
          </motion.div>

          {/* Side Cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
            {categories.slice(1).map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className={`
                    rounded-[30px]
                    ${item.color}
                    border
                    ${item.border}
                    p-6
                    relative
                    overflow-hidden
                  `}
                >
                  <div className="absolute right-3 top-3 opacity-10">
                    <Icon size={120} />
                  </div>

                  <div
                    className={`
                      h-14 w-14 rounded-2xl bg-white
                      flex items-center justify-center
                      shadow-sm
                    `}
                  >
                    <Icon
                      className={`${item.accent} text-xl`}
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {item.tests}
                  </p>

                  <button className="mt-8 flex items-center gap-2 font-semibold text-[#0A4F8A]">
                    View Details
                    <FaArrowRight size={12} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}