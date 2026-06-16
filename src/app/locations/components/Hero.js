import React from 'react'
import { FaArrowRight,FaPhoneAlt } from 'react-icons/fa'
export default function Hero({location,openWhatsApp,SITE_CONFIG}) {
  return (
   <section className="pt-32 pb-14 ">
          <div className="max-w-6xl mx-auto px-5 mb-10">
  
            <span className="inline-flex px-4 py-2 rounded-full bg-green-50 text-[#78BE43] text-sm font-semibold">
              SERVICE LOCATION
            </span>
  
            <h1 className="mt-6 text-4xl md:text-6xl font-black text-slate-900">
              {location.title}
            </h1>
  
            <p className="mt-6 text-lg text-slate-600 max-w-3xl">
              {location.description}
            </p>
  
            <div className="mt-8 flex flex-wrap gap-4">
  
              <button
                onClick={() =>
                  openWhatsApp(
                    `Hello, I need pathology services in ${location.city}`
                  )
                }
                className="px-6 py-3 rounded-full bg-[#0A4F8A] text-white font-semibold flex items-center gap-2"
              >
                Book Test
                <FaArrowRight />
              </button>
  
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="px-6 py-3 rounded-full border border-[#0A4F8A] text-[#0A4F8A] font-semibold flex items-center gap-2"
              >
                <FaPhoneAlt />
                Call Now
              </a>
  
            </div>
  
          </div>
        </section>
  )
}
