import TrackingLink from "@/app/components/TrackingLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import { tests } from "@/app/data/tests";
import { FiClock, FiCheckCircle, FiArrowRight, FiActivity } from "react-icons/fi";
import { FaWhatsapp, FaFlask } from "react-icons/fa6";

export default function PopularTests({ location }) {
  const popularTests = (tests || []).filter((test) =>
    (location.popularTests?.test || []).includes(test.slug)
  );
  if (!popularTests.length) return null;

  return (
    <section className="bg-slate-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0A4F8A]">
            <FaFlask className="text-[#0A4F8A]" />
            Popular Tests
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {location.popularTests?.heading || `Popular Tests in ${location.city || "Panchkula"}`}
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            Book individual laboratory tests in {location.city || "Panchkula"} with doorstep sample collection & fast report turnaround.
          </p>
        </div>

        {/* Tests Grid */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-3.5">
          {popularTests.map((test, index) => {
            const whatsappText = `Hi, I want to book the "${test.name}" test in ${location.city || "Panchkula"}. Please share availability and pricing.`;

            return (
              <div
                key={test.name || index}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-3 text-left shadow-2xs transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-[#0A4F8A] group-hover:bg-[#0A4F8A] group-hover:text-white transition-colors">
                      <FiActivity className="text-xs" />
                    </span>

                    <span
                      className={`inline-block rounded-md px-1.5 py-0.5 text-[9px] font-semibold ${
                        test.fasting
                          ? "bg-amber-100 text-amber-800"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {test.fasting ? "Fasting Req." : "No Fasting"}
                    </span>
                  </div>

                  <h3 className="mt-2 text-xs font-bold text-slate-900 leading-4 sm:text-sm group-hover:text-[#0A4F8A]">
                    {test.name}
                  </h3>

                  {test.price ? (
                    <p className="mt-1 text-xs font-black text-[#0A4F8A]">
                      ₹{test.price}
                    </p>
                  ) : (
                    <p className="mt-1 text-[10px] text-slate-500">
                      Affordable Pricing
                    </p>
                  )}
                </div>

                {/* WhatsApp Booking CTA */}
                <div className="mt-3 border-t border-slate-100 pt-2">
                  <TrackedWhatsappLink
                    text={whatsappText}
                    location={`location-popular-test-whatsapp-${test.slug}-${location.city}`}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-green-50 px-2.5 py-1.5 text-[11px] font-bold text-green-700 transition hover:bg-green-600 hover:text-white"
                  >
                    <FaWhatsapp className="text-xs" />
                    <span>Book Test</span>
                  </TrackedWhatsappLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
