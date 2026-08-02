
import {
  FiActivity,
  FiBriefcase,
  FiHeart,
  FiTrendingUp,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";

const iconMap = {
  briefcase: FiBriefcase,
  users: FiUsers,
  heart: FiHeart,
  activity: FiActivity,
  trending: FiTrendingUp,
  userCheck: FiUserCheck,
};

export default function Eligibility({ pkg }) {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute -bottom-10 left-0 h-56 w-56 rounded-full bg-green-100/40 blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}

        <div
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#78BE43] sm:text-xs">
            Recommended For
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Who Should Choose
            <span className="block text-[#0A4F8A]">
              This Health Package?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            This package is designed for preventive healthcare, routine
            wellness monitoring, and early disease detection for people
            of different age groups and lifestyles.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">

          {pkg?.recommendedFor?.map((item, index) => {

            const Icon = iconMap[item.icon] || FiUsers;

            return (

              <article
                key={item.title}
                className="
group
relative
overflow-hidden
rounded-2xl
border
border-slate-200
bg-white
p-5
shadow-sm
transition-all
duration-300
hover:border-[#0A4F8A]/20
hover:shadow-lg
sm:p-7
"
              >

                {/* Glow */}

                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-100 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A4F8A]/10 sm:h-14 sm:w-14 sm:rounded-2xl">

                  <Icon
                    size={24}
                    className="text-[#0A4F8A]"
                  />

                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {item.description}
                </p>

                <div className="mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-[#0A4F8A] to-[#78BE43]" />

              </article>

            );

          })}

        </div>

        {/* Bottom CTA */}

        <div
          className="mt-10 rounded-3xl bg-gradient-to-r from-[#0A4F8A] to-[#78BE43] p-6 text-white sm:mt-16 sm:p-10"
        >

          <h3 className="text-2xl font-black">
            Not Sure Which Package Is Right?
          </h3>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
            Our healthcare experts can recommend the most suitable health
            package based on your age, symptoms, lifestyle, and medical
            history. Get personalized guidance before booking your test.
          </p>

          <div className="mt-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
            ✓ Free Consultation Available
          </div>

        </div>

      </div>

    </section>
  );
}