import Image from 'next/image'
import React from 'react'

export default function HeroImage({blog}) {
  return (
     <section>
    <div className="max-w-6xl mx-auto px-5 py-4 ">

<div className="relative h-[220px] sm:h-[320px] md:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      </div>

    </div>
  </section>
  )
}
