"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiHome, FiStar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SITE_CONFIG } from "../siteConfig";
import trackEvent from "../utils/Analytics";
import { packageTheme, packageThemeMap } from "../packagesData";

export default function PackageCard({ pkg, featured = false }) {
  const { whatsapp } = SITE_CONFIG;

  const openWhatsApp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    trackEvent?.("whatsApp_click", {
      page_location: typeof window !== "undefined" ? window.location.href : "",
    });
    const message = `Hello, I want to book the *${pkg.name}* package (Offer Price: ₹${pkg.price}). Please provide details and available home collection slots.`;
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const savings = (pkg.originalPrice || 0) - (pkg.price || 0);
  const discount =
    pkg.originalPrice > 0
      ? Math.round((savings / pkg.originalPrice) * 100)
      : 0;

  const themeKey = packageThemeMap[pkg.slug] || "preventive";
  const theme = packageTheme[themeKey];

  const includedTestsList =
    pkg.includedTests && pkg.includedTests.length > 0
      ? pkg.includedTests
      : pkg.testCategories
      ? pkg.testCategories.flatMap((cat) => cat.tests || [])
      : [];

  const totalTestsCount = pkg.testsCount || includedTestsList.length || 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-sm transition-all duration-300 hover:border-[#0A4F8A]/40 hover:shadow-xl"
    >
      {/* Top Brand Accent Line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0A4F8A] via-[#08345c] to-[#78BE43] opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Compact Header: Image Thumbnail (Left) + Details (Right) */}
        <div className="flex gap-3">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100 border border-slate-100 shadow-2xs">
            <Image
              src={pkg.image}
              alt={pkg.name}
              fill
              priority={featured}
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="96px"
            />
            {discount > 0 && (
              <span className="absolute left-1 top-1 rounded-md bg-[#78BE43] px-1.5 py-0.5 text-[9px] font-black text-white shadow-2xs">
                {discount}% OFF
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-1">
              <span
                className={`inline-flex rounded-md px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${theme.badgeBg} ${theme.badgeColor}`}
              >
                {pkg.category || "Health Checkup"}
              </span>

              {pkg.rating && (
                <span className="flex items-center gap-0.5 text-[10px] font-bold text-slate-700">
                  <FiStar className="text-amber-400 fill-amber-400" size={10} />
                  {pkg.rating}
                </span>
              )}
            </div>

            <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-tight text-slate-900 group-hover:text-[#0A4F8A] transition-colors">
              {pkg.name}
            </h3>

            <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[10px] text-slate-500 font-medium">
              <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-bold text-slate-700">
                🧪 {totalTestsCount} Tests
              </span>
              <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                <FiHome size={9} /> Free Home Collection
              </span>
            </div>
          </div>
        </div>

        {/* Compact Tests Snippet */}
        {includedTestsList.length > 0 && (
          <div className="mt-2.5 rounded-xl bg-slate-50 border border-slate-100 p-2 text-[11px]">
            <p className="text-[10px] font-bold text-[#0A4F8A] uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>Included Tests</span>
              <span className="text-[#78BE43]">✓ NABL Standard</span>
            </p>
            <p className="text-slate-600 line-clamp-2 leading-relaxed text-[11px] font-medium">
              {includedTestsList.slice(0, 4).join(" • ")}
              {includedTestsList.length > 4 && ` • +${includedTestsList.length - 4} more`}
            </p>
          </div>
        )}

        {/* Compact Price & Savings Row */}
        <div className="mt-2.5 flex items-baseline justify-between rounded-xl bg-blue-50/50 border border-blue-100/60 px-3 py-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black text-[#0A4F8A]">
              ₹{pkg.price}
            </span>
            {pkg.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                ₹{pkg.originalPrice}
              </span>
            )}
          </div>

          {savings > 0 && (
            <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-extrabold text-emerald-800">
              Save ₹{savings}
            </span>
          )}
        </div>
      </div>

      {/* Ultra Compact Dual CTA Bar */}
      <div className="mt-3 grid grid-cols-[1fr_auto] gap-2 pt-1 border-t border-slate-100">
        <Link
          href={`/package-detail-page/${pkg.slug}`}
          className="group/btn flex items-center justify-center gap-1.5 rounded-xl bg-[#0A4F8A] px-3 py-2 text-xs font-bold text-white transition-all duration-200 hover:bg-[#08345c]"
        >
          <span>View Details</span>
          <FiArrowRight size={12} className="transition-transform group-hover/btn:translate-x-1" />
        </Link>

        <button
          onClick={openWhatsApp}
          title="Quick Book via WhatsApp"
          className="flex h-8 w-9 items-center justify-center rounded-xl bg-[#78BE43] text-white transition-all duration-200 hover:bg-[#68a73a] cursor-pointer"
        >
          <FaWhatsapp size={15} />
        </button>
      </div>
    </motion.article>
  );
}