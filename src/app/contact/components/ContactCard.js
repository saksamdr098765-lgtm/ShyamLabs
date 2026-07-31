import { SITE_CONFIG } from '@/app/siteConfig';
import React from 'react'
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

 const { phone, email, address, } = SITE_CONFIG;
const cards=[
              {
                icon: FaPhoneAlt,
                title: "Call Us",
                value: phone,
              },
              {
                icon: FaEnvelope,
                title: "Email",
                value: email,
              },
              {
                icon: FaMapMarkerAlt,
                title: "Location",
                value: address,
              },
              {
                icon: FaClock,
                title: "Working Hours",
                value: "8AM - 8PM",
              },
            ]
export default function ContactCard() {
  return (
     <section className="pb-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <div className="h-14 w-14 rounded-2xl bg-[#0A4F8A]/10 flex items-center justify-center">
                    <Icon className="text-[#0A4F8A]" />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}
