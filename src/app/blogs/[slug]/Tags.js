import React from 'react'

export default function Tags({blog}) {
  return blog.tags?.length > 0 && (
    <section className="py-10">

      <div className="max-w-6xl mx-auto px-5">

        <h2 className="text-2xl font-bold">
          Related Topics
        </h2>

        <div className="flex flex-wrap gap-3 mt-6">

          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="
                px-4
                py-2
                rounded-full
                bg-slate-100
                text-sm
              "
            >
              {tag}
            </span>
          ))}

        </div>

      </div>

    </section>
  )

}
