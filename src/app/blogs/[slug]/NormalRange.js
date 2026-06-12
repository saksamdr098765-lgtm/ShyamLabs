import React from "react";

export default function NormalRange({ blog }) {
  if (!blog.normalRanges?.length) return null;

  return (
    <section className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          {/* Header */}
          <div className="border-b border-slate-100 bg-gradient-to-r from-[#F8FBFF] to-white px-6 py-5 md:px-8">

            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              Normal Reference Values
            </h2>

            <p className="mt-2 text-sm md:text-base text-slate-600">
              Standard reference ranges may vary slightly between laboratories.
            </p>

          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">

              <thead>
                <tr className="bg-slate-50">
                  <th className="px-8 py-4 text-left text-sm font-semibold uppercase tracking-wide text-slate-600">
                    Parameter
                  </th>

                  <th className="px-8 py-4 text-left text-sm font-semibold uppercase tracking-wide text-slate-600">
                    Normal Range
                  </th>
                </tr>
              </thead>

              <tbody>
                {blog.normalRanges.map((item, index) => {
                  const [parameter, range] = item.split(":");

                  return (
                    <tr
                      key={index}
                      className="border-t border-slate-100 hover:bg-blue-50/50 transition-colors"
                    >
                      <td className="px-8 py-5 font-semibold text-slate-900">
                        {parameter}
                      </td>

                      <td className="px-8 py-5 text-slate-700">
                        {range?.trim()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>

            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden p-4 space-y-3">
            {blog.normalRanges.map((item, index) => {
              const [parameter, range] = item.split(":");

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 p-4 bg-slate-50"
                >
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Parameter
                  </div>

                  <div className="mt-1 font-semibold text-slate-900">
                    {parameter}
                  </div>

                  <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Normal Range
                  </div>

                  <div className="mt-1 text-slate-700">
                    {range?.trim()}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}