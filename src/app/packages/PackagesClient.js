"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaSearch,
  FaArrowRight,
  FaHeartbeat,
  FaTint,
  FaBrain,
  FaBolt,
} from "react-icons/fa";

import packagesData from "../packagesData";
import { SITE_CONFIG } from "../siteConfig";



export const tests = [
  {
    name: "Thyroid Profile",
    price: "₹360",
   
    slug: "thyroid-profile",
  },
  {
    name: "Widal",
    price: "₹200",
    slug: "widal-test",
  },
  {
    name: "CBC",
    price: "₹200",
    slug: "cbc-test",
  },
  {
    name: "Malarial Parasite",
    price: "₹150",
    slug: "malarial-parasite",
  },
  {
    name: "LFT",
    price: "₹350",
    slug: "liver-function-test",
  },
  {
    name: "Urine Culture & Sensitivity",
    price: "₹350",
    slug: "urine-culture-sensitivity",
  },
  {
    name: "Routine Urine Analysis",
    price: "₹110",
    slug: "routine-urine-analysis",
  },
  {
    name: "ESR",
    price: "₹90",
    slug: "esr-test",
  },
  {
    name: "Vitamin D Total & B12 Combo",
    price: "₹1280",
    slug: "vitamin-d-b12-combo",
  },
  {
    name: "Fever Screen with Urine Analysis",
    price: "₹900",
    slug: "fever-screen-urine-analysis",
  },
  {
    name: "Heat Shield Basic",
    price: "₹960",
    slug: "heat-shield-basic",
  },
];
export default function PackagesClient() {
  const {whatsapp}=SITE_CONFIG
    const openWhatsApp = (message) => {
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  const router=useRouter()
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

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight">
            Find The Right
            <span className="block text-[#0A4F8A]">
              Health Test.
            </span>
          </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Explore preventive health packages and individual
            diagnostic tests designed for every stage of life.
          </p>

      
        </div>
      </section>

      {/* Packages */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl font-black text-slate-900">
            Popular Packages
          </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {packagesData.map((pkg) => (
              <motion.div
                whileHover={{ y: -8 }}
                key={pkg.title}
           className="rounded-[32px] border border-slate-100 p-5 md:p-8 bg-white shadow-sm h-full flex flex-col"
              >
             

        <h3 className="mt-4 text-xl md:text-2xl font-bold text-slate-900 break-words min-h-[60px] ">
                  {pkg.title}
                </h3>

              <div className="mt-6 text-2xl sm:text-3xl md:text-4xl font-black text-[#0A4F8A] break-words">
                  {pkg.price}
                </div>

<button
  onClick={() => {
    router.push(`/package-detail-page/${pkg.slug}`);
  }}
  className="mt-auto pt-6 flex items-center gap-3 font-semibold text-[#0A4F8A] w-full"
>                  View Package
                  <FaArrowRight />
                </button>
              </motion.div>
            ))}
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
          key={test.slug}
          className="rounded-2xl border border-slate-100 p-5 hover:border-[#0A4F8A]/30 transition"
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="font-semibold text-slate-900">
                {test.name}
              </h3>

              {test.tests && (
                <p className="text-sm text-slate-500 mt-1">
                  {test.tests}
                </p>
              )}
            </div>

            <span className="text-xl font-bold text-[#0A4F8A]">
              {test.price}
            </span>
          </div>

          <button   onClick={() =>
                openWhatsApp(
                  `Hello, I want to book the *${test.name}* package (${test.price}). Please provide details and availability.`
                )
              }
              className="mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-[#0A4F8A] text-white hover:bg-[#083a66] transition">
            Book Test
            <FaArrowRight />
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

 
<section className="pb-24">
  <div className="max-w-7xl mx-auto px-5">
    <div className="rounded-[40px] bg-gradient-to-r from-[#0A4F8A] to-[#08345c] p-8 md:p-16 text-white">
      <h2 className="text-3xl md:text-6xl font-black">
        Home Sample Collection
      </h2>

      <p className="mt-5 text-white/80 max-w-2xl">
        Can't visit our lab? Schedule a sample collection at your
        doorstep and receive reports online.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        {/* Book Home Collection */}
        <button
          onClick={() =>
            openWhatsApp(
              "Hello, I would like to book a Home Sample Collection. Please share the available slots."
            )
          }
          className="px-8 py-4 rounded-full bg-white text-[#0A4F8A] font-semibold hover:bg-slate-100 transition"
        >
          Book Home Collection
        </button>

        {/* Ask For Particular Test */}
        <button
          onClick={() =>
          router.push('/contact')
          }
          className="px-8 py-4 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition"
        >
          Ask For a Test
        </button>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}