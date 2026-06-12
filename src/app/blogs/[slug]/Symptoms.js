import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
export default function Symptoms({blog}) {
  return (
    <section className="pb-14 mt-10">
    <div className="max-w-6xl mx-auto px-5">

      <div className="rounded-[36px] bg-gradient-to-br from-[#F8FBFF] to-white border border-blue-100 p-8 md:p-10">

        <h2 className="text-3xl font-black text-slate-900">
          When Should You Consider This Test?
        </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">

          {blog.symptoms?.map((symptom) => (
            <div
              key={symptom}
              className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-5 py-4"
            >
              <FaCheckCircle className="text-[#78BE43]" />
              <span>{symptom}</span>
            </div>
          ))}

        </div>

      </div>

    </div>
  </section>
  )
}
