"use client";

import { motion } from "framer-motion";
import {
  FaMicroscope,
  FaHome,
  FaClock,
  FaShieldAlt,
  FaFlask,
} from "react-icons/fa";

const cards = [
  {
    title: "99.8% Diagnostic Accuracy",
    description:
      "Every sample is processed through rigorous quality-control protocols.",
    icon: FaShieldAlt,
    size: "large",
  },
  {
    title: "Home Sample Collection",
    description:
      "Certified professionals collect samples safely at your doorstep.",
    icon: FaHome,
  },
  {
    title: "Fast Digital Reports",
    description:
      "Access reports securely online with rapid turnaround times.",
    icon: FaClock,
  },
  {
    title: "Advanced Laboratory Systems",
    description:
      "Modern analyzers and automated workflows reduce human error.",
    icon: FaMicroscope,
  },
  {
    title: "25000+ Tests Processed",
    description:
      "Trusted by thousands of patients and healthcare professionals.",
    icon: FaFlask,
  },
];

export default function WhyShyamLabs() {
  return (
    <section className="relative bg-[#050816] py-20 md:py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-cyan-500/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12 md:mb-16"
        >
          <span className="text-cyan-400 uppercase tracking-[3px] md:tracking-[4px] text-xs md:text-sm">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1]">
            Precision.
            <br />
            Trust.
            <br />
            Confidence.
          </h2>

          <p className="mt-5 md:mt-6 text-base md:text-lg text-gray-400 leading-relaxed">
            At Shyam Labs, diagnostics isn't just about reports.
            It's about providing the confidence to make informed
            health decisions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-6 md:p-8
                  min-h-[250px]
                  md:min-h-[280px]

                  ${
                    card.size === "large"
                      ? "lg:col-span-2 lg:row-span-2 lg:min-h-[580px]"
                      : ""
                  }
                `}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-cyan-500/20 blur-3xl" />
                </div>

                {/* Icon */}
                <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center">
                  <Icon className="text-cyan-400 text-lg md:text-xl" />
                </div>

                {/* Content */}
                <div className="relative mt-6 md:mt-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {card.title}
                  </h3>

                  <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Large Card */}
                {card.size === "large" && (
                  <>
                    <div className="mt-8 md:mt-12">
                      <div className="text-5xl sm:text-6xl md:text-7xl font-black text-cyan-400">
                        99.8%
                      </div>

                      <p className="mt-3 text-gray-400 max-w-sm">
                        Industry-leading diagnostic reliability
                        powered by modern laboratory workflows.
                      </p>
                    </div>

                    <div className="absolute bottom-4 md:bottom-6 right-4 md:right-8 text-[70px] md:text-[120px] font-black text-white/[0.03] pointer-events-none">
                      99.8
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}