"use client";

import { motion } from "framer-motion";
import {
  FaFlask,
  FaMicroscope,
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const workflow = [
  {
    title: "Sample Collection",
    description:
      "Convenient in-lab or home sample collection by trained professionals.",
    icon: FaFlask,
  },
  {
    title: "Laboratory Analysis",
    description:
      "Samples processed using modern diagnostic equipment and workflows.",
    icon: FaMicroscope,
  },
  {
    title: "Quality Validation",
    description:
      "Every result passes through strict quality-control verification.",
    icon: FaShieldAlt,
  },
  {
    title: "Digital Reporting",
    description:
      "Secure reports delivered quickly and accessible online.",
    icon: FaChartLine,
  },
];

export default function DiagnosticTechnology() {
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] md:h-[700px] md:w-[700px] bg-gradient-to-r from-green-100/60 to-blue-100/60 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex px-4 py-2 rounded-full border border-green-100 bg-green-50 text-[#78BE43] text-xs sm:text-sm font-semibold">
              LABORATORY EXCELLENCE
            </span>

            <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[1]">
              Every Report
              <span className="block text-[#0A4F8A]">
                Starts With Precision.
              </span>
            </h2>

            <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              From sample collection to final reporting, every step
              follows a carefully monitored process designed to
              deliver reliable, affordable, and accurate diagnostics.
            </p>

            {/* Trust Points */}
            <div className="mt-8 space-y-4">
              {[
                "Automated Diagnostic Systems",
                "Multi-Level Quality Validation",
                "Fast Digital Reports",
                "Home Sample Collection",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-[#78BE43]" />

                  <span className="text-slate-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Workflow Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-[32px] border border-slate-100 bg-white shadow-[0_30px_80px_rgba(10,79,138,0.08)] p-5 md:p-8">
              <div className="space-y-4">
                {workflow.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.title}>
                      <div className="flex items-start gap-4 rounded-3xl border border-slate-100 p-5 hover:border-[#0A4F8A]/20 transition-all">
                        <div className="h-12 w-12 rounded-2xl bg-[#0A4F8A]/5 flex items-center justify-center shrink-0">
                          <Icon className="text-[#0A4F8A]" />
                        </div>

                        <div>
                          <h3 className="font-bold text-slate-900">
                            {step.title}
                          </h3>

                          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {index !== workflow.length - 1 && (
                        <div className="flex justify-center py-2">
                          <div className="h-6 w-[2px] bg-slate-200" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Certified Laboratory",
              "Fast Reporting",
              "Home Collection",
              "Patient-First Care",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm"
              >
                <p className="font-semibold text-slate-700 text-sm md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}