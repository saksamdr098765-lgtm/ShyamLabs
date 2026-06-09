"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaFlask,
  FaMicroscope,
  FaDna,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router=useRouter()
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] md:h-[700px] w-[500px] md:w-[700px] rounded-full bg-gradient-to-r from-green-100/50 to-blue-100/50 blur-3xl" />
      </div>

      {/* Scientific Grid */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col items-center justify-center text-center py-24">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="px-4 py-2 rounded-full border border-green-200 bg-green-50 text-green-700 text-xs sm:text-sm font-semibold tracking-wide">
              TRUSTED DIAGNOSTIC LABORATORY
            </span>
          </motion.div>

          {/* Scientific Visual */}
          <div className="relative h-[280px] sm:h-[340px] md:h-[450px] w-full flex items-center justify-center">
            {/* Orbit Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[420px] md:h-[420px] rounded-full border border-blue-100"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 70,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[520px] md:h-[520px] rounded-full border border-green-100"
            />

            {/* Blood Tests */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute left-0 sm:left-8 md:left-16 top-1/2 -translate-y-1/2"
            >
              <div className="bg-white border border-slate-100 shadow-lg rounded-xl px-3 py-2 md:px-5 md:py-4">
                <div className="flex items-center gap-2">
                  <FaFlask className="text-[#0A4F8A]" />
                  <span className="text-xs md:text-sm font-medium">
                    Blood Tests
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Pathology */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute right-0 sm:right-8 md:right-16 top-12"
            >
              <div className="bg-white border border-slate-100 shadow-lg rounded-xl px-3 py-2 md:px-5 md:py-4">
                <div className="flex items-center gap-2">
                  <FaMicroscope className="text-[#0A4F8A]" />
                  <span className="text-xs md:text-sm font-medium">
                    Pathology
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Screening */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute bottom-0"
            >
              <div className="bg-white border border-slate-100 shadow-lg rounded-xl px-3 py-2 md:px-5 md:py-4">
                <div className="flex items-center gap-2">
                  <FaDna className="text-[#0A4F8A]" />
                  <span className="text-xs md:text-sm font-medium">
                    Screening
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Center Logo */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-3xl scale-125" />

             <div className="relative h-[180px] w-[180px] sm:h-[240px] sm:w-[240px] md:h-[320px] md:w-[320px]">
  <Image
    src="/logo.png"
    alt="Shyam Budget Friendly Labs"
    fill
    priority
    className="object-contain"
  />
</div>
            </motion.div>

            {/* DNA Icon */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="absolute right-10 top-0 opacity-10 hidden lg:block"
            >
              <FaDna size={140} className="text-[#0A4F8A]" />
            </motion.div>
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-slate-900"
          >
            Science Backed Testing.
            <span className="block text-[#0A4F8A]">
              Results You Can Trust.
            </span>
          </motion.h1>

          {/* Description */}
          <p className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed">
            Affordable pathology testing, preventive health screening,
            and reliable diagnostics designed to make quality healthcare
            accessible for every family.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 w-full sm:w-auto">
            <button onClick={()=>{router.push('/contact')}} className="bg-[#0A4F8A] cursor-pointer text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:scale-105 transition">
              Book A Test
              <FaArrowRight />
            </button>

            <button onClick={()=>{router.push('/packages')}}  className="border cursor-pointer border-slate-200 px-8 py-4 rounded-xl font-semibold hover:border-[#78BE43] transition">
              View Packages
            </button>
          </div>

          {/* Trust Strip */}
          <div className="mt-12 grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-slate-600">
            <span>✓ Blood Testing</span>
            <span>✓ Thyroid Profile</span>
            <span>✓ Diabetes Screening</span>
            <span>✓ Home Collection</span>
            <span>✓ Digital Reports</span>
          </div>
        </div>
      </div>
    </section>
  );
}