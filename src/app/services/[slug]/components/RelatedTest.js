import TrackingLink from "@/app/components/TrackingLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import { tests } from "@/app/data/tests";
import { FaArrowRight, FaFlask, FaWhatsapp } from "react-icons/fa";

export default function RelatedTests({ relatedTests = [] }) {
  const recommended = (tests || []).filter((test) =>
    (relatedTests || []).includes(test.slug)
  );

  if (!recommended.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold tracking-wide text-[#0A4F8A]">
          Popular Tests
        </span>

        <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Related Diagnostic Tests
        </h2>

        <p className="mt-2 max-w-3xl text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
          These lab tests are closely related to this topic. Book with home sample collection for fast, accurate reports.
        </p>
      </div>

      {/* Compact responsive grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {recommended.map((test, index) => {
          const isPublished = test.status === "published";

          const content = (
            <>
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#0A4F8A]">
                  <FaFlask className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {test.name}
                  </p>
                  {test.price && (
                    <p className="text-xs text-slate-500">₹{test.price}</p>
                  )}
                </div>
              </div>

              <span
                className={`flex shrink-0 items-center gap-1 text-xs font-semibold ${
                  isPublished ? "text-[#0A4F8A]" : "text-green-600"
                }`}
              >
                {isPublished ? (
                  <>
                    View
                    <FaArrowRight className="h-3 w-3" />
                  </>
                ) : (
                  <>
                    Book Now
                    <FaWhatsapp className="h-3.5 w-3.5" />
                  </>
                )}
              </span>
            </>
          );

          const baseClasses =
            "flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3 transition-colors";

          return isPublished ? (
            <TrackingLink
              key={test.slug ?? index}
              href={`/tests/${test.slug}`}
              tracking={`blog-related-test-${test.slug}`}
              className={`${baseClasses} hover:bg-blue-50`}
            >
              {content}
            </TrackingLink>
          ) : (
            <TrackedWhatsappLink
              key={test.slug ?? index}
              text={`I want to Book ${test.name} send me the availability`}
              location={`blog-related-test-${test.slug}`}
              className={`${baseClasses} hover:bg-green-50`}
            >
              {content}
            </TrackedWhatsappLink>
          );
        })}
      </div>
    </section>
  );
}
