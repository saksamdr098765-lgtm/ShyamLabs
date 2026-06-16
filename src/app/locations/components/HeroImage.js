import Image from 'next/image'
import React from 'react'
export default function HeroImage({location}) {
  return (
    <section className="">
        <div className="max-w-6xl mx-auto px-5">

          <div className="relative h-[250px] md:h-[550px] rounded-3xl overflow-hidden shadow-xl">

            <Image
              src={location.image}
              alt={location.city}
              fill
              className="object-cover"
            />

          </div>

        </div>
      </section>
  )
}
