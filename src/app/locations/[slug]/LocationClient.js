"use client";
import Link from "next/link";
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
import packagesData from "@/app/packagesData";

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
    <main className="bg-white min-h-screen ">

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
      <section className="">
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
<section className="pb-10">
  <div className="max-w-6xl mx-auto px-5">

    <h2 className="text-3xl font-black">
      Why Choose Shyam Labs in {location.city}
    </h2>

    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {[
        "NABL Associated Labs",
        "Home Sample Collection",
        "Fast Report Delivery",
        "Affordable Pricing",
        "Experienced Phlebotomists",
        "Online Report Access"
      ].map((item) => (
        <div key={item} className="p-6 border rounded-2xl">
          {item}
        </div>
      ))}
    </div>

  </div>
</section>
      {/* SERVICES */}
    <section className="pb-14">
  <div className="max-w-6xl mx-auto px-5">

    <div className="rounded-[36px] bg-gradient-to-br from-[#F8FBFF] to-white border border-blue-100 p-8 md:p-10 shadow-sm">

      <h2 className="text-3xl font-black text-slate-900">
        Available Services in {location.city}
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mt-8">

        {location.services.map((item) => (
          <Link
            key={item.slug}
            href={item.slug}
            className="
              group flex items-center gap-3
              bg-white border border-slate-100
              rounded-2xl px-5 py-4
              transition-all duration-300
              hover:border-[#0A4F8A]
              hover:shadow-md
              hover:-translate-y-1
              active:scale-[0.98]
              cursor-pointer
            "
          >
            <FaCheckCircle className="text-[#78BE43] group-hover:scale-110 transition" />

            <span className="text-slate-800 font-medium group-hover:text-[#0A4F8A] transition">
              {item.name}
            </span>

            {/* subtle arrow indicator */}
            <span className="ml-auto text-slate-300 group-hover:text-[#0A4F8A] transition">
              →
            </span>

          </Link>
        ))}

      </div>

    </div>

  </div>
</section>
{/* POPULAR TESTS */}
<section className="py-16 bg-slate-50">
  <div className="max-w-6xl mx-auto px-5">

    <h2 className="text-3xl font-black text-slate-900">
      Popular Tests in {location.city}
    </h2>

    <div className="flex flex-wrap gap-3 mt-8">

      {packagesData.slice(0,10)?.map((item) => (
        <Link
        href={item.slug}
          key={item.title}
          className="px-5 py-3 shadow rounded-full bg-white border text-blue-300 "
        >
          {item.title}
        </Link>
      ))}

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
{/* HOW IT WORKS */}
<section className="py-16 bg-slate-50">
  <div className="max-w-6xl mx-auto px-5">

    <h2 className="text-3xl font-black text-center">
      How Home Sample Collection Works
    </h2>

    <div className="grid md:grid-cols-5 gap-6 mt-10">

      {[
        "Book Your Test",
        "Schedule Visit",
        "Sample Collection",
        "Lab Processing",
        "Get Reports Online",
      ].map((step, index) => (
        <div
          key={step}
          className="bg-white border rounded-3xl p-6 text-center"
        >
          <div className="w-12 h-12 rounded-full bg-[#0A4F8A] text-white flex items-center justify-center mx-auto mb-4">
            {index + 1}
          </div>

          <p className="font-semibold">
            {step}
          </p>
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
      {/* TESTIMONIALS */}
<section className="py-16">
  <div className="max-w-6xl mx-auto px-5">

    <h2 className="text-3xl font-black text-center">
      What Patients Say
    </h2>

    <div className="grid md:grid-cols-3 gap-6 mt-10">

      {location.testimonials?.map((item) => (
        <div
          key={item.name}
          className="bg-white border rounded-3xl p-6"
        >
          <p className="text-slate-600 italic">
            "{item.review}"
          </p>

          <h4 className="mt-5 font-bold">
            {item.name}
          </h4>
        </div>
      ))}

    </div>

  </div>
</section>
{/* RELATED LOCATIONS */}
<section className="py-16 bg-slate-50">
  <div className="max-w-6xl mx-auto px-5">

    <h2 className="text-3xl font-black">
      Explore Nearby Locations
    </h2>

    <div className="grid md:grid-cols-3 gap-6 mt-8">

      {location.relatedLocations?.map((item) => (
        <Link
          key={item.city}
          href={item.slug}
          className="border rounded-3xl p-6 bg-white hover:border-[#0A4F8A]"
        >
          <h3 className="font-bold">
            Blood Test in {item.city}
          </h3>

          <p className="mt-2 text-slate-600">
            Home sample collection available.
          </p>
        </Link>
      ))}

    </div>

  </div>
</section>
    </main>
  );
}