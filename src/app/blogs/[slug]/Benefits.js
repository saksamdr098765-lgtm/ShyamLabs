import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
export default function Benefits({blog}) {
  return  blog.benefits?.length > 0 && (
    <section className="">

      <div className="max-w-6xl mx-auto px-5">

        <h2 className="text-3xl font-black">
          Benefits of This Test
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          {blog.benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex gap-3 border rounded-2xl p-5"
            >
              <FaCheckCircle className="text-[#78BE43]" />

              <span>{benefit}</span>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
   
}
