import React from 'react'

export default function CTA({blog,openWhatsApp,trackEvent,SITE_CONFIG}) {
  return (
    <section className="pb-24">
    <div className="max-w-6xl mx-auto px-5">

   <div className="rounded-3xl bg-[#0A4F8A] p-6 sm:p-8 md:p-14 text-white text-center">

        <span className="text-[#78BE43] font-semibold">
          SHYAM PATHOLOGY LAB
        </span>

       <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-black">
          Need Expert Guidance?
        </h2>

        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Speak with our team about diagnostic tests,
          home sample collection and health packages.
        </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          <button
            onClick={() =>{
               
              openWhatsApp(
                `Hello, I need assistance regarding ${blog.title}`
              )
            }}
            className="px-8 py-4 hover:scale-105 cursor-pointer rounded-full bg-white text-[#0A4F8A] font-semibold"
          >
            WhatsApp Us
          </button>

          <a
            href={`tel:${SITE_CONFIG.phone}`}
            onClick={()=>{trackEvent("phone_click")}}
            className="px-8 py-4 hover:scale-105 cursor-pointer rounded-full border border-white/20"
          >
            Call Now
          </a>

        </div>

      </div>
   

    </div>
  </section>
  )
}
