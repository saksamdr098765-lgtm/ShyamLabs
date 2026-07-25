"use client";

import { motion } from "framer-motion";
import {
  FiCalendar,
  FiPhoneCall,
  FiDroplet,
  FiFileText,
} from "react-icons/fi";

export default function Process({ pkg }) {
  const steps = pkg?.process || [
    {
      icon: FiCalendar,
      title: "Book Your Package",
      description:
        "Choose your preferred package and schedule a convenient appointment.",
    },
    {
      icon: FiPhoneCall,
      title: "Appointment Confirmation",
      description:
        "Our team confirms your booking and shares preparation instructions before sample collection.",
    },
    {
      icon: FiDroplet,
      title: "Home Sample Collection",
      description:
        "A trained phlebotomist visits your location and safely collects your sample using sterile equipment.",
    },
    {
      icon: FiFileText,
      title: "Digital Reports",
      description:
        "Your reports are securely delivered online within the promised turnaround time.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-sky-50/40 to-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-sky-700 sm:text-sm">
            Home Sample Collection
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Simple &
            <span className="block text-sky-600">
              Hassle-Free Process
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            From booking your package to receiving your reports, every step is
            designed to be quick, safe, and convenient.
          </p>
        </motion.div>

        {/* Steps */}

        <div className="relative mt-10 grid gap-5 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Desktop Connector */}

                {index !== steps.length - 1 && (
                  <div className="absolute left-[64px] top-8 hidden h-px w-[calc(100%+24px)] bg-gradient-to-r from-sky-200 to-cyan-200 lg:block" />
                )}

                <div
                  className="
                    group
                    relative
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-sky-200
                    hover:shadow-xl

                    sm:p-6
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-sky-100
                      to-cyan-100
                      text-sky-700
                      transition
                      duration-300
                      group-hover:scale-105
                    "
                  >
                    <Icon size={24} />
                  </div>

                  {/* Step */}

                  <span className="mt-5 inline-flex rounded-full bg-sky-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-700">
                    Step {index + 1}
                  </span>

                  {/* Title */}

                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}