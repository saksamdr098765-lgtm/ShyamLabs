"use client";

import { motion } from "framer-motion";
import {
  FaFlask,
  FaHeartbeat,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const stats = [
  {
    value: "25K+",
    label: "Tests Processed",
    icon: FaFlask,
  },
  {
    value: "99.8%",
    label: "Diagnostic Accuracy",
    icon: FaShieldAlt,
  },
  {
    value: "24 Hrs",
    label: "Average Reporting",
    icon: FaClock,
  },
  {
    value: "10+",
    label: "Years of Trust",
    icon: FaHeartbeat,
  },
];

export default function Statistics() {
  return (
    <section className="relative bg-[#050816] py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Trusted By Thousands
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Numbers That
            <br />
            Build Confidence.
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Behind every report is a commitment to precision,
            reliability, and patient care.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
                </div>

                <div className="relative h-14 w-14 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center">
                  <Icon className="text-cyan-400 text-xl" />
                </div>

                <h3 className="relative mt-8 text-5xl font-black text-white">
                  {stat.value}
                </h3>

                <p className="relative mt-3 text-gray-400">
                  {stat.label}
                </p>

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 p-10 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-black text-white">
            Delivering Reliable Diagnostics,
            <span className="text-cyan-400"> Every Single Day.</span>
          </h3>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Advanced technology, experienced professionals,
            and rigorous quality standards ensure confidence
            in every result.
          </p>
        </motion.div>
      </div>
    </section>
  );
}