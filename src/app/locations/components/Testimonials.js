import React from 'react'

export default function Testimonials({location}) {
  return (
  <section className="py-16">
  <div className="max-w-6xl mx-auto px-5">

    <h2 className="text-3xl font-black text-center">
      What Patients Say
    </h2>

    <div className="grid md:grid-cols-3 gap-6 mt-10">

      {location.testimonials?.map((item) => (
        <div
          key={item.name}
          className="bg-white border rounded-3xl p-6"
        >
          <p className="text-slate-600 italic">
            "{item.review}"
          </p>

          <h4 className="mt-5 font-bold">
            {item.name}
          </h4>
        </div>
      ))}

    </div>

  </div>
</section>
  )
}
