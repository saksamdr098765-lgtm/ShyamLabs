"use client";

import { motion } from "framer-motion";
import {
  FaMicroscope,
  FaRobot,
  FaShieldAlt,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

const technologies = [
  {
    title: "Automated Analysis",
    description:
      "Advanced analyzers process samples with exceptional speed and consistency.",
    icon: FaRobot,
  },
  {
    title: "Multi-Level Quality Control",
    description:
      "Every test undergoes rigorous validation procedures before reporting.",
    icon: FaShieldAlt,
  },
  {
    title: "Precision Diagnostics",
    description:
      "High-sensitivity testing helps support early detection and monitoring.",
    icon: FaMicroscope,
  },
  {
    title: "Digital Reporting",
    description:
      "Secure online access to reports with faster turnaround times.",
    icon: FaChartLine,
  },
];

export default function DiagnosticTechnology() {
  return (
    <section className="relative bg-[#050816] py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
              Diagnostic Technology
            </span>

            <h2 className="mt-5 text-5xl md:text-6xl font-black text-white leading-tight">
              The Science
              <br />
              Behind Every
              <br />
              Report.
            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
              Every diagnostic result is powered by automated
              laboratory systems, precision workflows, and strict
              quality-control protocols designed to deliver
              reliable healthcare insights.
            </p>

            <button className="group mt-10 flex items-center gap-3 text-cyan-400 font-medium">
              Explore Technology

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right Bento Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {technologies.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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

                  <div className="relative h-14 w-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Icon className="text-cyan-400 text-xl" />
                  </div>

                  <h3 className="relative mt-6 text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="relative mt-4 text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 backdrop-blur-xl p-10"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
                Laboratory Excellence
              </span>

              <h3 className="mt-4 text-3xl md:text-4xl font-black text-white">
                Trusted Diagnostics Powered By Modern Technology
              </h3>
            </div>

            <div className="flex gap-10">
              <div>
                <h4 className="text-4xl font-black text-cyan-400">
                  99.8%
                </h4>
                <p className="text-gray-400 mt-2">
                  Accuracy
                </p>
              </div>

              <div>
                <h4 className="text-4xl font-black text-cyan-400">
                  24H
                </h4>
                <p className="text-gray-400 mt-2">
                  Reporting
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}