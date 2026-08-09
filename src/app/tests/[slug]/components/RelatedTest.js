import TrackingLink from "@/app/components/TrackingLink";
import { FiArrowRight } from "react-icons/fi";

export default function RelatedTests({ relatedTests }) {
  if (!relatedTests || !relatedTests.items || !relatedTests.items.length) return null;

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {relatedTests.title}
          </h2>

          <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-base">
            {relatedTests.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedTests.items.map((test) => (
            <TrackingLink
              key={test.name}
              href={test.url || "/tests"}
              tracking={`test-related-item-${test.name}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0A4F8A]">
                  {test.name}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-600">
                  {test.description}
                </p>
              </div>

              <div className="mt-4 flex items-center text-xs font-bold text-[#0A4F8A]">
                View Test
                <FiArrowRight className="ml-1.5 transition group-hover:translate-x-1" />
              </div>
            </TrackingLink>
          ))}
        </div>
      </div>
    </section>
  );
}
