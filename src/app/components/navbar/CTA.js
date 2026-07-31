"use client"

import { SITE_CONFIG } from "@/app/siteConfig"
import trackEvent from "@/app/utils/Analytics"
import {  FaPhoneAlt } from "react-icons/fa"
import Link from "next/link"
const {phone}=SITE_CONFIG
export default function CTA() {
  return (

    
       <div className="hidden cursor-pointer lg:flex items-center gap-4">
          <a
            href={`tel:${phone}`}
            onClick={()=>{trackEvent(`phone_click`)}}
            className="flex items-center gap-2 text-slate-700 font-medium"
          >
            <FaPhoneAlt className="text-[#78BE43]" />
            Call Us
          </a>
        <Link
  href="/contact"
  className="bg-[#0A4F8A] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#083c69] transition"
>
  Book Test
</Link>
        </div>
     
  )
}
