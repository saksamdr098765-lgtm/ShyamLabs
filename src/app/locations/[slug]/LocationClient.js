"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/app/siteConfig";
import trackEvent from "@/app/utils/Analytics";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaQuestionCircle,
} from "react-icons/fa";

export default function LocationDetailPage({ location }) {
  const openWhatsApp = (message) => {
    trackEvent("whatsApp_click", {
      page_location: window.location.href,
    });

    window.open(
      `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <main className="bg-white min-h-screen py-24">

      {/* GRID BG */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0A4F8A 1px, transparent 1px), linear-gradient(90deg, #0A4F8A 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* HERO */}
      <section className="pt-32 pb-14 ">
        <div className="max-w-6xl mx-auto px-5 mb-10">

          <span className="inline-flex px-4 py-2 rounded-full bg-green-50 text-[#78BE43] text-sm font-semibold">
            SERVICE LOCATION
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-black text-slate-900">
            {location.title}
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl">
            {location.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button
              onClick={() =>
                openWhatsApp(
                  `Hello, I need pathology services in ${location.city}`
                )
              }
              className="px-6 py-3 rounded-full bg-[#0A4F8A] text-white font-semibold flex items-center gap-2"
            >
              Book Test
              <FaArrowRight />
            </button>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="px-6 py-3 rounded-full border border-[#0A4F8A] text-[#0A4F8A] font-semibold flex items-center gap-2"
            >
              <FaPhoneAlt />
              Call Now
            </a>

          </div>

        </div>
      </section>

      {/* IMAGE */}
      <section className="mt-10">
        <div className="max-w-6xl mx-auto px-5">

          <div className="relative h-[250px] md:h-[550px] rounded-3xl overflow-hidden shadow-xl">

            <Image
              src={location.image}
              alt={location.city}
              fill
              className="object-cover"
            />

          </div>

        </div>
      </section>

      {/* FACTS */}
      <section className="py-14 ">
        <div className="max-w-6xl mx-auto px-5">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

            {location.facts?.map((fact) => (
              <div
                key={fact.label}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <p className="text-sm text-slate-500">
                  {fact.label}
                </p>

                <h3 className="mt-2 text-xl font-black text-[#0A4F8A]">
                  {fact.value}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-14">
        <div className="max-w-6xl mx-auto px-5">

          <div className="rounded-[36px] bg-gradient-to-br from-[#F8FBFF] to-white border border-blue-100 p-8 md:p-10">

            <h2 className="text-3xl font-black text-slate-900">
              Available Services in {location.city}
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mt-8">

              {location.services?.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-5 py-4"
                >
                  <FaCheckCircle className="text-[#78BE43]" />
                  <span>{service}</span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5">

          <div className="space-y-12">

            {location.sections?.map((section, index) => (
              <article
                key={index}
                className="relative bg-white p-8 rounded-3xl border border-slate-100"
              >
                <div className="absolute left-0 top-0 h-full w-1.5 bg-[#78BE43]" />

                <h2 className="text-3xl font-black text-slate-900">
                  {section.title}
                </h2>

                <div className="mt-6 space-y-5">

                  {section.content.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-slate-700 leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* AREAS COVERED */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5">

          <h2 className="text-3xl font-black text-slate-900">
            Areas We Serve
          </h2>

          <div className="flex flex-wrap gap-3 mt-8">

            {location.nearbyAreas?.map((area) => (
              <div
                key={area}
                className="px-5 py-3 rounded-full bg-slate-100 flex items-center gap-2"
              >
                <FaMapMarkerAlt className="text-[#0A4F8A]" />
                {area}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5">

          <h2 className="text-3xl font-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-4">

            {location.faqs?.map((faq, index) => (
              <details
                key={index}
                className="rounded-3xl border border-slate-100 bg-white p-6"
              >
                <summary className="flex gap-3 font-semibold cursor-pointer">
                  <FaQuestionCircle className="text-[#0A4F8A] shrink-0 mt-1" />
                  {faq.question}
                </summary>

                <p className="mt-4 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}