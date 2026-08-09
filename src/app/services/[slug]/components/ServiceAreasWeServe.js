import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import TrackingLink from "@/app/components/TrackingLink";
import { FiMapPin, FiSearch, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const DEFAULT_CITIES = [
  { name: "Panchkula", area: "Sector 21, 20 & Nearby Sectors" },
  { name: "Chandigarh", area: "City & Nearby Sectors" },
  { name: "Mohali", area: "Phase 1 to 11 & Nearby Regions" },
  { name: "Zirakpur", area: "Town & VIP Road Area" },
  { name: "Kalka", area: "Town & Nearby Belts" },
  { name: "Pinjore", area: "Local & Surrounding Area" },
];

export default function ServiceAreasWeServe({ service }) {
  const areasData = service?.serviceAreas || {};
  const heading = areasData.heading || "Areas We Serve";
  const description =
    areasData.description ||
    `Home sample collection & diagnostic services for ${service?.title || "this service"} available across Panchkula and nearby locations.`;
  const cities = areasData.cities && areasData.cities.length > 0 ? areasData.cities : DEFAULT_CITIES;

  return (
    <section className="bg-slate-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0A4F8A]">
            <FiMapPin className="text-[#0A4F8A]" />
            Service Locations
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {heading}
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            {description}
          </p>
        </div>

        {/* Cities Grid */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-3.5">
          {cities.map((cityObj) => {
            const cityName = typeof cityObj === "string" ? cityObj : cityObj.name;
            const areaDesc = typeof cityObj === "string" ? "Doorstep Collection" : cityObj.area;
            const isPanchkula = cityName.toLowerCase().includes("panchkula");

            if (isPanchkula) {
              return (
                <TrackingLink
                  key={cityName}
                  href="/locations/blood-test-in-panchkula"
                  tracking="service-area-city-panchkula"
                  className="group flex flex-col justify-between rounded-xl border border-blue-300 bg-blue-50/50 p-3 text-left shadow-2xs transition hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-100/50 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0A4F8A] text-white transition-colors">
                        <FiMapPin className="text-xs" />
                      </span>
                      <span className="rounded-full bg-blue-200 px-1.5 py-0.5 text-[10px] font-bold text-[#0A4F8A]">
                        Main Hub
                      </span>
                    </div>

                    <h3 className="mt-2.5 text-xs font-bold text-slate-900 sm:text-sm group-hover:text-[#0A4F8A]">
                      {cityName}
                    </h3>

                    <p className="mt-0.5 text-[11px] text-slate-600 leading-4">
                      {areaDesc}
                    </p>
                  </div>

                  <div className="mt-2.5 flex items-center gap-1 text-[11px] font-bold text-[#0A4F8A]">
                    <span>View Location Page</span>
                    <FiArrowRight className="text-[10px] transition-transform group-hover:translate-x-0.5" />
                  </div>
                </TrackingLink>
              );
            }

            return (
              <TrackedWhatsappLink
                key={cityName}
                text={`Hi, I want to book ${service?.title || "service"} in ${cityName}. Please share availability and details.`}
                location={`service-area-city-${cityName.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-3 text-left shadow-2xs transition hover:-translate-y-0.5 hover:border-green-400 hover:bg-green-50/50 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-[#0A4F8A] transition-colors group-hover:bg-green-600 group-hover:text-white">
                      <FiMapPin className="text-xs" />
                    </span>
                    <FaWhatsapp className="text-xs text-slate-300 transition-colors group-hover:text-green-600" />
                  </div>

                  <h3 className="mt-2.5 text-xs font-bold text-slate-900 sm:text-sm group-hover:text-green-800">
                    {cityName}
                  </h3>

                  <p className="mt-0.5 text-[11px] text-slate-500 leading-4">
                    {areaDesc}
                  </p>
                </div>

                <div className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-[#0A4F8A] group-hover:text-green-700">
                  <span>Book via WhatsApp</span>
                  <FiArrowRight className="text-[10px] transition-transform group-hover:translate-x-0.5" />
                </div>
              </TrackedWhatsappLink>
            );
          })}
        </div>

        {/* CTAs Row */}
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {/* Main Book Service WhatsApp CTA */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#78BE43] via-green-600 to-teal-700 p-5 text-white shadow-lg sm:p-7">
            <div className="relative flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur">
                  <FaWhatsapp /> Quick Booking
                </span>
                <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                  Book {service?.title} Immediately
                </h3>
                <p className="mt-1 text-xs text-green-100 leading-5">
                  Connect with our team directly on WhatsApp for instant confirmation & slot availability.
                </p>
              </div>

              <TrackedWhatsappLink
                text={`Hi, I want to book ${service?.title}. Please share details.`}
                location={`service-area-book-whatsapp-${service?.slug}`}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-green-800 shadow-md transition hover:bg-emerald-50 hover:shadow-lg sm:text-sm"
              >
                <FaWhatsapp className="text-base text-green-600" />
                Book Now
              </TrackedWhatsappLink>
            </div>
          </div>

          {/* Location Inquiry */}
          <div className="relative overflow-hidden rounded-2xl border border-blue-200 bg-white p-5 shadow-xs sm:p-7">
            <div className="relative flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-[11px] font-semibold text-[#0A4F8A]">
                  <FiSearch /> Location Inquiry
                </span>
                <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
                  Don't see your sector or area?
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-5">
                  We frequently expand our doorstep sample collection areas across Panchkula. Ask us about your area!
                </p>
              </div>

              <TrackedWhatsappLink
                text={`Hi, I want to check if ${service?.title} is available in my area.`}
                location={`service-area-check-availability-${service?.slug}`}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#0A4F8A] bg-blue-50 px-5 py-3 text-xs font-bold text-[#0A4F8A] transition hover:bg-[#0A4F8A] hover:text-white sm:text-sm"
              >
                <FaWhatsapp className="text-base" />
                Check Availability
              </TrackedWhatsappLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
