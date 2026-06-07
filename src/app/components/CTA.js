"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative bg-[#050816] py-20 md:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-cyan-500/10 blur-[120px] md:blur-[180px]" />
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            md:rounded-[40px]
            border
            border-cyan-500/20
            bg-white/[0.03]
            backdrop-blur-xl
            p-6
            sm:p-8
            md:p-16
            text-center
          "
        >
          {/* Top Glow Line */}
          <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          <span className="text-cyan-400 uppercase tracking-[3px] md:tracking-[4px] text-xs md:text-sm">
            Your Health Matters
          </span>

          <h2
            className="
              mt-5
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-black
              text-white
              leading-[0.95]
            "
          >
            Better Health
            <br />
            Starts With
            <br />
            Better Data.
          </h2>

          <p
            className="
              mt-6
              md:mt-8
              max-w-2xl
              mx-auto
              text-base
              md:text-lg
              text-gray-400
              leading-relaxed
            "
          >
            Get accurate diagnostic insights, faster reporting,
            and trusted pathology services designed around your
            health and convenience.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 md:mt-12">
            <button className="w-full sm:w-auto group px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold flex items-center justify-center gap-3 transition-all duration-300">
              Book a Test
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:border-cyan-400 text-white flex items-center justify-center gap-3 transition-all duration-300">
              <FaPhoneAlt />
              Call Now
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-14 pt-8 md:pt-10 border-t border-white/10">
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
              <h3 className="text-2xl md:text-3xl font-black text-cyan-400">
                25K+
              </h3>
              <p className="text-gray-500 text-xs md:text-sm mt-2">
                Tests Processed
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
              <h3 className="text-2xl md:text-3xl font-black text-cyan-400">
                99.8%
              </h3>
              <p className="text-gray-500 text-xs md:text-sm mt-2">
                Accuracy Rate
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5">
              <h3 className="text-2xl md:text-3xl font-black text-cyan-400">
                24H
              </h3>
              <p className="text-gray-500 text-xs md:text-sm mt-2">
                Reporting Time
              </p>
            </div>
          </div>

          {/* Background Text */}
          <div
            className="
              absolute
              bottom-0
              right-2
              md:right-4
              text-[60px]
              sm:text-[90px]
              md:text-[180px]
              font-black
              text-white/[0.02]
              pointer-events-none
              select-none
            "
          >
            LABS
          </div>
        </motion.div>
      </div>
    </section>
  );
}