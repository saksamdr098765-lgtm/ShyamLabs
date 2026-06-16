import React from 'react'

export default function WhyChooseUs({location}) {
  return location.whyChooseUs?.length > 0 && (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-3xl font-bold mb-10">
        Why Choose Shyam Budget Friendly Labs?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {location.whyChooseUs.map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-2xl bg-slate-50"
          >
            <h3 className="font-semibold text-lg mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
}
