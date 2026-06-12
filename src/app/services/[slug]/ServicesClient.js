"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/app/siteConfig";
import trackEvent from "@/app/utils/Analytics";
import {
FaArrowRight,
FaPhoneAlt,
FaCheckCircle,
FaQuestionCircle,
} from "react-icons/fa";

export default function ServiceDetailPage({ service }) {
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

return ( <main className="bg-white min-h-screen py-24">
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
  <section className="pt-32 pb-14">
    <div className="max-w-6xl mx-auto px-5 mb-10">
      <span className="inline-flex px-4 py-2 rounded-full bg-green-50 text-[#78BE43] text-sm font-semibold">
        DIAGNOSTIC TEST
      </span>

      <h1 className="mt-6 text-4xl md:text-6xl font-black text-slate-900">
        {service.title}
      </h1>

      <p className="mt-3 text-xl text-[#0A4F8A] font-semibold">
        {service.subtitle}
      </p>

      <p className="mt-6 text-lg text-slate-600 max-w-3xl">
        {service.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={() =>
            openWhatsApp(
              `Hello, I want to book ${service.title}`
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
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  </section>

  {/* FACTS */}
  <section className="py-14">
    <div className="max-w-6xl mx-auto px-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {service.facts?.map((fact) => (
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

  {/* BENEFITS */}
  <section className="pb-14">
    <div className="max-w-6xl mx-auto px-5">
      <div className="rounded-[36px] bg-gradient-to-br from-[#F8FBFF] to-white border border-blue-100 p-8 md:p-10">
        <h2 className="text-3xl font-black text-slate-900">
          Benefits of {service.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {service.benefits?.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-5 py-4"
            >
              <FaCheckCircle className="text-[#78BE43]" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* PARAMETERS */}
  <section className="py-16">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-3xl font-black text-slate-900">
        Parameters Included
      </h2>

      <div className="flex flex-wrap gap-3 mt-8">
        {service.parameters?.map((parameter) => (
          <div
            key={parameter}
            className="px-5 py-3 rounded-full bg-slate-100 flex items-center gap-2"
          >
            <FaCheckCircle className="text-[#0A4F8A]" />
            {parameter}
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CONTENT */}
  <section className="py-16 bg-slate-50">
    <div className="max-w-6xl mx-auto px-5">
      <div className="space-y-12">
        {service.sections?.map((section, index) => (
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

  {/* PREPARATION */}
  <section className="py-16">
    <div className="max-w-6xl mx-auto px-5">
      <div className="rounded-[36px] bg-white border border-slate-100 p-8 md:p-10">
        <h2 className="text-3xl font-black text-slate-900">
          Preparation Instructions
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {service.preparation?.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-slate-50 rounded-2xl px-5 py-4"
            >
              <FaCheckCircle className="text-[#78BE43]" />
              {item}
            </div>
          ))}
        </div>
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
        {service.faqs?.map((faq, index) => (
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

  {/* CTA */}
  <section className="py-20">
    <div className="max-w-6xl mx-auto px-5">
      <div className="rounded-[40px] bg-[#0A4F8A] p-10 md:p-14 text-white">
        <h2 className="text-4xl md:text-5xl font-black">
          Book Your {service.title} Today
        </h2>

        <p className="mt-5 text-blue-100 max-w-2xl">
          Accurate reports, expert diagnostics and home
          sample collection available for your convenience.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() =>
              openWhatsApp(
                `Hello, I want to book ${service.title}`
              )
            }
            className="px-6 py-3 rounded-full bg-white text-[#0A4F8A] font-semibold flex items-center gap-2"
          >
            Book Test
            <FaArrowRight />
          </button>

          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="px-6 py-3 rounded-full border border-white text-white font-semibold flex items-center gap-2"
          >
            <FaPhoneAlt />
            Call Now
          </a>
        </div>
      </div>
    </div>
  </section>
</main>


);
}
