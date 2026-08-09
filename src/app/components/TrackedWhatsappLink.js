"use client";

import SITE_CONFIG from "@/app/siteConfig";

export default function TrackedWhatsappLink({
  phone,
  text,
  tracking = "whatsapp-click",
  children,
  className,
  onClick,
  ...props
}) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
