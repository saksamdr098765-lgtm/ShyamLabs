"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaHome,
  FaClock,
  FaMicroscope,
  FaFlask,
} from "react-icons/fa";

export default function WhyShyamLabs() {
  const nodes = [
    {
      icon: FaHome,
      title: "Home Collection",
      position:
        "top-0 left-1/2 -translate-x-1/2",
    },
    {
      icon: FaClock,
      title: "24H Reports",
      position:
        "top-1/2 right-0 -translate-y-1/2",
    },
    {
      icon: FaMicroscope,
      title: "Modern Lab",
      position:
        "bottom-0 left-1/2 -translate-x-1/2",
    },
    {
      icon: FaFlask,
      title: "25K+ Tests",
      position:
        "top-1/2 left-0 -translate-y-1/2",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-green-100/40 to-blue-100/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex px-4 py-2 rounded-full bg-green-50 border border-green-100 text-[#78BE43] text-sm font-semibold">
            WHY SHYAM LABS
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Built On
            <span className="block text-[#0A4F8A]">
              Accuracy & Trust
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Every diagnostic report is supported by
            advanced laboratory systems, quality
            assurance protocols, and patient-first care.
          </p>
        </motion.div>

        {/* Desktop Network */}
        <div className="hidden lg:flex mt-24 justify-center">
          <div className="relative w-[700px] h-[700px]">
            {/* Connection Lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[420px] h-[420px] rounded-full border border-blue-100" />
            </div>

            {/* Center */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-[280px] h-[280px] rounded-full bg-gradient-to-br from-[#0A4F8A] to-[#08345c] text-white flex flex-col items-center justify-center shadow-2xl">
                <FaShieldAlt size={42} />

                <div className="mt-4 text-6xl font-black">
                  99.8%
                </div>

                <p className="mt-2 text-center text-blue-100 text-sm">
                  Diagnostic Accuracy
                </p>
              </div>
            </motion.div>

            {/* Floating Nodes */}
            {nodes.map((node, index) => {
              const Icon = node.icon;

              return (
                <motion.div
                  key={node.title}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                  }}
                  className={`absolute ${node.position}`}
                >
                  <div className="bg-white border border-slate-100 shadow-xl rounded-3xl p-6 w-[180px] text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center">
                      <Icon className="text-[#0A4F8A] text-xl" />
                    </div>

                    <h3 className="mt-4 font-bold text-slate-900">
                      {node.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden mt-16">
          {/* Accuracy Card */}
          <div className="rounded-[32px] bg-gradient-to-br from-[#0A4F8A] to-[#08345c] text-white p-10 text-center shadow-xl">
            <FaShieldAlt
              size={36}
              className="mx-auto"
            />

            <h3 className="mt-5 text-5xl font-black">
              99.8%
            </h3>

            <p className="mt-2 text-blue-100">
              Diagnostic Accuracy
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {nodes.map((node) => {
              const Icon = node.icon;

              return (
                <div
                  key={node.title}
                  className="bg-white border border-slate-100 rounded-3xl p-5 text-center shadow-sm"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-blue-50 flex items-center justify-center">
                    <Icon className="text-[#0A4F8A]" />
                  </div>

                  <h3 className="mt-4 font-semibold text-slate-900">
                    {node.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            ["25K+", "Tests Processed"],
            ["24H", "Report Delivery"],
            ["100%", "Quality Checked"],
            ["7 Days", "Home Collection"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white border border-slate-100 rounded-3xl p-6 text-center shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-black text-[#0A4F8A]">
                {value}
              </div>

              <p className="mt-2 text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}