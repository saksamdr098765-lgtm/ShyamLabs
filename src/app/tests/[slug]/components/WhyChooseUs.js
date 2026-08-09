import { FiCheckCircle } from "react-icons/fi";

export default function WhyChooseUs({ whyChooseUs }) {
  if (!whyChooseUs) return null;

  return (
    <section className="bg-slate-50 py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {whyChooseUs.title}
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            {whyChooseUs.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {(whyChooseUs.items || []).map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-[#0A4F8A]">
                <FiCheckCircle size={22} />
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
