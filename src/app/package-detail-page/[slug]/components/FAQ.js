"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function FAQ({ pkg }) {
  const [open, setOpen] = useState(0);

  const faqs = pkg?.faqs || [];

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute -bottom-10 right-0 h-56 w-56 rounded-full bg-green-100/40 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#78BE43] sm:text-xs">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Answers To Your
            <span className="block text-[#0A4F8A]">
              Common Questions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Everything you need to know about booking, preparation,
            reports, home sample collection, and your diagnostic package.
          </p>

        </motion.div>

        {/* FAQ */}

        <div className="mt-10 space-y-4 sm:mt-14">

          {faqs.map((item, index) => {

            const isOpen = open === index;

            return (

              <motion.div
                key={item.question}
                layout
                className="
overflow-hidden
rounded-2xl
border
border-slate-200
bg-white
shadow-sm
transition-all
duration-300
hover:border-[#0A4F8A]/20
hover:shadow-md
"
              >

                <button
                  onClick={() =>
                    setOpen(isOpen ? -1 : index)
                  }
                  className="
flex
w-full
items-center
justify-between
gap-4
p-5
text-left
"
                >

                  <h3 className="text-base font-bold leading-7 text-slate-900 sm:text-lg">
                    {item.question}
                  </h3>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A4F8A]/10">

                    {isOpen ? (
                      <FiMinus className="text-[#0A4F8A]" />
                    ) : (
                      <FiPlus className="text-[#0A4F8A]" />
                    )}

                  </div>

                </button>

                <AnimatePresence initial={false}>

                  {isOpen && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >

                      <div className="border-t border-slate-100 px-5 pb-5 pt-4">

                        <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                          {item.answer}
                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom Card */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-3xl bg-gradient-to-r from-[#0A4F8A] to-[#78BE43] p-6 text-center text-white sm:mt-16 sm:p-8"
        >

          <h3 className="text-2xl font-black">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            Our healthcare team is happy to help you choose the right
            package, explain the preparation process, and assist with
            your booking.
          </p>

          <div className="mt-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            📞 Call or WhatsApp Us Anytime
          </div>

        </motion.div>

      </div>

    </section>
  );
}