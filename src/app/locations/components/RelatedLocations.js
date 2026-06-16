import React from 'react'
import Link from 'next/link'
export default function RelatedLocations({location}) {
  return (
  <section className="py-16 bg-slate-50">
  <div className="max-w-6xl mx-auto px-5">

    <h2 className="text-3xl font-black">
      Explore Nearby Locations
    </h2>

    <div className="grid md:grid-cols-3 gap-6 mt-8">

      {location.relatedLocations?.map((item) => (
        <Link
          key={item.city}
          href={item.slug}
          className="border rounded-3xl p-6 bg-white hover:border-[#0A4F8A]"
        >
          <h3 className="font-bold">
            Blood Test in {item.city}
          </h3>

          <p className="mt-2 text-slate-600">
            Home sample collection available.
          </p>
        </Link>
      ))}

    </div>

  </div>
</section>
  )
}
