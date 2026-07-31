import Link from "next/link"
import Image from "next/image"
import { SITE_CONFIG } from "@/app/siteConfig"
const {name}=SITE_CONFIG
export default function Logo() {
  return (
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12">
          <Image
  src="/logo.webp"
  alt={`${name} Logo`}
  fill
  priority
  sizes="48px"
  className="object-contain"
/>
          </div>

          <div>
            <h2 className="font-bold text-slate-900 text-lg leading-none">
             {name}
            </h2>
            <p className="text-xs text-[#78BE43] font-medium">
              YOUR HEALTH, OUR PRIORITY
            </p>
          </div>
        </Link>
  )
}
