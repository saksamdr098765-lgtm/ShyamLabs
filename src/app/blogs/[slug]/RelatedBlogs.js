import React from 'react'

export default function RelatedBlogs({blog}) {
  return   blog.relatedBlogs?.length > 0 && (
    <section className="py-16 bg-slate-50">

      <div className="max-w-6xl mx-auto px-5">

        <h2 className="text-3xl font-black">
          Related Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

          {blog.relatedBlogs.map((item) => (

            <a
              href={`/blogs/${item.slug}`}
              key={item.slug}
              className="
                bg-white
                rounded-3xl
                border
                p-6
                hover:shadow-lg
                transition
              "
            >
              <h3 className="font-bold">
                {item.title}
              </h3>

              <span className="mt-4 inline-block text-[#0A4F8A]">
                Read Article →
              </span>

            </a>

          ))}

        </div>

      </div>

    </section>
  )

}
