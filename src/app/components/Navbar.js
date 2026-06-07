"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaMicroscope } from "react-icons/fa";

const navLinks = [
  { name: "Services", href: "#" },
  { name: "Packages", href: "#" },
  { name: "Technology", href: "#" },
  { name: "About", href: "#" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-6 left-0 right-0 z-50 px-4 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative h-16 px-6 rounded-full border border-cyan-500/20 bg-[#0B1220]/80 backdrop-blur-2xl shadow-[0_0_40px_rgba(6,182,212,0.12)] flex items-center justify-between">
          
          {/* Top Glow Line */}
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-10">
            <div className="relative h-11 w-11 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-cyan-400/10 blur-md" />
              <FaMicroscope className="relative text-cyan-400 text-sm" />
            </div>

            <div>
              <h2 className="font-bold text-white tracking-wide">
                SHYAM LABS
              </h2>
              <p className="text-[10px] uppercase tracking-[3px] text-cyan-400/70">
                Precision Diagnostics
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm text-gray-400 hover:text-white transition duration-300 group"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button className="group relative overflow-hidden rounded-full bg-cyan-500 px-5 py-2.5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400">
              <span className="relative flex items-center gap-3">
                Book Test
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden flex flex-col gap-1.5 z-10">
            <span className="h-[2px] w-5 rounded-full bg-white" />
            <span className="h-[2px] w-5 rounded-full bg-white" />
            <span className="h-[2px] w-5 rounded-full bg-white" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}