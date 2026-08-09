import {
  FiActivity,
  FiArrowDown,
  FiShield,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const features = [
  {
    icon: FiActivity,
    title: "Smart Recommendations",
    text: "Personalized test suggestions",
  },
  {
    icon: FiClock,
    title: "2 Minute Assessment",
    text: "Quick & simple questionnaire",
  },
  {
    icon: FiShield,
    title: "Private & Secure",
    text: "Your information stays confidential",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe_0%,transparent_45%)] opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0A4F8A] shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-[#78BE43]" />
            AI Powered Health Assessment
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-6xl">
            Not Sure Which
            <span className="mt-1 block text-[#0A4F8A]">
              Blood Test You Need?
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-xs leading-5 text-slate-600 sm:text-base sm:leading-7 lg:text-lg">
            Tell us about your symptoms in a few simple steps. Our smart assessment recommends the most relevant laboratory tests and health packages based on your responses.
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#assessment"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#0A4F8A] px-6 text-xs font-bold text-white transition hover:bg-blue-900 sm:text-sm"
            >
              Start Assessment
              <FiArrowDown className="transition group-hover:translate-y-0.5" />
            </a>

            <div className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-xs font-medium text-slate-600 shadow-2xs">
              Takes less than <span className="ml-1 font-bold text-slate-900">2 minutes</span>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs transition duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0A4F8A]">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-slate-600 leading-5">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Assessment Anchor */}
      <div id="assessment" />
    </section>
  );
}
