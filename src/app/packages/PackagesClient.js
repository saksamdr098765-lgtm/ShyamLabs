"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaArrowRight,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  FiActivity,
  FiHeart,
  FiDroplet,
  FiShield,
  FiSun,
  FiClock,
  FiCheckCircle,
  FiLayers,
  FiSliders,
  FiDatabase,
  FiHome,
  FiX,
  FiPhoneCall,
} from "react-icons/fi";
import {
  FaCapsules,
  FaBottleDroplet,
  FaSyringe,
  FaHeartPulse,
} from "react-icons/fa6";

import { SITE_CONFIG } from "../siteConfig";
import trackEvent from "../utils/Analytics";
import Link from "next/link";
import PackageCard from "../components/PackageCard";
import packages from "../data/packages";
import { tests } from "../data/tests";

// Category Icon Mapper
const categoryIconMap = {
  Diabetes: FiActivity,
  Sugar: FiActivity,
  Glucose: FiActivity,
  Heart: FiHeart,
  Cardiac: FaHeartPulse,
  Cholesterol: FiHeart,
  Lipid: FiHeart,
  Liver: FiShield,
  Hepatic: FiShield,
  Kidney: FiDroplet,
  Renal: FiDroplet,
  KFT: FiDroplet,
  Thyroid: FiSun,
  Blood: FiDatabase,
  CBC: FaSyringe,
  Haematology: FiDatabase,
  Iron: FiActivity,
  Anemia: FiActivity,
  Electrolyte: FiDroplet,
  Urine: FaBottleDroplet,
  Vitamin: FaCapsules,
  Nutrition: FaCapsules,
};

function getCategoryIcon(category = "") {
  const match = Object.entries(categoryIconMap).find(([key]) =>
    category.toLowerCase().includes(key.toLowerCase())
  );
  return match ? match[1] : FiActivity;
}

/**
 * Top-level Component helper for rendering Category Icon without lint warnings
 */
function TestCategoryIcon({ category, size = 20, className = "" }) {
  const IconComponent = getCategoryIcon(category);
  return <IconComponent size={size} className={className} />;
}

/**
 * Standalone Test Card component (Preserved as requested)
 */
function TestCardNoImage({ test, openWhatsApp }) {
  const isPublished = test.status === "published";
  const formattedPrice = typeof test.price === "number" ? `₹${test.price}` : test.price;
  const isFastingRequired = test.fasting === true || test.fasting === "Required";
  const fastingLabel = typeof test.fasting === "string" ? test.fasting : isFastingRequired ? "10-12 Hrs Fasting" : "Fasting Not Required";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0A4F8A]/30 hover:shadow-xl"
    >
      {/* Top Gradient Accent Line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0A4F8A] via-[#08345c] to-[#78BE43] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        {/* Card Header: Icon, Category & Price */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A4F8A]/10 text-[#0A4F8A] transition-colors duration-300 group-hover:bg-[#0A4F8A] group-hover:text-white">
            <TestCategoryIcon category={test.category || test.organ || test.name} size={18} />
          </div>

          <div className="flex flex-col items-end gap-0.5 text-right">
            {formattedPrice && (
              <span className="text-xl font-black text-[#0A4F8A]">
                {formattedPrice}
              </span>
            )}
            {test.category && (
              <span className="inline-flex rounded-md bg-blue-50 border border-blue-100/80 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-[#0A4F8A]">
                {test.category}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-base font-bold text-slate-900 group-hover:text-[#0A4F8A] transition-colors duration-200 leading-snug">
          {test.name}
        </h3>

        {/* Short Description */}
        {test.description && (
          <p className="mt-1.5 text-xs leading-relaxed text-slate-500 line-clamp-2">
            {test.description}
          </p>
        )}

        {/* Specification Pills */}
        <div className="mt-3.5 flex flex-wrap gap-1.5 text-[10px]">
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 border border-slate-100 px-2 py-0.5 font-medium text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0A4F8A]" />
            {test.sampleType || "Blood Sample"}
          </span>

          <span className="inline-flex items-center gap-1 rounded-md bg-slate-50 border border-slate-100 px-2 py-0.5 font-medium text-slate-600">
            <FiClock size={10} className="text-[#0A4F8A]" />
            {test.reportTime || "24 Hours"}
          </span>

          {test.parameterCount && test.parameterCount > 1 && (
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 text-[#78BE43] border border-green-200/60 px-2 py-0.5 font-bold">
              <FiLayers size={10} />
              {test.parameterCount} Parameters
            </span>
          )}

          <span className="inline-flex items-center gap-1 rounded-md bg-amber-50/90 border border-amber-200/60 px-2 py-0.5 font-medium text-amber-700">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            {fastingLabel}
          </span>
        </div>
      </div>

      {/* Card Action Button */}
      <div className="mt-5 pt-2.5 border-t border-slate-100">
        {isPublished ? (
          <Link
            href={`/tests/${test.slug}`}
            className="w-full cursor-pointer flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#0A4F8A] text-white hover:bg-[#08345c] transition font-bold text-xs shadow-2xs"
          >
            <span>View Test Details</span>
            <FaArrowRight size={11} />
          </Link>
        ) : (
          <button
            onClick={() => {
              trackEvent(`whatsApp_click`, {
                page_location: typeof window !== "undefined" ? window.location.href : "",
              });
              openWhatsApp(
                `Hello, I want to book the *${test.name}* test (${formattedPrice || "Price on request"}). Please provide details and availability.`
              );
            }}
            className="w-full cursor-pointer flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#78BE43] text-white hover:bg-[#68a73a] transition font-bold text-xs shadow-2xs"
          >
            <span>Book Test via WhatsApp</span>
            <FaArrowRight size={11} />
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function PackagesClient() {
  const { whatsapp, phone } = SITE_CONFIG;

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTabSection, setActiveTabSection] = useState("all");

  // Extract all categories from tests list
  const availableCategories = useMemo(() => {
    const cats = new Set();
    (tests || []).forEach((t) => {
      if (t.category) cats.add(t.category);
    });
    return ["all", ...Array.from(cats)];
  }, []);

  // Filter tests list dynamically
  const filteredTests = useMemo(() => {
    let result = tests || [];

    if (selectedCategory !== "all") {
      result = result.filter((t) => t.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (t) =>
          (t.name || "").toLowerCase().includes(q) ||
          (t.shortName || "").toLowerCase().includes(q) ||
          (t.description || "").toLowerCase().includes(q)
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);

  return (
    <main className="bg-white overflow-hidden text-slate-900">
      {/* Dynamic Background Pattern */}
      <div
        className="fixed inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage: `
          linear-gradient(#0A4F8A 1px, transparent 1px),
          linear-gradient(90deg, #0A4F8A 1px, transparent 1px)
        `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Mobile-First Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-b from-blue-50/60 via-white to-white">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[350px] w-full max-w-7xl bg-radial from-blue-200/40 via-green-100/30 to-transparent blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl text-left sm:text-center sm:mx-auto">
            {/* Top Pill Badge */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-green-200 bg-green-50 text-[#78BE43] text-xs font-bold uppercase tracking-wider">
              <FiShield size={14} /> NABL Verified Lab Services
            </span>

            {/* Mobile First Heading */}
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Accurate Diagnostics &amp;
              <span className="block text-[#0A4F8A]">
                Health Packages.
              </span>
            </h1>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl sm:mx-auto font-medium">
              Explore preventive full-body health checkup packages and individual diagnostic blood tests with doorstep sample collection.
            </p>

            {/* Mobile Quick Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
              <button
                onClick={() =>
                  openWhatsApp(
                    "Hello, I want to book a Health Package / Blood Test with Home Collection. Please guide me."
                  )
                }
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#0A4F8A] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#0A4F8A]/20 hover:bg-[#08345c] transition cursor-pointer"
              >
                <FaWhatsapp size={18} className="text-emerald-400" />
                <span>Book Home Collection</span>
              </button>

              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 shadow-2xs hover:border-[#0A4F8A] hover:text-[#0A4F8A] transition"
              >
                <FaPhoneAlt size={14} className="text-[#0A4F8A]" />
                <span>Call Lab Doctor</span>
              </a>
            </div>

            {/* Mobile Value Chips */}
            <div className="mt-6 pt-5 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <FiHome size={13} className="text-[#0A4F8A]" /> Free Doorstep Collection
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <FiClock size={13} className="text-[#78BE43]" /> Same Day Digital Reports
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <FiCheckCircle size={13} className="text-[#0A4F8A]" /> Best Price Guaranteed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Section Navigation Bar (Mobile Scrollable) */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur border-y border-slate-200/80 py-2.5 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            <button
              onClick={() => {
                setActiveTabSection("all");
                document.getElementById("packages-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`shrink-0 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                activeTabSection === "all"
                  ? "bg-[#0A4F8A] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              📦 Preventive Packages ({packages.length})
            </button>

            <button
              onClick={() => {
                setActiveTabSection("tests");
                document.getElementById("tests-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`shrink-0 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                activeTabSection === "tests"
                  ? "bg-[#0A4F8A] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              🧪 Individual Tests ({tests.length})
            </button>

            <button
              onClick={() =>
                openWhatsApp(
                  "Hello, I need help selecting the right health test for my symptoms."
                )
              }
              className="shrink-0 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-2 text-xs font-bold flex items-center gap-1.5"
            >
              <FaWhatsapp size={14} className="text-[#78BE43]" />
              Need Help Choosing?
            </button>
          </div>
        </div>
      </div>

      {/* Section 1: Preventive Packages Section */}
      <section id="packages-section" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#78BE43]">
                Full Body &amp; Organ Screening
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-1">
                Preventive Health Packages
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 rounded-full px-3 py-1 self-start sm:self-auto">
              {packages.length} Recommended Packages
            </span>
          </div>

          {/* Mobile-First Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {packages.map((pkg) => (
              <PackageCard pkg={pkg} key={pkg.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Individual Diagnostic Tests Section */}
      <section id="tests-section" className="py-12 sm:py-16 bg-slate-50/60 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header & Mobile Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#78BE43]">
                <FiCheckCircle size={12} /> Diagnostic Lab Parameters
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-2">
                Individual Blood &amp; Urine Tests
              </h2>
            </div>

            {/* Mobile First Full-Width Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search test by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-slate-200/90 bg-white py-3 pl-10 pr-9 text-sm outline-none focus:border-[#0A4F8A] focus:ring-2 focus:ring-[#0A4F8A]/10 shadow-2xs"
              />
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={13} />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <FiX size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Horizontal Scrollable Touch Filter Chips */}
          {availableCategories.length > 1 && (
            <div className="mt-5 flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
              {availableCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#0A4F8A] text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-[#0A4F8A]/30"
                  }`}
                >
                  {cat === "all" ? <FiSliders size={11} /> : null}
                  {cat === "all" ? "All Tests" : cat}
                </button>
              ))}
            </div>
          )}

          {/* Mobile First Responsive Grid */}
          {filteredTests.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
              {filteredTests.map((test) => (
                <TestCardNoImage
                  key={test.slug}
                  test={test}
                  openWhatsApp={openWhatsApp}
                />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <p className="text-base font-bold text-slate-700">No diagnostic tests found</p>
              <p className="text-xs text-slate-500 mt-1">Try adjusting your search query or category filter.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-3 rounded-xl bg-[#0A4F8A] px-4 py-2 text-xs font-bold text-white"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Mobile Optimized CTA Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A4F8A] via-[#08345c] to-slate-900 p-6 sm:p-12 text-white shadow-xl">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold tracking-wider text-white backdrop-blur">
                ✓ Free Doorstep Sample Collection
              </span>

              <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Can&apos;t Visit The Lab?
                <span className="block text-emerald-400">Book Home Sample Collection</span>
              </h2>

              <p className="mt-3 text-xs sm:text-base text-white/80 leading-relaxed font-medium">
                Schedule sample collection at your preferred time slot and receive certified digital diagnostic reports directly on WhatsApp &amp; Email.
              </p>

              {/* Mobile CTA Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() =>
                    openWhatsApp(
                      "Hello, I would like to book a Home Sample Collection. Please share the available slots."
                    )
                  }
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#78BE43] text-white font-bold text-sm hover:bg-[#68a73a] transition cursor-pointer shadow-md"
                >
                  <FaWhatsapp size={18} />
                  <span>Book Home Collection</span>
                </button>

                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-white/30 text-white font-bold text-sm hover:bg-white/10 transition"
                >
                  <FiPhoneCall size={16} />
                  <span>Call Support Team</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}