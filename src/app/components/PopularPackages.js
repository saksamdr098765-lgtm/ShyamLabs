"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeartbeat,
  FaTemperatureHigh,
  FaHeart,
  FaNotesMedical,
  FaArrowRight
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { SITE_CONFIG } from "../siteConfig";
import trackEvent from "../utils/Analytics";
const categories = [
  {
    icon: FaNotesMedical,
    title: "Full Body",
    package: "Full Body Checkup",
    tests: "126 Tests",
    price: "₹1800",
    slug: "full-body-checkup",
    desc:
      "Complete preventive health screening with diabetes, liver, kidney, thyroid and heart risk assessment.",
  },

  {
    icon: FaTemperatureHigh,
    title: "Fever Care",
    package: "Fever Panel Advance",
    tests: "7 Tests",
    price: "₹1100",
    slug: "fever-panel-advance",
    desc:
      "Advanced fever diagnostic package covering malaria, typhoid, liver markers, infection screening, and blood analysis.",
  },

  {
    icon: FaHeart,
    title: "Heart Health",
    package: "Heart Screening",
    tests: "16 Parameters",
    price: "₹899",
    slug: "jaanch-heart-screening",
    desc:
      "Early detection of cardiovascular risk with cardiac risk markers and lipid profile.",
  },

  {
    icon: FaHeartbeat,
    title: "Thyroid",
    package: "Thyroid Profile",
    tests: "5 Tests",
    price: "₹360",
    slug: "thyroid-profile",
    desc:
      "Evaluate thyroid hormone levels and maintain hormonal balance.",
  },
];


export default function PopularPackages() {
  const {whatsapp}=SITE_CONFIG
   const openWhatsApp = (message) => {
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  const router=useRouter()
  const [active, setActive] = useState(categories[0]);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-green-100/30 to-blue-100/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-2 rounded-full bg-green-50 border border-green-100 text-[#78BE43] text-sm font-semibold">
            HEALTH PACKAGES
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900">
            What Would You Like
            <span className="block text-[#0A4F8A]">
              To Monitor?
            </span>
          </h2>

          <p className="mt-5 text-slate-600">
            Select a health concern and discover the recommended diagnostic package.
          </p>
        </div>

        {/* Interactive Section */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Menu */}
          <div className="space-y-4">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  onClick={() => setActive(item)}
                  className={`w-full text-left p-5 rounded-3xl transition-all duration-300 border ${
                    active.title === item.title
                      ? "border-[#0A4F8A] bg-blue-50"
                      : "border-slate-100 bg-white hover:border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-14 w-14 rounded-2xl flex items-center justify-center ${
                        active.title === item.title
                          ? "bg-[#0A4F8A] text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <Icon />
                    </div>

                    <div>
                      <h3 className="font-bold text-lg text-slate-900">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-500">
                        Recommended Screening
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0A4F8A] to-[#08345c] p-8 md:p-12 text-white"
            >
              <div className="absolute top-0 right-0 text-[180px] font-black opacity-10 leading-none">
                01
              </div>

              <div className="relative">
                <span className="inline-flex px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sm">
                  {active.tests}
                </span>

                <h3 className="mt-6 text-4xl md:text-5xl font-black">
                  {active.package}
                </h3>

                <div className="mt-5 text-5xl font-black text-green-300">
                  {active.price}
                </div>

                <p className="mt-6 text-blue-100 leading-relaxed max-w-lg">
                  {active.desc}
                </p>

                <button   onClick={() =>{
                     trackEvent(`whatsApp_click`,{
                page_location:window.location.href
              })
                openWhatsApp(
                  `Hello, I want to book the *${active.title}* package (${active.price}). Please provide details and availability.`
                )
                }} className="mt-10 inline-flex items-center gap-3 cursor-pointer bg-white text-[#0A4F8A] px-6 py-3 rounded-xl font-semibold">
                  Book Package
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}