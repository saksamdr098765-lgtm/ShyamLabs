"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp, FaPhoneAlt, FaSearch } from "react-icons/fa";
import { FiShield, FiClock, FiHome, FiCheckCircle } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { SITE_CONFIG } from "../siteConfig";
import trackEvent from "../utils/Analytics";

export default function Hero() {
  const router = useRouter();
  const { whatsapp, phone } = SITE_CONFIG;

  const openWhatsApp = (message) => {
    trackEvent?.("whatsApp_click", {
      page_location: typeof window !== "undefined" ? window.location.href : "",
    });
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const quickSearchTags = [
    { label: "Full Body Checkup", path: "/packages" },
    { label: "CBC Test", path: "/tests/cbc-complete-blood-count" },
    { label: "Thyroid Profile", path: "/tests/thyroid-profile-t3-t4-tsh" },
    { label: "Diabetes Screening", path: "/tests/hba1c-glycated-hemoglobin" },
    { label: "Vitamin D", path: "/tests/vitamin-d-25-hydroxy" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-emerald-50/20 to-white pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 lg:pb-20">
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[450px] w-full max-w-7xl bg-radial from-blue-300/25 via-emerald-200/15 to-transparent blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#0A4F8A 1px, transparent 1px),
            linear-gradient(90deg, #0A4F8A 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 text-left"
          >
            {/* NABL Quality Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-300/80 bg-emerald-50/90 text-emerald-800 text-xs font-bold shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <FiShield size={14} className="text-[#78BE43]" />
              <span>NABL Quality Assured • Budget Friendly Pathology</span>
            </div>

            {/* Main Title */}
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Smart Healthcare Begins With{" "}
              <span className="bg-gradient-to-r from-[#0A4F8A] to-[#08345c] bg-clip-text text-transparent block sm:inline">
                Accurate Testing
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-medium max-w-2xl">
              100% precise pathology & diagnostic blood tests at transparent, budget-friendly rates with <span className="font-bold text-slate-800">Free Doorstep Sample Collection</span> across Chandigarh, Panchkula & Mohali.
            </p>

            {/* Quick Search Chips */}
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                <FaSearch size={11} /> Popular:
              </span>
              {quickSearchTags.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => router.push(tag.path)}
                  className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#0A4F8A] hover:text-[#0A4F8A] hover:bg-blue-50/50 transition cursor-pointer"
                >
                  {tag.label}
                </button>
              ))}
            </div>

            {/* Mobile-first Call-To-Actions */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() =>
                  openWhatsApp(
                    "Hello Shyam Labs, I want to book a Health Checkup / Blood Test with Free Home Collection."
                  )
                }
                className="flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#0A4F8A] to-[#083d6c] px-7 py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-[#0A4F8A]/25 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer"
              >
                <FaWhatsapp size={20} className="text-emerald-400" />
                <span>Book Free Home Collection</span>
              </button>

              <button
                onClick={() => router.push("/packages")}
                className="flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-6 py-4 text-sm sm:text-base font-bold text-slate-700 hover:border-[#0A4F8A] hover:text-[#0A4F8A] hover:bg-blue-50/30 transition cursor-pointer"
              >
                <span>View All Packages</span>
                <FaArrowRight size={14} />
              </button>

              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 sm:hidden rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
              >
                <FaPhoneAlt size={12} className="text-[#0A4F8A]" />
                <span>Call Lab Support</span>
              </a>
            </div>

            {/* Trust Reassurance Row */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-2 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100/70 text-[#0A4F8A]">
                  <FiHome size={17} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Free Home Pickup</div>
                  <div className="text-[10px] text-slate-500 hidden sm:block">Zero extra charges</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100/70 text-[#78BE43]">
                  <FiClock size={17} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Fast Digital Reports</div>
                  <div className="text-[10px] text-slate-500 hidden sm:block">WhatsApp & Email</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100/70 text-amber-600">
                  <FiCheckCircle size={17} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">NABL Standard</div>
                  <div className="text-[10px] text-slate-500 hidden sm:block">100% Accuracy</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean, Perfectly Aligned Logo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center items-center mt-4 lg:mt-0"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl text-center">
              {/* Soft Radial Ambient Backdrop Glow */}
              <div className="absolute inset-0 rounded-3xl bg-radial from-blue-100/40 via-emerald-50/20 to-transparent pointer-events-none" />

              {/* Logo Frame - Centered & Aligned */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="relative h-44 sm:h-52 w-full max-w-[260px] sm:max-w-[280px]">
                  <Image
                    src="/logo.png"
                    alt="Shyam Budget Friendly Labs"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 w-full flex flex-col items-center gap-1.5">
                  <span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1 text-xs font-bold text-[#0A4F8A]">
                    Shyam Budget Friendly Labs
                  </span>
                  <p className="text-xs text-slate-500 font-medium">
                    Sector 21, Panchkula • Serving Chandigarh & Tricity
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}