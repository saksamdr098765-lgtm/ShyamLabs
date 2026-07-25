"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiCheckCircle,
  FiHeart,
  FiTrendingUp,
} from "react-icons/fi";

const points = [
  {
    icon: FiActivity,
    title: "Comprehensive Screening",
    description:
      "A complete health assessment covering major organs and essential body functions.",
  },
  {
    icon: FiHeart,
    title: "Early Disease Detection",
    description:
      "Identify health risks before symptoms appear through preventive diagnostics.",
  },
  {
    icon: FiTrendingUp,
    title: "Preventive Healthcare",
    description:
      "Monitor your health regularly and make informed lifestyle decisions.",
  },
  {
    icon: FiCheckCircle,
    title: "Trusted Laboratory",
    description:
      "Accurate reports using modern equipment and strict quality standards.",
  },
];

export default function Overview({ pkg }) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-20">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-100/40 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#78BE43]">
              Package Overview
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Why Choose
              <span className="block text-[#0A4F8A]">
                {pkg.name}?
              </span>
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">

              <p>{pkg.seo.introduction}</p>

              <p>{pkg.seo.whyImportant}</p>

              <p>{pkg.seo.benefits}</p>

            </div>

            <div className="mt-8 rounded-3xl border border-[#78BE43]/20 bg-white p-6 shadow-sm">

              <h3 className="text-lg font-bold text-slate-900">
                Home Sample Collection
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                {pkg.seo.homeCollection}
              </p>

            </div>

          </motion.div>

          {/* Right */}

          <div className="grid gap-5 sm:grid-cols-2">

            {points.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="
rounded-3xl
border
border-slate-200
bg-white
p-6
shadow-sm
transition-all
duration-300
hover:-translate-y-1
hover:border-[#0A4F8A]/20
hover:shadow-lg
"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A4F8A]/10">

                    <Icon
                      size={22}
                      className="text-[#0A4F8A]"
                    />

                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}