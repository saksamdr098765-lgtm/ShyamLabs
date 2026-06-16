import React from 'react'

export default function CityDescription({location}) {
  return location.cityDescription && (
  <section className="py-16">
    <div className="max-w-6xl mx-auto px-5">
      <div className="bg-gradient-to-br from-[#F8FBFF] to-white border border-blue-100 rounded-[32px] p-8 md:p-12">
        
        <h2 className="text-3xl md:text-4xl font-black text-slate-900">
          Blood Test & Pathology Services in {location.city}
        </h2>

        <div className="mt-8 space-y-6">
          {location.cityDescription
            .split("\n\n")
            .map((paragraph, index) => (
              <p
                key={index}
                className="text-slate-700 leading-8 text-lg"
              >
                {paragraph}
              </p>
            ))}
        </div>

      </div>
    </div>
  </section>
)
}
