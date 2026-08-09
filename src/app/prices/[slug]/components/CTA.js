import TrackingLink from "@/app/components/TrackingLink";
import TrackedPhoneLink from "@/app/components/TrackedPhoneLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import SITE_CONFIG from "@/app/siteConfig";
import { FiArrowRight, FiPhone, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function CTA({ cta, slug, testTitle }) {
  if (!cta) return null;

  const name = testTitle || cta.testName || "Blood Test";
  const offerPrice = cta.offerPrice || 399;
  const actualPrice = cta.actualPrice;

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A4F8A] via-blue-900 to-slate-900 p-5 text-white shadow-xl sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            {/* Left Content */}
            <div>
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                Doorstep Collection Available
              </span>

              <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
                {cta.title || `Book Your ${name} Today`}
              </h2>

              <p className="mt-2 text-xs leading-5 text-blue-100 sm:text-base sm:leading-7">
                {cta.description || `Fast, reliable diagnostic testing with same-day reports & doorstep sample pickup.`}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                {(cta.highlights || [
                  "Home Sample Collection",
                  "Digital Reports",
                  "Quality Standards",
                  "Doctor Support",
                ]).map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-white">
                    <FiCheckCircle className="text-[#78BE43] text-xs shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Booking Card */}
            <div className="rounded-xl bg-white p-4 text-slate-900 shadow-lg sm:rounded-2xl sm:p-6">
              <span className="text-[10px] font-bold uppercase tracking-wide text-[#0A4F8A]">
                Special Offer Rate
              </span>

              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-3xl font-black text-[#0A4F8A] sm:text-4xl">
                  ₹{offerPrice}
                </span>
                {actualPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    ₹{actualPrice}
                  </span>
                )}
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Home collection with digital report delivery.
              </p>

              {/* Action Buttons */}
              <div className="mt-4 flex flex-col gap-2">
                <TrackedWhatsappLink
                  text={`Hi, I want to book the "${name}" at ₹${offerPrice}. Please confirm collection schedule.`}
                  location={`price-cta-whatsapp-book-${slug}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-xs font-bold text-white transition hover:bg-green-700 sm:text-sm"
                >
                  <FaWhatsapp className="text-base" />
                  Book Now via WhatsApp
                </TrackedWhatsappLink>

                <TrackedPhoneLink
                  phone={SITE_CONFIG.phone}
                  location={`price-cta-phone-call-${slug}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-[#0A4F8A] hover:text-[#0A4F8A] sm:text-sm"
                >
                  <FiPhone className="text-xs" />
                  Call Lab Now
                </TrackedPhoneLink>
              </div>

              {/* Links */}
              <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-between text-xs font-semibold text-[#0A4F8A]">
                <TrackingLink
                  href="/packages"
                  tracking={`prices-cta-packages-link-${slug}`}
                  className="hover:underline flex items-center gap-1"
                >
                  View Health Packages
                  <FiArrowRight className="text-[10px]" />
                </TrackingLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
