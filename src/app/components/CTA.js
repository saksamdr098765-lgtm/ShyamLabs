"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { SITE_CONFIG } from "../siteConfig";
import { useRouter } from "next/navigation";
import trackEvent from "../utils/Analytics";

export default function CTA() {
  const router=useRouter()
  const {phone}=SITE_CONFIG
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Grid Background */}
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
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] md:h-[700px] md:w-[700px] bg-gradient-to-r from-green-100/60 to-blue-100/60 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            rounded-[28px]
            md:rounded-[40px]
            overflow-hidden
            border
            border-slate-100
            bg-white
            shadow-[0_30px_80px_rgba(10,79,138,0.08)]
          "
        >
          <div className="p-6 sm:p-8 md:p-16 text-center">
            {/* Badge */}
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-100 text-[#78BE43] text-xs sm:text-sm font-semibold">
              BOOK YOUR TEST TODAY
            </span>

            {/* Heading */}
            <h2
              className="
                mt-6
                text-[2.6rem]
                sm:text-5xl
                md:text-7xl
                font-black
                leading-[0.95]
                text-slate-900
              "
            >
              Your Health
              <span className="block text-[#0A4F8A]">
                Deserves Reliable Answers.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-xl
                mx-auto
                text-base
                md:text-lg
                text-slate-600
                leading-relaxed
              "
            >
              Accurate diagnostics, convenient home sample
              collection, and fast digital reports — helping
              you make confident healthcare decisions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-10 sm:flex-row sm:justify-center">
              <button
              onClick={()=>{router.push('/packages')}}
                className="
                  w-full
                  sm:w-auto
                  cursor-pointer
                  h-14
                  px-8
                  rounded-2xl
                  bg-[#0A4F8A]
                  text-white
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:scale-[1.02]
                  transition-all
                "
              >
                Book A Test
                <FaArrowRight />
              </button>

              <button
              onClick={()=>{
                     trackEvent(`phone_click`)
                window.location.href=`tel:${phone}`}}
                className="
                  w-full
                  sm:w-auto
                  cursor-pointer
                  h-14
                  px-8
                  rounded-2xl
                  border
                  border-slate-200
                  text-slate-700
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:border-[#78BE43]
                  hover:text-[#0A4F8A]
                  transition-all
                "
              >
                <FaPhoneAlt />
                Call Now
              </button>
            </div>

            {/* Trust Points */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              {[
                "Home Collection",
                "Fast Reports",
                "Trusted Diagnostics",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-slate-600 text-sm font-medium"
                >
                  <FaCheckCircle className="text-[#78BE43]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-slate-100">
            {[
              "Certified Laboratory",
              "Secure Digital Reports",
              "Patient-First Care",
            ].map((item) => (
              <div
                key={item}
                className="
                  py-5
                  px-4
                  text-center
                  text-sm
                  font-medium
                  text-slate-600
                  border-b
                  sm:border-b-0
                  sm:border-r
                  border-slate-100
                  last:border-r-0
                  last:border-b-0
                "
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}