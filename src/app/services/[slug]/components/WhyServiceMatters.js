import {
  FiActivity,
  FiCheckCircle,
  FiClock,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

const icons = {
  shield: FiShield,
  clock: FiClock,
  growth: FiTrendingUp,
  check: FiCheckCircle,
  activity: FiActivity,
};

export default function WhyServiceMatters({ service }) {
  if (!service.importance) return null;

  return (
    <section className="bg-slate-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0A4F8A]">
            Why It Matters
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {service.importance.heading}
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            {service.importance.description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
          {(service.importance.cards || []).map((item) => {
            const Icon = icons[item.icon] || FiCheckCircle;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-5 shadow-2xs transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0A4F8A] transition-colors group-hover:bg-[#0A4F8A] group-hover:text-white">
                  <Icon className="text-xl sm:text-2xl" />
                </div>

                <h3 className="mt-3 text-sm font-bold text-slate-900 sm:text-base">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0A4F8A] via-blue-900 to-slate-900 p-5 text-white sm:rounded-3xl sm:p-8">
          <div className="relative grid gap-6 lg:grid-cols-[1fr_320px] lg:items-center lg:gap-8">
            <div>
              <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl">
                Early Testing Leads to Better Health Outcomes
              </h3>

              <p className="mt-3 text-xs leading-5 text-blue-100 sm:text-base sm:leading-7">
                Regular diagnostic testing helps identify potential health conditions before symptoms become severe. Early detection supports timely medical intervention.
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur sm:rounded-2xl sm:p-5">
              <h4 className="text-base font-bold text-white sm:text-lg">
                Benefits at a Glance
              </h4>

              <ul className="mt-3 space-y-2">
                {[
                  "Early disease detection",
                  "Reliable laboratory reports",
                  "Supports preventive care",
                  "Convenient testing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-400/20">
                      <FiCheckCircle className="text-xs text-[#78BE43]" />
                    </div>
                    <span className="text-xs font-medium text-white sm:text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
