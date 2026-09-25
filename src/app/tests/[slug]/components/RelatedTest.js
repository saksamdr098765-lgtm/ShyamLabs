import TrackingLink from "@/app/components/TrackingLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import { tests as allTests } from "@/app/data/tests";
import { FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function RelatedTests({ relatedTests }) {
  let items = [];
  let title = "Related Diagnostic Tests";
  let description = "These lab tests are closely related. Book with home sample collection for fast, accurate reports.";

  if (Array.isArray(relatedTests)) {
    items = (allTests || []).filter((t) => relatedTests.includes(t.slug));
  } else if (relatedTests && Array.isArray(relatedTests.items)) {
    title = relatedTests.title || title;
    description = relatedTests.description || description;
    items = relatedTests.items.map((item) => {
      if (typeof item === "string") {
        return (allTests || []).find((t) => t.slug === item) || { name: item, slug: item };
      }
      return item;
    });
  }

  if (!items || !items.length) return null;

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {title}
          </h2>

          <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-base">
            {description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((test, index) => {
            const isPublished = test.status === "published";
            const formattedPrice = test.price ? `₹${test.price}` : null;
            const testSlug = test.slug || test.name?.toLowerCase().replace(/[^a-z0-9]+/g, "-");

            const content = (
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0A4F8A]">
                      {test.name}
                    </h3>
                    {formattedPrice && (
                      <span className="text-xs font-bold text-[#0A4F8A] shrink-0">
                        {formattedPrice}
                      </span>
                    )}
                  </div>

                  {test.description && (
                    <p className="mt-2 text-xs leading-5 text-slate-600 line-clamp-2">
                      {test.description}
                    </p>
                  )}
                </div>

                <div className={`mt-4 flex items-center text-xs font-bold ${isPublished ? "text-[#0A4F8A]" : "text-green-600"}`}>
                  {isPublished ? (
                    <>
                      View Test
                      <FiArrowRight className="ml-1.5 transition group-hover:translate-x-1" />
                    </>
                  ) : (
                    <>
                      Book via WhatsApp
                      <FaWhatsapp className="ml-1.5 text-sm" />
                    </>
                  )}
                </div>
              </div>
            );

            const baseClasses =
              "group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between";

            return isPublished ? (
              <TrackingLink
                key={testSlug || index}
                href={`/tests/${testSlug}`}
                tracking={`test-related-item-${testSlug}`}
                className={`${baseClasses} hover:border-blue-200`}
              >
                {content}
              </TrackingLink>
            ) : (
              <TrackedWhatsappLink
                key={testSlug || index}
                text={`Hello, I want to book the *${test.name}* test (${formattedPrice || "Price on request"}). Please share availability.`}
                location={`test-related-whatsapp-${testSlug}`}
                className={`${baseClasses} hover:border-green-200`}
              >
                {content}
              </TrackedWhatsappLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
