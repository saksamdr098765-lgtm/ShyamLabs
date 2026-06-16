import React from 'react'
import { FaQuestionCircle } from 'react-icons/fa'

export default function Faqs({location}) {
  return (
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
  )
}
