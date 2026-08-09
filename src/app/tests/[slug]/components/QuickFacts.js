import {
  FiDroplet,
  FiClock,
  FiActivity,
  FiHome,
  FiUser,
} from "react-icons/fi";

const icons = {
  sample: FiDroplet,
  reportTime: FiClock,
  fasting: FiActivity,
  homeCollection: FiHome,
  ageGroup: FiUser,
};

export default function QuickFacts({ quickFacts }) {
  if (!quickFacts) return null;

  const facts = [
    {
      key: "sample",
      title: "Sample Required",
      value: quickFacts.sample,
    },
    {
      key: "reportTime",
      title: "Report Time",
      value: quickFacts.reportTime,
    },
    {
      key: "fasting",
      title: "Fasting Required",
      value: quickFacts.fasting,
    },
    {
      key: "homeCollection",
      title: "Home Collection",
      value: quickFacts.homeCollection,
    },
    {
      key: "ageGroup",
      title: "Suitable For",
      value: quickFacts.ageGroup,
    },
  ];

  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {facts.map((fact) => {
            const Icon = icons[fact.key] || FiActivity;

            return (
              <div
                key={fact.key}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-2xs"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-[#0A4F8A]">
                  <Icon size={20} />
                </div>

                <p className="mt-3 text-xs text-slate-500 font-medium">
                  {fact.title}
                </p>

                <p className="mt-1 font-bold text-slate-900 text-sm">
                  {fact.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
