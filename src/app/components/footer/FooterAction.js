"use client"
import trackEvent from "@/app/utils/Analytics"
import { FaArrowUp } from "react-icons/fa"

export default function FooterAction() {
  return (
  <>
     <a
      href="https://rohitdevstack.online"
      onClick={()=>{  trackEvent(`site_click`)}}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        border
        border-slate-200
        bg-white
        hover:border-[#0A4F8A]/30
        hover:shadow-md
        transition-all
        duration-300
      "
    >
      <span className="h-2 w-2 rounded-full bg-[#78BE43]" />

      <span className="text-xs text-slate-500">
        Developed by
      </span>

      <span className="text-sm font-semibold text-[#0A4F8A]">
        Rohit DevStack
      </span>
    </a>

    <button
    type="button"
    aria-label="Scroll to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
        h-11
        w-11
        rounded-full
        bg-[#0A4F8A]
        text-white
        flex
        items-center
        justify-center
        hover:scale-110
        transition
      "
    >
      <FaArrowUp />
    </button>
  </>
  )
}
