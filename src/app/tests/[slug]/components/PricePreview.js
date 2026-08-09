import TrackingLink from "@/app/components/TrackingLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import { FiArrowRight, FiTag } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function PricePreview({ pricePreview, slug }) {
  if (!pricePreview) return null;

  return (
    <section className="bg-blue-50 py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-white p-6 shadow-sm border border-blue-200 lg:flex-row lg:p-10">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 text-[#0A4F8A]">
              <FiTag />
              <span className="font-semibold text-xs">Test Price</span>
            </div>

            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">
              {pricePreview.title}
            </h2>

            <p className="mt-2 max-w-xl text-xs leading-5 text-slate-600 sm:text-sm">
              {pricePreview.description}
            </p>
          </div>

          {/* Right */}
          <div className="text-center lg:text-right">
            <p className="text-xs text-slate-500 font-medium">Starting From</p>

            <p className="mt-1 text-4xl font-extrabold text-[#0A4F8A] sm:text-5xl">
              ₹{pricePreview.price}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 justify-center lg:justify-end">
              <TrackedWhatsappLink
                text={`Hi, I want to book the test at ₹${pricePreview.price}.`}
                location={`test-price-preview-whatsapp-${slug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-green-700 sm:text-sm"
              >
                <FaWhatsapp className="text-base" />
                Book via WhatsApp
              </TrackedWhatsappLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
