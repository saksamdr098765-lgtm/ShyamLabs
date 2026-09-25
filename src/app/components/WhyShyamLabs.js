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
  const features = [
    {
      icon: FaHome,
      title: "Doorstep Home Collection",
      desc: "Trained phlebotomists for safe and painless sample collection at your preferred time slot.",
    },
    {
      icon: FaClock,
      title: "24-Hour Digital Reports",
      desc: "Fast, accurate laboratory reports delivered directly on WhatsApp & Email within 24 hours.",
    },
    {
      icon: FaMicroscope,
      title: "Modern NABL Standard Lab",
      desc: "State-of-the-art automated testing equipment for reliable, precision diagnostic results.",
    },
    {
      icon: FaFlask,
      title: "25,000+ Tests Completed",
      desc: "Trusted by thousands of families across the region for affordable preventive healthcare.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#0A4F8A 1px, transparent 1px),
            linear-gradient(90deg, #0A4F8A 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-100/30 to-blue-100/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex px-3.5 py-1.5 rounded-full bg-green-50 border border-green-200 text-[#78BE43] text-xs font-bold uppercase tracking-wider">
            WHY CHOOSE SHYAM LABS
          </span>

          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
            Built On
            <span className="block text-[#0A4F8A]">
              Accuracy &amp; Trust.
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Every diagnostic report is supported by advanced laboratory systems, NABL quality assurance protocols, and patient-first care.
          </p>
        </motion.div>

        {/* Feature Grid & Accuracy Showcase */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Accuracy Highlight Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#0A4F8A] via-[#08345c] to-slate-900 text-white p-8 text-center shadow-xl border border-white/10"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-emerald-400 backdrop-blur">
              <FaShieldAlt size={32} />
            </div>

            <div className="mt-6 text-5xl sm:text-6xl font-black text-white tracking-tight">
              99.8%
            </div>

            <p className="mt-2 text-base font-bold text-emerald-300">
              Diagnostic Precision &amp; Accuracy
            </p>

            <p className="mt-3 text-xs text-white/80 leading-relaxed max-w-sm mx-auto font-medium">
              Verified by strict multi-level quality control testing procedures and certified diagnostic standards.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:border-[#0A4F8A]/30 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A4F8A]/10 text-[#0A4F8A] transition-colors group-hover:bg-[#0A4F8A] group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-[#0A4F8A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quick Stats Row */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            ["25,000+", "Tests Processed"],
            ["24 Hours", "Report Turnaround"],
            ["100%", "Quality Verified"],
            ["7 Days", "Home Sample Collection"],
          ].map(([val, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 text-center"
            >
              <span className="text-2xl sm:text-3xl font-black text-[#0A4F8A]">
                {val}
              </span>
              <p className="mt-1 text-xs font-bold text-slate-600">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}