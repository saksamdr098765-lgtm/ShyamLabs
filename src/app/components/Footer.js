"use client";

import Link from "next/link";
import {
  FaMicroscope,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#050816] overflow-hidden border-t border-white/10">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-10">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <FaMicroscope className="text-cyan-400 text-xl" />
              </div>

              <div>
                <h2 className="text-2xl font-black text-white">
                  SHYAM LABS
                </h2>

                <p className="text-cyan-400 text-sm tracking-[3px] uppercase">
                  Precision Diagnostics
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-lg text-gray-400 leading-relaxed">
              Delivering accurate diagnostic insights through
              advanced laboratory technology, trusted expertise,
              and a commitment to better healthcare outcomes.
            </p>

            <div className="flex gap-10 mt-10">
              <div>
                <h3 className="text-4xl font-black text-cyan-400">
                  25K+
                </h3>
                <p className="text-gray-500 text-sm">
                  Tests Processed
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-cyan-400">
                  99.8%
                </h3>
                <p className="text-gray-500 text-sm">
                  Accuracy Rate
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-5">
                Navigation
              </h3>

              <div className="space-y-3">
                {[
                  "Home",
                  "Packages",
                  "Tests",
                  "Technology",
                  "Contact",
                ].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block text-gray-400 hover:text-cyan-400 transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-5">
                Services
              </h3>

              <div className="space-y-3">
                {[
                  "Blood Tests",
                  "Diabetes",
                  "Thyroid",
                  "Heart Health",
                  "Home Collection",
                ].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block text-gray-400 hover:text-cyan-400 transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-5">
                Contact
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="text-cyan-400 mt-1" />
                  <span className="text-gray-400">
                    +91 XXXXX XXXXX
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-cyan-400 mt-1" />
                  <span className="text-gray-400">
                    info@shyamlabs.com
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-cyan-400 mt-1" />
                  <span className="text-gray-400">
                    Your City, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Brand Text */}
        <div className="relative py-14">
          <h1 className="text-center text-[60px] md:text-[140px] lg:text-[180px] font-black leading-none text-white/[0.03] select-none">
            SHYAM LABS
          </h1>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shyam Labs. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-gray-500 text-sm">
              Designed for modern healthcare.
            </p>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="h-10 w-10 rounded-full border border-white/10 hover:border-cyan-400 flex items-center justify-center text-white transition"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}