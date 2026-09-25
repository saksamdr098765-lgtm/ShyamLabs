"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { SITE_CONFIG } from "../siteConfig";
import { useRouter } from "next/navigation";
import trackEvent from "../utils/Analytics";

export default function CTA() {
  const router = useRouter();
  const { phone, whatsapp } = SITE_CONFIG;

  const openWhatsApp = () => {
    trackEvent?.("whatsApp_click", {
      page_location: typeof window !== "undefined" ? window.location.href : "",
    });
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
      "Hello, I want to book a Health Package / Blood Test."
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative py-14 sm:py-24 bg-white overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#0A4F8A 1px, transparent 1px),
            linear-gradient(90deg, #0A4F8A 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl sm:rounded-[36px] overflow-hidden border border-slate-200/90 bg-gradient-to-br from-white via-blue-50/30 to-slate-50 p-6 sm:p-12 text-center shadow-xl"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-green-50 border border-green-200 text-[#78BE43] text-xs font-bold uppercase tracking-wider">
            <FiCheckCircle size={13} /> BOOK YOUR TEST TODAY
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            Your Health Deserves
            <span className="block text-[#0A4F8A]">
              Reliable &amp; Fast Answers.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Accurate diagnostics, convenient doorstep sample collection, and fast digital reports — helping you make confident healthcare decisions.
          </p>

          {/* Mobile First Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
            <button
              onClick={() => router.push("/packages")}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#0A4F8A] px-7 py-4 text-sm font-bold text-white shadow-md hover:bg-[#08345c] transition cursor-pointer"
            >
              <span>Explore All Packages</span>
              <FaArrowRight size={13} />
            </button>

            <button
              onClick={openWhatsApp}
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#78BE43] px-6 py-4 text-sm font-bold text-white shadow-md hover:bg-[#68a73a] transition cursor-pointer"
            >
              <FaWhatsapp size={18} />
              <span>WhatsApp Booking</span>
            </button>

            <a
              href={`tel:${phone}`}
              onClick={() => trackEvent?.("phone_click")}
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-700 hover:border-[#0A4F8A] hover:text-[#0A4F8A] transition cursor-pointer"
            >
              <FaPhoneAlt size={13} className="text-[#0A4F8A]" />
              <span>Call Lab Now</span>
            </a>
          </div>

          {/* Trust Points */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5">
              <FiCheckCircle className="text-[#78BE43]" size={14} />
              <span>Free Doorstep Collection</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <FiCheckCircle className="text-[#78BE43]" size={14} />
              <span>Same Day Digital Reports</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <FiCheckCircle className="text-[#78BE43]" size={14} />
              <span>NABL Standard Quality</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}