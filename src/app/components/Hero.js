"use client";
import { motion } from "framer-motion";
import {
FaArrowRight,
FaFlask,
FaHeartbeat,
FaMicroscope,
FaDna,
FaShieldAlt,
} from "react-icons/fa";

const tests = [
"CBC",
"THYROID",
"HBA1C",
"LIVER",
"KIDNEY",
"VITAMIN D",
"LIPID PROFILE",
"HEART HEALTH",
];

export default function Hero() {
return ( <section className="relative min-h-[100svh] bg-[#050816] text-white overflow-hidden">
{/* Grid */}
<div
className="absolute inset-0 opacity-[0.05]"
style={{
backgroundImage: `             linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
backgroundSize: "80px 80px",
}}
/>


  {/* Glow */}
  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/15 blur-[180px] rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-28 md:pt-36 pb-16">
    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
      {/* LEFT */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <FaMicroscope className="text-cyan-400" />
          <span className="text-xs sm:text-sm tracking-wide text-gray-300">
            SHYAM LABS • ADVANCED PATHOLOGY
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            mt-8
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-[95px]
            font-black
            leading-[0.95]
            tracking-tight
          "
        >
          Health Data
          <br />
          <span className="text-cyan-400">
            Before Symptoms.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            max-w-xl
            mt-6
            text-base
            sm:text-lg
            text-gray-400
            leading-relaxed
          "
        >
          Modern diagnostics designed for faster decisions,
          early detection, and complete peace of mind.
          Precision testing powered by advanced pathology
          technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <button className="w-full sm:w-auto group px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black rounded-full font-semibold flex items-center justify-center gap-3 transition-all">
            Book a Test
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:border-cyan-400 rounded-full font-medium transition">
            Explore Packages
          </button>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-3xl">
          {[
            ["25K+", "Tests Completed"],
            ["99.8%", "Accuracy Rate"],
            ["24H", "Report Delivery"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-cyan-400">
                {value}
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-xl">
              Diagnostic Overview
            </h3>

            <div className="h-12 w-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <FaMicroscope className="text-cyan-400" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-5">
              <div className="flex items-center gap-3">
                <FaHeartbeat className="text-red-400" />
                <span>Heart Health Screening</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
              <div className="flex items-center gap-3">
                <FaDna className="text-cyan-400" />
                <span>Genetic Diagnostics</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
              <div className="flex items-center gap-3">
                <FaFlask className="text-green-400" />
                <span>Advanced Blood Analysis</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
              <div className="flex items-center gap-3">
                <FaShieldAlt className="text-cyan-400" />
                <span>99.8% Diagnostic Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Marquee */}
    <div className="mt-14 border-t border-white/10 pt-6 overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="flex gap-12 sm:gap-20 whitespace-nowrap text-gray-400 text-sm sm:text-lg font-medium"
      >
        {[...tests, ...tests].map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </motion.div>
    </div>
  </div>
</section>


);
}
