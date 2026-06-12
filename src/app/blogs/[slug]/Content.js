import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function Content({blog}) {
  return (
   <section className="py-6 sm:py-16 lg:py-20 bg-slate-50 mt-10">
     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
   
       <div className="space-y-10 sm:space-y-14 lg:space-y-20 border border-slate-200 rounded-2xl">
   
         {blog.sections?.map((section, index) => (
           <article
             key={index}
             className="
               relative
               bg-white
            
               p-5
               sm:p-8
               lg:p-12
            
               transition-all
               duration-300
               overflow-hidden
             "
           >
   
             {/* Left Accent */}
             <div className="absolute left-0 top-0 h-full w-1.5 bg-[#78BE43]" />
   
             {/* Header */}
             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
   
               {/* Number */}
               <div
                 className="
                   shrink-0
                   w-12 h-12
                   sm:w-14 sm:h-14
                   lg:w-16 lg:h-16
                   rounded-2xl
                   bg-[#0A4F8A]
                   text-white
                   flex
                   items-center
                   justify-center
                   font-black
                   text-lg
                   lg:text-xl
                 "
               >
                 {String(index + 1).padStart(2, "0")}
               </div>
   
               {/* Title */}
               <div className="flex-1 min-w-0">
                <h2
     id={section.title
       .toLowerCase()
       .replace(/[^\w\s]/g, "")
       .replaceAll(" ", "-")}
     className="
       text-2xl
       sm:text-3xl
       lg:text-4xl
       font-black
       text-slate-900
     "
   >
     {section.title}
   </h2>
   
                 <div className="w-20 sm:w-24 h-1 bg-[#78BE43] rounded-full mt-4" />
               </div>
   
             </div>
   
             {/* Content */}
             <div className="max-w-none">
   
               <div className="space-y-5 sm:space-y-6">
   
                 {Array.isArray(section.content)
                   ? section.content.map((paragraph, idx) => (
                       <p
                         key={idx}
                         className="
                           text-slate-700
                           text-base
                           sm:text-lg
                           leading-8
                           sm:leading-9
                           break-words
                         "
                       >
                         {paragraph}
                       </p>
                     ))
                   : section.content
                       ?.split("\n")
                       .filter((p) => p.trim())
                       .map((paragraph, idx) => (
                         <p
                           key={idx}
                           className="
                             text-slate-700
                             text-base
                             sm:text-lg
                             leading-8
                             sm:leading-9
                             break-words
                           "
                         >
                           {paragraph}
                         </p>
                       ))}
   
               </div>
   
             </div>
   
             {/* CTA AFTER SECOND SECTION */}
             {index === 1 && (
               <div
                 className="
                   mt-10
                   sm:mt-12
                   rounded-2xl
                   lg:rounded-3xl
                   bg-gradient-to-r
                   from-[#0A4F8A]
                   to-[#0d5ea4]
                   p-6
                   sm:p-8
                   lg:p-10
                   text-white
                 "
               >
   
                 <span className="text-[#78BE43] font-semibold text-sm tracking-wider uppercase">
                   SHYAM PATHOLOGY LAB
                 </span>
   
                 <h3
                   className="
                     mt-3
                     text-2xl
                     sm:text-3xl
                     font-black
                     leading-tight
                   "
                 >
                   Need Professional Guidance?
                 </h3>
   
                 <p
                   className="
                     mt-4
                     text-white/85
                     text-sm
                     sm:text-base
                     leading-7
                     max-w-2xl
                   "
                 >
                   Talk to our experts regarding test recommendations,
                   home sample collection, reports, preventive health
                   checkups and personalized healthcare guidance.
                 </p>
   
                 <button
                   onClick={() =>{
                      
                     openWhatsApp(
                       `Hello, I need guidance regarding ${blog.title}`
                     )
                   }}
                   className="
                     mt-6
                     w-full
                     sm:w-auto
                     inline-flex
                     items-center
                     justify-center
                     hover:scale-105
                     cursor-pointer
                     gap-2
                     px-6
                     py-4
                     rounded-full
                     bg-white
                     text-[#0A4F8A]
                     font-semibold
                     hover:scale-105
                     transition-all
                   "
                 >
                   Talk To Expert
                   <FaArrowRight />
                 </button>
   
               </div>
             )}
   
           </article>
         ))}
   
       </div>
   
     </div>
   </section>
  )
}
