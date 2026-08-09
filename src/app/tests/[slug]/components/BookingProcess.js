import { FiArrowRight } from "react-icons/fi";

export default function BookingProcess({ bookingProcess }) {
  if (!bookingProcess) return null;

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {bookingProcess.title}
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            {bookingProcess.description}
          </p>
        </div>

        {/* Steps */}
        <div className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {(bookingProcess.steps || []).map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center shadow-2xs"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#0A4F8A] text-sm font-bold text-white">
                {index + 1}
              </div>

              <h3 className="mt-3 text-sm font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
