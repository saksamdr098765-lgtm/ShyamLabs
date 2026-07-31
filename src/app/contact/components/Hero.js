
export default function Hero() {
  return (
    <section className="relative pt-28 pb-16">
           <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[450px] w-[450px] bg-gradient-to-r from-green-100/50 to-blue-100/50 blur-3xl" />
   
           <div className="relative max-w-7xl mx-auto px-5">
             <span className="inline-flex px-4 py-2 rounded-full border border-green-100 bg-green-50 text-[#78BE43] text-sm font-semibold">
               CONTACT SHYAM LABS
             </span>
   
             <h1 className="mt-6 text-5xl md:text-7xl font-black text-slate-900 leading-[0.95]">
               Let's Talk About
               <span className="block text-[#0A4F8A]">
                 Your Health.
               </span>
             </h1>
   
             <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
               Book tests, request home sample collection,
               or contact our team for assistance.
             </p>
           </div>
         </section>
  )
}
