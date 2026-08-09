import { FiBookOpen, FiAward, FiActivity, FiClock, FiUsers } from "react-icons/fi";

export default function BlogHero({ totalBlogs }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 sm:py-12 lg:py-16">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-green-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-white px-3 py-1 text-xs font-semibold text-[#0A4F8A] shadow-2xs">
            <FiBookOpen className="text-[#0A4F8A]" />
            Shyam Labs Health Blog
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Expert Health Articles,
            <span className="block text-[#0A4F8A]">Wellness Tips & Guides</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            Explore medically reviewed articles on blood tests, preventive healthcare, nutrition, and wellness diagnostics.
          </p>

          {/* Trust Badges */}
          <div className="mt-5 flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#0A4F8A] shadow-2xs">
              <FiAward className="h-4 w-4 text-[#78BE43]" />
              Experienced Lab
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-emerald-800 shadow-2xs">
              <FiActivity className="h-4 w-4 text-emerald-600" />
              100+ Tests
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-100 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-amber-800 shadow-2xs">
              <FiClock className="h-4 w-4 text-amber-600" />
              Fast Reports
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-indigo-800 shadow-2xs">
              <FiUsers className="h-4 w-4 text-indigo-600" />
              Experienced Staff
            </span>
          </div>

          {/* Stats Row */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
            <div className="rounded-xl border border-slate-100 bg-white px-4 py-2.5 shadow-2xs text-center">
              <p className="text-xl font-bold text-[#0A4F8A] sm:text-2xl">{totalBlogs}+</p>
              <p className="text-[11px] text-slate-500">Health Articles</p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-white px-4 py-2.5 shadow-2xs text-center">
              <p className="text-xl font-bold text-[#0A4F8A] sm:text-2xl">100%</p>
              <p className="text-[11px] text-slate-500">Evidence Based</p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-white px-4 py-2.5 shadow-2xs text-center">
              <p className="text-xl font-bold text-[#0A4F8A] sm:text-2xl">Weekly</p>
              <p className="text-[11px] text-slate-500">New Articles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
