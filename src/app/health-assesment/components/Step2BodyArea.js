import {
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiHeart,
  FiActivity,
  FiWind,
  FiDroplet,
  FiSun,
  FiUser,
  FiUserCheck,
} from "react-icons/fi";

import {
  GiBrain,
  GiStomach,
  GiKidneys,
  GiLiver,
  GiLeg,
  GiBoneKnife,
} from "react-icons/gi";

const bodyAreas = [
  {
    value: "general",
    title: "General Health",
    description: "Fatigue, fever, weakness & wellness",
    icon: FiActivity,
  },
  {
    value: "head",
    title: "Head & Brain",
    description: "Headache, dizziness, migraine",
    icon: GiBrain,
  },
  {
    value: "heart",
    title: "Heart",
    description: "Chest pain, BP, palpitations",
    icon: FiHeart,
  },
  {
    value: "lungs",
    title: "Lungs",
    description: "Cough, breathing problems",
    icon: FiWind,
  },
  {
    value: "digestive",
    title: "Digestive System",
    description: "Acidity, stomach pain, nausea",
    icon: GiStomach,
  },
  {
    value: "blood",
    title: "Blood",
    description: "Anemia, infection, weakness",
    icon: FiDroplet,
  },
  {
    value: "thyroid",
    title: "Thyroid",
    description: "Weight changes, hair fall",
    icon: FiSun,
  },
  {
    value: "kidney",
    title: "Kidneys",
    description: "Urine & kidney health",
    icon: GiKidneys,
  },
  {
    value: "liver",
    title: "Liver",
    description: "Jaundice & liver function",
    icon: GiLiver,
  },
  {
    value: "bones",
    title: "Bones & Joints",
    description: "Joint pain & vitamin deficiency",
    icon: GiBoneKnife,
  },
  {
    value: "legs",
    title: "Legs & Muscles",
    description: "Pain, cramps & weakness",
    icon: GiLeg,
  },
  {
    value: "women",
    title: "Women's Health",
    description: "PCOS, pregnancy & hormones",
    icon: FiUser,
  },
  {
    value: "men",
    title: "Men's Health",
    description: "Prostate & testosterone",
    icon: FiUserCheck,
  },
];

export default function Step2BodyArea({
  value,
  onChange,
  previousStep,
  nextStep,
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs sm:p-8">
      {/* Heading */}
      <div className="max-w-3xl">
        <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0A4F8A]">
          Step 2 of 5
        </span>

        <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Which body area <span className="text-[#0A4F8A]">needs attention?</span>
        </h2>

        <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-base">
          Choose the body area that best matches your symptoms.
        </p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {bodyAreas.map((item) => {
          const Icon = item.icon;
          const active = value === item.value;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onChange(item.value)}
              className={`group relative rounded-xl border p-4 text-left transition-all ${
                active
                  ? "border-[#0A4F8A] bg-blue-50/60 shadow-md"
                  : "border-slate-200 bg-white hover:border-blue-200"
              }`}
            >
              {active && (
                <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#0A4F8A] text-white">
                  <FiCheck size={12} />
                </div>
              )}

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0A4F8A] ${
                  active && "bg-[#0A4F8A] text-white"
                }`}
              >
                <Icon size={20} />
              </div>

              <h3 className="mt-3 text-sm font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-1 text-xs text-slate-600 leading-4">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-6 justify-between">
        <button
          type="button"
          onClick={previousStep}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 sm:text-sm"
        >
          <FiArrowLeft />
          Back
        </button>

        <button
          type="button"
          disabled={!value}
          onClick={nextStep}
          className="inline-flex items-center gap-2 rounded-xl bg-[#0A4F8A] px-6 py-2.5 text-xs font-bold text-white transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-40 sm:text-sm"
        >
          Continue
          <FiArrowRight />
        </button>
      </div>
    </section>
  );
}
