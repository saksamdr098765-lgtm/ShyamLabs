import { SITE_CONFIG } from '@/app/siteConfig'
import React from 'react'
const {map}=SITE_CONFIG
export default function Map() {
  return (
    <div className="rounded-[32px] overflow-hidden border border-slate-100 shadow-sm min-h-[500px]">
              <iframe
               src={map}
  title="Shyam Budget Friendly Labs Location"
  width="100%"
  height="100%"
  loading="lazy"
  className="min-h-[500px]"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
              />
            </div>
  )
}
