"use client"
import { SITE_CONFIG } from '@/app/siteConfig'
import React from 'react'
const {fullName,address,map}=SITE_CONFIG
export default function Location() {
  return (
  <div className="border-t border-slate-200 py-10">
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
    <div>
      <span className="text-sm font-semibold tracking-wider text-[#78BE43] uppercase">
        Visit Our Laboratory
      </span>

      <h3 className="mt-2 text-2xl md:text-3xl font-black text-slate-900">
        {fullName}
      </h3>

      <p className="mt-2 text-slate-600">
        {address}
      </p>
    </div>

    <a
      href="https://maps.app.goo.gl/Q2mWu4SqPah42o3R9"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0A4F8A] text-white font-medium hover:scale-105 transition"
    >
      Get Directions
    </a>
  </div>

  <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-lg">
    <iframe
      src={map}
      title="Shyam Labs Location"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>
  )
}
