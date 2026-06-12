import React from 'react'
import { FaArrowRight ,FaPhoneAlt} from 'react-icons/fa'

export default function Hero({blog,openWhatsApp,trackEvent,SITE_CONFIG}) {
  return (
    <section className="pt-6 pb-14 relative">
      <div className="max-w-6xl mx-auto px-5">
  
        <span className="inline-flex px-4  py-2  rounded-full bg-green-50 text-[#78BE43] text-sm font-semibold">
          HEALTH AWARENESS ARTICLE
        </span>
  
       <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight break-words">
          {blog.title}
        </h1>
  
       <p className="mt-6 text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
          {blog.description}
        </p>
  
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <span> • {blog.date}</span>
          
          <span>• {blog.author}</span>
        
          <span>• {blog.readTime}</span>
        </div>
  
        <div className="mt-8 flex flex-wrap gap-4">
  
          <button
            onClick={() =>{
              openWhatsApp(
                `Hello, I read "${blog.title}" and would like guidance.`
              )
            }}
  
  className="w-full sm:w-auto hover:scale-105  px-6 py-3 cursor-pointer rounded-full bg-[#0A4F8A] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#083a66] transition"
         >
            Ask An Expert
            <FaArrowRight />
          </button>
  
          <a
            href={`tel:${SITE_CONFIG.phone}`}
              onClick={()=>{trackEvent("phone_click")}}
  className="w-full sm:w-auto px-6 py-3 hover:scale-105 cursor-pointer rounded-full border border-[#0A4F8A] text-[#0A4F8A] font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 transition"        >
            <FaPhoneAlt />
            Call Laboratory
          </a>
  
        </div>
  
      </div>
    </section>
  )
}
