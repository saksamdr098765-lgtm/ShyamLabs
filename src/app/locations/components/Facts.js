import React from "react";

export default function Facts({ location }) {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-5">

        <h2 className="text-3xl font-black">
          Why Choose Shyam Labs in {location.city}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {location.facts?.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-2xl bg-white hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                {item.label}
              </h3>

              <p className="text-slate-600 text-sm leading-6">
                {item.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}