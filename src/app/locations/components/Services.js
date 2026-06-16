import React from 'react'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
export default function Services({location}) {
  return (
    <section className="pb-14">
  <div className="max-w-6xl mx-auto px-5">

    <div className="rounded-[36px] bg-gradient-to-br from-[#F8FBFF] to-white border border-blue-100 p-8 md:p-10 shadow-sm">

      <h2 className="text-3xl font-black text-slate-900">
        Available Services in {location.city}
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mt-8">

        {location.services.map((item) => (
          <Link
            key={item.slug}
            href={item.slug}
            className="
              group flex items-center gap-3
              bg-white border border-slate-100
              rounded-2xl px-5 py-4
              transition-all duration-300
              hover:border-[#0A4F8A]
              hover:shadow-md
              hover:-translate-y-1
              active:scale-[0.98]
              cursor-pointer
            "
          >
            <FaCheckCircle className="text-[#78BE43] group-hover:scale-110 transition" />

            <span className="text-slate-800 font-medium group-hover:text-[#0A4F8A] transition">
              {item.name}
            </span>

            {/* subtle arrow indicator */}
            <span className="ml-auto text-slate-300 group-hover:text-[#0A4F8A] transition">
              →
            </span>

          </Link>
        ))}

      </div>

    </div>

  </div>
</section>
  )
}
