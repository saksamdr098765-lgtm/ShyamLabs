import { FiPlus } from "react-icons/fi";

export default function FAQ({ faq }) {
  if (!faq || !faq.items || !faq.items.length) return null;

  return (
    <section className="bg-slate-50 py-10 lg:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {faq.title}
          </h2>

          <p className="mt-2 text-xs text-slate-600 sm:text-base">
            {faq.description}
          </p>
        </div>

        {/* Questions */}
        <div className="mt-6 space-y-3">
          {faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-slate-200 bg-white p-4 shadow-2xs"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-xs font-bold text-slate-900 sm:text-base">
                {item.question}
                <FiPlus className="shrink-0 text-[#0A4F8A] transition group-open:rotate-45" />
              </summary>

              <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-sm">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
