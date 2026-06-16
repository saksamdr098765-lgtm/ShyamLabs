import React from 'react'

export default function HowItWorks() {
  return (
   <section className="py-16 bg-slate-50">
     <div className="max-w-6xl mx-auto px-5">
   
       <h2 className="text-3xl font-black text-center">
         How Home Sample Collection Works
       </h2>
   
       <div className="grid md:grid-cols-5 gap-6 mt-10">
   
         {[
           "Book Your Test",
           "Schedule Visit",
           "Sample Collection",
           "Lab Processing",
           "Get Reports Online",
         ].map((step, index) => (
           <div
             key={step}
             className="bg-white border rounded-3xl p-6 text-center"
           >
             <div className="w-12 h-12 rounded-full bg-[#0A4F8A] text-white flex items-center justify-center mx-auto mb-4">
               {index + 1}
             </div>
   
             <p className="font-semibold">
               {step}
             </p>
           </div>
         ))}
   
       </div>
   
     </div>
   </section>
  )
}
