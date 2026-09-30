"use client";

import {
  FaMicroscope,
  FaShieldAlt,
  FaHeartbeat,
  FaUsers,
  FaCheckCircle,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { FiHome, FiClock, FiShield } from "react-icons/fi";
import { SITE_CONFIG } from "../siteConfig";
import trackEvent from "../utils/Analytics";
import Link from "next/link";

const values = [
  {
    icon: FaShieldAlt,
    title: "Accuracy First",
    description:
      "Every diagnostic report undergoes strict quality control and NABL validation procedures.",
  },
  {
    icon: FaHeartbeat,
    title: "Patient Focused",
    description:
      "We make healthcare affordable, accessible, and easy to understand for every family.",
  },
  {
    icon: FaMicroscope,
    title: "Modern Technology",
    description:
      "Advanced automated laboratory systems ensure precision and speed in every test result.",
  },
];

const stats = [
  {
    number: "25,000+",
    label: "Tests Processed",
  },
  {
    number: "99.8%",
    label: "Diagnostic Accuracy",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
  {
    number: "24 Hours",
    label: "Average Reporting",
  },
];

export default function AboutClient() {
  const { whatsapp } = SITE_CONFIG;

  const openWhatsApp = (message) => {
    trackEvent?.("whatsApp_click", {
      page_location: typeof window !== "undefined" ? window.location.href : "",
    });
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="bg-white overflow-hidden text-slate-900">
      {/* Pattern */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#0A4F8A 1px, transparent 1px),
            linear-gradient(90deg, #0A4F8A 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* HERO */}
      <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 bg-gradient-to-b from-blue-50/60 via-white to-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[350px] w-full max-w-7xl bg-radial from-blue-200/40 via-green-100/30 to-transparent blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-green-200 bg-green-50 text-[#78BE43] text-xs font-bold uppercase tracking-wider">
              <FiShield size={13} /> ABOUT SHYAM LABS
            </span>

            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15]">
              Diagnostics Built Around
              <span className="block text-[#0A4F8A]">
                Accuracy &amp; Trust.
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-medium">
              Shyam Budget Friendly Labs is committed to delivering affordable, highly accurate, and accessible pathology diagnostic services. We help families take control of their health through quality testing and doorstep sample collection.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() =>
                  openWhatsApp(
                    "Hello, I want to learn more about Shyam Labs health packages and diagnostic testing."
                  )
                }
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#0A4F8A] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#08345c] transition cursor-pointer"
              >
                <FaWhatsapp size={18} className="text-emerald-400" />
                <span>Chat with Lab Support</span>
              </button>

              <Link
                href="/packages"
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-2xs hover:border-[#0A4F8A] hover:text-[#0A4F8A] transition"
              >
                <span>Browse Packages</span>
                <FaArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-[#78BE43] font-bold uppercase tracking-wider text-xs">
                OUR MISSION &amp; STORY
              </span>

              <h2 className="mt-2 text-2xl sm:text-4xl font-black text-slate-900">
                Healthcare Diagnostics Should Be
                <span className="block text-[#0A4F8A]">
                  Accessible To Everyone.
                </span>
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Founded with a clear vision to make quality pathology diagnostics affordable, Shyam Labs has grown into a trusted health partner serving thousands of patients. Our commitment remains simple: accurate reports, transparent pricing, and patient-first care.
              </p>
            </div>

            {/* Quick Specs Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0A4F8A]">
                  <FiHome size={18} />
                </div>
                <h3 className="mt-3 font-bold text-slate-900 text-sm">Doorstep Collection</h3>
                <p className="mt-1 text-xs text-slate-500 font-medium">Sample collection at your convenience without lab queues.</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-[#78BE43]">
                  <FiClock size={18} />
                </div>
                <h3 className="mt-3 font-bold text-slate-900 text-sm">Same Day Reports</h3>
                <p className="mt-1 text-xs text-slate-500 font-medium">Fast digital reports delivered directly to your phone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200/90 p-6 bg-white shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-[#0A4F8A]/10 text-[#0A4F8A] flex items-center justify-center">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-r from-blue-50/80 via-white to-green-50/80 p-6 sm:p-12 shadow-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((item) => (
                <div key={item.label} className="text-center">
                  <h3 className="text-3xl sm:text-5xl font-black text-[#0A4F8A]">
                    {item.number}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-slate-600">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRUST US */}
      <section className="py-12 sm:py-16 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Why Patients Trust Us
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
              Every blood test &amp; screening package follows NABL standard testing protocols for high diagnostic accuracy.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Certified Laboratory Procedures",
              "Advanced Automated Equipment",
              "Affordable Health Checkup Packages",
              "Free Doorstep Sample Collection",
              "Fast Digital Reports via WhatsApp",
              "Experienced Phlebotomists &amp; Staff",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 rounded-2xl border border-slate-200/80 bg-white shadow-2xs"
              >
                <FaCheckCircle className="text-[#78BE43] shrink-0" size={16} />
                <span className="text-xs font-bold text-slate-800">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM & CTA */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-[#0A4F8A] to-[#08345c] p-6 sm:p-12 text-white shadow-xl">
            <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center">
              <div>
                <FaUsers size={32} className="text-emerald-400" />
                <h2 className="mt-4 text-2xl sm:text-4xl font-black">
                  Dedicated To Better Healthcare Outcomes.
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-white/80 max-w-xl font-medium">
                  Our team combines medical expertise, laboratory excellence, and compassionate service to ensure dependable diagnostic care for every patient.
                </p>
              </div>

              <button
                onClick={() =>
                  openWhatsApp(
                    "Hello, I want to book a blood test / health package."
                  )
                }
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#78BE43] text-white font-bold text-sm hover:bg-[#68a73a] transition cursor-pointer shadow-md shrink-0 w-full lg:w-auto"
              >
                <FaWhatsapp size={18} />
                <span>Book Diagnostic Test</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}