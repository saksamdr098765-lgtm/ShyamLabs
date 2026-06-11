  import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { blogs } from "../blogs";
import Image from "next/image";

export default function Blogs() {
  return (

<section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-5">

    {/* Heading */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">

      <div>
        <span className="text-[#78BE43] font-semibold text-sm uppercase tracking-wider">
          Health Insights
        </span>

        <h2 className="mt-2 text-3xl md:text-5xl font-black text-slate-900">
          Latest Health Articles
        </h2>

        <p className="mt-4 text-slate-600 max-w-2xl">
          Expert guidance on diagnostics, preventive healthcare,
          pathology tests and wellness from Shyam Budget Friendly Labs.
        </p>
      </div>
    <div>
        
    </div>
   

    </div>

    {/* Blog Cards */}
    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {blogs.slice(0, 3).map((blog) => (
        <Link
          key={blog.slug}
          href={`/blogs/${blog.slug}`}
          className="
            group
            bg-white
            rounded-[28px]
            overflow-hidden
            border
            border-slate-100
            shadow-sm
            hover:shadow-lg
            transition-all
            duration-300
          "
        >

          {/* Image */}
        <div className="relative h-60 overflow-hidden">
  <Image
    src={blog.image}
    alt={blog.title}
  width={600}
  height={400}
    className="
       w-full
    h-60
    object-cover
    group-hover:scale-105
    transition-transform
    duration-500
    "
  />
</div>

          {/* Content */}
          <div className="p-6">

            <div className="flex items-center gap-2 text-xs font-medium text-[#78BE43] uppercase tracking-wider">
              Health Blog
            </div>

            <h3
              className="
                mt-3
                text-xl
                font-bold
                text-slate-900
                line-clamp-2
                group-hover:text-[#0A4F8A]
                transition-colors
              "
            >
              {blog.title}
            </h3>

            <p
              className="
                mt-3
                text-slate-600
                text-sm
                leading-6
                line-clamp-3
              "
            >
              {blog.description}
            </p>

            <div
              className="
                mt-6
                flex
                items-center
                gap-2
                text-[#0A4F8A]
                font-semibold
              "
            >
              Read Article
              <FaArrowRight
                className="
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </div>

          </div>

        </Link>
      ))}

    </div>
{/* View All Button */}
<div className="mt-12 flex justify-center">
  <Link
    href="/blogs"
    className="
      inline-flex
      items-center
      gap-3
      bg-[#0A4F8A]
      text-white
      px-8
      py-4
      rounded-full
      font-semibold
      hover:bg-[#083d6a]
      transition-all
      duration-300
      shadow-lg
      hover:shadow-xl
    "
  >
    View All Articles
    <FaArrowRight />
  </Link>
</div>
  </div>
</section>
  )
}
