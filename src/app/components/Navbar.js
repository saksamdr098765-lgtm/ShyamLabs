"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { SITE_CONFIG } from "../siteConfig";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const {name,phone}=SITE_CONFIG
  const router=useRouter()
  const [open, setOpen] = useState(false);

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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src="/logo.png"
              alt="Shyam Labs"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="font-bold text-slate-900 text-lg leading-none">
             {name}
            </h2>
            <p className="text-xs text-[#78BE43] font-medium">
              YOUR HEALTH, OUR PRIORITY
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map(({name,path},index) => (
            <Link
              key={index}
              href={path}
              className="text-slate-700 font-medium hover:text-[#0A4F8A] transition"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden cursor-pointer lg:flex items-center gap-4">
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-2 text-slate-700 font-medium"
          >
            <FaPhoneAlt className="text-[#78BE43]" />
            Call Us
          </a>
          <button onClick={()=>{router.push('/contact')}}  className="bg-[#0A4F8A] cursor-pointer text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#083c69] transition">
            Book Test
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-slate-700 text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-5">
              {links.map(({name,path},index) => (
                <Link
                  key={index}
                  href={path}
                  onClick={() => setOpen(false)}
                  className="font-medium text-slate-700"
                >
                  {name}
                </Link>
              ))}

              <button className="bg-[#0A4F8A] text-white py-3 rounded-xl font-semibold">
                Book Test
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}