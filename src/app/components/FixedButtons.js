"use client";

import { memo, useCallback } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { SITE_CONFIG } from "../siteConfig";
import trackEvent from "../utils/Analytics";

function FloatingButtons() {
  const { whatsapp, phone } = SITE_CONFIG;

  const handleWhatsAppClick = useCallback(() => {
    trackEvent("whatsapp_click", {
      page_location: window.location.href,
    });
  }, []);

  const handlePhoneClick = useCallback(() => {
    trackEvent("phone_click");
  }, []);

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-3"
      aria-label="Quick contact options"
    >
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onClick={handleWhatsAppClick}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        <FaWhatsapp size={26} aria-hidden="true" />
      </a>

      {/* Call */}
      <a
        href={`tel:${phone}`}
        aria-label="Call us"
        onClick={handlePhoneClick}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      >
        <FaPhoneAlt size={22} aria-hidden="true" />
      </a>
    </div>
  );
}

export default memo(FloatingButtons);