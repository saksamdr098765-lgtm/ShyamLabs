"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight, FaHeartbeat } from "react-icons/fa";
import { SITE_CONFIG } from "@/app/siteConfig";
import trackEvent from "@/app/utils/Analytics";

export default function PackageDetailPage({ packageData }) {
  const {
    title,
    price,
    subtitle,
    description,
    includedTests = [],
    usagePoints = [],
    preparation = [],
  } = packageData;

  const phone = SITE_CONFIG?.whatsapp ;

  // WhatsApp helper
  const openWhatsApp = (message) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="bg-white min-h-screen">

      {/* BACKGROUND */}
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0A4F8A 1px, transparent 1px), linear-gradient(90deg, #0A4F8A 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* HEADER */}
      <section className="relative pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-5">

          <span className="text-sm font-semibold text-[#78BE43]">
            HEALTH PACKAGE DETAILS
          </span>

          <h1 className="mt-4 text-4xl md:text-6xl font-black text-slate-900">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 text-lg text-[#0A4F8A] font-medium">
              {subtitle}
            </p>
          )}

          <p className="mt-4 text-slate-600 max-w-2xl">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="text-4xl font-black text-[#0A4F8A]">
              {price}
            </div>

            {/* BOOK NOW → WHATSAPP */}
            <button
              onClick={() =>{
                     trackEvent(`whatsApp_click`,{
                page_location:window.location.href
              })
                openWhatsApp(
                  `Hello, I want to book the *${title}* package (${price}). Please provide details and availability.`
                )
              }}
              className="px-6 cursor-pointer py-3 rounded-full bg-[#0A4F8A] text-white font-semibold flex items-center gap-2 hover:bg-[#083a66] transition"
            >
              Book Now <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-3 gap-8">

          {/* INCLUDED TESTS */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900">
              Included Tests
            </h2>

            <div className="mt-6 space-y-3">
              {includedTests.map((test, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl"
                >
                  <FaCheckCircle className="text-[#78BE43]" />
                  <span className="text-slate-700">{test}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">

            {/* WHY THIS PACKAGE */}
            <div className="p-6 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <FaHeartbeat className="text-[#0A4F8A]" />
                Why This Package?
              </div>

              <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                {usagePoints.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* PREPARATION */}
            <div className="p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900">
                Preparation
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600 text-sm">
                {preparation.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* BOOK CARD → WHATSAPP */}
            <div className="p-6 rounded-2xl bg-[#0A4F8A] text-white">

              <h3 className="font-bold text-xl">
                Book This Package
              </h3>

              <p className="text-white/80 mt-2 text-sm">
                Home sample collection available
              </p>

              <button
                onClick={() =>{
                       trackEvent(`whatsApp_click`,{
                page_location:window.location.href
              })
                  openWhatsApp(
                    `Hello, I want to schedule a *home sample collection* for ${title}. Please confirm available time slots and process.`
                  )
                }}
                className="mt-5 cursor-pointer w-full py-3 rounded-full bg-white text-[#0A4F8A] font-semibold hover:bg-slate-100 transition"
              >
                Schedule Appointment
              </button>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}