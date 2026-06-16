import React from 'react'

export default function ContentSection({location}) {
  return (
      <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-5">
  
            <div className="space-y-12">
  
              {location.sections?.map((section, index) => (
                <article
                  key={index}
                  className="relative bg-white p-8 rounded-3xl border border-slate-100"
                >
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-[#78BE43]" />
  
                  <h2 className="text-3xl font-black text-slate-900">
                    {section.title}
                  </h2>
  
                  <div className="mt-6 space-y-5">
  
                    {section.content.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-slate-700 leading-8"
                      >
                        {paragraph}
                      </p>
                    ))}
  
                  </div>
  
                </article>
              ))}
  
            </div>
  
          </div>
        </section>
  )
}
