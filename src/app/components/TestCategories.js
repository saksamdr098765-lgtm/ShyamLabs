"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaHeartbeat,
  FaBrain,
  FaUserMd,
  FaBaby,
  FaWalking,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";
import { SITE_CONFIG } from "../siteConfig";
import trackEvent from "../utils/Analytics";

const categories = [
  {
    title: "Diabetology",
    tests: "Diabetes & Glucose Screening",
    icon: FaHeartbeat,
  },
  {
    title: "Gynecology",
    tests: "Women's Health & Hormones",
    icon: FaUserMd,
  },
  {
    title: "Pediatrics",
    tests: "Child Care & Growth Profile",
    icon: FaBaby,
  },
  {
    title: "Orthopedics",
    tests: "Bones, Joints & Vitamin D",
    icon: FaWalking,
  },
  {
    title: "Psychiatry",
    tests: "Mental Wellness & Stress",
    icon: FaBrain,
  },
];

export default function TestCategories() {
  const router = useRouter();
  const { whatsapp } = SITE_CONFIG;

  const openWhatsApp = (message) => {
    trackEvent?.("whatsApp_click", {
      page_location: typeof window !== "undefined" ? window.location.href : "",
    });
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
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

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-100/30 to-blue-100/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex px-3.5 py-1.5 rounded-full border border-green-200 bg-green-50 text-[#78BE43] text-xs font-bold uppercase tracking-wider">
            E-CLINIC SERVICES
          </span>

          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
            Consult
            <span className="block text-[#0A4F8A]">
              MBBS Specialists Online
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Access expert medical advice &amp; diagnostic consultation through secure video appointments.
          </p>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 rounded-3xl bg-gradient-to-br from-[#0A4F8A] via-[#08345c] to-slate-900 overflow-hidden p-6 sm:p-10 relative text-white flex flex-col justify-between shadow-xl"
          >
            <div>
              <span className="inline-flex rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                ✨ Digital Health Service
              </span>

              <h3 className="mt-4 text-3xl sm:text-5xl font-black leading-tight">
                E-Clinic
                <br />
                Consultation
              </h3>

              <p className="mt-4 text-xs sm:text-sm text-white/80 leading-relaxed font-medium max-w-md">
                Connect directly with experienced MBBS specialists for medical advice, report interpretation, and custom test recommendations.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <div>
                  <h4 className="text-3xl sm:text-4xl font-black text-white">8+</h4>
                  <p className="text-xs text-white/70 font-semibold">Specialities</p>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div>
                  <h4 className="text-3xl sm:text-4xl font-black text-white">100%</h4>
                  <p className="text-xs text-white/70 font-semibold">Online Support</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => router.push("/contact")}
                className="flex items-center justify-center gap-2 bg-white text-[#0A4F8A] px-6 py-3.5 rounded-2xl font-bold text-sm shadow-md hover:bg-slate-100 transition cursor-pointer"
              >
                <span>Book Consultation</span>
                <FaArrowRight size={13} />
              </button>

              <button
                onClick={() =>
                  openWhatsApp(
                    "Hello, I would like to inquire about booking an online doctor consultation."
                  )
                }
                className="flex items-center justify-center gap-2 bg-[#78BE43] text-white px-5 py-3.5 rounded-2xl font-bold text-sm hover:bg-[#68a73a] transition cursor-pointer"
              >
                <FaWhatsapp size={16} />
                <span>WhatsApp Inquiry</span>
              </button>
            </div>
          </motion.div>

          {/* Speciality Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all duration-300 hover:border-[#0A4F8A]/30 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0A4F8A] transition-colors group-hover:bg-[#0A4F8A] group-hover:text-white">
                      <Icon size={20} />
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-[#0A4F8A] transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500 font-medium">
                      {item.tests}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      openWhatsApp(
                        `Hello, I would like to inquire about ${item.title} (${item.tests}) diagnostic testing.`
                      )
                    }
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#0A4F8A] group-hover:text-[#08345c]"
                  >
                    <span>Inquire Specialty</span>
                    <FaArrowRight size={10} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}