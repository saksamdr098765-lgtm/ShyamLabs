"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaArrowRight,
  FaHeartbeat,
  FaTint,
  FaBrain,
  FaBolt,
} from "react-icons/fa";

const packages = [
  {
    title: "Full Body Checkup",
    price: "₹1,999",
    tests: "75+ Parameters",
  },
  {
    title: "Heart Health Package",
    price: "₹2,499",
    tests: "35+ Parameters",
  },
  {
    title: "Diabetes Care",
    price: "₹1,499",
    tests: "20+ Parameters",
  },
  {
    title: "Thyroid Profile",
    price: "₹999",
    tests: "10+ Parameters",
  },
];

const categories = [
  {
    title: "Blood Tests",
    icon: FaTint,
    count: "120+ Tests",
  },
  {
    title: "Heart Health",
    icon: FaHeartbeat,
    count: "25+ Tests",
  },
  {
    title: "Diabetes",
    icon: FaBolt,
    count: "15+ Tests",
  },
  {
    title: "Thyroid",
    icon: FaBrain,
    count: "10+ Tests",
  },
];

const tests = [
  "CBC (Complete Blood Count)",
  "Blood Sugar Fasting",
  "HbA1c",
  "Lipid Profile",
  "Liver Function Test",
  "Kidney Function Test",
  "Vitamin D",
  "Vitamin B12",
  "TSH",
  "T3",
  "T4",
  "CRP",
];

export default function PackagesPage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
          linear-gradient(#0A4F8A 1px, transparent 1px),
          linear-gradient(90deg, #0A4F8A 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero */}
      <section className="relative pt-28 pb-20">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[500px] bg-gradient-to-r from-green-100/50 to-blue-100/50 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5">
          <span className="inline-flex px-4 py-2 rounded-full border border-green-100 bg-green-50 text-[#78BE43] text-sm font-semibold">
            TESTS & PACKAGES
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black text-slate-900 leading-[0.95]">
            Find The Right
            <span className="block text-[#0A4F8A]">
              Health Test.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Explore preventive health packages and individual
            diagnostic tests designed for every stage of life.
          </p>

          {/* Search */}
          <div className="mt-10 max-w-xl relative">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search tests or packages..."
              className="w-full h-16 pl-14 pr-5 rounded-2xl border border-slate-200 outline-none focus:border-[#0A4F8A]"
            />
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-black text-slate-900">
            Popular Packages
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {packages.map((pkg) => (
              <motion.div
                whileHover={{ y: -8 }}
                key={pkg.title}
                className="rounded-[32px] border border-slate-100 p-8 bg-white shadow-sm"
              >
                <span className="text-sm font-semibold text-[#78BE43]">
                  {pkg.tests}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {pkg.title}
                </h3>

                <div className="mt-6 text-4xl font-black text-[#0A4F8A]">
                  {pkg.price}
                </div>

                <button className="mt-8 flex items-center gap-3 font-semibold text-[#0A4F8A]">
                  View Package
                  <FaArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-black text-slate-900">
            Browse Categories
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[30px] bg-gradient-to-br from-white to-slate-50 border border-slate-100 p-8"
                >
                  <div className="h-14 w-14 rounded-2xl bg-[#0A4F8A]/10 flex items-center justify-center">
                    <Icon className="text-[#0A4F8A]" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-500">
                    {item.count}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tests */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-black text-slate-900">
            Popular Tests
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {tests.map((test) => (
              <div
                key={test}
                className="flex items-center justify-between rounded-2xl border border-slate-100 p-5 hover:border-[#0A4F8A]/30 transition"
              >
                <span className="font-medium text-slate-700">
                  {test}
                </span>

                <FaArrowRight className="text-[#0A4F8A]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Collection Banner */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="rounded-[40px] bg-gradient-to-r from-[#0A4F8A] to-[#08345c] p-10 md:p-16 text-white">
            <h2 className="text-4xl md:text-6xl font-black">
              Home Sample Collection
            </h2>

            <p className="mt-5 text-white/80 max-w-2xl">
              Can't visit our lab? Schedule a sample collection
              at your doorstep and receive reports online.
            </p>

            <button className="mt-8 px-8 py-4 rounded-full bg-white text-[#0A4F8A] font-semibold">
              Book Home Collection
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}