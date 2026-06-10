"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaCheckCircle,
} from "react-icons/fa";

import { SITE_CONFIG } from "../siteConfig";
import trackEvent from "../utils/Analytics";
const packages = [
  {
    name: "Lipid Profile Test",
    path: "/package-detail-page/lipid-profile-test",
  },
  {
    name: "Arthritis Checkup",
    path: "/package-detail-page/arthritis-checkup",
  },
  {
    name: "Fever Panel Basic",
    path: "/package-detail-page/fever-panel-basic",
  },
  {
    name: "Aarogyam A Pro",
    path: "/package-detail-page/aarogyam-a-pro",
  },
  {
    name: "Fasting Blood Sugar",
    path: "/package-detail-page/fasting-blood-sugar",
  },
];
 const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Health Packages",
    path: "/packages",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
export default function Footer() {

  const {phone,address,email,map,fullName}=SITE_CONFIG
  return (
    <footer className="relative bg-white overflow-hidden border-t border-slate-100">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#0A4F8A 1px, transparent 1px),
            linear-gradient(90deg, #0A4F8A 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-gradient-to-r from-green-100/50 to-blue-100/50 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Main Footer */}
        <div className="py-16 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="Shyam Labs"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-black text-slate-900">
                   {fullName}
                  </h2>

                  <p className="text-[#0A4F8A] font-medium text-sm">
                    Budget Friendly Diagnostic Centre
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-8 max-w-xl text-slate-600 leading-relaxed">
                Delivering accurate pathology testing, preventive
                health screening, and reliable diagnostics with a
                commitment to affordability, trust, and patient care.
              </p>

              {/* Trust Points */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <FaCheckCircle className="text-[#78BE43]" />
                  Certified Laboratory
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <FaCheckCircle className="text-[#78BE43]" />
                  Home Collection
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <FaCheckCircle className="text-[#78BE43]" />
                  Fast Reports
                </div>
              </div>
            </motion.div>

            {/* Right */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Navigation */}
              <div>
                <h3 className="font-bold text-slate-900 mb-5">
                  Navigation
                </h3>

                <div className="space-y-3">
                  {links.map(({name,path},index) => (
                    <Link
                      key={index}
                      href={path}
                      className="block text-slate-600 hover:text-[#0A4F8A] transition"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="font-bold text-slate-900 mb-5">
                  Services
                </h3>

                <div className="space-y-3">
                  {packages.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="block text-slate-600 hover:text-[#0A4F8A] transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-bold text-slate-900 mb-5">
                  Contact
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <FaPhoneAlt className="text-[#0A4F8A] mt-1" />
                    <span className="text-slate-600">
                      {phone}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaEnvelope className="text-[#0A4F8A] mt-1 shrink-0" />
                    <span className="text-slate-600">
                     {email}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-[#0A4F8A] mt-1 shrink-0" />
                    <span className="text-slate-600">
                      {address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
   <div className="border-t border-slate-200 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
  <p className="text-sm text-slate-500 text-center md:text-left">
    © {new Date().getFullYear()} Shyam Labs. All rights reserved.
  </p>

  <div className="flex items-center gap-4 flex-wrap justify-center">
    <p className="hidden lg:block text-sm text-slate-500">
      Trusted Diagnostics For Every Family
    </p>

    <a
      href="https://rohitdevstack.online"
      onClick={()=>{  trackEvent(`site_click`)}}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        border
        border-slate-200
        bg-white
        hover:border-[#0A4F8A]/30
        hover:shadow-md
        transition-all
        duration-300
      "
    >
      <span className="h-2 w-2 rounded-full bg-[#78BE43]" />

      <span className="text-xs text-slate-500">
        Developed by
      </span>

      <span className="text-sm font-semibold text-[#0A4F8A]">
        Rohit DevStack
      </span>
    </a>

    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
        h-11
        w-11
        rounded-full
        bg-[#0A4F8A]
        text-white
        flex
        items-center
        justify-center
        hover:scale-110
        transition
      "
    >
      <FaArrowUp />
    </button>
  </div>
</div>
        {/* Location Section */}
<div className="border-t border-slate-200 py-10">
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
    <div>
      <span className="text-sm font-semibold tracking-wider text-[#78BE43] uppercase">
        Visit Our Laboratory
      </span>

      <h3 className="mt-2 text-2xl md:text-3xl font-black text-slate-900">
        {fullName}
      </h3>

      <p className="mt-2 text-slate-600">
        {address}
      </p>
    </div>

    <a
      href="https://maps.app.goo.gl/8g9ZPeXZqHMb7Wfn7?g_st=ac"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0A4F8A] text-white font-medium hover:scale-105 transition"
    >
      Get Directions
    </a>
  </div>

  <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-lg">
    <iframe
      src={map}
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>

      </div>
      
    </footer>
  );
}