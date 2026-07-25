"use client";

import { motion } from "framer-motion";
import {
  FiHeart,
  FiActivity,
  FiShield,
  FiTrendingUp,
  FiCheckCircle,
  FiAward,
} from "react-icons/fi";

const icons = [
  FiHeart,
  FiActivity,
  FiShield,
  FiTrendingUp,
  FiCheckCircle,
  FiAward,
];

export default function Benefits({ benefits }) {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20">

      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-green-100/40 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#78BE43] sm:px-4 sm:py-2 sm:text-xs">
            Why Choose This Package
          </span>

          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-900 sm:mt-6 sm:text-4xl lg:text-5xl">
            Better Health Starts
            <span className="block text-[#0A4F8A]">
              With Early Detection
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base lg:text-lg">
            Preventive health screening helps identify medical conditions
            before symptoms appear, allowing timely treatment and healthier
            living.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">

          {benefits?.map((benefit, index) => {

            const Icon = icons[index % icons.length];

            return (

              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="
group
relative
overflow-hidden
rounded-2xl
border
border-slate-200
bg-white
p-5
shadow-sm
transition-all
duration-300
hover:border-[#0A4F8A]/20
hover:shadow-lg
sm:rounded-3xl
sm:p-7
"
              >
                {/* Hover Glow */}

                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-100 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A4F8A]/10 sm:h-14 sm:w-14 sm:rounded-2xl">

                  <Icon
                    size={22}
                    className="text-[#0A4F8A] sm:text-[26px]"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900 sm:mt-6 sm:text-xl">
                  {benefit.title}
                </h3>

                {/* Description */}

                <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
                  {benefit.description}
                </p>

                {/* Accent Line */}

                <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#0A4F8A] to-[#78BE43] sm:mt-6 sm:w-16" />

              </motion.article>

            );

          })}

        </div>

      </div>

    </section>
  );
}