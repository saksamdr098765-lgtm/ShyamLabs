import React from 'react'

export default function PopularSearch({location}) {
  return location.popularSearches?.length > 0 && (
  <section className="py-16">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-3xl font-bold mb-8">
        Popular Searches in {location.city}
      </h2>
      <div className="flex flex-wrap gap-3">
        {location.popularSearches.map((search, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full bg-blue-50 border text-sm"
          >
            {search}
          </span>
        ))}
      </div>
    </div>
  </section>
)
}
