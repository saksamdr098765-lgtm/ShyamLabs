import React from 'react'
import Link from 'next/link'
export default function RelatedTest({blog}) {
  return (
    <section className="pb-16">
    <div className="max-w-6xl mx-auto px-5">

      <h2 className="text-3xl font-black text-slate-900">
        Related Diagnostic Tests
      </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">

        {blog.relatedTests?.map((test) => (
          <Link
          href={`/package-detail-page/${test.slug}`}
            key={test.name}
            className="rounded-[28px] border border-slate-200  bg-white p-6 hover:shadow-lg transition hover:scale-105 duration-100"
          >
            <h3 className="font-bold text-slate-900">
              {test.name}
            </h3>

            <p className="mt-2 text-slate-600 text-sm">
              Learn more about this diagnostic service.
            </p>
          </Link>
        ))}

      </div>

    </div>
  </section>
  )
}
