"use client";

import { motion } from "framer-motion";
import {
  FaGift,
  FaArrowRight,
  FaFlask,
  FaBaby,
} from "react-icons/fa";
import { SITE_CONFIG } from "../siteConfig";
import trackEvent from "../utils/Analytics";

export default function WeekendOffers() {
  const whatsapp = SITE_CONFIG.whatsapp;

  const openWhatsapp = (msg) => {
    window.open(
      `https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-[#f7fbff] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#0A4F8A 1px, transparent 1px),
            linear-gradient(90deg, #0A4F8A 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 relative">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-[#78BE43] font-semibold">
            <FaGift />
            WEEKEND SPECIAL OFFERS
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900">
            Save More On
            <span className="block text-[#0A4F8A]">
              Essential Health Tests
            </span>
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Limited-time offers designed to make preventive healthcare
            affordable for every family.
          </p>
        </div>

        {/* Offer Grid */}
        <div className="mt-14 grid lg:grid-cols-3 gap-6">

          {/* Sugar Offer */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] bg-white border border-slate-100 p-8 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <FaFlask className="text-[#0A4F8A]" />
              <span className="font-bold text-[#0A4F8A]">
                Sugar Test Weekend Offer
              </span>
            </div>

            <h3 className="mt-5 text-3xl font-black text-slate-900">
              FREE
            </h3>

            <p className="mt-4 text-slate-600">
              Fasting Blood Sugar
              <br />
              Postprandial Blood Sugar
              <br />
              Random Blood Sugar
            </p>

            <div className="mt-5 inline-flex bg-green-100 text-green-700 px-3 py-2 rounded-xl text-sm font-semibold">
              Free with any other test booking
            </div>

            <button
              onClick={() =>{
                     trackEvent(`whatsApp_click`,{
                page_location:window.location.href
              })
                openWhatsapp(
                  "Hello, I want to know more about the FREE Sugar Test Weekend Offer."
                )
              }}
              className="mt-8 flex items-center gap-2 font-semibold text-[#0A4F8A]"
            >
              Claim Offer <FaArrowRight />
            </button>
          </motion.div>

          {/* Vitamin Package */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-100 p-8"
          >
            <span className="text-sm font-semibold text-orange-600">
              VITAMIN PACKAGE
            </span>

            <h3 className="mt-3 text-3xl font-black text-slate-900">
              Vitamin D + B12
            </h3>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-2xl text-slate-400 line-through">
                ₹1600
              </span>

              <span className="text-5xl font-black text-[#0A4F8A]">
                ₹650
              </span>
            </div>

            <p className="mt-4 text-slate-600">
              Check Vitamin D deficiency and Vitamin B12 levels
              with this special combo package.
            </p>

            <button
              onClick={() =>{
                     trackEvent(`whatsApp_click`,{
                page_location:window.location.href
              })
                openWhatsapp(
                  "Hello, I want to book the Vitamin D + B12 Combo Package at ₹650."
                )
              }}
              className="mt-8 flex items-center gap-2 font-semibold text-[#0A4F8A]"
            >
              Book Package <FaArrowRight />
            </button>
          </motion.div>

          {/* NIPT */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100 p-8"
          >
            <div className="flex items-center gap-3">
              <FaBaby className="text-pink-500" />
              <span className="font-bold text-pink-600">
                HERCHECK NIPT
              </span>
            </div>

            <h3 className="mt-4 text-3xl font-black text-slate-900">
              Prenatal Screening
            </h3>

            <div className="mt-6 flex items-center gap-4">
              <span className="text-2xl text-slate-400 line-through">
                ₹17,500
              </span>

              <span className="text-5xl font-black text-[#0A4F8A]">
                ₹6,500
              </span>
            </div>

            <p className="mt-4 text-slate-600">
              Safe, non-invasive prenatal screening for chromosomal
              conditions. Can be performed from 10 weeks of pregnancy.
            </p>

            <button
              onClick={() =>{
                     trackEvent(`whatsApp_click`,{
                page_location:window.location.href
              })
                openWhatsapp(
                  "Hello, I want details about the HerCheck NIPT test available for ₹6500."
                )
              }}
              className="mt-8 flex items-center gap-2 font-semibold text-[#0A4F8A]"
            >
              Enquire Now <FaArrowRight />
            </button>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 rounded-[32px] bg-[#0A4F8A] p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-black">
              Free Home Collection Available
            </h3>

            <p className="mt-2 text-white/80">
              Fast • Reliable • Affordable
            </p>
          </div>

          <button
            onClick={() =>{
                     trackEvent(`whatsApp_click`,{
                page_location:window.location.href
              })
              openWhatsapp(
                "Hello, I would like to schedule a home sample collection."
              )
            }}
            className="bg-white text-[#0A4F8A] px-8 py-4 rounded-2xl font-bold"
          >
            Book Home Collection
          </button>
        </div>
      </div>
    </section>
  );
}