import React from 'react'

export default function CityOverview({location}) {
  return location.cityOverview && (
  <section className="py-16 bg-slate-50">
    <div className="max-w-6xl mx-auto px-5">

      <div className="bg-white border border-slate-100 rounded-[32px] p-8 md:p-12">

        <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-[#0A4F8A] text-sm font-semibold">
          CITY OVERVIEW
        </span>

        <h2 className="mt-5 text-3xl md:text-4xl font-black text-slate-900">
          {location.cityOverview.title}
        </h2>

        <div className="mt-8 space-y-6">
          {location.cityOverview.content
            .split("\n\n")
            .map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-8 text-slate-700"
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
