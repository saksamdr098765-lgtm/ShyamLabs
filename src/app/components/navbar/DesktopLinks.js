import Link from "next/link"
export default function DesktopLinks({links}) {
  return (
       <div className="hidden lg:flex items-center gap-10">
            {links.map(({name,path},index) => (
              <Link
                key={path}
                href={path}
                className="text-slate-700 font-medium hover:text-[#0A4F8A] transition"
              >
                {name}
              </Link>
            ))}
          </div>
  )
}
