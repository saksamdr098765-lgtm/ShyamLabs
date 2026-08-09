import { SITE_CONFIG } from "@/app/siteConfig"
import Image from "next/image"
import Link from "next/link"
import { FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

const {phone,address,email,fullName}=SITE_CONFIG
export default function MainFooter({links,packages}) {
  return (
    <div className="py-16 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
            {/* Left */}
            <div
            >
              {/* Logo */}
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden border border-slate-200 bg-white shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="Shyam Labs"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-black text-slate-900">
                   {fullName}
                  </h2>

                  <p className="text-[#0A4F8A] font-medium text-sm">
                    Budget Friendly Diagnostic Centre
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-8 max-w-xl text-slate-600 leading-relaxed">
                Delivering accurate pathology testing, preventive
                health screening, and reliable diagnostics with a
                commitment to affordability, trust, and patient care.
              </p>

              {/* Trust Points */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <FaCheckCircle className="text-[#78BE43]" />
                  Certified Laboratory
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <FaCheckCircle className="text-[#78BE43]" />
                  Home Collection
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <FaCheckCircle className="text-[#78BE43]" />
                  Fast Reports
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Navigation */}
              <div>
                <h3 className="font-bold text-slate-900 mb-5">
                  Navigation
                </h3>

                <div className="space-y-3">
                  {links.map(({name,path}) => (
                    <Link
                      key={path}
                      href={path}
                      className="block text-slate-600 hover:text-[#0A4F8A] transition"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="font-bold text-slate-900 mb-5">
                  Services
                </h3>

                <div className="space-y-3">
                  {packages.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="block text-slate-600 hover:text-[#0A4F8A] transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-bold text-slate-900 mb-5">
                  Contact
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <FaPhoneAlt className="text-[#0A4F8A] mt-1" />
                    <span className="text-slate-600">
                      {phone}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaEnvelope className="text-[#0A4F8A] mt-1 shrink-0" />
                    <span className="text-slate-600">
                     {email}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-[#0A4F8A] mt-1 shrink-0" />
                    <span className="text-slate-600">
                      {typeof address === "object" ? (address.full || `${address.line1}, ${address.city}`) : address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
