import React from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
export default function Faqs({blog}) {
  return (
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
  )
}
