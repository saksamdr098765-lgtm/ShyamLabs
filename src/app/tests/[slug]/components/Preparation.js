import { FiInfo } from "react-icons/fi";

export default function Preparation({ preparation }) {
  if (!preparation) return null;

  return (
    <section className="bg-slate-50 py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {preparation.title}
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            {preparation.description}
          </p>

          <div className="mt-6 space-y-3">
            {(preparation.items || []).map((item) => (
              <div
                key={item.title}
                className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-2xs"
              >
                <div className="mt-0.5">
                  <FiInfo className="text-[#0A4F8A]" size={20} />
                </div>

                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-600 leading-5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
