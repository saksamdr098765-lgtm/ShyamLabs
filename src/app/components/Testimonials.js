"use client";

import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Regular Health Checkup",
    review:
      "The entire process was smooth, from sample collection to report delivery. Results were delivered much faster than expected.",
  },
  {
    name: "Priya Verma",
    role: "Home Sample Collection",
    review:
      "Booking was simple and the technician arrived on time. Professional service and accurate reporting.",
  },
  {
    name: "Amit Singh",
    role: "Heart Health Package",
    review:
      "The reports were easy to understand and available online. A reliable diagnostic experience from start to finish.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#050816] py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Patient Experiences
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white leading-tight">
            Trusted By
            <br />
            Thousands Of Families.
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Every report represents a health decision.
            Here's what patients say about their experience
            with Shyam Labs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mt-20">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
              </div>

              {/* Quote Icon */}
              <div className="relative flex justify-between items-start">
                <div className="h-14 w-14 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center">
                  <FaQuoteRight className="text-cyan-400 text-lg" />
                </div>

                <span className="text-5xl font-black text-white/5">
                  0{index + 1}
                </span>
              </div>

              {/* Review */}
              <p className="relative mt-8 text-gray-300 leading-relaxed">
                "{item.review}"
              </p>

              {/* User */}
              <div className="relative mt-10 pt-6 border-t border-white/10">
                <h4 className="font-semibold text-white">
                  {item.name}
                </h4>

                <p className="text-sm text-cyan-400 mt-1">
                  {item.role}
                </p>
              </div>

              {/* Bottom Border */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Trust Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <h3 className="text-4xl font-black text-cyan-400">
              25K+
            </h3>
            <p className="mt-2 text-gray-400">
              Patients Served
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <h3 className="text-4xl font-black text-cyan-400">
              99.8%
            </h3>
            <p className="mt-2 text-gray-400">
              Accuracy Rate
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <h3 className="text-4xl font-black text-cyan-400">
              24H
            </h3>
            <p className="mt-2 text-gray-400">
              Average Reporting
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}