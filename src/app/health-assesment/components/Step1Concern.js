import {
  FiArrowRight,
  FiCheck,
  FiUser,
  FiUsers,
  FiHeart,
  FiSmile,
} from "react-icons/fi";

const options = [
  {
    value: "myself",
    title: "Myself",
    description: "I'm checking symptoms for myself.",
    icon: FiUser,
    badge: "Most Common",
  },
  {
    value: "child",
    title: "My Child",
    description: "Assessment for an infant or child.",
    icon: FiSmile,
    badge: "Pediatric",
  },
  {
    value: "parent",
    title: "My Parent",
    description: "Health assessment for a parent.",
    icon: FiHeart,
    badge: "Senior Care",
  },
  {
    value: "other",
    title: "Someone Else",
    description: "For another family member.",
    icon: FiUsers,
    badge: "Family",
  },
];

export default function Step1Concern({ value, onChange, nextStep }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs sm:p-8">
      {/* Heading */}
      <div className="max-w-2xl">
        <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0A4F8A]">
          Step 1 of 5
        </span>

        <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Who is this health <span className="text-[#0A4F8A]">assessment for?</span>
        </h2>

        <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-base">
          Select who you're completing this assessment for.
        </p>
      </div>

      {/* Options */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {options.map((item) => {
          const Icon = item.icon;
          const active = value === item.value;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onChange(item.value)}
              className={`group relative overflow-hidden rounded-xl border p-5 text-left transition-all ${
                active
                  ? "border-[#0A4F8A] bg-blue-50/60 shadow-md"
                  : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-2xs"
              }`}
            >
              <span className="absolute left-5 top-5 rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600">
                {item.badge}
              </span>

              {active && (
                <div className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-[#0A4F8A] text-white">
                  <FiCheck size={14} />
                </div>
              )}

              <div
                className={`mt-6 flex h-12 w-12 items-center justify-center rounded-xl transition-all ${
                  active
                    ? "bg-[#0A4F8A] text-white"
                    : "bg-blue-50 text-[#0A4F8A]"
                }`}
              >
                <Icon size={24} />
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-1 text-xs text-slate-600 leading-5">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          Personalized recommendations based on your selection.
        </p>

        <button
          type="button"
          disabled={!value}
          onClick={nextStep}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A4F8A] px-6 py-3 text-xs font-bold text-white transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
        >
          Continue
          <FiArrowRight />
        </button>
      </div>
    </section>
  );
}
