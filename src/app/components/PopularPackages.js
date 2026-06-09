"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart,
  FaTint,
  FaBrain,
  FaUserMd,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    icon: FaUserMd,
    title: "Full Body",
    package: "Full Body Checkup",
    tests: "75+ Parameters",
    price: "₹1,999",
    desc:
      "A complete preventive screening package designed to give a detailed overview of your overall health.",
  },
  {
    icon: FaHeart,
    title: "Heart Health",
    package: "Heart Health Package",
    tests: "35+ Parameters",
    price: "₹2,499",
    desc:
      "Advanced cardiovascular screening focused on early risk detection and monitoring.",
  },
  {
    icon: FaTint,
    title: "Diabetes",
    package: "Diabetes Care",
    tests: "20+ Parameters",
    price: "₹1,499",
    desc:
      "Track blood sugar, metabolic health and key diabetic risk indicators.",
  },
  {
    icon: FaBrain,
    title: "Thyroid",
    package: "Thyroid Profile",
    tests: "10+ Parameters",
    price: "₹999",
    desc:
      "Evaluate thyroid hormone levels and maintain hormonal balance.",
  },
];

export default function PopularPackages() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-green-100/30 to-blue-100/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-2 rounded-full bg-green-50 border border-green-100 text-[#78BE43] text-sm font-semibold">
            HEALTH PACKAGES
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900">
            What Would You Like
            <span className="block text-[#0A4F8A]">
              To Monitor?
            </span>
          </h2>

          <p className="mt-5 text-slate-600">
            Select a health concern and discover the recommended diagnostic package.
          </p>
        </div>

        {/* Interactive Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Menu */}
          <div className="space-y-4">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  onClick={() => setActive(item)}
                  className={`w-full text-left p-5 rounded-3xl transition-all duration-300 border ${
                    active.title === item.title
                      ? "border-[#0A4F8A] bg-blue-50"
                      : "border-slate-100 bg-white hover:border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-14 w-14 rounded-2xl flex items-center justify-center ${
                        active.title === item.title
                          ? "bg-[#0A4F8A] text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <Icon />
                    </div>

                    <div>
                      <h3 className="font-bold text-lg text-slate-900">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-500">
                        Recommended Screening
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0A4F8A] to-[#08345c] p-8 md:p-12 text-white"
            >
              <div className="absolute top-0 right-0 text-[180px] font-black opacity-10 leading-none">
                01
              </div>

              <div className="relative">
                <span className="inline-flex px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm">
                  {active.tests}
                </span>

                <h3 className="mt-6 text-4xl md:text-5xl font-black">
                  {active.package}
                </h3>

                <div className="mt-5 text-5xl font-black text-green-300">
                  {active.price}
                </div>

                <p className="mt-6 text-blue-100 leading-relaxed max-w-lg">
                  {active.desc}
                </p>

                <button className="mt-10 inline-flex items-center gap-3 bg-white text-[#0A4F8A] px-6 py-3 rounded-xl font-semibold">
                  Explore Package
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}