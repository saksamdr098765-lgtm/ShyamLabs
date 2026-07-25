"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiClock,
  FiHome,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";
import { SITE_CONFIG } from "@/app/siteConfig";

const fadeUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero({ pkg }) {
  const handleWhatsApp = (test) => {
    const message = `Hello,

I would like to book the following package.

*Package:* ${test.name}
*Price:* ₹${test.price}

Please share the available booking slots.

Thank you.`;

    window.open(
      `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50/70 to-green-50/70" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#0A4F8A 1px, transparent 1px),
            linear-gradient(90deg,#0A4F8A 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-green-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">

          {/* LEFT */}

          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: .45 }}
          >

            <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#78BE43] sm:px-4 sm:text-xs">
              {pkg.category}
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {pkg.name}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {pkg.description}
            </p>

            {/* Highlights */}

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A4F8A]/10">
                  <FiHome className="text-[#0A4F8A]" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Collection
                  </p>
                  <p className="font-semibold text-slate-900">
                    Home Sample
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A4F8A]/10">
                  <FiClock className="text-[#0A4F8A]" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Reports
                  </p>
                  <p className="font-semibold text-slate-900">
                    {pkg.reportTime}
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A4F8A]/10">
                  <FiShield className="text-[#0A4F8A]" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Quality
                  </p>
                  <p className="font-semibold text-slate-900">
                    NABL Standard
                  </p>
                </div>

              </div>

            </div>

            {/* Price */}

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0A4F8A]">
                Package Price
              </p>

              <div className="mt-3 flex items-end gap-3">

                <h2 className="text-4xl font-black text-slate-900 sm:text-5xl">
                  ₹{pkg.price}
                </h2>

                <span className="pb-1 text-lg text-slate-400 line-through">
                  ₹{pkg.originalPrice}
                </span>

              </div>

              <div className="mt-4 flex flex-wrap gap-2">

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                  Save ₹{pkg.originalPrice - pkg.price}
                </span>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-[#0A4F8A]">
                  {pkg.discount}
                </span>

              </div>

            </div>
                        {/* CTA */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={() => handleWhatsApp(pkg)}
                className="
group
inline-flex
items-center
justify-center
gap-3
rounded-2xl
bg-[#0A4F8A]
px-6
py-4
font-semibold
text-white
transition-all
duration-300
hover:-translate-y-1
hover:bg-[#083b67]
hover:shadow-xl
"
              >
                Book This Package

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

              </button>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="
inline-flex
items-center
justify-center
rounded-2xl
border
border-slate-200
bg-white
px-6
py-4
font-semibold
text-slate-700
transition-all
duration-300
hover:border-[#0A4F8A]
hover:text-[#0A4F8A]
"
              >
                Free Consultation
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{
              delay: .15,
              duration: .45,
            }}
          >

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">

              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#0A4F8A]">
                Package Overview
              </span>

              <h3 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl">
                What's Included
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Comprehensive diagnostic testing with home sample collection,
                fast reporting, and trusted laboratory standards.
              </p>

              {/* Features */}

              <div className="mt-8 space-y-4">

                {[
                  {
                    icon: <FiHome className="text-[#0A4F8A]" />,
                    title: "Home Sample Collection",
                  },
                  {
                    icon: <FiClock className="text-[#0A4F8A]" />,
                    title: `Reports in ${pkg.reportTime}`,
                  },
                  {
                    icon: <FiShield className="text-[#0A4F8A]" />,
                    title: "Quality Assured Testing",
                  },
                  {
                    icon: <FiCheckCircle className="text-[#0A4F8A]" />,
                    title: `${pkg.testsCount} Tests Included`,
                  },
                ].map((item) => (

                  <div
                    key={item.title}
                    className="
flex
items-center
gap-4
rounded-2xl
border
border-slate-100
bg-slate-50
p-4
transition-all
duration-300
hover:border-[#0A4F8A]/20
hover:bg-white
"
                  >

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0A4F8A]/10">

                      {item.icon}

                    </div>

                    <div>

                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm text-slate-500">
                        Included with every booking
                      </p>

                    </div>

                  </div>

                ))}

              </div>

              {/* Recommended */}

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#0A4F8A] to-[#78BE43] p-5">

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                  Recommended For
                </p>

                <div className="mt-4 space-y-3">

                  {pkg.recommendedFor
                    ?.slice(0, 3)
                    .map((item) => (

                      <div
                        key={item.title}
                        className="flex items-start gap-3"
                      >

                        <div className="mt-1 h-2 w-2 rounded-full bg-white" />

                        <div>

                          <p className="font-semibold text-white">
                            {item.title}
                          </p>

                          <p className="text-sm leading-6 text-white/80">
                            {item.description}
                          </p>

                        </div>

                      </div>

                    ))}

                </div>

              </div>
                          </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}