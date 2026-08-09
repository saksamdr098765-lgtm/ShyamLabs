import TrackingLink from "@/app/components/TrackingLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import { tests } from "@/app/data/tests";
import { FaArrowRight, FaFlask, FaWhatsapp } from "react-icons/fa";
import SITE_CONFIG from "@/app/siteConfig";

const WHATSAPP_NUMBER = SITE_CONFIG.whatsapp;

export default function RelatedTests({ relatedTests = [] }) {
  const recommended = (tests || []).filter((test) =>
    relatedTests.includes(test.slug)
  );

  if (!recommended.length) return null;

  return (
    <section className="mt-12 sm:mt-16 lg:mt-20">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold tracking-wide text-[#0A4F8A] sm:px-4 sm:py-1.5 sm:text-sm">
          Popular Blood Tests
        </span>

        <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Related Diagnostic Tests
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          These lab tests are closely related to this topic. Book with home
          sample collection for fast, accurate reports.
        </p>
      </div>

      {/* Compact responsive grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {recommended.map((test, index) => {
          const baseClasses =
            "flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3 transition-colors hover:bg-blue-50";

          return (
            <TrackingLink
              key={test.slug ?? index}
              href={`/tests/${test.slug}`}
              tracking={`blog-related-test-${test.slug}`}
              className={baseClasses}
            >
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

              <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-[#0A4F8A]">
                View
                <FaArrowRight className="h-3 w-3" />
              </span>
            </TrackingLink>
          );
        })}
      </div>
    </section>
  );
}
