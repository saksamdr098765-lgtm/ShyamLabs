import {
  FiActivity,
  FiAward,
  FiCheckCircle,
  FiClock,
  FiHome,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const icons = {
  award: FiAward,
  clock: FiClock,
  shield: FiShield,
  users: FiUsers,
  activity: FiActivity,
  check: FiCheckCircle,
  home: FiHome,
};

export default function WhyChooseLab({ service }) {
  if (!service.whyChoose) return null;

  return (
    <section className="bg-slate-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0A4F8A]">
            Why Choose Shyam Labs
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Trusted Diagnostic Care Backed by Experience
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            At Shyam Labs, we combine experienced professionals, advanced technology, and a patient-first approach.
          </p>
        </div>

        {/* Features */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3">
          {(service.whyChoose.features || []).map((feature) => {
            const Icon = icons[feature.icon] || FiShield;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-5 shadow-2xs transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-100 text-[#0A4F8A] transition-colors group-hover:bg-[#0A4F8A] group-hover:text-white">
                  <Icon className="text-xl sm:text-2xl" />
                </div>

                <h3 className="mt-3 text-sm font-bold text-slate-900 sm:text-base">
                  {feature.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0A4F8A] via-blue-900 to-slate-900 p-5 text-white sm:rounded-3xl sm:p-8">
          <div className="relative grid gap-6 lg:grid-cols-[1fr_340px] lg:items-center lg:gap-8">
            <div>
              <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl">
                Your Health Deserves Accuracy & Trust
              </h3>

              <p className="mt-3 text-xs leading-5 text-blue-100 sm:text-base sm:leading-7">
                Whether you're booking a routine blood test or preventive screening, we deliver dependable laboratory services with complete transparency.
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 text-slate-900 shadow-md sm:rounded-2xl sm:p-6">
              <h4 className="text-base font-bold sm:text-lg">
                Our Commitment
              </h4>

              <div className="mt-3 space-y-3">
                {[
                  {
                    title: "Accuracy",
                    text: "Reliable diagnostic reports generated using advanced technology.",
                  },
                  {
                    title: "Compassion",
                    text: "Friendly healthcare professionals committed to patient comfort.",
                  },
                  {
                    title: "Excellence",
                    text: "Continuous focus on quality and dependable laboratory services.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
                    <h5 className="text-xs font-bold text-[#0A4F8A] sm:text-sm">
                      {item.title}
                    </h5>
                    <p className="mt-0.5 text-xs text-slate-600 leading-4">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
