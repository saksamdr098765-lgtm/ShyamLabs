import React from 'react'

export default function WhoShouldGetThisTest({location}) {
  return  location.whoShouldGetTested?.length > 0 && (
  <section className="py-16">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-3xl font-bold mb-8">
        Who Should Consider Regular Blood Testing?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {location.whoShouldGetTested.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 bg-white"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
)
}
