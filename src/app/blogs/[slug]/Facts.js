import React from 'react'

export default function Facts({blog}) {
  return (
   <section className=" ">
      <div className="max-w-6xl mx-auto px-5">
  
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
  
          {blog.facts?.map((fact) => (
            <div
              key={fact.label}
  className="rounded-3xl border border-slate-100 bg-white p-5 md:p-6 shadow-sm hover:shadow-lg transition"          >
              <p className="text-sm text-slate-500">
                {fact.label}
              </p>
  
              <h3 className="mt-2 text-xl font-black text-[#0A4F8A]">
                {fact.value}
              </h3>
            </div>
          ))}
  
        </div>
  
      </div>
    </section>
  )
}
