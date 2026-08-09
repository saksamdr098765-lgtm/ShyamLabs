import Image from "next/image";
import TrackingLink from "@/app/components/TrackingLink";
import TrackedPhoneLink from "@/app/components/TrackedPhoneLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import SITE_CONFIG from "@/app/siteConfig";
import {
  FiArrowRight,
  FiClock,
  FiHome,
  FiCheckCircle,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero({ hero, slug, testName }) {
  if (!hero) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <div>
          {hero.badge && (
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0A4F8A]">
              {hero.badge}
            </span>
          )}

          <h1 className="mt-4 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
            {hero.title}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
            {hero.description}
          </p>

          {/* Highlights */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <FiClock className="text-[#0A4F8A]" size={20} />
              <div>
                <p className="text-xs text-slate-500">Report Time</p>
                <p className="font-semibold">{hero.reportTime}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <FiHome className="text-[#0A4F8A]" size={20} />
              <div>
                <p className="text-xs text-slate-500">Home Collection</p>
                <p className="font-semibold">{hero.homeCollection}</p>
              </div>
            </div>
          </div>

          {/* Trust */}
          <div className="mt-6 space-y-2.5">
            {(hero.trustPoints || []).map((item) => (
              <div key={item} className="flex items-center gap-3">
                <FiCheckCircle className="text-[#78BE43]" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <TrackedWhatsappLink
              text={`Hi, I want to book the "${testName || hero.title}" test.`}
              location={`test-hero-whatsapp-${slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-green-700"
            >
              <FaWhatsapp className="text-lg" />
              Book via WhatsApp
            </TrackedWhatsappLink>

            <TrackedPhoneLink
              phone={SITE_CONFIG.phone}
              location="test-hero-call-now"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-[#0A4F8A] hover:text-[#0A4F8A]"
            >
              <FiPhone />
              Call Lab
            </TrackedPhoneLink>
          </div>
        </div>

        {/* Right */}
        {hero.image && (
          <div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-200">
              <Image
                src={hero.image}
                alt={hero.imageAlt || hero.title}
                width={700}
                height={700}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
