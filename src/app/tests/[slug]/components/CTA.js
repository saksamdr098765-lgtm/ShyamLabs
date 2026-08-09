import TrackingLink from "@/app/components/TrackingLink";
import TrackedPhoneLink from "@/app/components/TrackedPhoneLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import SITE_CONFIG from "@/app/siteConfig";
import {
  FiArrowRight,
  FiPhone,
  FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function CTA({ cta, slug, testName }) {
  if (!cta) return null;

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A4F8A] via-blue-900 to-slate-900 p-6 text-white shadow-xl lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                Book Your Test Today
              </span>

              <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
                {cta.title}
              </h2>

              <p className="mt-3 text-xs leading-5 text-blue-100 sm:text-base">
                {cta.description}
              </p>

              <div className="mt-6 space-y-2">
                {(cta.highlights || []).map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <FiCheckCircle className="text-[#78BE43] text-xs shrink-0" />
                    <span className="text-xs text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="rounded-2xl bg-white p-5 text-slate-900 shadow-lg sm:p-7">
              <p className="text-xs font-bold uppercase tracking-wide text-[#0A4F8A]">
                Starting From
              </p>

              <p className="mt-2 text-4xl font-black text-[#0A4F8A]">
                ₹{cta.price}
              </p>

              <p className="mt-1 text-xs text-slate-600">
                {cta.priceText}
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <TrackedWhatsappLink
                  text={`Hi, I want to book the "${testName || cta.title}" test at ₹${cta.price}.`}
                  location={`test-cta-whatsapp-${slug}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-green-700 sm:text-sm"
                >
                  <FaWhatsapp className="text-base" />
                  Book via WhatsApp
                </TrackedWhatsappLink>

                <TrackedPhoneLink
                  phone={SITE_CONFIG.phone}
                  location="test-cta-phone-call"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-xs font-bold text-slate-700 transition hover:border-[#0A4F8A] hover:text-[#0A4F8A] sm:text-sm"
                >
                  <FiPhone className="text-xs" />
                  Call Now
                </TrackedPhoneLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
