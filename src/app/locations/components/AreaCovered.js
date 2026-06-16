import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
export default function AreaCovered({location}) {
  return (
   <section className="py-16">
        <div className="max-w-6xl mx-auto px-5">

          <h2 className="text-3xl font-black text-slate-900">
            Areas We Serve
          </h2>

          <div className="flex flex-wrap gap-3 mt-8">

            {location.nearbyAreas?.map((area) => (
              <div
                key={area}
                className="px-5 py-3 rounded-full bg-slate-100 flex items-center gap-2"
              >
                <FaMapMarkerAlt className="text-[#0A4F8A]" />
                {area}
              </div>
            ))}

          </div>

        </div>
      </section>
  )
}
