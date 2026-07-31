"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MobileMenu({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
        className="text-slate-700 text-xl"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`
          absolute
          top-20
          left-0
          w-full
          bg-white
          border-t
          border-slate-100
          shadow-lg
          overflow-hidden
          transition-all
          duration-500
          ease-in-out
          ${
            open
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="px-5 py-5 flex flex-col gap-5">
          {links.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              onClick={() => setOpen(false)}
              className="font-medium text-slate-700 hover:text-[#0A4F8A]"
            >
              {name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex h-12 items-center justify-center rounded-xl bg-[#0A4F8A] text-white font-semibold hover:bg-[#083c69] transition"
          >
            Book Test
          </Link>
        </div>
      </div>
    </>
  );
}