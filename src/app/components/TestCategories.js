"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaHeartbeat,
  FaBrain,
 FaUserMd,
 FaBaby,
 FaWalking,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    title: "Gynecology",
    tests: "Women's Health",
    icon: FaUserMd,
  },
  {
    title: "Pediatrics",
    tests: "Child Care",
    icon: FaBaby,
  },
  {
    title: "Dermatology",
    tests: "Skin Specialist",
    icon: FaUserMd,
  },
  {
    title: "Orthopedics",
    tests: "Bones & Joints",
    icon: FaWalking,
  },
  {
    title: "Diabetology",
    tests: "Diabetes Care",
    icon: FaHeartbeat,
  },
  {
    title: "Psychiatry",
    tests: "Mental Wellness",
    icon: FaBrain,
  },
];

export default function TestCategories() {
  const router=useRouter()
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Grid */}
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-gradient-to-r from-green-100/40 to-blue-100/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
        <span className="inline-flex px-4 py-2 rounded-full border border-green-100 bg-green-50 text-[#78BE43] text-sm font-semibold">
  E-CLINIC SERVICES
</span>

<h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900">
  Consult
  <span className="block text-[#0A4F8A]">
    MBBS Specialists Online
  </span>
</h2>

<p className="mt-6 text-slate-600 text-lg">
  Access expert medical advice through secure video consultations
  at Shyam Budget Friendly Labs.
</p>
        </motion.div>

        {/* Main Layout */}
        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          {/* Featured Card */}
        <motion.div
  whileHover={{ y: -6 }}
  className="
    lg:col-span-6
    rounded-[36px]
    bg-gradient-to-br
    from-[#0A4F8A]
    to-[#08345c]
    overflow-hidden
    p-8
    md:p-10
    relative
    text-white
  "
>
  <div className="absolute right-0 top-0 text-[220px] opacity-10">
    👨‍⚕️
  </div>

  <span className="text-green-300 text-sm font-semibold tracking-wider">
    NEW SERVICE
  </span>

  <h3 className="mt-4 text-4xl md:text-6xl font-black leading-none">
    E-Clinic
    <br />
    Consultation
  </h3>

  <p className="mt-6 text-white/75 max-w-md">
    Connect with experienced MBBS specialists through
    online video consultation directly from Shyam Labs.
  </p>

  <div className="mt-10 flex gap-8">
    <div>
      <h4 className="text-5xl font-black">8+</h4>
      <p className="text-white/60">
        Specialities
      </p>
    </div>

    <div>
      <h4 className="text-5xl font-black">100%</h4>
      <p className="text-white/60">
        Online Support
      </p>
    </div>
  </div>

  <button onClick={()=>{router.push('/contact')}} className="mt-10 bg-white text-[#0A4F8A] px-6 py-4 rounded-2xl font-semibold flex items-center gap-3">
    Book Consultation
    <FaArrowRight />
  </button>
</motion.div>

          {/* Side Cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
            {categories.slice(1).map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className={`
                    rounded-[30px]
                    ${item.color}
                    border
                    ${item.border}
                    p-6
                    relative
                    overflow-hidden
                  `}
                >
                  <div className="absolute right-3 top-3 opacity-10">
                    <Icon size={120} />
                  </div>

                  <div
                    className={`
                      h-14 w-14 rounded-2xl bg-white
                      flex items-center justify-center
                      shadow-sm
                    `}
                  >
                    <Icon
                      className={`${item.accent} text-xl`}
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {item.tests}
                  </p>

               
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}