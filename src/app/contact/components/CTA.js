"use client"
import { SITE_CONFIG } from '@/app/siteConfig'
import trackEvent from '@/app/utils/Analytics'
import React from 'react'
const {phone}=SITE_CONFIG
export default function CTA() {
  return (
    <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="rounded-[40px] bg-[#0A4F8A] p-8 md:p-14 text-center text-white">
            <h2 className="text-4xl md:text-6xl font-black">
              Your Health Can't Wait.
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-white/80">
              Schedule your diagnostic test today and
              receive accurate reports from trusted
              healthcare professionals.
            </p>

            <button onClick={()=>{
                trackEvent(`phone_click`);
              window.location.href=`tel:${phone}`}} className="mt-8 px-8 cursor-pointer h-14 rounded-full bg-white text-[#0A4F8A] font-semibold">
              Call Now
            </button>
          </div>
        </div>
      </section>
  )
}
