"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiClock,
  FiHome,
  FiShield,
} from "react-icons/fi";

import {
  packageTheme,
  packageThemeMap,
} from "../packagesData";

export default function PackageCard({
  pkg,
  featured = false,
}) {
  const savings =
    (pkg.originalPrice || 0) - (pkg.price || 0);

  const discount =
    pkg.originalPrice > 0
      ? Math.round(
          (savings / pkg.originalPrice) * 100
        )
      : 0;

  const themeKey =
    packageThemeMap[pkg.slug] || "preventive";

  const theme = packageTheme[themeKey];

  const Icon = theme.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="
relative
flex
h-full
flex-col
overflow-hidden
rounded-3xl
border
border-slate-200
bg-white
shadow-sm
transition-all
duration-300
hover:border-[#0A4F8A]/20
hover:shadow-xl
"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute -right-14 -top-14 h-44 w-44 rounded-full blur-3xl ${theme.glow}`}
        />

        <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-green-100/50 blur-3xl" />
      </div>

      <div className="relative flex h-full flex-col p-4">
        {/* Content */}

        <div className="flex flex-1 flex-col">
          {/* Image */}

          <div className="relative h-52 overflow-hidden rounded-2xl">
            <Image
              src={pkg.image}
              alt={pkg.name}
              fill
              priority={featured}
              className="object-cover transition duration-500 hover:scale-105"
              sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {discount > 0 && (
              <div className="absolute left-3 top-3 rounded-full bg-[#78BE43] px-3 py-1 text-[11px] font-bold text-white">
                {discount}% OFF
              </div>
            )}

            <div className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-slate-800 backdrop-blur">
                🧪 {pkg.testsCount || 0} Tests
            </div>
          </div>

          {/* Header */}

          <div className="mt-5 flex gap-3">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${theme.iconBg}`}
            >
              <Icon
                size={22}
                className={theme.iconColor}
              />
            </div>

            <div className="min-w-0 flex-1">
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${theme.badgeBg} ${theme.badgeColor}`}
              >
                Health Package
              </span>

              <h3 className="mt-2 min-h-[56px] line-clamp-2 text-xl font-bold leading-7 text-slate-900">
                {pkg.name}
              </h3>
            </div>
          </div>

          {/* Price */}

          <div className="mt-5 min-h-[138px] rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Starting From
            </p>

            <div className="mt-2 flex items-end gap-2">
              <h2 className="text-4xl font-black text-[#0A4F8A]">
                ₹{pkg.price}
              </h2>

              {pkg.originalPrice && (
                <span className="pb-1 text-base text-slate-400 line-through">
                  ₹{pkg.originalPrice}
                </span>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {pkg.originalPrice && (
                <span className="rounded-full bg-green-100 px-3 py-1 text-[11px] font-bold text-green-700">
                  Save ₹{savings}
                </span>
              )}

              <span className="rounded-full bg-blue-100 px-3 py-1 text-[11px] font-bold text-[#0A4F8A]">
                Best Value
              </span>
            </div>
          </div>

        
       

          {/* Badge */}

          <div className="mt-4 min-h-[36px]">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-semibold ${theme.badgeBg} ${theme.badgeColor}`}
            >
              ✓ Recommended Health Checkup
            </span>
          </div>
        </div>

        {/* CTA */}

        <Link
          href={`/package-detail-page/${pkg.slug}`}
          className={`
group
mt-5
flex
items-center
justify-between
rounded-2xl
px-5
py-3.5
text-white
transition-all
duration-300
bg-[#0A4F8A]
`}
        >
          <div>
            <p className="font-semibold">
              View Package
            </p>

            <p className="text-xs text-white/80">
              Complete package details
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
            <FiArrowRight size={18} />
          </div>
        </Link>
      </div>
    </motion.article>
  );
}