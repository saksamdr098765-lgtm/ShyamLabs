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

export default function CTA({ pkg }) {
  const features = [
    {
      icon: FiHome,
      title: "Home Sample Collection",
      description: "Convenient doorstep sample collection by trained professionals.",
    },
    {
      icon: FiClock,
      title: `Reports in ${pkg.reportTime}`,
      description: "Fast digital reports delivered securely online.",
    },
    {
      icon: FiShield,
      title: "Trusted Laboratory",
      description: "Reliable testing with strict quality standards.",
    },
  ];

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
    <section className="relative overflow-hidden bg-white py-14 sm:py-20">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/60 to-green-50/60" />

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

        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-green-100/40 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
        >

          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="p-6 sm:p-8 lg:p-10">

              <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#78BE43] sm:text-xs">
                Book Your Health Checkup
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Better Health Starts
                <span className="block text-[#0A4F8A]">
                  With One Simple Booking
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                Book the <strong>{pkg.name}</strong> today for accurate
                diagnostics, convenient home collection, secure digital
                reports, and trusted healthcare services.
              </p>

              {/* Stats */}

              <div className="mt-8 grid grid-cols-3 gap-3">

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">

                  <p className="text-2xl font-black text-[#0A4F8A]">
                    {pkg.testsCount}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Tests
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">

                  <p className="text-sm font-bold text-[#0A4F8A]">
                    {pkg.reportTime}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Reports
                  </p>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">

                  <p className="text-sm font-bold text-[#78BE43]">
                    {pkg.homeCollection ? "Yes" : "No"}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Home Visit
                  </p>

                </div>

              </div>

              {/* CTA */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <button
                  onClick={() => handleWhatsApp(pkg)}
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#0A4F8A] px-6 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#083b67]"
                >
                  Book This Package

                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-[#0A4F8A] hover:text-[#0A4F8A]"
                >
                  Call Now
                </a>

              </div>

            </div>

            {/* Right */}

            <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">

              <h3 className="text-2xl font-black text-slate-900">
                Why Choose This Package?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Trusted diagnostic services with fast reporting and
                patient-friendly healthcare experience.
              </p>

              <div className="mt-8 space-y-4">

                {features.map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.title}
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-[#0A4F8A]/20 hover:shadow-md"
                    >

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A4F8A]/10">

                        <Icon
                          size={22}
                          className="text-[#0A4F8A]"
                        />

                      </div>

                      <div>

                        <h4 className="font-semibold text-slate-900">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm text-slate-500">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  );

                })}

              </div>

              {/* Price Card */}

              <div className="mt-8 rounded-3xl bg-gradient-to-r from-[#0A4F8A] to-[#78BE43] p-6 text-white">

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                  Package Price
                </p>

                <div className="mt-3 flex items-end gap-3">

                  <span className="text-4xl font-black">
                    ₹{pkg.price}
                  </span>

                  {pkg.originalPrice && (
                    <span className="pb-1 text-lg text-white/70 line-through">
                      ₹{pkg.originalPrice}
                    </span>
                  )}

                </div>

                {pkg.discount && (
                  <div className="mt-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                    {pkg.discount}
                  </div>
                )}

                <div className="mt-6 flex items-center gap-2 text-sm text-white/90">

                  <FiCheckCircle />

                  <span>Trusted by thousands of satisfied patients.</span>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}