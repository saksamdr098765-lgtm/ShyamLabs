"use client";

import { memo, useCallback } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { SITE_CONFIG } from "../siteConfig";
import trackEvent from "../utils/Analytics";

function FloatingButtons() {
  const { whatsapp, phone } = SITE_CONFIG;

  const handleWhatsAppClick = useCallback(() => {
    trackEvent?.("whatsapp_click", {
      page_location: typeof window !== "undefined" ? window.location.href : "",
    });
  }, []);

  const handlePhoneClick = useCallback(() => {
    trackEvent?.("phone_click");
  }, []);

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 sm:bottom-6 sm:right-6"
      aria-label="Quick contact options"
    >
      {/* WhatsApp Floating Action */}
      <a
        href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hello, I would like to book a blood test / health package.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onClick={handleWhatsAppClick}
        className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#78BE43] text-white shadow-lg shadow-green-600/30 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
      >
        <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
        <span className="absolute right-full mr-3 hidden rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-bold text-white shadow-md sm:group-hover:block whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>

      {/* Call Floating Action */}
      <a
        href={`tel:${phone}`}
        aria-label="Call lab doctor"
        onClick={handlePhoneClick}
        className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#0A4F8A] text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
      >
        <FaPhoneAlt className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        <span className="absolute right-full mr-3 hidden rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-bold text-white shadow-md sm:group-hover:block whitespace-nowrap">
          Call Lab Doctor
        </span>
      </a>
    </div>
  );
}

export default memo(FloatingButtons);