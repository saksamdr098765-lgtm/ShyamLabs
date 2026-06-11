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

export default function BlogDetailPage({ blog }) {
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
   <main className="bg-white min-h-screen py-24 ">


  {/* Background Grid */}
  <div
    className="fixed inset-0 opacity-[0.03] pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(#0A4F8A 1px, transparent 1px), linear-gradient(90deg, #0A4F8A 1px, transparent 1px)",
      backgroundSize: "70px 70px",
    }}
  />

  {/* HERO */}
  <section className="pt-32 pb-14 relative">
    <div className="max-w-6xl mx-auto px-5">

      <span className="inline-flex px-4  py-2  rounded-full bg-green-50 text-[#78BE43] text-sm font-semibold">
        HEALTH AWARENESS ARTICLE
      </span>

     <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight break-words">
        {blog.title}
      </h1>

     <p className="mt-6 text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
        {blog.description}
      </p>

    <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <span> • {blog.date}</span>
        
        <span>• {blog.author}</span>
      
        <span>• {blog.readTime}</span>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <button
          onClick={() =>{
            openWhatsApp(
              `Hello, I read "${blog.title}" and would like guidance.`
            )
          }}

className="w-full sm:w-auto hover:scale-105  px-6 py-3 cursor-pointer rounded-full bg-[#0A4F8A] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#083a66] transition"
       >
          Ask An Expert
          <FaArrowRight />
        </button>

        <a
          href={`tel:${SITE_CONFIG.phone}`}
            onClick={()=>{trackEvent("phone_click")}}
className="w-full sm:w-auto px-6 py-3 hover:scale-105 cursor-pointer rounded-full border border-[#0A4F8A] text-[#0A4F8A] font-semibold flex items-center justify-center gap-2 hover:bg-blue-50 transition"        >
          <FaPhoneAlt />
          Call Laboratory
        </a>

      </div>

    </div>
  </section>

  {/* HERO IMAGE */}
  <section>
    <div className="max-w-6xl mx-auto px-5 py-4 ">

<div className="relative h-[220px] sm:h-[320px] md:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      </div>

    </div>
  </section>

  {/* FACTS */}
  <section className="py-14 mt-10">
    <div className="max-w-6xl mx-auto px-5">

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {blog.facts?.map((fact) => (
          <div
            key={fact.label}
className="rounded-3xl border border-slate-100 bg-white p-5 md:p-6 shadow-sm hover:shadow-lg transition"          >
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

  {/* SYMPTOMS */}
  <section className="pb-14 mt-10">
    <div className="max-w-6xl mx-auto px-5">

      <div className="rounded-[36px] bg-gradient-to-br from-[#F8FBFF] to-white border border-blue-100 p-8 md:p-10">

        <h2 className="text-3xl font-black text-slate-900">
          When Should You Consider This Test?
        </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">

          {blog.symptoms?.map((symptom) => (
            <div
              key={symptom}
              className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-5 py-4"
            >
              <FaCheckCircle className="text-[#78BE43]" />
              <span>{symptom}</span>
            </div>
          ))}

        </div>

      </div>

    </div>
  </section>

{/* CONTENT */}
<section className="py-12 sm:py-16 lg:py-20 bg-slate-50 mt-10">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="space-y-10 sm:space-y-14 lg:space-y-20 border border-slate-200 rounded-2xl">

      {blog.sections?.map((section, index) => (
        <article
          key={index}
          className="
            relative
            bg-white
         
            p-5
            sm:p-8
            lg:p-12
         
            transition-all
            duration-300
            overflow-hidden
          "
        >

          {/* Left Accent */}
          <div className="absolute left-0 top-0 h-full w-1.5 bg-[#78BE43]" />

          {/* Header */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">

            {/* Number */}
            <div
              className="
                shrink-0
                w-12 h-12
                sm:w-14 sm:h-14
                lg:w-16 lg:h-16
                rounded-2xl
                bg-[#0A4F8A]
                text-white
                flex
                items-center
                justify-center
                font-black
                text-lg
                lg:text-xl
              "
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Title */}
            <div className="flex-1 min-w-0">
              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  lg:text-4xl
                  font-black
                  text-slate-900
                  leading-tight
                  break-words
                "
              >
                {section.title}
              </h2>

              <div className="w-20 sm:w-24 h-1 bg-[#78BE43] rounded-full mt-4" />
            </div>

          </div>

          {/* Content */}
          <div className="max-w-none">

            <div className="space-y-5 sm:space-y-6">

              {Array.isArray(section.content)
                ? section.content.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="
                        text-slate-700
                        text-base
                        sm:text-lg
                        leading-8
                        sm:leading-9
                        break-words
                      "
                    >
                      {paragraph}
                    </p>
                  ))
                : section.content
                    ?.split("\n")
                    .filter((p) => p.trim())
                    .map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="
                          text-slate-700
                          text-base
                          sm:text-lg
                          leading-8
                          sm:leading-9
                          break-words
                        "
                      >
                        {paragraph}
                      </p>
                    ))}

            </div>

          </div>

          {/* CTA AFTER SECOND SECTION */}
          {index === 1 && (
            <div
              className="
                mt-10
                sm:mt-12
                rounded-2xl
                lg:rounded-3xl
                bg-gradient-to-r
                from-[#0A4F8A]
                to-[#0d5ea4]
                p-6
                sm:p-8
                lg:p-10
                text-white
              "
            >

              <span className="text-[#78BE43] font-semibold text-sm tracking-wider uppercase">
                SHYAM PATHOLOGY LAB
              </span>

              <h3
                className="
                  mt-3
                  text-2xl
                  sm:text-3xl
                  font-black
                  leading-tight
                "
              >
                Need Professional Guidance?
              </h3>

              <p
                className="
                  mt-4
                  text-white/85
                  text-sm
                  sm:text-base
                  leading-7
                  max-w-2xl
                "
              >
                Talk to our experts regarding test recommendations,
                home sample collection, reports, preventive health
                checkups and personalized healthcare guidance.
              </p>

              <button
                onClick={() =>{
                   
                  openWhatsApp(
                    `Hello, I need guidance regarding ${blog.title}`
                  )
                }}
                className="
                  mt-6
                  w-full
                  sm:w-auto
                  inline-flex
                  items-center
                  justify-center
                  hover:scale-105
                  cursor-pointer
                  gap-2
                  px-6
                  py-4
                  rounded-full
                  bg-white
                  text-[#0A4F8A]
                  font-semibold
                  hover:scale-105
                  transition-all
                "
              >
                Talk To Expert
                <FaArrowRight />
              </button>

            </div>
          )}

        </article>
      ))}

    </div>

  </div>
</section>

  {/* FAQ */}
  <section className="py-16 ">
    <div className="max-w-6xl mx-auto px-5 ">

      <h2 className="text-3xl md:text-4xl font-black text-slate-900">
        Frequently Asked Questions
      </h2>

      <div className="mt-8 space-y-4">

        {blog.faqs?.map((faq, index) => (
          <details
            key={index}
            className="group rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm"
          >
     <summary
  className="
    cursor-pointer
    list-none
    flex
    items-start
    gap-3
    text-base
    sm:text-lg
    font-semibold
    text-slate-900
  "
>
  <FaQuestionCircle
    className="
      text-[#0A4F8A]
      shrink-0
      mt-1
      text-lg
      sm:text-xl
    "
  />

  <span className="flex-1 leading-7 break-words">
    {faq.question}
  </span>
</summary>

            <p className="mt-4 text-slate-600 leading-7">
              {faq.answer}
            </p>
          </details>
        ))}

      </div>

    </div>
  </section>

  {/* RELATED TESTS */}
  <section className="pb-16">
    <div className="max-w-6xl mx-auto px-5">

      <h2 className="text-3xl font-black text-slate-900">
        Related Diagnostic Tests
      </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">

        {blog.relatedTests?.map((test) => (
          <div
            key={test}
            className="rounded-[28px] border border-slate-200  bg-white p-6 hover:shadow-lg transition hover:scale-105 duration-100"
          >
            <h3 className="font-bold text-slate-900">
              {test}
            </h3>

            <p className="mt-2 text-slate-600 text-sm">
              Learn more about this diagnostic service.
            </p>
          </div>
        ))}

      </div>

    </div>
  </section>

  {/* FINAL CTA */}
  <section className="pb-24">
    <div className="max-w-6xl mx-auto px-5">

   <div className="rounded-3xl bg-[#0A4F8A] p-6 sm:p-8 md:p-14 text-white text-center">

        <span className="text-[#78BE43] font-semibold">
          SHYAM PATHOLOGY LAB
        </span>

       <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-black">
          Need Expert Guidance?
        </h2>

        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Speak with our team about diagnostic tests,
          home sample collection and health packages.
        </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          <button
            onClick={() =>{
               
              openWhatsApp(
                `Hello, I need assistance regarding ${blog.title}`
              )
            }}
            className="px-8 py-4 hover:scale-105 cursor-pointer rounded-full bg-white text-[#0A4F8A] font-semibold"
          >
            WhatsApp Us
          </button>

          <a
            href={`tel:${SITE_CONFIG.phone}`}
            onClick={()=>{trackEvent("phone_click")}}
            className="px-8 py-4 hover:scale-105 cursor-pointer rounded-full border border-white/20"
          >
            Call Now
          </a>

        </div>

      </div>

    </div>
  </section>

</main>


);
}
