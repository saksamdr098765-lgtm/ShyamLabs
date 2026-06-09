"use client";

import { motion } from "framer-motion";
import {
  FaQuoteRight,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "The entire process was smooth, from sample collection to report delivery. Results arrived faster than expected.",
  },
  {
    name: "Priya Verma",
    review:
      "Home collection was extremely convenient and the staff was very professional.",
  },
  {
    name: "Amit Singh",
    review:
      "Reports were easy to understand and available online. Highly reliable service.",
  },
];

export default function Testimonials() {
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] bg-gradient-to-r from-green-100/40 to-blue-100/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[36px] border border-slate-100 bg-white shadow-xl p-8 md:p-14"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <div className="flex items-center gap-2 text-[#78BE43]">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <h2 className="mt-4 text-4xl md:text-6xl font-black text-slate-900">
                Trusted By
                <span className="block text-[#0A4F8A]">
                  Thousands Of Families
                </span>
              </h2>

              <p className="mt-5 text-slate-600 max-w-xl">
                Accurate diagnostics, quick reporting,
                and patient-first care have made Shyam Labs
                a trusted healthcare partner.
              </p>
            </div>

            <div className="text-center">
              <div className="text-7xl font-black text-[#0A4F8A]">
                4.9
              </div>

              <p className="text-slate-500 mt-2">
                Average Patient Rating
              </p>
            </div>
          </div>
        </motion.div>

        {/* Reviews */}
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-[36px] bg-gradient-to-br from-[#0A4F8A] to-[#08345c] p-10 text-white relative overflow-hidden"
          >
            <FaQuoteRight className="text-6xl text-white/10" />

            <p className="mt-8 text-2xl leading-relaxed max-w-3xl">
              "{testimonials[0].review}"
            </p>

            <div className="mt-10">
              <h4 className="font-bold text-xl">
                {testimonials[0].name}
              </h4>

              <div className="mt-2 flex items-center gap-2 text-green-300">
                <FaCheckCircle />
                Verified Patient
              </div>
            </div>
          </motion.div>

          {/* Side Reviews */}
          <div className="space-y-6">
            {testimonials.slice(1).map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[30px] border border-slate-100 bg-white shadow-md p-7"
              >
                <FaQuoteRight className="text-[#0A4F8A]" />

                <p className="mt-4 text-slate-600 leading-relaxed">
                  "{item.review}"
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900">
                    {item.name}
                  </h4>

                  <span className="text-sm text-[#78BE43]">
                    Verified Patient
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            "25K+ Patients",
            "99.8% Accuracy",
            "24H Reports",
            "Home Collection",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white border border-slate-100 p-5 text-center font-semibold text-slate-700 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}