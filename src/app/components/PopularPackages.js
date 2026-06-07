"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const packages = [
  {
    id: "01",
    name: "Full Body Checkup",
    price: "₹1,999",
    tests: "75+ Parameters",
    description:
      "Comprehensive screening designed to provide a complete overview of your health.",
  },
  {
    id: "02",
    name: "Heart Health",
    price: "₹2,499",
    tests: "35+ Parameters",
    description:
      "Advanced cardiovascular screening for early risk detection and monitoring.",
  },
  {
    id: "03",
    name: "Diabetes Care",
    price: "₹1,499",
    tests: "20+ Parameters",
    description:
      "Essential glucose and metabolic markers for proactive diabetes management.",
  },
  {
    id: "04",
    name: "Thyroid Profile",
    price: "₹999",
    tests: "10+ Parameters",
    description:
      "Accurate thyroid assessment to evaluate hormonal balance and function.",
  },
];

export default function PopularPackages() {
  return (
    <section className="relative bg-[#050816] py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Health Packages
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white leading-tight">
            Prevent Today.
            <br />
            Detect Earlier.
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Curated diagnostic packages designed to help you stay ahead of
            health concerns through accurate and proactive screening.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />
              </div>

              {/* Package Number */}
              <div className="flex items-start justify-between">
                <span className="text-6xl font-black text-white/10">
                  {pkg.id}
                </span>

                <span className="text-cyan-400 text-sm uppercase tracking-[3px]">
                  {pkg.tests}
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-10">
                <h3 className="text-3xl font-bold text-white">
                  {pkg.name}
                </h3>

                <div className="mt-4 text-4xl font-black text-cyan-400">
                  {pkg.price}
                </div>

                <p className="mt-5 text-gray-400 leading-relaxed">
                  {pkg.description}
                </p>

                <button className="mt-8 flex items-center gap-3 text-white font-medium group/button">
                  Explore Package

                  <FaArrowRight className="transition-transform duration-300 group-hover/button:translate-x-1" />
                </button>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}