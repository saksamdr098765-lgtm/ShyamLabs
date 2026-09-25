"use client";

import { SITE_CONFIG } from '@/app/siteConfig';
import React from 'react';
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import trackEvent from '@/app/utils/Analytics';

const { phone, email, address, whatsapp } = SITE_CONFIG;

export default function ContactCard() {
  const openWhatsApp = () => {
    trackEvent?.("whatsApp_click", {
      page_location: typeof window !== "undefined" ? window.location.href : "",
    });
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
      "Hello, I want to inquire about a blood test / health package."
    )}`;
    window.open(url, "_blank");
  };

  const cards = [
    {
      icon: FaPhoneAlt,
      title: "Call Us Direct",
      value: phone,
      action: () => {
        trackEvent?.("phone_click");
        window.location.href = `tel:${phone}`;
      },
      actionText: "Tap to Call",
      highlight: true,
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp Booking",
      value: "Chat with Support",
      action: openWhatsApp,
      actionText: "Instant WhatsApp",
      highlight: true,
    },
    {
      icon: FaEnvelope,
      title: "Email Support",
      value: email,
      action: () => {
        window.location.href = `mailto:${email}`;
      },
      actionText: "Send Email",
      highlight: false,
    },
    {
      icon: FaClock,
      title: "Working Hours",
      value: "Mon-Sat: 7:00 AM - 8:00 PM\nSun: 7:00 AM - 2:00 PM",
      action: null,
      actionText: null,
      highlight: false,
    },
  ];

  return (
    <section className="pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition-all duration-300 hover:border-[#0A4F8A]/30 hover:shadow-md"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A4F8A]/10 text-[#0A4F8A] transition-colors group-hover:bg-[#0A4F8A] group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-4 font-bold text-slate-900 text-base">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-600 font-medium whitespace-pre-line leading-relaxed">
                    {item.value}
                  </p>
                </div>

                {item.action && (
                  <button
                    onClick={item.action}
                    className="mt-4 w-full rounded-xl bg-slate-50 border border-slate-200/60 py-2 text-xs font-bold text-[#0A4F8A] hover:bg-[#0A4F8A] hover:text-white transition-all cursor-pointer"
                  >
                    {item.actionText}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
