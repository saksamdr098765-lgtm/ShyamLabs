"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaTint,
  FaHeartbeat,
  FaBrain,
  FaBolt,
} from "react-icons/fa";

const categories = [
  {
    title: "Blood Tests",
    tests: "120+ Tests Available",
    icon: FaTint,
  },
  {
    title: "Diabetes",
    tests: "HbA1c, Fasting, PP",
    icon: FaBolt,
  },
  {
    title: "Thyroid",
    tests: "T3, T4, TSH Profiles",
    icon: FaBrain,
  },
  {
    title: "Heart Health",
    tests: "Cardiac Risk Assessment",
    icon: FaHeartbeat,
  },
  {
    title: "Liver Profile",
    tests: "Comprehensive Liver Screening",
    icon: FaTint,
  },
  {
    title: "Kidney Function",
    tests: "Renal Health Diagnostics",
    icon: FaBolt,
  },
];

export default function TestCategories() {
  return (
    <section className="relative bg-[#050816] py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[600px] bg-cyan-500/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Diagnostic Categories
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Explore
            <br />
            Health Insights.
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Comprehensive testing solutions designed to help
            detect, monitor, and prevent health concerns with
            precision diagnostics.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-4">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute right-0 top-0 h-40 w-40 bg-cyan-500/20 blur-3xl rounded-full" />
                </div>

                <div className="relative flex items-center justify-between px-8 py-8">
                  {/* Left */}
                  <div className="flex items-center gap-6">
                    <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <Icon className="text-cyan-400 text-xl" />
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {category.title}
                      </h3>

                      <p className="mt-1 text-gray-400">
                        {category.tests}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-4">
                    <span className="hidden md:block text-gray-500 uppercase tracking-[3px] text-sm">
                      Explore
                    </span>

                    <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-400 transition">
                      <FaArrowRight className="text-white group-hover:text-cyan-400 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}