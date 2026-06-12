import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
export default function QuickSummary({blog}) {
  return blog.quickSummary?.length > 0 && (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-5">

        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8">

          <h2 className="text-2xl font-bold">
            Quick Summary
          </h2>

          <ul className="mt-6 space-y-3">

            {blog.quickSummary.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3"
              >
                <FaCheckCircle className="text-[#78BE43] mt-1" />
                <span>{item}</span>
              </li>
            ))}

          </ul>

        </div>

      </div>
    </section>
  )
}
