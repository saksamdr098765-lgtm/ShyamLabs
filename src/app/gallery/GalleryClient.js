"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const gallery = [
  {
    image: "/gallery/certificate1.jpg",
    title: "Tele-Consultant Certificate",
    size: "large",
  },
  {
    image: "/gallery/certificate2.jpg",
    title: "Healthian Labs Certificate",
  },
  {
    image: "/gallery/certificate3.jpg",
    title: "Thyrocare certificate",
  },
  {
    image: "/gallery/inside1.jpg",
    title: "laboratory",
  },
  {
    image: "/gallery/inside2.jpg",
    title: "laboratory",
    
  },
  {
    image: "/gallery/inside3.jpg",
    title: "laboratory",
    size: "large",
  },
  {
    image: "/gallery/inside4.jpg",
    title: "laboratory",
  },
  
];

export default function GalleryClient() {
  const router=useRouter()
  return (
    <main className="bg-white overflow-hidden">
      {/* Grid Background */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#0A4F8A 1px, transparent 1px),
            linear-gradient(90deg, #0A4F8A 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero */}
      <section className="relative pt-28 pb-16">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[500px] bg-gradient-to-r from-green-100/50 to-blue-100/50 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5">
          <span className="inline-flex px-4 py-2 rounded-full border border-green-100 bg-green-50 text-[#78BE43] text-sm font-semibold">
            SHYAM LABS GALLERY
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black text-slate-900 leading-[0.95]">
            Inside Our
            <span className="block text-[#0A4F8A]">
              Diagnostic Centre.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Explore our laboratory environment, diagnostic
            technology, patient care facilities, and quality
            testing processes.
          </p>
        </div>
      </section>

    

      {/* Gallery Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-[32px]
                ${
                  item.size === "large"
                    ? "lg:col-span-2 h-[500px]"
                    : "h-[350px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Strip */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="rounded-[40px] border border-slate-100 bg-gradient-to-r from-green-50 via-white to-blue-50 p-10 md:p-16">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-5xl font-black text-[#0A4F8A]">
                  25K+
                </h3>
                <p className="mt-2 text-slate-600">
                  Tests Processed
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-[#0A4F8A]">
                  99.8%
                </h3>
                <p className="mt-2 text-slate-600">
                  Accuracy Rate
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-[#0A4F8A]">
                  24H
                </h3>
                <p className="mt-2 text-slate-600">
                  Reporting Time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-5">
          <div className="rounded-[40px] bg-[#0A4F8A] p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white">
              Experience Trusted Diagnostics.
            </h2>

            <p className="mt-5 text-white/80 max-w-2xl mx-auto">
              Visit our diagnostic centre or schedule a
              home sample collection today.
            </p>

            <button onClick={()=>{router.push('/contact')}} className="cursor-pointer mt-8 px-8 h-14 rounded-full bg-white text-[#0A4F8A] font-semibold">
              Book A Test
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}